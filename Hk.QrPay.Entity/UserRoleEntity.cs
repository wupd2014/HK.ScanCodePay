/*******************************************************************************
* Copyright (C) Hk.QrPay.Com
* 
* Author: dj.wong
* Create Date: 09/04/2015 11:47:14
* Description: Automated building by service@Hk.QrPay.com 
* 
* Revision History:
* Date         Author               Description
*
*********************************************************************************/

using Hk.QrPay.Entity.Base;
using Newtonsoft.Json;

namespace Hk.QrPay.Entity
{
    /// <summary>
    /// 用户角色关系实体
    /// </summary>
    public class UserRoleEntity : BaseEntity
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        public int UserId { get; set; }

        /// <summary>
        /// 角色ID
        /// </summary>
        public int RoleId { get; set; }

        /// <summary>
        /// 所属用户
        /// </summary>
        [JsonIgnore]
        public virtual UserEntity User { get; set; }
    }
}
