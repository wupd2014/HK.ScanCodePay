﻿/*******************************************************************************
* Copyright (C) Hk.QrPay.Com
* 
* Author: dj.wong
* Create Date: 2015/8/21
* Description: Automated building by service@jucheap.com 
* 
* Revision History:
* Date         Author               Description
*
*********************************************************************************/
using System.Web.Mvc;

namespace Hk.QrPay.Web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new CommonExceptionFilter());
            filters.Add(new AuthFilter());
        }
    }
}