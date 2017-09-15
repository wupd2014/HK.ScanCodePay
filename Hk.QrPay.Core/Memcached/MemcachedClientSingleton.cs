/*******************************************************************************
* Copyright (C) Hk.QrPay.Com
* 
* Author: dj.wong
* Create Date: 2016/2/22
* Description: Automated building by service@Hk.QrPay.com 
* 
* Revision History:
* Date         Author               Description
*
*********************************************************************************/
using Memcached.ClientLibrary;

namespace Hk.QrPay.Core.Memcached
{
    /// <summary>
    /// MemcachedClient单利模式
    /// </summary>
    public class MemcachedClientSingleton : Singleton<MemcachedClient>
    {
        private MemcachedClientSingleton()
        {
            
        }
    }
}
