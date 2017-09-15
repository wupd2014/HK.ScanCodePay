! function (n) {
    n.fn.bsSuggest = function (n) {
        return "string" == typeof n && t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void 0 : t.init.apply(this, arguments)
    };
    var t = {
        init: function (t) {
            function e(t, i, r) {
                return i.is(":visible") ? void setTimeout(function () {
                    r.autoDropup && n(window).height() - t.offset().top < i.height() && t.offset().top > i.height() + n(window).scrollTop() ? i.parents(".input-group").addClass("dropup") : i.parents(".input-group.dropup").removeClass("dropup")
                }, 100) : ("left" === r.listAlign ? i.css({
                    left: t.siblings("div").width() - t.parent().width(),
                    right: "auto"
                }) : "right" === r.listAlign && i.css({
                    left: "auto",
                    right: "0"
                }), r.autoMinWidth === !1 ? i.css({
                    "min-width": t.parent().width()
                }) : i.css("width", "auto"), t)
            }

            function o(n, t) {
                var r, u, i;
                return -1 === t.indexId && !t.idField || t.multiWord ? n : (r = n.css("background-color").replace(/ /g, "").split(",", 3).join(","), u = t.inputBgColor || "rgba(255,255,255,0.1)", i = t.inputWarnColor || "rgba(255,255,0,0.1)", !n.val() || n.attr("data-id") ? n.css("background", u) : (-1 === i.indexOf(r) && (n.trigger("onUnsetSelectValue"), n.css("background", i)), n))
            }

            function a(n, t) {
                var u, r, f = n.parent().find("tbody tr." + i.listHoverCSS);
                f.length > 0 && (u = (f.index() + 3) * f.height(), r = Number(t.css("max-height").replace("px", "")), t.scrollTop(u > r || t.scrollTop() > r ? u - r : 0))
            }

            function r(n, t) {
                n = n || $dropdownMenu;
                t = t || i;
                n.find("tr." + t.listHoverCSS).removeClass(t.listHoverCSS)
            }

            function k(t) {
                var r = n(t),
                    u = r.parent(".input-group").find("ul.dropdown-menu"),
                    f = r.data("bsSuggest");
                return 0 === u.length ? !1 : f ? !1 : (r.data("bsSuggest", {
                    target: t,
                    options: i
                }), !0)
            }

            function f(t, r, u, f) {
                var e, w, o, s, l, a, y, c = {
                    value: []
                };
                if (t = t || "", f = f || i, f.url) l = -1 !== f.url.indexOf("?") ? "&" : "?", a = f.jsonp ? [f.url + t, l, f.jsonp, "=?"].join("") : f.url + t, n.ajax({
                    type: "GET",
                    url: a,
                    dataType: "json",
                    timeout: 3e3
                }).done(function (n) {
                    u(r, n, f);
                    r.trigger("onDataRequestSuccess", n);
                    "firstByUrl" === i.getDataMethod && (i.data = n, i.url = null)
                }).fail(p);
                else {
                    if (e = f.data, w = v(e))
                        if (t) {
                            for (y = e.value.length, o = 0; y > o; o++)
                                for (s in e.value[o])
                                    if (n.trim(e.value[o][s]) && (d(s, f) || h(s, f)) && (-1 !== e.value[o][s].toString().indexOf(t) || -1 !== t.indexOf(e.value[o][s]))) {
                                        c.value.push(e.value[o]);
                                        break
                                    }
                        } else c = e;
                    u(r, c, f)
                }
            }

            function s(n) {
                return validData = v(n)
            }

            function v(n) {
                var t = !0,
                    i;
                for (i in n)
                    if ("value" === i) {
                        t = !1;
                        break
                    }
                return t ? (p("返回数据格式错误!"), !1) : 0 === n.value.length ? !1 : n
            }

            function h(t, r) {
                return r = r || i, n.isArray(r.effectiveFields) && r.effectiveFields.length > 0 && -1 === n.inArray(t, r.effectiveFields) ? !1 : !0
            }

            function d(t, i) {
                return -1 !== n.inArray(t, i.searchFields) ? !0 : !1
            }

            function c(n, t, r) {
                var w, o, u, v, l, y, p, f = n.parent().find("ul.dropdown-menu"),
                    c = 0,
                    a = ['<table class="table table-condensed">'];
                if (r = r || i, t = s(t), t === !1 || 0 === (w = t.value.length)) return f.empty().hide(), n;
                if (r.showHeader) {
                    v = "<thead><tr>";
                    for (u in t.value[0]) h(u) !== !1 && (v += 0 === c ? "<th>" + (r.effectiveFieldsAlias[u] || u) + "(" + w + ")<\/th>" : "<th>" + (r.effectiveFieldsAlias[u] || u) + "<\/th>", c++);
                    v += "<\/tr><\/thead>";
                    a.push(v)
                }
                for (a.push("<tbody>"), o = 0; w > o; o++) {
                    c = 0;
                    l = "";
                    y = t.value[o][r.idField] || "";
                    p = t.value[o][r.keyField] || "";
                    for (u in t.value[o]) p || r.indexKey !== c || (p = t.value[o][u]), y || r.indexId !== c || (y = t.value[o][u]), c++, h(u) !== !1 && (l += '<td data-name="' + u + '">' + t.value[o][u] + "<\/td>");
                    l = '<tr data-index="' + o + '" data-id="' + y + '" data-key="' + p + '">' + l + "<\/tr>";
                    a.push(l)
                }
                return a.push("<\/tbody><\/table>"), f.html(a.join("")).show(), g(n, f, r), f.css("max-height") && Number(f.css("max-height").replace("px", "")) < Number(f.find("table:eq(0)").css("height").replace("px", "")) && Number(f.css("min-width").replace("px", "")) < Number(f.css("width").replace("px", "")) ? f.css("padding-right", "20px").find("table:eq(0)").css("margin-bottom", "20px") : f.css("padding-right", 0).find("table:eq(0)").css("margin-bottom", 0), e(n, f, r), n
            }

            function g(t, f, e) {
                f = f || $dropdownMenu;
                e = e || i;
                f.find("tbody tr").each(function () {
                    n(this).off("mouseenter").on("mouseenter", function () {
                        r(f, e);
                        n(this).addClass(e.listHoverCSS)
                    }).off("mousedown").on("mousedown", function () {
                        y(t, u(n(this)), e);
                        o(t, e)
                    })
                })
            }

            function u(n) {
                var t = {};
                return t.id = n.attr("data-id"), t.key = n.attr("data-key"), t
            }

            function y(n, t, i) {
                var r, u = t || {},
                    e = u.id || "",
                    f = u.key || "";
                i && i.multiWord ? (r = n.val().split(i.separator || " "), r[r.length - 1] = f, n.val(r.join(i.separator || " ")).focus()) : n.attr("data-id", e).focus().val(f);
                n.trigger("onSetSelectValue", u)
            }

            function p(n, t) {
                console.trace(n);
                t && console.trace(t)
            }
            var w = this,
                i = n.extend({
                    url: null,
                    jsonp: null,
                    data: {},
                    getDataMethod: "firstByUrl",
                    delayUntilKeyup: !1,
                    indexId: 0,
                    indexKey: 0,
                    idField: "",
                    keyField: "",
                    effectiveFields: [],
                    effectiveFieldsAlias: {},
                    searchFields: [],
                    showHeader: !1,
                    showBtn: !0,
                    allowNoKeyword: !0,
                    multiWord: !1,
                    separator: ",",
                    processData: s,
                    getData: f,
                    autoMinWidth: !1,
                    autoDropup: !1,
                    listAlign: "left",
                    inputBgColor: "",
                    inputWarnColor: "rgba(255,0,0,.1)",
                    listStyle: {
                        "padding-top": 0,
                        "max-height": "375px",
                        "max-width": "800px",
                        overflow: "auto",
                        width: "auto",
                        transition: "0.3s",
                        "-webkit-transition": "0.3s",
                        "-moz-transition": "0.3s",
                        "-o-transition": "0.3s"
                    },
                    listHoverStyle: "background: #07d; color:#fff",
                    listHoverCSS: "jhover",
                    keyLeft: 37,
                    keyUp: 38,
                    keyRight: 39,
                    keyDown: 40,
                    keyEnter: 13
                }, t),
                b, l;
            return (n.isFunction(i.processData) && (s = i.processData), n.isFunction(i.getData) && (f = i.getData), !t.showHeader && i.effectiveFields && i.effectiveFields.length > 1 && (i.showHeader = !0), "firstByUrl" === i.getDataMethod && i.url && !i.delayUntilKeyup) && (b = -1 !== t.url.indexOf("?") ? "&" : "?", l = t.jsonp ? [t.url, b, t.jsonp, "=?"].join("") : t.url, n.ajax({
                type: "GET",
                url: l,
                dataType: "json",
                timeout: 5e3
            }).done(function (t) {
                i.data = t;
                i.url = null;
                n(w).trigger("onDataRequestSuccess", t)
            }).fail(function (n, t) {
                console.error(l + " : " + t)
            })), n("head:eq(0)").append("<style>." + i.listHoverCSS + "{" + i.listHoverStyle + "}<\/style>"), w.each(function () {
                var h = n(this),
                    s = h.parents(".input-group:eq(0)").find("ul.dropdown-menu");
                return k(this) === !1 ? void console.warn("不是一个标准的 bootstrap 下拉式菜单:", this) : (i.showBtn || h.css("border-radius", "4px").parents(".input-group:eq(0)").css("width", "100%").find(".input-group-btn>.btn").hide(), h.removeClass("disabled").attr("disabled", !1).attr("autocomplete", "off"), s.css(i.listStyle), i.inputBgColor || (i.inputBgColor = h.css("background-color")), h.on("keydown", function (t) {
                    var f, e = "";
                    "none" !== s.css("display") && (f = s.find("." + i.listHoverCSS), e = "", t.keyCode === i.keyDown ? (0 === f.length ? e = u(s.find("table tbody tr:first").mouseover()) : 0 === f.next().length ? (r(s, i), n(this).val(n(this).attr("alt")).attr("data-id", "")) : (r(s, i), 0 !== f.next().length && (e = u(f.next().mouseover()))), a(h, s)) : t.keyCode === i.keyUp ? (0 === f.length ? e = u(s.find("table tbody tr:last").mouseover()) : 0 === f.prev().length ? (r(s, i), n(this).val(n(this).attr("alt")).attr("data-id", "")) : (r(s, i), 0 !== f.prev().length && (e = u(f.prev().mouseover()))), a(h, s)) : t.keyCode === i.keyEnter ? s.hide().empty() : n(this).attr("data-id", ""), e && "" !== e.key && y(n(this), e, i))
                }).on("keyup", function (r) {
                    var u, e;
                    return r.keyCode === i.keyDown || r.keyCode === i.keyUp || r.keyCode === i.keyEnter ? (n(this).val(n(this).val()), void o(h, i)) : (n(this).attr("data-id", ""), o(h, i), u = n(this).val(), void (("" === n.trim(u) || u !== n(this).attr("alt")) && (n(this).attr("alt", n(this).val()), t.multiWord && (e = u.split(i.separator || " "), u = e[e.length - 1]), (0 !== u.length || i.allowNoKeyword) && f(n.trim(u), h, c, i))))
                }).on("focus", function () {
                    e(h, s, i)
                }).on("blur", function () {
                    s.css("display", "")
                }).on("click", function () {
                    var r, t = n(this).val();
                    return "" !== n.trim(t) && t === n(this).attr("alt") && s.find("table tr").length ? s.show() : void ("none" === s.css("display") && (i.multiWord && (r = t.split(i.separator || " "), t = r[r.length - 1]), (0 !== t.length || i.allowNoKeyword) && f(n.trim(t), h, c, i)))
                }), h.parent().find("button:eq(0)").attr("data-toggle", "").on("click", function () {
                    var n;
                    "none" === s.css("display") ? (n = "block", i.url ? h.click().focus() : (c(h, i.data, i), e(h, s, i))) : n = "none";
                    s.css("display", n)
                }), void s.on("mouseenter", function () {
                    n(this).show()
                }).on("mouseleave", function () {
                    h.focus()
                }))
            })
        }, show: function () {
            var n = this.data("bsSuggest");
            return n && n.options && this.parent().find("ul.dropdown-menu").show(), this
        }, hide: function () {
            var n = this.data("bsSuggest");
            return n && n.options && this.parent().find("ul.dropdown-menu").css("display", ""), this
        }, disable: function () {
            return n(this).data("bsSuggest") ? void n(this).attr("disabled", !0).parent().find(".input-group-btn>.btn").addClass("disabled") : !1
        }, enable: function () {
            return n(this).data("bsSuggest") ? void n(this).attr("disabled", !1).parent().find(".input-group-btn>.btn").removeClass("disabled") : !1
        }, destroy: function () {
            n(this).off().removeData("bsSuggest").parent().find(".input-group-btn>.btn").off()
        }, version: function () {
            return "0.0.1"
        }
    }
}(window.jQuery),
function () {
    Date.prototype.format = function (n) {
        var i = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "H+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        },
            t;
        /(y+)/.test(n) && (n = n.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (t in i) i.hasOwnProperty(t) && new RegExp("(" + t + ")").test(n) && (n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? i[t] : ("00" + i[t]).substr(("" + i[t]).length)));
        return n
    };
    String.prototype.getDate = function () {
        var n = /\d{13}/.exec(this),
            t = new Date(parseInt(n));
        return t.format("yyyy-MM-dd HH:mm:ss")
    };
    String.prototype.getShortDate = function () {
        var n = /\d{13}/.exec(this),
            t = new Date(parseInt(n));
        return t.format("yyyy-MM-dd")
    }
}();
var XPage = {
    DelData: function (n) {
        var t = JucheapGrid.GetDataTableDeleteData();
        t.Len > 0 && t.Data.length > 0 ? parent.layer.confirm("确认要删除这" + t.Len + "条数据？", {
            btn: ["确认", "取消"]
        }, function () {
            var i = $("#btnDel");
            i.button("loading");
            $.ajax({
                url: n,
                type: "POST",
                dataType: "json",
                data: JSON.stringify({
                    ids: t.Data
                }),
                contentType: "application/json, charset=utf-8",
                success: function (n) {
                    i.button("reset");
                    n.flag ? (parent.layer.msg("删除成功"), $("#table_list").trigger("reloadGrid")) : parent.layer.msg("删除失败：" + n.msg)
                }
            })
        }, function () { }) : parent.layer.msg("请选择要删除的数据！")
    }, GoTo: function (n, t) {
        $(n).button("loading");
        window.location.href = t
    }, Search: function (n) {
        var t = $("#table_list").jqGrid("getGridParam", "postData");
        $.extend(t, n);
        $("#table_list").setGridParam({
            search: !0
        }).trigger("reloadGrid", [{
            page: 1
        }])
    }, DoPost: function (n, t, i, r, u) {
        var f = n != null,
            e;
        f && $(n).button("loading");
        e = $.ajax({
            url: t,
            type: "POST",
            data: i,
            dataType: "JSON",
            success: function (t) {
                f && $(n).button("reset");
                t.flag ? r == null || typeof r == "undefined" ? parent.layer.msg("操作成功") : r.call(this, t) : u == null || typeof u == "undefined" ? parent.layer.msg("操作失败：" + t.msg) : u.call(this, t)
            }, complete: function (t, i) {
                f && $(n).button("reset");
                i === "timeout" && (e.abort(), parent.layer.msg("请求超时，请刷新页面重试"));
                i === "error" && (e.abort(), parent.layer.msg("请求失败，请刷新页面重试"))
            }
        })
    }, AddCondition: function () {
        var t = $("#panel-condition"),
            n = $('<div class="row">' + t.find(".row:first").html() + "<\/div>");
        n.find(".date").removeClass("date");
        n.find(".input-group-addon").addClass("hidden");
        n.appendTo(t)
    }, DelCondition: function (n) {
        $("#panel-condition .row").length > 1 && $(n).parent().parent().parent().parent().remove()
    }, InitCondition: function (n) {
        for (var f = $("#panel-condition .row select[name='FieldName']"), r = $("#" + n), e = r.jqGrid("getGridParam", "colNames"), o = r.jqGrid("getGridParam", "colModel"), u = [], i, t = 0; i = o[t]; t++) i.search && u.push(['<option value="', i.name, '" data-type="', i.dataType, '">', e[t], "<\/option>"].join(""));
        f.html(u.join(""));
        $("#btnAddCondition").bind("click", this.AddCondition);
        $("#btnAdvanceSearch").bind("click", n, this.AdvanceSearch)
    }, ChangeControler: function (n) {
        var i = $(n).parent().parent(),
            t = i.find("input[name='FieldData']");
        $(n).find("option:selected").data("type") === "date" ? (t.prev().removeClass("hidden"), t.parent().addClass("date"), i.find(".input-group.date").datepicker({
            format: "yyyy-mm-dd",
            todayBtn: "linked",
            keyboardNavigation: !1,
            forceParse: !1,
            calendarWeeks: !0,
            autoclose: !0
        })) : (t.prev().addClass("hidden"), i.find(".input-group.date").datepicker("remove"), t.parent().removeClass("date"))
    }, AdvanceSearch: function (n) {
        var t = {
            GroupOperator: $("#txtSearchGroupOperator").val(),
            Rules: []
        };
        $.each($("#panel-condition .row"), function () {
            t.Rules.push({
                FieldName: $(this).find("select[name='FieldName']").val(),
                OperatorName: $(this).find("select[name='Operator']").val(),
                Data: $(this).find("input[name='FieldData']").val()
            })
        });
        var r = {
            filters: JSON.stringify(t)
        },
            i = $("#" + n.data),
            u = i.jqGrid("getGridParam", "postData");
        $.extend(u, r);
        i.setGridParam({
            search: !0
        }).trigger("reloadGrid", [{
            page: 1
        }])
    }
};
(function () {
    $("#ParentName").bsSuggest({
        allowNoKeyword: !0,
        multiWord: !0,
        showHeader: !0,
        effectiveFieldsAlias: {
            Id: "主键",
            Name: "名称",
            TypeName: "类型",
            Url: "URL地址"
        },
        effectiveFields: ["Id", "Name", "TypeName", "Url"],
        getDataMethod: "url",
        url: "/Adm/Menu/GetListWithKeywords?keywords=",
        idField: "Id",
        keyField: "Name"
    }).on("onSetSelectValue", function (n, t) {
        $("#ParentId").val(t.id)
    }).on("onUnsetSelectValue", function () {
        $("#ParentId").val("")
    })
})()