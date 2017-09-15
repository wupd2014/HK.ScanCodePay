using System;
using System.IO;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Hk.QrPay.Service;
using Hk.QrPay.Service.Data;
using Hk.QrPay.Web.Jobs;

namespace Hk.QrPay.Web
{
    public class MvcApplication : HttpApplication
    {
        /// <summary>
        /// Application_Start
        /// </summary>
        protected void Application_Start()
        {
            //MVC相关
            AreaRegistration.RegisterAllAreas();

            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            ////DI 构造函数注入
            //new IocInitializeConstructor().Initialize();
            //属性注入
            new IocInitializeProperties().Initialize();

            //数据库基础数据初始化
            DbInitService.Init();

            //定时任务
            new EmailJobScheduler().Start();


            //AutoMapper
            AutoMapperConfiguration.Config();
            AutoMapperConfiguration.ConfigExt();
        }
    }
}
