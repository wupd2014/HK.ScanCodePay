/*******************************************************************************
* Copyright (C) Hk.QrPay.Com
* 
* Author: dj.wong
* Create Date: 2015/8/21
* Description: Automated building by service@Hk.QrPay.com 
* 
* Revision History:
* Date         Author               Description
*
*********************************************************************************/
using System.Web.Optimization;

namespace Hk.QrPay.Web
{
    public class JuCheapScriptBundle : ScriptBundle
    {
        readonly JavascriptObfuscator _jso = new JavascriptObfuscator();

        public JuCheapScriptBundle(string virtrualPath)
            : base(virtrualPath)
        {
            Transforms.Add(_jso);
        }
    }
}