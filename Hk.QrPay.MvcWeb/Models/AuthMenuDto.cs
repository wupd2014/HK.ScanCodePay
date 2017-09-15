using System.Collections.Generic;
namespace Hk.QrPay.Web.Models
{
    public class AuthMenuDto
    {
        public List<int> RoleIds { get; set; }

        public List<int> MenuIds { get; set; }
    }
}