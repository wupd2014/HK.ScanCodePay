using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web.Mvc;
using Hk.QrPay.Core.Extentions;
using Hk.QrPay.Service.Abstracts;
using Hk.QrPay.Service.Dto;
using Hk.QrPay.Web.Models;

namespace Hk.QrPay.Web.Areas.Adm.Controllers
{
    /// <summary>
    /// role
    /// </summary>
    public class RoleController : AdmBaseController
    {
        public IRoleService roleService { set; get; }

        public IRoleMenuService roleMenuService { get; set; }

        #region Page

        // GET: Adm/Role
        public ActionResult Index(int moudleId, int menuId, int btnId)
        {
            GetButtons(menuId);
            return View();
        }


        public ActionResult Add(string moudleId, string menuId, string btnId)
        {
            return View();
        }


        public ActionResult Edit(int moudleId, int menuId, int btnId, int id)
        {
            var model = roleService.GetOne(item => item.Id == id);
            return View(model);
        }

        public ActionResult AuthMenus(int moudleId, int menuId, int btnId)
        {
            ViewBag.Menus = menuService.Query(item => !item.IsDeleted, item => item.Id, false);
            return View();
        }

        #endregion

        #region Ajax

        public JsonResult GetList(string moudleId, string menuId, string btnId)
        {
            var queryBase = new QueryBase
            {
                Start = Request["start"].ToInt(),
                Length = Request["length"].ToInt(),
                Draw = Request["draw"].ToInt(),
                SearchKey = Request["keywords"]
            };
            Expression<Func<RoleDto, bool>> exp = item => !item.IsDeleted;
            if (!queryBase.SearchKey.IsBlank())
                exp = exp.And(item => item.Name.Contains(queryBase.SearchKey));

            var dto = roleService.GetWithPages(queryBase, exp, Request["orderBy"], Request["orderDir"]);
            return Json(dto, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Add(int moudleId, int menuId, int btnId, RoleDto dto)
        {
            roleService.Add(dto);
            return RedirectToAction("Index", RouteData.Values);
        }

        [HttpPost]
        public ActionResult Edit(string moudleId, string menuId, string btnId, RoleDto dto)
        {
            roleService.Update(dto);
            return RedirectToAction("Index", RouteData.Values);
        }


        [HttpPost]
        public JsonResult Delete(string moudleId, string menuId, string btnId, List<int> ids)
        {
            var res = new Result<string>();

            if (ids != null && ids.Any())
                res.flag = roleService.Delete(item => ids.Contains(item.Id));

            return Json(res, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult AuthMenus(int moudleId, int menuId, int btnId, AuthMenuDto dto)
        {
            var res = new Result<int>();

            foreach (var roleId in dto.RoleIds)
            {
                roleMenuService.Delete(item => item.RoleId == roleId);
                var newRoleMenus = dto.MenuIds.Select(item => new RoleMenuDto { RoleId = roleId, MenuId = item }).ToList();
                roleMenuService.Add(newRoleMenus);
            }

            res.flag = true;

            return Json(res, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult GetRoleMenusByRoleId(int moudleId, int menuId, int btnId, int id)
        {
            var res = new Result<List<RoleMenuDto>>();
            var list = roleMenuService.Query(item => item.RoleId == id, item => item.Id, false);
            res.flag = true;
            res.data = list;
            return Json(res, JsonRequestBehavior.AllowGet);
        }
        /// <param name="search">查询内容</param>
        /// <param name="nd"></param>
        /// <param name="rows">返回行数</param>
        /// <param name="page">查询第几页</param>
        /// <param name="sidx">排序字段</param>
        /// <param name="sord">排序类型，升序降序（asc,desc)</param>
        /// <returns></returns>
        [HttpGet]
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
            Expression<Func<RoleDto, bool>> exp = item => !item.IsDeleted;
            if (!queryBase.SearchKey.IsBlank())
                exp = exp.And(item => item.Name.Contains(queryBase.SearchKey));

            string orderByStr = sidx.IsNotBlank() ? sidx : "Name";
            var dto = roleService.GetWithPages(queryBase, exp, orderByStr, sord);
            return Json(PageListDto<RoleDto>.GetMode(dto, rows, page), JsonRequestBehavior.AllowGet);
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
            Expression<Func<RoleDto, bool>> exp = item => !item.IsDeleted;
            if (!queryBase.SearchKey.IsBlank())
                exp = exp.And(item => item.Name.Contains(queryBase.SearchKey));
            var dto = roleService.GetWithPages(queryBase, exp, "Name", "ASC");
            var returnObj = new { value = dto.data };
            return Json(returnObj, JsonRequestBehavior.AllowGet);

        }
        #endregion
    }
}