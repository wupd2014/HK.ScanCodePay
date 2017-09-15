/*******************************************************************************
* Copyright (C) Hk.QrPay.Com
* 
* Author: dj.wong
* Create Date: 2015/8/21
* Description: Automated building by service@Hk.QrPay.com 
* 
* Revision History:
* Date         Author               Description
* 2017-08-02   dj.wong
*********************************************************************************/
using System.Web.Optimization;

namespace Hk.QrPay.Web
{
    /// <summary>
    /// JavascriptObfuscator
    /// </summary>
    public class JavascriptObfuscator : IBundleTransform
    {
        public void Process(BundleContext context, BundleResponse response)
        {
            var p = new ECMAScriptPacker(ECMAScriptPacker.PackerEncoding.Normal, true, false);
            response.Content = p.Pack(response.Content);
        }
    }
}