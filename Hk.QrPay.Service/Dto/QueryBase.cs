/*******************************************************************************
* Copyright (C) Hk.QrPay.Com
* 
* Author: dj.wong service@Hk.QrPay.com 
* Create Date: 2015/8/6 9:27:09
* Description: Automated building by service@Hk.QrPay.com 
* 
* Revision History:
* Date         Author               Description
*
*********************************************************************************/

namespace Hk.QrPay.Service.Dto
{
    /// <summary>
    /// 基础查询类
    /// </summary>
    public class QueryBase
    {
        /// <summary>
        /// 每页显示数量
        /// </summary>
        public int Length { get; set; }

        /// <summary>
        /// 开始记录数
        /// </summary>
        public int Start { get; set; }

        /// <summary>
        /// 搜索关键字
        /// </summary>
        public string SearchKey { get; set; }

        /// <summary>
        /// 次数
        /// </summary>
        public int Draw { get; set; }
    }
}
