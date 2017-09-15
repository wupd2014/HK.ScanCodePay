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
using System.Collections.Generic;
using Hk.QrPay.Entity.Base;

namespace Hk.QrPay.Entity
{
    /// <summary>
    /// 角色菜单关系实体
    /// </summary>
    public class RoleMenuEntity : BaseEntity
    {

        /// <summary>
        /// 角色ID
        /// </summary>
        public int RoleId { get; set; }

        /// <summary>
        /// 菜单ID
        /// </summary>
        public int MenuId { get; set; }
    }
}
