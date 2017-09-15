using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web.Mvc;
using Hk.QrPay.Core.Extentions;
using Hk.QrPay.Service.Dto;
using Hk.QrPay.Service.Enum;
using Hk.QrPay.Web.Models;

namespace Hk.QrPay.Web.Areas.Adm.Controllers
{
    public class MenuController : AdmBaseController
    {

        #region Page
        // GET: Adm/Menu
        public ActionResult Index(int moudleId, int menuId, int btnId)
        {
            GetButtons(menuId);
            return View();
        }

        /// <summary>
        /// 添加
        /// </summary>
        /// <returns></returns>
        public ActionResult Add(int moudleId, int menuId, int btnId)
        {

            ViewBag.ParentMenu = menuService.Query(item => !item.IsDeleted && item.Type != MenuType.按钮, item => item.Id,
                false);


            return View();
        }

        public ActionResult Edit(int moudleId, int menuId, int btnId, int id)
        {
            ViewBag.ParentMenu = menuService.Query(item => !item.IsDeleted && item.Type != MenuType.按钮, item => item.Id,
               false);
            var model = menuService.GetOne(item => item.Id == id);
            return View(model);
        }

        #endregion

        #region Ajax

        [HttpPost]
        public ActionResult Add(string moudleId, string menuId, string btnId, MenuDto dto)
        {
            SetMenuType(ref dto);
            menuService.Add(dto);


            return RedirectToAction("Index", RouteData.Values);
        }


        [HttpPost]
        public ActionResult Edit(string moudleId, string menuId, string btnId, MenuDto dto)
        {
            SetMenuType(ref dto);
            menuService.Update(dto);
            return RedirectToAction("Index", RouteData.Values);
        }


        [HttpPost]
        public JsonResult Delete(string moudleId, string menuId, string btnId, List<int> ids)
        {
            var res = new Result<string>();

            if (ids != null && ids.Any())
                res.flag = menuService.Delete(item => ids.Contains(item.Id));

            return Json(res, JsonRequestBehavior.AllowGet);
        }



        [HttpGet]
        public JsonResult GetList(string moudleId, string menuId, string btnId, string id)
        {
            //var parentId = id.ToInt();
            //var list = menuService.Query(item => !item.IsDeleted && item.ParentId == parentId, item => item.Id);
            //var dtos = new List<MenuDto>();
            //list.ForEach(item =>
            //{
            //    var dto = new MenuDto
            //    {
            //        id = item.Id.ToString(),
            //        name = item.Name,
            //        type = "folder",
            //        additionalParameters = new AdditionalParameters {id = item.Id.ToString()}
            //    };
            //    dtos.Add(dto);
            //});

            //return Json(dtos, JsonRequestBehavior.AllowGet);

            var queryBase = new QueryBase
            {
                Start = Request["start"].ToInt(),
                Length = Request["length"].ToInt(),
                Draw = Request["draw"].ToInt(),
                SearchKey = Request["keywords"]
            };
            Expression<Func<MenuDto, bool>> exp = item => !item.IsDeleted;
            if (!queryBase.SearchKey.IsBlank())
                exp = exp.And(item => item.Name.Contains(queryBase.SearchKey));

            var dto = menuService.GetWithPages(queryBase, exp, Request["orderBy"], Request["orderDir"]);
            return Json(dto, JsonRequestBehavior.AllowGet);
        }

        void SetMenuType(ref MenuDto dto)
        {
            var parentId = dto.ParentId;
            var parent = menuService.GetOne(item => item.Id == parentId);
            if (parentId <= 0 || parent == null)
                dto.Type = MenuType.模块;
            else
            {
                switch (parent.Type)
                {
                    case MenuType.模块:
                        dto.Type = MenuType.菜单;
                        break;
                    case MenuType.菜单:
                        dto.Type = MenuType.按钮;
                        break;
                }
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="search">查询内容</param>
        /// <param name="nd"></param>
        /// <param name="rows">返回行数</param>
        /// <param name="page">查询第几页</param>
        /// <param name="sidx">排序字段</param>
        /// <param name="sord">排序类型，升序降序（asc,desc)</param>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetListWithPager()
        {
            //_search=false&nd=1505435637994&rows=15&page=1&sidx=&sord=asc
            string _search = Request["_search"];
            string nd = Request["nd"];
            int rows = Request["rows"].ToInt();
            int page = Request["page"].ToInt();
            string sidx = Request["sidx"];
            string sord = Request["sord"];
            string keywords = Request["keywords"];

            var queryBase = new QueryBase
            {
                Start = (page - 1) * rows,
                Length = rows,
                Draw = Request["draw"].ToInt(),
                SearchKey = keywords
            };
            Expression<Func<MenuDto, bool>> exp = item => !item.IsDeleted;
            if (!queryBase.SearchKey.IsBlank())
                exp = exp.And(item => item.Name.Contains(queryBase.SearchKey));

            string orderByStr = sidx.IsNotBlank() ? sidx : "Name";
            var dto = menuService.GetWithPages(queryBase, exp, orderByStr, sord);
            return Json(PageListDto<MenuDto>.GetMode(dto, rows, page), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetListWithKeywords(string keywords)
        {
            var queryBase = new QueryBase
            {
                Start = 0,
                Length = Int32.MaxValue,
                SearchKey = keywords
            };
            Expression<Func<MenuDto, bool>> exp = item => !item.IsDeleted;
            if (!queryBase.SearchKey.IsBlank())
                exp = exp.And(item => item.Name.Contains(queryBase.SearchKey));
            var dto = menuService.GetWithPages(queryBase, exp, "Name", "ASC");
            var returnObj = new { value = dto.data };
            return Json(returnObj, JsonRequestBehavior.AllowGet);

        }
        #endregion
    }

}