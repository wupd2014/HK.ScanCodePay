﻿/*******************************************************************************
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
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using Hk.QrPay.Entity;

namespace Hk.QrPay.Data.Config
{
    /// <summary>
    /// 用户表配置
    /// </summary>
    public class PageViewConfig : EntityTypeConfiguration<PageViewEntity>
    {
        public PageViewConfig()
        {
            ToTable("PageView");
            HasKey(item => item.Id);
            Property(item => item.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            
            Property(item => item.UserId);
            Property(item => item.LoginName).HasColumnType("varchar").HasMaxLength(20);
            Property(item => item.Url).HasColumnType("varchar").IsRequired().HasMaxLength(300);
        }
    }
}
