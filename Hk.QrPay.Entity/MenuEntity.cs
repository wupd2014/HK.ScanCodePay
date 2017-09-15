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

namespace Hk.QrPay.Entity
{
    public class MenuEntity : BaseEntity
    {

        /// <summary>
        /// 上级ID
        /// </summary>
        public int ParentId { get; set; }

        /// <summary>
        /// 类型
        /// </summary>
        public byte Type { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// URL
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// 排序越大越靠后
        /// </summary>
        public int Order { get; set; }

        /// <summary>
        /// 执行的事件
        /// </summary>
        public string ExecuEvent { get; set; }
    }
}
