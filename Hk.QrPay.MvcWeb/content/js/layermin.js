!function(n,t){"use strict";var r,e,f={getPath:function(){var n=document.scripts,t=n[n.length-1],i=t.src;if(!t.getAttribute("merge"))return i.substring(0,i.lastIndexOf("/")+1)}(),enter:function(n){13===n.keyCode&&n.preventDefault()},config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},u={v:"2.0",ie6:!!n.ActiveXObject&&!n.XMLHttpRequest,index:0,path:f.getPath,config:function(n,t){var i=0;return n=n||{},u.cache=f.config=r.extend(f.config,n),u.path=f.config.path||u.path,"string"==typeof n.extend&&(n.extend=[n.extend]),u.use("skin/layer.css",n.extend&&n.extend.length>0?function e(){var r=n.extend;u.use(r[r[i]?i:i-1],i<r.length?function(){return++i,e}():t)}():t),this},use:function(n,t,i){var s=r("head")[0],n=n.replace(/\s/g,""),f=/\.css$/.test(n),e=document.createElement(f?"link":"script"),o="layui_layer_"+n.replace(/\.|\//g,"");if(u.path)return(f&&(e.rel="stylesheet"),e[f?"href":"src"]=/^http:\/\//.test(n)?n:u.path+n,e.id=o,r("#"+o)[0]||s.appendChild(e),function h(){(f?1989===parseInt(r("#"+o).css("width")):u[i||o])?function(){t&&t();try{f||s.removeChild(e)}catch(n){}}():setTimeout(h,100)}(),this)},ready:function(n,t){var i="function"==typeof n;return i&&(t=n),u.config(r.extend(f.config,function(){return i?{}:{path:n}}()),t),this},alert:function(n,t,i){var f="function"==typeof t;return f&&(i=t),u.open(r.extend({content:n,yes:i},f?{}:t))},confirm:function(n,t,i,e){var o="function"==typeof t;return o&&(e=i,i=t),u.open(r.extend({content:n,btn:f.btn,yes:i,cancel:e},o?{}:t))},msg:function(n,e,o){var c="function"==typeof e,s=f.config.skin,h=(s?s+" "+s+"-msg":"")||"layui-layer-msg",l=i.anim.length-1;return c&&(o=e),u.open(r.extend({content:n,time:3e3,shade:!1,skin:h,title:!1,closeBtn:!1,btn:!1,end:o},c&&!f.config.skin?{skin:h+" layui-layer-hui",shift:l}:function(){return e=e||{},(-1===e.icon||e.icon===t&&!f.config.skin)&&(e.skin=h+" "+(e.skin||"layui-layer-hui")),e}()))},load:function(n,t){return u.open(r.extend({type:3,icon:n||0,shade:.01},t))},tips:function(n,t,i){return u.open(r.extend({type:4,content:[n,t],closeBtn:!1,time:3e3,maxWidth:210},i))}},o=function(n){var t=this;t.index=++u.index;t.config=r.extend({},t.config,f.config,n);t.creat()},i;o.pt=o.prototype;i=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];i.anim=["layui-anim","layui-anim-01","layui-anim-02","layui-anim-03","layui-anim-04","layui-anim-05","layui-anim-06"];o.pt.config={type:0,shade:.3,fix:!0,move:i[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2};o.pt.vessel=function(n,t){var e=this,u=e.index,r=e.config,o=r.zIndex+u,s="object"==typeof r.title,c=r.maxmin&&(1===r.type||2===r.type),h=r.title?'<div class="layui-layer-title" style="'+(s?r.title[1]:"")+'">'+(s?r.title[0]:r.title)+"<\/div>":"";return r.zIndex=o,t([r.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+u+'" times="'+u+'" style="'+("z-index:"+(o-1)+"; background-color:"+(r.shade[1]||"#000")+"; opacity:"+(r.shade[0]||r.shade)+"; filter:alpha(opacity="+(100*r.shade[0]||100*r.shade)+");")+'"><\/div>':"",'<div class="'+i[0]+" "+(i.anim[r.shift]||"")+(" layui-layer-"+f.type[r.type])+(0!=r.type&&2!=r.type||r.shade?"":" layui-layer-border")+" "+(r.skin||"")+'" id="'+i[0]+u+'" type="'+f.type[r.type]+'" times="'+u+'" showtime="'+r.time+'" conType="'+(n?"object":"string")+'" style="z-index: '+o+"; width:"+r.area[0]+";height:"+r.area[1]+(r.fix?"":";position:absolute;")+'">'+(n&&2!=r.type?"":h)+'<div class="layui-layer-content'+(0==r.type&&-1!==r.icon?" layui-layer-padding":"")+(3==r.type?" layui-layer-loading"+r.icon:"")+'">'+(0==r.type&&-1!==r.icon?'<i class="layui-layer-ico layui-layer-ico'+r.icon+'"><\/i>':"")+(1==r.type&&n?"":r.content||"")+'<\/div><span class="layui-layer-setwin">'+function(){var n=c?'<a class="layui-layer-min" href="javascript:;"><cite><\/cite><\/a><a class="layui-layer-ico layui-layer-max" href="javascript:;"><\/a>':"";return r.closeBtn&&(n+='<a class="layui-layer-ico '+i[7]+" "+i[7]+(r.title?r.closeBtn:4==r.type?"1":"2")+'" href="javascript:;"><\/a>'),n}()+"<\/span>"+(r.btn?function(){var t="",n,u;for("string"==typeof r.btn&&(r.btn=[r.btn]),n=0,u=r.btn.length;u>n;n++)t+='<a class="'+i[6]+n+'">'+r.btn[n]+"<\/a>";return'<div class="'+i[6]+'">'+t+"<\/div>"}():"")+"<\/div>"],h),e};o.pt.creat=function(){var t=this,n=t.config,o=t.index,s=n.content,h="object"==typeof s;switch("string"==typeof n.area&&(n.area="auto"===n.area?["",""]:[n.area,""]),n.type){case 0:n.btn="btn"in n?n.btn:f.btn[0];u.closeAll("dialog");break;case 2:s=n.content=h?n.content:[n.content||"http://sentsin.com?from=layer","auto"];n.content='<iframe scrolling="'+(n.content[1]||"auto")+'" allowtransparency="true" id="'+i[4]+o+'" name="'+i[4]+o+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+n.content[0]+'"><\/iframe>';break;case 3:n.title=!1;n.closeBtn=!1;-1===n.icon&&0===n.icon;u.closeAll("loading");break;case 4:h||(n.content=[n.content,"body"]);n.follow=n.content[1];n.content=n.content[0]+'<i class="layui-layer-TipsG"><\/i>';n.title=!1;n.shade=!1;n.fix=!1;n.tips="object"==typeof n.tips?n.tips:[n.tips,!0];n.tipsMore||u.closeAll("tips")}t.vessel(h,function(u,f){r("body").append(u[0]);h?function(){2==n.type||4==n.type?function(){r("body").append(u[1])}():function(){s.parents("."+i[0])[0]||(s.show().addClass("layui-layer-wrap").wrap(u[1]),r("#"+i[0]+o).find("."+i[5]).before(f))}()}():r("body").append(u[1]);t.layero=r("#"+i[0]+o);n.scrollbar||i.html.css("overflow","hidden").attr("layer-full",o)}).auto(o);2==n.type&&u.ie6&&t.layero.find("iframe").attr("src",s[0]);r(document).off("keydown",f.enter).on("keydown",f.enter);4==n.type?t.tips():t.offset();n.fix&&e.on("resize",function(){t.offset();(/^\d+%$/.test(n.area[0])||/^\d+%$/.test(n.area[1]))&&t.auto(o);4==n.type&&t.tips()});n.time<=0||setTimeout(function(){u.close(t.index)},n.time);t.move().callback()};o.pt.auto=function(n){function f(n){n=t.find(n);n.height(o[1]-h-c-2*(0|parseFloat(n.css("padding"))))}var s=this,u=s.config,t=r("#"+i[0]+n);""===u.area[0]&&u.maxWidth>0&&(/MSIE 7/.test(navigator.userAgent)&&u.btn&&t.width(t.innerWidth()),t.outerWidth()>u.maxWidth&&t.width(u.maxWidth));var o=[t.innerWidth(),t.innerHeight()],h=t.find(i[1]).outerHeight()||0,c=t.find("."+i[6]).outerHeight()||0;switch(u.type){case 2:f("iframe");break;default:""===u.area[1]?u.fix&&o[1]>=e.height()&&(o[1]=e.height(),f("."+i[5])):f("."+i[5])}return s};o.pt.offset=function(){var n=this,t=n.config,r=n.layero,i=[r.outerWidth(),r.outerHeight()],u="object"==typeof t.offset;n.offsetTop=(e.height()-i[1])/2;n.offsetLeft=(e.width()-i[0])/2;u?(n.offsetTop=t.offset[0],n.offsetLeft=t.offset[1]||n.offsetLeft):"auto"!==t.offset&&(n.offsetTop=t.offset,"rb"===t.offset&&(n.offsetTop=e.height()-i[1],n.offsetLeft=e.width()-i[0]));t.fix||(n.offsetTop=/%$/.test(n.offsetTop)?e.height()*parseFloat(n.offsetTop)/100:parseFloat(n.offsetTop),n.offsetLeft=/%$/.test(n.offsetLeft)?e.width()*parseFloat(n.offsetLeft)/100:parseFloat(n.offsetLeft),n.offsetTop+=e.scrollTop(),n.offsetLeft+=e.scrollLeft());r.css({top:n.offsetTop,left:n.offsetLeft})};o.pt.tips=function(){var c=this,t=c.config,s=c.layero,u=[s.outerWidth(),s.outerHeight()],f=r(t.follow);f[0]||(f=r("body"));var n={width:f.outerWidth(),height:f.outerHeight(),top:f.offset().top,left:f.offset().left},o=s.find(".layui-layer-TipsG"),h=t.tips[0];t.tips[1]||o.remove();n.autoLeft=function(){n.left+u[0]-e.width()>0?(n.tipLeft=n.left+n.width-u[0],o.css({right:12,left:"auto"})):n.tipLeft=n.left};n.where=[function(){n.autoLeft();n.tipTop=n.top-u[1]-10;o.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){n.tipLeft=n.left+n.width+10;n.tipTop=n.top;o.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){n.autoLeft();n.tipTop=n.top+n.height+10;o.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){n.tipLeft=n.left-u[0]-10;n.tipTop=n.top;o.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}];n.where[h-1]();1===h?n.top-(e.scrollTop()+u[1]+16)<0&&n.where[2]():2===h?e.width()-(n.left+n.width+u[0]+16)>0||n.where[3]():3===h?n.top-e.scrollTop()+n.height+u[1]+16-e.height()>0&&n.where[0]():4===h&&u[0]+16-n.left>0&&n.where[1]();s.find("."+i[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""});s.css({left:n.tipLeft,top:n.tipTop})};o.pt.move=function(){var u=this,t=u.config,n={setY:0,moveLayer:function(){var t=n.layero,r=parseInt(t.css("margin-left")),i=parseInt(n.move.css("left"));0===r||(i-=r);"fixed"!==t.css("position")&&(i-=t.parent().offset().left,n.setY=0);t.css({left:i,top:parseInt(n.move.css("top"))-n.setY})}},f=u.layero.find(t.move);return t.move&&f.attr("move","ok"),f.css({cursor:t.move?"move":"auto"}),r(t.move).on("mousedown",function(u){if(u.preventDefault(),"ok"===r(this).attr("move")){n.ismove=!0;n.layero=r(this).parents("."+i[0]);var f=n.layero.offset().left,o=n.layero.offset().top,s=n.layero.outerWidth()-6,h=n.layero.outerHeight()-6;r("#layui-layer-moves")[0]||r("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:'+f+"px; top:"+o+"px; width:"+s+"px; height:"+h+'px; z-index:2147483584"><\/div>');n.move=r("#layui-layer-moves");t.moveType&&n.move.css({visibility:"hidden"});n.moveX=u.pageX-n.move.position().left;n.moveY=u.pageY-n.move.position().top;"fixed"!==n.layero.css("position")||(n.setY=e.scrollTop())}}),r(document).mousemove(function(i){var r,u,f,o;n.ismove&&(r=i.pageX-n.moveX,u=i.pageY-n.moveY,(i.preventDefault(),t.moveOut)||(n.setY=e.scrollTop(),f=e.width()-n.move.outerWidth(),o=n.setY,0>r&&(r=0),r>f&&(r=f),o>u&&(u=o),u>e.height()-n.move.outerHeight()+n.setY&&(u=e.height()-n.move.outerHeight()+n.setY)),n.move.css({left:r,top:u}),t.moveType&&n.moveLayer(),r=u=f=o=null)}).mouseup(function(){try{n.ismove&&(n.moveLayer(),n.move.remove(),t.moveEnd&&t.moveEnd());n.ismove=!1}catch(i){n.ismove=!1}}),u};o.pt.callback=function(){function o(){var i=n.cancel&&n.cancel(t.index);i===!1||u.close(t.index)}var t=this,e=t.layero,n=t.config;t.openLayer();n.success&&(2==n.type?e.find("iframe")[0].onload=function(){this.className="";n.success(e,t.index)}:n.success(e,t.index));u.ie6&&t.IE6(e);e.find("."+i[6]).children("a").on("click",function(){var i=r(this).index();n["btn"+(i+1)]&&n["btn"+(i+1)](t.index,e);0===i?n.yes?n.yes(t.index,e):u.close(t.index):1===i?o():n["btn"+(i+1)]||u.close(t.index)});e.find("."+i[7]).on("click",o);n.shadeClose&&r("#layui-layer-shade"+t.index).on("click",function(){u.close(t.index)});e.find(".layui-layer-min").on("click",function(){u.min(t.index,n);n.min&&n.min(e)});e.find(".layui-layer-max").on("click",function(){r(this).hasClass("layui-layer-maxmin")?(u.restore(t.index),n.restore&&n.restore(e)):(u.full(t.index,n),n.full&&n.full(e))});n.end&&(f.end[t.index]=n.end)};f.reselect=function(){r.each(r("select"),function(){var n=r(this);n.parents("."+i[0])[0]||1==n.attr("layer")&&r("."+i[0]).length<1&&n.removeAttr("layer").show();n=null})};o.pt.IE6=function(n){function t(){n.css({top:f+(u.config.fix?e.scrollTop():0)})}var u=this,f=n.offset().top;t();e.scroll(t);r("select").each(function(){var n=r(this);n.parents("."+i[0])[0]||"none"===n.css("display")||n.attr({layer:"1"}).hide();n=null})};o.pt.openLayer=function(){var n=this;u.zIndex=n.config.zIndex;u.setTop=function(n){var t=function(){u.zIndex++;n.css("z-index",u.zIndex+1)};return u.zIndex=parseInt(n[0].style.zIndex),n.on("mousedown",t),u.zIndex}};f.record=function(n){var t=[n.outerWidth(),n.outerHeight(),n.position().top,n.position().left+parseFloat(n.css("margin-left"))];n.find(".layui-layer-max").addClass("layui-layer-maxmin");n.attr({area:t})};f.rescollbar=function(n){i.html.attr("layer-full")==n&&(i.html[0].style.removeProperty?i.html[0].style.removeProperty("overflow"):i.html[0].style.removeAttribute("overflow"),i.html.removeAttr("layer-full"))};u.getChildFrame=function(n,t){return t=t||r("."+i[4]).attr("times"),r("#"+i[0]+t).find("iframe").contents().find(n)};u.getFrameIndex=function(n){return r("#"+n).parents("."+i[4]).attr("times")};u.iframeAuto=function(n){if(n){var f=u.getChildFrame("body",n).outerHeight(),t=r("#"+i[0]+n),e=t.find(i[1]).outerHeight()||0,o=t.find("."+i[6]).outerHeight()||0;t.css({height:f+e+o});t.find("iframe").css({height:f})}};u.iframeSrc=function(n,t){r("#"+i[0]+n).find("iframe").attr("src",t)};u.style=function(n,t){var u=r("#"+i[0]+n),e=u.attr("type"),o=u.find(i[1]).outerHeight()||0,s=u.find("."+i[6]).outerHeight()||0;(e===f.type[1]||e===f.type[2])&&(u.css(t),e===f.type[2]&&u.find("iframe").css({height:parseFloat(t.height)-o-s}))};u.min=function(n){var t=r("#"+i[0]+n),e=t.find(i[1]).outerHeight()||0;f.record(t);u.style(n,{width:180,height:e,overflow:"hidden"});t.find(".layui-layer-min").hide();"page"===t.attr("type")&&t.find(i[4]).hide();f.rescollbar(n)};u.restore=function(n){var t=r("#"+i[0]+n),e=t.attr("area").split(",");t.attr("type");u.style(n,{width:parseFloat(e[0]),height:parseFloat(e[1]),top:parseFloat(e[2]),left:parseFloat(e[3]),overflow:"visible"});t.find(".layui-layer-max").removeClass("layui-layer-maxmin");t.find(".layui-layer-min").show();"page"===t.attr("type")&&t.find(i[4]).show();f.rescollbar(n)};u.full=function(n){var o,t=r("#"+i[0]+n);f.record(t);i.html.attr("layer-full")||i.html.css("overflow","hidden").attr("layer-full",n);clearTimeout(o);o=setTimeout(function(){var i="fixed"===t.css("position");u.style(n,{top:i?0:e.scrollTop(),left:i?0:e.scrollLeft(),width:e.width(),height:e.height()});t.find(".layui-layer-min").hide()},100)};u.title=function(n,t){var f=r("#"+i[0]+(t||u.index)).find(i[1]);f.html(n)};u.close=function(n){var t=r("#"+i[0]+n),s=t.attr("type"),o,e;if(t[0]){if(s===f.type[1]&&"object"===t.attr("conType"))for(t.children(":not(."+i[5]+")").remove(),o=0;2>o;o++)t.find(".layui-layer-wrap").unwrap().hide();else{if(s===f.type[2])try{e=r("#"+i[4]+n)[0];e.contentWindow.document.write("");e.contentWindow.close();t.find("."+i[5])[0].removeChild(e)}catch(h){}t[0].innerHTML="";t.remove()}r("#layui-layer-moves, #layui-layer-shade"+n).remove();u.ie6&&f.reselect();f.rescollbar(n);r(document).off("keydown",f.enter);"function"==typeof f.end[n]&&f.end[n]();delete f.end[n]}};u.closeAll=function(n){r.each(r("."+i[0]),function(){var t=r(this),i=n?t.attr("type")===n:1;i&&u.close(t.attr("times"));i=null})};f.run=function(){r=jQuery;e=r(n);i.html=r("html");u.open=function(n){var t=new o(n);return t.index}};"function"==typeof define?define(function(){return f.run(),u}):function(){n.layer=u;f.run();u.use("skin/layer.css")}()}(window)