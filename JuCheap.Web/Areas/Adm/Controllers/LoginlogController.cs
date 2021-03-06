﻿using System;
using System.Linq.Expressions;
using System.Web.Mvc;
using Hk.QrPay.Core.Extentions;
using Hk.QrPay.Service.Abstracts;
using Hk.QrPay.Service.Dto;

namespace Hk.QrPay.Web.Areas.Adm.Controllers
{
    /// <summary>
    /// Login log
    /// </summary>
    public class LoginlogController : AdmBaseController
    {
        public ILoginLogService loginLogService { set; get; }

        #region Page

        // GET: Adm/LoginLog
        public ActionResult Index(string moudleId, string menuId, string btnId)
        {
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
            Expression<Func<LoginLogDto, bool>> exp = item => !item.IsDeleted;
            if (!queryBase.SearchKey.IsBlank())
                exp = exp.And(item => item.LoginName.Contains(queryBase.SearchKey));

            var dto = loginLogService.GetWithPages(queryBase, exp, Request["orderBy"], Request["orderDir"]);
            return Json(dto, JsonRequestBehavior.AllowGet);
        }

        #endregion
    }
}