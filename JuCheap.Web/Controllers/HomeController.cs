using System.Web.Mvc;

namespace Hk.QrPay.Web.Controllers
{
    /// <summary>
    /// home page
    /// </summary>
    [AllowAnonymous]
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
    }
}