using Hk.QrPay.Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hk.QrPay.Web.Models
{
    /// <summary>
    /// 返回表格控件需要的数据格式
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class PageListDto<T> where T : class
    {
        /// <summary>
        /// 总记录数
        /// </summary>
        public int records { get; set; }
        public List<T> rows { get; set; }
        /// <summary>
        /// 当前页索引
        /// </summary>
        public int page { get; set; }
        /// <summary>
        /// 页容量
        /// </summary>
        public int pagesize { get; set; }
        /// <summary>
        /// 页数
        /// </summary>
        public int total { get; set; }



        public static PageListDto<T> GetMode(ResultDto<T> dto, int pageSize, int pageIndex)
        {
            int to = dto.recordsTotal / pageSize;
            int total = dto.recordsTotal % pageSize == 0 ? to : to + 1;
            return new PageListDto<T>
            {
                records = dto.recordsTotal,
                rows = dto.data,
                pagesize = pageSize,
                page = pageIndex,
                total = total
            };
        }
    }
}