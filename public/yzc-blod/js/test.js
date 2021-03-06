/**
 * Created by Administrator on 2016/8/11.
 */
function decodeLinkURL(e) {
    var t;
    try {
        for (t = decodeURIComponent(e); t !== e;) e = t, t = decodeURIComponent(e);
        e = encodeURI(t)
    } catch (n) {}
    return e
}
function imageURLChecker(e) {
    e = decodeLinkURL(e);
    var t = e,
        n = e;
    return e.match(REG_IS_QINIU) ? e.indexOf("?") >= 0 ? (t = e, n = e.replace(/\/[wh]\/\d+/g, "").replace(/[\?\|]imageView2\/2$/, "")) : (n = e + QINIU_IMAGE_PARA_WITHOUTSIZE, t = e + QINIU_IMAGE_PARA) : e.match(REG_IS_QPIC) && (t = e, n = e.split("?"), n.length > 1 && (n[2] = [], n[1].split("&").map(function(e) {
        "tp=webp" !== e && n[2].push(e)
    }), n[2].length > 0 && (n[1] = n[2].join("&"), n = n[0] + "?" + n[1], t = n)), n = e), [t, n]
}!
    function(e, t) {
        function n(t, n) {
            var r, o, a, s = t.nodeName.toLowerCase();
            return "area" === s ? (r = t.parentNode, o = r.name, t.href && o && "map" === r.nodeName.toLowerCase() ? (a = e("img[usemap=#" + o + "]")[0], !! a && i(a)) : !1) : (/input|select|textarea|button|object/.test(s) ? !t.disabled : "a" === s ? t.href || n : n) && i(t)
        }
        function i(t) {
            return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
                    return "hidden" === e.css(this, "visibility")
                }).length
        }
        var r = 0,
            o = /^ui-id-\d+$/;
        e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
            version: "1.9.2",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            _focus: e.fn.focus,
            focus: function(t, n) {
                return "number" == typeof t ? this.each(function() {
                    var i = this;
                    setTimeout(function() {
                        e(i).focus(), n && n.call(i)
                    }, t)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var t;
                return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
            },
            zIndex: function(n) {
                if (n !== t) return this.css("zIndex", n);
                if (this.length) for (var i, r, o = e(this[0]); o.length && o[0] !== document;) {
                    if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                    o = o.parent()
                }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++r)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    o.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(n) {
                    return !!e.data(n, t)
                }
            }) : function(t, n, i) {
                return !!e.data(t, i[3])
            },
            focusable: function(t) {
                return n(t, !isNaN(e.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var i = e.attr(t, "tabindex"),
                    r = isNaN(i);
                return (r || i >= 0) && n(t, !r)
            }
        }), e(function() {
            var t = document.body,
                n = t.appendChild(n = document.createElement("div"));
            n.offsetHeight, e.extend(n.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            }), e.support.minHeight = 100 === n.offsetHeight, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, i) {
            function r(t, n, i, r) {
                return e.each(o, function() {
                    n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), r && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), n
            }
            var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                a = i.toLowerCase(),
                s = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + i] = function(n) {
                return n === t ? s["inner" + i].call(this) : this.each(function() {
                    e(this).css(a, r(this, n) + "px")
                })
            }, e.fn["outer" + i] = function(t, n) {
                return "number" != typeof t ? s["outer" + i].call(this, t) : this.each(function() {
                    e(this).css(a, r(this, t, !0, n) + "px")
                })
            }
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
            return function(n) {
                return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
            }
        }(e.fn.removeData)), function() {
            var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
            e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = 6 === parseFloat(t[1], 10)
        }(), e.fn.extend({
            disableSelection: function() {
                return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), e.extend(e.ui, {
            plugin: {
                add: function(t, n, i) {
                    var r, o = e.ui[t].prototype;
                    for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]])
                },
                call: function(e, t, n) {
                    var i, r = e.plugins[t];
                    if (r && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (i = 0; i < r.length; i++) e.options[r[i][0]] && r[i][1].apply(e.element, n)
                }
            },
            contains: e.contains,
            hasScroll: function(t, n) {
                if ("hidden" === e(t).css("overflow")) return !1;
                var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                    r = !1;
                return t[i] > 0 ? !0 : (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
            },
            isOverAxis: function(e, t, n) {
                return e > t && t + n > e
            },
            isOver: function(t, n, i, r, o, a) {
                return e.ui.isOverAxis(t, i, o) && e.ui.isOverAxis(n, r, a)
            }
        }))
    }(jQuery), function(e, t) {
    var n = 0,
        i = Array.prototype.slice,
        r = e.cleanData;
    e.cleanData = function(t) {
        for (var n, i = 0; null != (n = t[i]); i++) try {
            e(n).triggerHandler("remove")
        } catch (o) {}
        r(t)
    }, e.widget = function(t, n, i) {
        var r, o, a, s, l = t.split(".")[0];
        t = t.split(".")[1], r = l + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][r.toLowerCase()] = function(t) {
            return !!e.data(t, r)
        }, e[l] = e[l] || {}, o = e[l][t], a = e[l][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
        }, e.extend(a, o, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
        }), s = new n, s.options = e.widget.extend({}, s.options), e.each(i, function(t, r) {
            e.isFunction(r) && (i[t] = function() {
                var e = function() {
                        return n.prototype[t].apply(this, arguments)
                    },
                    i = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t, n = this._super,
                        o = this._superApply;
                    return this._super = e, this._superApply = i, t = r.apply(this, arguments), this._super = n, this._superApply = o, t
                }
            }())
        }), a.prototype = e.widget.extend(s, {
            widgetEventPrefix: o ? s.widgetEventPrefix : t
        }, i, {
            constructor: a,
            namespace: l,
            widgetName: t,
            widgetBaseClass: r,
            widgetFullName: r
        }), o ? (e.each(o._childConstructors, function(t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, a, n._proto)
        }), delete o._childConstructors) : n._childConstructors.push(a), e.widget.bridge(t, a)
    }, e.widget.extend = function(n) {
        for (var r, o, a = i.call(arguments, 1), s = 0, l = a.length; l > s; s++) for (r in a[s]) o = a[s][r], a[s].hasOwnProperty(r) && o !== t && (n[r] = e.isPlainObject(o) ? e.isPlainObject(n[r]) ? e.widget.extend({}, n[r], o) : e.widget.extend({}, o) : o);
        return n
    }, e.widget.bridge = function(n, r) {
        var o = r.prototype.widgetFullName || n;
        e.fn[n] = function(a) {
            var s = "string" == typeof a,
                l = i.call(arguments, 1),
                c = this;
            return a = !s && l.length ? e.widget.extend.apply(null, [a].concat(l)) : a, this.each(s ?
                function() {
                    var i, r = e.data(this, o);
                    return r ? e.isFunction(r[a]) && "_" !== a.charAt(0) ? (i = r[a].apply(r, l), i !== r && i !== t ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + a + "'")
                } : function() {
                var t = e.data(this, o);
                t ? t.option(a || {})._init() : e.data(this, o, new r(a, this))
            }), c
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetName, this), e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, i) {
            var r, o, a, s = n;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof n) if (s = {}, r = n.split("."), n = r.shift(), r.length) {
                for (o = s[n] = e.widget.extend({}, this.options[n]), a = 0; a < r.length - 1; a++) o[r[a]] = o[r[a]] || {}, o = o[r[a]];
                if (n = r.pop(), i === t) return o[n] === t ? null : o[n];
                o[n] = i
            } else {
                if (i === t) return this.options[n] === t ? null : this.options[n];
                s[n] = i
            }
            return this._setOptions(s), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, n, i) {
            var r, o = this;
            "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), e.each(i, function(i, a) {
                function s() {
                    return t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || e.guid++);
                var l = i.match(/^(\w+)\s*(.*)$/),
                    c = l[1] + o.eventNamespace,
                    u = l[2];
                u ? r.delegate(u, c, s) : n.bind(c, s)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, i) {
            var r, o, a = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent, o) for (r in o) r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(e.isFunction(a) && a.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(i, r, o) {
            "string" == typeof r && (r = {
                effect: r
            });
            var a, s = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
            r = r || {}, "number" == typeof r && (r = {
                duration: r
            }), a = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), a && e.effects && (e.effects.effect[s] || e.uiBackCompat !== !1 && e.effects[s]) ? i[t](r) : s !== t && i[s] ? i[s](r.duration, r.easing, o) : i.queue(function(n) {
                e(this)[t](), o && o.call(i[0]), n()
            })
        }
    }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    })
}(jQuery), function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.9.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(n) {
            if (!t) {
                this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                var i = this,
                    r = 1 === n.which,
                    o = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                return r && !o && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return !e.ui.ie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery), function(e) {
    e.widget("ui.sortable", e.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(t, n) {
            "disabled" === t ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !! n)) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(t, n) {
            var i = this;
            if (this.reverting) return !1;
            if (this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(t); {
                var r = null;
                e(t.target).parents().each(function() {
                    return e.data(this, i.widgetName + "-item") == i ? (r = e(this), !1) : void 0
                })
            }
            if (e.data(t.target, i.widgetName + "-item") == i && (r = e(t.target)), !r) return !1;
            if (this.options.handle && !n) {
                var o = !1;
                if (e(this.options.handle, r).find("*").andSelf().each(function() {
                        this == t.target && (o = !0)
                    }), !o) return !1
            }
            return this.currentItem = r, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function(t, n, i) {
            var r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, e.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", r.cursor)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i) for (var o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function(t) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var n = this.options,
                    i = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), i !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
            }
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var r = this.items.length - 1; r >= 0; r--) {
                var o = this.items[r],
                    a = o.item[0],
                    s = this._intersectsWithPointer(o);
                if (s && o.instance === this.currentContainer && a != this.currentItem[0] && this.placeholder[1 == s ? "next" : "prev"]()[0] != a && !e.contains(this.placeholder[0], a) && ("semi-dynamic" == this.options.type ? !e.contains(this.element[0], a) : !0)) {
                    if (this.direction = 1 == s ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(o)) break;
                    this._rearrange(t, o), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(t, n) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var i = this,
                        r = this.placeholder.offset();
                    this.reverting = !0, e(this.helper).animate({
                        left: r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        i._clear(t)
                    })
                } else this._clear(t, n);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, e(n).each(function() {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                n && i.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !i.length && t.key && i.push(t.key + "="), i.join("&")
        },
        toArray: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                i = [];
            return t = t || {}, n.each(function() {
                i.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                i = this.positionAbs.top,
                r = i + this.helperProportions.height,
                o = e.left,
                a = o + e.width,
                s = e.top,
                l = s + e.height,
                c = this.offset.click.top,
                u = this.offset.click.left,
                d = i + c > s && l > i + c && t + u > o && a > t + u;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? d : o < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < a && s < i + this.helperProportions.height / 2 && r - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(t) {
            var n = "x" === this.options.axis || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                i = "y" === this.options.axis || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                r = n && i,
                o = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return r ? this.floating ? a && "right" == a || "down" == o ? 2 : 1 : o && ("down" == o ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                r = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" == o && i || "left" == o && !i : r && ("down" == r && n || "up" == r && !n)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != e && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            var n = [],
                i = [],
                r = this._connectWith();
            if (r && t) for (var o = r.length - 1; o >= 0; o--) for (var a = e(r[o]), s = a.length - 1; s >= 0; s--) {
                var l = e.data(a[s], this.widgetName);
                l && l != this && !l.options.disabled && i.push([e.isFunction(l.options.items) ? l.options.items.call(l.element) : e(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
            }
            i.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var o = i.length - 1; o >= 0; o--) i[o][0].each(function() {
                n.push(this)
            });
            return e(n)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function(e) {
                for (var n = 0; n < t.length; n++) if (t[n] == e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [], this.containers = [this];
            var n = this.items,
                i = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                r = this._connectWith();
            if (r && this.ready) for (var o = r.length - 1; o >= 0; o--) for (var a = e(r[o]), s = a.length - 1; s >= 0; s--) {
                var l = e.data(a[s], this.widgetName);
                l && l != this && !l.options.disabled && (i.push([e.isFunction(l.options.items) ? l.options.items.call(l.element[0], t, {
                    item: this.currentItem
                }) : e(l.options.items, l.element), l]), this.containers.push(l))
            }
            for (var o = i.length - 1; o >= 0; o--) for (var c = i[o][1], u = i[o][0], s = 0, d = u.length; d > s; s++) {
                var h = e(u[s]);
                h.data(this.widgetName + "-item", c), n.push({
                    item: h,
                    instance: c,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            }
        },
        refreshPositions: function(t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var n = this.items.length - 1; n >= 0; n--) {
                var i = this.items[n];
                if (i.instance == this.currentContainer || !this.currentContainer || i.item[0] == this.currentItem[0]) {
                    var r = this.options.toleranceElement ? e(this.options.toleranceElement, i.item) : i.item;
                    t || (i.width = r.outerWidth(), i.height = r.outerHeight());
                    var o = r.offset();
                    i.left = o.left, i.top = o.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (var n = this.containers.length - 1; n >= 0; n--) {
                var o = this.containers[n].element.offset();
                this.containers[n].containerCache.left = o.left, this.containers[n].containerCache.top = o.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight()
            }
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var n = t.options;
            if (!n.placeholder || n.placeholder.constructor == String) {
                var i = n.placeholder;
                n.placeholder = {
                    element: function() {
                        var n = e(document.createElement(t.currentItem[0].nodeName)).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return i || (n.style.visibility = "hidden"), n
                    },
                    update: function(e, r) {
                        (!i || n.forcePlaceholderSize) && (r.height() || r.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), r.width() || r.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                }
            }
            t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), n.placeholder.update(t, t.placeholder)
        },
        _contactContainers: function(t) {
            for (var n = null, i = null, r = this.containers.length - 1; r >= 0; r--) if (!e.contains(this.currentItem[0], this.containers[r].element[0])) if (this._intersectsWith(this.containers[r].containerCache)) {
                if (n && e.contains(this.containers[r].element[0], n.element[0])) continue;
                n = this.containers[r], i = r
            } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
            if (n) if (1 === this.containers.length) this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1;
            else {
                for (var o = 1e4, a = null, s = this.containers[i].floating ? "left" : "top", l = this.containers[i].floating ? "width" : "height", c = this.positionAbs[s] + this.offset.click[s], u = this.items.length - 1; u >= 0; u--) if (e.contains(this.containers[i].element[0], this.items[u].item[0]) && this.items[u].item[0] != this.currentItem[0]) {
                    var d = this.items[u].item.offset()[s],
                        h = !1;
                    Math.abs(d - c) > Math.abs(d + this.items[u][l] - c) && (h = !0, d += this.items[u][l]), Math.abs(d - c) < o && (o = Math.abs(d - c), a = this.items[u], this.direction = h ? "up" : "down")
                }
                if (!a && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[i], a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[i].element, !0), this._trigger("change", t, this._uiHash()), this.containers[i]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1
            }
        },
        _createHelper: function(t) {
            var n = this.options,
                i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : "clone" == n.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || e("parent" != n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), ("" == i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), ("" == i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t = this.options;
            if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(t.containment)) {
                var n = e(t.containment)[0],
                    i = e(t.containment).offset(),
                    r = "hidden" != e(n).css("overflow");
                this.containment = [i.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (r ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (r ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var i = "absolute" == t ? 1 : -1,
                r = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i
            }
        },
        _generatePosition: function(t) {
            var n = this.options,
                i = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                r = /(html|body)/i.test(i[0].tagName);
            "relative" == this.cssPosition && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var o = t.pageX,
                a = t.pageY;
            if (this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid)) {
                var s = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1];
                a = this.containment && (s - this.offset.click.top < this.containment[1] || s - this.offset.click.top > this.containment[3]) ? s - this.offset.click.top < this.containment[1] ? s + n.grid[1] : s - n.grid[1] : s;
                var l = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0];
                o = this.containment && (l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2]) ? l - this.offset.click.left < this.containment[0] ? l + n.grid[0] : l - n.grid[0] : l
            }
            return {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : i.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : i.scrollLeft())
            }
        },
        _rearrange: function(e, t, n, i) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var r = this.counter;
            this._delay(function() {
                r == this.counter && this.refreshPositions(!i)
            })
        },
        _clear: function(t, n) {
            this.reverting = !1;
            var i = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var r in this._storedCSS)("auto" == this._storedCSS[r] || "static" == this._storedCSS[r]) && (this._storedCSS[r] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !n && i.push(function(e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n && i.push(function(e) {
                this._trigger("update", e, this._uiHash())
            }), this !== this.currentContainer && (n || (i.push(function(e) {
                this._trigger("remove", e, this._uiHash())
            }), i.push(function(e) {
                return function(t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), i.push(function(e) {
                return function(t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer))));
            for (var r = this.containers.length - 1; r >= 0; r--) n || i.push(function(e) {
                return function(t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[r])), this.containers[r].containerCache.over && (i.push(function(e) {
                return function(t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[r])), this.containers[r].containerCache.over = 0);
            if (this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!n) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (var r = 0; r < i.length; r++) i[r].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !n) {
                for (var r = 0; r < i.length; r++) i[r].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    })
}(jQuery), function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t() {
        var t = n(this),
            a = o.settings;
        return isNaN(t.datetime) || (0 == a.cutoff || Math.abs(r(t.datetime)) < a.cutoff) && e(this).text(i(t.datetime)), this
    }
    function n(t) {
        if (t = e(t), !t.data("timeago")) {
            t.data("timeago", {
                datetime: o.datetime(t)
            });
            var n = e.trim(t.text());
            o.settings.localeTitle ? t.attr("title", t.data("timeago").datetime.toLocaleString()) : !(n.length > 0) || o.isTime(t) && t.attr("title") || t.attr("title", n)
        }
        return t.data("timeago")
    }
    function i(e) {
        return o.inWords(r(e))
    }
    function r(e) {
        return (new Date).getTime() - e.getTime()
    }
    e.timeago = function(t) {
        return i(t instanceof Date ? t : "string" == typeof t ? e.timeago.parse(t) : "number" == typeof t ? new Date(t) : e.timeago.datetime(t))
    };
    var o = e.timeago;
    e.extend(e.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowPast: !0,
            allowFuture: !1,
            localeTitle: !1,
            cutoff: 0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "ago",
                suffixFromNow: "from now",
                inPast: "any moment now",
                seconds: "less than a minute",
                minute: "about a minute",
                minutes: "%d minutes",
                hour: "about an hour",
                hours: "about %d hours",
                day: "a day",
                days: "%d days",
                month: "about a month",
                months: "%d months",
                year: "about a year",
                years: "%d years",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function(t) {
            function n(n, r) {
                var o = e.isFunction(n) ? n(r, t) : n,
                    a = i.numbers && i.numbers[r] || r;
                return o.replace(/%d/i, a)
            }
            if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
            var i = this.settings.strings,
                r = i.prefixAgo,
                o = i.suffixAgo;
            if (this.settings.allowFuture && 0 > t && (r = i.prefixFromNow, o = i.suffixFromNow), !this.settings.allowPast && t >= 0) return this.settings.strings.inPast;
            var a = Math.abs(t) / 1e3,
                s = a / 60,
                l = s / 60,
                c = l / 24,
                u = c / 365,
                d = 45 > a && n(i.seconds, Math.round(a)) || 90 > a && n(i.minute, 1) || 45 > s && n(i.minutes, Math.round(s)) || 90 > s && n(i.hour, 1) || 24 > l && n(i.hours, Math.round(l)) || 42 > l && n(i.day, 1) || 30 > c && n(i.days, Math.round(c)) || 45 > c && n(i.month, 1) || 365 > c && n(i.months, Math.round(c / 30)) || 1.5 > u && n(i.year, 1) || n(i.years, Math.round(u)),
                h = i.wordSeparator || "";
            return void 0 === i.wordSeparator && (h = " "), e.trim([r, d, o].join(h))
        },
        parse: function(t) {
            var n = e.trim(t);
            return n = n.replace(/\.\d+/, ""), n = n.replace(/-/, "/").replace(/-/, "/"), n = n.replace(/T/, " ").replace(/Z/, " UTC"), n = n.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), n = n.replace(/([\+\-]\d\d)$/, " $100"), new Date(n)
        },
        datetime: function(t) {
            var n = e(t).attr(o.isTime(t) ? "datetime" : "title");
            return o.parse(n)
        },
        isTime: function(t) {
            return "time" === e(t).get(0).tagName.toLowerCase()
        }
    });
    var a = {
        init: function() {
            var n = e.proxy(t, this);
            n();
            var i = o.settings;
            i.refreshMillis > 0 && (this._timeagoInterval = setInterval(n, i.refreshMillis))
        },
        update: function(n) {
            var i = o.parse(n);
            e(this).data("timeago", {
                datetime: i
            }), o.settings.localeTitle && e(this).attr("title", i.toLocaleString()), t.apply(this)
        },
        updateFromDOM: function() {
            e(this).data("timeago", {
                datetime: o.parse(e(this).attr(o.isTime(this) ? "datetime" : "title"))
            }), t.apply(this)
        },
        dispose: function() {
            this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
        }
    };
    e.fn.timeago = function(e, t) {
        var n = e ? a[e] : a.init;
        if (!n) throw new Error("Unknown function name '" + e + "' for timeago");
        return this.each(function() {
            n.call(this, t)
        }), this
    }, document.createElement("abbr"), document.createElement("time")
}), !
    function(e) {
        "use strict";
        var t = function(t) {
            this.element = e(t)
        };
        t.prototype = {
            constructor: t,
            show: function() {
                var t, n, i, r = this.element,
                    o = r.closest("ul:not(.dropdown-menu)"),
                    a = r.attr("data-target");
                a || (a = r.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, "")), r.parent("li").hasClass("active") || (t = o.find(".active:last a")[0], i = e.Event("show", {
                    relatedTarget: t
                }), r.trigger(i), i.isDefaultPrevented() || (n = e(a), this.activate(r.parent("li"), o), this.activate(n, n.parent(), function() {
                    r.trigger({
                        type: "shown",
                        relatedTarget: t
                    })
                })))
            },
            activate: function(t, n, i) {
                function r() {
                    o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), i && i()
                }
                var o = n.find("> .active"),
                    a = i && e.support.transition && o.hasClass("fade");
                a ? o.one(e.support.transition.end, r) : r(), o.removeClass("in")
            }
        };
        var n = e.fn.tab;
        e.fn.tab = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("tab");
                r || i.data("tab", r = new t(this)), "string" == typeof n && r[n]()
            })
        }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
            return e.fn.tab = n, this
        }, e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
            t.preventDefault(), e(this).tab("show")
        })
    }(window.jQuery), function(e) {
    function t(e, t) {
        var n = typeof e[t];
        return n == w || !(n != y || !e[t]) || "unknown" == n
    }
    function n(e, t) {
        return !(typeof e[t] != y || !e[t])
    }
    function i(e, t) {
        return typeof e[t] != _
    }
    function r(e) {
        return function(t, n) {
            for (var i = n.length; i--;) if (!e(t, n[i])) return !1;
            return !0
        }
    }
    function o(e) {
        return e && T(e, x) && E(e, k)
    }
    function a(e) {
        return n(e, "body") ? e.body : e.getElementsByTagName("body")[0]
    }
    function s(e) {
        n(window, "console") && t(window.console, "log") && window.console.log(e)
    }
    function l(e, t) {
        t ? window.alert(e) : s(e)
    }
    function c(e) {
        P.initialized = !0, P.supported = !1, l("Rangy is not supported on this page in your browser. Reason: " + e, P.config.alertOnFail)
    }
    function u(e) {
        l("Rangy warning: " + e, P.config.alertOnWarn)
    }
    function d(e) {
        return e.message || e.description || String(e)
    }
    function h() {
        if (!P.initialized) {
            var e, n = !1,
                i = !1;
            t(document, "createRange") && (e = document.createRange(), T(e, C) && E(e, S) && (n = !0), e.detach());
            var r = a(document);
            if (!r || "body" != r.nodeName.toLowerCase()) return void c("No body element found");
            if (r && t(r, "createTextRange") && (e = r.createTextRange(), o(e) && (i = !0)), !n && !i) return void c("Neither Range nor TextRange are available");
            P.initialized = !0, P.features = {
                implementsDomRange: n,
                implementsTextRange: i
            };
            var l, u;
            for (var h in I)(l = I[h]) instanceof f && l.init(l, P);
            for (var p = 0, g = M.length; g > p; ++p) try {
                M[p](P)
            } catch (m) {
                u = "Rangy init listener threw an exception. Continuing. Detail: " + d(m), s(u)
            }
        }
    }
    function p(e) {
        e = e || window, h();
        for (var t = 0, n = L.length; n > t; ++t) L[t](e)
    }
    function f(e, t, n) {
        this.name = e, this.dependencies = t, this.initialized = !1, this.supported = !1, this.initializer = n
    }
    function g(e, t, n, i) {
        var r = new f(t, n, function(e) {
            if (!e.initialized) {
                e.initialized = !0;
                try {
                    i(P, e), e.supported = !0
                } catch (n) {
                    var r = "Module '" + t + "' failed to load: " + d(n);
                    s(r)
                }
            }
        });
        I[t] = r
    }
    function m() {}
    function v() {}
    var b = "function" == typeof e.define && e.define.amd,
        y = "object",
        w = "function",
        _ = "undefined",
        S = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed", "commonAncestorContainer"],
        C = ["setStart", "setStartBefore", "setStartAfter", "setEnd", "setEndBefore", "setEndAfter", "collapse", "selectNode", "selectNodeContents", "compareBoundaryPoints", "deleteContents", "extractContents", "cloneContents", "insertNode", "surroundContents", "cloneRange", "toString", "detach"],
        k = ["boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "htmlText", "text"],
        x = ["collapse", "compareEndPoints", "duplicate", "moveToElementText", "parentElement", "select", "setEndPoint", "getBoundingClientRect"],
        T = r(t),
        N = r(n),
        E = r(i),
        I = {},
        P = {
            version: "1.3alpha.804",
            initialized: !1,
            supported: !0,
            util: {
                isHostMethod: t,
                isHostObject: n,
                isHostProperty: i,
                areHostMethods: T,
                areHostObjects: N,
                areHostProperties: E,
                isTextRange: o,
                getBody: a
            },
            features: {},
            modules: I,
            config: {
                alertOnFail: !0,
                alertOnWarn: !1,
                preferTextRange: !1
            }
        };
    P.fail = c, P.warn = u, {}.hasOwnProperty ? P.util.extend = function(e, t, n) {
        var i, r;
        for (var o in t) t.hasOwnProperty(o) && (i = e[o], r = t[o], n && null !== i && "object" == typeof i && null !== r && "object" == typeof r && P.util.extend(i, r, !0), e[o] = r);
        return e
    } : c("hasOwnProperty not supported"), function() {
        var e = document.createElement("div");
        e.appendChild(document.createElement("span"));
        var t, n = [].slice;
        try {
            1 == n.call(e.childNodes, 0)[0].nodeType && (t = function(e) {
                return n.call(e, 0)
            })
        } catch (i) {}
        t || (t = function(e) {
            for (var t = [], n = 0, i = e.length; i > n; ++n) t[n] = e[n];
            return t
        }), P.util.toArray = t
    }();
    var D;
    t(document, "addEventListener") ? D = function(e, t, n) {
        e.addEventListener(t, n, !1)
    } : t(document, "attachEvent") ? D = function(e, t, n) {
        e.attachEvent("on" + t, n)
    } : c("Document does not have required addEventListener or attachEvent method"), P.util.addListener = D;
    var M = [];
    P.init = h, P.addInitListener = function(e) {
        P.initialized ? e(P) : M.push(e)
    };
    var L = [];
    P.addCreateMissingNativeApiListener = function(e) {
        L.push(e)
    }, P.createMissingNativeApi = p, f.prototype = {
        init: function() {
            for (var e, t, n = this.dependencies || [], i = 0, r = n.length; r > i; ++i) {
                if (t = n[i], e = I[t], !(e && e instanceof f)) throw new Error("required module '" + t + "' not found");
                if (e.init(), !e.supported) throw new Error("required module '" + t + "' not supported")
            }
            this.initializer(this)
        },
        fail: function(e) {
            throw this.initialized = !0, this.supported = !1, new Error("Module '" + this.name + "' failed to load: " + e)
        },
        warn: function(e) {
            P.warn("Module " + this.name + ": " + e)
        },
        deprecationNotice: function(e, t) {
            P.warn("DEPRECATED: " + e + " in module " + this.name + "is deprecated. Please use " + t + " instead")
        },
        createError: function(e) {
            return new Error("Error in Rangy " + this.name + " module: " + e)
        }
    }, P.createModule = function(e) {
        var t, n;
        2 == arguments.length ? (t = arguments[1], n = []) : (t = arguments[2], n = arguments[1]), g(!1, e, n, t)
    }, P.createCoreModule = function(e, t, n) {
        g(!0, e, t, n)
    }, P.RangePrototype = m, P.rangePrototype = new m, P.selectionPrototype = new v;
    var R = !1,
        A = function() {
            R || (R = !0, P.initialized || h())
        };
    return typeof window == _ ? void c("No window found") : typeof document == _ ? void c("No document found") : (t(document, "addEventListener") && document.addEventListener("DOMContentLoaded", A, !1), D(window, "load", A), b && e.define(function() {
        return P.amd = !0, P
    }), void(e.rangy = P))
}(this), rangy.createCoreModule("DomUtil", [], function(e, t) {
    function n(e) {
        var t;
        return typeof e.namespaceURI == I || null === (t = e.namespaceURI) || "http://www.w3.org/1999/xhtml" == t
    }
    function i(e) {
        var t = e.parentNode;
        return 1 == t.nodeType ? t : null
    }
    function r(e) {
        for (var t = 0; e = e.previousSibling;)++t;
        return t
    }
    function o(e) {
        switch (e.nodeType) {
            case 7:
            case 10:
                return 0;
            case 3:
            case 8:
                return e.length;
            default:
                return e.childNodes.length
        }
    }
    function a(e, t) {
        var n, i = [];
        for (n = e; n; n = n.parentNode) i.push(n);
        for (n = t; n; n = n.parentNode) if (L(i, n)) return n;
        return null
    }
    function s(e, t, n) {
        for (var i = n ? t : t.parentNode; i;) {
            if (i === e) return !0;
            i = i.parentNode
        }
        return !1
    }
    function l(e, t) {
        return s(e, t, !0)
    }
    function c(e, t, n) {
        for (var i, r = n ? e : e.parentNode; r;) {
            if (i = r.parentNode, i === t) return r;
            r = i
        }
        return null
    }
    function u(e) {
        var t = e.nodeType;
        return 3 == t || 4 == t || 8 == t
    }
    function d(e) {
        if (!e) return !1;
        var t = e.nodeType;
        return 3 == t || 8 == t
    }
    function h(e, t) {
        var n = t.nextSibling,
            i = t.parentNode;
        return n ? i.insertBefore(e, n) : i.appendChild(e), e
    }
    function p(e, t, n) {
        var i = e.cloneNode(!1);
        if (i.deleteData(0, t), e.deleteData(t, e.length - t), h(i, e), n) for (var o, a = 0; o = n[a++];) o.node == e && o.offset > t ? (o.node = i, o.offset -= t) : o.node == e.parentNode && o.offset > r(e) && ++o.offset;
        return i
    }
    function f(e) {
        if (9 == e.nodeType) return e;
        if (typeof e.ownerDocument != I) return e.ownerDocument;
        if (typeof e.document != I) return e.document;
        if (e.parentNode) return f(e.parentNode);
        throw t.createError("getDocument: no document found for node")
    }
    function g(e) {
        var n = f(e);
        if (typeof n.defaultView != I) return n.defaultView;
        if (typeof n.parentWindow != I) return n.parentWindow;
        throw t.createError("Cannot get a window object for node")
    }
    function m(e) {
        if (typeof e.contentDocument != I) return e.contentDocument;
        if (typeof e.contentWindow != I) return e.contentWindow.document;
        throw t.createError("getIframeDocument: No Document object found for iframe element")
    }
    function v(e) {
        if (typeof e.contentWindow != I) return e.contentWindow;
        if (typeof e.contentDocument != I) return e.contentDocument.defaultView;
        throw t.createError("getIframeWindow: No Window object found for iframe element")
    }
    function b(e) {
        return e && P.isHostMethod(e, "setTimeout") && P.isHostObject(e, "document")
    }
    function y(e, t, n) {
        var i;
        if (e ? P.isHostProperty(e, "nodeType") ? i = 1 == e.nodeType && "iframe" == e.tagName.toLowerCase() ? m(e) : f(e) : b(e) && (i = e.document) : i = document, !i) throw t.createError(n + "(): Parameter must be a Window object or DOM node");
        return i
    }
    function w(e) {
        for (var t; t = e.parentNode;) e = t;
        return e
    }
    function _(e, n, i, o) {
        var s, l, u, d, h;
        if (e == i) return n === o ? 0 : o > n ? -1 : 1;
        if (s = c(i, e, !0)) return n <= r(s) ? -1 : 1;
        if (s = c(e, i, !0)) return r(s) < o ? -1 : 1;
        if (l = a(e, i), !l) throw new Error("comparePoints error: nodes have no common ancestor");
        if (u = e === l ? l : c(e, l, !0), d = i === l ? l : c(i, l, !0), u === d) throw t.createError("comparePoints got to case 4 and childA and childB are the same!");
        for (h = l.firstChild; h;) {
            if (h === u) return -1;
            if (h === d) return 1;
            h = h.nextSibling
        }
    }
    function S(e) {
        try {
            return e.parentNode, !1
        } catch (t) {
            return !0
        }
    }
    function C(e) {
        if (!e) return "[No node]";
        if (R && S(e)) return "[Broken node]";
        if (u(e)) return '"' + e.data + '"';
        if (1 == e.nodeType) {
            var t = e.id ? ' id="' + e.id + '"' : "";
            return "<" + e.nodeName + t + ">[" + r(e) + "][" + e.childNodes.length + "][" + (e.innerHTML || "[innerHTML not supported]").slice(0, 25) + "]"
        }
        return e.nodeName
    }
    function k(e) {
        for (var t, n = f(e).createDocumentFragment(); t = e.firstChild;) n.appendChild(t);
        return n
    }
    function x(e) {
        this.root = e, this._next = e
    }
    function T(e) {
        return new x(e)
    }
    function N(e, t) {
        this.node = e, this.offset = t
    }
    function E(e) {
        this.code = this[e], this.codeName = e, this.message = "DOMException: " + this.codeName
    }
    var I = "undefined",
        P = e.util;
    P.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"]) || t.fail("document missing a Node creation method"), P.isHostMethod(document, "getElementsByTagName") || t.fail("document missing getElementsByTagName method");
    var D = document.createElement("div");
    P.areHostMethods(D, ["insertBefore", "appendChild", "cloneNode"] || !P.areHostObjects(D, ["previousSibling", "nextSibling", "childNodes", "parentNode"])) || t.fail("Incomplete Element implementation"), P.isHostProperty(D, "innerHTML") || t.fail("Element is missing innerHTML property");
    var M = document.createTextNode("test");
    P.areHostMethods(M, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"] || !P.areHostObjects(D, ["previousSibling", "nextSibling", "childNodes", "parentNode"]) || !P.areHostProperties(M, ["data"])) || t.fail("Incomplete Text Node implementation");
    var L = function(e, t) {
            for (var n = e.length; n--;) if (e[n] === t) return !0;
            return !1
        },
        R = !1;
    !
        function() {
            var t = document.createElement("b");
            t.innerHTML = "1";
            var n = t.firstChild;
            t.innerHTML = "<br>", R = S(n), e.features.crashyTextNodes = R
        }();
    var A;
    typeof window.getComputedStyle != I ? A = function(e, t) {
        return g(e).getComputedStyle(e, null)[t]
    } : typeof document.documentElement.currentStyle != I ? A = function(e, t) {
        return e.currentStyle[t]
    } : t.fail("No means of obtaining computed style properties found"), x.prototype = {
        _current: null,
        hasNext: function() {
            return !!this._next
        },
        next: function() {
            var e, t, n = this._current = this._next;
            if (this._current) if (e = n.firstChild) this._next = e;
            else {
                for (t = null; n !== this.root && !(t = n.nextSibling);) n = n.parentNode;
                this._next = t
            }
            return this._current
        },
        detach: function() {
            this._current = this._next = this.root = null
        }
    }, N.prototype = {
        equals: function(e) {
            return !!e && this.node === e.node && this.offset == e.offset
        },
        inspect: function() {
            return "[DomPosition(" + C(this.node) + ":" + this.offset + ")]"
        },
        toString: function() {
            return this.inspect()
        }
    }, E.prototype = {
        INDEX_SIZE_ERR: 1,
        HIERARCHY_REQUEST_ERR: 3,
        WRONG_DOCUMENT_ERR: 4,
        NO_MODIFICATION_ALLOWED_ERR: 7,
        NOT_FOUND_ERR: 8,
        NOT_SUPPORTED_ERR: 9,
        INVALID_STATE_ERR: 11
    }, E.prototype.toString = function() {
        return this.message
    }, e.dom = {
        arrayContains: L,
        isHtmlNamespace: n,
        parentElement: i,
        getNodeIndex: r,
        getNodeLength: o,
        getCommonAncestor: a,
        isAncestorOf: s,
        isOrIsAncestorOf: l,
        getClosestAncestorIn: c,
        isCharacterDataNode: u,
        isTextOrCommentNode: d,
        insertAfter: h,
        splitDataNode: p,
        getDocument: f,
        getWindow: g,
        getIframeWindow: v,
        getIframeDocument: m,
        getBody: P.getBody,
        isWindow: b,
        getContentDocument: y,
        getRootContainer: w,
        comparePoints: _,
        isBrokenNode: S,
        inspectNode: C,
        getComputedStyleProperty: A,
        fragmentFromNodeChildren: k,
        createIterator: T,
        DomPosition: N
    }, e.DOMException = E
}), rangy.createCoreModule("DomRange", ["DomUtil"], function(e) {
    function t(e, t) {
        return 3 != e.nodeType && (U(e, t.startContainer) || U(e, t.endContainer))
    }
    function n(e) {
        return e.document || j(e.startContainer)
    }
    function i(e) {
        return new F(e.parentNode, $(e))
    }
    function r(e) {
        return new F(e.parentNode, $(e) + 1)
    }
    function o(e, t, n) {
        var i = 11 == e.nodeType ? e.firstChild : e;
        return W(t) ? n == t.length ? B.insertAfter(e, t) : t.parentNode.insertBefore(e, 0 == n ? t : G(t, n)) : n >= t.childNodes.length ? t.appendChild(e) : t.insertBefore(e, t.childNodes[n]), i
    }
    function a(e, t, i) {
        if (T(e), T(t), n(t) != n(e)) throw new H("WRONG_DOCUMENT_ERR");
        var r = z(e.startContainer, e.startOffset, t.endContainer, t.endOffset),
            o = z(e.endContainer, e.endOffset, t.startContainer, t.startOffset);
        return i ? 0 >= r && o >= 0 : 0 > r && o > 0
    }
    function s(e) {
        for (var t, i, r, o = n(e.range).createDocumentFragment(); i = e.next();) {
            if (t = e.isPartiallySelectedSubtree(), i = i.cloneNode(!t), t && (r = e.getSubtreeIterator(), i.appendChild(s(r)), r.detach(!0)), 10 == i.nodeType) throw new H("HIERARCHY_REQUEST_ERR");
            o.appendChild(i)
        }
        return o
    }
    function l(e, t, n) {
        var i, r;
        n = n || {
                stop: !1
            };
        for (var o, a; o = e.next();) if (e.isPartiallySelectedSubtree()) {
            if (t(o) === !1) return void(n.stop = !0);
            if (a = e.getSubtreeIterator(), l(a, t, n), a.detach(!0), n.stop) return
        } else for (i = B.createIterator(o); r = i.next();) if (t(r) === !1) return void(n.stop = !0)
    }
    function c(e) {
        for (var t; e.next();) e.isPartiallySelectedSubtree() ? (t = e.getSubtreeIterator(), c(t), t.detach(!0)) : e.remove()
    }
    function u(e) {
        for (var t, i, r = n(e.range).createDocumentFragment(); t = e.next();) {
            if (e.isPartiallySelectedSubtree() ? (t = t.cloneNode(!1), i = e.getSubtreeIterator(), t.appendChild(u(i)), i.detach(!0)) : e.remove(), 10 == t.nodeType) throw new H("HIERARCHY_REQUEST_ERR");
            r.appendChild(t)
        }
        return r
    }
    function d(e, t, n) {
        var i, r = !(!t || !t.length),
            o = !! n;
        r && (i = new RegExp("^(" + t.join("|") + ")$"));
        var a = [];
        return l(new p(e, !1), function(t) {
            if (!(r && !i.test(t.nodeType) || o && !n(t))) {
                var s = e.startContainer;
                if (t != s || !W(s) || e.startOffset != s.length) {
                    var l = e.endContainer;
                    t == l && W(l) && 0 == e.endOffset || a.push(t)
                }
            }
        }), a
    }
    function h(e) {
        var t = "undefined" == typeof e.getName ? "Range" : e.getName();
        return "[" + t + "(" + B.inspectNode(e.startContainer) + ":" + e.startOffset + ", " + B.inspectNode(e.endContainer) + ":" + e.endOffset + ")]"
    }
    function p(e, t) {
        if (this.range = e, this.clonePartiallySelectedTextNodes = t, !e.collapsed) {
            this.sc = e.startContainer, this.so = e.startOffset, this.ec = e.endContainer, this.eo = e.endOffset;
            var n = e.commonAncestorContainer;
            this.sc === this.ec && W(this.sc) ? (this.isSingleCharacterDataNode = !0, this._first = this._last = this._next = this.sc) : (this._first = this._next = this.sc !== n || W(this.sc) ? q(this.sc, n, !0) : this.sc.childNodes[this.so], this._last = this.ec !== n || W(this.ec) ? q(this.ec, n, !0) : this.ec.childNodes[this.eo - 1])
        }
    }
    function f(e) {
        this.code = this[e], this.codeName = e, this.message = "RangeException: " + this.codeName
    }
    function g(e) {
        return function(t, n) {
            for (var i, r = n ? t : t.parentNode; r;) {
                if (i = r.nodeType, V(e, i)) return r;
                r = r.parentNode
            }
            return null
        }
    }
    function m(e, t) {
        if (rt(e, t)) throw new f("INVALID_NODE_TYPE_ERR")
    }
    function v(e) {
        if (!e.startContainer) throw new H("INVALID_STATE_ERR")
    }
    function b(e, t) {
        if (!V(t, e.nodeType)) throw new f("INVALID_NODE_TYPE_ERR")
    }
    function y(e, t) {
        if (0 > t || t > (W(e) ? e.length : e.childNodes.length)) throw new H("INDEX_SIZE_ERR")
    }
    function w(e, t) {
        if (nt(e, !0) !== nt(t, !0)) throw new H("WRONG_DOCUMENT_ERR")
    }
    function _(e) {
        if (it(e, !0)) throw new H("NO_MODIFICATION_ALLOWED_ERR")
    }
    function S(e, t) {
        if (!e) throw new H(t)
    }
    function C(e) {
        return J && B.isBrokenNode(e) || !V(X, e.nodeType) && !nt(e, !0)
    }
    function k(e, t) {
        return t <= (W(e) ? e.length : e.childNodes.length)
    }
    function x(e) {
        return !!e.startContainer && !! e.endContainer && !C(e.startContainer) && !C(e.endContainer) && k(e.startContainer, e.startOffset) && k(e.endContainer, e.endOffset)
    }
    function T(e) {
        if (v(e), !x(e)) throw new Error("Range error: Range is no longer valid after DOM mutation (" + e.inspect() + ")")
    }
    function N(e, t) {
        T(e);
        var n = e.startContainer,
            i = e.startOffset,
            r = e.endContainer,
            o = e.endOffset,
            a = n === r;
        W(r) && o > 0 && o < r.length && G(r, o, t), W(n) && i > 0 && i < n.length && (n = G(n, i, t), a ? (o -= i, r = n) : r == n.parentNode && o >= $(n) && o++, i = 0), e.setStartAndEnd(n, i, r, o)
    }
    function E(e) {
        e.START_TO_START = ut, e.START_TO_END = dt, e.END_TO_END = ht, e.END_TO_START = pt, e.NODE_BEFORE = ft, e.NODE_AFTER = gt, e.NODE_BEFORE_AND_AFTER = mt, e.NODE_INSIDE = vt
    }
    function I(e) {
        E(e), E(e.prototype)
    }
    function P(e, t) {
        return function() {
            T(this);
            var n, i, o = this.startContainer,
                a = this.startOffset,
                s = this.commonAncestorContainer,
                c = new p(this, !0);
            o !== s && (n = q(o, s, !0), i = r(n), o = i.node, a = i.offset), l(c, _), c.reset();
            var u = e(c);
            return c.detach(), t(this, o, a, o, a), u
        }
    }
    function D(n, o, a) {
        function s(e, t) {
            return function(n) {
                v(this), b(n, Y), b(Q(n), X);
                var o = (e ? i : r)(n);
                (t ? l : d)(this, o.node, o.offset)
            }
        }
        function l(e, t, n) {
            var i = e.endContainer,
                r = e.endOffset;
            (t !== e.startContainer || n !== e.startOffset) && ((Q(t) != Q(i) || 1 == z(t, n, i, r)) && (i = t, r = n), o(e, t, n, i, r))
        }
        function d(e, t, n) {
            var i = e.startContainer,
                r = e.startOffset;
            (t !== e.endContainer || n !== e.endOffset) && ((Q(t) != Q(i) || -1 == z(t, n, i, r)) && (i = t, r = n), o(e, i, r, t, n))
        }
        var h = function() {};
        h.prototype = e.rangePrototype, n.prototype = new h, O.extend(n.prototype, {
            setStart: function(e, t) {
                v(this), m(e, !0), y(e, t), l(this, e, t)
            },
            setEnd: function(e, t) {
                v(this), m(e, !0), y(e, t), d(this, e, t)
            },
            setStartAndEnd: function() {
                v(this);
                var e = arguments,
                    t = e[0],
                    n = e[1],
                    i = t,
                    r = n;
                switch (e.length) {
                    case 3:
                        r = e[2];
                        break;
                    case 4:
                        i = e[2], r = e[3]
                }
                o(this, t, n, i, r)
            },
            setBoundary: function(e, t, n) {
                this["set" + (n ? "Start" : "End")](e, t)
            },
            setStartBefore: s(!0, !0),
            setStartAfter: s(!1, !0),
            setEndBefore: s(!0, !1),
            setEndAfter: s(!1, !1),
            collapse: function(e) {
                T(this), e ? o(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset) : o(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset)
            },
            selectNodeContents: function(e) {
                v(this), m(e, !0), o(this, e, 0, e, K(e))
            },
            selectNode: function(e) {
                v(this), m(e, !1), b(e, Y);
                var t = i(e),
                    n = r(e);
                o(this, t.node, t.offset, n.node, n.offset)
            },
            extractContents: P(u, o),
            deleteContents: P(c, o),
            canSurroundContents: function() {
                T(this), _(this.startContainer), _(this.endContainer);
                var e = new p(this, !0),
                    n = e._first && t(e._first, this) || e._last && t(e._last, this);
                return e.detach(), !n
            },
            detach: function() {
                a(this)
            },
            splitBoundaries: function() {
                N(this)
            },
            splitBoundariesPreservingPositions: function(e) {
                N(this, e)
            },
            normalizeBoundaries: function() {
                T(this);
                var e = this.startContainer,
                    t = this.startOffset,
                    n = this.endContainer,
                    i = this.endOffset,
                    r = function(e) {
                        var t = e.nextSibling;
                        t && t.nodeType == e.nodeType && (n = e, i = e.length, e.appendData(t.data), t.parentNode.removeChild(t))
                    },
                    a = function(r) {
                        var o = r.previousSibling;
                        if (o && o.nodeType == r.nodeType) {
                            e = r;
                            var a = r.length;
                            if (t = o.length, r.insertData(0, o.data), o.parentNode.removeChild(o), e == n) i += t, n = e;
                            else if (n == r.parentNode) {
                                var s = $(r);
                                i == s ? (n = r, i = a) : i > s && i--
                            }
                        }
                    },
                    s = !0;
                if (W(n)) n.length == i && r(n);
                else {
                    if (i > 0) {
                        var l = n.childNodes[i - 1];
                        l && W(l) && r(l)
                    }
                    s = !this.collapsed
                }
                if (s) {
                    if (W(e)) 0 == t && a(e);
                    else if (t < e.childNodes.length) {
                        var c = e.childNodes[t];
                        c && W(c) && a(c)
                    }
                } else e = n, t = i;
                o(this, e, t, n, i)
            },
            collapseToPoint: function(e, t) {
                v(this), m(e, !0), y(e, t), this.setStartAndEnd(e, t)
            }
        }), I(n)
    }
    function M(e) {
        e.collapsed = e.startContainer === e.endContainer && e.startOffset === e.endOffset, e.commonAncestorContainer = e.collapsed ? e.startContainer : B.getCommonAncestor(e.startContainer, e.endContainer)
    }
    function L(e, t, n, i, r) {
        e.startContainer = t, e.startOffset = n, e.endContainer = i, e.endOffset = r, e.document = B.getDocument(t), M(e)
    }
    function R(e) {
        v(e), e.startContainer = e.startOffset = e.endContainer = e.endOffset = e.document = null, e.collapsed = e.commonAncestorContainer = null
    }
    function A(e) {
        this.startContainer = e, this.startOffset = 0, this.endContainer = e, this.endOffset = 0, this.document = e, M(this)
    }
    var B = e.dom,
        O = e.util,
        F = B.DomPosition,
        H = e.DOMException,
        W = B.isCharacterDataNode,
        $ = B.getNodeIndex,
        U = B.isOrIsAncestorOf,
        j = B.getDocument,
        z = B.comparePoints,
        G = B.splitDataNode,
        q = B.getClosestAncestorIn,
        K = B.getNodeLength,
        V = B.arrayContains,
        Q = B.getRootContainer,
        J = e.features.crashyTextNodes;
    p.prototype = {
        _current: null,
        _next: null,
        _first: null,
        _last: null,
        isSingleCharacterDataNode: !1,
        reset: function() {
            this._current = null, this._next = this._first
        },
        hasNext: function() {
            return !!this._next
        },
        next: function() {
            var e = this._current = this._next;
            return e && (this._next = e !== this._last ? e.nextSibling : null, W(e) && this.clonePartiallySelectedTextNodes && (e === this.ec && (e = e.cloneNode(!0)).deleteData(this.eo, e.length - this.eo), this._current === this.sc && (e = e.cloneNode(!0)).deleteData(0, this.so))), e
        },
        remove: function() {
            var e, t, n = this._current;
            !W(n) || n !== this.sc && n !== this.ec ? n.parentNode && n.parentNode.removeChild(n) : (e = n === this.sc ? this.so : 0, t = n === this.ec ? this.eo : n.length, e != t && n.deleteData(e, t - e))
        },
        isPartiallySelectedSubtree: function() {
            var e = this._current;
            return t(e, this.range)
        },
        getSubtreeIterator: function() {
            var e;
            if (this.isSingleCharacterDataNode) e = this.range.cloneRange(), e.collapse(!1);
            else {
                e = new A(n(this.range));
                var t = this._current,
                    i = t,
                    r = 0,
                    o = t,
                    a = K(t);
                U(t, this.sc) && (i = this.sc, r = this.so), U(t, this.ec) && (o = this.ec, a = this.eo), L(e, i, r, o, a)
            }
            return new p(e, this.clonePartiallySelectedTextNodes)
        },
        detach: function(e) {
            e && this.range.detach(), this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null
        }
    }, f.prototype = {
        BAD_BOUNDARYPOINTS_ERR: 1,
        INVALID_NODE_TYPE_ERR: 2
    }, f.prototype.toString = function() {
        return this.message
    };
    var Y = [1, 3, 4, 5, 7, 8, 10],
        X = [2, 9, 11],
        Z = [5, 6, 10, 12],
        et = [1, 3, 4, 5, 7, 8, 10, 11],
        tt = [1, 3, 4, 5, 7, 8],
        nt = g([9, 11]),
        it = g(Z),
        rt = g([6, 10, 12]),
        ot = document.createElement("style"),
        at = !1;
    try {
        ot.innerHTML = "<b>x</b>", at = 3 == ot.firstChild.nodeType
    } catch (st) {}
    e.features.htmlParsingConforms = at;
    var lt = at ?
        function(e) {
            var t = this.startContainer,
                n = j(t);
            if (!t) throw new H("INVALID_STATE_ERR");
            var i = null;
            return 1 == t.nodeType ? i = t : W(t) && (i = B.parentElement(t)), i = null === i || "HTML" == i.nodeName && B.isHtmlNamespace(j(i).documentElement) && B.isHtmlNamespace(i) ? n.createElement("body") : i.cloneNode(!1), i.innerHTML = e, B.fragmentFromNodeChildren(i)
        } : function(e) {
        v(this);
        var t = n(this),
            i = t.createElement("body");
        return i.innerHTML = e, B.fragmentFromNodeChildren(i)
    }, ct = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed", "commonAncestorContainer"], ut = 0, dt = 1, ht = 2, pt = 3, ft = 0, gt = 1, mt = 2, vt = 3;
    O.extend(e.rangePrototype, {
        compareBoundaryPoints: function(e, t) {
            T(this), w(this.startContainer, t.startContainer);
            var n, i, r, o, a = e == pt || e == ut ? "start" : "end",
                s = e == dt || e == ut ? "start" : "end";
            return n = this[a + "Container"], i = this[a + "Offset"], r = t[s + "Container"], o = t[s + "Offset"], z(n, i, r, o)
        },
        insertNode: function(e) {
            if (T(this), b(e, et), _(this.startContainer), U(e, this.startContainer)) throw new H("HIERARCHY_REQUEST_ERR");
            var t = o(e, this.startContainer, this.startOffset);
            this.setStartBefore(t)
        },
        cloneContents: function() {
            T(this);
            var e, t;
            if (this.collapsed) return n(this).createDocumentFragment();
            if (this.startContainer === this.endContainer && W(this.startContainer)) return e = this.startContainer.cloneNode(!0), e.data = e.data.slice(this.startOffset, this.endOffset), t = n(this).createDocumentFragment(), t.appendChild(e), t;
            var i = new p(this, !0);
            return e = s(i), i.detach(), e
        },
        canSurroundContents: function() {
            T(this), _(this.startContainer), _(this.endContainer);
            var e = new p(this, !0),
                n = e._first && t(e._first, this) || e._last && t(e._last, this);
            return e.detach(), !n
        },
        surroundContents: function(e) {
            if (b(e, tt), !this.canSurroundContents()) throw new f("BAD_BOUNDARYPOINTS_ERR");
            var t = this.extractContents();
            if (e.hasChildNodes()) for (; e.lastChild;) e.removeChild(e.lastChild);
            o(e, this.startContainer, this.startOffset), e.appendChild(t), this.selectNode(e)
        },
        cloneRange: function() {
            T(this);
            for (var e, t = new A(n(this)), i = ct.length; i--;) e = ct[i], t[e] = this[e];
            return t
        },
        toString: function() {
            T(this);
            var e = this.startContainer;
            if (e === this.endContainer && W(e)) return 3 == e.nodeType || 4 == e.nodeType ? e.data.slice(this.startOffset, this.endOffset) : "";
            var t = [],
                n = new p(this, !0);
            return l(n, function(e) {
                (3 == e.nodeType || 4 == e.nodeType) && t.push(e.data)
            }), n.detach(), t.join("")
        },
        compareNode: function(e) {
            T(this);
            var t = e.parentNode,
                n = $(e);
            if (!t) throw new H("NOT_FOUND_ERR");
            var i = this.comparePoint(t, n),
                r = this.comparePoint(t, n + 1);
            return 0 > i ? r > 0 ? mt : ft : r > 0 ? gt : vt
        },
        comparePoint: function(e, t) {
            return T(this), S(e, "HIERARCHY_REQUEST_ERR"), w(e, this.startContainer), z(e, t, this.startContainer, this.startOffset) < 0 ? -1 : z(e, t, this.endContainer, this.endOffset) > 0 ? 1 : 0
        },
        createContextualFragment: lt,
        toHtml: function() {
            T(this);
            var e = this.commonAncestorContainer.parentNode.cloneNode(!1);
            return e.appendChild(this.cloneContents()), e.innerHTML
        },
        intersectsNode: function(e, t) {
            if (T(this), S(e, "NOT_FOUND_ERR"), j(e) !== n(this)) return !1;
            var i = e.parentNode,
                r = $(e);
            S(i, "NOT_FOUND_ERR");
            var o = z(i, r, this.endContainer, this.endOffset),
                a = z(i, r + 1, this.startContainer, this.startOffset);
            return t ? 0 >= o && a >= 0 : 0 > o && a > 0
        },
        isPointInRange: function(e, t) {
            return T(this), S(e, "HIERARCHY_REQUEST_ERR"), w(e, this.startContainer), z(e, t, this.startContainer, this.startOffset) >= 0 && z(e, t, this.endContainer, this.endOffset) <= 0
        },
        intersectsRange: function(e) {
            return a(this, e, !1)
        },
        intersectsOrTouchesRange: function(e) {
            return a(this, e, !0)
        },
        intersection: function(e) {
            if (this.intersectsRange(e)) {
                var t = z(this.startContainer, this.startOffset, e.startContainer, e.startOffset),
                    n = z(this.endContainer, this.endOffset, e.endContainer, e.endOffset),
                    i = this.cloneRange();
                return -1 == t && i.setStart(e.startContainer, e.startOffset), 1 == n && i.setEnd(e.endContainer, e.endOffset), i
            }
            return null
        },
        union: function(e) {
            if (this.intersectsOrTouchesRange(e)) {
                var t = this.cloneRange();
                return -1 == z(e.startContainer, e.startOffset, this.startContainer, this.startOffset) && t.setStart(e.startContainer, e.startOffset), 1 == z(e.endContainer, e.endOffset, this.endContainer, this.endOffset) && t.setEnd(e.endContainer, e.endOffset), t
            }
            throw new f("Ranges do not intersect")
        },
        containsNode: function(e, t) {
            return t ? this.intersectsNode(e, !1) : this.compareNode(e) == vt
        },
        containsNodeContents: function(e) {
            return this.comparePoint(e, 0) >= 0 && this.comparePoint(e, K(e)) <= 0
        },
        containsRange: function(e) {
            var t = this.intersection(e);
            return null !== t && e.equals(t)
        },
        containsNodeText: function(e) {
            var t = this.cloneRange();
            t.selectNode(e);
            var n = t.getNodes([3]);
            if (n.length > 0) {
                t.setStart(n[0], 0);
                var i = n.pop();
                t.setEnd(i, i.length);
                var r = this.containsRange(t);
                return t.detach(), r
            }
            return this.containsNodeContents(e)
        },
        getNodes: function(e, t) {
            return T(this), d(this, e, t)
        },
        getDocument: function() {
            return n(this)
        },
        collapseBefore: function(e) {
            v(this), this.setEndBefore(e), this.collapse(!1)
        },
        collapseAfter: function(e) {
            v(this), this.setStartAfter(e), this.collapse(!0)
        },
        getBookmark: function(t) {
            var i = n(this),
                r = e.createRange(i);
            t = t || B.getBody(i), r.selectNodeContents(t);
            var o = this.intersection(r),
                a = 0,
                s = 0;
            return o && (r.setEnd(o.startContainer, o.startOffset), a = r.toString().length, s = a + o.toString().length, r.detach()), {
                start: a,
                end: s,
                containerNode: t
            }
        },
        moveToBookmark: function(e) {
            var t = e.containerNode,
                n = 0;
            this.setStart(t, 0), this.collapse(!0);
            for (var i, r, o, a, s = [t], l = !1, c = !1; !c && (i = s.pop());) if (3 == i.nodeType) r = n + i.length, !l && e.start >= n && e.start <= r && (this.setStart(i, e.start - n), l = !0), l && e.end >= n && e.end <= r && (this.setEnd(i, e.end - n), c = !0), n = r;
            else for (a = i.childNodes, o = a.length; o--;) s.push(a[o])
        },
        getName: function() {
            return "DomRange"
        },
        equals: function(e) {
            return A.rangesEqual(this, e)
        },
        isValid: function() {
            return x(this)
        },
        inspect: function() {
            return h(this)
        }
    }), D(A, L, R), O.extend(A, {
        rangeProperties: ct,
        RangeIterator: p,
        copyComparisonConstants: I,
        createPrototypeRange: D,
        inspect: h,
        getRangeDocument: n,
        rangesEqual: function(e, t) {
            return e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset
        }
    }), e.DomRange = A, e.RangeException = f
}), rangy.createCoreModule("WrappedRange", ["DomRange"], function(e, t) {
    var n, i, r = e.dom,
        o = e.util,
        a = r.DomPosition,
        s = e.DomRange,
        l = r.getBody,
        c = r.getContentDocument,
        u = r.isCharacterDataNode;
    if (e.features.implementsDomRange && !
            function() {
                function i(e) {
                    for (var t, n = p.length; n--;) t = p[n], e[t] = e.nativeRange[t];
                    e.collapsed = e.startContainer === e.endContainer && e.startOffset === e.endOffset
                }
                function a(e, t, n, i, r) {
                    var o = e.startContainer !== t || e.startOffset != n,
                        a = e.endContainer !== i || e.endOffset != r,
                        s = !e.equals(e.nativeRange);
                    (o || a || s) && (e.setEnd(i, r), e.setStart(t, n))
                }
                function u(e) {
                    e.nativeRange.detach(), e.detached = !0;
                    for (var t = p.length; t--;) e[p[t]] = null
                }
                var d, h, p = s.rangeProperties;
                n = function(e) {
                    if (!e) throw t.createError("WrappedRange: Range must be specified");
                    this.nativeRange = e, i(this)
                }, s.createPrototypeRange(n, a, u), d = n.prototype, d.selectNode = function(e) {
                    this.nativeRange.selectNode(e), i(this)
                }, d.cloneContents = function() {
                    return this.nativeRange.cloneContents()
                }, d.surroundContents = function(e) {
                    this.nativeRange.surroundContents(e), i(this)
                }, d.collapse = function(e) {
                    this.nativeRange.collapse(e), i(this)
                }, d.cloneRange = function() {
                    return new n(this.nativeRange.cloneRange())
                }, d.refresh = function() {
                    i(this)
                }, d.toString = function() {
                    return this.nativeRange.toString()
                };
                var f = document.createTextNode("test");
                l(document).appendChild(f);
                var g = document.createRange();
                g.setStart(f, 0), g.setEnd(f, 0);
                try {
                    g.setStart(f, 1), d.setStart = function(e, t) {
                        this.nativeRange.setStart(e, t), i(this)
                    }, d.setEnd = function(e, t) {
                        this.nativeRange.setEnd(e, t), i(this)
                    }, h = function(e) {
                        return function(t) {
                            this.nativeRange[e](t), i(this)
                        }
                    }
                } catch (m) {
                    d.setStart = function(e, t) {
                        try {
                            this.nativeRange.setStart(e, t)
                        } catch (n) {
                            this.nativeRange.setEnd(e, t), this.nativeRange.setStart(e, t)
                        }
                        i(this)
                    }, d.setEnd = function(e, t) {
                        try {
                            this.nativeRange.setEnd(e, t)
                        } catch (n) {
                            this.nativeRange.setStart(e, t), this.nativeRange.setEnd(e, t)
                        }
                        i(this)
                    }, h = function(e, t) {
                        return function(n) {
                            try {
                                this.nativeRange[e](n)
                            } catch (r) {
                                this.nativeRange[t](n), this.nativeRange[e](n)
                            }
                            i(this)
                        }
                    }
                }
                d.setStartBefore = h("setStartBefore", "setEndBefore"), d.setStartAfter = h("setStartAfter", "setEndAfter"), d.setEndBefore = h("setEndBefore", "setStartBefore"), d.setEndAfter = h("setEndAfter", "setStartAfter"), d.selectNodeContents = function(e) {
                    this.setStartAndEnd(e, 0, r.getNodeLength(e))
                }, g.selectNodeContents(f), g.setEnd(f, 3);
                var v = document.createRange();
                v.selectNodeContents(f), v.setEnd(f, 4), v.setStart(f, 2), d.compareBoundaryPoints = -1 == g.compareBoundaryPoints(g.START_TO_END, v) && 1 == g.compareBoundaryPoints(g.END_TO_START, v) ?
                    function(e, t) {
                        return t = t.nativeRange || t, e == t.START_TO_END ? e = t.END_TO_START : e == t.END_TO_START && (e = t.START_TO_END), this.nativeRange.compareBoundaryPoints(e, t)
                    } : function(e, t) {
                    return this.nativeRange.compareBoundaryPoints(e, t.nativeRange || t)
                };
                var b = document.createElement("div");
                b.innerHTML = "123";
                var y = b.firstChild,
                    w = l(document);
                w.appendChild(b), g.setStart(y, 1), g.setEnd(y, 2), g.deleteContents(), "13" == y.data && (d.deleteContents = function() {
                    this.nativeRange.deleteContents(), i(this)
                }, d.extractContents = function() {
                    var e = this.nativeRange.extractContents();
                    return i(this), e
                }), w.removeChild(b), w = null, o.isHostMethod(g, "createContextualFragment") && (d.createContextualFragment = function(e) {
                    return this.nativeRange.createContextualFragment(e)
                }), l(document).removeChild(f), g.detach(), v.detach(), d.getName = function() {
                    return "WrappedRange"
                }, e.WrappedRange = n, e.createNativeRange = function(e) {
                    return e = c(e, t, "createNativeRange"), e.createRange()
                }
            }(), e.features.implementsTextRange) {
        var d = function(e) {
                var t = e.parentElement(),
                    n = e.duplicate();
                n.collapse(!0);
                var i = n.parentElement();
                n = e.duplicate(), n.collapse(!1);
                var o = n.parentElement(),
                    a = i == o ? i : r.getCommonAncestor(i, o);
                return a == t ? a : r.getCommonAncestor(t, a)
            },
            h = function(e) {
                return 0 == e.compareEndPoints("StartToEnd", e)
            },
            p = function(e, t, n, i, o) {
                var s = e.duplicate();
                s.collapse(n);
                var l = s.parentElement();
                if (r.isOrIsAncestorOf(t, l) || (l = t), !l.canHaveHTML) {
                    var c = new a(l.parentNode, r.getNodeIndex(l));
                    return {
                        boundaryPosition: c,
                        nodeInfo: {
                            nodeIndex: c.offset,
                            containerElement: c.node
                        }
                    }
                }
                var d = r.getDocument(l).createElement("span");
                d.parentNode && d.parentNode.removeChild(d);
                for (var h, p, f, g, m, v = n ? "StartToStart" : "StartToEnd", b = o && o.containerElement == l ? o.nodeIndex : 0, y = l.childNodes.length, w = y, _ = w;;) {
                    if (_ == y ? l.appendChild(d) : l.insertBefore(d, l.childNodes[_]), s.moveToElementText(d), h = s.compareEndPoints(v, e), 0 == h || b == w) break;
                    if (-1 == h) {
                        if (w == b + 1) break;
                        b = _
                    } else w = w == b + 1 ? b : _;
                    _ = Math.floor((b + w) / 2), l.removeChild(d)
                }
                if (m = d.nextSibling, -1 == h && m && u(m)) {
                    s.setEndPoint(n ? "EndToStart" : "EndToEnd", e);
                    var S;
                    if (/[\r\n]/.test(m.data)) {
                        var C = s.duplicate(),
                            k = C.text.replace(/\r\n/g, "\r").length;
                        for (S = C.moveStart("character", k); - 1 == (h = C.compareEndPoints("StartToEnd", C));) S++, C.moveStart("character", 1)
                    } else S = s.text.length;
                    g = new a(m, S)
                } else p = (i || !n) && d.previousSibling, f = (i || n) && d.nextSibling, g = f && u(f) ? new a(f, 0) : p && u(p) ? new a(p, p.data.length) : new a(l, r.getNodeIndex(d));
                return d.parentNode.removeChild(d), {
                    boundaryPosition: g,
                    nodeInfo: {
                        nodeIndex: _,
                        containerElement: l
                    }
                }
            },
            f = function(e, t) {
                var n, i, o, a, s = e.offset,
                    c = r.getDocument(e.node),
                    d = l(c).createTextRange(),
                    h = u(e.node);
                return h ? (n = e.node, i = n.parentNode) : (a = e.node.childNodes, n = s < a.length ? a[s] : null, i = e.node), o = c.createElement("span"), o.innerHTML = "&#feff;", n ? i.insertBefore(o, n) : i.appendChild(o), d.moveToElementText(o), d.collapse(!t), i.removeChild(o), h && d[t ? "moveStart" : "moveEnd"]("character", s), d
            };
        if (i = function(e) {
                this.textRange = e, this.refresh()
            }, i.prototype = new s(document), i.prototype.refresh = function() {
                var e, t, n, i = d(this.textRange);
                h(this.textRange) ? t = e = p(this.textRange, i, !0, !0).boundaryPosition : (n = p(this.textRange, i, !0, !1), e = n.boundaryPosition, t = p(this.textRange, i, !1, !1, n.nodeInfo).boundaryPosition), this.setStart(e.node, e.offset), this.setEnd(t.node, t.offset)
            }, i.prototype.getName = function() {
                return "WrappedTextRange"
            }, s.copyComparisonConstants(i), i.rangeToTextRange = function(e) {
                if (e.collapsed) return f(new a(e.startContainer, e.startOffset), !0);
                var t = f(new a(e.startContainer, e.startOffset), !0),
                    n = f(new a(e.endContainer, e.endOffset), !1),
                    i = l(s.getRangeDocument(e)).createTextRange();
                return i.setEndPoint("StartToStart", t), i.setEndPoint("EndToEnd", n), i
            }, e.WrappedTextRange = i, !e.features.implementsDomRange || e.config.preferTextRange) {
            var g = function() {
                return this
            }();
            "undefined" == typeof g.Range && (g.Range = i), e.createNativeRange = function(e) {
                return e = c(e, t, "createNativeRange"), l(e).createTextRange()
            }, e.WrappedRange = i
        }
    }
    e.createRange = function(n) {
        return n = c(n, t, "createRange"), new e.WrappedRange(e.createNativeRange(n))
    }, e.createRangyRange = function(e) {
        return e = c(e, t, "createRangyRange"), new s(e)
    }, e.createIframeRange = function(n) {
        return t.deprecationNotice("createIframeRange()", "createRange(iframeEl)"), e.createRange(n)
    }, e.createIframeRangyRange = function(n) {
        return t.deprecationNotice("createIframeRangyRange()", "createRangyRange(iframeEl)"), e.createRangyRange(n)
    }, e.addCreateMissingNativeApiListener(function(t) {
        var n = t.document;
        "undefined" == typeof n.createRange && (n.createRange = function() {
            return e.createRange(n)
        }), n = t = null
    })
}), rangy.createCoreModule("WrappedSelection", ["DomRange", "WrappedRange"], function(e, t) {
    function n(e) {
        return "string" == typeof e ? /^backward(s)?$/i.test(e) : !! e
    }
    function i(e, n) {
        if (e) {
            if (E.isWindow(e)) return e;
            if (e instanceof v) return e.win;
            var i = E.getContentDocument(e, t, n);
            return E.getWindow(i)
        }
        return window
    }
    function r(e) {
        return i(e, "getWinSelection").getSelection()
    }
    function o(e) {
        return i(e, "getDocSelection").document.selection
    }
    function a(e) {
        var t = !1;
        return e.anchorNode && (t = 1 == E.comparePoints(e.anchorNode, e.anchorOffset, e.focusNode, e.focusOffset)), t
    }
    function s(e, t, n) {
        var i = n ? "end" : "start",
            r = n ? "start" : "end";
        e.anchorNode = t[i + "Container"], e.anchorOffset = t[i + "Offset"], e.focusNode = t[r + "Container"], e.focusOffset = t[r + "Offset"]
    }
    function l(e) {
        var t = e.nativeSelection;
        e.anchorNode = t.anchorNode, e.anchorOffset = t.anchorOffset, e.focusNode = t.focusNode, e.focusOffset = t.focusOffset
    }
    function c(e) {
        e.anchorNode = e.focusNode = null, e.anchorOffset = e.focusOffset = 0, e.rangeCount = 0, e.isCollapsed = !0, e._ranges.length = 0
    }
    function u(t) {
        var n;
        return t instanceof D ? (n = e.createNativeRange(t.getDocument()), n.setEnd(t.endContainer, t.endOffset), n.setStart(t.startContainer, t.startOffset)) : t instanceof M ? n = t.nativeRange : A.implementsDomRange && t instanceof E.getWindow(t.startContainer).Range && (n = t), n
    }
    function d(e) {
        if (!e.length || 1 != e[0].nodeType) return !1;
        for (var t = 1, n = e.length; n > t; ++t) if (!E.isAncestorOf(e[0], e[t])) return !1;
        return !0
    }
    function h(e) {
        var n = e.getNodes();
        if (!d(n)) throw t.createError("getSingleElementFromRange: range " + e.inspect() + " did not consist of a single element");
        return n[0]
    }
    function p(e) {
        return !!e && "undefined" != typeof e.text
    }
    function f(e, t) {
        var n = new M(t);
        e._ranges = [n], s(e, n, !1), e.rangeCount = 1, e.isCollapsed = n.collapsed
    }
    function g(t) {
        if (t._ranges.length = 0, "None" == t.docSelection.type) c(t);
        else {
            var n = t.docSelection.createRange();
            if (p(n)) f(t, n);
            else {
                t.rangeCount = n.length;
                for (var i, r = O(n.item(0)), o = 0; o < t.rangeCount; ++o) i = e.createRange(r), i.selectNode(n.item(o)), t._ranges.push(i);
                t.isCollapsed = 1 == t.rangeCount && t._ranges[0].collapsed, s(t, t._ranges[t.rangeCount - 1], !1)
            }
        }
    }
    function m(e, n) {
        for (var i = e.docSelection.createRange(), r = h(n), o = O(i.item(0)), a = F(o).createControlRange(), s = 0, l = i.length; l > s; ++s) a.add(i.item(s));
        try {
            a.add(r)
        } catch (c) {
            throw t.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")
        }
        a.select(), g(e)
    }
    function v(e, t, n) {
        this.nativeSelection = e, this.docSelection = t, this._ranges = [], this.win = n, this.refresh()
    }
    function b(e) {
        e.win = e.anchorNode = e.focusNode = e._ranges = null, e.rangeCount = e.anchorOffset = e.focusOffset = 0, e.detached = !0
    }
    function y(e, t) {
        for (var n, i, r = tt.length; r--;) if (n = tt[r], i = n.selection, "deleteAll" == t) b(i);
        else if (n.win == e) return "delete" == t ? (tt.splice(r, 1), !0) : i;
        return "deleteAll" == t && (tt.length = 0), null
    }
    function w(e, n) {
        for (var i, r = O(n[0].startContainer), o = F(r).createControlRange(), a = 0, s = n.length; s > a; ++a) {
            i = h(n[a]);
            try {
                o.add(i)
            } catch (l) {
                throw t.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)")
            }
        }
        o.select(), g(e)
    }
    function _(e, t) {
        if (e.win.document != O(t)) throw new L("WRONG_DOCUMENT_ERR")
    }
    function S(t) {
        return function(n, i) {
            var r;
            this.rangeCount ? (r = this.getRangeAt(0), r["set" + (t ? "Start" : "End")](n, i)) : (r = e.createRange(this.win.document), r.setStartAndEnd(n, i)), this.setSingleRange(r, this.isBackward())
        }
    }
    function C(e) {
        var t = [],
            n = new R(e.anchorNode, e.anchorOffset),
            i = new R(e.focusNode, e.focusOffset),
            r = "function" == typeof e.getName ? e.getName() : "Selection";
        if ("undefined" != typeof e.rangeCount) for (var o = 0, a = e.rangeCount; a > o; ++o) t[o] = D.inspect(e.getRangeAt(o));
        return "[" + r + "(Ranges: " + t.join(", ") + ")(anchor: " + n.inspect() + ", focus: " + i.inspect() + "]"
    }
    e.config.checkSelectionRanges = !0;
    var k, x, T = "boolean",
        N = "number",
        E = e.dom,
        I = e.util,
        P = I.isHostMethod,
        D = e.DomRange,
        M = e.WrappedRange,
        L = e.DOMException,
        R = E.DomPosition,
        A = e.features,
        B = "Control",
        O = E.getDocument,
        F = E.getBody,
        H = D.rangesEqual,
        W = P(window, "getSelection"),
        $ = I.isHostObject(document, "selection");
    A.implementsWinGetSelection = W, A.implementsDocSelection = $;
    var U = $ && (!W || e.config.preferTextRange);
    U ? (k = o, e.isSelectionValid = function(e) {
        var t = i(e, "isSelectionValid").document,
            n = t.selection;
        return "None" != n.type || O(n.createRange().parentElement()) == t
    }) : W ? (k = r, e.isSelectionValid = function() {
        return !0
    }) : t.fail("Neither document.selection or window.getSelection() detected."), e.getNativeSelection = k;
    var j = k(),
        z = e.createNativeRange(document),
        G = F(document),
        q = I.areHostProperties(j, ["anchorNode", "focusNode", "anchorOffset", "focusOffset"]);
    A.selectionHasAnchorAndFocus = q;
    var K = P(j, "extend");
    A.selectionHasExtend = K;
    var V = typeof j.rangeCount == N;
    A.selectionHasRangeCount = V;
    var Q = !1,
        J = !0,
        Y = K ?
            function(t, n) {
                var i = D.getRangeDocument(n),
                    r = e.createRange(i);
                r.collapseToPoint(n.endContainer, n.endOffset), t.addRange(u(r)), t.extend(n.startContainer, n.startOffset)
            } : null;
    I.areHostMethods(j, ["addRange", "getRangeAt", "removeAllRanges"]) && typeof j.rangeCount == N && A.implementsDomRange && !
        function() {
            var t = window.getSelection();
            if (t) {
                for (var n = t.rangeCount, i = n > 1, r = [], o = a(t), s = 0; n > s; ++s) r[s] = t.getRangeAt(s);
                var l = F(document),
                    c = l.appendChild(document.createElement("div"));
                c.contentEditable = "false";
                var u = c.appendChild(document.createTextNode("\xa0\xa0\xa0")),
                    d = document.createRange();
                if (d.setStart(u, 1), d.collapse(!0), t.addRange(d), J = 1 == t.rangeCount, t.removeAllRanges(), !i) {
                    var h = d.cloneRange();
                    d.setStart(u, 0), h.setEnd(u, 3), h.setStart(u, 2), t.addRange(d), t.addRange(h), Q = 2 == t.rangeCount, h.detach()
                }
                for (l.removeChild(c), t.removeAllRanges(), d.detach(), s = 0; n > s; ++s) 0 == s && o ? Y ? Y(t, r[s]) : (e.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because browser does not support Selection.extend"), t.addRange(r[s])) : t.addRange(r[s])
            }
        }(), A.selectionSupportsMultipleRanges = Q, A.collapsedNonEditableSelectionsSupported = J;
    var X, Z = !1;
    G && P(G, "createControlRange") && (X = G.createControlRange(), I.areHostProperties(X, ["item", "add"]) && (Z = !0)), A.implementsControlRange = Z, x = q ?
        function(e) {
            return e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset
        } : function(e) {
        return e.rangeCount ? e.getRangeAt(e.rangeCount - 1).collapsed : !1
    };
    var et;
    P(j, "getRangeAt") ? et = function(e, t) {
        try {
            return e.getRangeAt(t)
        } catch (n) {
            return null
        }
    } : q && (et = function(t) {
        var n = O(t.anchorNode),
            i = e.createRange(n);
        return i.setStartAndEnd(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset), i.collapsed !== this.isCollapsed && i.setStartAndEnd(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset), i
    }), v.prototype = e.selectionPrototype;
    var tt = [],
        nt = function(e) {
            if (e && e instanceof v) return e.refresh(), e;
            e = i(e, "getNativeSelection");
            var t = y(e),
                n = k(e),
                r = $ ? o(e) : null;
            return t ? (t.nativeSelection = n, t.docSelection = r, t.refresh()) : (t = new v(n, r, e), tt.push({
                win: e,
                selection: t
            })), t
        };
    e.getSelection = nt, e.getIframeSelection = function(n) {
        return t.deprecationNotice("getIframeSelection()", "getSelection(iframeEl)"), e.getSelection(E.getIframeWindow(n))
    };
    var it = v.prototype;
    if (!U && q && I.areHostMethods(j, ["removeAllRanges", "addRange"])) {
        it.removeAllRanges = function() {
            this.nativeSelection.removeAllRanges(), c(this)
        };
        var rt = function(e, t) {
            Y(e.nativeSelection, t), e.refresh()
        };
        it.addRange = V ?
            function(t, i) {
                if (Z && $ && this.docSelection.type == B) m(this, t);
                else if (n(i) && K) rt(this, t);
                else {
                    var r;
                    if (Q ? r = this.rangeCount : (this.removeAllRanges(), r = 0), this.nativeSelection.addRange(u(t).cloneRange()), this.rangeCount = this.nativeSelection.rangeCount, this.rangeCount == r + 1) {
                        if (e.config.checkSelectionRanges) {
                            var o = et(this.nativeSelection, this.rangeCount - 1);
                            o && !H(o, t) && (t = new M(o))
                        }
                        this._ranges[this.rangeCount - 1] = t, s(this, t, st(this.nativeSelection)), this.isCollapsed = x(this)
                    } else this.refresh()
                }
            } : function(e, t) {
            n(t) && K ? rt(this, e) : (this.nativeSelection.addRange(u(e)), this.refresh())
        }, it.setRanges = function(e) {
            if (Z && e.length > 1) w(this, e);
            else {
                this.removeAllRanges();
                for (var t = 0, n = e.length; n > t; ++t) this.addRange(e[t])
            }
        }
    } else {
        if (!(P(j, "empty") && P(z, "select") && Z && U)) return t.fail("No means of selecting a Range or TextRange was found"), !1;
        it.removeAllRanges = function() {
            try {
                if (this.docSelection.empty(), "None" != this.docSelection.type) {
                    var e;
                    if (this.anchorNode) e = O(this.anchorNode);
                    else if (this.docSelection.type == B) {
                        var t = this.docSelection.createRange();
                        t.length && (e = O(t.item(0)))
                    }
                    if (e) {
                        var n = F(e).createTextRange();
                        n.select(), this.docSelection.empty()
                    }
                }
            } catch (i) {}
            c(this)
        }, it.addRange = function(t) {
            this.docSelection.type == B ? m(this, t) : (e.WrappedTextRange.rangeToTextRange(t).select(), this._ranges[0] = t, this.rangeCount = 1, this.isCollapsed = this._ranges[0].collapsed, s(this, t, !1))
        }, it.setRanges = function(e) {
            this.removeAllRanges();
            var t = e.length;
            t > 1 ? w(this, e) : t && this.addRange(e[0])
        }
    }
    it.getRangeAt = function(e) {
        if (0 > e || e >= this.rangeCount) throw new L("INDEX_SIZE_ERR");
        return this._ranges[e].cloneRange()
    };
    var ot;
    if (U) ot = function(t) {
        var n;
        e.isSelectionValid(t.win) ? n = t.docSelection.createRange() : (n = F(t.win.document).createTextRange(), n.collapse(!0)), t.docSelection.type == B ? g(t) : p(n) ? f(t, n) : c(t)
    };
    else if (P(j, "getRangeAt") && typeof j.rangeCount == N) ot = function(t) {
        if (Z && $ && t.docSelection.type == B) g(t);
        else if (t._ranges.length = t.rangeCount = t.nativeSelection.rangeCount, t.rangeCount) {
            for (var n = 0, i = t.rangeCount; i > n; ++n) t._ranges[n] = new e.WrappedRange(t.nativeSelection.getRangeAt(n));
            s(t, t._ranges[t.rangeCount - 1], st(t.nativeSelection)), t.isCollapsed = x(t)
        } else c(t)
    };
    else {
        if (!q || typeof j.isCollapsed != T || typeof z.collapsed != T || !A.implementsDomRange) return t.fail("No means of obtaining a Range or TextRange from the user's selection was found"), !1;
        ot = function(e) {
            var t, n = e.nativeSelection;
            n.anchorNode ? (t = et(n, 0), e._ranges = [t], e.rangeCount = 1, l(e), e.isCollapsed = x(e)) : c(e)
        }
    }
    it.refresh = function(e) {
        var t = e ? this._ranges.slice(0) : null,
            n = this.anchorNode,
            i = this.anchorOffset;
        if (ot(this), e) {
            var r = t.length;
            if (r != this._ranges.length) return !0;
            if (this.anchorNode != n || this.anchorOffset != i) return !0;
            for (; r--;) if (!H(t[r], this._ranges[r])) return !0;
            return !1
        }
    };
    var at = function(e, t) {
        var n = e.getAllRanges();
        e.removeAllRanges();
        for (var i = 0, r = n.length; r > i; ++i) H(t, n[i]) || e.addRange(n[i]);
        e.rangeCount || c(e)
    };
    it.removeRange = Z ?
        function(e) {
            if (this.docSelection.type == B) {
                for (var t, n = this.docSelection.createRange(), i = h(e), r = O(n.item(0)), o = F(r).createControlRange(), a = !1, s = 0, l = n.length; l > s; ++s) t = n.item(s), t !== i || a ? o.add(n.item(s)) : a = !0;
                o.select(), g(this)
            } else at(this, e)
        } : function(e) {
        at(this, e)
    };
    var st;
    !U && q && A.implementsDomRange ? (st = a, it.isBackward = function() {
        return st(this)
    }) : st = it.isBackward = function() {
        return !1
    }, it.isBackwards = it.isBackward, it.toString = function() {
        for (var e = [], t = 0, n = this.rangeCount; n > t; ++t) e[t] = "" + this._ranges[t];
        return e.join("")
    }, it.collapse = function(t, n) {
        _(this, t);
        var i = e.createRange(t);
        i.collapseToPoint(t, n), this.setSingleRange(i), this.isCollapsed = !0
    }, it.collapseToStart = function() {
        if (!this.rangeCount) throw new L("INVALID_STATE_ERR");
        var e = this._ranges[0];
        this.collapse(e.startContainer, e.startOffset)
    }, it.collapseToEnd = function() {
        if (!this.rangeCount) throw new L("INVALID_STATE_ERR");
        var e = this._ranges[this.rangeCount - 1];
        this.collapse(e.endContainer, e.endOffset)
    }, it.selectAllChildren = function(t) {
        _(this, t);
        var n = e.createRange(t);
        n.selectNodeContents(t), this.setSingleRange(n)
    }, it.deleteFromDocument = function() {
        if (Z && $ && this.docSelection.type == B) {
            for (var e, t = this.docSelection.createRange(); t.length;) e = t.item(0), t.remove(e), e.parentNode.removeChild(e);
            this.refresh()
        } else if (this.rangeCount) {
            var n = this.getAllRanges();
            if (n.length) {
                this.removeAllRanges();
                for (var i = 0, r = n.length; r > i; ++i) n[i].deleteContents();
                this.addRange(n[r - 1])
            }
        }
    }, it.eachRange = function(e, t) {
        for (var n = 0, i = this._ranges.length; i > n; ++n) if (e(this.getRangeAt(n))) return t
    }, it.getAllRanges = function() {
        var e = [];
        return this.eachRange(function(t) {
            e.push(t)
        }), e
    }, it.setSingleRange = function(e, t) {
        this.removeAllRanges(), this.addRange(e, t)
    }, it.callMethodOnEachRange = function(e, t) {
        var n = [];
        return this.eachRange(function(i) {
            n.push(i[e].apply(i, t))
        }), n
    }, it.setStart = S(!0), it.setEnd = S(!1), e.rangePrototype.select = function(e) {
        nt(this.getDocument()).setSingleRange(this, e)
    }, it.changeEachRange = function(e) {
        var t = [],
            n = this.isBackward();
        this.eachRange(function(n) {
            e(n), t.push(n)
        }), this.removeAllRanges(), n && 1 == t.length ? this.addRange(t[0], "backward") : this.setRanges(t)
    }, it.containsNode = function(e, t) {
        return this.eachRange(function(n) {
            return n.containsNode(e, t)
        }, !0)
    }, it.getBookmark = function(e) {
        return {
            backward: this.isBackward(),
            rangeBookmarks: this.callMethodOnEachRange("getBookmark", [e])
        }
    }, it.moveToBookmark = function(t) {
        for (var n, i, r = [], o = 0; n = t.rangeBookmarks[o++];) i = e.createRange(this.win), i.moveToBookmark(n), r.push(i);
        t.backward ? this.setSingleRange(r[0], "backward") : this.setRanges(r)
    }, it.toHtml = function() {
        return this.callMethodOnEachRange("toHtml").join("")
    }, it.getName = function() {
        return "WrappedSelection"
    }, it.inspect = function() {
        return C(this)
    }, it.detach = function() {
        y(this.win, "delete"), b(this)
    }, v.detachAll = function() {
        y(null, "deleteAll")
    }, v.inspect = C, v.isDirectionBackward = n, e.Selection = v, e.selectionPrototype = it, e.addCreateMissingNativeApiListener(function(e) {
        "undefined" == typeof e.getSelection && (e.getSelection = function() {
            return nt(e)
        }), e = null
    })
}), "undefined" != typeof module && "object" == typeof exports ? module.isMinify = !0 : "function" == typeof define && define.amd ? define("isMinify", function() {
    return !0
}) : this.isMinify = !0, function() {
    function e(e) {
        this.tokens = [], this.tokens.links = {}, this.options = e || c.defaults, this.rules = u.normal, this.options.gfm && (this.rules = this.options.tables ? u.tables : u.gfm)
    }
    function t(e, t) {
        if (this.options = t || c.defaults, this.links = e, this.rules = d.normal, this.renderer = this.options.renderer || new n, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
        this.options.gfm ? this.rules = this.options.breaks ? d.breaks : d.gfm : this.options.pedantic && (this.rules = d.pedantic)
    }
    function n(e) {
        this.options = e || {}
    }
    function i(e) {
        this.tokens = [], this.token = null, this.options = e || c.defaults, this.options.renderer = this.options.renderer || new n, this.renderer = this.options.renderer, this.renderer.options = this.options
    }
    function r(e, t) {
        return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }
    function o(e) {
        return e.replace(/&([#\w]+);/g, function(e, t) {
            return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? String.fromCharCode("x" === t.charAt(1) ? parseInt(t.substring(2), 16) : +t.substring(1)) : ""
        })
    }
    function a(e, t) {
        return e = e.source, t = t || "", function n(i, r) {
            return i ? (r = r.source || r, r = r.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(i, r), n) : new RegExp(e, t)
        }
    }
    function s() {}
    function l(e) {
        for (var t, n, i = 1; i < arguments.length; i++) {
            t = arguments[i];
            for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }
    function c(t, n, o) {
        var a;
        for (a in h) a = h[a], a && a.init && a.init();
        if (o || "function" == typeof n) {
            o || (o = n, n = null), n = l({}, c.defaults, n || {});
            var s, u, d = n.highlight,
                p = 0;
            try {
                s = e.lex(t, n)
            } catch (f) {
                return o(f)
            }
            u = s.length;
            var g = function(e) {
                if (e) return n.highlight = d, o(e);
                var t;
                try {
                    t = i.parse(s, n)
                } catch (r) {
                    e = r
                }
                return n.highlight = d, e ? o(e) : o(null, t)
            };
            if (!d || d.length < 3) return g();
            if (delete n.highlight, !u) return g();
            for (; p < s.length; p++)!
                function(e) {
                    return "code" !== e.type ? --u || g() : d(e.text, e.lang, function(t, n) {
                        return t ? g(t) : null == n || n === e.text ? --u || g() : (e.text = n, e.escaped = !0, void(--u || g()))
                    })
                }(s[p])
        } else try {
            return n && (n = l({}, c.defaults, n)), i.parse(e.lex(t, n), n)
        } catch (f) {
            if (f.message += "\nPlease report this to https://github.com/chjj/marked.", (n || c.defaults).silent) return "<p>An error occured:</p><pre>" + r(f.message + "", !0) + "</pre>";
            throw f
        }
    }
    var u = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: s,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: s,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: s,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
    };
    u.bullet = /(?:[*+-]|\d+\.)/, u.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, u.item = a(u.item, "gm")(/bull/g, u.bullet)(), u.list = a(u.list)(/bull/g, u.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + u.def.source + ")")(), u.blockquote = a(u.blockquote)("def", u.def)(), u._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", u.html = a(u.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, u._tag)(), u.paragraph = a(u.paragraph)("hr", u.hr)("heading", u.heading)("lheading", u.lheading)("blockquote", u.blockquote)("tag", "<" + u._tag)("def", u.def)(), u.normal = l({}, u), u.gfm = l({}, u.normal, {
        fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/
    }), u.gfm.paragraph = a(u.paragraph)("(?!", "(?!" + u.gfm.fences.source.replace("\\1", "\\2") + "|" + u.list.source.replace("\\1", "\\3") + "|")(), u.tables = l({}, u.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
    }), e.rules = u, e.lex = function(t, n) {
        var i = new e(n);
        return i.lex(t)
    }, e.prototype.lex = function(e) {
        return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
    }, e.prototype.token = function(e, t, n) {
        for (var i, r, o, a, s, l, c, d, p, e = e.replace(/^ +$/gm, ""); e;) {
            var f, g, m = !1;
            for (f in h) if (f = h[f], f && f.token && (g = f.token(e, t, n, this.tokens), e = g.text, g.parsed)) {
                m = !0;
                break
            }
            if (!m) if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({
                    type: "space"
                })), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({
                type: "code",
                text: this.options.pedantic ? o : o.replace(/\n+$/, "")
            });
            else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "code",
                lang: o[2],
                text: o[3]
            });
            else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "heading",
                depth: o[1].length,
                text: o[2]
            });
            else if (t && (o = this.rules.nptable.exec(e))) {
                for (e = e.substring(o[0].length), l = {
                    type: "table",
                    header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                    align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: o[3].replace(/\n$/, "").split("\n")
                }, d = 0; d < l.align.length; d++) l.align[d] = /^ *-+: *$/.test(l.align[d]) ? "right" : /^ *:-+: *$/.test(l.align[d]) ? "center" : /^ *:-+ *$/.test(l.align[d]) ? "left" : null;
                for (d = 0; d < l.cells.length; d++) l.cells[d] = l.cells[d].split(/ *\| */);
                this.tokens.push(l)
            } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "heading",
                depth: "=" === o[2] ? 1 : 2,
                text: o[1]
            });
            else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "hr"
            });
            else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "blockquote_start"
            }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t, !0), this.tokens.push({
                type: "blockquote_end"
            });
            else if (o = this.rules.list.exec(e)) {
                for (e = e.substring(o[0].length), a = o[2], this.tokens.push({
                    type: "list_start",
                    ordered: a.length > 1
                }), o = o[0].match(this.rules.item), i = !1, p = o.length, d = 0; p > d; d++) l = o[d], c = l.length, l = l.replace(/^ *([*+-]|\d+\.) +/, ""), ~l.indexOf("\n ") && (c -= l.length, l = this.options.pedantic ? l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + c + "}", "gm"), "")), this.options.smartLists && d !== p - 1 && (s = u.bullet.exec(o[d + 1])[0], a === s || a.length > 1 && s.length > 1 || (e = o.slice(d + 1).join("\n") + e, d = p - 1)), r = i || /\n\n(?!\s*$)/.test(l), d !== p - 1 && (i = "\n" === l.charAt(l.length - 1), r || (r = i)), this.tokens.push({
                    type: r ? "loose_item_start" : "list_item_start"
                }), this.token(l, !1, n), this.tokens.push({
                    type: "list_item_end"
                });
                this.tokens.push({
                    type: "list_end"
                })
            } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: this.options.sanitizer(o, !0, this.tokens) ? "paragraph" : "html",
                pre: "pre" === o[1] || "script" === o[1] || "style" === o[1],
                text: o[0]
            });
            else if (!n && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = {
                href: o[2],
                title: o[3]
            };
            else if (t && (o = this.rules.table.exec(e))) {
                for (e = e.substring(o[0].length), l = {
                    type: "table",
                    header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                    align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                }, d = 0; d < l.align.length; d++) l.align[d] = /^ *-+: *$/.test(l.align[d]) ? "right" : /^ *:-+: *$/.test(l.align[d]) ? "center" : /^ *:-+ *$/.test(l.align[d]) ? "left" : null;
                for (d = 0; d < l.cells.length; d++) l.cells[d] = l.cells[d].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                this.tokens.push(l)
            } else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({
                type: "paragraph",
                text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
            });
            else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "text",
                text: o[0]
            });
            else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
        }
        return this.tokens
    };
    var d = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: s,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]*?[^\\](?:\\\\)*)__(?!_)|^\*\*([\s\S]*?[^\\](?:\\\\)*)\*\*(?!\*)/,
        em: /^[\s\b]*_((?:__|[\s\S])*?[^\\](?:\\\\)*)_(?:$|\s|\b)|^\*((?:\*\*|[\s\S])*?[^\\](?:\\\\)*)\*(?!\*)/,
        code: /^(`+)([\s\S]*?[^`\\](?:\\\\)*)\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: s,
        text: /^[\s\S]+?(?=[\\<!\[*`]|([^\w\n])_| {2,}\n|$)\1/
    };
    d._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, d._href = /\s*<?([^\(\)]*?(?:\([\s\S]*?\)[^\(\)]*?)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, d.link = a(d.link)("inside", d._inside)("href", d._href)(), d.reflink = a(d.reflink)("inside", d._inside)(), d.normal = l({}, d), d.pedantic = l({}, d.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    }), d.gfm = l({}, d.normal, {
        escape: a(d.escape)("])", "~])")(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?(?:[^\\](?:\\\\)*)|\S)~~/,
        text: a(d.text)("]|", "~]|")("|", "|https?://|")()
    }), d.breaks = l({}, d.gfm, {
        br: a(d.br)("{2,}", "*")(),
        text: a(d.gfm.text)("{2,}", "*")()
    }), t.rules = d, t.output = function(e, n, i) {
        var r = new t(n, i);
        return r.output(e)
    }, t.prototype.output = function(e) {
        var t, n, i, o, a = "",
            s = !1;
        for (e && e.indexOf("sentence") > 0 && (s = !0); e;) if (o = this.rules.escape.exec(e)) e = e.substring(o[0].length), a += o[1];
        else if (o = /^({XXFN=\w*=FNXX}{FN_CONTENT})(.+?)({\/FN_CONTENT})/.exec(e)) e = e.substring(o[0].length), a += o[1], a += this.rules.url.exec(o[2]) ? this.renderer.link(o[2], null, r(o[2])) : r(o[2]), a += o[3];
        else if (o = this.rules.autolink.exec(e)) e = e.substring(o[0].length), "@" === o[2] ? (n = this.mangle(":" === o[1].charAt(6) ? o[1].substring(7) : o[1]), i = this.mangle("mailto:") + n) : (n = r(o[1]), i = n), a += this.renderer.link(i, null, n);
        else if (this.inLink || !(o = this.rules.url.exec(e))) {
            if (o = this.rules.tag.exec(e))!this.inLink && /^<a /i.test(o[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(o[0]) && (this.inLink = !1), e = e.substring(o[0].length), a += this.options.sanitizer(o, !1, a) ? r(o[0]) : o[0];
            else if (o = this.rules.link.exec(e)) e = e.substring(o[0].length), this.inLink = !0, a += this.outputLink(o, {
                href: o[2],
                title: o[3]
            }), this.inLink = !1;
            else if ((o = this.rules.reflink.exec(e)) || (o = this.rules.nolink.exec(e))) {
                if (e = e.substring(o[0].length), t = (o[2] || o[1]).replace(/\s+/g, " "), t = this.links[t.toLowerCase()], !t || !t.href) {
                    a += o[0].charAt(0), e = o[0].substring(1) + e;
                    continue
                }
                this.inLink = !0, a += this.outputLink(o, t), this.inLink = !1
            } else if (o = this.rules.strong.exec(e)) e = e.substring(o[0].length), a += this.renderer.strong(this.output(o[2] || o[1]));
            else if (o = this.rules.em.exec(e)) {
                e = e.substring(o[0].length);
                var l = o[0].match(/^[\s\b]*/),
                    c = o[0].match(/[\s\b]*$/);
                l = l ? l[0] : "", c = c ? c[0] : "", a += l + this.renderer.em(this.output(o[2] || o[1])) + c
            } else if (o = this.rules.code.exec(e)) e = e.substring(o[0].length), a += this.renderer.codespan(r(o[2], !0));
            else if (o = this.rules.br.exec(e)) e = e.substring(o[0].length), a += this.renderer.br();
            else if (o = this.rules.del.exec(e)) e = e.substring(o[0].length), a += this.renderer.del(this.output(o[1]));
            else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), a += r(this.smartypants(o[0]));
            else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
        } else e = e.substring(o[0].length), n = r(o[1]), i = n, a += this.renderer.link(i, null, n);
        return a
    }, t.prototype.outputLink = function(e, t) {
        var n = r(t.href),
            i = t.title ? r(t.title) : null;
        return "!" !== e[0].charAt(0) ? this.renderer.link(n, i, this.output(e[1])) : this.renderer.image(n, i, r(e[1]))
    }, t.prototype.smartypants = function(e) {
        return this.options.smartypants ? e.replace(/--/g, "\u2014").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026") : e
    }, t.prototype.mangle = function(e) {
        for (var t, n = "", i = e.length, r = 0; i > r; r++) t = e.charCodeAt(r), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
        return n
    }, n.prototype.code = function(e, t, n) {
        if (this.options.highlight) {
            var i = this.options.highlight(e, t);
            null != i && i !== e && (n = !0, e = i)
        }
        return t ? '<pre><code class="' + this.options.langPrefix + r(t, !0) + '">\n' + (n ? e : r(e, !0)) + "\n</code></pre>\n" : "<pre><code>\n" + (n ? e : r(e, !0)) + "\n</code></pre>\n"
    }, n.prototype.blockquote = function(e) {
        return "<blockquote>\n" + e + "</blockquote>\n"
    }, n.prototype.html = function(e) {
        return e
    }, n.prototype.heading = function(e, t, n) {
        return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
    }, n.prototype.hr = function() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
    }, n.prototype.list = function(e, t) {
        var n = t ? "ol" : "ul";
        return "<" + n + ">\n" + e + "</" + n + ">\n"
    }, n.prototype.listitem = function(e) {
        return "<li>" + e + "</li>\n"
    }, n.prototype.paragraph = function(e) {
        return "<p>" + e + "</p>\n"
    }, n.prototype.table = function(e, t) {
        return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
    }, n.prototype.tablerow = function(e) {
        return "<tr>\n" + e + "</tr>\n"
    }, n.prototype.tablecell = function(e, t) {
        var n = t.header ? "th" : "td",
            i = t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">";
        return i + e + "</" + n + ">\n"
    }, n.prototype.strong = function(e) {
        return "<strong>" + e + "</strong>"
    }, n.prototype.em = function(e) {
        return "<em>" + e + "</em>"
    }, n.prototype.codespan = function(e) {
        return "<code>" + e.replace(/(\\([`\\]))/g, "$2").replace(/^\s+/, "").replace(/\s+$/, "") + "</code>"
    }, n.prototype.br = function() {
        return this.options.xhtml ? "<br/>" : "<br>"
    }, n.prototype.del = function(e) {
        return "<del>" + e + "</del>"
    }, n.prototype.link = function(e, t, n) {
        if (this.options.sanitize) {
            try {
                var i = decodeURIComponent(o(e)).replace(/[^\w:]/g, "").toLowerCase()
            } catch (r) {
                var i = e.replace(/[^\w:]/g, "").toLowerCase()
            }
            if (0 === i.indexOf("javascript:")) return ""
        }
        var a = '<a href="' + e + '"';
        return t && (a += ' title="' + t + '"'), a += ">" + n + "</a>"
    }, n.prototype.image = function(e, t, n) {
        var i = '<img src="' + e + '" alt="' + n + '"';
        return t && (i += ' title="' + t + '"'), i += this.options.xhtml ? "/>" : ">"
    }, i.parse = function(e, t, n) {
        var r = new i(t, n);
        return r.parse(e)
    }, i.prototype.parse = function(e) {
        this.inline = new t(e.links, this.options, this.renderer), this.tokens = e.reverse();
        var n, i, r = this.tokens.length - 1;
        for (i in h) if (i = h[i], i && (i.prepare && i.prepare(), i.output)) for (n = r; n >= 0; n--) i.output(this.tokens[n]);
        for (var o = ""; this.next();) o += this.tok();
        for (i in h) i = h[i], i && i.aftermath && (o = i.aftermath(o));
        return o
    }, i.prototype.next = function() {
        return this.token = this.tokens.pop()
    }, i.prototype.peek = function() {
        return this.tokens[this.tokens.length - 1] || 0
    }, i.prototype.parseText = function() {
        for (var e = this.token.text;
             "text" === this.peek().type;) e += "\n" + this.next().text;
        return this.inline.output(e)
    }, i.prototype.tok = function() {
        switch (this.token.type) {
            case "space":
                return "";
            case "hr":
                return this.renderer.hr();
            case "heading":
                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
            case "code":
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
            case "table":
                var e, t, n, i, r, o = "",
                    a = "";
                for (n = "", e = 0; e < this.token.header.length; e++) i = {
                    header: !0,
                    align: this.token.align[e]
                }, n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                    header: !0,
                    align: this.token.align[e]
                });
                for (o += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                    for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                        header: !1,
                        align: this.token.align[r]
                    });
                    a += this.renderer.tablerow(n)
                }
                return this.renderer.table(o, a);
            case "blockquote_start":
                for (var a = "";
                     "blockquote_end" !== this.next().type;) a += this.tok();
                return this.renderer.blockquote(a);
            case "list_start":
                for (var a = "", s = this.token.ordered;
                     "list_end" !== this.next().type;) a += this.tok();
                return this.renderer.list(a, s);
            case "list_item_start":
                for (var a = "";
                     "list_item_end" !== this.next().type;) a += "text" === this.token.type ? this.parseText() : this.tok();
                return this.renderer.listitem(a);
            case "loose_item_start":
                for (var a = "";
                     "list_item_end" !== this.next().type;) a += this.tok();
                return this.renderer.listitem(a);
            case "html":
                var l = this.inline.output(this.token.text);
                return this.renderer.html(l);
            case "paragraph":
                return this.renderer.paragraph(this.inline.output(this.token.text));
            case "text":
                return this.renderer.paragraph(this.parseText())
        }
    }, s.exec = s, c.options = function(e) {
        return e ? c.setOptions(e) : c.defaults
    }, c.setOptions = function(e) {
        return l(c.defaults, e), c
    }, c.defaults = {
        gfm: !0,
        tables: !0,
        breaks: !1,
        pedantic: !1,
        sanitize: !1,
        sanitizer: function() {
            return !!this.sanitize
        },
        smartLists: !1,
        silent: !1,
        highlight: null,
        langPrefix: "lang-",
        smartypants: !1,
        headerPrefix: "",
        renderer: new n,
        xhtml: !1
    };
    var h = [];
    c.addExtension = function(e) {
        h[e.Name] = e
    }, c.removeExtension = function(e) {
        var t = e.Name;
        h[t] && delete h[t]
    }, c.hasExtension = function(e) {
        return !!h[e]
    }, c.Parser = i, c.parser = i.parse, c.Renderer = n, c.Lexer = e, c.lexer = e.lex, c.InlineLexer = t, c.inlineLexer = t.output, c.parse = c, "undefined" != typeof module && "object" == typeof exports ? module.exports = c : "function" == typeof define && define.amd ? define(function() {
        return c
    }) : this.marked = c
}.call(function() {
        return this || ("undefined" != typeof window ? window : global)
    }()), function() {
    function e(n, i, r) {
        function o(e, t, n) {
            f.push([t, n.replace(/^['"]|['"]$/g, "")])
        }
        function a(e) {
            var n = e[0],
                i = e[1];
            if ("src" === n || "href" === n) {
                if (!t.test(i)) return v = !1, !0
            } else if (l[u].indexOf(n) < 0) return v = c(u, n, i), !0;
            return !1
        }
        if (i === !0) {
            var s = n[0].split(/>\s*</);
            return s.length > 1 && (s[0] = s[0] + ">"), e.call(this, s[0], !1, r)
        }
        var l = this.sanitize;
        if (l === !0 || l === !1) return l;
        var c = l.special ||
            function() {
                return !1
            }, u = /<(.+?)>/.exec(n);
        if (!u) return !0;
        u = u.pop();
        var d = u.match(/(?:[^\s"']+|["'][^"']*["'])+/g);
        if ("/" === u[0]) {
            if (u = 1 === u.length ? d[1] : u.substring(1), "string" == typeof r) {
                var h = "<" + u,
                    p = "&lt;" + u;
                return h = r.lastIndexOf(h), p = r.lastIndexOf(p), p > h ? !0 : void 0 === l[u]
            }
            return void 0 === l[u]
        }
        if (u = d[0], void 0 === l[u]) return !0;
        var f, g, m = d.length;
        if (m > 1) {
            for (g = 1; g < d.length; g++) if (0 !== d[g].length && "/" !== d[g]) {
                f = [], d[g].replace(/(\w+[\w-]*?\w+)=(['"][\w\W]+?['"]|\d+|\w+)(?: |$)/g, o);
                var v = !0;
                if (f.some(a), !v) return !0
            }
            return !1
        }
        return d = l[u], 1 === d.length && null === d[0] ? !c(u, null, null) : !1
    }
    var t = /^(http|ftp|https|mailto|#)/;
    "undefined" != typeof module && "object" == typeof exports ? module.isMinify ? module.exports.Sanitizer = e : module.exports = e : "function" == typeof define && define.amd ? define("Santizer", function() {
        return e
    }) : this.markdown_sanitize = e
}(), function() {
    function e(e, t) {
        t = t || " ";
        for (var n = "", i = 0; e > i; i++) n += t;
        return n
    }
    function t(e) {
        return o = {}, e = e.replace(s, function(e, t) {
            return o = {}, t.replace(l, function(e, t) {
                o.video = o.video || {};
                var n = t.match(c);
                if (n) {
                    var i = t.match(u);
                    if (i) {
                        var r = t.match(d),
                            s = t.match(h);
                        n = n[1].replace(a, ""), i = i[1].replace(a, ""), r = r ? r[1].replace(a, "") : "", s = s ? s[1].replace(a, "") : "", o.video[n] = {
                            url: i,
                            preview: r,
                            description: s
                        }
                    }
                }
            }), ""
        })
    }
    function n(t) {
        var n = o.video;
        if (!n) return t;
        var i = [],
            r = t;
        return r = r.replace(p, function(t, n, r, o, a) {
            var s = t.length;
            return i.push({
                start: a,
                end: a + s
            }), e(s, "\n")
        }), r = r.replace(f, function(t, n, r) {
            var o = t.length;
            return i.push({
                start: r,
                end: r + o
            }), e(o, "\n")
        }), r = r.replace(g, function(t, n, r) {
            var o = t.length;
            return i.push({
                start: r,
                end: r + o
            }), e(o)
        }), i.sort(function(e, t) {
            return e.start - t.start
        }), t = t.replace(m, function(e, t, r) {
            if (i.some(function(e) {
                    return e.start <= r && e.end > r ? !0 : !1
                })) return e;
            t = t.replace(a, "");
            var o = t.match(/^(.+)(\n|$)/);
            if (!o) return e;
            o = o[1];
            var s = n[o];
            if (!s) return e;
            var l = t.replace(o, "").replace(a, "");
            0 === l.length && (l = s.description);
            var c = "",
                u = s.preview;
            return u && (c = ' data-preview-url="' + u + '"'), t = '<video-package data-video-url="' + s.url + '"' + c + ">", t += "<video-caption>", t += l, t += "</video-caption>", t += "</video-package>"
        })
    }
    function i(e) {
        return e = e.replace(v, function(e) {
            return e = e.replace(/<video-package /g, '<div class="video-package" ').replace(/<\/video-package>/g, "</div>").replace(/<video-caption>/g, '<br><div class="video-description">').replace(/<\/video-caption>/g, "</div>")
        })
    }
    var r = {};
    r.Name = "extramarks";
    var o, a = /^[ \n\t\r]+|[ \n\t\r]+$/g,
        s = /\[META\]([\w\W]*?)\[\/META\]/g,
        l = /\[VIDEO\]([\w\W]*?)\[\/VIDEO\]/g,
        c = /\[MARK\]([\w\W]*?)\[\/MARK\]/,
        u = /\[URL\]([\w\W]*?)\[\/URL\]/,
        d = /\[THUMBNAIL\]([\w\W]*?)\[\/THUMBNAIL\]/,
        h = /\[DESCRIPTION\]([\w\W]*?)\[\/DESCRIPTION\]/,
        p = /(?:\n\n|^\n?) *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/gm,
        f = /(?:\n\n|^\n?)( {4}[^\n]+\n*)+/gm,
        g = /`{1,2}([\s\S]*?[^`\\](?:\\\\)*)`{1,2}(?!`)/gm,
        m = /\[video\]([\w\W]*?)\[\/video\]/g,
        v = /<video-package data-video-url="[^\n]*?">[ \r\t\n]*<video-caption>[\w\W]*?<\/video-caption><\/video-package>/g,
        b = !1;
    r.init = function() {
        b = !0
    }, r.token = function(e) {
        var i = {
            text: e,
            parsed: !1
        };
        return b ? (b = !1, e = t(e), e = n(e), {
            text: e,
            parsed: !0
        }) : i
    }, r.extraAftermath = function(e) {
        return i(e)
    }, "undefined" != typeof module && "object" == typeof exports ? module.isMinify ? (module.exports.Extensions = module.exports.Extensions || {}, module.exports.Extensions.ExtraMarks = r) : module.exports = r : "function" == typeof define && define.amd ? define("Extensions.ExtraMarks", function() {
        return r
    }) : (this.markdown_ext = this.markdown_ext || {}, this.markdown_ext.extramarks = r)
}(), function() {
    function e(e) {
        return isNaN(e) ? !1 : e - 2 * Math.floor(e / 2) !== 0
    }
    function t(e) {
        return e.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
    }
    var n = {};
    n.Name = "footnote";
    var i = /\[\^(.+?)\]/g,
        r = /\n[ ]{0,3}\t*\[\^(.+?)\]\:[ \t]*\n?([\s\S]*?\n{0,2})(?=\n{2,}|\n[ \n\t]*?(?:\[|`{3,}|<\/?\w+?[ >])|$)/g,
        o = /\{FNXX=(.+?)=XXFN\}/g,
        a = /\{XXFN=(.+?)=FNXX\}\{FN_CONTENT\}([\s\S]*?)\{\/FN_CONTENT\}/g,
        s = /(<br>| |\n|\t)*(<p>)*[ \n\t]*\{FN=NOUSE=FN\}[ \n\t]*(<\/p>)?(<br>| |\n|\t)*(<p>)*/g,
        l = /(<br>|<p>[ \n\t]*<\/p>)(\n|\t| |<br>|<p>[ \n\t]*<\/p>)*(<br>|<p>[ \n\t]*<\/p>)/g,
        c = ["pre", "code", "blockquote"].map(function(e) {
            return new RegExp("<\\/?" + e + "( .*?)*?>", "g")
        });
    c.push(/`{3,}/g);
    var u = !1,
        d = {},
        h = !1;
    n.init = function() {
        d = [], h = !0
    }, n.prepare = function() {
        var e;
        for (e in d) e = d[e], e && (e.hasLemma && e.hasLink ? (e.ready = !0, e.index = -1) : e.ready = !1);
        h = !1
    }, n.aftermath = function(e) {
        var t = 1,
            n = [];
        return e = e.replace(o, function(e, n) {
            if (!n && "" !== n) return "";
            var i, r = d[n];
            return r ? r.ready ? (-1 === r.index && (r.index = t, t++), i = '<sup><a class="m-footnote" href="#fn_lemma_' + n + '" id="fn_link_' + n + '" name="fn_link_' + n + '">[' + r.index + "]</a></sup>") : "[^" + r.name + "]" : "[^" + n + "]"
        }), e = e.replace(a, function(e, t, i) {
            if (!t && "" !== t) return "";
            var r, o = d[t];
            return o && o.ready ? (r = "<p>[" + o.index + "]:" + i + ' <a class="m-footnote" href="#fn_link_' + t + '" id="fn_lemma_' + t + '" name="fn_lemma_' + t + '">&#8617;</a></p>', n.push([o.index, r]), "{FN=NOUSE=FN}") : ""
        }), e = e.replace(s, ""), u && (e = e.replace(l, "<br>")), t > 1 && (n = n.sort(function(e, t) {
            return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
        }).map(function(e) {
            return e[1]
        }).join("\n"), e += "<hr>" + n), e
    }, n.token = function(n) {
        if (!h) return {
            text: n,
            parsed: !1
        };
        h = !1;
        var o = !1;
        return n = n.replace(r, function(n, i, r, a, s) {
            if (!i && "" !== i) return n;
            if (!r && "" !== r) return n;
            if (s = s.substr(0, a), c.some(function(t) {
                    return e((s.match(t) || "").length)
                })) return n;
            var l = n.match(/^\n+/);
            l ? l = "\n" : (l = n.match(/<[\s\S]+?>[ \n\t]*?/), l = l ? l[0] : "");
            var u = t(i);
            return d[u] = d[u] || {
                    name: i,
                    hasLemma: !1,
                    hasLink: !1
                }, d[u].text = r.replace(/\n{1,}/g, ""), d[u].hasLemma = !0, o = !0, l + "{XXFN=" + u + "=FNXX}{FN_CONTENT}" + d[u].text + "{/FN_CONTENT}"
        }), n = n.replace(i, function(n, i, r, a) {
            if (!i && "" !== i) return n;
            if (a = a.substr(0, r), c.some(function(t) {
                    return e((a.match(t) || "").length)
                })) return n;
            var s = t(i);
            return d[s] = d[s] || {
                    name: i,
                    hasLemma: !1,
                    hasLink: !1
                }, d[s].hasLink = !0, o = !0, "{FNXX=" + s + "=XXFN}"
        }), {
            text: n,
            parsed: o
        }
    }, n.setExtraClear = function(e) {
        u = e
    }, "undefined" != typeof module && "object" == typeof exports ? module.isMinify ? (module.exports.Extensions = module.exports.Extensions || {}, module.exports.Extensions.Footnote = n) : module.exports = n : "function" == typeof define && define.amd ? define("Extensions.Footnote", function() {
        return n
    }) : (this.markdown_ext = this.markdown_ext || {}, this.markdown_ext.footnote = n)
}();
var tamarked, item, md_sanitize;
"undefined" != typeof module && "object" == typeof exports ? tamarked = module.isMinify ? module.exports : require("./lib/marked") : (tamarked = this.marked, delete this.marked);
var QINIU_IMAGE_PARA = "?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240/format/jpg",
    QINIU_IMAGE_PARA_WITHOUTSIZE = "?imageMogr2/auto-orient/strip%7CimageView2/2/format/jpg",
    REG_IS_QINIU = /^http:\/\/(upload-images\.jianshu\.io\/upload_images\/|jianshu-(dev\.u|staging)\.qiniudn\.com\/)/i,
    REG_IS_QPIC = /^http:\/\/(\w+\.)?qpic\.cn/i;
!
    function() {
        var e = tamarked.Renderer.prototype.link;
        tamarked.Renderer.prototype.link = function(t, n, i) {
            var r = tamarked.options().host;
            r && ("/" === t.substr(0, 1) && r.origin ? t = r.origin + t : t.match(/^\.{1,2}\//) && r.current && (t = r.current + t)), t = decodeLinkURL(t);
            var o = e.call(this, t, n, i);
            return console.log(o), !o.match(/id="fn_(link|lemma)_(.+?)" name="fn_\1_\2"/i) && o.indexOf(" target=") < 0 && (i += "</a>", o = o.replace(">" + i, ' target="_blank">' + i)), o
        }, tamarked.InlineLexer.prototype.outputLink = function(e, t) {
            var n = decodeLinkURL(t.href),
                i = t.title ? escape(t.title) : null;
            return "!" !== e[0].charAt(0) ? this.renderer.link(n, i, this.output(e[1])) : this.renderer.image(n, i, this.output(e[1]))
        }, tamarked.Renderer.prototype.image = function(e, t, n) {
            t = t ? ' alt="' + t + '"' : "", n = n || "";
            var i = "";
            e = imageURLChecker(e), i = e[1], e = e[0], i = i.length > 0 ? ' data-original-src="' + i + '"' : " ";
            var r = this.options.xhtml ? "/>" : ">",
                o = '<img src="' + e + '"' + t + i + r,
                a = '<div class="image-caption">' + n + "</div>",
                s = '<div class="image-package">' + o + "<br" + r + a + "</div>";
            return s
        }
    }();
var extramarks = null;
if ("undefined" != typeof module && "object" == typeof exports) if (module.isMinify) {
    md_sanitize = tamarked.Sanitizer;
    for (item in tamarked.Extensions) tamarked.addExtension(tamarked.Extensions[item]);
    extramarks = tamarked.Extensions.ExtraMarks, extramarks && extramarks.setExtraClear && extramarks.setExtraClear(!0), tamarked.Extensions.Footnote && tamarked.Extensions.Footnote.setExtraClear && tamarked.Extensions.Footnote.setExtraClear(!0)
} else {
    md_sanitize = require("./lib/marked_sanitize");
    var extension;
    extramarks = require("./lib/extensions/extra-marks"), extramarks && (tamarked.addExtension(extramarks), extramarks.setExtraClear && extramarks.setExtraClear(!0)), extension = require("./lib/extensions/marked_ext_footnote"), extension && (tamarked.addExtension(extension), extension.setExtraClear && extension.setExtraClear(!0))
} else {
    md_sanitize = this.markdown_sanitize;
    for (item in this.markdown_ext) tamarked.addExtension(this.markdown_ext[item]);
    extramarks = this.markdown_ext.extramarks, extramarks && extramarks.setExtraClear && extramarks.setExtraClear(!0), this.markdown_ext.footnote && this.markdown_ext.footnote.setExtraClear && this.markdown_ext.footnote.setExtraClear(!0)
}
tamarked.addExtension({
    Name: "_default",
    aftermath: function(e) {
        e = e.replace(/\$/g, "&dollar;");
        var t = [],
            n = [];
        e.replace(/<img.*?\/?>/gi, function(e, n) {
            t.push({
                content: e,
                from: n,
                end: n + e.length
            })
        }), e.replace(/<video\-package.*?>[\w\W]*?<\/video\-package>/gi, function(e, t) {
            n.push({
                content: e,
                from: t,
                end: t + e.length
            })
        }), e.replace(/<div class="image-package"><img.*?\/?><br\/?><div class="image-caption">[\w\W]*?<\/div><\/div>/gim, function(e, t) {
            n.push({
                content: e,
                from: t,
                end: t + e.length
            })
        }), n.map(function(e) {
            t = t.filter(function(t) {
                return t.from > e.from && t.end < e.end ? !1 : !0
            })
        });
        var i = tamarked.defaults.xhtml ? " /" : "",
            r = 0;
        t.map(function(t) {
            var o = t.content.match(/ title=("|')(.*?)\1/i);
            o ? o = o[2] : (o = t.content.match(/ alt=("|')(.*?)\1/i), o = o ? o[2] : "");
            var a = t.content.match(/ src=("|')(.*?)\1/i),
                s = " ";
            a ? (a = a[2], a = imageURLChecker(a), s = a[1], a = a[0], s = s.length > 0 ? ' data-original-src="' + s + '"' : " ") : a = "";
            var l = '<div class="image-package"><img src="' + a + '"' + s + i + "><br" + i + '><div class="image-caption">' + o + "</div></div>",
                c = l.length - t.content.length;
            e = e.substring(0, t.from + r) + l + e.substring(t.end + r, e.length), n.map(function(e) {
                e.from > t.end + r && (e.from += c, e.end += c)
            }), t.content = l, t.from += r, t.end = t.from + l.length, r += c, n.push(t)
        }), n.sort(function(e, t) {
            return e.from - t.from
        }), t = [], e.replace(/<(\/?)(\w+)( .*?)?>/gi, function(e, n, i, r, o) {
            i = i.toLowerCase(), "img" !== i && "br" !== i && "hr" !== i && t.push(n && n.length && n.length > 0 ? {
                tag: i,
                pos: o,
                len: e.length,
                end: !0
            } : {
                tag: i,
                pos: o,
                len: e.length,
                end: !1
            })
        });
        var o = ["p", "a", "b", "i", "u", "del", "strikethrough", "strong", "em"],
            a = function(e, n) {
                for (var i, r, o = t.filter(function(t) {
                    return t.pos < e ? !0 : !1
                }), a = !0; a;) {
                    for (a = !1, r = 0, i = 1; i < o.length; i++) o[i].tag === o[r].tag && !o[r].end && o[i].end && (o[i].delete = !0, o[r].delete = !0, a = !0), r++;
                    o = o.filter(function(e) {
                        return !e.delete
                    })
                }
                var s = [];
                for (i = o.length - 1; i >= 0 && n.indexOf(o[i].tag) >= 0; i--) s.unshift(o[i]);
                return s
            };
        n.map(function(t) {
            var n = a(t.from, o),
                i = "",
                r = "";
            n.map(function(t) {
                i = "</" + t.tag + ">" + i, r += e.substring(t.pos, t.pos + t.len)
            }), t.newContent = i + t.content + r, t.delta = t.newContent.length - t.content.length
        }), r = 0, n.map(function(t) {
            e = e.substring(0, t.from + r) + t.newContent + e.substring(t.end + r, e.length), r += t.delta
        }), e = extramarks.extraAftermath(e);
        var s = ["a", "p"],
            l = [];
        e.replace(/<(\/?)(\w+?)( \w+=['"].*?['"])*?>/gi, function(e, t, n, i, r) {
            t = !! t, n = n.toLowerCase(), s.indexOf(n) < 0 || (t ? (i = r, r += e.length) : i = r + e.length, l.push({
                tag: n,
                end: t,
                pos: r,
                inn: i,
                del: !1
            }))
        });
        for (var c, u = !0, d = 1, h = 0; u;) {
            for (u = !1, d = 1, h = 0; d < l.length; d++, h++) l[d].tag === l[h].tag && l[d].end && !l[h].end && (c = e.substring(l[h].inn, l[d].inn), c.match(/^(<br>|\s)*$/i) && (l[d].del = !0, l[h].del = !0, u = !0));
            if (!u) break;
            for (d = 0; d < l.length; d++) if (!l[d].end && l[d].del) for (c = l[d + 1].pos - l[d].pos, e = e.substring(0, l[d].pos) + e.substring(l[d + 1].pos, e.length), d++, h = d + 1; h < l.length; h++) l[h].pos -= c, l[h].inn -= c;
            l = l.filter(function(e) {
                return !e.del
            })
        }
        e = e.replace(/<p>[ \n\t\r]*<(p|div)>([\w\W]*?)<\/(\w+)>[ \n\t\r]*<\/p>/gi, function(e, t, n, i) {
            return n = n.replace(/^[ \n\t\r]*|[ \n\t\r]*$/g, ""), "<" + t + ">" + n + "</" + i + ">"
        }), e = e.replace(/<\/p>[ \n\t\r]*<br\/?>[ \n\t\r]*<p>/gi, "</p><p>");
        var p = /^(\n|<br\/?>)*/,
            f = /(\s|<br\/?>)*$/;
        return l = ["blockquote", "pre", "code"], l.map(function(t) {
            var n = new RegExp("<" + t + "[\\s\\S]*?>([\\s\\S]*?)<\\/" + t + ">", "g");
            e = e.replace(n, function(e, t) {
                var n = t.replace(p, "").replace(f, "");
                return e.replace(t, n)
            })
        }), e = e.replace(/&dollar;/g, "$")
    }
});
var marked_config = {
    gfm: !0,
    breaks: !0,
    langPrefix: "",
    sanitize: {
        a: ["id", "href", "title", "name"],
        blockquote: ["id", "cite"],
        col: ["id", "span", "width"],
        colgroup: ["id", "span", "width"],
        img: ["id", "align", "alt", "height", "src", "title", "width"],
        ol: ["id", "start", "type"],
        q: ["id", "cite"],
        ul: ["id", "type"],
        b: ["id"],
        br: ["id"],
        caption: ["id"],
        cite: ["id"],
        dd: ["id"],
        dl: ["id"],
        dt: ["id"],
        em: ["id"],
        h1: ["id"],
        h2: ["id"],
        h3: ["id"],
        h4: ["id"],
        h5: ["id"],
        h6: ["id"],
        i: ["id"],
        li: ["id"],
        p: ["id"],
        pre: ["id"],
        code: ["id"],
        small: ["id"],
        big: ["id"],
        strike: ["id"],
        strong: ["id"],
        sub: ["id"],
        sup: ["id"],
        u: ["id"],
        "video-preview-image": ["src"],
        "video-package": ["data-video-url", "data-preview-url"],
        "video-caption": [],
        div: [null],
        special: function(e, t, n) {
            return "div" !== e || "class" !== t || "image-package" !== n && "image-caption" !== n ? !1 : !0
        }
    },
    sanitizer: md_sanitize,
    host: {
        origin: "http://www.jianshu.com",
        current: "http://www.jianshu.com/p/"
    }
};
tamarked.setOptions(marked_config), "undefined" == typeof module || "object" != typeof exports || module.isMinify || (module.exports = tamarked), !
    function(e) {
        "undefined" != typeof global && "undefined" != typeof exports && (global.hljs = e(exports)), "undefined" != typeof window && (window.hljs = e({})), "function" == typeof define && define.amd && define("hljs", [], function() {
            return window.hljs
        })
    }(function(e) {
        function t(e) {
            return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
        }
        function n(e) {
            return e.nodeName.toLowerCase()
        }
        function i(e, t) {
            var n = e && e.exec(t);
            return n && 0 == n.index
        }
        function r(e) {
            return /no-?highlight|plain|text/.test(e)
        }
        function o(e) {
            var t, n, i, o = e.className + " ";
            if (o += e.parentNode ? e.parentNode.className : "", n = /\blang(?:uage)?-([\w-]+)\b/.exec(o)) return w(n[1]) ? n[1] : "no-highlight";
            for (o = o.split(/\s+/), t = 0, i = o.length; i > t; t++) if (w(o[t]) || r(o[t])) return o[t]
        }
        function a(e, t) {
            var n, i = {};
            for (n in e) i[n] = e[n];
            if (t) for (n in t) i[n] = t[n];
            return i
        }
        function s(e) {
            var t = [];
            return function i(e, r) {
                for (var o = e.firstChild; o; o = o.nextSibling) 3 == o.nodeType ? r += o.nodeValue.length : 1 == o.nodeType && (t.push({
                    event: "start",
                    offset: r,
                    node: o
                }), r = i(o, r), n(o).match(/br|hr|img|input/) || t.push({
                    event: "stop",
                    offset: r,
                    node: o
                }));
                return r
            }(e, 0), t
        }
        function l(e, i, r) {
            function o() {
                return e.length && i.length ? e[0].offset != i[0].offset ? e[0].offset < i[0].offset ? e : i : "start" == i[0].event ? e : i : e.length ? e : i
            }
            function a(e) {
                function i(e) {
                    return " " + e.nodeName + '="' + t(e.value) + '"'
                }
                u += "<" + n(e) + Array.prototype.map.call(e.attributes, i).join("") + ">"
            }
            function s(e) {
                u += "</" + n(e) + ">"
            }
            function l(e) {
                ("start" == e.event ? a : s)(e.node)
            }
            for (var c = 0, u = "", d = []; e.length || i.length;) {
                var h = o();
                if (u += t(r.substr(c, h[0].offset - c)), c = h[0].offset, h == e) {
                    d.reverse().forEach(s);
                    do l(h.splice(0, 1)[0]), h = o();
                    while (h == e && h.length && h[0].offset == c);
                    d.reverse().forEach(a)
                } else "start" == h[0].event ? d.push(h[0].node) : d.pop(), l(h.splice(0, 1)[0])
            }
            return u + t(r.substr(c))
        }
        function c(e) {
            function t(e) {
                return e && e.source || e
            }
            function n(n, i) {
                return new RegExp(t(n), "m" + (e.cI ? "i" : "") + (i ? "g" : ""))
            }
            function i(r, o) {
                if (!r.compiled) {
                    if (r.compiled = !0, r.k = r.k || r.bK, r.k) {
                        var s = {},
                            l = function(t, n) {
                                e.cI && (n = n.toLowerCase()), n.split(" ").forEach(function(e) {
                                    var n = e.split("|");
                                    s[n[0]] = [t, n[1] ? Number(n[1]) : 1]
                                })
                            };
                        "string" == typeof r.k ? l("keyword", r.k) : Object.keys(r.k).forEach(function(e) {
                            l(e, r.k[e])
                        }), r.k = s
                    }
                    r.lR = n(r.l || /\b\w+\b/, !0), o && (r.bK && (r.b = "\\b(" + r.bK.split(" ").join("|") + ")\\b"), r.b || (r.b = /\B|\b/), r.bR = n(r.b), r.e || r.eW || (r.e = /\B|\b/), r.e && (r.eR = n(r.e)), r.tE = t(r.e) || "", r.eW && o.tE && (r.tE += (r.e ? "|" : "") + o.tE)), r.i && (r.iR = n(r.i)), void 0 === r.r && (r.r = 1), r.c || (r.c = []);
                    var c = [];
                    r.c.forEach(function(e) {
                        e.v ? e.v.forEach(function(t) {
                            c.push(a(e, t))
                        }) : c.push("self" == e ? r : e)
                    }), r.c = c, r.c.forEach(function(e) {
                        i(e, r)
                    }), r.starts && i(r.starts, o);
                    var u = r.c.map(function(e) {
                        return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                    }).concat([r.tE, r.i]).map(t).filter(Boolean);
                    r.t = u.length ? n(u.join("|"), !0) : {
                        exec: function() {
                            return null
                        }
                    }
                }
            }
            i(e)
        }
        function u(e, n, r, o) {
            function a(e, t) {
                for (var n = 0; n < t.c.length; n++) if (i(t.c[n].bR, e)) return t.c[n]
            }
            function s(e, t) {
                if (i(e.eR, t)) {
                    for (; e.endsParent && e.parent;) e = e.parent;
                    return e
                }
                return e.eW ? s(e.parent, t) : void 0
            }
            function l(e, t) {
                return !r && i(t.iR, e)
            }
            function h(e, t) {
                var n = y.cI ? t[0].toLowerCase() : t[0];
                return e.k.hasOwnProperty(n) && e.k[n]
            }
            function p(e, t, n, i) {
                var r = i ? "" : _.classPrefix,
                    o = '<span class="' + r,
                    a = n ? "" : "</span>";
                return o += e + '">', o + t + a
            }
            function f() {
                if (!k.k) return t(N);
                var e = "",
                    n = 0;
                k.lR.lastIndex = 0;
                for (var i = k.lR.exec(N); i;) {
                    e += t(N.substr(n, i.index - n));
                    var r = h(k, i);
                    r ? (E += r[1], e += p(r[0], t(i[0]))) : e += t(i[0]), n = k.lR.lastIndex, i = k.lR.exec(N)
                }
                return e + t(N.substr(n))
            }
            function g() {
                var e = "string" == typeof k.sL;
                if (e && !S[k.sL]) return t(N);
                var n = e ? u(k.sL, N, !0, x[k.sL]) : d(N, k.sL.length ? k.sL : void 0);
                return k.r > 0 && (E += n.r), e && (x[k.sL] = n.top), p(n.language, n.value, !1, !0)
            }
            function m() {
                return void 0 !== k.sL ? g() : f()
            }
            function v(e, n) {
                var i = e.cN ? p(e.cN, "", !0) : "";
                e.rB ? (T += i, N = "") : e.eB ? (T += t(n) + i, N = "") : (T += i, N = n), k = Object.create(e, {
                    parent: {
                        value: k
                    }
                })
            }
            function b(e, n) {
                if (N += e, void 0 === n) return T += m(), 0;
                var i = a(n, k);
                if (i) return T += m(), v(i, n), i.rB ? 0 : n.length;
                var r = s(k, n);
                if (r) {
                    var o = k;
                    o.rE || o.eE || (N += n), T += m();
                    do k.cN && (T += "</span>"), E += k.r, k = k.parent;
                    while (k != r.parent);
                    return o.eE && (T += t(n)), N = "", r.starts && v(r.starts, ""), o.rE ? 0 : n.length
                }
                if (l(n, k)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (k.cN || "<unnamed>") + '"');
                return N += n, n.length || 1
            }
            var y = w(e);
            if (!y) throw new Error('Unknown language: "' + e + '"');
            c(y);
            var C, k = o || y,
                x = {},
                T = "";
            for (C = k; C != y; C = C.parent) C.cN && (T = p(C.cN, "", !0) + T);
            var N = "",
                E = 0;
            try {
                for (var I, P, D = 0; k.t.lastIndex = D, I = k.t.exec(n), I;) P = b(n.substr(D, I.index - D), I[0]), D = I.index + P;
                for (b(n.substr(D)), C = k; C.parent; C = C.parent) C.cN && (T += "</span>");
                return {
                    r: E,
                    value: T,
                    language: e,
                    top: k
                }
            } catch (M) {
                if (-1 != M.message.indexOf("Illegal")) return {
                    r: 0,
                    value: t(n)
                };
                throw M
            }
        }
        function d(e, n) {
            n = n || _.languages || Object.keys(S);
            var i = {
                    r: 0,
                    value: t(e)
                },
                r = i;
            return n.forEach(function(t) {
                if (w(t)) {
                    var n = u(t, e, !1);
                    n.language = t, n.r > r.r && (r = n), n.r > i.r && (r = i, i = n)
                }
            }), r.language && (i.second_best = r), i
        }
        function h(e) {
            return _.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, t) {
                return t.replace(/\t/g, _.tabReplace)
            })), _.useBR && (e = e.replace(/\n/g, "<br>")), e
        }
        function p(e, t, n) {
            var i = t ? C[t] : n,
                r = [e.trim()];
            return e.match(/\bhljs\b/) || r.push("hljs"), -1 === e.indexOf(i) && r.push(i), r.join(" ").trim()
        }
        function f(e) {
            var t = o(e);
            if (!r(t)) {
                var n;
                _.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e;
                var i = n.textContent,
                    a = t ? u(t, i, !0) : d(i),
                    c = s(n);
                if (c.length) {
                    var f = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                    f.innerHTML = a.value, a.value = l(c, s(f), i)
                }
                a.value = h(a.value), e.innerHTML = a.value, e.className = p(e.className, t, a.language), e.result = {
                    language: a.language,
                    re: a.r
                }, a.second_best && (e.second_best = {
                    language: a.second_best.language,
                    re: a.second_best.r
                })
            }
        }
        function g(e) {
            _ = a(_, e)
        }
        function m() {
            if (!m.called) {
                m.called = !0;
                var e = document.querySelectorAll("pre code");
                Array.prototype.forEach.call(e, f)
            }
        }
        function v() {
            addEventListener("DOMContentLoaded", m, !1), addEventListener("load", m, !1)
        }
        function b(t, n) {
            var i = S[t] = n(e);
            i.aliases && i.aliases.forEach(function(e) {
                C[e] = t
            })
        }
        function y() {
            return Object.keys(S)
        }
        function w(e) {
            return S[e] || S[C[e]]
        }
        var _ = {
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: void 0
            },
            S = {},
            C = {};
        return e.highlight = u, e.highlightAuto = d, e.fixMarkup = h, e.highlightBlock = f, e.configure = g, e.initHighlighting = m, e.initHighlightingOnLoad = v, e.registerLanguage = b, e.listLanguages = y, e.getLanguage = w, e.inherit = a, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
            b: "\\\\[\\s\\S]",
            r: 0
        }, e.ASM = {
            cN: "string",
            b: "'",
            e: "'",
            i: "\\n",
            c: [e.BE]
        }, e.QSM = {
            cN: "string",
            b: '"',
            e: '"',
            i: "\\n",
            c: [e.BE]
        }, e.PWM = {
            b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
        }, e.C = function(t, n, i) {
            var r = e.inherit({
                cN: "comment",
                b: t,
                e: n,
                c: []
            }, i || {});
            return r.c.push(e.PWM), r.c.push({
                cN: "doctag",
                b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                r: 0
            }), r
        }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
            cN: "number",
            b: e.NR,
            r: 0
        }, e.CNM = {
            cN: "number",
            b: e.CNR,
            r: 0
        }, e.BNM = {
            cN: "number",
            b: e.BNR,
            r: 0
        }, e.CSSNM = {
            cN: "number",
            b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            r: 0
        }, e.RM = {
            cN: "regexp",
            b: /\//,
            e: /\/[gimuy]*/,
            i: /\n/,
            c: [e.BE,
                {
                    b: /\[/,
                    e: /\]/,
                    r: 0,
                    c: [e.BE]
                }]
        }, e.TM = {
            cN: "title",
            b: e.IR,
            r: 0
        }, e.UTM = {
            cN: "title",
            b: e.UIR,
            r: 0
        }, e
    });
var hljs;
"undefined" != typeof global && (hljs = global.hljs), "undefined" != typeof window && (hljs = window.hljs), hljs.registerLanguage("objectivec", function(e) {
    var t = {
            cN: "built_in",
            b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+"
        },
        n = {
            keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
            literal: "false true FALSE TRUE nil YES NO NULL",
            built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
        },
        i = /[a-zA-Z@][a-zA-Z0-9_]*/,
        r = "@interface @class @protocol @implementation";
    return {
        aliases: ["mm", "objc", "obj-c"],
        k: n,
        l: i,
        i: "</",
        c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM,
            {
                cN: "string",
                v: [{
                    b: '@"',
                    e: '"',
                    i: "\\n",
                    c: [e.BE]
                }, {
                    b: "'",
                    e: "[^\\\\]'",
                    i: "[^\\\\][^']"
                }]
            }, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                c: [{
                    cN: "title",
                    v: [{
                        b: '"',
                        e: '"'
                    }, {
                        b: "<",
                        e: ">"
                    }]
                }]
            }, {
                cN: "class",
                b: "(" + r.split(" ").join("|") + ")\\b",
                e: "({|$)",
                eE: !0,
                k: r,
                l: i,
                c: [e.UTM]
            }, {
                cN: "variable",
                b: "\\." + e.UIR,
                r: 0
            }]
    }
}), hljs.registerLanguage("bash", function(e) {
    var t = {
            cN: "variable",
            v: [{
                b: /\$[\w\d#@][\w\d_]*/
            }, {
                b: /\$\{(.*?)}/
            }]
        },
        n = {
            cN: "string",
            b: /"/,
            e: /"/,
            c: [e.BE, t,
                {
                    cN: "variable",
                    b: /\$\(/,
                    e: /\)/,
                    c: [e.BE]
                }]
        },
        i = {
            cN: "string",
            b: /'/,
            e: /'/
        };
    return {
        aliases: ["sh", "zsh"],
        l: /-?[a-z\.]+/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{
            cN: "shebang",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        },
            e.HCM, e.NM, n, i, t]
    }
}), hljs.registerLanguage("lisp", function(e) {
    var t = "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*",
        n = "\\|[^]*?\\|",
        i = "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?",
        r = {
            cN: "shebang",
            b: "^#!",
            e: "$"
        },
        o = {
            cN: "literal",
            b: "\\b(t{1}|nil)\\b"
        },
        a = {
            cN: "number",
            v: [{
                b: i,
                r: 0
            }, {
                b: "#(b|B)[0-1]+(/[0-1]+)?"
            }, {
                b: "#(o|O)[0-7]+(/[0-7]+)?"
            }, {
                b: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"
            }, {
                b: "#(c|C)\\(" + i + " +" + i,
                e: "\\)"
            }]
        },
        s = e.inherit(e.QSM, {
            i: null
        }),
        l = e.C(";", "$", {
            r: 0
        }),
        c = {
            cN: "variable",
            b: "\\*",
            e: "\\*"
        },
        u = {
            cN: "keyword",
            b: "[:&]" + t
        },
        d = {
            b: t,
            r: 0
        },
        h = {
            b: n
        },
        p = {
            b: "\\(",
            e: "\\)",
            c: ["self", o, s, a, d]
        },
        f = {
            cN: "quoted",
            c: [a, s, c, u, p, d],
            v: [{
                b: "['`]\\(",
                e: "\\)"
            }, {
                b: "\\(quote ",
                e: "\\)",
                k: "quote"
            }, {
                b: "'" + n
            }]
        },
        g = {
            cN: "quoted",
            v: [{
                b: "'" + t
            }, {
                b: "#'" + t + "(::" + t + ")*"
            }]
        },
        m = {
            cN: "list",
            b: "\\(\\s*",
            e: "\\)"
        },
        v = {
            eW: !0,
            r: 0
        };
    return m.c = [{
        cN: "keyword",
        v: [{
            b: t
        }, {
            b: n
        }]
    },
        v], v.c = [f, g, m, o, a, s, l, c, u, h, d], {
        i: /\S/,
        c: [a, r, o, s, l, f, g, m, d]
    }
}), hljs.registerLanguage("scala", function(e) {
    var t = {
            cN: "annotation",
            b: "@[A-Za-z]+"
        },
        n = {
            cN: "string",
            b: 'u?r?"""',
            e: '"""',
            r: 10
        },
        i = {
            cN: "symbol",
            b: "'\\w[\\w\\d_]*(?!')"
        },
        r = {
            cN: "type",
            b: "\\b[A-Z][A-Za-z0-9_]*",
            r: 0
        },
        o = {
            cN: "title",
            b: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
            r: 0
        },
        a = {
            cN: "class",
            bK: "class object trait type",
            e: /[:={\[(\n;]/,
            c: [{
                cN: "keyword",
                bK: "extends with",
                r: 10
            },
                o]
        },
        s = {
            cN: "function",
            bK: "def val",
            e: /[:={\[(\n;]/,
            c: [o]
        };
    return {
        k: {
            literal: "true false null",
            keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
        },
        c: [e.CLCM, e.CBCM, n, e.QSM, i, r, s, a, e.CNM, t]
    }
}), hljs.registerLanguage("xml", function(e) {
    var t = "[A-Za-z0-9\\._:-]+",
        n = {
            b: /<\?(php)?(?!\w)/,
            e: /\?>/,
            sL: "php"
        },
        i = {
            eW: !0,
            i: /</,
            r: 0,
            c: [n,
                {
                    cN: "attribute",
                    b: t,
                    r: 0
                }, {
                    b: "=",
                    r: 0,
                    c: [{
                        cN: "value",
                        c: [n],
                        v: [{
                            b: /"/,
                            e: /"/
                        }, {
                            b: /'/,
                            e: /'/
                        }, {
                            b: /[^\s\/>]+/
                        }]
                    }]
                }]
        };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        },
            e.C("<!--", "-->", {
                r: 10
            }),
            {
                cN: "cdata",
                b: "<\\!\\[CDATA\\[",
                e: "\\]\\]>",
                r: 10
            }, {
                cN: "tag",
                b: "<style(?=\\s|>|$)",
                e: ">",
                k: {
                    title: "style"
                },
                c: [i],
                starts: {
                    e: "</style>",
                    rE: !0,
                    sL: "css"
                }
            }, {
                cN: "tag",
                b: "<script(?=\\s|>|$)",
                e: ">",
                k: {
                    title: "script"
                },
                c: [i],
                starts: {
                    e: "</script>",
                    rE: !0,
                    sL: ["actionscript", "javascript", "handlebars"]
                }
            },
            n,
            {
                cN: "pi",
                b: /<\?\w+/,
                e: /\?>/,
                r: 10
            }, {
                cN: "tag",
                b: "</?",
                e: "/?>",
                c: [{
                    cN: "title",
                    b: /[^ \/><\n\t]+/,
                    r: 0
                },
                    i]
            }]
    }
}), hljs.registerLanguage("perl", function(e) {
    var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
        n = {
            cN: "subst",
            b: "[$@]\\{",
            e: "\\}",
            k: t
        },
        i = {
            b: "->{",
            e: "}"
        },
        r = {
            cN: "variable",
            v: [{
                b: /\$\d/
            }, {
                b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
            }, {
                b: /[\$%@][^\s\w{]/,
                r: 0
            }]
        },
        o = [e.BE, n, r],
        a = [r, e.HCM, e.C("^\\=\\w", "\\=cut", {
            eW: !0
        }), i,
            {
                cN: "string",
                c: o,
                v: [{
                    b: "q[qwxr]?\\s*\\(",
                    e: "\\)",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\[",
                    e: "\\]",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\{",
                    e: "\\}",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\|",
                    e: "\\|",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\<",
                    e: "\\>",
                    r: 5
                }, {
                    b: "qw\\s+q",
                    e: "q",
                    r: 5
                }, {
                    b: "'",
                    e: "'",
                    c: [e.BE]
                }, {
                    b: '"',
                    e: '"'
                }, {
                    b: "`",
                    e: "`",
                    c: [e.BE]
                }, {
                    b: "{\\w+}",
                    c: [],
                    r: 0
                }, {
                    b: "-?\\w+\\s*\\=\\>",
                    c: [],
                    r: 0
                }]
            }, {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                r: 0
            }, {
                b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                k: "split return print reverse grep",
                r: 0,
                c: [e.HCM,
                    {
                        cN: "regexp",
                        b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
                        r: 10
                    }, {
                        cN: "regexp",
                        b: "(m|qr)?/",
                        e: "/[a-z]*",
                        c: [e.BE],
                        r: 0
                    }]
            }, {
                cN: "sub",
                bK: "sub",
                e: "(\\s*\\(.*?\\))?[;{]",
                r: 5
            }, {
                cN: "operator",
                b: "-\\w\\b",
                r: 0
            }, {
                b: "^__DATA__$",
                e: "^__END__$",
                sL: "mojolicious",
                c: [{
                    b: "^@@.*",
                    e: "$",
                    cN: "comment"
                }]
            }];
    return n.c = a, i.c = a, {
        aliases: ["pl"],
        k: t,
        c: a
    }
}), hljs.registerLanguage("markdown", function() {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{
            cN: "header",
            v: [{
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            }]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            }]
        }, {
            cN: "blockquote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [{
                b: "`.+?`"
            }, {
                b: "^( {4}|	)",
                e: "$",
                r: 0
            }]
        }, {
            cN: "horizontal_rule",
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{
                cN: "link_label",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            }, {
                cN: "link_url",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {
                cN: "link_reference",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            }],
            r: 10
        }, {
            b: "^\\[.+\\]:",
            rB: !0,
            c: [{
                cN: "link_reference",
                b: "\\[",
                e: "\\]:",
                eB: !0,
                eE: !0,
                starts: {
                    cN: "link_url",
                    e: "$"
                }
            }]
        }]
    }
}), hljs.registerLanguage("python", function(e) {
    var t = {
            cN: "prompt",
            b: /^(>>>|\.\.\.) /
        },
        n = {
            cN: "string",
            c: [e.BE],
            v: [{
                b: /(u|b)?r?'''/,
                e: /'''/,
                c: [t],
                r: 10
            }, {
                b: /(u|b)?r?"""/,
                e: /"""/,
                c: [t],
                r: 10
            }, {
                b: /(u|r|ur)'/,
                e: /'/,
                r: 10
            }, {
                b: /(u|r|ur)"/,
                e: /"/,
                r: 10
            }, {
                b: /(b|br)'/,
                e: /'/
            }, {
                b: /(b|br)"/,
                e: /"/
            },
                e.ASM, e.QSM]
        },
        i = {
            cN: "number",
            r: 0,
            v: [{
                b: e.BNR + "[lLjJ]?"
            }, {
                b: "\\b(0o[0-7]+)[lLjJ]?"
            }, {
                b: e.CNR + "[lLjJ]?"
            }]
        },
        r = {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: ["self", t, i, n]
        };
    return {
        aliases: ["py", "gyp"],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [t, i, n, e.HCM,
            {
                v: [{
                    cN: "function",
                    bK: "def",
                    r: 10
                }, {
                    cN: "class",
                    bK: "class"
                }],
                e: /:/,
                i: /[${=;\n,]/,
                c: [e.UTM, r]
            }, {
                cN: "decorator",
                b: /^[\t ]*@/,
                e: /$/
            }, {
                b: /\b(print|exec)\(/
            }]
    }
}), hljs.registerLanguage("cs", function(e) {
    var t = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
        n = e.IR + "(<" + e.IR + ">)?";
    return {
        aliases: ["csharp"],
        k: t,
        i: /::/,
        c: [e.C("///", "$", {
            rB: !0,
            c: [{
                cN: "xmlDocTag",
                v: [{
                    b: "///",
                    r: 0
                }, {
                    b: "<!--|-->"
                }, {
                    b: "</?",
                    e: ">"
                }]
            }]
        }), e.CLCM, e.CBCM,
            {
                cN: "preprocessor",
                b: "#",
                e: "$",
                k: "if else elif endif define undef warning error line region endregion pragma checksum"
            }, {
                cN: "string",
                b: '@"',
                e: '"',
                c: [{
                    b: '""'
                }]
            },
            e.ASM, e.QSM, e.CNM,
            {
                bK: "class interface",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [e.TM, e.CLCM, e.CBCM]
            }, {
                bK: "namespace",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [{
                    cN: "title",
                    b: "[a-zA-Z](\\.?\\w)*",
                    r: 0
                },
                    e.CLCM, e.CBCM]
            }, {
                bK: "new return throw await",
                r: 0
            }, {
                cN: "function",
                b: "(" + n + "\\s+)+" + e.IR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: t,
                c: [{
                    b: e.IR + "\\s*\\(",
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    k: t,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                },
                    e.CLCM, e.CBCM]
            }]
    }
}), hljs.registerLanguage("r", function(e) {
    var t = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
    return {
        c: [e.HCM,
            {
                b: t,
                l: t,
                k: {
                    keyword: "function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",
                    literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
                },
                r: 0
            }, {
                cN: "number",
                b: "0[xX][0-9a-fA-F]+[Li]?\\b",
                r: 0
            }, {
                cN: "number",
                b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
                r: 0
            }, {
                cN: "number",
                b: "\\d+\\.(?!\\d)(?:i\\b)?",
                r: 0
            }, {
                cN: "number",
                b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
                r: 0
            }, {
                cN: "number",
                b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
                r: 0
            }, {
                b: "`",
                e: "`",
                r: 0
            }, {
                cN: "string",
                c: [e.BE],
                v: [{
                    b: '"',
                    e: '"'
                }, {
                    b: "'",
                    e: "'"
                }]
            }]
    }
}), hljs.registerLanguage("tex", function(e) {
    var t = {
            cN: "command",
            b: "\\\\[a-zA-Z\u0430-\u044f\u0410-\u044f]+[\\*]?"
        },
        n = {
            cN: "command",
            b: "\\\\[^a-zA-Z\u0430-\u044f\u0410-\u044f0-9]"
        },
        i = {
            cN: "special",
            b: "[{}\\[\\]\\&#~]",
            r: 0
        };
    return {
        c: [{
            b: "\\\\[a-zA-Z\u0430-\u044f\u0410-\u044f]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",
            rB: !0,
            c: [t, n,
                {
                    cN: "number",
                    b: " *=",
                    e: "-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",
                    eB: !0
                }],
            r: 10
        },
            t, n, i,
            {
                cN: "formula",
                b: "\\$\\$",
                e: "\\$\\$",
                c: [t, n, i],
                r: 0
            }, {
                cN: "formula",
                b: "\\$",
                e: "\\$",
                c: [t, n, i],
                r: 0
            },
            e.C("%", "$", {
                r: 0
            })]
    }
}), hljs.registerLanguage("sql", function(e) {
    var t = e.C("--", "$");
    return {
        cI: !0,
        i: /[<>]/,
        c: [{
            cN: "operator",
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release|0 unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
            e: /;/,
            eW: !0,
            k: {
                keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes c cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle d data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration e each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract f failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function g general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http i id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists k keep keep_duplicates key keys kill l language large last|0 last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link|0 list|0 listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock|0 locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop|0 low low_priority lower lpad lrtrim ltrim m main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex n name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding p package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise|0 rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release|0 release_lock relies_on relocate rely rem remainder repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime t table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                literal: "true false null",
                built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
            },
            c: [{
                cN: "string",
                b: "'",
                e: "'",
                c: [e.BE,
                    {
                        b: "''"
                    }]
            }, {
                cN: "string",
                b: '"',
                e: '"',
                c: [e.BE,
                    {
                        b: '""'
                    }]
            }, {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE]
            },
                e.CNM, e.CBCM, t]
        },
            e.CBCM, t]
    }
}), hljs.registerLanguage("scheme", function(e) {
    var t = "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+",
        n = "(\\-|\\+)?\\d+([./]\\d+)?",
        i = n + "[+\\-]" + n + "i",
        r = {
            built_in: "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
        },
        o = {
            cN: "shebang",
            b: "^#!",
            e: "$"
        },
        a = {
            cN: "literal",
            b: "(#t|#f|#\\\\" + t + "|#\\\\.)"
        },
        s = {
            cN: "number",
            v: [{
                b: n,
                r: 0
            }, {
                b: i,
                r: 0
            }, {
                b: "#b[0-1]+(/[0-1]+)?"
            }, {
                b: "#o[0-7]+(/[0-7]+)?"
            }, {
                b: "#x[0-9a-f]+(/[0-9a-f]+)?"
            }]
        },
        l = e.QSM,
        c = [e.C(";", "$", {
            r: 0
        }), e.C("#\\|", "\\|#")],
        u = {
            b: t,
            r: 0
        },
        d = {
            cN: "variable",
            b: "'" + t
        },
        h = {
            eW: !0,
            r: 0
        },
        p = {
            cN: "list",
            v: [{
                b: "\\(",
                e: "\\)"
            }, {
                b: "\\[",
                e: "\\]"
            }],
            c: [{
                cN: "keyword",
                b: t,
                l: t,
                k: r
            },
                h]
        };
    return h.c = [a, s, l, u, d, p].concat(c), {
        i: /\S/,
        c: [o, s, l, d, p].concat(c)
    }
}), hljs.registerLanguage("php", function(e) {
    var t = {
            cN: "variable",
            b: "\\$+[a-zA-Z_-\xff][a-zA-Z0-9_-\xff]*"
        },
        n = {
            cN: "preprocessor",
            b: /<\?(php)?|\?>/
        },
        i = {
            cN: "string",
            c: [e.BE, n],
            v: [{
                b: 'b"',
                e: '"'
            }, {
                b: "b'",
                e: "'"
            },
                e.inherit(e.ASM, {
                    i: null
                }), e.inherit(e.QSM, {
                    i: null
                })]
        },
        r = {
            v: [e.BNM, e.CNM]
        };
    return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [e.CLCM, e.HCM, e.C("/\\*", "\\*/", {
            c: [{
                cN: "doctag",
                b: "@[A-Za-z]+"
            },
                n]
        }), e.C("__halt_compiler.+?;", !1, {
            eW: !0,
            k: "__halt_compiler",
            l: e.UIR
        }),
            {
                cN: "string",
                b: "<<<['\"]?\\w+['\"]?$",
                e: "^\\w+;",
                c: [e.BE]
            },
            n, t,
            {
                b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                cN: "function",
                bK: "function",
                e: /[;{]/,
                eE: !0,
                i: "\\$|\\[|%",
                c: [e.UTM,
                    {
                        cN: "params",
                        b: "\\(",
                        e: "\\)",
                        c: ["self", t, e.CBCM, i, r]
                    }]
            }, {
                cN: "class",
                bK: "class interface",
                e: "{",
                eE: !0,
                i: /[:\(\$"]/,
                c: [{
                    bK: "extends implements"
                },
                    e.UTM]
            }, {
                bK: "namespace",
                e: ";",
                i: /[\.']/,
                c: [e.UTM]
            }, {
                bK: "use",
                e: ";",
                c: [e.UTM]
            }, {
                b: "=>"
            },
            i, r]
    }
}), hljs.registerLanguage("java", function(e) {
    var t = e.UIR + "(<" + e.UIR + ">)?",
        n = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
        i = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
        r = {
            cN: "number",
            b: i,
            r: 0
        };
    return {
        aliases: ["jsp"],
        k: n,
        i: /<\/|#/,
        c: [e.C("/\\*\\*", "\\*/", {
            r: 0,
            c: [{
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.CLCM, e.CBCM, e.ASM, e.QSM,
            {
                cN: "class",
                bK: "class interface",
                e: /[{;=]/,
                eE: !0,
                k: "class interface",
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends implements"
                },
                    e.UTM]
            }, {
                bK: "new throw return else",
                r: 0
            }, {
                cN: "function",
                b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: n,
                c: [{
                    b: e.UIR + "\\s*\\(",
                    rB: !0,
                    r: 0,
                    c: [e.UTM]
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: n,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                },
                    e.CLCM, e.CBCM]
            },
            r,
            {
                cN: "annotation",
                b: "@[A-Za-z]+"
            }]
    }
}), hljs.registerLanguage("mathematica", function(e) {
    return {
        aliases: ["mma"],
        l: "(\\$|\\b)" + e.IR + "\\b",
        k: "AbelianGroup Abort AbortKernels AbortProtect Above Abs Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Active ActiveItem ActiveStyle AcyclicGraphQ AddOnHelpPath AddTo AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AffineTransform After AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowedDimensions AllowGroupClose AllowInlineCells AllowKernelInitialization AllowReverseGroupClose AllowScriptLevelChange AlphaChannel AlternatingGroup AlternativeHypothesis Alternatives AmbientLight Analytic AnchoredSearch And AndersonDarlingTest AngerJ AngleBracket AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotation Annuity AnnuityDue Antialiasing Antisymmetric Apart ApartSquareFree Appearance AppearanceElements AppellF1 Append AppendTo Apply ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess ARProcess Array ArrayComponents ArrayDepth ArrayFlatten ArrayPad ArrayPlot ArrayQ ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads AspectRatio AspectRatioFixed Assert Assuming Assumptions AstronomicalData Asynchronous AsynchronousTaskObject AsynchronousTasks AtomQ Attributes AugmentedSymmetricPolynomial AutoAction AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords Axes AxesEdge AxesLabel AxesOrigin AxesStyle Axis BabyMonsterGroupB Back Background BackgroundTasksSettings Backslash Backsubstitution Backward Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseForm Baseline BaselinePosition BaseStyle BatesDistribution BattleLemarieWavelet Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized BetweennessCentrality BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms Booleans BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryStyle Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BubbleChart BubbleChart3D BubbleScale BubbleSizes BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteCount ByteOrdering C CachedValue CacheGraphics CalendarData CalendarType CallPacket CanberraDistance Cancel CancelButton CandlestickChart Cap CapForm CapitalDifferentialD CardinalBSplineBasis CarmichaelLambda Cases Cashflow Casoratian Catalan CatalanNumber Catch CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterDot CentralMoment CentralMomentGeneratingFunction CForm ChampernowneNumber ChanVeseBinarize Character CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop Circle CircleBox CircleDot CircleMinus CirclePlus CircleTimes CirculantGraph CityData Clear ClearAll ClearAttributes ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent ClusteringComponents CMYKColor Coarse Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorCombine ColorConvert ColorData ColorDataFunction ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorSpace Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CommonDefaultFormatTypes Commonest CommonestFilter CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledFunction Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComponentMeasurements ComponentwiseContextMenu Compose ComposeList ComposeSeries Composition CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath Congruent Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphQ ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray Constants ConstrainedMax ConstrainedMin ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFilename ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean Control ControlActive ControlAlignment ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateDialog CreateDirectory CreateDocument CreateIntermediateDirectories CreatePalette CreatePalettePacket CreateScheduledTask CreateTemporary CreateWindow CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossingDetect CrossMatrix Csc Csch CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrentImage CurrentlySpeakingPacket CurrentValue CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition D DagumDistribution DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DataCompression DataDistribution DataRange DataReversed Date DateDelimiters DateDifference DateFunction DateList DateListLogPlot DateListPlot DatePattern DatePlus DateRange DateString DateTicksFormat DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayMatchQ DayName DayPlus DayRange DayRound DeBruijnGraph Debug DebugTag Decimal DeclareKnownSymbols DeclarePackage Decompose Decrement DedekindEta Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic Deinitialization Del Deletable Delete DeleteBorderComponents DeleteCases DeleteContents DeleteDirectory DeleteDuplicates DeleteFile DeleteSmallComponents DeleteWithContents DeletionWarning Delimiter DelimiterFlashTime DelimiterMatching Delimiters Denominator DensityGraphics DensityHistogram DensityPlot DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DescriptorStateSpace DesignMatrix Det DGaussianWavelet DiacriticalPositioning Diagonal DiagonalMatrix Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DifferenceDelta DifferenceOrder DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralGroup Dilation Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletCharacter DirichletConvolve DirichletDistribution DirichletL DirichletTransform DirichletWindow DisableConsolePrintPacket DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform DiscreteWaveletTransform Discriminant Disjunction Disk DiskBox DiskMatrix Dispatch DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentNotebook DominantColors DOSTextFormat Dot DotDashed DotEqual Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DSolve Dt DualLinearProgramming DualSystemsModel DumpGet DumpSave DuplicateFreeQ Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions E EccentricityCentrality EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeCost EdgeCount EdgeCoverQ EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData Eliminate EliminationOrder EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EnableConsolePrintPacket Enabled Encode End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfFile EndOfLine EndOfString EndPackage EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entropy EntropyFilter Environment Epilog Equal EqualColumns EqualRows EqualTilde EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerE EulerGamma EulerianGraphQ EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluationCell EvaluationCompletionAction EvaluationElements EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpToTrig ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalCall ExternalDataCharacterEncoding Extract ExtractArchive ExtremeValueDistribution FaceForm FaceGrids FaceGridsStyle Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail FailureDistribution False FARIMAProcess FEDisableConsolePrintPacket FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket Fibonacci FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileDate FileExistsQ FileExtension FileFormat FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileType FilledCurve FilledCurveBox Filling FillingStyle FillingTransform FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindArgMax FindArgMin FindClique FindClusters FindCurvePath FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEulerianCycle FindFaces FindFile FindFit FindGeneratingFunction FindGeoLocation FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMaximum FindMaximumFlow FindMaxValue FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindPermutation FindPostmanTour FindProcessParameters FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindThreshold FindVertexCover FindVertexCut Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstPassageTimeDistribution FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FittedModel FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlatTopWindow FlipView Floor FlushPrintOutputPacket Fold FoldList Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrequencySamplingFilterKernel FresnelC FresnelS Friday FrobeniusNumber FrobeniusSolve FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullOptions FullSimplify Function FunctionExpand FunctionInterpolation FunctionSpace FussellVeselyImportance GaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins Gamma GammaDistribution GammaRegularized GapPenalty Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateConditions GeneratedCell GeneratedParameters GeneratingFunction Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDistance GeoGridPosition GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoPosition GeoPositionENU GeoPositionXYZ GeoProjectionData GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter Graph GraphAssortativity GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel GreatCircleDistance Greater GreaterEqual GreaterEqualLess GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterTilde Green Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain Gudermannian GumbelDistribution HaarWavelet HadamardMatrix HalfNormalDistribution HamiltonianGraphQ HammingDistance HammingWindow HankelH1 HankelH2 HankelMatrix HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash HashTable Haversine HazardFunction Head HeadCompose Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenSurface HighlightGraph HighlightImage HighpassFilter HigmanSimsGroupHS HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HitMissTransform HITSCentrality HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HotellingTSquareDistribution HoytDistribution HTMLSave Hue HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData I Identity IdentityMatrix If IgnoreCase Im Image Image3D Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageAspectRatio ImageAssemble ImageCache ImageCacheValid ImageCapture ImageChannels ImageClip ImageColorSpace ImageCompose ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDataPacket ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDistance ImageEffect ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageForestingComponents ImageForwardTransformation ImageHistogram ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarkers ImageMeasurements ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImageQ ImageRangeCache ImageReflect ImageRegion ImageResize ImageResolution ImageRotate ImageRotated ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions Implies Import ImportAutoReplacements ImportString ImprovementImportance In IncidenceGraph IncidenceList IncidenceMatrix IncludeConstantBasis IncludeFileExtension IncludePods IncludeSingularTerm Increment Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentUnit IndependentVertexSetQ Indeterminate IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers Infinity Infix Information Inherited InheritScope Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InlineCounterAssignments InlineCounterIncrements InlineRules Inner Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionPointObject InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Install InstallService InString Integer IntegerDigits IntegerExponent IntegerLength IntegerPart IntegerPartitions IntegerQ Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction InterpretTemplate InterquartileRange Interrupt InterruptSettings Intersection Interval IntervalIntersection IntervalMemberQ IntervalUnion Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHaversine InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InversePermutation InverseRadon InverseSeries InverseSurvivalFunction InverseWaveletTransform InverseWeierstrassP InverseZTransform Invisible InvisibleApplication InvisibleTimes IrreduciblePolynomialQ IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join Joined JoinedCurve JoinedCurveBox JoinForm JordanDecomposition JordanModelDecomposition K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelMixtureDistribution KernelObject Kernels Ket Khinchin KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnightTourGraph KnotData KnownUnitQ KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter Label Labeled LabeledSlider LabelingFunction LabelStyle LaguerreL LambdaComponents LambertW LanczosWindow LandauDistribution Language LanguageCategory LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCM LeafCount LeapYearQ LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessFullEqual LessGreater LessLess LessSlantEqual LessTilde LetterCharacter LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox LinearFilter LinearFractionalTransform LinearModelFit LinearOffsetFunction LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBreak LinebreakAdjustments LineBreakChart LineBreakWithin LineColor LineForm LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRead LinkReadHeld LinkReadyQ Links LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot Listen ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalClusteringCoefficient LocalizeVariables LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestAscendingSequence LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow Loopback LoopFreeGraphQ LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LyapunovSolve LyonsGroupLy MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules MangoldtLambda ManhattanDistance Manipulate Manipulator MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixPlot MatrixPower MatrixQ MatrixRank Max MaxBend MaxDetect MaxExtraBandwidths MaxExtraConditions MaxFeatures MaxFilter Maximize MaxIterations MaxMemoryUsed MaxMixtureKernels MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxValue MaxwellDistribution McLaughlinGroupMcL Mean MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter Median MedianDeviation MedianFilter Medium MeijerG MeixnerDistribution MemberQ MemoryConstrained MemoryInUse Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuPacket MenuSortingValue MenuStyle MenuView MergeDifferences Mesh MeshFunctions MeshRange MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation Method MethodOptions MexicanHatWavelet MeyerWavelet Min MinDetect MinFilter MinimalPolynomial MinimalStateSpaceModel Minimize Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingDataMethod MittagLefflerE MixedRadix MixedRadixQuantity MixtureDistribution Mod Modal Mode Modular ModularLambda Module Modulus MoebiusMu Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction Monday Monitor MonomialList MonomialOrder MonsterGroupM MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform Most MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovingAverage MovingMedian MoyalDistribution MultiedgeStyle MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution N NakagamiDistribution NameQ Names NamespaceBox Nand NArgMax NArgMin NBernoulliB NCache NDSolve NDSolveValue Nearest NearestFunction NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeMultinomialDistribution NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestList NestWhile NestWhileList NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextPrime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants None NonlinearModelFit NonlocalMeansFilter NonNegative NonPositive Nor NorlundB Norm Normal NormalDistribution NormalGrouping Normalize NormalizedSquaredEuclideanDistance NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde NotHumpDownHump NotHumpEqual NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms Null NullRecords NullSpace NullWords Number NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator NumberSigns NumberString Numerator NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OddQ Off Offset OLEData On ONanGroupON OneIdentity Opacity Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering Orderless OrnsteinUhlenbeckProcess Orthogonalize Out Outer OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OwenT OwnValues PackingMethod PaddedForm Padding PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageWidth PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParetoDistribution Part PartialCorrelationFunction PartialD ParticleData Partition PartitionsP PartitionsQ ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PerformanceGoal PeriodicInterpolation Periodogram PeriodogramArray PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PERTDistribution PetersenGraph PhaseMargins Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest Pink Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarGraphQ Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangePadding PlotRegion PlotStyle Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox PointBox PointFigureChart PointForm PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonBox PolygonBoxOptions PolygonHoleScale PolygonIntersections PolygonScale PolyhedronData PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position Positive PositiveDefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement PredictionRoot PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependTo PreserveImageOptions Previous PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitiveRoot PrincipalComponents PrincipalValue Print PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessEstimator ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions QBinomial QFactorial QGamma QHypergeometricPFQ QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ Quantile QuantilePlot Quantity QuantityForm QuantityMagnitude QuantityQ QuantityUnit Quartics QuartileDeviation Quartiles QuartileSkewness QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Random RandomChoice RandomComplex RandomFunction RandomGraph RandomImage RandomInteger RandomPermutation RandomPrime RandomReal RandomSample RandomSeed RandomVariate RandomWalkProcess Range RangeFilter RangeSpecification RankedMax RankedMin Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios Raw RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadList ReadProtected Real RealBlockDiagonalForm RealDigits RealExponent Reals Reap Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate RegionBinarize RegionFunction RegionPlot RegionPlot3D RegularExpression Regularization Reinstall Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot Remove RemoveAlphaChannel RemoveAsynchronousTask Removed RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart Repeated RepeatedNull RepeatedString Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated Resampling Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask Residue Resolve Rest Resultant ResumePacket Return ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulerUnits Run RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity SameQ SameTest SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveDefinitions SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTaskActiveQ ScheduledTaskData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition Sec Sech SechDistribution SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemialgebraicComponentInstances SendMail Sequence SequenceAlignment SequenceForm SequenceHold SequenceLimit Series SeriesCoefficient SeriesData SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPrecision SetProperty SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share Sharpen ShearingMatrix ShearingTransform ShenCastanMatrix Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortUpArrow Show ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiegelTheta SiegelTukeyTest Sign Signature SignedRankTest SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution Skip SliceDistribution Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDelayCompensator SmithWatermanSimilarity SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SocialMediaData Socket SokalSneathDissimilarity Solve SolveAlways SolveDelayed Sort SortBy Sound SoundAndGraphics SoundNote SoundVolume Sow Space SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution Speak SpeakTextPacket SpearmanRankTest SpearmanRho Spectrogram SpectrogramArray Specularity SpellingCorrection SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackInhibit StandardDeviation StandardDeviationFilter StandardForm Standardize StandbyDistribution Star StarGraph StartAsynchronousTask StartingStepSize StartOfLine StartOfString StartScheduledTask StartupSound StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringCount StringDrop StringExpression StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPosition StringQ StringReplace StringReplaceList StringReplacePart StringReverse StringRotateLeft StringRotateRight StringSkeleton StringSplit StringTake StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleBoxOptions StyleData StyleDefinitions StyleForm StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subset SubsetEqual Subsets SubStar Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde SuchThat Sum SumConvergence Sunday SuperDagger SuperMinus SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceColor SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SystemDialogInput SystemException SystemHelpPath SystemInformation SystemInformationData SystemOpen SystemOptions SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemStub Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeWhile Tally Tan Tanh TargetFunctions TargetUnits TautologyQ TelegraphProcess TemplateBox TemplateBoxOptions TemplateSlotSequence TemporalData Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCell TextClipboardType TextData TextForm TextJustification TextLine TextPacket TextParagraph TextRecognize TextRendering TextStyle Texture TextureCoordinateFunction TextureCoordinateScaling Therefore ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreeJSymbol Threshold Through Throw Thumbnail Thursday Ticks TicksStyle Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint Times TimesBy TimeSeriesForecast TimeSeriesInvertibility TimeUsed TimeValue TimeZone Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate ToDiscreteTimeModel ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform TopologicalSort ToRadicals ToRules ToString Total TotalHeight TotalVariationFilter TotalWidth TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField Translate TranslationTransform TransparentColor Transpose TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle TriangleWave TriangularDistribution Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean True TrueQ TruncatedDistribution TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow Tuples TuranGraph TuringMachine Transparent UnateQ Uncompress Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UndirectedEdge UndirectedGraph UndirectedGraphQ UndocumentedTestFEParserPacket UndocumentedTestGetSelectionPacket Unequal Unevaluated UniformDistribution UniformGraphDistribution UniformSumDistribution Uninstall Union UnionPlus Unique UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitTriangle UnitVector Unprotect UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpValues URL URLFetch URLFetchAsynchronous URLSave URLSaveAsynchronous UseGraphicsRange Using UsingFrontEnd V2Get ValidationLength Value ValueBox ValueBoxOptions ValueForm ValueQ ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerifyConvergence VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoigtDistribution VonMisesDistribution WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeberE Wedge Wednesday WeibullDistribution WeierstrassHalfPeriods WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WilksW WilksWTest WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult Word WordBoundary WordCharacter WordData WordSearch WordSeparators WorkingPrecision Write WriteString Wronskian XMLElement XMLObject Xnor Xor Yellow YuleDissimilarity ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZipfDistribution ZTest ZTransform $Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AssertFunction $Assumptions $AsynchronousTask $BaseDirectory $BatchInput $BatchOutput $BoxForms $ByteOrdering $Canceled $CharacterEncoding $CharacterEncodings $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $CreationDate $CurrentLink $DateStringFormat $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $Epilog $ExportFormats $Failed $FinancialDataSource $FormatType $FrontEnd $FrontEndSession $GeoLocation $HistoryLength $HomeDirectory $HTTPCookies $IgnoreEOF $ImagingDevices $ImportFormats $InitialDirectory $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $ModuleNumber $NetworkLicense $NewMessage $NewSymbol $Notebooks $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $PipeSupported $Post $Pre $PreferencesDirectory $PrePrint $PreRead $PrintForms $PrintLiteral $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $RandomState $RecursionLimit $ReleaseNumber $RootDirectory $ScheduledTask $ScriptCommandLine $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemWordLength $TemporaryDirectory $TemporaryPrefix $TextStyle $TimedOut $TimeUnit $TimeZone $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $Urgent $UserAddOnsDirectory $UserBaseDirectory $UserDocumentsDirectory $UserName $Version $VersionNumber",
        c: [{
            cN: "comment",
            b: /\(\*/,
            e: /\*\)/
        },
            e.ASM, e.QSM, e.CNM,
            {
                cN: "list",
                b: /\{/,
                e: /\}/,
                i: /:/
            }]
    }
}), hljs.registerLanguage("cpp", function(e) {
    var t = {
            cN: "keyword",
            b: "\\b[a-z\\d_]*_t\\b"
        },
        n = {
            cN: "string",
            v: [e.inherit(e.QSM, {
                b: '((u8?|U)|L)?"'
            }),
                {
                    b: '(u8?|U)?R"',
                    e: '"',
                    c: [e.BE]
                }, {
                    b: "'\\\\?.",
                    e: "'",
                    i: "."
                }]
        },
        i = {
            cN: "number",
            v: [{
                b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
            }, {
                b: e.CNR
            }]
        },
        r = e.IR + "\\s*\\(",
        o = {
            keyword: "int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",
            built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf",
            literal: "true false nullptr NULL"
        };
    return {
        aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
        k: o,
        i: "</",
        c: [t, e.CLCM, e.CBCM, i, n,
            {
                cN: "preprocessor",
                b: "#",
                e: "$",
                k: "if else elif endif define undef warning error line pragma ifdef ifndef",
                c: [{
                    b: /\\\n/,
                    r: 0
                }, {
                    bK: "include",
                    e: "$",
                    c: [n,
                        {
                            cN: "string",
                            b: "<",
                            e: ">",
                            i: "\\n"
                        }]
                },
                    n, i, e.CLCM, e.CBCM]
            }, {
                b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                e: ">",
                k: o,
                c: ["self", t]
            }, {
                b: e.IR + "::",
                k: o
            }, {
                bK: "new throw return else",
                r: 0
            }, {
                cN: "function",
                b: "(" + e.IR + "[\\*&\\s]+)+" + r,
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: o,
                c: [{
                    b: r,
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: o,
                    r: 0,
                    c: [e.CLCM, e.CBCM, n, i]
                },
                    e.CLCM, e.CBCM]
            }]
    }
}), hljs.registerLanguage("javascript", function(e) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        c: [{
            cN: "pi",
            r: 10,
            b: /^\s*['"]use (strict|asm)['"]/
        },
            e.ASM, e.QSM,
            {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE,
                    {
                        cN: "subst",
                        b: "\\$\\{",
                        e: "\\}"
                    }]
            },
            e.CLCM, e.CBCM,
            {
                cN: "number",
                v: [{
                    b: "\\b(0[bB][01]+)"
                }, {
                    b: "\\b(0[oO][0-7]+)"
                }, {
                    b: e.CNR
                }],
                r: 0
            }, {
                b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
                k: "return throw case",
                c: [e.CLCM, e.CBCM, e.RM,
                    {
                        b: /</,
                        e: />\s*[);\]]/,
                        r: 0,
                        sL: "xml"
                    }],
                r: 0
            }, {
                cN: "function",
                bK: "function",
                e: /\{/,
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                }),
                    {
                        cN: "params",
                        b: /\(/,
                        e: /\)/,
                        eB: !0,
                        eE: !0,
                        c: [e.CLCM, e.CBCM],
                        i: /["'\(]/
                    }],
                i: /\[|%/
            }, {
                b: /\$[(.]/
            }, {
                b: "\\." + e.IR,
                r: 0
            }, {
                bK: "import",
                e: "[;$]",
                k: "import from as",
                c: [e.ASM, e.QSM]
            }, {
                cN: "class",
                bK: "class",
                e: /[{;=]/,
                eE: !0,
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends"
                },
                    e.UTM]
            }],
        i: /#/
    }
}), hljs.registerLanguage("swift", function(e) {
    var t = {
            keyword: "class deinit enum extension func import init let protocol static struct subscript typealias var break case continue default do else fallthrough if in for return switch where while as dynamicType is new super self Self Type __COLUMN__ __FILE__ __FUNCTION__ __LINE__ associativity didSet get infix inout left mutating none nonmutating operator override postfix precedence prefix right set unowned unowned safe unsafe weak willSet",
            literal: "true false nil",
            built_in: "abs advance alignof alignofValue assert bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced join lexicographicalCompare map max maxElement min minElement numericCast partition posix print println quickSort reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith strideof strideofValue swap swift toString transcode underestimateCount unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafePointers withVaList"
        },
        n = {
            cN: "type",
            b: "\\b[A-Z][\\w']*",
            r: 0
        },
        i = e.C("/\\*", "\\*/", {
            c: ["self"]
        }),
        r = {
            cN: "subst",
            b: /\\\(/,
            e: "\\)",
            k: t,
            c: []
        },
        o = {
            cN: "number",
            b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
            r: 0
        },
        a = e.inherit(e.QSM, {
            c: [r, e.BE]
        });
    return r.c = [o], {
        k: t,
        c: [a, e.CLCM, i, n, o,
            {
                cN: "func",
                bK: "func",
                e: "{",
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/,
                    i: /\(/
                }),
                    {
                        cN: "generics",
                        b: /</,
                        e: />/,
                        i: />/
                    }, {
                        cN: "params",
                        b: /\(/,
                        e: /\)/,
                        endsParent: !0,
                        k: t,
                        c: ["self", o, a, e.CBCM,
                            {
                                b: ":"
                            }],
                        i: /["']/
                    }],
                i: /\[|%/
            }, {
                cN: "class",
                bK: "struct protocol class extension enum",
                k: t,
                e: "\\{",
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                })]
            }, {
                cN: "preprocessor",
                b: "(@assignment|@class_protocol|@exported|@final|@lazy|@noreturn|@NSCopying|@NSManaged|@objc|@optional|@required|@auto_closure|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix)"
            }]
    }
}), hljs.registerLanguage("matlab", function(e) {
    var t = [e.CNM,
            {
                cN: "string",
                b: "'",
                e: "'",
                c: [e.BE,
                    {
                        b: "''"
                    }]
            }],
        n = {
            r: 0,
            c: [{
                cN: "operator",
                b: /'['\.]*/
            }]
        };
    return {
        k: {
            keyword: "break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",
            built_in: "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"
        },
        i: '(//|"|#|/\\*|\\s+/\\w+)',
        c: [{
            cN: "function",
            bK: "function",
            e: "$",
            c: [e.UTM,
                {
                    cN: "params",
                    b: "\\(",
                    e: "\\)"
                }, {
                    cN: "params",
                    b: "\\[",
                    e: "\\]"
                }]
        }, {
            b: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
            rB: !0,
            r: 0,
            c: [{
                b: /[a-zA-Z_][a-zA-Z_0-9]*/,
                r: 0
            },
                n.c[0]]
        }, {
            cN: "matrix",
            b: "\\[",
            e: "\\]",
            c: t,
            r: 0,
            starts: n
        }, {
            cN: "cell",
            b: "\\{",
            e: /}/,
            c: t,
            r: 0,
            starts: n
        }, {
            b: /\)/,
            r: 0,
            starts: n
        },
            e.C("^\\s*\\%\\{\\s*$", "^\\s*\\%\\}\\s*$"), e.C("\\%", "$")].concat(t)
    }
}), hljs.registerLanguage("ruby", function(e) {
    var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
        n = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
        i = {
            cN: "doctag",
            b: "@[A-Za-z]+"
        },
        r = {
            cN: "value",
            b: "#<",
            e: ">"
        },
        o = [e.C("#", "$", {
            c: [i]
        }), e.C("^\\=begin", "^\\=end", {
            c: [i],
            r: 10
        }), e.C("^__END__", "\\n$")],
        a = {
            cN: "subst",
            b: "#\\{",
            e: "}",
            k: n
        },
        s = {
            cN: "string",
            c: [e.BE, a],
            v: [{
                b: /'/,
                e: /'/
            }, {
                b: /"/,
                e: /"/
            }, {
                b: /`/,
                e: /`/
            }, {
                b: "%[qQwWx]?\\(",
                e: "\\)"
            }, {
                b: "%[qQwWx]?\\[",
                e: "\\]"
            }, {
                b: "%[qQwWx]?{",
                e: "}"
            }, {
                b: "%[qQwWx]?<",
                e: ">"
            }, {
                b: "%[qQwWx]?/",
                e: "/"
            }, {
                b: "%[qQwWx]?%",
                e: "%"
            }, {
                b: "%[qQwWx]?-",
                e: "-"
            }, {
                b: "%[qQwWx]?\\|",
                e: "\\|"
            }, {
                b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
            }]
        },
        l = {
            cN: "params",
            b: "\\(",
            e: "\\)",
            k: n
        },
        c = [s, r,
            {
                cN: "class",
                bK: "class module",
                e: "$|;",
                i: /=/,
                c: [e.inherit(e.TM, {
                    b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
                }),
                    {
                        cN: "inheritance",
                        b: "<\\s*",
                        c: [{
                            cN: "parent",
                            b: "(" + e.IR + "::)?" + e.IR
                        }]
                    }].concat(o)
            }, {
                cN: "function",
                bK: "def",
                e: "$|;",
                r: 0,
                c: [e.inherit(e.TM, {
                    b: t
                }), l].concat(o)
            }, {
                cN: "constant",
                b: "(::)?(\\b[A-Z]\\w*(::)?)+",
                r: 0
            }, {
                cN: "symbol",
                b: e.UIR + "(\\!|\\?)?:",
                r: 0
            }, {
                cN: "symbol",
                b: ":",
                c: [s,
                    {
                        b: t
                    }],
                r: 0
            }, {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                r: 0
            }, {
                cN: "variable",
                b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
            }, {
                b: "(" + e.RSR + ")\\s*",
                c: [r,
                    {
                        cN: "regexp",
                        c: [e.BE, a],
                        i: /\n/,
                        v: [{
                            b: "/",
                            e: "/[a-z]*"
                        }, {
                            b: "%r{",
                            e: "}[a-z]*"
                        }, {
                            b: "%r\\(",
                            e: "\\)[a-z]*"
                        }, {
                            b: "%r!",
                            e: "![a-z]*"
                        }, {
                            b: "%r\\[",
                            e: "\\][a-z]*"
                        }]
                    }].concat(o),
                r: 0
            }].concat(o);
    a.c = c, l.c = c;
    var u = "[>?]>",
        d = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
        h = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
        p = [{
            b: /^\s*=>/,
            cN: "status",
            starts: {
                e: "$",
                c: c
            }
        }, {
            cN: "prompt",
            b: "^(" + u + "|" + d + "|" + h + ")",
            starts: {
                e: "$",
                c: c
            }
        }];
    return {
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        k: n,
        c: o.concat(p).concat(c)
    }
}), hljs.registerLanguage("css", function(e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
        n = {
            cN: "function",
            b: t + "\\(",
            rB: !0,
            eE: !0,
            e: "\\("
        },
        i = {
            cN: "rule",
            b: /[A-Z\_\.\-]+\s*:/,
            rB: !0,
            e: ";",
            eW: !0,
            c: [{
                cN: "attribute",
                b: /\S/,
                e: ":",
                eE: !0,
                starts: {
                    cN: "value",
                    eW: !0,
                    eE: !0,
                    c: [n, e.CSSNM, e.QSM, e.ASM, e.CBCM,
                        {
                            cN: "hexcolor",
                            b: "#[0-9A-Fa-f]+"
                        }, {
                            cN: "important",
                            b: "!important"
                        }]
                }
            }]
        };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, i,
            {
                cN: "id",
                b: /\#[A-Za-z0-9_-]+/
            }, {
                cN: "class",
                b: /\.[A-Za-z0-9_-]+/
            }, {
                cN: "attr_selector",
                b: /\[/,
                e: /\]/,
                i: "$"
            }, {
                cN: "pseudo",
                b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
            }, {
                cN: "at_rule",
                b: "@(font-face|page)",
                l: "[a-z-]+",
                k: "font-face page"
            }, {
                cN: "at_rule",
                b: "@",
                e: "[{;]",
                c: [{
                    cN: "keyword",
                    b: /\S+/
                }, {
                    b: /\s/,
                    eW: !0,
                    eE: !0,
                    r: 0,
                    c: [n, e.ASM, e.QSM, e.CSSNM]
                }]
            }, {
                cN: "tag",
                b: t,
                r: 0
            }, {
                cN: "rules",
                b: "{",
                e: "}",
                i: /\S/,
                c: [e.CBCM, i]
            }]
    }
}), hljs.registerLanguage("coffeescript", function(e) {
    var t = {
            keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
            literal: "true false null undefined yes no on off",
            built_in: "npm require console print module global window document"
        },
        n = "[A-Za-z$_][0-9A-Za-z$_]*",
        i = {
            cN: "subst",
            b: /#\{/,
            e: /}/,
            k: t
        },
        r = [e.BNM, e.inherit(e.CNM, {
            starts: {
                e: "(\\s*/)?",
                r: 0
            }
        }),
            {
                cN: "string",
                v: [{
                    b: /'''/,
                    e: /'''/,
                    c: [e.BE]
                }, {
                    b: /'/,
                    e: /'/,
                    c: [e.BE]
                }, {
                    b: /"""/,
                    e: /"""/,
                    c: [e.BE, i]
                }, {
                    b: /"/,
                    e: /"/,
                    c: [e.BE, i]
                }]
            }, {
                cN: "regexp",
                v: [{
                    b: "///",
                    e: "///",
                    c: [i, e.HCM]
                }, {
                    b: "//[gim]*",
                    r: 0
                }, {
                    b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
                }]
            }, {
                cN: "property",
                b: "@" + n
            }, {
                b: "`",
                e: "`",
                eB: !0,
                eE: !0,
                sL: "javascript"
            }];
    i.c = r;
    var o = e.inherit(e.TM, {
            b: n
        }),
        a = "(\\(.*\\))?\\s*\\B[-=]>",
        s = {
            cN: "params",
            b: "\\([^\\(]",
            rB: !0,
            c: [{
                b: /\(/,
                e: /\)/,
                k: t,
                c: ["self"].concat(r)
            }]
        };
    return {
        aliases: ["coffee", "cson", "iced"],
        k: t,
        i: /\/\*/,
        c: r.concat([e.C("###", "###"), e.HCM,
            {
                cN: "function",
                b: "^\\s*" + n + "\\s*=\\s*" + a,
                e: "[-=]>",
                rB: !0,
                c: [o, s]
            }, {
                b: /[:\(,=]\s*/,
                r: 0,
                c: [{
                    cN: "function",
                    b: a,
                    e: "[-=]>",
                    rB: !0,
                    c: [s]
                }]
            }, {
                cN: "class",
                bK: "class",
                e: "$",
                i: /[:="\[\]]/,
                c: [{
                    bK: "extends",
                    eW: !0,
                    i: /[:="\[\]]/,
                    c: [o]
                },
                    o]
            }, {
                cN: "attribute",
                b: n + ":",
                e: ":",
                rB: !0,
                rE: !0,
                r: 0
            }])
    }
}), hljs.registerLanguage("json", function(e) {
    var t = {
            literal: "true false null"
        },
        n = [e.QSM, e.CNM],
        i = {
            cN: "value",
            e: ",",
            eW: !0,
            eE: !0,
            c: n,
            k: t
        },
        r = {
            b: "{",
            e: "}",
            c: [{
                cN: "attribute",
                b: '\\s*"',
                e: '"\\s*:\\s*',
                eB: !0,
                eE: !0,
                c: [e.BE],
                i: "\\n",
                starts: i
            }],
            i: "\\S"
        },
        o = {
            b: "\\[",
            e: "\\]",
            c: [e.inherit(i, {
                cN: null
            })],
            i: "\\S"
        };
    return n.splice(n.length, 0, r, o), {
        c: n,
        k: t,
        i: "\\S"
    }
}), function() {
    function e(e, t, n) {
        return e.addEventListener ? void e.addEventListener(t, n, !1) : void e.attachEvent("on" + t, n)
    }
    function t(e) {
        if ("keypress" == e.type) {
            var t = String.fromCharCode(e.which);
            return e.shiftKey || (t = t.toLowerCase()), " " == t ? "space" : t
        }
        return w[e.which] ? w[e.which] : _[e.which] ? _[e.which] : String.fromCharCode(e.which).toLowerCase()
    }
    function n(e, t) {
        return e.sort().join(",") === t.sort().join(",")
    }
    function i(e) {
        e = e || {};
        var t, n = !1;
        for (t in T) e[t] ? n = !0 : T[t] = 0;
        n || (I = !1)
    }
    function r(e, t, i, r, o, a) {
        var s, l, u = [],
            d = i.type;
        if (!k[e]) return [];
        for ("keyup" == d && c(e) && (t = [e]), s = 0; s < k[e].length; ++s) if (l = k[e][s], (r || !l.seq || T[l.seq] == l.level) && d == l.action && ("keypress" == d && !i.metaKey && !i.ctrlKey || n(t, l.modifiers))) {
            var h = !r && l.combo == o,
                p = r && l.seq == r && l.level == a;
            (h || p) && k[e].splice(s, 1), u.push(l)
        }
        return u
    }
    function o(e) {
        var t = [];
        return e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), t
    }
    function a(e, t, n) {
        D.stopCallback(t, t.target || t.srcElement, n) || e(t, n) === !1 && (t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.returnValue = !1, t.cancelBubble = !0)
    }
    function s(e, t, n) {
        var o, s = r(e, t, n),
            l = {},
            u = 0,
            d = !1;
        for (o = 0; o < s.length; ++o) s[o].seq && (u = Math.max(u, s[o].level));
        for (o = 0; o < s.length; ++o) if (s[o].seq) {
            if (s[o].level != u) continue;
            d = !0, l[s[o].seq] = 1, a(s[o].callback, n, s[o].combo)
        } else d || a(s[o].callback, n, s[o].combo);
        var h = "keypress" == n.type && E;
        n.type != I || c(e) || h || i(l), E = d && "keydown" == n.type
    }
    function l(e) {
        "number" != typeof e.which && (e.which = e.keyCode);
        var n = t(e);
        if (n) return "keyup" == e.type && N === n ? void(N = !1) : void D.handleKey(n, o(e), e)
    }
    function c(e) {
        return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
    }
    function u() {
        clearTimeout(y), y = setTimeout(i, 1e3)
    }
    function d() {
        if (!b) {
            b = {};
            for (var e in w) e > 95 && 112 > e || w.hasOwnProperty(e) && (b[w[e]] = e)
        }
        return b
    }
    function h(e, t, n) {
        return n || (n = d()[e] ? "keydown" : "keypress"), "keypress" == n && t.length && (n = "keydown"), n
    }
    function p(e, n, r, o) {
        function s(t) {
            return function() {
                I = t, ++T[e], u()
            }
        }
        function l(n) {
            a(r, n, e), "keyup" !== o && (N = t(n)), setTimeout(i, 10)
        }
        T[e] = 0;
        for (var c = 0; c < n.length; ++c) {
            var d = c + 1 === n.length,
                h = d ? l : s(o || g(n[c + 1]).action);
            m(n[c], h, o, e, c)
        }
    }
    function f(e) {
        return "+" === e ? ["+"] : e.split("+")
    }
    function g(e, t) {
        var n, i, r, o = [];
        for (n = f(e), r = 0; r < n.length; ++r) i = n[r], C[i] && (i = C[i]), t && "keypress" != t && S[i] && (i = S[i], o.push("shift")), c(i) && o.push(i);
        return t = h(i, o, t), {
            key: i,
            modifiers: o,
            action: t
        }
    }
    function m(e, t, n, i, o) {
        x[e + ":" + n] = t, e = e.replace(/\s+/g, " ");
        var a, s = e.split(" ");
        return s.length > 1 ? void p(e, s, t, n) : (a = g(e, n), k[a.key] = k[a.key] || [], r(a.key, a.modifiers, {
            type: a.action
        }, i, e, o), void k[a.key][i ? "unshift" : "push"]({
            callback: t,
            modifiers: a.modifiers,
            action: a.action,
            seq: i,
            level: o,
            combo: e
        }))
    }
    function v(e, t, n) {
        for (var i = 0; i < e.length; ++i) m(e[i], t, n)
    }
    for (var b, y, w = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "ins",
        46: "del",
        91: "meta",
        93: "meta",
        224: "meta"
    }, _ = {
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    }, S = {
        "~": "`",
        "!": "1",
        "@": "2",
        "#": "3",
        $: "4",
        "%": "5",
        "^": "6",
        "&": "7",
        "*": "8",
        "(": "9",
        ")": "0",
        _: "-",
        "+": "=",
        ":": ";",
        '"': "'",
        "<": ",",
        ">": ".",
        "?": "/",
        "|": "\\"
    }, C = {
        option: "alt",
        command: "meta",
        "return": "enter",
        escape: "esc",
        mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    }, k = {}, x = {}, T = {}, N = !1, E = !1, I = !1, P = 1; 20 > P; ++P) w[111 + P] = "f" + P;
    for (P = 0; 9 >= P; ++P) w[P + 96] = P;
    e(document, "keypress", l), e(document, "keydown", l), e(document, "keyup", l);
    var D = {
        bind: function(e, t, n) {
            return e = e instanceof Array ? e : [e], v(e, t, n), this
        },
        unbind: function(e, t) {
            return D.bind(e, function() {}, t)
        },
        trigger: function(e, t) {
            return x[e + ":" + t] && x[e + ":" + t]({}, e), this
        },
        reset: function() {
            return k = {}, x = {}, this
        },
        stopCallback: function(e, t) {
            return (" " + t.className + " ").indexOf(" mousetrap ") > -1 ? !1 : "INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.contentEditable && "true" == t.contentEditable
        },
        handleKey: s
    };
    window.Mousetrap = D, "function" == typeof define && define.amd && define(D)
}(), Mousetrap = function(e) {
    var t = {},
        n = e.stopCallback;
    return e.stopCallback = function(e, i, r) {
        return t[r] ? !1 : n(e, i, r)
    }, e.bindGlobal = function(n, i, r) {
        if (e.bind(n, i, r), n instanceof Array) for (var o = 0; o < n.length; o++) t[n[o]] = !0;
        else t[n] = !0
    }, e
}(Mousetrap), function(e) {
    var t, n = {
            className: "autosizejs",
            append: "",
            callback: !1,
            resizeDelay: 10
        },
        i = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
        r = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
        o = e(i).data("autosize", !0)[0];
    o.style.lineHeight = "99px", "99px" === e(o).css("lineHeight") && r.push("lineHeight"), o.style.lineHeight = "", e.fn.autosize = function(i) {
        return i = e.extend({}, n, i || {}), o.parentNode !== document.body && e(document.body).append(o), this.each(function() {
            function n() {
                var n, a = {};
                if (t = d, o.className = i.className, l = parseInt(h.css("maxHeight"), 10), e.each(r, function(e, t) {
                        a[t] = h.css(t)
                    }), e(o).css(a), "oninput" in d) {
                    var s = d.style.width;
                    d.style.width = "0px", n = d.offsetWidth, d.style.width = s
                }
            }
            function a() {
                var r, a, s, u;
                t !== d && n(), o.value = d.value + i.append, o.style.overflowY = d.style.overflowY, a = parseInt(d.style.height, 10), "getComputedStyle" in window ? (u = window.getComputedStyle(d), s = d.getBoundingClientRect().width, e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(e, t) {
                    s -= parseInt(u[t], 10)
                }), o.style.width = s + "px") : o.style.width = Math.max(h.width(), 0) + "px", o.scrollTop = 0, o.scrollTop = 9e4, r = o.scrollTop, l && r > l ? (d.style.overflowY = "scroll", r = l) : (d.style.overflowY = "hidden", c > r && (r = c)), r += p, a !== r && (d.style.height = r + "px", f && i.callback.call(d, d))
            }
            function s() {
                clearTimeout(u), u = setTimeout(function() {
                    h.width() !== m && a()
                }, parseInt(i.resizeDelay, 10))
            }
            var l, c, u, d = this,
                h = e(d),
                p = 0,
                f = e.isFunction(i.callback),
                g = {
                    height: d.style.height,
                    overflow: d.style.overflow,
                    overflowY: d.style.overflowY,
                    wordWrap: d.style.wordWrap,
                    resize: d.style.resize
                },
                m = h.width();
            h.data("autosize") || (h.data("autosize", !0), ("border-box" === h.css("box-sizing") || "border-box" === h.css("-moz-box-sizing") || "border-box" === h.css("-webkit-box-sizing")) && (p = h.outerHeight() - h.height()), c = Math.max(parseInt(h.css("minHeight"), 10) - p || 0, h.height()), h.css({
                overflow: "hidden",
                overflowY: "hidden",
                wordWrap: "break-word",
                resize: "none" === h.css("resize") || "vertical" === h.css("resize") ? "none" : "horizontal"
            }), "onpropertychange" in d ? "oninput" in d ? h.on("input.autosize keyup.autosize", a) : h.on("propertychange.autosize", function() {
                "value" === event.propertyName && a()
            }) : h.on("input.autosize", a), i.resizeDelay !== !1 && e(window).on("resize.autosize", s), h.on("autosize.resize", a), h.on("autosize.resizeIncludeStyle", function() {
                t = null, a()
            }), h.on("autosize.destroy", function() {
                t = null, clearTimeout(u), e(window).off("resize", s), h.off("autosize").off(".autosize").css(g).removeData("autosize")
            }), a())
        })
    }
}(window.jQuery || window.Zepto), function() {
    function e(e) {
        this.tokens = [], this.tokens.links = {}, this.options = e || c.defaults, this.rules = u.normal, this.options.gfm && (this.rules = this.options.tables ? u.tables : u.gfm)
    }
    function t(e, t) {
        if (this.options = t || c.defaults, this.links = e, this.rules = d.normal, this.renderer = this.options.renderer || new n, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
        this.options.gfm ? this.rules = this.options.breaks ? d.breaks : d.gfm : this.options.pedantic && (this.rules = d.pedantic)
    }
    function n(e) {
        this.options = e || {}
    }
    function i(e) {
        this.tokens = [], this.token = null, this.options = e || c.defaults, this.options.renderer = this.options.renderer || new n, this.renderer = this.options.renderer, this.renderer.options = this.options
    }
    function r(e, t) {
        return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }
    function o(e) {
        return e.replace(/&([#\w]+);/g, function(e, t) {
            return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? String.fromCharCode("x" === t.charAt(1) ? parseInt(t.substring(2), 16) : +t.substring(1)) : ""
        })
    }
    function a(e, t) {
        return e = e.source, t = t || "", function n(i, r) {
            return i ? (r = r.source || r, r = r.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(i, r), n) : new RegExp(e, t)
        }
    }
    function s() {}
    function l(e) {
        for (var t, n, i = 1; i < arguments.length; i++) {
            t = arguments[i];
            for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }
    function c(t, n, o) {
        var a;
        for (a in h) a = h[a], a && a.init && a.init();
        if (o || "function" == typeof n) {
            o || (o = n, n = null), n = l({}, c.defaults, n || {});
            var s, u, d = n.highlight,
                p = 0;
            try {
                s = e.lex(t, n)
            } catch (f) {
                return o(f)
            }
            u = s.length;
            var g = function(e) {
                if (e) return n.highlight = d, o(e);
                var t;
                try {
                    t = i.parse(s, n)
                } catch (r) {
                    e = r
                }
                return n.highlight = d, e ? o(e) : o(null, t)
            };
            if (!d || d.length < 3) return g();
            if (delete n.highlight, !u) return g();
            for (; p < s.length; p++)!
                function(e) {
                    return "code" !== e.type ? --u || g() : d(e.text, e.lang, function(t, n) {
                        return t ? g(t) : null == n || n === e.text ? --u || g() : (e.text = n, e.escaped = !0, void(--u || g()))
                    })
                }(s[p])
        } else try {
            return n && (n = l({}, c.defaults, n)), i.parse(e.lex(t, n), n)
        } catch (f) {
            if (f.message += "\nPlease report this to https://github.com/chjj/marked.", (n || c.defaults).silent) return "<p>An error occured:</p><pre>" + r(f.message + "", !0) + "</pre>";
            throw f
        }
    }
    var u = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: s,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: s,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: s,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
    };
    u.bullet = /(?:[*+-]|\d+\.)/, u.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, u.item = a(u.item, "gm")(/bull/g, u.bullet)(), u.list = a(u.list)(/bull/g, u.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + u.def.source + ")")(), u.blockquote = a(u.blockquote)("def", u.def)(), u._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", u.html = a(u.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, u._tag)(), u.paragraph = a(u.paragraph)("hr", u.hr)("heading", u.heading)("lheading", u.lheading)("blockquote", u.blockquote)("tag", "<" + u._tag)("def", u.def)(), u.normal = l({}, u), u.gfm = l({}, u.normal, {
        fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/
    }), u.gfm.paragraph = a(u.paragraph)("(?!", "(?!" + u.gfm.fences.source.replace("\\1", "\\2") + "|" + u.list.source.replace("\\1", "\\3") + "|")(), u.tables = l({}, u.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
    }), e.rules = u, e.lex = function(t, n) {
        var i = new e(n);
        return i.lex(t)
    }, e.prototype.lex = function(e) {
        return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
    }, e.prototype.token = function(e, t, n) {
        for (var i, r, o, a, s, l, c, d, p, e = e.replace(/^ +$/gm, ""); e;) {
            var f, g, m = !1;
            for (f in h) if (f = h[f], f && f.token && (g = f.token(e, t, n, this.tokens), e = g.text, g.parsed)) {
                m = !0;
                break
            }
            if (!m) if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({
                    type: "space"
                })), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({
                type: "code",
                text: this.options.pedantic ? o : o.replace(/\n+$/, "")
            });
            else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "code",
                lang: o[2],
                text: o[3]
            });
            else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "heading",
                depth: o[1].length,
                text: o[2]
            });
            else if (t && (o = this.rules.nptable.exec(e))) {
                for (e = e.substring(o[0].length), l = {
                    type: "table",
                    header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                    align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: o[3].replace(/\n$/, "").split("\n")
                }, d = 0; d < l.align.length; d++) l.align[d] = /^ *-+: *$/.test(l.align[d]) ? "right" : /^ *:-+: *$/.test(l.align[d]) ? "center" : /^ *:-+ *$/.test(l.align[d]) ? "left" : null;
                for (d = 0; d < l.cells.length; d++) l.cells[d] = l.cells[d].split(/ *\| */);
                this.tokens.push(l)
            } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "heading",
                depth: "=" === o[2] ? 1 : 2,
                text: o[1]
            });
            else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "hr"
            });
            else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "blockquote_start"
            }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t, !0), this.tokens.push({
                type: "blockquote_end"
            });
            else if (o = this.rules.list.exec(e)) {
                for (e = e.substring(o[0].length), a = o[2], this.tokens.push({
                    type: "list_start",
                    ordered: a.length > 1
                }), o = o[0].match(this.rules.item), i = !1, p = o.length, d = 0; p > d; d++) l = o[d], c = l.length, l = l.replace(/^ *([*+-]|\d+\.) +/, ""), ~l.indexOf("\n ") && (c -= l.length, l = this.options.pedantic ? l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + c + "}", "gm"), "")), this.options.smartLists && d !== p - 1 && (s = u.bullet.exec(o[d + 1])[0], a === s || a.length > 1 && s.length > 1 || (e = o.slice(d + 1).join("\n") + e, d = p - 1)), r = i || /\n\n(?!\s*$)/.test(l), d !== p - 1 && (i = "\n" === l.charAt(l.length - 1), r || (r = i)), this.tokens.push({
                    type: r ? "loose_item_start" : "list_item_start"
                }), this.token(l, !1, n), this.tokens.push({
                    type: "list_item_end"
                });
                this.tokens.push({
                    type: "list_end"
                })
            } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: this.options.sanitizer(o, !0, this.tokens) ? "paragraph" : "html",
                pre: "pre" === o[1] || "script" === o[1] || "style" === o[1],
                text: o[0]
            });
            else if (!n && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = {
                href: o[2],
                title: o[3]
            };
            else if (t && (o = this.rules.table.exec(e))) {
                for (e = e.substring(o[0].length), l = {
                    type: "table",
                    header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                    align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                }, d = 0; d < l.align.length; d++) l.align[d] = /^ *-+: *$/.test(l.align[d]) ? "right" : /^ *:-+: *$/.test(l.align[d]) ? "center" : /^ *:-+ *$/.test(l.align[d]) ? "left" : null;
                for (d = 0; d < l.cells.length; d++) l.cells[d] = l.cells[d].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                this.tokens.push(l)
            } else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({
                type: "paragraph",
                text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
            });
            else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({
                type: "text",
                text: o[0]
            });
            else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
        }
        return this.tokens
    };
    var d = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: s,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: s,
        text: /^[\s\S]+?(?=[\\<!\[*`]|([^\w\n])_| {2,}\n|$)\1/
    };
    d._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, d._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, d.link = a(d.link)("inside", d._inside)("href", d._href)(), d.reflink = a(d.reflink)("inside", d._inside)(), d.normal = l({}, d), d.pedantic = l({}, d.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    }), d.gfm = l({}, d.normal, {
        escape: a(d.escape)("])", "~|])")(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: a(d.text)("]|", "~]|")("|", "|https?://|")()
    }), d.breaks = l({}, d.gfm, {
        br: a(d.br)("{2,}", "*")(),
        text: a(d.gfm.text)("{2,}", "*")()
    }), t.rules = d, t.output = function(e, n, i) {
        var r = new t(n, i);
        return r.output(e)
    }, t.prototype.output = function(e) {
        var t, n, i, o, a = "",
            s = !1;
        for (e && e.indexOf("sentence") > 0 && (s = !0); e;) if (o = this.rules.escape.exec(e)) e = e.substring(o[0].length), a += o[1];
        else if (o = this.rules.autolink.exec(e)) e = e.substring(o[0].length), "@" === o[2] ? (n = this.mangle(":" === o[1].charAt(6) ? o[1].substring(7) : o[1]), i = this.mangle("mailto:") + n) : (n = r(o[1]), i = n), a += this.renderer.link(i, null, n);
        else if (this.inLink || !(o = this.rules.url.exec(e))) {
            if (o = this.rules.tag.exec(e))!this.inLink && /^<a /i.test(o[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(o[0]) && (this.inLink = !1), e = e.substring(o[0].length), a += this.options.sanitizer(o, !1, a) ? r(o[0]) : o[0];
            else if (o = this.rules.link.exec(e)) e = e.substring(o[0].length), this.inLink = !0, a += this.outputLink(o, {
                href: o[2],
                title: o[3]
            }), this.inLink = !1;
            else if ((o = this.rules.reflink.exec(e)) || (o = this.rules.nolink.exec(e))) {
                if (e = e.substring(o[0].length), t = (o[2] || o[1]).replace(/\s+/g, " "), t = this.links[t.toLowerCase()], !t || !t.href) {
                    a += o[0].charAt(0), e = o[0].substring(1) + e;
                    continue
                }
                this.inLink = !0, a += this.outputLink(o, t), this.inLink = !1
            } else if (o = this.rules.strong.exec(e)) e = e.substring(o[0].length), a += this.renderer.strong(this.output(o[2] || o[1]));
            else if (o = this.rules.em.exec(e)) e = e.substring(o[0].length), a += this.renderer.em(this.output(o[2] || o[1]));
            else if (o = this.rules.code.exec(e)) e = e.substring(o[0].length), a += this.renderer.codespan(r(o[2], !0));
            else if (o = this.rules.br.exec(e)) e = e.substring(o[0].length), a += this.renderer.br();
            else if (o = this.rules.del.exec(e)) e = e.substring(o[0].length), a += this.renderer.del(this.output(o[1]));
            else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), a += r(this.smartypants(o[0]));
            else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
        } else e = e.substring(o[0].length), n = r(o[1]), i = n, a += this.renderer.link(i, null, n);
        return a
    }, t.prototype.outputLink = function(e, t) {
        var n = r(t.href),
            i = t.title ? r(t.title) : null;
        return "!" !== e[0].charAt(0) ? this.renderer.link(n, i, this.output(e[1])) : this.renderer.image(n, i, r(e[1]))
    }, t.prototype.smartypants = function(e) {
        return this.options.smartypants ? e.replace(/--/g, "\u2014").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026") : e
    }, t.prototype.mangle = function(e) {
        for (var t, n = "", i = e.length, r = 0; i > r; r++) t = e.charCodeAt(r), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
        return n
    }, n.prototype.code = function(e, t, n) {
        if (this.options.highlight) {
            var i = this.options.highlight(e, t);
            null != i && i !== e && (n = !0, e = i)
        }
        return t ? '<pre><code class="' + this.options.langPrefix + r(t, !0) + '">\n' + (n ? e : r(e, !0)) + "\n</code></pre>\n" : "<pre><code>\n" + (n ? e : r(e, !0)) + "\n</code></pre>\n"
    }, n.prototype.blockquote = function(e) {
        return "<blockquote>\n" + e + "</blockquote>\n"
    }, n.prototype.html = function(e) {
        return e
    }, n.prototype.heading = function(e, t, n) {
        return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
    }, n.prototype.hr = function() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
    }, n.prototype.list = function(e, t) {
        var n = t ? "ol" : "ul";
        return "<" + n + ">\n" + e + "</" + n + ">\n"
    }, n.prototype.listitem = function(e) {
        return "<li>" + e + "</li>\n"
    }, n.prototype.paragraph = function(e) {
        return "<p>" + e + "</p>\n"
    }, n.prototype.table = function(e, t) {
        return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
    }, n.prototype.tablerow = function(e) {
        return "<tr>\n" + e + "</tr>\n"
    }, n.prototype.tablecell = function(e, t) {
        var n = t.header ? "th" : "td",
            i = t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">";
        return i + e + "</" + n + ">\n"
    }, n.prototype.strong = function(e) {
        return "<strong>" + e + "</strong>"
    }, n.prototype.em = function(e) {
        return "<em>" + e + "</em>"
    }, n.prototype.codespan = function(e) {
        return "<code>" + e + "</code>"
    }, n.prototype.br = function() {
        return this.options.xhtml ? "<br/>" : "<br>"
    }, n.prototype.del = function(e) {
        return "<del>" + e + "</del>"
    }, n.prototype.link = function(e, t, n) {
        if (this.options.sanitize) {
            try {
                var i = decodeURIComponent(o(e)).replace(/[^\w:]/g, "").toLowerCase()
            } catch (r) {
                return ""
            }
            if (0 === i.indexOf("javascript:")) return ""
        }
        var a = '<a href="' + e + '"';
        return t && (a += ' title="' + t + '"'), a += ">" + n + "</a>"
    }, n.prototype.image = function(e, t, n) {
        var i = '<img src="' + e + '" alt="' + n + '"';
        return t && (i += ' title="' + t + '"'), i += this.options.xhtml ? "/>" : ">"
    }, i.parse = function(e, t, n) {
        var r = new i(t, n);
        return r.parse(e)
    }, i.prototype.parse = function(e) {
        this.inline = new t(e.links, this.options, this.renderer), this.tokens = e.reverse();
        var n, i, r = this.tokens.length - 1;
        for (i in h) if (i = h[i], i && (i.prepare && i.prepare(), i.output)) for (n = r; n >= 0; n--) i.output(this.tokens[n]);
        for (var o = ""; this.next();) o += this.tok();
        for (i in h) i = h[i], i && i.aftermath && (o = i.aftermath(o));
        return o
    }, i.prototype.next = function() {
        return this.token = this.tokens.pop()
    }, i.prototype.peek = function() {
        return this.tokens[this.tokens.length - 1] || 0
    }, i.prototype.parseText = function() {
        for (var e = this.token.text;
             "text" === this.peek().type;) e += "\n" + this.next().text;
        return this.inline.output(e)
    }, i.prototype.tok = function() {
        switch (this.token.type) {
            case "space":
                return "";
            case "hr":
                return this.renderer.hr();
            case "heading":
                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
            case "code":
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
            case "table":
                var e, t, n, i, r, o = "",
                    a = "";
                for (n = "", e = 0; e < this.token.header.length; e++) i = {
                    header: !0,
                    align: this.token.align[e]
                }, n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                    header: !0,
                    align: this.token.align[e]
                });
                for (o += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                    for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) n += this.renderer.tablecell(this.inline.output(t[r]), {
                        header: !1,
                        align: this.token.align[r]
                    });
                    a += this.renderer.tablerow(n)
                }
                return this.renderer.table(o, a);
            case "blockquote_start":
                for (var a = "";
                     "blockquote_end" !== this.next().type;) a += this.tok();
                return this.renderer.blockquote(a);
            case "list_start":
                for (var a = "", s = this.token.ordered;
                     "list_end" !== this.next().type;) a += this.tok();
                return this.renderer.list(a, s);
            case "list_item_start":
                for (var a = "";
                     "list_item_end" !== this.next().type;) a += "text" === this.token.type ? this.parseText() : this.tok();
                return this.renderer.listitem(a);
            case "loose_item_start":
                for (var a = "";
                     "list_item_end" !== this.next().type;) a += this.tok();
                return this.renderer.listitem(a);
            case "html":
                var l = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                return this.renderer.html(l);
            case "paragraph":
                return this.renderer.paragraph(this.inline.output(this.token.text));
            case "text":
                return this.renderer.paragraph(this.parseText())
        }
    }, s.exec = s, c.options = c.setOptions = function(e) {
        return l(c.defaults, e), c
    }, c.defaults = {
        gfm: !0,
        tables: !0,
        breaks: !1,
        pedantic: !1,
        sanitize: !1,
        sanitizer: function() {
            return !!this.sanitize
        },
        smartLists: !1,
        silent: !1,
        highlight: null,
        langPrefix: "lang-",
        smartypants: !1,
        headerPrefix: "",
        renderer: new n,
        xhtml: !1
    };
    var h = [];
    c.addExtension = function(e) {
        h[e.Name] = e
    }, c.removeExtension = function(e) {
        var t = e.Name;
        h[t] && delete h[t]
    }, c.hasExtension = function(e) {
        return !!h[e]
    }, c.Parser = i, c.parser = i.parse, c.Renderer = n, c.Lexer = e, c.lexer = e.lex, c.InlineLexer = t, c.inlineLexer = t.output, c.parse = c, "undefined" != typeof module && "object" == typeof exports ? module.exports = c : "function" == typeof define && define.amd ? define(function() {
        return c
    }) : this.marked = c
}.call(function() {
        return this || ("undefined" != typeof window ? window : global)
    }()), !
    function(e) {
        "use strict";
        var t = function(t, n) {
            this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
        };
        t.prototype = {
            constructor: t,
            toggle: function() {
                return this[this.isShown ? "hide" : "show"]()
            },
            show: function() {
                var t = this,
                    n = e.Event("show");
                this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                    var n = e.support.transition && t.$element.hasClass("fade");
                    t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function() {
                        t.$element.focus().trigger("shown")
                    }) : t.$element.focus().trigger("shown")
                }))
            },
            hide: function(t) {
                t && t.preventDefault();
                t = e.Event("hide"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
            },
            enforceFocus: function() {
                var t = this;
                e(document).on("focusin.modal", function(e) {
                    t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus()
                })
            },
            escape: function() {
                var e = this;
                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                    27 == t.which && e.hide()
                }) : this.isShown || this.$element.off("keyup.dismiss.modal")
            },
            hideWithTransition: function() {
                var t = this,
                    n = setTimeout(function() {
                        t.$element.off(e.support.transition.end), t.hideModal()
                    }, 500);
                this.$element.one(e.support.transition.end, function() {
                    clearTimeout(n), t.hideModal()
                })
            },
            hideModal: function() {
                var e = this;
                this.$element.hide(), this.backdrop(function() {
                    e.removeBackdrop(), e.$element.trigger("hidden")
                })
            },
            removeBackdrop: function() {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            },
            backdrop: function(t) {
                var n = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var i = e.support.transition && n;
                    if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                    i ? this.$backdrop.one(e.support.transition.end, t) : t()
                } else!this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
            }
        };
        var n = e.fn.modal;
        e.fn.modal = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("modal"),
                    o = e.extend({}, e.fn.modal.defaults, i.data(), "object" == typeof n && n);
                r || i.data("modal", r = new t(this, o)), "string" == typeof n ? r[n]() : o.show && r.show()
            })
        }, e.fn.modal.defaults = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
            return e.fn.modal = n, this
        }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
            var n = e(this),
                i = n.attr("href"),
                r = e(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                o = r.data("modal") ? "toggle" : e.extend({
                    remote: !/#/.test(i) && i
                }, r.data(), n.data());
            t.preventDefault(), r.modal(o).one("hide", function() {
                n.focus()
            })
        })
    }(window.jQuery), function() {
    Maleskine.Images = {
        "writer-upload-img.gif": "http://cdn-qn0.jianshu.io/assets/writer-upload-img-a662b23eb49d36f16d9e73006cff78b5.gif"
    }
}.call(this), function() {
    Maleskine.RegEx = {
        HTML_TAGS: "a abbr address area article aside audio b base bdi bdo blockquote body br button canvas caption cite code col colgroup command data datagrid datalist dd del details dfn div dl dt em embed eventsource fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link mark map menu meta meter nav noscript object ol optgroup option output p param pre progress q ruby rp rt s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr".split(" "),
        ADDITIONAL_HTML_TAG: "&nbsp; &copy;".split(" "),
        MARKDOWN: {
            HEADERS: /(^#+)|(^[-=]+$)/gm,
            EMPHASIS: /^(\*+|_+)(.*)(\1)$/g,
            BLOCKQUOTES: /^\s*>\s*/gm,
            LISTS: /^\s{0,3}(-|\*|\+|\d\.)\s+/g,
            HRULERS: /^(\*\s{0,3}\*\s{0,3}\*|-\s{0,3}-\s{0,3}-|_\s{0,3}_\s{0,3}_)[\s\*]*$/g,
            IMAGES: /!\[.*?\]\(.*?\)/gm,
            LINKS: /\[(.*?)\]\(.*?\)/gm,
            QUICK_LINKS: /<(.*)>/gm,
            COPYRIGHT: /&copy;/gi
        },
        EMAIL: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/
    }
}.call(this), function() {
    Maleskine.ShareScripts = {
        share: function(e, t, n, i, r, o, a) {
            var s, l;
            return t = t.replace(/'/, "%2527"), l = o ? I18n.t("reading.social_sharing.self_share_note_text", {
                note_title: t
            }) : I18n.t("reading.social_sharing.reader_share_note_text", {
                note_title: t,
                user: r
            }), l += Maleskine.Settings.mention_official_account(e), null != n && (n = n.replace(/'/, "%2527"), l = l + " \u300c" + n + "\u300d"), s = Maleskine.ShareScripts.getShareUrl(e, t, n, l, i, a), "javascript:void(function(){var d=document;var r='" + s + "';var x=function(){if(!window.open(r,'" + e + "','toolbar=0,status=0,resizable=1,scrollbars=yes,status=1,width=440,height=430,left='+(screen.width-440)/2+',top='+(screen.height-430)/2))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}}())"
        },
        getShareUrl: function(e, t, n, i, r, o) {
            var a;
            switch (t = encodeURIComponent(t), i = encodeURIComponent(i), r = encodeURIComponent(r + ("?utm_campaign=maleskine&utm_content=note&utm_medium=reader_share&utm_source=" + e)), e) {
                case "weibo":
                    return a = "http://service.weibo.com/share/share.php?appkey=" + Maleskine.Settings.weibo.appKey + "&title=" + encodeURIComponent(i) + "&url=" + encodeURIComponent(r) + "&searchPic=false&style=simple", o.length > 0 && (a += "&pic=" + encodeURIComponent(o[0])), a;
                case "twitter":
                    return null != n ? "http://twitter.com/share?url=" + r + "&text=" + i + "&related=jianshucom" : "http://twitter.com/share?url=" + encodeURIComponent(r) + "&text=" + i + "&related=jianshucom";
                case "douban":
                    return "http://www.douban.com/recommend/?url=" + encodeURIComponent(r) + "&title=" + t + "&v=1";
                case "tweibo":
                    return "http://share.v.t.qq.com/index.php?c=share&a=index&url=" + encodeURIComponent(r) + "&title=" + i;
                case "qzone":
                    return "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(r) + "&title=" + i;
                case "facebook":
                    return "http://www.facebook.com/sharer.php?s=100&p[url]=" + encodeURIComponent(r) + "&p[title]=" + t + "&p[summary]=" + i;
                case "google_plus":
                    return "http://plus.google.com/share?url=" + encodeURIComponent(r);
                case "renren":
                    return "http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(r) + "&description=" + i + "&title=" + t
            }
        }
    }
}.call(this), function() {
    var e, t, n;
    n = ["keyup", !1, "blur", !1, "focus", !1, "drop", !0, "change", !1, "input", !1, "textInput", !1, "paste", !0, "cut", !0, "copy", !0, "contextmenu", !0], Maleskine.BrowserDetector.isIE() || (e = document.createElement("input"), t = "oninput" in e, t || (e.setAttribute("oninput", "return;"), t = "function" == typeof e.oninput), e = null, t && (n = ["input", !1, "textInput", !1])), $.fn.userChange = function(e, t) {
        var i;
        return $(this).data("userChangeCallback", e), $(this).data("userChangeData", t), i = function(n, r) {
            var o, a, s;
            return a = this, s = $(this), this.value !== s.data("priorValue") ? (s.data("priorValue", this.value), e.call(this, n, t)) : r ? (o = $.extend({}, n), setTimeout(function() {
                return i.call(a, o, !1)
            }, 1)) : void 0
        }, this.each(function() {
            var e, t, r;
            for (r = $(this).data("priorValue", this.value), e = 0, t = []; e < n.length;)!
                function(e) {
                    return r.on(n[e], function(t) {
                        return i.call(this, t, n[e + 1])
                    })
                }(e), t.push(e += 2);
            return t
        })
    }, $.fn.forceUpdateUserChangeData = function() {
        var e, t, n, i;
        if (i = $(this), n = i.data("priorValue"), t = this.value || this.val(), this.value !== n) {
            if (i.data("priorValue", t), e = i.data("userChangeCallback"), !e) return;
            return e.call(this, null, i.data("userChangeData"))
        }
    }
}.call(this), function() {
    !
        function(e) {
            var t, n;
            return n = {
                allowMultiple: !1,
                globalDrop: !1,
                dropZone: null,
                send: function() {}
            }, t = function() {
                function e(e) {
                    var t, n;
                    for (n in e) t = e[n], null != t && (this[n] = t)
                }
                return e
            }(), t.prototype = n, e.fn.imageUpload = function(e) {
                return e = new t(e), this.attr("multiple", e.allowMultiple), this.on("change", function() {
                    return function(t) {
                        var n, i, r, o, a;
                        if (t.preventDefault(), t.stopPropagation(), i = [], e.allowMultiple) for (a = t.target.files, r = 0, o = a.length; o > r; r++) n = a[r], i.push(n);
                        else i.push(t.target.files[0]);
                        return e.send(i)
                    }
                }(this)), Modernizr.draganddrop && (e.globalDrop === !0 && (window.ondrop = function() {
                    return function(t) {
                        var n, i, r, o, a;
                        if (t.preventDefault(), t.stopPropagation(), i = [], e.allowMultiple) for (a = t.dataTransfer.files, r = 0, o = a.length; o > r; r++) n = a[r], i.push(n);
                        else i.push(t.dataTransfer.files[0]);
                        return e.send(i)
                    }
                }(this)), null != e.dropZone && e.dropZone.on("drop", function() {
                    return function(t) {
                        var n, i, r, o, a;
                        if (e.dropZone.focus(), t.preventDefault(), t.stopPropagation(), i = [], e.allowMultiple) for (a = t.originalEvent.dataTransfer.files, r = 0, o = a.length; o > r; r++) n = a[r], i.push(n);
                        else i.push(t.originalEvent.dataTransfer.files[0]);
                        return e.send(i)
                    }
                }(this))), this
            }
        }(jQuery)
}.call(this), function() {
    $(function() {
        var e, t;
        return e = 10, t = function(e, t, n, i, r) {
            var o;
            return "bilibili" === i ? (o = '<div class="video-player player">', o += '<video width="' + t + '" height="' + n + '" preload="auto" controls="true">', o += '<source src="' + e + '" type="video/mp4">', o += '<object type="application/x-shockwave-flash" data="http://static.hdslb.com/play.swf" class="flash" style="width:' + t + "px; height:" + n + 'px;">', o += '<param name="bgcolor" value="#ffffff">', o += '<param name="allowfullscreeninteractive" value="true">', o += '<param name="allowfullscreen" value="true">', o += '<param name="quality" value="high">', o += '<param name="allowscriptaccess" value="always">', o += '<param name="wmode" value="direct">', o += '<param name="flashvars" value="' + r + '">', o += "</object>", o += "</video>", o += "</div>") : o = '<iframe class="player" src="' + e + '" height="' + n + '" width="' + t + '" frameborder=0 allowfullscreen style="width:' + t + "px; height:" + n + 'px;"></iframe>', o
        }, $.fn.activateVideo = Maleskine.BrowserDetector.isIE8() || Maleskine.BrowserDetector.lessThanIE8() ?
            function() {
                return $(this).find("div.video-package").each(function(e, t) {
                    return t = $(t), t.html('<div class="video-description">\u60a8\u6240\u7528\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u89c6\u9891\u64ad\u653e\uff0c\u8bf7\u66f4\u65b0\u6d4f\u89c8\u5668\uff01</div>')
                })
            } : function() {
            var n, i, r;
            return i = $(this), r = i.width(), r = Math.round(r), n = Math.round(r / 6 * 5), i.find("div.video-package").each(function(i, o) {
                var a, s, l, c, u, d, h, p, f, g, m, v, b;
                return o = $(o), i >= e ? void o.remove() : (v = o.attr("data-video-url"), v && Maleskine.Utils.doesVideoURLAvailable(v) ? (f = o.attr("data-provider"), u = o.attr("data-flash-url"), p = $(t(v, r, n, f, u)), c = o.attr("data-cover-uuid"), a = o.find(".video-description"), s = a.html(), h = $('<div class="video-placeholder-area">' + s + "</div>"), h.css({
                    width: r + "px"
                }), b = $('<img class="video-cover">'), b.attr("src", Maleskine.Utils.getVideoCoverImage(c, 90)), h.append(b), a.html(""), o.find("br").before(h), l = $('<div class="video-close-button"><i class="fa fa-eject"></i> \u6536\u8d77\u89c6\u9891</div>'), l.css({
                    display: "none"
                }), g = $('<div class="video-provider-button"><i class="fa fa-external-link"></i> \u8f6c\u5230\u89c6\u9891\u9875</div>'), g.css({
                    display: "none"
                }), "bilibili" === f && (l.css({
                    "margin-top": "-20px"
                }), g.css({
                    "margin-top": "-20px"
                }), d = u.split("&"), d = d.filter(function(e) {
                    return e.indexOf("aid") >= 0
                }), d.length > 0 ? (d = d[0], d = d.split("="), d = d[1] || "") : d = "", d = "" === d ? "http://www.bilibili.com/" : "http://www.bilibili.com/video/av" + d + "/", g.on("click", function() {
                    return window.open(d)
                })), o.append(l), o.append(g), m = !1, h.on("click", function() {
                    var e;
                    if (!m) return m = !0, h.after(p), e = !1, h.hide(), o.css({
                        "margin-bottom": "50px"
                    }), l.css({
                        display: "block"
                    }), "bilibili" === f ? g.css({
                        display: "block"
                    }) : void 0
                }), l.on("click", function() {
                    return m ? (m = !1, p.remove(), h.show(), o.css({
                        "margin-bottom": ""
                    }), l.css({
                        display: "none"
                    }), g.css({
                        display: "none"
                    })) : void 0
                })) : void o.remove())
            })
        }
    })
}.call(this), function(e, t) {
    function n(t, n) {
        var r, o, a, s = t.nodeName.toLowerCase();
        return "area" === s ? (r = t.parentNode, o = r.name, t.href && o && "map" === r.nodeName.toLowerCase() ? (a = e("img[usemap=#" + o + "]")[0], !! a && i(a)) : !1) : (/input|select|textarea|button|object/.test(s) ? !t.disabled : "a" === s ? t.href || n : n) && i(t)
    }
    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
                return "hidden" === e.css(this, "visibility")
            }).length
    }
    var r = 0,
        o = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
        version: "1.9.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        _focus: e.fn.focus,
        focus: function(t, n) {
            return "number" == typeof t ? this.each(function() {
                var i = this;
                setTimeout(function() {
                    e(i).focus(), n && n.call(i)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) for (var i, r, o = e(this[0]); o.length && o[0] !== document;) {
                if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                o = o.parent()
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++r)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, i) {
            return !!e.data(t, i[3])
        },
        focusable: function(t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var i = e.attr(t, "tabindex"),
                r = isNaN(i);
            return (r || i >= 0) && n(t, !r)
        }
    }), e(function() {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight, e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = 100 === n.offsetHeight, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, i) {
        function r(t, n, i, r) {
            return e.each(o, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), r && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            s = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function(n) {
            return n === t ? s["inner" + i].call(this) : this.each(function() {
                e(this).css(a, r(this, n) + "px")
            })
        }, e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? s["outer" + i].call(this, t) : this.each(function() {
                e(this).css(a, r(this, t, !0, n) + "px")
            })
        }
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), function() {
        var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
        e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = 6 === parseFloat(t[1], 10)
    }(), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, n, i) {
                var r, o = e.ui[t].prototype;
                for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]])
            },
            call: function(e, t, n) {
                var i, r = e.plugins[t];
                if (r && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (i = 0; i < r.length; i++) e.options[r[i][0]] && r[i][1].apply(e.element, n)
            }
        },
        contains: e.contains,
        hasScroll: function(t, n) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                r = !1;
            return t[i] > 0 ? !0 : (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
        },
        isOverAxis: function(e, t, n) {
            return e > t && t + n > e
        },
        isOver: function(t, n, i, r, o, a) {
            return e.ui.isOverAxis(t, i, o) && e.ui.isOverAxis(n, r, a)
        }
    }))
}(jQuery), function(e, t) {
    var n = 0,
        i = Array.prototype.slice,
        r = e.cleanData;
    e.cleanData = function(t) {
        for (var n, i = 0; null != (n = t[i]); i++) try {
            e(n).triggerHandler("remove")
        } catch (o) {}
        r(t)
    }, e.widget = function(t, n, i) {
        var r, o, a, s, l = t.split(".")[0];
        t = t.split(".")[1], r = l + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][r.toLowerCase()] = function(t) {
            return !!e.data(t, r)
        }, e[l] = e[l] || {}, o = e[l][t], a = e[l][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
        }, e.extend(a, o, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
        }), s = new n, s.options = e.widget.extend({}, s.options), e.each(i, function(t, r) {
            e.isFunction(r) && (i[t] = function() {
                var e = function() {
                        return n.prototype[t].apply(this, arguments)
                    },
                    i = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t, n = this._super,
                        o = this._superApply;
                    return this._super = e, this._superApply = i, t = r.apply(this, arguments), this._super = n, this._superApply = o, t
                }
            }())
        }), a.prototype = e.widget.extend(s, {
            widgetEventPrefix: o ? s.widgetEventPrefix : t
        }, i, {
            constructor: a,
            namespace: l,
            widgetName: t,
            widgetBaseClass: r,
            widgetFullName: r
        }), o ? (e.each(o._childConstructors, function(t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, a, n._proto)
        }), delete o._childConstructors) : n._childConstructors.push(a), e.widget.bridge(t, a)
    }, e.widget.extend = function(n) {
        for (var r, o, a = i.call(arguments, 1), s = 0, l = a.length; l > s; s++) for (r in a[s]) o = a[s][r], a[s].hasOwnProperty(r) && o !== t && (n[r] = e.isPlainObject(o) ? e.isPlainObject(n[r]) ? e.widget.extend({}, n[r], o) : e.widget.extend({}, o) : o);
        return n
    }, e.widget.bridge = function(n, r) {
        var o = r.prototype.widgetFullName || n;
        e.fn[n] = function(a) {
            var s = "string" == typeof a,
                l = i.call(arguments, 1),
                c = this;
            return a = !s && l.length ? e.widget.extend.apply(null, [a].concat(l)) : a, this.each(s ?
                function() {
                    var i, r = e.data(this, o);
                    return r ? e.isFunction(r[a]) && "_" !== a.charAt(0) ? (i = r[a].apply(r, l), i !== r && i !== t ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + a + "'")
                } : function() {
                var t = e.data(this, o);
                t ? t.option(a || {})._init() : e.data(this, o, new r(a, this))
            }), c
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetName, this), e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, i) {
            var r, o, a, s = n;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof n) if (s = {}, r = n.split("."), n = r.shift(), r.length) {
                for (o = s[n] = e.widget.extend({}, this.options[n]), a = 0; a < r.length - 1; a++) o[r[a]] = o[r[a]] || {}, o = o[r[a]];
                if (n = r.pop(), i === t) return o[n] === t ? null : o[n];
                o[n] = i
            } else {
                if (i === t) return this.options[n] === t ? null : this.options[n];
                s[n] = i
            }
            return this._setOptions(s), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, n, i) {
            var r, o = this;
            "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), e.each(i, function(i, a) {
                function s() {
                    return t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || e.guid++);
                var l = i.match(/^(\w+)\s*(.*)$/),
                    c = l[1] + o.eventNamespace,
                    u = l[2];
                u ? r.delegate(u, c, s) : n.bind(c, s)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, i) {
            var r, o, a = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent) for (r in o) r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(e.isFunction(a) && a.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(i, r, o) {
            "string" == typeof r && (r = {
                effect: r
            });
            var a, s = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
            r = r || {}, "number" == typeof r && (r = {
                duration: r
            }), a = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), a && e.effects && (e.effects.effect[s] || e.uiBackCompat !== !1 && e.effects[s]) ? i[t](r) : s !== t && i[s] ? i[s](r.duration, r.easing, o) : i.queue(function(n) {
                e(this)[t](), o && o.call(i[0]), n()
            })
        }
    }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() {
        return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
    })
}(jQuery), function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1
    }), e.widget("ui.mouse", {
        version: "1.9.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(n) {
            if (!t) {
                this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                var i = this,
                    r = 1 === n.which,
                    o = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                return r && !o && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return !e.ui.ie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery), function(e) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.9.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function(t, n) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !n) {
                var i = this._uiHash();
                if (this._trigger("drag", t, i) === !1) return this._mouseUp({}), !1;
                this.position = i.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var n = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
            for (var i = this.element[0], r = !1; i && (i = i.parentNode);) i == document && (r = !0);
            if (!r && "original" === this.options.helper) return !1;
            if ("invalid" == this.options.revert && !n || "valid" == this.options.revert && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                var o = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    o._trigger("stop", t) !== !1 && o._clear()
                })
            } else this._trigger("stop", t) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function(t) {
            return e("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            var n = this.options.handle && e(this.options.handle, this.element).length ? !1 : !0;
            return e(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == t.target && (n = !0)
            }), n
        },
        _createHelper: function(t) {
            var n = this.options,
                i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : "clone" == n.helper ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo("parent" == n.appendTo ? this.element[0].parentNode : n.appendTo), i[0] == this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t = this.options;
            if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = ["document" == t.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == t.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == t.containment ? 0 : e(window).scrollLeft()) + e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == t.containment ? 0 : e(window).scrollTop()) + (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(t.containment) || t.containment.constructor == Array) t.containment.constructor == Array && (this.containment = t.containment);
            else {
                var n = e(t.containment),
                    i = n[0];
                if (!i) return;
                var r = (n.offset(), "hidden" != e(i).css("overflow"));
                this.containment = [(parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0), (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0), (r ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (r ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
            }
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var i = "absolute" == t ? 1 : -1,
                r = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i
            }
        },
        _generatePosition: function(t) {
            var n = this.options,
                i = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                r = /(html|body)/i.test(i[0].tagName),
                o = t.pageX,
                a = t.pageY;
            if (this.originalPosition) {
                var s;
                if (this.containment) {
                    if (this.relative_container) {
                        var l = this.relative_container.offset();
                        s = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                    } else s = this.containment;
                    t.pageX - this.offset.click.left < s[0] && (o = s[0] + this.offset.click.left), t.pageY - this.offset.click.top < s[1] && (a = s[1] + this.offset.click.top), t.pageX - this.offset.click.left > s[2] && (o = s[2] + this.offset.click.left), t.pageY - this.offset.click.top > s[3] && (a = s[3] + this.offset.click.top)
                }
                if (n.grid) {
                    var c = n.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
                    a = s && (c - this.offset.click.top < s[1] || c - this.offset.click.top > s[3]) ? c - this.offset.click.top < s[1] ? c + n.grid[1] : c - n.grid[1] : c;
                    var u = n.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
                    o = s && (u - this.offset.click.left < s[0] || u - this.offset.click.left > s[2]) ? u - this.offset.click.left < s[0] ? u + n.grid[0] : u - n.grid[0] : u
                }
            }
            return {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : i.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : i.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(t, n, i) {
            return i = i || this._uiHash(), e.ui.plugin.call(this, t, [n, i]), "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, i)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, n) {
            var i = e(this).data("draggable"),
                r = i.options,
                o = e.extend({}, n, {
                    item: i.element
                });
            i.sortables = [], e(r.connectToSortable).each(function() {
                var n = e.data(this, "sortable");
                n && !n.options.disabled && (i.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n.refreshPositions(), n._trigger("activate", t, o))
            })
        },
        stop: function(t, n) {
            var i = e(this).data("draggable"),
                r = e.extend({}, n, {
                    item: i.element
                });
            e.each(i.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, i.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" == i.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, r))
            })
        },
        drag: function(t, n) {
            var i = e(this).data("draggable"),
                r = this;
            e.each(i.sortables, function() {
                var o = !1,
                    a = this;
                this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, this.instance.offset.click = i.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, e.each(i.sortables, function() {
                    return this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, this.instance.offset.click = i.offset.click, this != a && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(a.instance.element[0], this.instance.element[0]) && (o = !1), o
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(r).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = i.offset.click.top, this.instance.offset.click.left = i.offset.click.left, this.instance.offset.parent.left -= i.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= i.offset.parent.top - this.instance.offset.parent.top, i._trigger("toSortable", t), i.dropped = this.instance.element, i.currentItem = i.element, this.instance.fromOutside = i), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), i._trigger("fromSortable", t), i.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var t = e("body"),
                n = e(this).data("draggable").options;
            t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor)
        },
        stop: function() {
            var t = e(this).data("draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, n) {
            var i = e(n.helper),
                r = e(this).data("draggable").options;
            i.css("opacity") && (r._opacity = i.css("opacity")), i.css("opacity", r.opacity)
        },
        stop: function(t, n) {
            var i = e(this).data("draggable").options;
            i._opacity && e(n.helper).css("opacity", i._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var t = e(this).data("draggable");
            t.scrollParent[0] != document && "HTML" != t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function(t) {
            var n = e(this).data("draggable"),
                i = n.options,
                r = !1;
            n.scrollParent[0] != document && "HTML" != n.scrollParent[0].tagName ? (i.axis && "x" == i.axis || (n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? n.scrollParent[0].scrollTop = r = n.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - n.overflowOffset.top < i.scrollSensitivity && (n.scrollParent[0].scrollTop = r = n.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && "y" == i.axis || (n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? n.scrollParent[0].scrollLeft = r = n.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - n.overflowOffset.left < i.scrollSensitivity && (n.scrollParent[0].scrollLeft = r = n.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" == i.axis || (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed))), i.axis && "y" == i.axis || (t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed)))), r !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function() {
            var t = e(this).data("draggable"),
                n = t.options;
            t.snapElements = [], e(n.snap.constructor != String ? n.snap.items || ":data(draggable)" : n.snap).each(function() {
                var n = e(this),
                    i = n.offset();
                this != t.element[0] && t.snapElements.push({
                    item: this,
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, n) {
            for (var i = e(this).data("draggable"), r = i.options, o = r.snapTolerance, a = n.offset.left, s = a + i.helperProportions.width, l = n.offset.top, c = l + i.helperProportions.height, u = i.snapElements.length - 1; u >= 0; u--) {
                var d = i.snapElements[u].left,
                    h = d + i.snapElements[u].width,
                    p = i.snapElements[u].top,
                    f = p + i.snapElements[u].height;
                if (a > d - o && h + o > a && l > p - o && f + o > l || a > d - o && h + o > a && c > p - o && f + o > c || s > d - o && h + o > s && l > p - o && f + o > l || s > d - o && h + o > s && c > p - o && f + o > c) {
                    if ("inner" != r.snapMode) {
                        var g = Math.abs(p - c) <= o,
                            m = Math.abs(f - l) <= o,
                            v = Math.abs(d - s) <= o,
                            b = Math.abs(h - a) <= o;
                        g && (n.position.top = i._convertPositionTo("relative", {
                                top: p - i.helperProportions.height,
                                left: 0
                            }).top - i.margins.top), m && (n.position.top = i._convertPositionTo("relative", {
                                top: f,
                                left: 0
                            }).top - i.margins.top), v && (n.position.left = i._convertPositionTo("relative", {
                                top: 0,
                                left: d - i.helperProportions.width
                            }).left - i.margins.left), b && (n.position.left = i._convertPositionTo("relative", {
                                top: 0,
                                left: h
                            }).left - i.margins.left)
                    }
                    var y = g || m || v || b;
                    if ("outer" != r.snapMode) {
                        var g = Math.abs(p - l) <= o,
                            m = Math.abs(f - c) <= o,
                            v = Math.abs(d - a) <= o,
                            b = Math.abs(h - s) <= o;
                        g && (n.position.top = i._convertPositionTo("relative", {
                                top: p,
                                left: 0
                            }).top - i.margins.top), m && (n.position.top = i._convertPositionTo("relative", {
                                top: f - i.helperProportions.height,
                                left: 0
                            }).top - i.margins.top), v && (n.position.left = i._convertPositionTo("relative", {
                                top: 0,
                                left: d
                            }).left - i.margins.left), b && (n.position.left = i._convertPositionTo("relative", {
                                top: 0,
                                left: h - i.helperProportions.width
                            }).left - i.margins.left)
                    }!i.snapElements[u].snapping && (g || m || v || b || y) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, e.extend(i._uiHash(), {
                        snapItem: i.snapElements[u].item
                    })), i.snapElements[u].snapping = g || m || v || b || y
                } else i.snapElements[u].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, e.extend(i._uiHash(), {
                    snapItem: i.snapElements[u].item
                })), i.snapElements[u].snapping = !1
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function() {
            var t = e(this).data("draggable").options,
                n = e.makeArray(e(t.stack)).sort(function(t, n) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                });
            if (n.length) {
                var i = parseInt(n[0].style.zIndex) || 0;
                e(n).each(function(e) {
                    this.style.zIndex = i + e
                }), this[0].style.zIndex = i + n.length
            }
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, n) {
            var i = e(n.helper),
                r = e(this).data("draggable").options;
            i.css("zIndex") && (r._zIndex = i.css("zIndex")), i.css("zIndex", r.zIndex)
        },
        stop: function(t, n) {
            var i = e(this).data("draggable").options;
            i._zIndex && e(n.helper).css("zIndex", i._zIndex)
        }
    })
}(jQuery), function(e) {
    e.widget("ui.droppable", {
        version: "1.9.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var t = this.options,
                n = t.accept;
            this.isover = 0, this.isout = 1, this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var t = e.ui.ddmanager.droppables[this.options.scope], n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, n) {
            "accept" == t && (this.accept = e.isFunction(n) ? n : function(e) {
                return e.is(n)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
        },
        _deactivate: function(t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
        },
        _over: function(t) {
            var n = e.ui.ddmanager.current;
            n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
        },
        _out: function(t) {
            var n = e.ui.ddmanager.current;
            n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
        },
        _drop: function(t, n) {
            var i = n || e.ui.ddmanager.current;
            if (!i || (i.currentItem || i.element)[0] == this.element[0]) return !1;
            var r = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var t = e.data(this, "droppable");
                return t.options.greedy && !t.options.disabled && t.options.scope == i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && e.ui.intersect(i, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance) ? (r = !0, !1) : void 0
            }), r ? !1 : this.accept.call(this.element[0], i.currentItem || i.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(i)), this.element) : !1
        },
        ui: function(e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function(t, n, i) {
        if (!n.offset) return !1;
        var r = (t.positionAbs || t.position.absolute).left,
            o = r + t.helperProportions.width,
            a = (t.positionAbs || t.position.absolute).top,
            s = a + t.helperProportions.height,
            l = n.offset.left,
            c = l + n.proportions.width,
            u = n.offset.top,
            d = u + n.proportions.height;
        switch (i) {
            case "fit":
                return r >= l && c >= o && a >= u && d >= s;
            case "intersect":
                return l < r + t.helperProportions.width / 2 && o - t.helperProportions.width / 2 < c && u < a + t.helperProportions.height / 2 && s - t.helperProportions.height / 2 < d;
            case "pointer":
                var h = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
                    p = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
                    f = e.ui.isOver(p, h, u, l, n.proportions.height, n.proportions.width);
                return f;
            case "touch":
                return (a >= u && d >= a || s >= u && d >= s || u > a && s > d) && (r >= l && c >= r || o >= l && c >= o || l > r && o > c);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, n) {
            var i = e.ui.ddmanager.droppables[t.options.scope] || [],
                r = n ? n.type : null,
                o = (t.currentItem || t.element).find(":data(droppable)").andSelf();
            e: for (var a = 0; a < i.length; a++) if (!(i[a].options.disabled || t && !i[a].accept.call(i[a].element[0], t.currentItem || t.element))) {
                for (var s = 0; s < o.length; s++) if (o[s] == i[a].element[0]) {
                    i[a].proportions.height = 0;
                    continue e
                }
                i[a].visible = "none" != i[a].element.css("display"), i[a].visible && ("mousedown" == r && i[a]._activate.call(i[a], n), i[a].offset = i[a].element.offset(), i[a].proportions = {
                    width: i[a].element[0].offsetWidth,
                    height: i[a].element[0].offsetHeight
                })
            }
        },
        drop: function(t, n) {
            var i = !1;
            return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (i = this._drop.call(this, n) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n)))
            }), i
        },
        dragStart: function(t, n) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
            })
        },
        drag: function(t, n) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var i = e.ui.intersect(t, this, this.options.tolerance),
                        r = i || 1 != this.isover ? i && 0 == this.isover ? "isover" : null : "isout";
                    if (r) {
                        var o;
                        if (this.options.greedy) {
                            var a = this.options.scope,
                                s = this.element.parents(":data(droppable)").filter(function() {
                                    return e.data(this, "droppable").options.scope === a
                                });
                            s.length && (o = e.data(s[0], "droppable"), o.greedyChild = "isover" == r ? 1 : 0)
                        }
                        o && "isover" == r && (o.isover = 0, o.isout = 1, o._out.call(o, n)), this[r] = 1, this["isout" == r ? "isover" : "isout"] = 0, this["isover" == r ? "_over" : "_out"].call(this, n), o && "isout" == r && (o.isout = 0, o.isover = 1, o._over.call(o, n))
                    }
                }
            })
        },
        dragStop: function(t, n) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
        }
    }
}(jQuery), function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e, t) {
    var n = 0,
        i = Array.prototype.slice,
        r = e.cleanData;
    e.cleanData = function(t) {
        for (var n, i = 0; null != (n = t[i]); i++) try {
            e(n).triggerHandler("remove")
        } catch (o) {}
        r(t)
    }, e.widget = function(t, n, i) {
        var r, o, a, s, l = {},
            c = t.split(".")[0];
        t = t.split(".")[1], r = c + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][r.toLowerCase()] = function(t) {
            return !!e.data(t, r)
        }, e[c] = e[c] || {}, o = e[c][t], a = e[c][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
        }, e.extend(a, o, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
        }), s = new n, s.options = e.widget.extend({}, s.options), e.each(i, function(t, i) {
            return e.isFunction(i) ? void(l[t] = function() {
                var e = function() {
                        return n.prototype[t].apply(this, arguments)
                    },
                    r = function(e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function() {
                    var t, n = this._super,
                        o = this._superApply;
                    return this._super = e, this._superApply = r, t = i.apply(this, arguments), this._super = n, this._superApply = o, t
                }
            }()) : void(l[t] = i)
        }), a.prototype = e.widget.extend(s, {
            widgetEventPrefix: o ? s.widgetEventPrefix : t
        }, l, {
            constructor: a,
            namespace: c,
            widgetName: t,
            widgetFullName: r
        }), o ? (e.each(o._childConstructors, function(t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, a, n._proto)
        }), delete o._childConstructors) : n._childConstructors.push(a), e.widget.bridge(t, a)
    }, e.widget.extend = function(n) {
        for (var r, o, a = i.call(arguments, 1), s = 0, l = a.length; l > s; s++) for (r in a[s]) o = a[s][r], a[s].hasOwnProperty(r) && o !== t && (n[r] = e.isPlainObject(o) ? e.isPlainObject(n[r]) ? e.widget.extend({}, n[r], o) : e.widget.extend({}, o) : o);
        return n
    }, e.widget.bridge = function(n, r) {
        var o = r.prototype.widgetFullName || n;
        e.fn[n] = function(a) {
            var s = "string" == typeof a,
                l = i.call(arguments, 1),
                c = this;
            return a = !s && l.length ? e.widget.extend.apply(null, [a].concat(l)) : a, this.each(s ?
                function() {
                    var i, r = e.data(this, o);
                    return r ? e.isFunction(r[a]) && "_" !== a.charAt(0) ? (i = r[a].apply(r, l), i !== r && i !== t ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + a + "'")
                } : function() {
                var t = e.data(this, o);
                t ? t.option(a || {})._init() : e.data(this, o, new r(a, this))
            }), c
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(n, i) {
            var r, o, a, s = n;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof n) if (s = {}, r = n.split("."), n = r.shift(), r.length) {
                for (o = s[n] = e.widget.extend({}, this.options[n]), a = 0; a < r.length - 1; a++) o[r[a]] = o[r[a]] || {}, o = o[r[a]];
                if (n = r.pop(), i === t) return o[n] === t ? null : o[n];
                o[n] = i
            } else {
                if (i === t) return this.options[n] === t ? null : this.options[n];
                s[n] = i
            }
            return this._setOptions(s), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(t, n, i) {
            var r, o = this;
            "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), e.each(i, function(i, a) {
                function s() {
                    return t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || e.guid++);
                var l = i.match(/^(\w+)\s*(.*)$/),
                    c = l[1] + o.eventNamespace,
                    u = l[2];
                u ? r.delegate(u, c, s) : n.bind(c, s)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, i) {
            var r, o, a = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent) for (r in o) r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(e.isFunction(a) && a.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(i, r, o) {
            "string" == typeof r && (r = {
                effect: r
            });
            var a, s = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
            r = r || {}, "number" == typeof r && (r = {
                duration: r
            }), a = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), a && e.effects && e.effects.effect[s] ? i[t](r) : s !== t && i[s] ? i[s](r.duration, r.easing, o) : i.queue(function(n) {
                e(this)[t](), o && o.call(i[0]), n()
            })
        }
    })
}), function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(window.jQuery)
}(function(e) {
    "use strict";
    var t = 0;
    e.ajaxTransport("iframe", function(n) {
        if (n.async) {
            var i, r, o;
            return {
                send: function(a, s) {
                    i = e('<form style="display:none;"></form>'), i.attr("accept-charset", n.formAcceptCharset), o = /\?/.test(n.url) ? "&" : "?", "DELETE" === n.type ? (n.url = n.url + o + "_method=DELETE", n.type = "POST") : "PUT" === n.type ? (n.url = n.url + o + "_method=PUT", n.type = "POST") : "PATCH" === n.type && (n.url = n.url + o + "_method=PATCH", n.type = "POST"), r = e('<iframe src="javascript:false;" name="iframe-transport-' + (t += 1) + '"></iframe>').bind("load", function() {
                        var t, o = e.isArray(n.paramName) ? n.paramName : [n.paramName];
                        r.unbind("load").bind("load", function() {
                            var t;
                            try {
                                if (t = r.contents(), !t.length || !t[0].firstChild) throw new Error
                            } catch (n) {
                                t = void 0
                            }
                            s(200, "success", {
                                iframe: t
                            }), e('<iframe src="javascript:false;"></iframe>').appendTo(i), i.remove()
                        }), i.prop("target", r.prop("name")).prop("action", n.url).prop("method", n.type), n.formData && e.each(n.formData, function(t, n) {
                            e('<input type="hidden"/>').prop("name", n.name).val(n.value).appendTo(i)
                        }), n.fileInput && n.fileInput.length && "POST" === n.type && (t = n.fileInput.clone(), n.fileInput.after(function(e) {
                            return t[e]
                        }), n.paramName && n.fileInput.each(function(t) {
                            e(this).prop("name", o[t] || n.paramName)
                        }), i.append(n.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data")), i.submit(), t && t.length && n.fileInput.each(function(n, i) {
                            var r = e(t[n]);
                            e(i).prop("name", r.prop("name")), r.replaceWith(i)
                        })
                    }), i.append(r).appendTo(document.body)
                },
                abort: function() {
                    r && r.unbind("load").prop("src", "javascript".concat(":false;")), i && i.remove()
                }
            }
        }
    }), e.ajaxSetup({
        converters: {
            "iframe text": function(t) {
                return t && e(t[0].body).text()
            },
            "iframe json": function(t) {
                return t && e.parseJSON(e(t[0].body).text())
            },
            "iframe html": function(t) {
                return t && e(t[0].body).html()
            },
            "iframe script": function(t) {
                return t && e.globalEval(e(t[0].body).text())
            }
        }
    })
}), function() {
    this.JST || (this.JST = {}), this.JST["kalamu/image_modal"] = function() {
        var e = '<div id="kalamu-image-modal" class="modal kalamu-image-modal hide fade" tabindex="-1" aria-hidden="true" data-keyboard="false"> <div class="modal-header"> <h3>' + (I18n.t("kalamu.insert_image") || "").toString().encodeHTML() + '</h3> </div> <div class="modal-body"> <div class="tab-btn"> <a class="btn-link" href="#image-upload" data-toggle="tab">' + (I18n.t("kalamu.local_image") || "").toString().encodeHTML() + "</a> " + (I18n.t("kalamu.or") || "").toString().encodeHTML() + ' <a class="btn-link" href="#image-external" data-toggle="tab">' + (I18n.t("kalamu.internet_image") || "").toString().encodeHTML() + '</a> </div> <div class="tab-content"> <div class="tab-pane clearfix active" id="image-upload"> <a href="#" class="upload-picture"> <label for="kalamu-upload-image"><i class="fa picture-o"></i> ' + (I18n.t("kalamu.select_image") || "").toString().encodeHTML() + '</label> <input id="kalamu-upload-image" class="btn-upload-link" type="file" name="file" accept="image/*">' + (I18n.t("kalamu.select_image") || "").toString().encodeHTML() + ' </a> <button class="btn-link" data-dismiss="modal" aria-hidden="true">' + (I18n.t("kalamu.cancel") || "").toString().encodeHTML() + '</button> </div> <div class="tab-pane clearfix" id="image-external"> <div class="input-prepend"> <span class="add-on"><i class="fa fa-link"></i></span> <input class="span2" id="email" name="email" placeholder="' + (I18n.t("kalamu.image_url") || "").toString().encodeHTML() + '" type="text"> </div> <button class="btn-link" name="ok">' + (I18n.t("kalamu.ok") || "").toString().encodeHTML() + '</button> <button class="btn-link" data-dismiss="modal" aria-hidden="true">' + (I18n.t("kalamu.cancel") || "").toString().encodeHTML() + '</button> </div> <p><a href="http://www.jianshu.com/p/c903745c1322" target="_blank"><i class="fa fa-question-circle"></i></a> ' + (I18n.t("kalamu.image_privacy") || "").toString().encodeHTML() + '</p> <span class="message-text" style="display: none">' + (I18n.t("kalamu.processing") || "").toString().encodeHTML() + '</span> <img src="' + Maleskine.CommonImages.loader("tiny") + '" class="lodaer loader-tiny" style="display: none" /> </div> </div></div>';
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["kalamu/img_error_modal"] = function() {
        var e = '<div id="img-error-modal" tabindex="-1" class="modal hide img-error-modal" aria-hidden="false"> <a class="close" data-dismiss="modal" aria-hidden="true">\xd7</a> <div class="error-img error-size"> <h4>\u6709<span class="number"></span>\u5f20\u56fe\u7247\u5927\u5c0f\u8d85\u51fa\u9650\u5236\uff1a</h4> <p>android_icon.png</p> <p>APPSTORE\u65b0\u7248\u5ba3\u4f20\u56fe.png</p> </div> <div class="error-info error-info-size"> <p>\u56fe\u7247\u5927\u5c0f\u4e0d\u5f97\u8d85\u8fc7' + (Maleskine.Settings.uploadImageSizeLimit / 1e6 || "").toString().encodeHTML() + 'MB\u3002</p> </div> <div class="error-img line"> <p></p> </div> <div class="error-info seperator"> <p><br></p> </div> <div class="error-img error-format"> <h4>\u6709<span class="number"></span>\u5f20\u56fe\u7247\u683c\u5f0f\u4e0d\u6b63\u786e\uff1a</h4> <p>android_icon.pdf</p> <p>img_wifi_off.tif</p> <p>APPSTORE\u65b0\u7248\u5ba3\u4f20\u56fe.tif</p> </div> <div class="error-info error-info-format"> <p>\u53ef\u7528\u56fe\u7247\u683c\u5f0f\uff1ajpg\uff0cjpeg\uff0cpng\uff0cgif\u3002</p> <p>\u53ef\u7528\u56fe\u7247\u5927\u5c0f\uff1a\u4e0d\u8d85\u8fc75M\u3002</p> </div></div>';
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["kalamu/video_modal"] = function() {
        var e = '<div id="kalamu-video-modal" class="modal kalamu-video-modal hide fade" tabindex="-1" aria-hidden="true" data-keyboard="false"> <div class="modal-header"> <h3>' + (I18n.t("kalamu.insert_video") || "").toString().encodeHTML() + "</h3> <!-- <span>" + (I18n.t("kalamu.video_source_support_start") || "").toString().encodeHTML() + '<a href="http://www.youku.com/" target="_blank">' + (I18n.t("kalamu.video_source_support_yk") || "").toString().encodeHTML() + '</a>\u3001<a href="http://www.tudou.com/" target="_blank">' + (I18n.t("kalamu.video_source_support_td") || "").toString().encodeHTML() + '</a>\u3001<a href="http://v.qq.com/" target="_blank">' + (I18n.t("kalamu.video_source_support_tx") || "").toString().encodeHTML() + '</a>\u3001<a href="http://www.acfun.tv/" target="_blank">' + (I18n.t("kalamu.video_source_support_acfun") || "").toString().encodeHTML() + "</a>" + (I18n.t("kalamu.video_source_support_and") || "").toString().encodeHTML() + '<a href="http://vww.bilibili.com/" target="_blank">' + (I18n.t("kalamu.video_source_support_bilibili") || "").toString().encodeHTML() + "</a>\u3002</span> --> <span>" + (I18n.t("kalamu.video_source_support_start") || "").toString().encodeHTML() + '<a href="http://www.youku.com/" target="_blank">' + (I18n.t("kalamu.video_source_support_yk") || "").toString().encodeHTML() + '</a>\u3001<a href="http://www.tudou.com/" target="_blank">' + (I18n.t("kalamu.video_source_support_td") || "").toString().encodeHTML() + '</a>\u3001<a href="http://v.qq.com/" target="_blank">' + (I18n.t("kalamu.video_source_support_tx") || "").toString().encodeHTML() + '</a>\u3002</span> </div> <div class="modal-body"> <div class="input-prepend"> <span class="add-on"><i class="fa fa-link"></i></span> <input class="span2" name="url-input" placeholder="' + (I18n.t("kalamu.video_url") || "").toString().encodeHTML() + '" type="text"> </div> <span class="message-text" style="display: none"></span> <button class="btn-link" name="ok">' + (I18n.t("kalamu.ok") || "").toString().encodeHTML() + '</button> <button class="btn-link" data-dismiss="modal" aria-hidden="true">' + (I18n.t("kalamu.cancel") || "").toString().encodeHTML() + "</button> </div></div>";
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["kalamu/link_modal"] = function() {
        var e = '<div id="kalamu-link-modal" class="modal kalamu-link-modal hide fade" tabindex="-1" aria-hidden="true"> <div class="modal-header"> <h3>' + (I18n.t("kalamu.insert_link") || "").toString().encodeHTML() + '</h3> </div> <div class="modal-body"> <div class="input-prepend"> <span class="add-on"><i class="fa fa-link"></i></span> <input class="span2" name="href-input" placeholder="' + (I18n.t("kalamu.link_url") || "").toString().encodeHTML() + '" type="text"> </div> <div class="input-prepend"> <span class="add-on"><i class="fa fa-font"></i></span> <input class="span2" name="text-input" placeholder="' + (I18n.t("kalamu.link_text") || "").toString().encodeHTML() + '" type="text"> </div> <span class="message-text" style="display: none"></span> <button class="btn-link" name="ok">' + (I18n.t("kalamu.ok") || "").toString().encodeHTML() + '</button> <button class="btn-link" data-dismiss="modal" aria-hidden="true">' + (I18n.t("kalamu.cancel") || "").toString().encodeHTML() + "</button> </div></div>";
        return e
    }
}.call(this), function() {
    !
        function() {
            return $.fn.kalamu = function(e) {
                var t, n;
                return null == e && (e = {}), t = $(this), n = new Kalamu.Editor(this, e), t.data("kalamu", n), n
            }
        }()
}.call(this), function() {
    window.Kalamu = {}
}.call(this), function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Kalamu.Helper = function() {
        function t() {
            this.getContents = e(this.getContents, this), this.scrollToRange = e(this.scrollToRange, this), this.removeSurroundBlockTag = e(this.removeSurroundBlockTag, this), this.surroundBlockTag = e(this.surroundBlockTag, this), this.toggleBlockTag = e(this.toggleBlockTag, this), this.detectHasSurrounded = e(this.detectHasSurrounded, this), this.isAtEmptyEditor = e(this.isAtEmptyEditor, this), this.getSelectedNodes = e(this.getSelectedNodes, this), this.getCurrentParagraph = e(this.getCurrentParagraph, this), this.getParentParagraph = e(this.getParentParagraph, this), this.getCurrentContainer = e(this.getCurrentContainer, this), this.isImageBox = e(this.isImageBox, this), this.isContainer = e(this.isContainer, this), this.supportedCommand = e(this.supportedCommand, this), this.getRange = e(this.getRange, this), this.removeSurroundedTag = e(this.removeSurroundedTag, this), this.convertToParagraph = e(this.convertToParagraph, this), this.surroundContents = e(this.surroundContents, this), this.isInlineTag = e(this.isInlineTag, this), this.surroundParagraphNodes = e(this.surroundParagraphNodes, this), this.findNewRange = e(this.findNewRange, this), this.isSurroundBy = e(this.isSurroundBy, this)
        }
        return t.prototype.isEditor = function(e) {
            return e.hasClass("kalamu-area")
        }, t.prototype.supportCompareNode = function() {
            return "undefined" != typeof Node && Node.prototype.isEqualNode
        }, t.prototype.getCaretPosition = function(e) {
            var t, n;
            return t = 0, document.selection ? (e.focus(), n = document.selection.createRange(), n.moveStart("character", -e.value.length), t = n.text.length) : (e.selectionStart || "0" === e.selectionStart) && (t = e.selectionStart), t
        }, t.prototype.isSurroundBy = function(e, t) {
            var n, i;
            return i = $(e.commonAncestorContainer.parentElement || e.commonAncestorContainer.parentNode), n = $(e.commonAncestorContainer), n.is(t) ? n : i.is(t) ? i : !1
        }, t.prototype.findNewRange = function(e, t) {
            var n, i, r, o;
            return null == t ? t : (o = t[0], r = t[1], i = this.composer.editor.selection.getStartNodeFromNodes(e, o), n = this.composer.editor.selection.getEndNodeFromNodes(e, r), [i, n])
        }, t.prototype.surroundParagraphNodes = function(e, t) {
            var n, i, r, o, a;
            for (n = $("<" + t + ">"), i = r = 0, o = e.length; o > r; i = ++r) a = e[i], n.append(a);
            return n
        }, t.prototype.isInlineTag = function(e) {
            return 3 === e[0].nodeType ? !0 : e.is("B") ? !0 : e.is("I") ? !0 : e.is("U") ? !0 : e.is("STRIKE") ? !0 : e.is("A") ? !0 : e.is("BR") ? !0 : e.is("SPAN") ? !0 : !1
        }, t.prototype.surroundContents = function(e, t, n, i) {
            var r, o, a, s, l, c, u, d, h, p, f, g, m;
            for (n = n.toUpperCase(), o = [], h = $("<div>"), g = this.newPlaceHolder(), $(t[0]).before(g), f = [], l = [], c = 0, d = t.length; d > c; c++) p = t[c], p = $(p), s = $("<div>"), a = p.clone(!1, !0), p.contents().length > 0 && (!p.is("P") || "PRE" !== n && "BLOCKQUOTE" !== n ? p.is("P") ? (s.append(a), r = a.contents(), o = [], l = [], r.map(function(e) {
                return function(t) {
                    var n;
                    return n = r[t], n.classList && n.className && n.className.length > 0 && (o[t] = n.className, n.className = ""), l[t] = e.isInlineTag($(n))
                }
            }(this)), r.unwrap().wrap("<" + n + "></" + n + ">"), r = s.contents(), r.map(function() {
                return function(e) {
                    var t, n;
                    return t = r[e], l[e] ? (t = $(t), e > 0 ? (n = t.contents(), o[e] && o[e].length > 0 && (n[0].className = o[e]), $(r[e - 1]).append(n), r[e] = r[e - 1], t.remove()) : o[e] && o[e].length > 0 ? o[e].match(/placeholder/i) ? t.find("span").addClass(o[e]) : t.className = o[e] : void 0) : (o[e] && o[e].length > 0 && (t.className = o[e]), l[e] = $(t))
                }
            }(this)), l = null) : (f.length > 0 && (s.append(this.surroundParagraphNodes(f, n)), f = []), s.append(a)) : (f.push(a), u = null), h.append(s.contents())), p.remove();
            return f.length > 0 && (h.append(this.surroundParagraphNodes(f, n)), f = []), m = this.supportCompareNode() ? this.findNewRange(h[0], i) : [h.contents()[0], h.contents()[h.contents().length - 1]], g.nextElementSibling || $(g).after($("<p><br></p>")), $(g).replaceWith(h.contents()), m
        }, t.prototype.convertToParagraph = function(e) {
            var t, n, i, r, o;
            return i = $("<div>"), i.append(e), n = [], t = e.contents(), t.map(function() {
                return function(i) {
                    return e = t[i], e && e.className && e.className.length > 0 ? (n[i] = e.className, e.className = "") : void 0
                }
            }(this)), t.unwrap(), t = i.contents(), o = null, r = !1, t.map(function(i) {
                return function(a) {
                    return e = t[a], n[a] && n[a].length > 0 && (e.className = n[a]), !r && i.isInlineTag($(e)) && (r = !0), 3 === e.nodeType ? null === o ? o = e : (o.textContent += e.textContent, $(e).remove()) : o = null
                }
            }(this)), t = i.contents(), r ? $("<p>").append(t) : t
        }, t.prototype.removeSurroundedTag = function(e, t, n) {
            var i, r, o, a, s, l, c;
            for (l = this.newPlaceHolder(), $(e[0]).before(l), a = $("<div>"), r = 0, o = e.length; o > r; r++) s = e[r], s = $(s), i = s.clone(!1, !0), a.append(t ? i.is(t) ? this.convertToParagraph(i) : i : !i.is("P") && this.isContainer(i) ? this.convertToParagraph(i) : i), s.remove();
            return c = this.supportCompareNode() ? this.findNewRange(a[0], n) : [a.contents()[0], a.contents()[a.contents().length - 1]], $(l).replaceWith(a.contents()), c
        }, t.prototype.getRange = function() {
            var e;
            return 0 === (e = this.selection.getRange(this.editorElem)) ? null : e
        }, t.prototype.supportedCommand = function(e) {
            var t;
            return t = function() {
                try {
                    return document.queryCommandSupported(e) ? !0 : !1
                } catch (t) {
                    return !1
                }
            }()
        }, t.prototype.isContainer = function(e) {
            var t, n, i, r;
            for (e = $(e), i = ["P", "BLOCKQUOTE", "PRE", "H1", "H2", "H3", "H4", "HR"], t = 0, n = i.length; n > t; t++) if (r = i[t], e.is(r)) return !0;
            return !1
        }, t.prototype.isImageBox = function(e) {
            return e = $(e), e.is("div") && (e.hasClass("image-package") || e.hasClass("video-package"))
        }, t.prototype.getCurrentContainer = function(e, t) {
            var n;
            for (null == e && (e = this.getRange()), null == t && (t = !0), n = e.commonAncestorContainer; !(t && this.isImageBox(n) || this.isContainer(n)) || n.parentNode !== this.editorElem[0];) if (n = n.parentNode, !n) return null;
            return n
        }, t.prototype.getParentParagraph = function(e) {
            for (; e && !$(e).is("p");) e = e.parentNode;
            return e
        }, t.prototype.getCurrentParagraph = function(e) {
            return null == e && (e = this.getRange()), this.getParentParagraph(e.commonAncestorContainer)
        }, t.prototype.getSelectedNodes = function(e) {
            var t;
            return t = e.getNodes([1], function(e) {
                return function(t) {
                    return t.parentNode && t.parentNode === e.editorElem[0]
                }
            }(this)), t && t.length > 0 ? t : (t = this.getCurrentContainer(e, !1), t ? [t] : null)
        }, t.prototype.isAtEmptyEditor = function(e) {
            var t;
            return t = e.commonAncestorContainer, t !== this.editorElem[0] ? !1 : 0 === t.childNodes.length ? !0 : !1
        }, t.prototype.detectHasSurrounded = function(e, t) {
            var n, i, r;
            for (n = 0, i = e.length; i > n; n++) if (r = e[n], this.isContainer(r) && !$(r).is(t)) return !1;
            return !0
        }, t.prototype.toggleBlockTag = function(e, t) {
            var n, i, r;
            return null == t && (t = this.getRange()), t ? (e = e.toUpperCase(), i = this.getSelectedNodes(t), null === i && this.isAtEmptyEditor(t) ? (n = $("<" + e + "></" + e + ">"), r = n, "BLOCKQUOTE" === e ? (r = $("<p><br></p>"), n.append(r)) : n.append($("<br>")), this.editorElem.append(n), t.setStart(r[0], 0), t.setEnd(r[0], 0), this.selection.applyRange(t)) : this.detectHasSurrounded(i, e) ? this.removeSurroundBlockTag(i, e, t) : this.surroundBlockTag(i, e, t)) : void 0
        }, t.prototype.surroundBlockTag = function(e, t, n) {
            return this.removeSurroundBlockTag(e, null, n), (n = this.getRange()) ? (e = this.getSelectedNodes(n), n.collapsed ? this.selection.executeAndRestore(function(i) {
                return function() {
                    return i.surroundContents(n, e, t)
                }
            }(this)) : this.selection.executeAndRestoreSimple(function(i) {
                return function(r, o) {
                    return i.surroundContents(n, e, t, [r, o])
                }
            }(this))) : void 0
        }, t.prototype.removeSurroundBlockTag = function(e, t, n) {
            var i;
            if (n) return i = $(document.createTextNode("PLACEHOLDER")), $(e[e.length - 1]).after(i), n.collapsed ? this.selection.executeAndRestore(function(n) {
                return function() {
                    return n.removeSurroundedTag(e, t)
                }
            }(this)) : this.selection.executeAndRestoreSimple(function(n) {
                return function(i, r) {
                    return n.removeSurroundedTag(e, t, [i, r])
                }
            }(this)), n = this.getRange(), n.commonAncestorContainer === this.editorElem[0] && n.startContainer === n.endContainer && n.startOffset === n.endOffset && (n.selectNode(i.prev()[0]), this.selection.applyRange(n), this.scrollToRange(n)), i.remove()
        }, t.prototype.scrollToRange = function(e) {
            var t, n, i, r, o, a, s;
            return null == e && (e = this.getRange()), e && (r = e.startContainer, r.nodeType === Kalamu.Keys.NODE_TYPES.TEXT_TYPE && (r = r.parentNode), r.getBoundingClientRect && (n = e.endContainer, n.nodeType === Kalamu.Keys.NODE_TYPES.TEXT_TYPE && (n = n.parentNode), n.getBoundingClientRect)) ? (i = r.getBoundingClientRect(), o = i.top, t = i.bottom, i = n.getBoundingClientRect(), i.top < o && (o = i.top), i.bottom > t && (t = i.bottom), i = this.editorElem[0].getBoundingClientRect(), o -= i.top, t -= i.top, s = this.editorElem[0].scrollTop, a = i.height, 0 > o ? s += o : t > a && (s += t - a), this.editorElem[0].scrollTop = s) : void 0
        }, t.prototype.getContents = function(e) {
            var t, n, i, r;
            return i = [], e.html().match(/<\w+.*?>/) ? (n = e.contents(), r = "", t = !1, n.each(function(e) {
                return function(n, o) {
                    var a, s, l, c, u, d, h, p;
                    if (p = o.tagName || "#text", p = p.toLowerCase(), e.blockTags.indexOf(p) >= 0) return r.length > 0 && i.push(r), e.getContents($(o)).map(function(e) {
                        return i.push(e)
                    }), r = "", t = !0;
                    if ("br" === p || "hr" === p) return r.length > 0 && i.push(r), i.push(""), r = "", t = !0;
                    if ("#text" === p) return r += $(o).text().replace(/[\n\t]*/g, "").trim();
                    if ("img" === p) return r && i.push(r), a = o.className, r = a ? '<div class="image-package ' + a + '"><img src="' + o.src + '"><br><div class="image-caption"></div></div>' : '<div class="image-package"><img src="' + o.src + '"><br><div class="image-caption"></div></div>';
                    if ("a" === p || "b" === p || "strong" === p || "i" === p || "em" === p || "del" === p || "strike" === p) {
                        if (d = "a" === p, l = "b" === p || "strong" === p, u = "i" === p || "em" === p, c = "del" === p || "strike" === p, s = "", d ? (r = r + '<a href="' + o.href + '" target="_blank">', s = "</a>") : l ? (r += "<b>", s = "</b>") : u ? (r += "<i>", s = "</i>") : c && (r += "<del>", s = "</del>"), h = e.getContents($(o)), 1 === h.length) return r = r + h[0] + s;
                        if (h.length > 1) return h[0] = r + h[0], r = h.pop() + s, h.map(function(e) {
                            return i.push(e)
                        })
                    } else {
                        if (h = e.getContents($(o)), 1 === h.length) return r += h[0];
                        if (h.length > 1) return h[0] = r + h[0], r = h.pop(), h.map(function(e) {
                            return i.push(e)
                        })
                    }
                }
            }(this)), r.length > 0 && i.push(r), 1 === i.length && t && i.push("")) : i = e.text().split("\n").map(function(e) {
                return e.trim()
            }).filter(function(e) {
                return e.length > 0
            }), i
        }, t.prototype.blockTags = ["address", "article", "aside", "audio", "blockquote", "canvas", "dd", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "noscript", "ol", "output", "p", "pre", "section", "table", "thead", "tfoot", "tbody", "tr", "ul", "video", "li", "legend"], t.prototype.allowTags = ["blockquote", "pre", "code", "p", "div", "ul", "ol", "li", "br", "hr", "h1", "h2", "h3", "h4", "h5", "h6", "img", "a", "b", "i", "u", "del", "strike", "strong", "em"], t
    }()
}.call(this), function() {
    Kalamu.BaseController = function() {
        function e(e) {
            var t, n, i;
            this.options = e, n = this.options;
            for (t in n) i = n[t], this[t] = i;
            this.elements || (this.elements = this.constructor.elements), this.events || (this.events = this.constructor.events), this.elements && this.refreshElements(), this.events && this.delegateEvents(this.events)
        }
        return e.prototype.eventSplitter = /^(\S+)\s*(.*)$/, e.prototype.refreshElements = function() {
            var e, t, n, i;
            t = this.elements, n = [];
            for (e in t) i = t[e], n.push(this[i] = this.$(e));
            return n
        }, e.prototype.delegateEvents = function(e) {
            var t, n, i, r, o, a;
            o = [];
            for (n in e) {
                if (r = e[n], "function" == typeof r) r = function(e) {
                    return function(t) {
                        return function() {
                            return t.apply(e, arguments), !0
                        }
                    }
                }(this)(r);
                else {
                    if (!this[r]) throw new Error(r + " doesn't exist");
                    r = function(e) {
                        return function(t) {
                            return function() {
                                return e[t].apply(e, arguments), !0
                            }
                        }
                    }(this)(r)
                }
                i = n.match(this.eventSplitter), t = i[1], a = i[2], o.push("" === a ? this.el.bind(t, r) : this.el.delegate(a, t, r))
            }
            return o
        }, e.prototype.$ = function(e) {
            return $(e, this.el)
        }, e
    }()
}.call(this), function() {
    var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        t = function(e, t) {
            function i() {
                this.constructor = e
            }
            for (var r in t) n.call(t, r) && (e[r] = t[r]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        },
        n = {}.hasOwnProperty;
    Kalamu.Modal = function(n) {
        function i(t) {
            this.close = e(this.close, this), this.open = e(this.open, this), i.__super__.constructor.apply(this, arguments), this.editor = t.editor, this.el.modal({
                show: !1
            }), this.el.on("shown", function(e) {
                return function() {
                    return e.el.focus()
                }
            }(this))
        }
        var r;
        return t(i, n), i.prototype.open = function() {
            return this.el.modal("show")
        }, i.prototype.close = function() {
            return this.el.modal("hide"), this.reset()
        }, i.prototype.blockUserAction = function() {
            var e;
            return e = $('<div class="user_action_blocker"></div>'), e.css({
                position: "fixed",
                top: "0px",
                left: "0px",
                display: "block",
                width: "100%",
                height: "100%",
                "z-index": 1045,
                "background-color": "rgba(0, 0, 0, 0.1)"
            }), $(document.body).append(e), e.on("mousedown", r)
        }, i.prototype.unblockUserAction = function() {
            var e;
            return e = $(".user_action_blocker"), e.off("mousedown", r), e.remove()
        }, r = function(e) {
            return e.originalEvent.stopImmediatePropagation(), e.originalEvent.stopPropagation(), e.originalEvent.preventDefault(), e.originalEvent.cancelBubble = !0
        }, i
    }(Kalamu.BaseController)
}.call(this), function() {
    var e, t, n = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    t = {
        before: function() {},
        after: function() {},
        ready: function() {},
        success: function() {},
        fail: function() {},
        done: function() {},
        error: function() {},
        start: function() {},
        completed: function() {},
        needPreview: !0
    }, e = function() {
        function e(e) {
            var t, n;
            for (n in e) t = e[n], (null != t || t === !1) && (this[n] = t)
        }
        return e
    }(), e.prototype = t, Kalamu.UploadImage = function() {
        function t(t, i) {
            this.completed = n(this.completed, this), this.start = n(this.start, this), this.error = n(this.error, this), this.done = n(this.done, this), this.fail = n(this.fail, this), this.success = n(this.success, this), this.ready = n(this.ready, this), this.after = n(this.after, this), this.before = n(this.before, this), this.onUploadCompleted = n(this.onUploadCompleted, this), this.onUploadStart = n(this.onUploadStart, this), this.onUploadDone = n(this.onUploadDone, this), this.onUploadFail = n(this.onUploadFail, this), this.onUploadSuccess = n(this.onUploadSuccess, this), this.onUploadReady = n(this.onUploadReady, this), this.onError = n(this.onError, this), this.onAfterUploading = n(this.onAfterUploading, this), this.onBeforeUploading = n(this.onBeforeUploading, this), this.clearPreview = n(this.clearPreview, this), this.updatePreview = n(this.updatePreview, this), this.createPreview = n(this.createPreview, this), this.createUploadStatus = n(this.createUploadStatus, this), this.tasksLeft = n(this.tasksLeft, this), this.isUploading = n(this.isUploading, this), this.cancel = n(this.cancel, this), this.sendImages = n(this.sendImages, this), this.editor = t, this.options = new e(i), this.taskQueue = []
        }
        return t.prototype.sendImages = function(e) {
            return 0 !== e.length ? (this.onBeforeUploading(), e.map(function(e) {
                return function(t) {
                    var n;
                    return n = new Writer.UploadImage(t), n.isValid ? (e.onUploadReady(n), null == n.previewImage && n.needPreview ? e.onError(I18n.t("kalamu.failed")) : (e.taskQueue.push(n), 1 === e.taskQueue.length && e.onUploadStart(), n.success(function(t, n) {
                        return e.onUploadSuccess(t, n)
                    }).fail(function(t, n, i, r) {
                        return e.onUploadFail(t, n, i, r)
                    }).done(function(t) {
                        var n;
                        return e.onUploadDone(t), n = e.taskQueue.indexOf(t), 0 > n || e.taskQueue.splice(n, 1), 0 === e.taskQueue.length ? e.onUploadCompleted() : void 0
                    }).upload())) : e.onError(n.error, n.errorType, t.name || t)
                }
            }(this)), this.onAfterUploading(), this) : void 0
        }, t.prototype.cancel = function(e, t, n) {
            var i, r, o;
            if (null == e && (e = !0), null == t && (t = !0), null == n && (n = !1), n) this.taskQueue[i].cancel(!1, !1), this.taskQueue = [], this.onUploadCompleted();
            else for (i = r = o = this.taskQueue.length - 1; 0 >= o ? 0 >= r : r >= 0; i = 0 >= o ? ++r : --r) this.taskQueue[i].cancel(e, t);
            return this
        }, t.prototype.isUploading = function() {
            return 0 !== this.taskQueue.length
        }, t.prototype.tasksLeft = function() {
            return this.taskQueue.length
        }, t.prototype.createUploadStatus = function() {
            var e, t, n, i, r, o, a, s;
            return r = $('<div class="image-upload-status" contentEditable=false></div>'), i = $('<img class="preview">').appendTo(r), a = $('<div class="status-bar"></div>').appendTo(r), o = $('<img class="loader" src="' + Maleskine.Images["writer-upload-img.gif"] + '">').appendTo(a), n = $('<div class="status-area"></div>').appendTo(a), s = $('<span class="error">' + I18n.t("kalamu.image-uploading") + "</span>").appendTo(n), e = $('<a class="upload-btn-cancel" href="javascript:void(0)">' + I18n.t("kalamu.cancel") + "</a>").appendTo(n), t = $('<a class="upload-btn-retry" href="javascript:void(0)">' + I18n.t("kalamu.retry-upload-image") + "</a>").appendTo(n), r.addClass("uploading"), r.on("click", ".upload-btn-retry", function() {
                return function() {
                    var e;
                    return e = r.data("retry"), e ? (e(), r.data("retry", null)) : void 0
                }
            }(this)), r.on("click", ".upload-btn-cancel", function(e) {
                return function(t) {
                    return $(t.target).parents(".image-package").remove(), e.editor.editorElem.trigger("change:composer")
                }
            }(this)), r
        }, t.prototype.createPreview = function() {
            var e, t, n;
            return this.imagePlaceHolder || (this.imagePlaceHolder = this.editor.makePlaceHolder()), this.imagePlaceHolder ? (n = this.editor.insertImage(this.imagePlaceHolder, Maleskine.Images["writer-upload-img.gif"]), n.find(".image-caption").html(I18n.t("kalamu.processing")), n.addClass("image-uploading"), t = this.createUploadStatus(), e = $(n.find("img")[0]), n.append(t), n.updateImage = function(n) {
                return t.find(".preview").attr("src", n), e[0].onload = function() {
                    var t, n;
                    return n = e.width(), t = e.height()
                }, e.attr("src", n)
            }, n) : null
        }, t.prototype.updatePreview = function(e, t, n, i, r, o, a) {
            var s, l, c, u;
            if (e) return e.removeClass("image-uploading"), e.find(".image-upload-status").remove(), c = e.find("img"), a ? (u = a.zoomed, l = a.origin) : (u = Writer.UploadImage.getRegularizedImageURL(t, o), l = u.origin, u = u.zoomed), c.attr("src", u).attr("data-original-src", l), n && c.attr("data-image-slug", n), i && c.attr("data-width", i), r && c.attr("data-height", r), s = e.find(".image-caption"), s.text().trim() === I18n.t("kalamu.processing") ? s.html("") : void 0
        }, t.prototype.clearPreview = function(e) {
            var t, n, i;
            if (e && (i = e.previewImage)) return i.addClass("upload-failed"), t = i.find(".image-caption"), t.html(I18n.t("kalamu.failed")), n = i.find(".image-upload-status"), n.removeClass("uploading").addClass("failed"), n.data("retry", function() {
                return n.removeClass("failed").addClass("uploading"), i.removeClass("upload-failed"), t.html(I18n.t("kalamu.processing")), e.upload.call(e)
            })
        }, t.prototype.onBeforeUploading = function() {
            return this.editor.editorElem.focus(), this.imagePlaceHolder || (this.imagePlaceHolder = this.editor.makePlaceHolder()), this.imagePlaceHolder ? this.options.before() : void 0
        }, t.prototype.onAfterUploading = function() {
            return this.options.after()
        }, t.prototype.onError = function(e, t, n) {
            return 4 === t ? this.editor.imageUploadingStatus.showError(n, "size") : 3 === t && this.editor.imageUploadingStatus.showError(n, "format"), this.options.error(e)
        }, t.prototype.onUploadReady = function(e) {
            return this.options.needPreview && e.generatePreview(this.createPreview()), this.imagePlaceHolder = this.editor.makePlaceHolder(), this.imagePlaceHolder ? this.options.ready(e) : (e.destroyPreview(), this.clearPreview(e.previewImage), void(e.previewImage = null))
        }, t.prototype.onUploadSuccess = function(e, t) {
            return e.destroyPreview(), this.updatePreview(e.previewImage, t.url, t.slug, t.width, t.height, t.format, t.regularizedImageURL), this.options.success(e, t)
        }, t.prototype.onUploadFail = function(e, t, n, i) {
            var r;
            return e.previewImage && (e.destroyPreview(), this.clearPreview(e)), r = "", r = e.isURL ? 500 === t.statusCode().status ? I18n.t("kalamu.upload_internal_server_error") : JSON.parse(t.responseText).message : I18n.t("kalamu.failed"), this.options.error(r), this.options.fail(e, t, n, i)
        }, t.prototype.onUploadDone = function(e) {
            return this.options.done(e)
        }, t.prototype.onUploadStart = function() {
            return this.options.start()
        }, t.prototype.onUploadCompleted = function() {
            return this.options.completed()
        }, t.prototype.before = function(e) {
            return this.options.before = e, this
        }, t.prototype.after = function(e) {
            return this.options.after = e, this
        }, t.prototype.ready = function(e) {
            return this.options.ready = e, this
        }, t.prototype.success = function(e) {
            return this.options.success = e, this
        }, t.prototype.fail = function(e) {
            return this.options.fail = e, this
        }, t.prototype.done = function(e) {
            return this.options.done = e, this
        }, t.prototype.error = function(e) {
            return this.options.error = e, this
        }, t.prototype.start = function(e) {
            return this.options.start = e, this
        }, t.prototype.completed = function(e) {
            return this.options.completed = e, this
        }, t
    }()
}.call(this), function() {
    var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        t = function(e, t) {
            function i() {
                this.constructor = e
            }
            for (var r in t) n.call(t, r) && (e[r] = t[r]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        },
        n = {}.hasOwnProperty;
    Kalamu.ImageModal = function(n) {
        function i() {
            this.uploadEnd = e(this.uploadEnd, this), this.uploadStart = e(this.uploadStart, this), this.notification = e(this.notification, this), this.showMessage = e(this.showMessage, this), this.handleImageExternal = e(this.handleImageExternal, this), this.open = e(this.open, this), i.__super__.constructor.apply(this, arguments), this.hidden = !0, this.hasError = !1, this.el.on("hidden", function(e) {
                return function() {
                    return e.hidden = !0, e.uploadEnd(), e.imagePlaceHolder ? (e.editor.resumePlaceHolder(e.imagePlaceHolder), e.reset()) : void 0
                }
            }(this)), this.tabLinks.click(function() {
                return $(this).tab("show")
            }), this.uploadImage = new Kalamu.UploadImage(this.editor, {
                before: function(e) {
                    return function() {
                        return e.uploadStart()
                    }
                }(this),
                after: function(e) {
                    return function() {
                        return e.uploadEnd(), e.hasError ? void 0 : (e.reset(), e.close())
                    }
                }(this),
                error: function(e) {
                    return function(t) {
                        return e.hasError = !0, e.notification(t, 2e3)
                    }
                }(this),
                done: function(e) {
                    return function() {
                        return e.editor.editorElem.trigger("change:composer")
                    }
                }(this),
                start: function(e) {
                    return function() {
                        return e.editor.onModalImageUploadStart()
                    }
                }(this),
                completed: function(e) {
                    return function() {
                        return e.editor.onModalImageUploadCompleted()
                    }
                }(this)
            }), this.imageUpload.imageUpload({
                allowMultiple: !0,
                dropZone: this.editor.editorElem,
                send: function(e) {
                    return function(t) {
                        return e.uploadImage.imagePlaceHolder = e.imagePlaceHolder, e.uploadImage.sendImages(t)
                    }
                }(this)
            })
        }
        return t(i, n), i.prototype.elements = {
            "a[data-toggle=tab]": "tabLinks",
            "input[type=file]": "imageUpload",
            "input[type=text]": "imageExternal",
            ".message-text": "messageText",
            "button[aria-hidden=true]": "cancelButton"
        }, i.prototype.events = {
            "click button[name=ok]": "handleImageExternal"
        }, i.prototype.open = function() {
            return this.hidden = !1, this.imagePlaceHolder = this.editor.makePlaceHolder(), i.__super__.open.apply(this, arguments)
        }, i.prototype.handleImageExternal = function() {
            var e;
            return e = this.imageExternal.val(), this.uploadImage.imagePlaceHolder = this.imagePlaceHolder, this.uploadImage.sendImages([e], !0)
        }, i.prototype.showMessage = function(e) {
            return null == e && (e = null), e && this.messageText.text(e), this.messageText.show()
        }, i.prototype.notification = function(e, t) {
            return this.editor.notification(e, t), this.showMessage(e)
        }, i.prototype.uploadStart = function() {
            return this.editor.blockUserActions(), this.cancelButton.hide(), this.showMessage(I18n.t("kalamu.processing")), this.messageText.next().show()
        }, i.prototype.uploadEnd = function() {
            return this.editor.unBlockUserActions(), this.cancelButton.show(), this.messageText.hide(), this.messageText.next().hide()
        }, i.prototype.reset = function() {
            return this.imageUrl = this.imagePlaceHolder = null, this.hasError = !1, this.imageExternal.val(""), this.imageUpload.val(""), this.messageText.hide(), this.messageText.next().hide()
        }, i
    }(Kalamu.Modal)
}.call(this), function() {
    var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        t = function(e, t) {
            function i() {
                this.constructor = e
            }
            for (var r in t) n.call(t, r) && (e[r] = t[r]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        },
        n = {}.hasOwnProperty;
    Kalamu.VideoModal = function(n) {
        function i() {
            this.showMessage = e(this.showMessage, this), this.endLoading = e(this.endLoading, this), this.startLoading = e(this.startLoading, this), this.onKeyUp = e(this.onKeyUp, this), this.fetchVideoInfo = e(this.fetchVideoInfo, this), this.getVideoInfo = e(this.getVideoInfo, this), this.insertVideo = e(this.insertVideo, this), this.open = e(this.open, this), i.__super__.constructor.apply(this, arguments), this.el.each(function(e) {
                return function(t, n) {
                    return n._controller = e
                }
            }(this)), this.videoPlaceHolder = null, this.el.on("show", function(e) {
                return function() {
                    return e.endLoading(), e.showMessage(), e.videoURL.val(""), setTimeout(function() {
                        return e.videoURL.focus()
                    }, 0)
                }
            }(this)), this.el.on("hidden", function(e) {
                return function() {
                    return e.editor.afterInsertVideo(e.videoPlaceHolder), e.reset()
                }
            }(this)), this.videoURL.on("blur", function(e) {
                return function() {
                    return e.videoURL.focus()
                }
            }(this))
        }
        var r;
        return t(i, n), r = 10, i.prototype.elements = {
            ".input-prepend": "inputter",
            "input[type=text]": "videoURL",
            ".message-text": "messageText"
        }, i.prototype.events = {
            "click button[name=ok]": "insertVideo",
            "keyup input[type=text]": "onKeyUp"
        }, i.prototype.open = function(e) {
            var t;
            return null == e && (e = null), t = this.editor.videoCount ? this.editor.videoCount() : r, r > t ? (this.videoPlaceHolder = this.editor.makePlaceHolder ? this.editor.makePlaceHolder() : null, i.__super__.open.apply(this, arguments)) : (this.editor.notification(I18n.t("kalamu.too_more_video", {
                limit: r
            })), this.close())
        }, i.checkVideoURL = function(e) {
            return Maleskine.Utils.doesVideoURLAvailable(e)
        }, i.prototype.insertVideo = function() {
            var e;
            return e = this.videoURL.val(), Kalamu.VideoModal.checkVideoURL(e) ? this.fetchVideoInfo(e) : void this.showMessage(I18n.t("kalamu.wrong_video_source"))
        }, i.prototype.getVideoInfo = function(e) {
            var t;
            return Kalamu.VideoModal.checkVideoURL(e.video_url) ? (t = {
                video_id: e.video_id,
                provider: e.provider,
                input_url: this.videoURL.val(),
                video_url: e.video_url,
                flash_url: e.flash_url,
                cover_id: e.cover_id,
                description: e.description
            }, this.editor.insertVideo(t, this.videoPlaceHolder), this.close()) : void this.showMessage(I18n.t("kalamu.wrong_video_source"))
        }, i.prototype.fetchVideoInfo = function(e) {
            return this.startLoading(), $.post("/videos.json", {
                video_url: e,
                note_id: Writer.currentNote.id
            }, function(e) {
                return function(t) {
                    return e.getVideoInfo({
                        video_id: t.id,
                        provider: t.provider.toLowerCase(),
                        video_url: t.player_url,
                        flash_url: t.swf_player_url,
                        cover_id: t.cover_img_uuid,
                        description: t.description || t.title || ""
                    }), e.endLoading()
                }
            }(this)).fail(function(e) {
                return function(t) {
                    var n;
                    return n = t && t.responseJSON && t.responseJSON.message ? t.responseJSON.message : I18n.t("kalamu.fetch_video_info_failed"), e.showMessage(n), e.endLoading(), e.videoURL.focus()
                }
            }(this))
        }, i.prototype.onKeyUp = function(e) {
            return e.which === Kalamu.Keys.ESC && this.close(), e.which === Kalamu.Keys.ENTER_KEY ? this.insertVideo() : void 0
        }, i.prototype.startLoading = function() {
            return this.blockUserAction(), this.showMessage('<img class="loading-animator" src="' + Maleskine.CommonImages.loader("tiny") + '">' + I18n.t("kalamu.loading_video")), this.inputter.addClass("video-loading"), this.videoURL.attr("disabled", !0)
        }, i.prototype.endLoading = function() {
            return this.unblockUserAction(), this.inputter.removeClass("video-loading"), this.videoURL.removeAttr("disabled")
        }, i.prototype.showMessage = function(e) {
            return null == e && (e = null), e && e.length ? (this.messageText.html(e), this.messageText.show()) : (this.messageText.html(""), this.messageText.hide())
        }, i.prototype.reset = function() {
            return this.endLoading(), this.videoPlaceHolder = null, this.videoURL.val(""), this.showMessage()
        }, i
    }(Kalamu.Modal)
}.call(this), function() {
    var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        t = function(e, t) {
            function i() {
                this.constructor = e
            }
            for (var r in t) n.call(t, r) && (e[r] = t[r]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        },
        n = {}.hasOwnProperty;
    Kalamu.LinkModal = function(n) {
        function i() {
            this.showMessage = e(this.showMessage, this), this.handleLink = e(this.handleLink, this), this.open = e(this.open, this);
            var t, n;
            i.__super__.constructor.apply(this, arguments), n = !1, t = null, this.el.on("hidden", function(e) {
                return function() {
                    return n = !1, e.linkPlaceHolder ? e.editor.resumePlaceHolder(e.linkPlaceHolder) : e.currentLink ? e.editor.selection.selectNode(e.currentLink[0]) : e.defaultText && e.editor.selection.selectNode(e.defaultText), e.reset(), t = null
                }
            }(this)), this.el.on("show", function(e) {
                return function() {
                    return e.currentLink ? (e.hrefInput.val(e.currentLink.attr("href") || ""), e.textInput.val(e.currentLink.text() || "")) : e.defaultText && e.textInput.val($(e.defaultText).text()), n = !0
                }
            }(this)), this.hrefInput.on("focus", function(e) {
                return function() {
                    return t = e.hrefInput
                }
            }(this)), this.hrefInput.on("blur", function(e) {
                return function(i) {
                    return i.relatedTarget && (e.hrefInput.is(i.relatedTarget) || e.textInput.is(i.relatedTarget)) ? void 0 : setTimeout(function() {
                        return t === e.hrefInput && n ? t.focus() : void 0
                    }, 0)
                }
            }(this)), this.textInput.on("focus", function(e) {
                return function() {
                    return t = e.textInput
                }
            }(this)), this.textInput.on("blur", function(e) {
                return function(i) {
                    return i.relatedTarget && (e.hrefInput.is(i.relatedTarget) || e.textInput.is(i.relatedTarget)) ? void 0 : setTimeout(function() {
                        return t === e.textInput && n ? t.focus() : void 0
                    }, 0)
                }
            }(this))
        }
        return t(i, n), i.prototype.elements = {
            'input[name="href-input"]': "hrefInput",
            'input[name="text-input"]': "textInput",
            ".message-text": "messageText"
        }, i.prototype.events = {
            "click button[name=ok]": "handleLink"
        }, i.prototype.open = function(e, t) {
            return null == e && (e = null), null == t && (t = null), e && (this.currentLink = $(e)), this.defaultText = t, e || this.defaultText || (this.linkPlaceHolder = this.editor.makePlaceHolder()), i.__super__.open.apply(this, arguments), this.hrefInput.focus()
        }, i.prototype.handleLink = function() {
            var e, t, n, i, r, o;
            if (e = this.hrefInput.val(), o = this.textInput.val(), n = /^((\w*):\/\/)?(.+)/.exec(e), r = (n || {})[2] || "", i = (n || {})[3] || "", i.length < 1) return void this.showMessage("\u94fe\u63a5\u4e0d\u80fd\u4e3a\u7a7a");
            if (r.length < 1)"/" === i.substr(0, 1) ? e = window.location.origin + i : i.match(/^\.{1, 2}\//) ? (e = window.location.href, e.match(/\/$/) || (e += "/"), e += i) : e = "http://" + i;
            else if ("http" !== r && "https" !== r && "ftp" !== r) return void this.showMessage(I18n.t("kalamu.link_format_error"));
            return o.length < 1 && (o = i.match(/([^\?]+)(\?(.*))?/)[1], this.textInput.val(o), $.ajax({
                url: Routes.external_pages_info_path({
                    url: e
                }),
                dataType: "json",
                success: function() {
                    return function(e) {
                        return "undefined" != typeof t && null !== t && t.length > 0 && e.title && e.title.length > 0 ? t.html(e.title) : void 0
                    }
                }(this)
            })), t = e.length > 0 && o.length > 0 ? $("<a>").attr("href", e).attr("target", "_blank").text(o) : void 0, this.editor.handleLink(this.linkPlaceHolder || this.currentLink || $(this.defaultText), t), this.reset(), this.close()
        }, i.prototype.showMessage = function(e) {
            return null == e && (e = null), e && this.messageText.text(e), this.messageText.show()
        }, i.prototype.reset = function() {
            return this.linkPlaceHolder = this.currentLink = this.defaultText = null, this.hrefInput.val(""), this.textInput.val(""), this.textNode = null, this.messageText.hide()
        }, i
    }(Kalamu.Modal)
}.call(this), function() {
    var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        t = function(e, t) {
            function i() {
                this.constructor = e
            }
            for (var r in t) n.call(t, r) && (e[r] = t[r]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        },
        n = {}.hasOwnProperty;
    Kalamu.ImageUploadStatusModal = function(n) {
        function i() {
            this.showError = e(this.showError, this), this.open = e(this.open, this), this.sizeError = 0, this.formatError = 0, i.__super__.constructor.apply(this, arguments)
        }
        return t(i, n), i.prototype.elements = {
            "div.error-size": "errSize",
            "div.error-format": "errFormat",
            "div.error-info-format": "errInfoFormat",
            "div.error-info-size": "errInfoSize",
            "div.error-size span.number": "errSizeImgNumber",
            "div.error-format span.number": "errFormatImgNumber",
            "div.seperator": "seperator",
            "div.line": "line"
        }, i.prototype.open = function() {
            return this.sizeError = 0, this.formatError = 0, this.errSize.find("p").remove(), this.errFormat.find("p").remove(), this.errSize.css({
                display: "none"
            }), this.errFormat.css({
                display: "none"
            }), this.errInfoSize.css({
                display: "none"
            }), this.errInfoFormat.css({
                display: "none"
            }), this.seperator.css({
                display: "none"
            }), this.line.css({
                display: "none"
            }), this.errSizeImgNumber.html(0), this.errFormatImgNumber.html(0), i.__super__.open.apply(this, arguments)
        }, i.prototype.showError = function(e, t) {
            return "block" !== this.el.css("display") && this.open(), "size" === t ? (this.sizeError += 1, this.errSizeImgNumber.html(this.sizeError), this.errSize.append($("<p>" + e + "</p>")), this.errSize.css({
                display: "block"
            }), this.errInfoSize.css({
                display: "block"
            })) : "format" === t && (this.formatError += 1, this.errFormatImgNumber.html(this.formatError), this.errFormat.append($("<p>" + e + "</p>")), this.errFormat.css({
                display: "block"
            }), this.errInfoFormat.css({
                display: "block"
            })), this.formatError > 0 && this.sizeError > 0 ? (this.seperator.css({
                display: "block"
            }), this.line.css({
                display: "block"
            })) : void 0
        }, i
    }(Kalamu.Modal)
}.call(this), function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Kalamu.Selection = function() {
        function t(t) {
            this.executeAndRestoreSimple = e(this.executeAndRestoreSimple, this), this.applyRange = e(this.applyRange, this), this.backupRange = e(this.backupRange, this), this.executeAndRestore = e(this.executeAndRestore, this), this.getTextNodes = e(this.getTextNodes, this), this.getEndNodeFromNodes = e(this.getEndNodeFromNodes, this), this.getStartNodeFromNodes = e(this.getStartNodeFromNodes, this), this.getReverseTextNodes = e(this.getReverseTextNodes, this), this.selectNodeContents = e(this.selectNodeContents, this), this.selectNode = e(this.selectNode, this), this.setAfter = e(this.setAfter, this), this.setBefore = e(this.setBefore, this), this.setSelection = e(this.setSelection, this), this.getSelection = e(this.getSelection, this), this.getRange = e(this.getRange, this), this.editorElem = t
        }
        return t.prototype.getRange = function() {
            var e, t;
            return t = this.getSelection(), e = t && t.rangeCount && t.getRangeAt(0), e && e.compareNode(this.editorElem[0]) === e.NODE_BEFORE_AND_AFTER ? e : null
        }, t.prototype.getSelection = function() {
            return rangy.getSelection(this.editorElem[0])
        }, t.prototype.setSelection = function(e) {
            return this.getSelection().setSingleRange(e)
        }, t.prototype.setBefore = function(e) {
            var t, n;
            if (e.parentElement || e.parent && 0 !== !e.parent().length) return t = rangy.createRange(), t.collapseBefore(e), t.collapse(!1), null != (n = this.getSelection()) ? n.setSingleRange(t) : void 0
        }, t.prototype.setAfter = function(e) {
            var t;
            return t = $(Kalamu.Editor.newPlaceHolder()), $(e).after(t), this.setBefore(t[0]), t.remove()
        }, t.prototype.selectNode = function(e, t) {
            var n;
            return null == t && (t = rangy.createRange()), null != t ? (t.selectNode(e), null != (n = this.getSelection()) ? n.setSingleRange(t) : void 0) : void 0
        }, t.prototype.selectNodeContents = function(e, t, n) {
            var i;
            return null == t && (t = !1), null == n && (n = rangy.createRange()), n ? (n.selectNodeContents(e), "boolean" == typeof t && n.collapse(t), null != (i = this.getSelection()) ? i.setSingleRange(n) : void 0) : void 0
        }, t.prototype.getReverseTextNodes = function(e) {
            var t, n, i, r, o;
            if (o = [], null == e) return null;
            for (3 === e.nodeType && o.push(e), n = i = r = e.childNodes.length - 1; i >= 0; n = i += -1) t = e.childNodes[n], 3 === t.nodeType ? o.push(t) : o = o.concat(this.getReverseTextNodes(t));
            return o
        }, t.prototype.getStartNodeFromNodes = function(e, t) {
            var n, i, r;
            if (null == t) return t;
            for (r = this.getTextNodes(e), n = 0, i = r.length; i > n; n++) if (e = r[n], t.isEqualNode(e)) return e
        }, t.prototype.getEndNodeFromNodes = function(e, t) {
            var n, i, r, o;
            if (null == t) return t;
            for (o = this.getReverseTextNodes(e), r = null, n = 0, i = o.length; i > n; n++) e = o[n], t.isEqualNode(e) && (r = e);
            return r
        }, t.prototype.getTextNodes = function(e) {
            var t, n, i, r, o;
            if (o = [], null == e) return null;
            for (3 === e.nodeType && o.push(e), r = e.childNodes, n = 0, i = r.length; i > n; n++) t = r[n], 3 === t.nodeType ? o.push(t) : o = o.concat(this.getTextNodes(t));
            return o
        }, t.prototype.executeAndRestore = function(e, t) {
            var n, i, r, o, a, s, l, c, u, d, h, p, f;
            if (null == t && (t = !1), n = document.body, h = t && n.scrollTop, d = t && n.scrollLeft, r = "_kalamu-temp-placeholder", p = '<span class="' + r + '">\ufeff</span>', f = this.getRange(), null == f) return void e(null, null);
            u = f.createContextualFragment(p), f.insertNode(u);
            try {
                e(f.startContainer, f.endContainer)
            } catch (s) {
                o = s, setTimeout(function() {
                    throw o
                }, 0)
            }
            i = this.editorElem.find("." + r)[0], i ? (c = rangy.createRange(this.editorElem[0]), c.selectNode(i), c.deleteContents(), this.setSelection(c)) : n.focus(), t && (n.scrollTop = h, n.scrollLeft = d);
            try {
                return i.parentNode.removeChild(i)
            } catch (l) {
                a = l
            }
        }, t.prototype.backupRange = function(e) {
            var t, n, i, r, o, a;
            if (null == e && (e = this.getRange()), null != e) {
                for (a = e.getNodes([3]), t = a[0] || e.startContainer, n = a[a.length - 1] || e.endContainer; t && 3 !== t.nodeType && (i = this.getTextNodes(t)) && i.length > 0;) t = i[0];
                for (; n && 3 !== n.nodeType && (o = this.getReverseTextNodes(t)) && o.length > 0;) n = o[o.length - 1];
                return r = {
                    collapsed: e.collapsed,
                    startContainer: t,
                    startOffset: t === e.startContainer ? e.startOffset : 0,
                    endContainer: n,
                    endOffset: n === e.endContainer ? e.endOffset : n.length
                }
            }
        }, t.prototype.applyRange = function(e) {
            var t, n, i, r, o, a, s;
            if (!e || !e.startContainer && !e.endContainer) return void this.selectNodeContents(this.editorElem[0]);
            s = rangy.createRange();
            try {
                e.startContainer ? s.setStart(e.startContainer, e.startOffset) : s.setStart(e.endContainer, 0)
            } catch (r) {
                t = r
            }
            try {
                e.endContainer ? s.setEnd(e.endContainer, e.endOffset) : s.setEnd(e.startContainer, e.startContainer.length)
            } catch (o) {
                n = o
            }
            try {
                return rangy.getSelection(window).setSingleRange(s)
            } catch (a) {
                i = a
            }
        }, t.prototype.executeAndRestoreSimple = function(e) {
            var t, n, i, r, o, a, s, l, c, u;
            if (o = this.getRange(), t = document.body, !o) return void e(t, t);
            a = this.backupRange(o);
            try {
                s = e(a.startContainer, a.endContainer), u = s[0], i = s[1], a.startContainer = null != (l = this.getTextNodes(u)) ? l[0] : void 0, a.endContainer = null != (c = this.getReverseTextNodes(i)) ? c[0] : void 0
            } catch (r) {
                n = r, setTimeout(function() {
                    throw n
                }, 0)
            }
            return this.applyRange(a)
        }, t
    }()
}.call(this), function() {
    var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        t = [].indexOf ||
            function(e) {
                for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
                return -1
            };
    Kalamu.Composer = function() {
        function n(n) {
            this.setContentHTML = e(this.setContentHTML, this), this.contentHTML = e(this.contentHTML, this), this.clear = e(this.clear, this), this.getRange = e(this.getRange, this), this.checkLinkElement = e(this.checkLinkElement, this), this.triggerChangeEvent = e(this.triggerChangeEvent, this), this.fixVideoPackage = e(this.fixVideoPackage, this), this.fixImagePackage = e(this.fixImagePackage, this), this.clearTmpElement = e(this.clearTmpElement, this);
            var i, r, o, a, s, l, c;
            this.editor = n, this.editorElem = n.editorElem, this.undoManager = new Kalamu.UndoManager(this), a = function() {
                var e, t, n, i;
                for (n = ["BACKSPACE", "DELETE", "SPACE", "ENTER", "SEMI_COLON", "COMMA", "DOT", "QUOTE", "FORWARD_SLASH", "BACKWARD_SLASH", "MINUS", "EQUAL", "LEFT_BRACKET", "RIGHT_BRACKET", "GRAVE"], i = [], e = 0, t = n.length; t > e; e++) o = n[e], i.push(Kalamu.Keys[o + "_KEY"]);
                return i
            }(), s = function() {
                var e, t, n, i;
                for (n = ["BACKSPACE", "DELETE", "ENTER", "SEMI_COLON", "COMMA", "DOT", "QUOTE", "FORWARD_SLASH", "BACKWARD_SLASH", "PLUS", "MINUS", "EQUAL", "LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_PARENTHESES", "RIGHT_PARENTHESES", "GRAVE", "EXCLAMATION", "AT", "SHARP", "DOLLAR", "PERSENT", "CIRCUMFLEX", "AMPERSAND", "ASTERISK"], i = [], e = 0, t = n.length; t > e; e++) o = n[e], i.push(Kalamu.Keys[o + "_KEY"]);
                return i
            }(), this.preSelectedLink = void 0, this.editorElem.on("blur", function(e) {
                return function() {
                    return e.editorElem.trigger("blur:composer"), e.triggerChangeEvent()
                }
            }(this)), this.editorElem.on("focus", function(e) {
                return function() {
                    return e.editorElem.trigger("focus:composer")
                }
            }(this)), l = {}, r = function() {
                return function() {
                    var e, t, n;
                    for (n = [Kalamu.Keys.CTRL, Kalamu.Keys.ALT, Kalamu.Keys.COMMAND, Kalamu.Keys.SHIFT], e = 0, t = n.length; t > e; e++) if (o = n[e], l[o]) return !0;
                    return !1
                }
            }(this), c = function() {
                return function(e) {
                    return e === Kalamu.Keys.BACKSPACE || e === Kalamu.Keys.DELETE || e === Kalamu.Keys.ENTER ? !0 : e === Kalamu.Keys.LEFT || e === Kalamu.Keys.UP || e === Kalamu.Keys.RIGHT || e === Kalamu.Keys.DOWN || e === Kalamu.Keys.WIN || e === Kalamu.Keys.ESC || e === Kalamu.Keys.CAP || e === Kalamu.Keys.MENU || e === Kalamu.Keys.HOME || e === Kalamu.Keys.END || e === Kalamu.Keys.PAGEUP || e === Kalamu.Keys.PAGEDOWN || e === Kalamu.Keys.PRTSRN ? !1 : l[Kalamu.Keys.ALT] ? !1 : !0
                }
            }(this), i = !0, this.editorElem.on("compositionstart", function() {
                return function() {
                    return i = !1, Spine.trigger("composition-start")
                }
            }(this)), this.editorElem.on("compositionend", function() {
                return function() {
                    return Spine.trigger("composition-end"), i = !0
                }
            }(this)), this.editorElem.on("keyup", function(e) {
                return function(t) {
                    var n;
                    return ((n = t.keyCode) === Kalamu.Keys.CTRL || n === Kalamu.Keys.ALT || n === Kalamu.Keys.COMMAND || n === Kalamu.Keys.SHIFT) && (l[t.keyCode] = !1), i && c(t.keyCode) ? e.triggerChangeEvent() : void 0
                }
            }(this)), this.editorElem.on("keydown", function(e) {
                return function(n) {
                    var i, o, c, u;
                    if (((o = n.keyCode) === Kalamu.Keys.CTRL || o === Kalamu.Keys.ALT || o === Kalamu.Keys.COMMAND || o === Kalamu.Keys.SHIFT) && (l[n.keyCode] = !0), r()) {
                        if (l[Kalamu.Keys.SHIFT] && (c = n.keyCode, t.call(s, c) >= 0)) return e.editorElem.trigger("newsentence:composer")
                    } else if (i = $.Event("keydown:composer"), i.stopKalamuKeydown = !1, i.stopDefault = !1, i.keydownEvent = n, e.editorElem.trigger(i), i.stopKalamuKeydown || (u = n.keyCode, t.call(a, u) >= 0 && e.editorElem.trigger("newsentence:composer")), i.stopDefault) return n.preventDefault(), n.stopPropagation()
                }
            }(this)), this.editorElem.on("aftercommand:composer", function(e) {
                return function() {
                    return e.triggerChangeEvent()
                }
            }(this)), this.editorElem.on("paste", function(e) {
                return function(t) {
                    return t.__enableDefaultPaste = !1, e.editorElem.trigger("paste:composer", t), t.__enableDefaultPaste
                }
            }(this))
        }
        return n.prototype.clearTmpElement = function() {
            var e, t, n, i, r, o, a, s, l, c, u, d, h, p;
            for (c = this.editor.getRange(), u = this.editorElem[0].childNodes, n = 0, o = u.length; o > n; n++) l = u[n], 3 === l.nodeType || "B" === (d = (l.tagName || "").toUpperCase()) || "A" === d || "I" === d || "STRIKE" === d ? ($(l).wrap("<p></p>"), e = !0) : this.editor.isContainer(l) || this.editor.isImageBox(l) || (c && c.startContainer === c.endContainer && c.startContainer === l ? (t = $(l).contents().unwrap().wrap("<p></p>"), c.startContainer = c.endContainer = t.parent()[0]) : $(l).contents().unwrap().wrap("<p></p>"), e = !0);
            for (this.editorElem.find("[style]").each(function() {
                return function(t, n) {
                    if (n = $(n), n.is("span")) {
                        if (!n.attr("class")) return n.contents().unwrap(), e = !0
                    } else if (!(n.parents(".image-uploading").length > 0)) return n.removeAttr("style")
                }
            }(this)), this.editorElem.find("br[type='_moz']").removeAttr("type"), h = this.editorElem.find("blockquote, pre").contents().toArray(), i = 0, a = h.length; a > i; i++) l = h[i], l = $(l), $(l).is("p") || $(l).text().length < 1 && $(l).contents() < 1 && $(l).remove();
            for (this.fixImagePackage(c) && (e = !0), this.fixVideoPackage(c) && (e = !0), p = this.editorElem.find("p"), r = 0, s = p.length; s > r; r++) l = p[r], l = $(l), 0 === l.html().length ? Maleskine.BrowserDetector.isIE() || l.remove() : /^\s*$/.test(l.text()) && l.children().length < 1 && l.html(Maleskine.BrowserDetector.isIE() ? "" : "<br>");
            return t = this.editorElem.html(), t.match(/^(\n|\t|\r| |<br>)*$/i) && (t = $("<p><br></p>"), this.editorElem.html(""), this.editorElem.append(t), c || (c = document.createRange()), c.startContainer = c.endContainer = t[0], e = !0), l = this.editorElem.children(), l = l[l.length - 1], l = $(l), l.is(".video-package") && l.after($("<p><br></p>")), null != e ? (this.editor.selection.applyRange(c), this.editor.scrollToRange(c)) : void 0
        }, n.prototype.fixImagePackage = function(e) {
            var t, n, i, r, o, a, s;
            return console.log("image fixed"), t = !1, e ? (o = $(e.startContainer), s = o.parents(".image-package"), a = e.startOffset, n = $(e.endContainer), r = n.parents(".image-package"), i = e.endOffset) : (o = s = n = r = [], a = i = 0), this.editorElem.find("div.image-package").each(function(l) {
                return function(c, u) {
                    var d, h, p, f, g, m, v, b;
                    return p = l.getNonEmptyChildren(u), p = l.analyzeChildren(p, ["img", "br", "div.image-caption", ".image-upload-status"]), b = !1, (o[0] === u || s[0] === u || n[0] === u || r[0] === u) && (b = !0), u = $(u), u.removeAttr("contenteditable"), g = p[1], d = g.br, h = g["div.image-caption"], g = g.img, f = [], p[2].reverse().map(function(e) {
                        var t, n, i;
                        return 3 === e.nodeType || "b" === (n = e.nodeName.toLowerCase()) || "i" === n || "u" === n || "strong" === n || "em" === n || "del" === n || "strike" === n || "a" === n || "span" === n ? (e = $(e), 3 !== e.nodeType && e.removeAttr("style"), g && h ? (f.unshift(e), e.remove()) : (t = $("<p></p>"), t.append(e), u.after(t))) : "font" === e.nodeName.toLowerCase() ? (e = $(e), f.unshift(e.text()), e.remove()) : "img" === e.nodeName.toLowerCase() ? $(e).remove() : "div" === (i = e.nodeName.toLowerCase()) || "p" === i ? u.after($(e)) : (t = $("<p></p>"), t.append($(e)), u.after(t))
                    }), g ? (g = $(g), d ? d = $(d) : (d = $("<br>"), g.after(d)), h ? (h = $(h), h.removeAttr("contenteditable")) : (h = $('<div class="image-caption"></div>'), d.after(h)), f.map(function(e) {
                        return h.append(e)
                    }), b ? (u = h[0].childNodes, 0 === u.length ? (e.startContainer = h[0], e.startOffset = 0, e.endContainer = h[0], e.endOffset = 0) : (u = u[0], m = u.textContent.length, a > m && (a = m), i > m && (i = m), e.startContainer = u, e.startOffset = a, e.endContainer = u, e.endOffset = i), t = !0) : void 0) : (v = $("<p></p>").html(u.text()), u.replaceWith(v), v = v[0], b && (e.startContainer = v, e.startOffset = 0, e.endContainer = v, e.endOffset = 0), void(t = !0))
                }
            }(this)), t
        }, n.prototype.fixVideoPackage = function(e) {
            var t, n, i, r, o, a, s;
            return t = !1, e ? (o = $(e.startContainer), s = o.parents(".video-package"), a = e.startOffset, n = $(e.endContainer), r = n.parents(".video-package"), i = e.endOffset) : (o = s = n = r = [], a = i = 0), this.editorElem.find("div.video-package").each(function(l) {
                return function(c, u) {
                    var d, h, p, f, g, m, v, b, y, w, _;
                    if (p = l.getNonEmptyChildren(u), p = l.analyzeChildren(p, [".player", "br", "div.video-description"]), w = !1, (o[0] === u || s[0] === u || n[0] === u || r[0] === u) && (w = !0), u = $(u), _ = u.attr("data-video-url"), !_ || !Maleskine.Utils.doesVideoURLAvailable(_)) return void u.remove();
                    if (y = u.attr("data-provider"), g = u.attr("data-flash-url"), u.removeAttr("contenteditable"), b = p[1], d = b.br, h = b["div.video-description"], b = b[".player"], f = [], p[2].reverse().map(function(e) {
                            var t, n, i;
                            return 3 === e.nodeType || "b" === (n = e.nodeName.toLowerCase()) || "i" === n || "u" === n || "strong" === n || "em" === n || "del" === n || "strike" === n || "a" === n || "span" === n ? (e = $(e), 3 !== e.nodeType && e.removeAttr("style"), b && h ? (f.unshift(e), e.remove()) : (t = $("<p></p>"), t.append(e), u.after(t))) : $(e).is(".player") ? $(e).remove() : "div" === (i = e.nodeName.toLowerCase()) || "p" === i ? u.after($(e)) : (t = $("<p></p>"), t.append($(e)), u.after(t))
                        }), b) b = $(b), b.attr("data-src") !== _ && (v = $(l.video_maker(_, 480, 400, y, g)), b.replaceWith(v), b = v, b.attr("data-src", _)), u.attr("flag-generated", "generated");
                    else {
                        if ("generated" === u.attr("flag-generated")) return v = $("<p></p>").html(u.text()), u.replaceWith(v), v = v[0], w && (e.startContainer = v, e.startOffset = 0, e.endContainer = v, e.endOffset = 0), void(t = !0);
                        u.attr("flag-generated", "generated"), b = $(l.video_maker(_, 480, 400, y, g)), b.attr("data-src", _), p[3] = u[0].childNodes, d ? $(d).before(b) : (0 === p[3].length ? u.append(b) : $(p[3][0]).before(b), d = $("<br>"), b.after(d))
                    }
                    return d ? d = $(d) : (d = $("<br>"), b.after(d)), h ? (h = $(h), h.removeAttr("contenteditable")) : (h = $('<div class="video-description"></div>'), d.after(h)), f.map(function(e) {
                        return h.append(e)
                    }), w ? (u = h[0].childNodes, 0 === u.length ? (e.startContainer = h[0], e.startOffset = 0, e.endContainer = h[0], e.endOffset = 0) : (u = u[0], m = u.textContent.length, a > m && (a = m), i > m && (i = m), e.startContainer = u, e.startOffset = a, e.endContainer = u, e.endOffset = i), t = !0) : void 0
                }
            }(this)), t
        }, n.prototype.getNonEmptyChildren = function(e) {
            return [].filter.call(e.childNodes, function(e) {
                return 3 !== e.nodeType || e.textContent.replace(/\s/g, "").length > 0
            })
        }, n.prototype.analyzeChildren = function(e, t) {
            var n, i, r;
            return n = {}, i = [].map.call(e, function(e) {
                return e
            }), t.map(function(e) {
                var t;
                return t = i.filter(function(t) {
                    return $(t).is(e)
                }), t.length > 0 ? (t = t[0], i.splice(i.indexOf(t), 1), n[e] = t) : void 0
            }), r = e.length === Object.keys(n).length && 0 === i.length, [r, n, i]
        }, n.prototype.triggerChangeEvent = function() {
            var e;
            return e = this.editorElem.html(), this.editorElem.data("before") !== e ? (this.editorElem.data("before", e), this.editorElem.trigger("change:composer")) : void 0
        }, n.prototype.checkLinkElement = function(e) {
            var t, n, i;
            if ($(e.cloneContents()).children().length <= 1) {
                if (t = $(e.commonAncestorContainer), i = $(e.commonAncestorContainer.parentElement || e.commonAncestorContainer.parentNode), this.editorElem[0] !== i[0] && !$.contains(this.editorElem[0], i[0])) return;
                if (n = t.is("a") ? t : i.is("a") ? i : null, n !== this.preSelectedLink) return null != n ? this.editorElem.trigger("selectLink:composer", n) : this.editorElem.trigger("rangeLeaveLink:composer"), this.preSelectedLink = n
            }
        }, n.prototype.getRange = function() {
            return this.editor.getRange()
        }, n.prototype.clear = function() {
            return this.editorElem.html("")
        }, n.prototype.contentHTML = function() {
            return this.isEmpty() ? "" : this.editorElem.html()
        }, n.prototype.setContentHTML = function(e) {
            var t, n;
            try {
                return this.editorElem.html(e)
            } catch (n) {
                return t = n, this.editorElem.text(e)
            }
        }, n.prototype.video_maker = function(e, t, n, i, r) {
            var o;
            return "bilibili" === i ? (o = '<div class="video-player player">', o += '<video width="' + t + '" height="' + n + '" preload="auto" controls="true">', o += '<source src="' + e + '" type="video/mp4">', o += '<object type="application/x-shockwave-flash" data="http://static.hdslb.com/play.swf" class="flash" style="width:' + t + "px; height:" + n + 'px;">', o += '<param name="bgcolor" value="#ffffff">', o += '<param name="allowfullscreeninteractive" value="true">', o += '<param name="allowfullscreen" value="true">', o += '<param name="quality" value="high">', o += '<param name="allowscriptaccess" value="always">', o += '<param name="wmode" value="direct">', o += '<param name="flashvars" value="' + r + '">', o += "</object>", o += "</video>", o += "</div>") : o = '<iframe class="player" src="' + e + '" height="' + n + '" width="' + t + '" frameborder=0 allowfullscreen style="width:' + t + "px; height:" + n + 'px;"></iframe>', o || (o = '<div class="video-placeholder"></div>'), o
        }, n.prototype.isEmpty = function() {
            var e;
            return e = this.editorElem.html(), "" === e || "<br>" === e || "<p></p>" === e || "<p><br></p>" === e
        }, n
    }()
}.call(this), function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Kalamu.MAX_HISTORY_ENTRIES = 25, Kalamu.UndoManager = function() {
        function t(t) {
            this.setEditorContent = e(this.setEditorContent, this), this.redoPossible = e(this.redoPossible, this), this.undoPossible = e(this.undoPossible, this), this.redo = e(this.redo, this), this.undo = e(this.undo, this), this.transact = e(this.transact, this), this.editorElem = t.editorElem, this.editor = t.editor, this.composer = t, this.position = 0, this.historyStr = [], this.historyDom = [], this.transact(), this.editorElem.on("keydown", function(e) {
                return function(t) {
                    var n, i, r;
                    if (!t.altKey && (t.ctrlKey || t.metaKey)) return r = t.keyCode, i = r === Kalamu.Keys.Z_KEY && !t.shiftKey, n = r === Kalamu.Keys.Z_KEY && t.shiftKey || r === Kalamu.Keys.Y_KEY, i ? (e.undo(), t.preventDefault()) : n ? (e.redo(), t.preventDefault()) : void 0
                }
            }(this)), this.editorElem.on("newsentence:composer beforecommand:composer paste:composer", function(e) {
                return function() {
                    return e.transact()
                }
            }(this))
        }
        return t.prototype.transact = function() {
            var e, t, n, i, r, o, a;
            return a = getSelection(), a.rangeCount > 0 && (a = a.getRangeAt(0)), o = this.historyStr[this.position - 1], n = this.composer.contentHTML(), e = rangy.getSelection && this.composer.editor.selection.backupRange(), null != e ? (e.startContainer = e.startContainer.cloneNode(!0), e.endContainer = e.endContainer.cloneNode(!0)) : (e = document.createRange(), r = this.editorElem[0].childNodes[0], r.className.indexOf("image-package") >= 0 && (r = $(r).find(".image-caption")[0]), r = r.cloneNode(!0), e.setStart(r, 0), e.setEnd(r, 0)), n !== o ? (i = this.historyStr.length = this.historyDom.length = this.position, i > Kalamu.MAX_HISTORY_ENTRIES && (this.historyStr.shift(), this.historyDom.shift(), this.position--), this.position++, t = this.editorElem.clone( !! n), this.historyDom.push([t, e]), this.historyStr.push(n)) : void 0
        }, t.prototype.undo = function() {
            var e;
            return this.transact(), this.undoPossible() ? (e = this.historyDom[--this.position - 1], this.setEditorContent(e), this.editorElem.trigger("undo:composer")) : void 0
        }, t.prototype.redo = function() {
            return this.redoPossible() ? (this.setEditorContent(this.historyDom[++this.position - 1]), this.editorElem.trigger("redo:composer")) : void 0
        }, t.prototype.undoPossible = function() {
            return this.position > 1
        }, t.prototype.redoPossible = function() {
            return this.position < this.historyStr.length
        }, t.prototype.setEditorContent = function(e) {
            var t, n, i, r, o, a, s;
            for (i = e[0], t = e[1], this.editorElem.html(""), n = i[0].childNodes, r = 0, o = n.length; o > r; r++) s = n[r], s = s.cloneNode(!0), this.editorElem[0].appendChild(s);
            return null != t && this.composer.editor.supportCompareNode() ? (a = this.composer.editor.findNewRange(this.editorElem[0], [t.startContainer, t.endContainer]), a[0] && a[1] || (a[2] = this.editorElem[0].childNodes[0], a[2].classList.contains("image-package") && (a[2] = $(a[2]).find(".image-caption")[0]), a[0] = a[2], a[1] = a[2], a.pop()), t.startContainer = a[0], t.endContainer = a[1], t.startContainer !== a[0] && t.setStart(a[0], 0), t.endContainer !== a[1] && t.setEnd(a[1], 0), this.composer.editor.selection.applyRange(t)) : this.composer.editor.selection.applyRange(t), this.editor.scrollToRange()
        }, t
    }()
}.call(this), function() {
    var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        t = function(e, t) {
            function i() {
                this.constructor = e
            }
            for (var r in t) n.call(t, r) && (e[r] = t[r]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        },
        n = {}.hasOwnProperty,
        i = [].indexOf ||
            function(e) {
                for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
                return -1
            };
    Kalamu.Editor = function(n) {
        function r(t, n) {
            null == n && (n = {}), this.notification = e(this.notification, this), this.unBlockUserActions = e(this.unBlockUserActions, this), this.blockUserActions = e(this.blockUserActions, this), this.content = e(this.content, this), this.registerBlockElementHandlerEvents = e(this.registerBlockElementHandlerEvents, this), this.registerImageHandlerEvents = e(this.registerImageHandlerEvents, this), this.registerResizeEvent = e(this.registerResizeEvent, this), this.jumpToNextLine = e(this.jumpToNextLine, this), this.jumpToPrevLine = e(this.jumpToPrevLine, this), this.isInsideImageBox = e(this.isInsideImageBox, this), this.canExecuteNormalCommand = e(this.canExecuteNormalCommand, this), this.resizeToolbar = e(this.resizeToolbar, this), this.buildToolbar = e(this.buildToolbar, this), this.createPopMenu = e(this.createPopMenu, this), this.triggerCommandAfter = e(this.triggerCommandAfter, this), this.triggerCommandBefore = e(this.triggerCommandBefore, this), this.insertImage = e(this.insertImage, this), this.afterInsertVideo = e(this.afterInsertVideo, this), this.insertVideo = e(this.insertVideo, this), this.videoCount = e(this.videoCount, this), this.handleLink = e(this.handleLink, this), this.resumePlaceHolder = e(this.resumePlaceHolder, this), this.makePlaceHolder = e(this.makePlaceHolder, this), this.newPlaceHolder = e(this.newPlaceHolder, this), this.onUploadImageTaskFinish = e(this.onUploadImageTaskFinish, this), this.onUploadImageTaskStart = e(this.onUploadImageTaskStart, this), this.onModalImageUploadCompleted = e(this.onModalImageUploadCompleted, this), this.onPasteImageUploadCompleted = e(this.onPasteImageUploadCompleted, this), this.onModalImageUploadStart = e(this.onModalImageUploadStart, this), this.onPasteImageUploadStart = e(this.onPasteImageUploadStart, this), this.cancelUploading = e(this.cancelUploading, this), this.getExternalImages = e(this.getExternalImages, this), this.uploadingImageCount = e(this.uploadingImageCount, this), this.isUploadingImage = e(this.isUploadingImage, this), this.init = e(this.init, this), this.box = $(t), this.options = n, this.subMenus = [], this.init()
        }
        return t(r, n), r.KalamuPlaceHolderClass = "kalamu-tmp-placeholder", r.callbackNeedResizeToolbar = null, r.useBlobForDataURI = !0, r.prototype.init = function() {
            var e, t;
            return this.box.addClass("kalamu-box"), this.buildToolbar(), this.box.append(this.bar), this.editorElem = $('<div class="kalamu-area" contenteditable="true">' + (this.options.content || "<p></p>") + "</div>"), this.box.after($(JST["kalamu/image_modal"]())), this.box.after($(JST["kalamu/video_modal"]())), this.box.after($(JST["kalamu/link_modal"]())), this.box.append(this.editorElem), $("#writer").append($(JST["kalamu/img_error_modal"]())), this.selection = new Kalamu.Selection(this.editorElem), this.composer = new Kalamu.Composer(this), this.registerResizeEvent(), this.registerImageHandlerEvents(), this.registerBlockElementHandlerEvents(), this.imageModal = new Kalamu.ImageModal({
                el: $("#kalamu-image-modal"),
                editor: this
            }), this.videoModal = $("#kalamu-video-modal"), this.videoModal[0]._controller ? (this.videoModal = this.videoModal[0]._controller, this.videoModal.editor = this) : this.videoModal = new Kalamu.VideoModal({
                el: $("#kalamu-video-modal"),
                editor: this
            }), this.linkModal = new Kalamu.LinkModal({
                el: $("#kalamu-link-modal"),
                editor: this
            }), this.imageUploadingStatus = new Kalamu.ImageUploadStatusModal({
                el: $("#img-error-modal"),
                editor: this
            }), this.uploadImage = new Kalamu.UploadImage(this, {
                error: function(e) {
                    return function(t) {
                        return e.notification(t, 2e3)
                    }
                }(this),
                done: function(e) {
                    return function() {
                        return e.editorElem.trigger("change:composer")
                    }
                }(this),
                start: function(e) {
                    return function() {
                        return e.onPasteImageUploadStart()
                    }
                }(this),
                completed: function(e) {
                    return function() {
                        return e.onPasteImageUploadCompleted()
                    }
                }(this)
            }), this.editorElem.trigger("kalamu:inited"), this.editorElem.on("paste:composer", function(n) {
                return function(r, o) {
                    var a, s, l, c, u, d, h, p, f, g, m, v, b, y, w, _;
                    if (m = o.originalEvent, m && m.clipboardData && m.clipboardData.getData || window.clipboardData) if (a = m.clipboardData || window.clipboardData, s = a.types ? [].map.call(a.types, function(e) {
                            return e
                        }) : [], w = s.join(";").indexOf("text/") >= 0, _ = !Maleskine.BrowserDetector.isMozilla(), _ = !1, w) {
                        if (l = window.clipboardData ? clipboardData.getData("text") : s.indexOf("text/html") >= 0 ? a.getData("text/html") : s.indexOf("text/plain") >= 0 ? a.getData("text/plain") : void 0, !l) return;
                        if (l = l.replace(/<!DOCTYPE.*?>\n?/gi, "").replace(/\n?<head[ >][\w\W]*?<\/head>\n?/gi, "").replace(/\n?<\/?(body|html|meta)[\w\W]*?>\n?/gi, "").replace(/<!--[\w\W]*?-->/gi, ""), l && (b = n.getRange(), b.deleteContents(), b = n.getRange(), f = !1, (!b || b.startContainer.className && b.startContainer.className.indexOf("kalamu-area") >= 0 || b.endContainer.className && b.endContainer.className.indexOf("kalamu-area") >= 0) && (v = $("<br>"), g = $("<p></p>"), g.append(v), n.editorElem.append(g), n.selection.setAfter(v), b = n.getRange(), v.remove()), n.selection.executeAndRestore(function() {
                                var t, i, o, a, s, c, u, d, h, p, g, m, v, y, w, _, S, C;
                                t = $("<div>").html(l), u = t.find("img"), u.length > 0 && (f = !0), i = n.getContents(t);
                                try {
                                    o = $(n.getCurrentContainer(b)), n.isImageBox(o) && (m = $("<p></p>"), o.after(m), o = m, n.selection.selectNodeContents(m[0]))
                                } catch (a) {
                                    r = a, o = $("<p></p>"), n.editorElem.append(o), n.selection.selectNodeContents(o[0])
                                }
                                if (s = i.shift()) {
                                    if (C = "{{TEXTPLACEHOLDER}}", y = document.createTextNode(C), b.insertNode(y), w = $(y.parentElement), w.html(w.html().replace(C, s)), S = [], w.is(n.editorElem)) w = $("<p>").html(w.html()), y = $(y), y.after(w), y.remove();
                                    else {
                                        if (y.nextSibling) for (y = y.nextSibling; y;) y === o[0] ? v = y.nextSibling : (v = $(y), v.hasClass("._kalamu-temp-placeholder") || S.push(y), v = y.nextSibling, $(y).remove()), y = v;
                                        y = w.find("._kalamu-temp-placeholder"), y.length > 0 ? (y.remove(), w.html(e(w.html())), $(w.contents()[0]).before(y)) : w.html(e(w.html()))
                                    }
                                    for (p = o, c = d = _ = i.length - 1; d >= 0; c = d += -1) y = i[c], y && y.length > 0 && (y = $("<p>").html(e(y)), o.after(y), y.find(".image-package, .video-package").each(function(e, t) {
                                        return t = $(t), y.after(t)
                                    }), c === i.length - 1 && (p = y));
                                    if ("" === o.text() && o.remove(), S.length > 0) {
                                        for (h = 0, g = S.length; g > h; h++) y = S[h], p.append(y);
                                        y = S[0], n.selection.selectNodeContents(y, !0)
                                    } else y = document.createTextNode(""), p.append(y), n.selection.selectNodeContents(y, !0);
                                    return n.editorElem.find("._kalamu-temp-placeholder").remove()
                                }
                            }, !0), f)) return t()
                    } else {
                        if (i.call(s, "Files") >= 0) {
                            if (!Maleskine.BrowserDetector.canPasteImage()) return;
                            for (u = [], d = 0, y = a.items, h = 0, p = y.length; p > h; h++) c = y[h], c = c.getAsFile(), c && (c.name = "Paste_Image_" + d + ".png", d++, u.push(c));
                            n.uploadImage.sendImages(u), _ = !0
                        } else i.call(s, "image/tiff") >= 0 && (o.__enableDefaultPaste = !1, n.pasteImageInSafari = !1, _ = !0);
                        if (!_) return o.__enableDefaultPaste = !0, setTimeout(t, 0)
                    }
                }
            }(this)), e = function(e) {
                return e ? e = e.replace(/&nbsp;/g, " ").replace(/[ ]{2}/gi, "&nbsp; ") : ""
            }, t = function(e) {
                return function(t, n, i, r) {
                    var o, a, s;
                    return null == r && (r = !1), o = e.editorElem.find("img"), s = Kalamu.Editor.useBlobForDataURI && !! window.Blob, a = 0, o.each(function(o, a) {
                        var l, c, u, d, h, p, f, g, m, v, b, y, w, _, S;
                        if (a = $(a), h = a.attr("src"), !h.match(Writer.UploadImage.checkIsUploadedImage)) {
                            if (f = "data:" === h.substring(0, 5), m = a.parents(".image-package"), 0 === m.length) m = $('<div class="image-package paste_and_upload"></div>'), a.before(m), m.append(a), m.append($("<br>")), m.append($('<div class="image-caption"></div>'));
                            else {
                                if (m = $(m[0]), m.hasClass("paste_and_upload")) return;
                                m.addClass("paste_and_upload")
                            }
                            return m.addClass("image-uploading"), g = $('<div class="image-upload-status uploading" contentEditable=false></div>').appendTo(m), v = $('<img class="preview">').attr("src", h).appendTo(g), w = $('<div class="status-bar"></div>').appendTo(g), b = $('<img class="loader" src="' + Maleskine.Images["writer-upload-img.gif"] + '">').appendTo(w), d = $('<div class="status-area"></div>').appendTo(w), _ = $('<span class="error">' + I18n.t("kalamu.image-uploading") + "</span>").appendTo(d), c = $('<a class="upload-btn-cancel" href="javascript:void(0)">' + I18n.t("kalamu.cancel") + "</a>").appendTo(d), u = $('<a class="upload-btn-retry" href="javascript:void(0)">' + I18n.t("kalamu.retry-upload-image") + "</a>").appendTo(d), l = !0, y = null, c.on("click", function() {
                                return l = !1, m.remove(), e.editorElem.trigger("change:composer")
                            }), u.on("click", function() {
                                return m.removeClass("upload-failed"), g.addClass("uploading").removeClass("failed"), y ? (y(), y = null) : void 0
                            }), S = new Kalamu.UploadImage(e, {
                                needPreview: !1,
                                success: function(t, i) {
                                    return l ? (a.attr("src", i.regularizedImageURL.zoomed), a.attr("data-original-src", i.regularizedImageURL.origin), m.removeClass("paste_and_upload"), m.removeClass("image-uploading"), g.remove(), e.editorElem.trigger("change:composer"), n ? n(h) : void 0) : void 0
                                },
                                fail: function(t) {
                                    return t.isCancelled ? (m.removeClass("paste_and_upload"), m.removeClass("image-uploading"), g.remove(), y = null) : r ? (m.remove(), y = null) : (m.addClass("upload-failed"), g.removeClass("uploading").addClass("failed"), y = function() {
                                        return m.removeClass("upload-failed"), e.pastedImages.push(t), t.upload.call(t)
                                    }), e.editorElem.trigger("change:composer"), i ? i(h) : void 0
                                },
                                done: function() {
                                    return o = e.pastedImages.indexOf(S), 0 > o || e.pastedImages.splice(o, 1), 0 === e.pastedImages.length && t ? t() : void 0
                                }
                            }), s && f ? (p = Writer.UploadImage.dataURI2Blob(h), S.sendImages([p])) : S.sendImages([h]), e.pastedImages.push(S)
                        }
                    })
                }
            }(this), this.pastedImages = [], this.uploadExternalImages = function() {
                return function(e, n, i) {
                    return t(e, n, i, !1)
                }
            }(this), this.resizeToolbar()
        }, r.prototype.isUploadingImage = function() {
            return this.uploadImage.isUploading() || this.imageModal.uploadImage.isUploading() || this.pastedImages.length > 0
        }, r.prototype.uploadingImageCount = function() {
            return this.uploadImage.tasksLeft() + this.imageModal.uploadImage.tasksLeft() + this.pastedImages.length
        }, r.prototype.getExternalImages = function() {
            var e;
            return e = []
        }, r.prototype.cancelUploading = function() {
            return this.pastedImages.map(function(e) {
                return e.cancel(!1, !0)
            }), this.pastedImages = []
        }, r.prototype.onPasteImageUploadStart = function() {
            return this.imageModal.uploadImage.isUploading() ? void 0 : this.onImageUploadStart()
        }, r.prototype.onModalImageUploadStart = function() {
            return this.uploadImage.isUploading() ? void 0 : this.onImageUploadStart()
        }, r.prototype.onImageUploadStart = function() {}, r.prototype.onPasteImageUploadCompleted = function() {
            return this.imageModal.uploadImage.isUploading() ? void 0 : this.onImageUploadCompleted()
        }, r.prototype.onModalImageUploadCompleted = function() {
            return this.uploadImage.isUploading() ? void 0 : this.onImageUploadCompleted()
        }, r.prototype.onImageUploadCompleted = function() {}, r.prototype.onUploadImageTaskStart = function(e) {
            return this.onImageUploadStart = e, this
        }, r.prototype.onUploadImageTaskFinish = function(e) {
            return this.onImageUploadCompleted = e, this
        }, r.newPlaceHolder = function() {
            var e;
            return e = $("<span>").addClass(r.KalamuPlaceHolderClass)[0]
        }, r.prototype.newPlaceHolder = function() {
            return Kalamu.Editor.newPlaceHolder()
        }, r.prototype.makePlaceHolder = function(e) {
            var t;
            return null == e && (e = this.getRange()), e || ($("#note_title").focus(), this.editorElem.focus(), e = this.getRange()), e ? (t = this.newPlaceHolder(), e.insertNode(t), t) : null
        }, r.prototype.resumePlaceHolder = function(e) {
            return e && (this.selection.setBefore(e), $(e).remove()), this.editorElem.focus()
        }, r.prototype.handleLink = function(e, t) {
            var n;
            return null == t && (t = null), this.triggerCommandBefore(), t ? ($(e).replaceWith(t), Maleskine.BrowserDetector.isMozilla() ? (n = $(this.newPlaceHolder()).html("&nbsp;"), t.after(n), this.selection.setAfter(n), n.contents().unwrap()) : this.selection.setAfter(t[0])) : (this.selection.setBefore($(e)[0]), $(e).remove()), this.triggerCommandAfter()
        }, r.prototype.videoCount = function() {
            var e;
            return e = this.editorElem.find(".video-package"), e.length
        }, r.prototype.insertVideo = function(e, t) {
            var n, i, r;
            if (this.triggerCommandBefore(), t) {
                for (t = $(t), n = t, i = t.parent(); !i.is(this.editorElem);) n = i, i = n.parent();
                return r = '<div class="video-package currentVideo" data-video-id="' + e.video_id + '" data-video-url="' + e.video_url + '" data-flash-url="' + e.flash_url + '" data-provider="' + e.provider + '" data-cover-uuid="' + e.cover_id + '">', r += this.composer.video_maker(e.video_url, 480, 400, e.provider, e.flash_url), r += "<br>", r += '<div class="video-description">' + e.description + "</div>", r += "</div>", r = $(r), 0 === n.text().trim().length ? n.before(r) : n.after(r)
            }
        }, r.prototype.afterInsertVideo = function(e) {
            var t, n, i, r, o, a, s, l;
            return this.editorElem.focus(), r = this.selection.getRange(), r.deleteContents(), r.setStartBefore(e), r.setEndBefore(e), this.selection.applyRange(r), $(e).remove(), l = $(".currentVideo"), l.removeClass("currentVideo"), l = l[0], l.getBoundingClientRect && Maleskine.BrowserDetector.canScrollManually() && (n = this.editorElem[0], i = n.getBoundingClientRect(), o = l.getBoundingClientRect(), s = n.scrollTop + i.top, t = s + i.height, a = 0, o.top > t ? a = o.bottom - t : o.bottom < s && (a = o.top - s), n.scrollTop += a), this.triggerCommandAfter(), this.editorElem.trigger("newsentence:composer")
        }, r.prototype.insertImage = function(e, t, n, i, r, o, a, s) {
            var l, c, u, d, h, p, f, g, m, v, b;
            if (null == a && (a = ""), null == s && (s = ""), this.triggerCommandBefore(), d = n ? " data-image-slug='" + n + "'" : "", p = i ? " data-width='" + i + "'" : "", u = r ? " data-height='" + r + "'" : "", s && s.length > 0 ? (b = t, h = s) : (b = Writer.UploadImage.getRegularizedImageURL(t, o), h = b.origin, b = b.zoomed), m = $("<img src='" + b + "' data-original-src='" + h + "'" + d + p + u + ">"), g = $("<div class='image-caption'>" + a + "</div>"), f = $("<div class='image-package'></div>").append(m, $("<br>"), g), c = e.parentElement, c || (v = this.selection.getRange(), v.deleteContents(), c = v.commonAncestorContainer), c === this.editorElem[0]) $(e).replaceWith(f), this.selection.setAfter(f[0]);
            else {
                for (; c && c.parentElement !== this.editorElem[0];) c = c.parentElement;
                $(c).after(f[0]), $(e).remove()
            }
            return l = this.editorElem.children(), f.is(l[l.length - 1]) && f.after($("<p><br></p>")), this.triggerCommandAfter(), this.selection.selectNodeContents(g[0]), f
        }, r.prototype.findNodeWithTags = function(e, t) {
            var n;
            for ($.isArray(t) || (t = [t]); e;) {
                if (3 !== e.nodeType && (n = e.tagName, i.call(t, n) >= 0)) return e;
                e = e.parentNode
            }
            return null
        }, r.prototype.triggerCommandBefore = function() {
            return this.composer.editorElem.trigger("beforecommand:composer")
        }, r.prototype.triggerCommandAfter = function() {
            return this.composer.editorElem.trigger("aftercommand:composer")
        }, r.prototype.createPopMenu = function(e, t, n, i, r) {
            var o, a, s, l, c, u, d;
            return null == e && (e = ""), null == n && (n = ""), null == r && (r = !1), isNaN(i) && (i = 0), d = $('<li class="menu"></li>'), l = $("<a class='submenu-cover " + e + "' data-toggle='tooltip' data-original-title='" + t + "'>" + n + "</a>").appendTo(d), u = $("<ul class='submenu'></ul>").appendTo(d), c = null, s = !0, a = 0, o = [], d.mouseout(function() {
                var e;
                if (!s) return void(c = null);
                if (null !== c && 0 !== a && (e = $(u.children()[0]), !c.is(e))) return setTimeout(function() {
                    var t;
                    return t = e.data("index_in_submenu"), 0 === t ? o[1].before(e) : o[t - 1].after(e), o[0].before(c), c = null
                }, 200)
            }), d.add = function(e) {
                var t, n, i, r;
                return e.data("index_in_submenu", a), o[a] = e, a += 1, u.append(e), t = e.find("a"), i = t.attr("class"), n = t.attr("data-original-title"), r = t.html(), t = null, e.mousedown(function() {
                    return l.attr("class", i).attr("data-original-title", n).html(r), c = e
                })
            }, r ? (d.expand = function() {}, d.fold = function() {}, d.count = function() {
                return 1
            }) : (d.expand = function() {
                var e, t;
                if (s && a > 0) return s = !1, d.removeClass("menu"), u.removeClass("submenu"), u.addClass("inline_menu"), l.css({
                    display: "none"
                }), e = $(u.children()[0]), t = e.data("index_in_submenu"), 0 === t ? o[1].before(e) : o[t - 1].after(e), e = o[0].find("a"), l.attr("class", e.attr("class")).attr("data-original-title", e.attr("data-original-title")).html(e.html())
            }, d.fold = function() {
                return s && a > 0 ? void 0 : (s = !0, d.addClass("menu"), u.addClass("submenu"), u.removeClass("inline_menu"), l.css({
                    display: ""
                }))
            }, d.count = function() {
                return a
            }), d.foldIndex = function() {
                return i
            }, this.subMenus.push(d), d
        }, r.prototype.buildToolbar = function() {
            var e, t, n, i;
            return t = null, this.bar = $("<ul class='toolbar clearfix'></ul>"), n = function(e) {
                return e
            }, i = !Maleskine.BrowserDetector.lessThanIE8(), n = i ?
                function(e) {
                    return t.add(e)
                } : function(e) {
                return function(t) {
                    return e.bar.append(t)
                }
            }(this), i && (t = this.createPopMenu("fa fa-bold", I18n.t("toolbar.bold")), this.bar.append(t)), e = $("<li><a class='fa fa-bold' data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.bold") + "'></a></li>"), e.mousedown(function(e) {
                return function(t) {
                    return t.preventDefault(), e.canExecuteNormalCommand() ? (e.triggerCommandBefore(), document.execCommand("bold"), e.triggerCommandAfter()) : void 0
                }
            }(this)), n(e), e = $("<li><a class='fa fa-italic' data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.italic") + "'></a></li>"), e.mousedown(function(e) {
                return function(t) {
                    return t.preventDefault(), e.canExecuteNormalCommand() ? (e.triggerCommandBefore(), document.execCommand("italic"), e.triggerCommandAfter()) : void 0
                }
            }(this)), n(e), e = $("<li><a class='fa fa-strikethrough' data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.strikethrough") + "'></a></li>"), e.mousedown(function(e) {
                return function(t) {
                    return t.preventDefault(), e.canExecuteNormalCommand() ? (e.triggerCommandBefore(), document.execCommand("strikethrough"), e.triggerCommandAfter()) : void 0
                }
            }(this)), n(e), e = $("<li><a class='fa fa-quote-left' data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.blockquote") + "'></a></li>"), e.mousedown(function(e) {
                return function(t) {
                    return t.preventDefault(), e.canExecuteNormalCommand() ? (e.triggerCommandBefore(), e.toggleBlockTag("blockquote"), e.triggerCommandAfter()) : void 0
                }
            }(this)), this.bar.append(e), this.bar.append(""), i && (t = this.createPopMenu("", I18n.t("toolbar.heading1"), "H1", 9), this.bar.append(t)), e = $("<li><a data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.heading1") + "'>H1</a></li>"), e.mousedown(function(e) {
                return function(t) {
                    return t.preventDefault(), e.canExecuteNormalCommand() ? (e.triggerCommandBefore(), e.toggleBlockTag("H1"), e.triggerCommandAfter()) : void 0
                }
            }(this)), n(e), e = $("<li><a data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.heading2") + "'>H2</a></li>"), e.mousedown(function(e) {
                return function(t) {
                    return t.preventDefault(), e.canExecuteNormalCommand() ? (e.triggerCommandBefore(), e.toggleBlockTag("H2"), e.triggerCommandAfter()) : void 0
                }
            }(this)), n(e), e = $("<li><a data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.heading3") + "'>H3</a></li>"), e.mousedown(function(e) {
                return function(t) {
                    return t.preventDefault(), e.canExecuteNormalCommand() ? (e.triggerCommandBefore(), e.toggleBlockTag("H3"), e.triggerCommandAfter()) : void 0
                }
            }(this)), n(e), e = $("<li><a data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.heading4") + "'>H4</a></li>"), e.mousedown(function(e) {
                return function(t) {
                    return t.preventDefault(), e.canExecuteNormalCommand() ? (e.triggerCommandBefore(), e.toggleBlockTag("H4"), e.triggerCommandAfter()) : void 0
                }
            }(this)), n(e), this.bar.append(""), /Chrome\/(.*?) /.test(window.navigator.appVersion) && "33.0.1750.152" === window.navigator.appVersion.match(/Chrome\/(.*?) /)[1] || !Maleskine.BrowserDetector.isNotIE8NorIE9() || (i && (t = this.createPopMenu("fa fa-link", I18n.t("toolbar.insert_link")), this.bar.append(t)), e = $("<li><a class='fa fa-minus-no-use' data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.headline") + "'>\u2014</a></li>"), e.mousedown(function(e) {
                return function(t) {
                    var n, i, r, o;
                    return t.preventDefault(), o = e.getRange(), o && (r = o.endContainer, 3 === r.nodeType && (r = r.parentNode), e.editorElem[0].contains(r)) ? (e.triggerCommandBefore(), document.queryCommandSupported("insertHorizontalRule") ? document.execCommand("insertHorizontalRule") : (r = $(r), n = $("<hr />"), r.after(n), n[0].nextElementSibling || (i = $("<p></p>"), n.after(i))), e.triggerCommandAfter()) : void 0
                }
            }(this)), n(e), e = $("<li data-shortcut='ctrl-k' data-mac-shortcut='cmd-k'><a class='' data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.insert_link") + "'><i class='fa fa-link'></i></a></li>"), e.mousedown(function(e) {
                return function(t) {
                    var n, i, r, o, a, s, l, c, u, d, h;
                    if (t.preventDefault(), u = e.getRange(), e.canExecuteNormalCommand(u)) {
                        for (n = u.getNodes([1]), i = null, o = 0, s = n.length; s > o; o++) if (c = n[o], $(c).is("a")) {
                            i = c;
                            break
                        }
                        for (i || (i = e.findNodeWithTags(u.endContainer, "A")), n = u.getNodes(), r = !0, a = 0, l = n.length; l > a; a++) if (c = n[a], 3 !== c.nodeType) {
                            r = !1;
                            break
                        }
                        return r ? (d = $("<div>").html(u.cloneContents()).text(), u.deleteContents(), h = document.createTextNode(d), u.insertNode(h), e.linkModal.open(i, h)) : e.linkModal.open(i)
                    }
                }
            }(this)), n(e), e = $("<li data-shortcut='ctrl-p' data-mac-shortcut='cmd-p'><a class='fa fa-picture-o' data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.insert_image") + "'></a></li>"), e.mousedown(function(e) {
                return function(t) {
                    var n;
                    return t.preventDefault(), (n = e.getRange()) ? e.imageModal.open() : void 0
                }
            }(this)), n(e), e = $("<li><a class='fa fa-youtube-play' data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.insert_video") + "'></a></li>"), e.mousedown(function(e) {
                return function(t) {
                    var n;
                    return t.preventDefault(), (n = e.getRange()) ? e.videoModal.open() : void 0
                }
            }(this)), n(e)), i && (t = this.createPopMenu("", I18n.t("toolbar.insert_link"), "<i class='fa fa-undo'></i>", 10), this.bar.append(t)), e = $("<li><a data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.undo") + "'><i class='fa fa-undo'></i></a></li>"), e.mousedown(function(e) {
                return function(t) {
                    return t.preventDefault(), e.composer.undoManager.undo()
                }
            }(this)), n(e), e = $("<li><a data-toggle='tooltip' data-original-title='" + I18n.t("toolbar.redo") + "'><i class='fa fa-repeat'></i></a></li>"), e.mousedown(function(e) {
                return function(t) {
                    return t.preventDefault(), e.composer.undoManager.redo()
                }
            }(this)), n(e), this.bar.append(this.options.extra_buttons), i ? window.onresize = function(e) {
                return function() {
                    return e.resizeToolbar()
                }
            }(this) : void 0
        }, r.prototype.resizeToolbar = function() {
            var e, t, n, i, r, o, a, s, l, c, u, d, h, p, f, g, m, v;
            if (g = 100, e = this.bar.width() - g, s = this.resizeToolbar._lastBarWidth || 0, e !== s) {
                for (this.resizeToolbar._lastBarWidth = e, t = this.bar.children("li").length + 5 * this.bar.children(".publish-button-item").length, m = [], h = this.subMenus, r = 0, l = h.length; l > r; r++) d = h[r], m.push(d);
                for (m.sort(function(e, t) {
                    var n;
                    return n = e.foldIndex() - t.foldIndex(), 0 !== n ? n : e.count() - t.count()
                }), p = [50 * (t - m.length)], n = -1, i = o = 0, c = m.length; c > o; i = ++o) d = m[i], t = d.count() - 1, v = p[i] + 50 * t, p.push(v), v >= e && t > 0 && -1 === n && (n = i);
                for (-1 === n && (n = m.length), f = [], i = a = 0, u = m.length; u > a; i = ++a) d = m[i], f.push(n > i ? d.expand() : d.fold());
                return f
            }
        }, r.prototype.canExecuteNormalCommand = function(e) {
            return null == e && (e = this.getRange()), e && !this.isInsideImageBox(e.commonAncestorContainer)
        }, r.prototype.isInsideImageBox = function(e) {
            for (; e;) {
                if ($(e).hasClass("image-package")) return !0;
                e = e.parentElement
            }
            return !1
        }, r.prototype.jumpToPrevLine = function(e) {
            var t;
            return t = $(e).prev(), t.is("p") ? "" === t.text() && t.html("<br>") : (t = $("<p>").append($("<br>")), $(e).before(t)), this.selection.selectNodeContents(t[0])
        }, r.prototype.jumpToNextLine = function(e) {
            var t;
            return t = $(e).next(), t.is("p") ? "" === t.text() && t.html("<br>") : (t = $("<p>").append($("<br>")), $(e).after(t)), this.selection.selectNodeContents(t[0], !0)
        }, r.prototype.registerResizeEvent = function() {
            return Kalamu.Editor.callbackNeedResizeToolbar && (Spine.unbind("back-to-normal-mode", Kalamu.Editor.callbackNeedResizeToolbar), Spine.unbind("enter-writing-mode", Kalamu.Editor.callbackNeedResizeToolbar)), Kalamu.Editor.callbackNeedResizeToolbar = function(e) {
                return function() {
                    return e.resizeToolbar()
                }
            }(this), Spine.bind("back-to-normal-mode", Kalamu.Editor.callbackNeedResizeToolbar), Spine.bind("enter-writing-mode", Kalamu.Editor.callbackNeedResizeToolbar)
        }, r.prototype.registerImageHandlerEvents = function() {
            var e, t, n, i, r;
            return this.editorElem.on("keydown", function(o) {
                return function(a) {
                    var s, l, c, u, d, h, p, f, g, m;
                    return (f = o.getRange()) ? (m = !1, d = a.which, g = $(f.startContainer), c = $(f.endContainer), d !== Kalamu.Keys.CTRL && d !== Kalamu.Keys.ALT && d !== Kalamu.Keys.SHIFT && d !== Kalamu.Keys.COMMAND && d !== Kalamu.Keys.WIN && d !== Kalamu.Keys.ESC && d !== Kalamu.Keys.CAP && d !== Kalamu.Keys.MENU && d !== Kalamu.Keys.HOME && d !== Kalamu.Keys.END && d !== Kalamu.Keys.PAGEUP && d !== Kalamu.Keys.PAGEDOWN && d !== Kalamu.Keys.PRTSRN && d !== Kalamu.Keys.UP && d !== Kalamu.Keys.DOWN && d !== Kalamu.Keys.LEFT && d !== Kalamu.Keys.Right && (h = !1, u = r($(f.commonAncestorContainer)), u || (f.startContainer !== f.endContainer || f.startOffset !== f.endOffset) && (h = !0), h ? (l = !1, n(g) && (s = i(g), f.setStartBefore(s[0]), l = !0), n(c) && (s = i(c), c = s.next(), c.length > 0 && (c.is(".image-package") || c.is(".video-package")) ? (c = $("<p><br></p>"), s.after(c), f.setEndBefore(c[0])) : f.setEndAfter(s[0]), l = !0), l && (o.selection.applyRange(f), o.scrollToRange(f))) : u && (d === Kalamu.Keys.BACKSPACE_KEY ? f.collapsed ? (g[0].nodeType === Kalamu.Keys.NODE_TYPES.TEXT_TYPE ? (p = g.parent(), p.parents(".image-package").length > 0 ? p.is(".image-caption") || (p = p.parents(".image-caption")) : p.parents(".video-package").length > 0 && (p.is(".video-description") || (p = p.parents(".video-description")))) : g.is(".image-caption") || g.is(".video-description") ? p = g : (p = g.parents(".image-caption"), p && 0 !== p.length || (p = g.parents(".video-description"))), e(g, f.startOffset, p) && (m = !0)) : (f.deleteContents(), m = !0) : d === Kalamu.Keys.DELETE_KEY ? f.collapsed ? (c[0].nodeType === Kalamu.Keys.NODE_TYPES.TEXT_TYPE ? (p = c.parent(), p.parents(".image-package").length > 0 ? p.is(".image-caption") || (p = p.parents(".image-caption")) : p.parents(".video-package").length > 0 && (p.is(".video-description") || (p = p.parents(".video-description")))) : (p = c.parents(".image-caption"), p && 0 !== p.length || (p = c.parents(".video-description"))), t(c, f.startOffset, p) && (m = !0)) : (f.deleteContents(), m = !0) : d === Kalamu.Keys.ENTER_KEY && (m = !0, p = c.parent(), (c.is(".image-caption") || c.is(".video-description")) && 0 === c.text().length ? (c = $("<p><br></p>"), p.after(c), f.setStart(c[0]), f.setEnd(c[0]), o.selection.applyRange(f), o.scrollToRange(f)) : t(c, f.endOffset, p) ? (c = $("<p><br></p>"), p.parent().after(c), f.setStart(c[0]), f.setEnd(c[0]), o.selection.applyRange(f), o.scrollToRange(f)) : e(c, f.endOffset, p) && (c = $("<p><br></p>"), p.parent().before(c), f.setStart(c[0]), f.setEnd(c[0]), o.selection.applyRange(f), o.scrollToRange(f))))), m ? (a.stopPropagation(), a.preventDefault()) : void 0) : void 0
                }
            }(this)), this.editorElem.on("keyup", function(e) {
                return function(t) {
                    var o, a, s, l, c, u, d, h, p;
                    if (d = e.getRange(), d && (u = t.which, u === Kalamu.Keys.UP || u === Kalamu.Keys.DOWN || u === Kalamu.Keys.LEFT || u === Kalamu.Keys.RIGHT)) {
                        if (l = !1, h = $(d.startContainer), s = $(d.endContainer), d.startContainer !== d.endContainer) {
                            if (c = r($(d.commonAncestorContainer))) return;
                            n(h) && (a = i(h), d.setStartBefore(a[0]), l = !0), n(s) && (a = i(s), d.setEndAfter(a[0]), l = !0)
                        } else n(h) && !r(h) && (a = i(h), o = a.find(".image-caption"), o && 0 !== o.length || (o = a.find(".video-description")), l = !0, u === Kalamu.Keys.LEFT || u === Kalamu.Keys.UP ? (a = a.prev(), a.length < 1 ? (d.setStart(o[0]), d.setEnd(o[0])) : (p = $('<span class="temp">'), a.append(p), d.setStartBefore(p[0]), d.setEndBefore(p[0]), p.remove())) : (u === Kalamu.Keys.RIGHT || u === Kalamu.Keys.DOWN) && (d.setStart(o[0]), d.setStart(o[0])));
                        return l ? (e.selection.applyRange(d), e.scrollToRange(d)) : void 0
                    }
                }
            }(this)), this.editorElem.on("click", "div.image-package, div.video-package", function(e) {
                return function(t) {
                    var n;
                    return n = $(t.srcElement || t.target), n.is(".image-caption") || n.is(".video-description") || n.parents("image-caption").length > 0 || n.parents(".video-description").length > 0 ? (t.stopPropagation(), t.preventDefault()) : e.selection.selectNode(t.currentTarget)
                }
            }(this)), n = function(e) {
                return e.is(".image-package") ? !0 : e.is(".video-package") ? !0 : e.parents(".image-package").length > 0 ? !0 : e.parents(".video-package").length > 0 ? !0 : e[0].nodeType === Kalamu.Keys.NODE_TYPES.TEXT_TYPE ? (e = e.parent(), n(e)) : !1
            }, r = function(e) {
                return e.is(".image-caption") ? !0 : e.is(".video-description") ? !0 : e.parents(".image-caption").length > 0 ? !0 : e.parents(".video-description").length > 0 ? !0 : e[0].nodeType === Kalamu.Keys.NODE_TYPES.TEXT_TYPE ? (e = e.parent(), n(e)) : !1
            }, i = function() {
                return function(e) {
                    var t;
                    return e.is(".image-package") ? e : e.is(".video-package") ? e : (t = e.parents(".image-package"), t.length > 0 ? t : (t = e.parents(".video-package"), t.length > 0 ? t : e))
                }
            }(this), e = function() {
                return function(t, n, i) {
                    var r, o;
                    return 0 !== n ? !1 : t[0] === i[0] && 0 === n ? !0 : (r = t.parent(), o = r[0].childNodes[0], t[0] === o ? r[0] === i[0] ? !0 : e(r, n, i) : !1)
                }
            }(this), t = function() {
                return function(t, n, i) {
                    var r, o;
                    return n !== t.text().length ? !1 : (r = t.parent(), o = r[0].childNodes, o = o[o.length - 1], t[0] === o ? r[0] === i[0] ? !0 : e(r, r.text().length, i) : !1)
                }
            }(this)
        }, r.prototype.registerBlockElementHandlerEvents = function() {
            return this.editorElem.on("keydown:composer", function(e) {
                return function(t) {
                    var n, i, r, o, a, s, l, c, u, d, h, p;
                    if (c = e.getRange()) {
                        d = u = !1, a = t.keydownEvent.keyCode;
                        try {
                            n = $(e.getCurrentContainer(c))
                        } catch (o) {
                            return void(t = o)
                        }
                        if (n.is("pre") || n.is("blockquote")) {
                            if (a === Kalamu.Keys.ENTER_KEY) {
                                if (i = n.contents(), r = $(e.getCurrentParagraph(c)), r[0] === i.last()[0] && "" === r.text()) e.jumpToNextLine(n);
                                else {
                                    if (c.collapsed || c.deleteContents(), s = r.contents().last()[0], p = e.selection.getTextNodes(s), h = p && p[p.length - 1], h && c.setEnd(h, h.length), i = $("<div>").append(c.cloneContents()).contents(), c.deleteContents(), l = $("<p>"), i.length > 0 ? l.append(i) : Maleskine.BrowserDetector.isIE() || l.html("<br>"), l = l[0], 0 === r.length) return;
                                    r.html().length < 1 && r.html("<br>"), r.after(l), e.selection.selectNodeContents(l, !0)
                                }
                                d = !1, u = !0
                            }
                            return t.stopDefault = u, t.stopKalamuKeydown = d
                        }
                    }
                }
            }(this))
        }, r.prototype.content = function() {
            var e, t, n, i, o, a, s, l, c;
            if (this.editorElem.html() === this._kalamu_originHtml) return this._kalamu_content;
            for (this.composer.clearTmpElement(), e = this.editorElem.clone(!0), e.find("span." + r.KalamuPlaceHolderClass).remove(), e.find("p").each(function() {
                return function(e, t) {
                    var n;
                    return n = t.innerHTML, n = n.replace(/\s+$/, ""), t.innerHTML = n
                }
            }(this)), e.find("img").each(function() {
                return function(e, t) {
                    var n, i, r;
                    return t = $(t), t.removeAttr("height").removeAttr("width"), n = t.parent(), n.is(".kalamu-area") ? (n = $('<div class="image-package">'), t.before(n), n.append(t), n.append($("<br>")), n.append($('<div class="image-caption">'))) : n.is("div") ? n.is(".image-package") ? n.is(".image-uploading") ? n.is(".upload-failed") ? n.remove() : (n.attr("class", "image-package"), n.find(".image-upload-status").remove()) : n.attr("class", "image-package") : (i = $('<div class="image-package">'), n.before(i), i.append(t), i.append($("<br>")), i.append($('<div class="image-caption">')), n.remove()) : (i = $('<div class="image-package">'), n.before(i), i.append(t), i.append($("<br>")), i.append($('<div class="image-caption">')), 0 === n.text().trim().length && n.remove()), r = t.attr("src"), 0 === r.indexOf("file://") || 0 === r.indexOf("blob:") || 0 === r.indexOf("data:") ? n.remove() : r.match(/^http:\/\/(\w+\.)?qpic\.cn/) && (r = r.split("?"), r.length > 1 && (r[2] = [], r[1].split("&").map(function(e) {
                        return "tp=webp" !== e ? r[2].push(e) : void 0
                    }), r[2].length > 0)) ? (r[1] = r[2].join("&"), r = r[0] + "?" + r[1], t.attr("src", r)) : void 0
                }
            }(this)), e.find("a").each(function() {
                return function(e, t) {
                    var n;
                    return t = $(t), n = t.attr("target"), "_blank" !== n ? t.attr("target", "_blank") : void 0
                }
            }(this)), e.find("div.video-package").each(function() {
                return function(e, t) {
                    return t = $(t), t.removeAttr("contenteditable"), t.removeAttr("flag-generated"), t.find(".player").remove()
                }
            }(this)), t = e.contents().toArray(), i = o = s = t.length - 1; o >= 0 && (n = $(t[i]), n.is("p") && 0 === n.text().replace(/[\n ]/gi, "").length); i = o += -1) n.remove();
            for (i = a = 0, l = t.length - 1;
                 (l >= 0 ? l >= a : a >= l) && (n = $(t[i]), n.is("p") && 0 === n.text().replace(/[\n ]/gi, "").length); i = l >= 0 ? ++a : --a) n.remove();
            return t = e.html(), t = t.replace(/<(\/?)(.*?)>/gi, function(e) {
                return function(t, n, i) {
                    return i = i.trim(), i.indexOf(" ") > 0 && (i = i.split(" ")[0]), i = i.toLowerCase(), e.allowTags.indexOf(i) < 0 ? "" : t
                }
            }(this)), e.html(t), c = [this.editorElem.html(), e.html()], this._kalamu_originHtml = c[0], this._kalamu_content = c[1], this._kalamu_content
        }, r.prototype.blockUserActions = function() {
            var e;
            if (null == this._editor_block_div) return this._editor_block_div = $("<div>").attr("style", "position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1600; background: rgba(0, 0, 0, 0.6);"), e = $("<img src=" + Maleskine.Images["writer-upload-img.gif"] + ">").attr("style", "position: fixed; top: 50%; left: 50%; width: 160px; height: 40px; margin: 0px; margin-left: -80px; margin-top: -20px;").appendTo(this._editor_block_div), $("body").append(this._editor_block_div)
        }, r.prototype.unBlockUserActions = function() {
            return this._editor_block_div ? (this._editor_block_div.remove(), this._editor_block_div = null) : void 0
        }, r.prototype.notification = function(e, t) {
            var n;
            return n = {
                text: e,
                layout: "maleskineTopCenter",
                type: "maleskineInformation",
                closeWith: ["button"]
            }, t > 0 && $.extend(n, {
                timeout: t
            }), noty(n)
        }, r
    }(Kalamu.Helper)
}.call(this), function() {
    Kalamu.Keys = {
        Z_KEY: 90,
        Y_KEY: 89,
        BACKSPACE_KEY: 8,
        DELETE_KEY: 46,
        SPACE_KEY: 32,
        ENTER_KEY: 13,
        TAB_KEY: 9,
        SEMI_COLON_KEY: 186,
        COMMA_KEY: 188,
        DOT_KEY: 190,
        QUOTE_KEY: 222,
        FORWARD_SLASH_KEY: 191,
        BACKWARD_SLASH_KEY: 220,
        GRAVE_KEY: 192,
        EXCLAMATION_KEY: 49,
        AT_KEY: 0,
        SHARP_KEY: 0,
        DOLLAR_KEY: 0,
        PERSENT_KEY: 0,
        CIRCUMFLEX_KEY: 0,
        AMPERSAND_KEY: 0,
        ASTERISK_KEY: 0,
        EQUAL_KEY: 187,
        MINUS_KEY: 189,
        LEFT_BRACKET_KEY: 219,
        RIGHT_BRACKET_KEY: 221,
        LEFT_PARENTHESES_KEY: 57,
        RIGHT_PARENTHESES_KEY: 48,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        CTRL: 17,
        ALT: 18,
        COMMAND: 91,
        WIN: 92,
        SHIFT: 16,
        ESC: 27,
        CAP: 20,
        MENU: 93,
        HOME: 36,
        END: 35,
        PAGEUP: 33,
        PAGEDOWN: 34,
        PRTSRN: 44,
        NODE_TYPES: {
            TEXT_TYPE: 3
        }
    }
}.call(this), "object" != typeof JSON && (JSON = {}), function() {
    "use strict";

    function f(e) {
        return 10 > e ? "0" + e : e
    }
    function this_value() {
        return this.valueOf()
    }
    function quote(e) {
        return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function(e) {
            var t = meta[e];
            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }
    function str(e, t) {
        var n, i, r, o, a, s = gap,
            l = t[e];
        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
            case "string":
                return quote(l);
            case "number":
                return isFinite(l) ? String(l) : "null";
            case "boolean":
            case "null":
                return String(l);
            case "object":
                if (!l) return "null";
                if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                    for (o = l.length, n = 0; o > n; n += 1) a[n] = str(n, l) || "null";
                    return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, r
                }
                if (rep && "object" == typeof rep) for (o = rep.length, n = 0; o > n; n += 1)"string" == typeof rep[n] && (i = rep[n], r = str(i, l), r && a.push(quote(i) + (gap ? ": " : ":") + r));
                else for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (r = str(i, l), r && a.push(quote(i) + (gap ? ": " : ":") + r));
                return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, r
        }
    }
    var rx_one = /^[\],:{}\s]*$/,
        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
        rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
    var gap, indent, meta, rep;
    "function" != typeof JSON.stringify && (meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, JSON.stringify = function(e, t, n) {
        var i;
        if (gap = "", indent = "", "number" == typeof n) for (i = 0; n > i; i += 1) indent += " ";
        else "string" == typeof n && (indent = n);
        if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
        return str("", {
            "": e
        })
    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(e, t) {
            var n, i, r = e[t];
            if (r && "object" == typeof r) for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
            return reviver.call(e, t, r)
        }
        var j;
        if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), function() {
    var e, t, n, i, r, o, a, s, l, c, u, d, h = [].slice,
        p = [].indexOf ||
            function(e) {
                for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
                return -1
            }, f = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) g.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        }, g = {}.hasOwnProperty, m = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
    n = {
        bind: function(e, t) {
            var n, i, r, o, a;
            for (i = e.split(" "), this.hasOwnProperty("_callbacks") && this._callbacks || (this._callbacks = {}), r = 0, o = i.length; o > r; r++) a = i[r], (n = this._callbacks)[a] || (n[a] = []), this._callbacks[a].push(t);
            return this
        },
        one: function(e, t) {
            var n;
            return this.bind(e, n = function() {
                return this.unbind(e, n), t.apply(this, arguments)
            })
        },
        trigger: function() {
            var e, t, n, i, r, o, a;
            if (e = 1 <= arguments.length ? h.call(arguments, 0) : [], n = e.shift(), o = this.hasOwnProperty("_callbacks") && (null != (a = this._callbacks) ? a[n] : void 0)) {
                for (i = 0, r = o.length; r > i && (t = o[i], t.apply(this, e) !== !1); i++);
                return !0
            }
        },
        listenTo: function(e, t, n) {
            return e.bind(t, n), this.listeningTo || (this.listeningTo = []), this.listeningTo.push({
                obj: e,
                ev: t,
                callback: n
            }), this
        },
        listenToOnce: function(e, t, n) {
            var i, r;
            return r = this.listeningToOnce || (this.listeningToOnce = []), e.bind(t, i = function() {
                var o, a, s, l, c;
                for (a = -1, o = s = 0, l = r.length; l > s; o = ++s) c = r[o], c.obj === e && c.ev === t && c.callback === n && (a = o);
                return e.unbind(t, i), -1 !== a && r.splice(a, 1), n.apply(this, arguments)
            }), r.push({
                obj: e,
                ev: t,
                callback: n,
                handler: i
            }), this
        },
        stopListening: function(t, n, i) {
            var r, o, a, s, l, c, u, d, h, f, g, m, v, b, y;
            if (0 === arguments.length) {
                for (v = [this.listeningTo, this.listeningToOnce], l = 0, d = v.length; d > l; l++) if (g = v[l]) for (c = 0, h = g.length; h > c; c++) m = g[c], m.obj.unbind(m.ev, m.handler || m.callback);
                return this.listeningTo = void 0, this.listeningToOnce = void 0
            }
            if (t) {
                for (b = [this.listeningTo, this.listeningToOnce], y = [], u = 0, f = b.length; f > u; u++) g = b[u], g && (n = n ? n.split(" ") : [void 0], y.push(function() {
                    var t, l, c;
                    for (c = [], l = 0, t = n.length; t > l; l++) o = n[l], c.push(function() {
                        var t, n, l;
                        for (l = [], s = t = n = g.length - 1; 0 >= n ? 0 >= t : t >= 0; s = 0 >= n ? ++t : --t) m = g[s], i && (m.handler || m.callback) !== i || (o && o !== m.ev ? o ? (a = m.ev.split(" "), p.call(a, o) >= 0 ? (a = function() {
                            var e, t, n;
                            for (n = [], t = 0, e = a.length; e > t; t++) r = a[t], r !== o && n.push(r);
                            return n
                        }(), m.ev = e.trim(a.join(" ")), l.push(m.obj.unbind(o, m.handler || m.callback))) : l.push(void 0)) : l.push(void 0) : (m.obj.unbind(m.ev, m.handler || m.callback), l.push(-1 !== s ? g.splice(s, 1) : void 0)));
                        return l
                    }());
                    return c
                }()));
                return y
            }
        },
        unbind: function(e, t) {
            var n, i, r, o, a, s, l, c, u, d;
            if (0 === arguments.length) return this._callbacks = {}, this;
            if (!e) return this;
            for (i = e.split(" "), o = 0, s = i.length; s > o; o++) if (u = i[o], c = null != (d = this._callbacks) ? d[u] : void 0) if (t) {
                for (r = a = 0, l = c.length; l > a; r = ++a) if (n = c[r], n === t) {
                    c = c.slice(), c.splice(r, 1), this._callbacks[u] = c;
                    break
                }
            } else delete this._callbacks[u];
            return this
        }
    }, n.on = n.bind, n.off = n.unbind, i = {
        trace: !0,
        logPrefix: "(App)",
        log: function() {
            var e;
            return e = 1 <= arguments.length ? h.call(arguments, 0) : [], this.trace ? (this.logPrefix && e.unshift(this.logPrefix), "undefined" != typeof console && null !== console && "function" == typeof console.log && console.log.apply(console, e), this) : void 0
        }
    }, d = ["included", "extended"], o = function() {
        function e() {
            "function" == typeof this.init && this.init.apply(this, arguments)
        }
        return e.include = function(e) {
            var t, n, i;
            if (!e) throw new Error("include(obj) requires obj");
            for (t in e) i = e[t], p.call(d, t) < 0 && (this.prototype[t] = i);
            return null != (n = e.included) && n.apply(this), this
        }, e.extend = function(e) {
            var t, n, i;
            if (!e) throw new Error("extend(obj) requires obj");
            for (t in e) i = e[t], p.call(d, t) < 0 && (this[t] = i);
            return null != (n = e.extended) && n.apply(this), this
        }, e.proxy = function(e) {
            return function(t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }(this)
        }, e.prototype.proxy = function(e) {
            return function(t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }(this)
        }, e
    }(), r = function(t) {
        function i(e) {
            i.__super__.constructor.apply(this, arguments), null != this.constructor.uuid && "function" == typeof this.constructor.uuid ? (this.cid = this.constructor.uuid(), this.id || (this.id = this.cid)) : this.cid = (null != e ? e.cid : void 0) || this.constructor.uid("c-"), e && this.load(e)
        }
        return f(i, t), i.extend(n), i.records = [], i.irecords = {}, i.attributes = [], i.configure = function() {
            var e, t;
            return t = arguments[0], e = 2 <= arguments.length ? h.call(arguments, 1) : [], this.className = t, this.deleteAll(), e.length && (this.attributes = e), this.attributes && (this.attributes = u(this.attributes)), this.attributes || (this.attributes = []), this.unbind(), this
        }, i.toString = function() {
            return this.className + "(" + this.attributes.join(", ") + ")"
        }, i.find = function(e, t) {
            var n, i;
            return null == t && (t = this.notFound), n = null != (i = this.irecords[e]) ? i.clone() : void 0, n || ("function" == typeof t ? t(e) : void 0)
        }, i.notFound = function() {
            return null
        }, i.exists = function(e) {
            return this.irecords[e] ? !0 : !1
        }, i.addRecord = function(e) {
            return e.id && this.irecords[e.id] && this.irecords[e.id].remove(), e.id || (e.id = e.cid), this.records.push(e), this.irecords[e.id] = e, this.irecords[e.cid] = e
        }, i.refresh = function(e, t) {
            var n, i, r, o, a;
            for (null == t && (t = {}), t.clear && this.deleteAll(), o = this.fromJSON(e), l(o) || (o = [o]), n = 0, i = o.length; i > n; n++) r = o[n], this.addRecord(r);
            return this.sort(), a = this.cloneArray(o), this.trigger("refresh", a, t), a
        }, i.select = function(e) {
            var t, n, i, r, o;
            for (r = this.records, o = [], t = 0, n = r.length; n > t; t++) i = r[t], e(i) && o.push(i.clone());
            return o
        }, i.findByAttribute = function(e, t) {
            var n, i, r, o;
            for (o = this.records, n = 0, i = o.length; i > n; n++) if (r = o[n], r[e] === t) return r.clone();
            return null
        }, i.findAllByAttribute = function(e, t) {
            return this.select(function(n) {
                return n[e] === t
            })
        }, i.each = function(e) {
            var t, n, i, r, o;
            for (r = this.records, o = [], t = 0, n = r.length; n > t; t++) i = r[t], o.push(e(i.clone()));
            return o
        }, i.all = function() {
            return this.cloneArray(this.records)
        }, i.slice = function(e, t) {
            return null == e && (e = 0), this.cloneArray(this.records.slice(e, t))
        }, i.first = function(e) {
            var t;
            return null == e && (e = 1), e > 1 ? this.cloneArray(this.records.slice(0, e)) : null != (t = this.records[0]) ? t.clone() : void 0
        }, i.last = function(e) {
            var t;
            return "number" == typeof e ? this.cloneArray(this.records.slice(-e)) : null != (t = this.records[this.records.length - 1]) ? t.clone() : void 0
        }, i.count = function() {
            return this.records.length
        }, i.deleteAll = function() {
            return this.records = [], this.irecords = {}
        }, i.destroyAll = function(e) {
            var t, n, i, r, o;
            for (r = this.records, o = [], t = 0, n = r.length; n > t; t++) i = r[t], o.push(i.destroy(e));
            return o
        }, i.update = function(e, t, n) {
            return this.find(e).updateAttributes(t, n)
        }, i.create = function(e, t) {
            var n;
            return n = new this(e), n.save(t)
        }, i.destroy = function(e, t) {
            return this.find(e).destroy(t)
        }, i.change = function(e) {
            return "function" == typeof e ? this.bind("change", e) : this.trigger.apply(this, ["change"].concat(h.call(arguments)))
        }, i.fetch = function(e) {
            return "function" == typeof e ? this.bind("fetch", e) : this.trigger.apply(this, ["fetch"].concat(h.call(arguments)))
        }, i.toJSON = function() {
            return this.records
        }, i.fromJSON = function(e) {
            var t, n, i, r;
            if (e) {
                if ("string" == typeof e && (e = JSON.parse(e)), l(e)) {
                    for (i = [], t = 0, n = e.length; n > t; t++) r = e[t], i.push(new this(r));
                    return i
                }
                return new this(e)
            }
        }, i.fromForm = function() {
            var e;
            return (e = new this).fromForm.apply(e, arguments)
        }, i.sort = function() {
            return this.comparator && this.records.sort(this.comparator), this
        }, i.cloneArray = function(e) {
            var t, n, i, r;
            for (i = [], t = 0, n = e.length; n > t; t++) r = e[t], i.push(r.clone());
            return i
        }, i.idCounter = 0, i.uid = function(e) {
            var t;
            return null == e && (e = ""), t = e + this.idCounter++, this.exists(t) && (t = this.uid(e)), t
        }, i.prototype.isNew = function() {
            return !this.exists()
        }, i.prototype.isValid = function() {
            return !this.validate()
        }, i.prototype.validate = function() {}, i.prototype.load = function(e) {
            var t, n;
            e.id && (this.id = e.id);
            for (t in e) n = e[t], e.hasOwnProperty(t) && "function" == typeof this[t] ? this[t](n) : this[t] = n;
            return this
        }, i.prototype.attributes = function() {
            var e, t, n, i, r;
            for (r = {}, i = this.constructor.attributes, e = 0, n = i.length; n > e; e++) t = i[e], t in this && (r[t] = "function" == typeof this[t] ? this[t]() : this[t]);
            return this.id && (r.id = this.id), r
        }, i.prototype.eql = function(e) {
            return !(!e || e.constructor !== this.constructor || !(e.cid === this.cid || e.id && e.id === this.id))
        }, i.prototype.save = function(e) {
            var t, n;
            return null == e && (e = {}), e.validate !== !1 && (t = this.validate()) ? (this.trigger("error", t), !1) : (this.trigger("beforeSave", e), n = this.isNew() ? this.create(e) : this.update(e), this.stripCloneAttrs(), this.trigger("save", e), n)
        }, i.prototype.stripCloneAttrs = function() {
            var e, t;
            if (!this.hasOwnProperty("cid")) {
                for (e in this) g.call(this, e) && (t = this[e], p.call(this.constructor.attributes, e) >= 0 && delete this[e]);
                return this
            }
        }, i.prototype.updateAttribute = function(e, t, n) {
            var i;
            return i = {}, i[e] = t, this.updateAttributes(i, n)
        }, i.prototype.updateAttributes = function(e, t) {
            return this.load(e), this.save(t)
        }, i.prototype.changeID = function(e) {
            var t;
            if (e !== this.id) return t = this.constructor.irecords, t[e] = t[this.id], this.cid !== this.id && delete t[this.id], this.id = e, this.save()
        }, i.prototype.remove = function() {
            var e, t, n, i, r;
            for (r = this.constructor.records.slice(0), e = t = 0, n = r.length; n > t; e = ++t) if (i = r[e], this.eql(i)) {
                r.splice(e, 1);
                break
            }
            return this.constructor.records = r, delete this.constructor.irecords[this.id], delete this.constructor.irecords[this.cid]
        }, i.prototype.destroy = function(e) {
            return null == e && (e = {}), this.trigger("beforeDestroy", e), this.remove(), this.destroyed = !0, this.trigger("destroy", e), this.trigger("change", "destroy", e), this.listeningTo && this.stopListening(), this.unbind(), this
        }, i.prototype.dup = function(e) {
            var t;
            return null == e && (e = !0), t = this.attributes(), e ? delete t.id : t.cid = this.cid, new this.constructor(t)
        }, i.prototype.clone = function() {
            return s(this)
        }, i.prototype.reload = function() {
            var e;
            return this.isNew() ? this : (e = this.constructor.find(this.id), this.load(e.attributes()), e)
        }, i.prototype.refresh = function(e) {
            var t;
            return t = this.constructor.irecords[this.id], t.load(e), this.trigger("refresh"), this
        }, i.prototype.toJSON = function() {
            return this.attributes()
        }, i.prototype.toString = function() {
            return "<" + this.constructor.className + " (" + JSON.stringify(this) + ")>"
        }, i.prototype.fromForm = function(t) {
            var n, i, r, o, a, s, l, c, u, d, h, p, f, g;
            for (g = {}, h = e(t).find("[type=checkbox]:not([value])"), i = 0, s = h.length; s > i; i++) n = h[i], g[n.name] = e(n).prop("checked");
            for (p = e(t).find('[type=checkbox][name$="[]"]'), r = 0, l = p.length; l > r; r++) n = p[r], u = n.name.replace(/\[\]$/, ""), g[u] || (g[u] = []), e(n).prop("checked") && g[u].push(n.value);
            for (f = e(t).serializeArray(), a = 0, c = f.length; c > a; a++) o = f[a], g[d = o.name] || (g[d] = o.value);
            return this.load(g)
        }, i.prototype.exists = function() {
            return this.constructor.exists(this.id)
        }, i.prototype.update = function(e) {
            var t, n;
            return this.trigger("beforeUpdate", e), n = this.constructor.irecords, n[this.id].load(this.attributes()), this.constructor.sort(), t = n[this.id].clone(), t.trigger("update", e), t.trigger("change", "update", e), t
        }, i.prototype.create = function(e) {
            var t, n;
            return this.trigger("beforeCreate", e), this.id || (this.id = this.cid), n = this.dup(!1), this.constructor.addRecord(n), this.constructor.sort(), t = n.clone(), t.trigger("create", e), t.trigger("change", "create", e), t
        }, i.prototype.bind = function(e, t) {
            var n, i, r, o, a, s;
            for (this.constructor.bind(e, n = function(e) {
                return function(n) {
                    return n && e.eql(n) ? t.apply(e, arguments) : void 0
                }
            }(this)), a = e.split(" "), i = function(e) {
                return function(i) {
                    var r;
                    return e.constructor.bind("unbind", r = function(o, a, s) {
                        if (o && e.eql(o)) {
                            if (a && a !== i) return;
                            if (s && s !== t) return;
                            return e.constructor.unbind(i, n), e.constructor.unbind("unbind", r)
                        }
                    })
                }
            }(this), r = 0, o = a.length; o > r; r++) s = a[r], i(s);
            return this
        }, i.prototype.one = function(e, t) {
            var n;
            return this.bind(e, n = function(i) {
                return function() {
                    return i.unbind(e, n), t.apply(i, arguments)
                }
            }(this))
        }, i.prototype.trigger = function() {
            var e, t;
            return e = 1 <= arguments.length ? h.call(arguments, 0) : [], e.splice(1, 0, this), (t = this.constructor).trigger.apply(t, e)
        }, i.prototype.listenTo = function() {
            return n.listenTo.apply(this, arguments)
        }, i.prototype.listenToOnce = function() {
            return n.listenToOnce.apply(this, arguments)
        }, i.prototype.stopListening = function() {
            return n.stopListening.apply(this, arguments)
        }, i.prototype.unbind = function(e, t) {
            var n, i, r, o, a;
            if (0 === arguments.length) return this.trigger("unbind");
            if (e) {
                for (o = e.split(" "), a = [], i = 0, r = o.length; r > i; i++) n = o[i], a.push(this.trigger("unbind", n, t));
                return a
            }
        }, i
    }(o), r.prototype.on = r.prototype.bind, r.prototype.off = r.prototype.unbind, t = function(t) {
        function r(t) {
            this.release = m(this.release, this);
            var n, i, o, a, s;
            this.options = t, a = this.options;
            for (i in a) s = a[i], this[i] = s;
            for (this.el || (this.el = document.createElement(this.tag)), this.el = e(this.el), this.$el = this.el, this.className && this.el.addClass(this.className), this.attributes && this.el.attr(this.attributes), this.events || (this.events = this.constructor.events), this.elements || (this.elements = this.constructor.elements), n = this; o = n.constructor.__super__;) o.events && (this.events = e.extend({}, o.events, this.events)), o.elements && (this.elements = e.extend({}, o.elements, this.elements)), n = o;
            this.events && this.delegateEvents(this.events), this.elements && this.refreshElements(), r.__super__.constructor.apply(this, arguments)
        }
        return f(r, t), r.include(n), r.include(i), r.prototype.eventSplitter = /^(\S+)\s*(.*)$/, r.prototype.tag = "div", r.prototype.release = function() {
            return this.trigger("release", this), this.el.remove(), this.unbind(), this.stopListening()
        }, r.prototype.$ = function(t) {
            return e(t, this.el)
        }, r.prototype.delegateEvents = function(e) {
            var t, n, i, r, o, a;
            o = [];
            for (n in e) {
                if (r = e[n], "function" == typeof r) r = function(e) {
                    return function(t) {
                        return function() {
                            return t.apply(e, arguments), !0
                        }
                    }
                }(this)(r);
                else {
                    if (!this[r]) throw new Error(r + " doesn't exist");
                    r = function(e) {
                        return function(t) {
                            return function() {
                                return e[t].apply(e, arguments), !0
                            }
                        }
                    }(this)(r)
                }
                i = n.match(this.eventSplitter), t = i[1], a = i[2], o.push("" === a ? this.el.bind(t, r) : this.el.on(t, a, r))
            }
            return o
        }, r.prototype.refreshElements = function() {
            var e, t, n, i;
            t = this.elements, n = [];
            for (e in t) i = t[e], n.push(this[i] = this.$(e));
            return n
        }, r.prototype.delay = function(e, t) {
            return setTimeout(this.proxy(e), t || 0)
        }, r.prototype.html = function(e) {
            return this.el.html(e.el || e), this.refreshElements(), this.el
        }, r.prototype.append = function() {
            var e, t, n;
            return t = 1 <= arguments.length ? h.call(arguments, 0) : [], t = function() {
                var n, i, r;
                for (r = [], n = 0, i = t.length; i > n; n++) e = t[n], r.push(e.el || e);
                return r
            }(), (n = this.el).append.apply(n, t), this.refreshElements(), this.el
        }, r.prototype.appendTo = function(e) {
            return this.el.appendTo(e.el || e), this.refreshElements(), this.el
        }, r.prototype.prepend = function() {
            var e, t, n;
            return t = 1 <= arguments.length ? h.call(arguments, 0) : [], t = function() {
                var n, i, r;
                for (r = [], n = 0, i = t.length; i > n; n++) e = t[n], r.push(e.el || e);
                return r
            }(), (n = this.el).prepend.apply(n, t), this.refreshElements(), this.el
        }, r.prototype.replace = function(t) {
            var n, i, r;
            return t = t.el || t, "string" == typeof t && (t = e.trim(t)), r = [this.el, e((null != (i = e.parseHTML(t)) ? i[0] : void 0) || t)], n = r[0], this.el = r[1], n.replaceWith(this.el), this.delegateEvents(this.events), this.refreshElements(), this.el
        }, r
    }(o), e = ("undefined" != typeof window && null !== window ? window.jQuery : void 0) || ("undefined" != typeof window && null !== window ? window.Zepto : void 0) ||
        function(e) {
            return e
        }, s = Object.create ||
        function(e) {
            var t;
            return t = function() {}, t.prototype = e, new t
        }, l = function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }, c = function(e) {
        var t;
        if (!e) return !0;
        for (t in e) return !1;
        return !0
    }, u = function(e) {
        return Array.prototype.slice.call(e, 0)
    }, a = this.Spine = {}, "undefined" != typeof module && null !== module && (module.exports = a), a.version = "1.3.0", a.isArray = l, a.isBlank = c, a.$ = e, a.Events = n, a.Log = i, a.Module = o, a.Controller = t, a.Model = r, o.extend.call(a, n), o.create = o.sub = t.create = t.sub = r.sub = function(e, t) {
        var n;
        return n = function(e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return f(t, e), t
        }(this), e && n.include(e), t && n.extend(t), "function" == typeof n.unbind && n.unbind(), n
    }, r.setup = function(e, t) {
        var n;
        return null == t && (t = []), n = function(e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return f(t, e), t
        }(this), n.configure.apply(n, [e].concat(h.call(t))), n
    }, a.Class = o
}.call(this), function() {
    var e, t, n = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) i.call(t, r) && (e[r] = t[r]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        i = {}.hasOwnProperty,
        r = [].slice;
    t = this.Spine || require("spine"), e = t.$, t.Manager = function(e) {
        function i() {
            this.controllers = [], this.bind("change", this.change), this.add.apply(this, arguments)
        }
        return n(i, e), i.include(t.Events), i.prototype.add = function() {
            var e, t, n, i, o;
            for (t = 1 <= arguments.length ? r.call(arguments, 0) : [], o = [], n = 0, i = t.length; i > n; n++) e = t[n], o.push(this.addOne(e));
            return o
        }, i.prototype.addOne = function(e) {
            return e.bind("active", function(t) {
                return function() {
                    var n;
                    return n = 1 <= arguments.length ? r.call(arguments, 0) : [], t.trigger.apply(t, ["change", e].concat(r.call(n)))
                }
            }(this)), e.bind("release", function(t) {
                return function() {
                    var n;
                    return t.controllers = function() {
                        var t, i, r, o;
                        for (r = this.controllers, o = [], t = 0, i = r.length; i > t; t++) n = r[t], n !== e && o.push(n);
                        return o
                    }.call(t)
                }
            }(this)), this.controllers.push(e)
        }, i.prototype.deactivate = function() {
            return this.trigger.apply(this, ["change", !1].concat(r.call(arguments)))
        }, i.prototype.change = function() {
            var e, t, n, i, o, a;
            for (n = arguments[0], e = 2 <= arguments.length ? r.call(arguments, 1) : [], a = this.controllers, i = 0, o = a.length; o > i; i++) t = a[i], t !== n && t.deactivate.apply(t, e);
            return n ? n.activate.apply(n, e) : void 0
        }, i
    }(t.Module), t.Controller.include({
        active: function() {
            var e;
            return e = 1 <= arguments.length ? r.call(arguments, 0) : [], "function" == typeof e[0] ? this.bind("active", e[0]) : (e.unshift("active"), this.trigger.apply(this, e)), this
        },
        isActive: function() {
            return this.el.hasClass("active")
        },
        activate: function() {
            return this.el.addClass("active"), this
        },
        deactivate: function() {
            return this.el.removeClass("active"), this
        }
    }), t.Stack = function(e) {
        function i() {
            var e, n, r, o, a;
            i.__super__.constructor.apply(this, arguments), this.manager = new t.Manager, r = this.controllers;
            for (n in r) {
                if (a = r[n], null != this[n]) throw Error("'@" + n + "' already assigned - choose a different name");
                this[n] = new a({
                    stack: this
                }), this.add(this[n])
            }
            o = this.routes, e = function(e) {
                return function(t, n) {
                    var i;
                    return "function" == typeof n && (i = n), i || (i = function() {
                        var t;
                        return (t = e[n]).active.apply(t, arguments)
                    }), e.route(t, i)
                }
            }(this);
            for (n in o) a = o[n], e(n, a);
            this["default"] && this[this["default"]].active()
        }
        return n(i, e), i.prototype.controllers = {}, i.prototype.routes = {}, i.prototype.className = "spine stack", i.prototype.add = function(e) {
            return this.manager.add(e), this.append(e)
        }, i
    }(t.Controller), "undefined" != typeof module && null !== module && (module.exports = t.Manager), "undefined" != typeof module && null !== module && (module.exports.Stack = t.Stack)
}.call(this), function() {
    var e, t, n, i, r, o, a, s, l, c, u, d = [].slice,
        h = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        p = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) f.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        f = {}.hasOwnProperty;
    u = this.Spine || require("spine"), e = u.$, s = u.Model, l = e({}), t = {
        getURL: function(e) {
            return null != e.className ? this.generateURL(e) : this.generateURL(e, encodeURIComponent(e.id))
        },
        getCollectionURL: function(e) {
            return this.generateURL(e)
        },
        getScope: function(e) {
            return ("function" == typeof e.scope ? e.scope() : void 0) || e.scope
        },
        getCollection: function(e) {
            return e.url !== e.generateURL ? "function" == typeof e.url ? e.url() : e.url : null != e.className ? e.className.toLowerCase() + "s" : void 0
        },
        generateURL: function() {
            var e, n, i, r, o;
            return i = arguments[0], e = 2 <= arguments.length ? d.call(arguments, 1) : [], n = t.getCollection(i) || t.getCollection(i.constructor), o = t.getScope(i) || t.getScope(i.constructor), e.unshift(n), e.unshift(o), r = e.join("/"), r = r.replace(/(\/\/)/g, "/"), r = r.replace(/^\/|\/$/g, ""), 0 !== r.indexOf("../") ? s.host + "/" + r : r
        },
        enabled: !0,
        disable: function(e) {
            var t, n;
            if (!this.enabled) return e();
            this.enabled = !1;
            try {
                return e()
            } catch (n) {
                throw t = n
            } finally {
                this.enabled = !0
            }
        },
        queue: function(e) {
            return e ? l.queue(e) : l.queue()
        },
        clearQueue: function() {
            return this.queue([])
        }
    }, n = function() {
        function n() {}
        return n.prototype.defaults = {
            dataType: "json",
            processData: !1,
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }, n.prototype.queue = t.queue, n.prototype.ajax = function(t, n) {
            return e.ajax(this.ajaxSettings(t, n))
        }, n.prototype.ajaxQueue = function(n, i, r) {
            var o, a, s, c, u, d;
            return a = null, o = e.Deferred(), c = o.promise(), t.enabled ? (d = this.ajaxSettings(n, i), s = void 0 !== d.parallel ? d.parallel : "GET" === d.type, u = function(n) {
                var i;
                return null != (null != r ? r.id : void 0) && (null == d.url && (d.url = t.getURL(r)), null != (i = d.data) && (i.id = r.id)), "string" != typeof d.data && d.processData !== !0 && (d.data = JSON.stringify(d.data)), a = e.ajax(d).done(o.resolve).fail(o.reject).then(n, n), s ? l.dequeue() : void 0
            }, c.abort = function(t) {
                var n;
                return a ? a.abort(t) : (n = e.inArray(u, this.queue()), n > -1 && this.queue().splice(n, 1), o.rejectWith(d.context || d, [c, t, ""]), c)
            }, this.queue(u), c) : c
        }, n.prototype.ajaxSettings = function(t, n) {
            return e.extend({}, this.defaults, n, t)
        }, n
    }(), i = function(e) {
        function n(e) {
            this.model = e, this.failResponse = h(this.failResponse, this), this.recordsResponse = h(this.recordsResponse, this)
        }
        return p(n, e), n.prototype.find = function(e, n, i) {
            var r;
            return null == i && (i = {}), r = new this.model({
                id: e
            }), this.ajaxQueue(n, {
                type: "GET",
                url: i.url || t.getURL(r),
                parallel: i.parallel
            }).done(this.recordsResponse).fail(this.failResponse)
        }, n.prototype.all = function(e, n) {
            return null == n && (n = {}), this.ajaxQueue(e, {
                type: "GET",
                url: n.url || t.getURL(this.model),
                parallel: n.parallel
            }).done(this.recordsResponse).fail(this.failResponse)
        }, n.prototype.fetch = function(e, t) {
            var n;
            return null == e && (e = {}), null == t && (t = {}), (n = e.id) ? (delete e.id, this.find(n, e, t).done(function(e) {
                return function(n) {
                    return e.model.refresh(n, t)
                }
            }(this))) : this.all(e, t).done(function(e) {
                return function(n) {
                    return e.model.refresh(n, t)
                }
            }(this))
        }, n.prototype.recordsResponse = function(e, t, n) {
            return this.model.trigger("ajaxSuccess", null, t, n)
        }, n.prototype.failResponse = function(e, t, n) {
            return this.model.trigger("ajaxError", null, e, t, n)
        }, n
    }(n), c = function(e) {
        function n(e) {
            this.record = e, this.failResponse = h(this.failResponse, this), this.recordResponse = h(this.recordResponse, this), this.model = this.record.constructor
        }
        return p(n, e), n.prototype.reload = function(e, t) {
            return null == t && (t = {}), this.ajaxQueue(e, {
                type: "GET",
                url: t.url,
                parallel: t.parallel
            }, this.record).done(this.recordResponse(t)).fail(this.failResponse(t))
        }, n.prototype.create = function(e, n) {
            return null == n && (n = {}), this.ajaxQueue(e, {
                type: "POST",
                contentType: "application/json",
                data: this.record.toJSON(),
                url: n.url || t.getCollectionURL(this.record),
                parallel: n.parallel
            }).done(this.recordResponse(n)).fail(this.failResponse(n))
        }, n.prototype.update = function(e, t) {
            return null == t && (t = {}), this.ajaxQueue(e, {
                type: "PUT",
                contentType: "application/json",
                data: this.record.toJSON(),
                url: t.url,
                parallel: t.parallel
            }, this.record).done(this.recordResponse(t)).fail(this.failResponse(t))
        }, n.prototype.destroy = function(e, t) {
            return null == t && (t = {}), this.ajaxQueue(e, {
                type: "DELETE",
                url: t.url,
                parallel: t.parallel
            }, this.record).done(this.recordResponse(t)).fail(this.failResponse(t))
        }, n.prototype.recordResponse = function(e) {
            return null == e && (e = {}), function(n) {
                return function(i, r, o) {
                    var a;
                    return t.disable(function() {
                        return u.isBlank(i) || n.record.destroyed ? void 0 : (i.id && n.record.id !== i.id && n.record.changeID(i.id), n.record.refresh(i))
                    }), n.record.trigger("ajaxSuccess", i, r, o), null != (a = e.done) ? a.apply(n.record) : void 0
                }
            }(this)
        }, n.prototype.failResponse = function(e) {
            return null == e && (e = {}), function(t) {
                return function(n, i, r) {
                    var o;
                    return t.record.trigger("ajaxError", n, i, r), null != (o = e.fail) ? o.apply(t.record) : void 0
                }
            }(this)
        }, n
    }(n), s.host = "", o = {
        include: function() {
            var e;
            return e = 1 <= arguments.length ? d.call(arguments, 0) : [], e.unshift(encodeURIComponent(this.id)), t.generateURL.apply(t, [this].concat(d.call(e)))
        },
        extend: function() {
            var e;
            return e = 1 <= arguments.length ? d.call(arguments, 0) : [], t.generateURL.apply(t, [this].concat(d.call(e)))
        }
    }, a = {
        ajax: function() {
            return new c(this)
        },
        generateURL: o.include,
        url: o.include
    }, r = {
        ajax: function() {
            return new i(this)
        },
        generateURL: o.extend,
        url: o.extend
    }, s.Ajax = {
        extended: function() {
            return this.fetch(this.ajaxFetch), this.change(this.ajaxChange), this.extend(r), this.include(a)
        },
        ajaxFetch: function() {
            var e;
            return (e = this.ajax()).fetch.apply(e, arguments)
        },
        ajaxChange: function(e, t, n) {
            return null == n && (n = {}), n.ajax !== !1 ? e.ajax()[t](n.ajax, n) : void 0
        }
    }, s.Ajax.Methods = {
        extended: function() {
            return this.extend(r), this.include(a)
        }
    }, t.defaults = n.prototype.defaults, t.Base = n, t.Singleton = c, t.Collection = i, u.Ajax = t, "undefined" != typeof module && null !== module && (module.exports = t)
}.call(this), function() {
    var e, t, n, i, r, o, a = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) s.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        s = {}.hasOwnProperty,
        l = [].slice;
    t = this.Spine || require("spine"), e = t.$, i = /^#*/, r = /:([\w\d]+)/g, o = /\*([\w\d]+)/g, n = /[-[\]{}()+?.,\\^$|#\s]/g, t.Route = function(s) {
        function c(e, t) {
            var i, a;
            if (this.path = e, this.callback = t, this.names = [], a = this.path, "string" == typeof a) {
                for (r.lastIndex = 0; null !== (i = r.exec(a));) this.names.push(i[1]);
                for (o.lastIndex = 0; null !== (i = o.exec(a));) this.names.push(i[1]);
                a = a.replace(n, "\\$&").replace(r, "([^/]*)").replace(o, "(.*?)"), this.route = new RegExp("^" + a + "$")
            } else this.route = a
        }
        var u;
        return a(c, s), c.extend(t.Events), c.historySupport = null != (null != (u = window.history) ? u.pushState : void 0), c.routes = [], c.options = {
            trigger: !0,
            history: !1,
            shim: !1,
            replace: !1,
            redirect: !1
        }, c.add = function(e, t) {
            var n, i, r;
            if ("object" != typeof e || e instanceof RegExp) return this.routes.push(new this(e, t));
            i = [];
            for (n in e) r = e[n], i.push(this.add(n, r));
            return i
        }, c.setup = function(t) {
            return null == t && (t = {}), this.options = e.extend({}, this.options, t), this.options.history && (this.history = this.historySupport && this.options.history), this.options.shim ? void 0 : (this.history ? e(window).bind("popstate", this.change) : e(window).bind("hashchange", this.change), this.change())
        }, c.unbind = function() {
            return this.options.shim ? void 0 : this.history ? e(window).unbind("popstate", this.change) : e(window).unbind("hashchange", this.change)
        }, c.navigate = function() {
            var t, n, i, r, o;
            if (t = 1 <= arguments.length ? l.call(arguments, 0) : [], i = {}, n = t[t.length - 1], "object" == typeof n ? i = t.pop() : "boolean" == typeof n && (i.trigger = t.pop()), i = e.extend({}, this.options, i), r = t.join("/"), this.path !== r && (this.path = r, this.trigger("navigate", this.path), i.trigger && (o = this.matchRoute(this.path, i)), !i.shim)) {
                if (!o) {
                    if ("function" == typeof i.redirect) return i.redirect.apply(this, [this.path, i]);
                    i.redirect === !0 && this.redirect(this.path)
                }
                return this.history && i.replace ? history.replaceState({}, document.title, this.path) : this.history ? history.pushState({}, document.title, this.path) : window.location.hash = this.path
            }
        }, c.getPath = function() {
            var e;
            return this.history ? (e = window.location.pathname, "/" !== e.substr(0, 1) && (e = "/" + e)) : (e = window.location.hash, e = e.replace(i, "")), e
        }, c.getHost = function() {
            return window.location.protocol + "//" + window.location.host
        }, c.change = function() {
            var e;
            return e = this.getPath(), e !== this.path ? (this.path = e, this.matchRoute(this.path)) : void 0
        }, c.matchRoute = function(e, t) {
            var n, i, r, o;
            for (r = this.routes, n = 0, i = r.length; i > n; n++) if (o = r[n], o.match(e, t)) return this.trigger("change", o, e), o
        }, c.redirect = function(e) {
            return window.location = e
        }, c.prototype.match = function(e, t) {
            var n, i, r, o, a, s;
            if (null == t && (t = {}), o = this.route.exec(e), !o) return !1;
            if (t.match = o, s = o.slice(1), this.names.length) for (n = i = 0, r = s.length; r > i; n = ++i) a = s[n], t[this.names[n]] = a;
            return this.constructor.trigger("before", this), this.callback.call(null, t) !== !1
        }, c
    }(t.Module), t.Route.change = t.Route.proxy(t.Route.change), t.Controller.include({
        route: function(e, n) {
            return t.Route.add(e, this.proxy(n))
        },
        routes: function(e) {
            var t, n, i;
            n = [];
            for (t in e) i = e[t], n.push(this.route(t, i));
            return n
        },
        navigate: function() {
            return t.Route.navigate.apply(t.Route, arguments)
        }
    }), "undefined" != typeof module && null !== module && (module.exports = t.Route)
}.call(this), function() {
    var Collection, Instance, Singleton, Spine, association, isArray, require, singularize, underscore, extend = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) hasProp.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        hasProp = {}.hasOwnProperty;
    Spine = this.Spine || require("spine"), isArray = Spine.isArray, require = this.require ||
        function(value) {
            return eval(value)
        }, Collection = function(e) {
        function t(e) {
            var t, n;
            null == e && (e = {});
            for (t in e) n = e[t], this[t] = n
        }
        return extend(t, e), t.prototype.all = function() {
            return this.model.select(function(e) {
                return function(t) {
                    return e.associated(t)
                }
            }(this))
        }, t.prototype.first = function() {
            return this.all()[0]
        }, t.prototype.last = function() {
            var e;
            return e = this.all(), e[e.length - 1]
        }, t.prototype.count = function() {
            return this.all().length
        }, t.prototype.find = function(e, t) {
            var n;
            return null == t && (t = this.model.notFound), n = this.select(function() {
                return function(t) {
                    return "" + t.id == "" + e
                }
            }(this)), n[0] || ("function" == typeof t ? t(e) : void 0)
        }, t.prototype.findAllByAttribute = function(e, t) {
            return this.model.select(function(n) {
                return function(i) {
                    return n.associated(i) && i[e] === t
                }
            }(this))
        }, t.prototype.findByAttribute = function(e, t) {
            return this.findAllByAttribute(e, t)[0]
        }, t.prototype.select = function(e) {
            return this.model.select(function(t) {
                return function(n) {
                    return t.associated(n) && e(n)
                }
            }(this))
        }, t.prototype.refresh = function(e) {
            var t, n, i, r, o, a, s, l, c, u, d;
            if (null == e) return this;
            for (u = this.all(), n = 0, o = u.length; o > n; n++) for (c = u[n], delete this.model.irecords[c.id], d = this.model.records, t = i = 0, a = d.length; a > i; t = ++i) if (l = d[t], l.id === c.id) {
                this.model.records.splice(t, 1);
                break
            }
            for (isArray(e) || (e = [e]), r = 0, s = e.length; s > r; r++) c = e[r], c.newRecord = !1, c[this.fkey] = this.record.id;
            return this.model.refresh(e), this
        }, t.prototype.create = function(e, t) {
            return e[this.fkey] = this.record.id, this.model.create(e, t)
        }, t.prototype.add = function(e, t) {
            return e.updateAttribute(this.fkey, this.record.id, t)
        }, t.prototype.remove = function(e, t) {
            return e.updateAttribute(this.fkey, null, t)
        }, t.prototype.associated = function(e) {
            return e[this.fkey] === this.record.id
        }, t
    }(Spine.Module), Instance = function(e) {
        function t(e) {
            var t, n;
            null == e && (e = {});
            for (t in e) n = e[t], this[t] = n
        }
        return extend(t, e), t.prototype.exists = function() {
            return this.record[this.fkey] ? this.model.exists(this.record[this.fkey]) : !1
        }, t.prototype.find = function() {
            return this.model.find(this.record[this.fkey])
        }, t.prototype.update = function(e) {
            return null == e ? this : (e instanceof this.model || (e = new this.model(e)), e.isNew() && e.save(), this.record[this.fkey] = e && e.id, this)
        }, t
    }(Spine.Module), Singleton = function(e) {
        function t(e) {
            var t, n;
            null == e && (e = {});
            for (t in e) n = e[t], this[t] = n
        }
        return extend(t, e), t.prototype.find = function() {
            return this.record.id && this.model.findByAttribute(this.fkey, this.record.id)
        }, t.prototype.update = function(e) {
            return null == e ? this : (e instanceof this.model || (e = this.model.fromJSON(e)), e[this.fkey] = this.record.id, e.save(), this)
        }, t
    }(Spine.Module), singularize = function(e) {
        return e.replace(/s$/, "")
    }, underscore = function(e) {
        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/-/g, "_").toLowerCase()
    }, association = function(e, t, n, i, r) {
        return "string" == typeof t && (t = require(t)), new r({
            name: e,
            model: t,
            record: n,
            fkey: i
        })
    }, Spine.Model.extend({
        hasMany: function(e, t, n) {
            return null == n && (n = underscore(this.className) + "_id"), this.prototype[e] = function(i) {
                return association(e, t, this, n, Collection).refresh(i)
            }
        },
        belongsTo: function(e, t, n) {
            return null == n && (n = underscore(singularize(e)) + "_id"), this.prototype[e] = function(i) {
                return association(e, t, this, n, Instance).update(i).find()
            }, this.attributes.push(n)
        },
        hasOne: function(e, t, n) {
            return null == n && (n = underscore(this.className) + "_id"), this.prototype[e] = function(i) {
                return association(e, t, this, n, Singleton).update(i).find()
            }
        }
    }), Spine.Collection = Collection, Spine.Singleton = Singleton, Spine.Instance = Instance
}.call(this), function() {
    var e, t, n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        i = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) r.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        r = {}.hasOwnProperty;
    t = this.Spine || require("spine"), e = t.$, t.List = function(t) {
        function r() {
            this.change = n(this.change, this), r.__super__.constructor.apply(this, arguments), this.bind("change", this.change)
        }
        return i(r, t), r.prototype.events = {
            "click .item": "click"
        }, r.prototype.selectFirst = !1, r.prototype.template = function() {
            throw Error("Override template")
        }, r.prototype.change = function(t) {
            var n, i, r, o, a;
            if (this.current = t, !this.current) return void this.children().removeClass("active");
            for (this.children().removeClass("active"), a = this.items, i = n = 0, o = a.length; o > n; i = ++n) if (t = a[i], t === this.current) {
                r = i;
                break
            }
            return e(this.children().get(r)).addClass("active")
        }, r.prototype.render = function(e) {
            return e && (this.items = e), this.html(this.template(this.items)), this.change(this.current), this.selectFirst && !this.children(".active").length ? this.children(":first").click() : void 0
        }, r.prototype.children = function(e) {
            return this.el.children(e)
        }, r.prototype.click = function(t) {
            var n;
            return n = this.items[e(t.currentTarget).index()], this.trigger("change", n), !0
        }, r
    }(t.Controller), "undefined" != typeof module && null !== module && (module.exports = t.List)
}.call(this), function() {
    var e;
    e = this.Spine || require("spine"), e.Model.Local = {
        extended: function() {
            return this.change(this.saveLocal), this.fetch(this.loadLocal)
        },
        saveLocal: function() {
            var e;
            return e = JSON.stringify(this), localStorage[this.className] = e
        },
        loadLocal: function(e) {
            var t;
            return null == e && (e = {}), e.hasOwnProperty("clear") || (e.clear = !0), t = localStorage[this.className], this.refresh(t || [], e)
        }
    }, "undefined" != typeof module && null !== module && (module.exports = e.Model.Local)
}.call(this), function() {
    var e, t, n;
    e = {
        model: "model",
        bindings: {}
    }, n = function() {
        function e(e) {
            this.context = e
        }
        return e.prototype.setValue = function(e, t, n) {
            return "string" == typeof n && (n = this.context.proxy(this.context[n])), (n = n ||
                function(e) {
                    return function(t, n) {
                        return e._standardSetter(t, n)
                    }
                }(this))(e, t)
        }, e.prototype.getValue = function(e, t) {
            return "string" == typeof t && (t = this.context.proxy(this.context[t])), (t = t ||
                function(e) {
                    return function(t, n) {
                        return e._standardGetter(t, n)
                    }
                }(this))(e)
        }, e.prototype._standardGetter = function(e) {
            var t, n;
            return n = this, ("function" == typeof n[t = "_" + e.attr("type") + "Get"] ? n[t](e) : void 0) || e.val()
        }, e.prototype._standardSetter = function(e, t) {
            var n;
            return n = this, e.each(function() {
                var e, i;
                return e = $(this), ("function" == typeof n[i = "_" + e.attr("type") + "Set"] ? n[i](e, t) : void 0) || e.val(t)
            })
        }, e.prototype._checkboxSet = function(e, t) {
            return t ? e.prop("checked", "checked") : e.prop("checked", "")
        }, e.prototype._checkboxGet = function(e) {
            return e.is(":checked")
        }, e
    }(), t = {
        getModel: function() {
            return this[this.modelVar]
        },
        setModel: function(e) {
            return this[this.modelVar] = e
        },
        walkBindings: function(e) {
            var t, n, i, r;
            n = this.bindings, i = [];
            for (r in n) t = n[r], i.push(e(r, t));
            return i
        },
        applyBindings: function() {
            return this.valueSetter = new n(this), this.walkBindings(function(e) {
                return function(t, n) {
                    return n.direction && "model" !== n.direction || e._bindModelToEl(e.getModel(), n, t), n.direction && "element" !== n.direction ? void 0 : e._bindElToModel(e.getModel(), n, t)
                }
            }(this))
        },
        _getField: function(e) {
            return "string" == typeof e ? e : e.field
        },
        _forceModelBindings: function(e) {
            return this.walkBindings(function(t) {
                return function(n, i) {
                    return t.valueSetter.setValue(t.$(n), e[t._getField(i)], i.setter)
                }
            }(this))
        },
        changeBindingSource: function(e) {
            return this.getModel().unbind("change"), this.walkBindings(function(e) {
                return function(t) {
                    return "self" === t && (t = !1), e.el.off("change", t)
                }
            }(this)), this.setModel(e), this._forceModelBindings(e), this.applyBindings()
        },
        _bindModelToEl: function(e, t, n) {
            var i;
            return i = this, "self" === n && (n = !1), this.el.on("change", n, function() {
                return e[i._getField(t)] = i.valueSetter.getValue($(this), t.getter)
            })
        },
        _bindElToModel: function(e, t, n) {
            return e.bind("change", function(i) {
                return function() {
                    return i.valueSetter.setValue(i.$(n), e[i._getField(t)], t.setter)
                }
            }(this))
        }
    }, Spine.Bindings = {
        extended: function() {
            return this.extend(e), this.include(t)
        }
    }
}.call(this), function() {
    Spine.Controller.include(Maleskine.BrowserDetector), Spine.Controller.include({
        setCookie: function(e, t) {
            var n, i;
            return n = new Date, i = n.getTime(), i += 31536e9, n.setTime(i), document.cookie = e + "=" + t + "; expires=" + n.toGMTString() + "; path=/"
        },
        count_words: function(e, t) {
            var n, i, r, o;
            return null == e || 0 === e.length ? 0 : ("markdown" === t ? (e = e.replace(Maleskine.RegEx.MARKDOWN.HEADERS, ""), e = e.replace(Maleskine.RegEx.MARKDOWN.BLOCKQUOTES, ""), e = e.replace(Maleskine.RegEx.MARKDOWN.HRULERS, "$2"), e = e.replace(Maleskine.RegEx.MARKDOWN.LISTS, ""), e = e.replace(Maleskine.RegEx.MARKDOWN.EMPHASIS, "$2"), e = e.replace(Maleskine.RegEx.MARKDOWN.IMAGES, ""), e = e.replace(Maleskine.RegEx.MARKDOWN.LINKS, "$1"), e = e.replace(Maleskine.RegEx.MARKDOWN.COPYRIGHT, ""), e = e.replace(Maleskine.RegEx.MARKDOWN.QUICK_LINKS, "$1")) : e = Maleskine.Utils.removeHtmlTags(e), n = /[;,\[\]\-\.'`"+_)\uff09\uff08(*&\^@%$#!~\/?]+/g, o = (e.match(/\w+/g) || "").length, e = e.replace(n, ""), r = (e.match(/[^\s\w]/g) || "").length, i = o + r)
        },
        stopEvent: function(e) {
            return e || (e = window.event), e.cancelBubble = !0, e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), !1
        },
        sisyphusNotification: function() {
            return noty({
                text: "You have connecting problem..",
                layout: "maleskineTopCenter",
                type: "maleskineInformation",
                closeWith: ["button"]
            })
        },
        notification: function(e, t) {
            var n;
            return null == t && (t = 0), n = {
                text: e,
                layout: "maleskineTopCenter",
                type: "maleskineInformation",
                closeWith: ["button"]
            }, t > 0 && $.extend(n, {
                timeout: t
            }), noty(n)
        },
        confirmMessage: function(e, t, n, i, r) {
            return i || (i = I18n.t("button.ok")), r || (r = I18n.t("button.cancel")), noty({
                text: e,
                layout: "maleskineCenter",
                modal: !0,
                buttons: [{
                    addClass: "btn",
                    text: r,
                    onClick: function(e) {
                        return e.close(), n ? n() : void 0
                    }
                }, {
                    addClass: "btn btn-info",
                    text: i,
                    onClick: function(e) {
                        return e.close(), t ? t() : void 0
                    }
                }]
            })
        },
        noticeMessage: function(e) {
            return noty({
                text: e,
                layout: "topCenter",
                type: "information",
                theme: "maleskineTheme",
                timeout: 2e3
            })
        }
    })
}.call(this), function() {
    var e;
    null == (e = window.Maleskine).Spine && (e.Spine = {}), Maleskine.Spine.Helper = {}
}.call(this), function() {
    !
        function(e) {
            return e.fn.item = function() {
                var e, t, n;
                return n = $(this).data("model"), e = $(this).data("cid"), t = null, null != n && null != e ? (t = Writer[Maleskine.Utils.toTitleCase(n)], t.find(e)) : void 0
            }, null == Array.prototype.first && (Array.prototype.first = function() {
                return "undefined" != typeof this && null !== this && this.length > 0 ? this[0] : void 0
            }), null == Array.prototype.last ? Array.prototype.last = function() {
                return "undefined" != typeof this && null !== this && this.length > 0 ? this[this.length - 1] : void 0
            } : void 0
        }(jQuery)
}.call(this), function() {
    var e;
    null == (e = window.Maleskine).Spine && (e.Spine = {}), Maleskine.Spine.MarkdownConverter = function() {
        function e() {}
        return e.prototype.convert = function(e) {
            return tamarked(e)
        }, e
    }()
}.call(this), function() {
    var e = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        t = [].indexOf ||
            function(e) {
                for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
                return -1
            };
    !
        function(n) {
            var i, r, o;
            return i = Maleskine.BrowserDetector, Maleskine.Settings.TabSpaces = 2, Maleskine.Settings.UseTab = !1, r = function() {
                function n(t) {
                    this.insertTab = e(this.insertTab, this), this.afterInsertVideo = e(this.afterInsertVideo, this), this.insertVideo = e(this.insertVideo, this), this.insertContent = e(this.insertContent, this), this.uploadExternalImages = e(this.uploadExternalImages, this), this.getExternalImages = e(this.getExternalImages, this), this.tasksLeft = e(this.tasksLeft, this), this.isUploading = e(this.isUploading, this), this.cancelUploading = e(this.cancelUploading, this), this.autoUploadImages = e(this.autoUploadImages, this), this.uploadImage = e(this.uploadImage, this), this.dropImage = e(this.dropImage, this), this.pasteImage = e(this.pasteImage, this), this.pasteImageCallback = e(this.pasteImageCallback, this), this.convertHTML2MD = e(this.convertHTML2MD, this), this.uploadImageDone = e(this.uploadImageDone, this), this.uploadImageFail = e(this.uploadImageFail, this), this.uploadImageSuccess = e(this.uploadImageSuccess, this), this.updateUploadImageResult = e(this.updateUploadImageResult, this), this.addImagePlaceholder = e(this.addImagePlaceholder, this), this.replaceContent = e(this.replaceContent, this), this.replaceAllPlaceholder = e(this.replaceAllPlaceholder, this), this.notify = e(this.notify, this), this.contentChange = e(this.contentChange, this), this.content = e(this.content, this), this.getMetaInfo = e(this.getMetaInfo, this), this.ui = t, this.dom = t[0], this.isReady = !1, this.taskQueue = [], this.contentChangeCallback = null, this.notificationCallback = null, this.dragEnterCallback = null, this.dragLeaveCallback = null, this.dropCallback = null, this.getMetaInfo()
                }
                return n.prototype.getMetaInfo = function() {
                    var e, t, n, i;
                    return e = this.ui.val() || "", n = "", e = e.replace(/\[META\]([\w\W]*?)\[\/META\]/g, function(e, t) {
                        return n = t, ""
                    }), i = /^[\n\t\r ]+|[\n\t\r ]+$/g, e = e.replace(i, ""), t = [], e.replace(/\[video\]([\w\W]*?)\[\/video\]/g, function(e, n) {
                        return n = n.replace(i, ""), t.indexOf(n) < 0 ? t.push(n) : void 0
                    }), this.meta = {}, n.replace(/\[VIDEO\]([\w\W]*?)\[\/VIDEO\]/g, function(e) {
                        return function(n, r) {
                            var o, a, s, l;
                            return a = r.match(/\[MARK\]([\w\W]*?)\[\/MARK\]/), !a || (l = r.match(/\[URL\]([\w\W]*?)\[\/URL\]/), !l || (a = a[1].replace(i, ""), t.indexOf(a) < 0)) ? void 0 : (l = l[1].replace(i, ""), s = r.match(/\[THUMBNAIL\]([\w\W]*?)\[\/THUMBNAIL\]/), s = s && s[1] ? s[1].replace(i, "") : "", o = r.match(/\[DESCRIPTION\]([\w\W]*?)\[\/DESCRIPTION\]/), o = o && o[1] ? o[1].replace(i, "") : "", e.meta[a] = {
                                url: l,
                                preview: s,
                                descript: o
                            })
                        }
                    }(this)), this.ui.val(e), e.length > 0 && Maleskine.BrowserDetector.canUseSelection() ? (this.dom.selectionStart = 0, this.dom.selectionEnd = 0) : void 0
                }, n.prototype.content = function() {
                    var e, t, n, i, r, o, a;
                    for (e = this.ui.val(), o = "", a = Object.keys(this.meta), n = 0, i = a.length; i > n; n++) r = a[n], t = this.meta[r], o += "[VIDEO]\n[MARK]" + r + "[/MARK]\n[URL]" + t.url + "[/URL]\n[THUMBNAIL]" + t.preview + "[/THUMBNAIL]\n[DESCRIPTION]" + t.descript + "[/DESCRIPTION]\n[/VIDEO]\n";
                    return o.length > 0 && (o = "\n[META]\n" + o + "[/META]"), e + o
                }, n.prototype.contentChange = function() {
                    return this.contentChangeCallback ? this.contentChangeCallback() : void 0
                }, n.prototype.notify = function(e, t) {
                    return this.notificationCallback ? this.notificationCallback(e, t) : void 0
                }, n.prototype.replaceAllPlaceholder = function(e, t) {
                    var n, r, o, a, s, l, c, u;
                    if (e !== t) {
                        for (n = this.ui.val().split(e), s = t.length, l = 0, a = this.dom.scrollTop, u = n.length - 1, r = o = 0, c = u; c >= 0 ? c > o : o > c; r = c >= 0 ? ++o : --o) l += n[r].length + s;
                        return l -= s, i.canInsertHTML() && i.canUseSelection() ? (this.dom.selectionStart = 0, this.dom.selectionEnd = this.ui.val().length, this.ui.focus(), this.insertContent(n.join(t))) : this.ui.val(n.join(t)), this.dom.scrollTop = a, l
                    }
                }, n.prototype.replaceContent = function(e, t, n) {
                    var i, r, o, a;
                    return null == t && (t = !1), null == n && (n = !1), o = this.dom.selectionStart, r = this.dom.selectionEnd, o > r && (a = [r, o], o = a[0], r = a[1]), i = this.ui.val(), o = i.substring(0, o), r = i.substring(r, i.length), i = o + e + r, this.ui.val(i), t ? n ? (this.dom.selectionStart = o.length, this.dom.selectionEnd = this.dom.selectionStart + e.length) : (this.dom.selectionStart = o.length + e.length, this.dom.selectionEnd = this.dom.selectionStart) : void 0
                }, n.prototype.addImagePlaceholder = function(e) {
                    var t;
                    return i.canInsertHTML() ? (this.ui.focus(), this.insertContent("\n" + e + "\n")) : i.canUseSelection() ? (this.replaceContent("\n" + e + "\n", !0, !1), this.ui.forceUpdateUserChangeData()) : (t = this.ui.val() + ("\n" + e + "\n"), this.ui.val(t), this.ui.forceUpdateUserChangeData())
                }, n.prototype.updateUploadImageResult = function(e, t) {
                    var n, r;
                    return n = this.dom.scrollTop, r = this.replaceAllPlaceholder(e, t), i.canUseSelection() && (this.dom.selectionStart = r + 2, this.dom.selectionEnd = this.ui.val().indexOf("]", r), this.dom.scrollTop = n), i.canInsertHTML() && i.canUseSelection() ? void 0 : this.ui.forceUpdateUserChangeData()
                }, n.prototype.uploadImageSuccess = function(e, t) {
                    var n;
                    return n = t.regularizedImageURL.zoomed, this.updateUploadImageResult(e.markdownPlaceholder, "![" + e.name + "](" + n + ")")
                }, n.prototype.uploadImageFail = function(e) {
                    return this.updateUploadImageResult(e.markdownPlaceholder, "![Upload " + e.name + " failed. Please try again.]")
                }, n.prototype.uploadImageDone = function(e) {
                    var t;
                    return t = this.taskQueue.indexOf(e), 0 > t || this.taskQueue.splice(t, 1), 0 === this.taskQueue.length ? this.onUploadImageTaskFinish() : void 0
                }, n.prototype.onUploadImageTaskStart = function() {}, n.prototype.onUploadImageTaskFinish = function() {}, n.prototype.convertHTML2MD = function(e) {
                    var t, n, i, r, o, a;
                    return r = null, t = !1, i = [], n = {}, a = [], o = 1, e = e.replace(/\n/g, ""), e = e.replace(/[ ]+/g, " "), e = e.replace(/([ \t\n]*)<(\/?)([\w\W]*?)>([ \t\n]*)/gi, function(e, r, s, l, c) {
                        var u, d, h, p, f, g, m, v, b;
                        return r = r ? " " : "", c = c ? " " : "", u = l, l.indexOf(" ") > 0 && (l = l.split(" ")[0].toLowerCase()), "img" === l ? (t = !0, e = $(e), b = e.attr("src"), b ? (v = e.attr("title") || e.attr("alt") || "", a.indexOf(b) < 0 && a.push(b), m = "[\u56fe\u7247\u4e0a\u4f20\u4e2d\u3002\u3002\u3002\uff08" + o + "\uff09]", o++, n[b] = n[b] || [], n[b].push({
                            url: b,
                            title: v,
                            placeholder: m
                        }), m) : "") : (h = "u" === l || "span" === l, f = "a" === l, d = "b" === l || "strong" === l, p = "i" === l || "em" === l, g = "del" === l || "strike" === l, s ? f ? (b = i.pop(), 0 === b.length ? r + c : r + "](" + b + ")" + c) : d ? r + "**" + c : p ? r + "*" + c : g ? r + "~~" + c : h ? r + c : "\n" : f ? (t = !0, b = u.match(/href=('|")(.*?)\1[ \/>]/i), b = null != b ? b[2] : "", b.match(/^javascript/i) && (b = ""), i.push(b), 0 === b.length ? r + c : r + "[" + c) : d ? (t = !0, r + "**" + c) : p ? (t = !0, r + "*" + c) : g ? (t = !0, r + "~~" + c) : h ? (t = !0, r + c) : "")
                    }), e = e.replace(/&nbsp;/g, " "), this.autoUploadImages(n, a), t && (e = $("<div>").html(e).text(), e = e.replace(/^\n*/, "").replace(/\n*$/, "").replace(/\n{3,}/g, "\n\n"), r = e), r
                }, n.prototype.pasteImageCallback = function(e) {
                    return i.canInsertHTML() ? (this.ui.focus(), this.insertContent(e)) : i.canUseSelection() ? (this.replaceContent(e, !0, !1), this.ui.forceUpdateUserChangeData()) : void 0
                }, n.prototype.pasteImage = function(e) {
                    var n, r, o, a, s, l, c, u, d, h, p, f;
                    if (n = e.originalEvent.clipboardData || window.clipboardData, t.call(n.types, "Files") >= 0) {
                        if (i.canPasteImage()) for (d = n.items, s = 0, c = d.length; c > s; s++) a = d[s], a.type.indexOf("image") < 0 || (o = a.getAsFile(), o.name = "Paste_Image.png", this.uploadImage(o));
                        return e.preventDefault()
                    }
                    for (f = "none", h = n.types, l = 0, u = h.length; u > l; l++) p = h[l], p.indexOf("html") >= 0 ? f = "html" : p.indexOf("plain") >= 0 && "none" === f && (f = "text");
                    if ("html" === f) {
                        if (r = n.getData("text/html"), r = this.convertHTML2MD(r), null !== r) return this.pasteImageCallback(r), e.preventDefault()
                    } else if ("none" === f) return e.preventDefault()
                }, n.prototype.dropImage = function(e) {
                    var t, n, i, r, o, a;
                    if (t = e.dataTransfer || e.originalEvent.dataTransfer, t.files) {
                        for (o = t.files, a = [], i = 0, r = o.length; r > i; i++) n = o[i], a.push(this.uploadImage(n));
                        return a
                    }
                }, n.prototype.uploadImage = function(e) {
                    var t;
                    return t = new Writer.UploadImage(e), t.createMarkdownPlaceholderText(), t.isValid ? (this.taskQueue.push(t), 1 === this.taskQueue.length && this.onUploadImageTaskStart(), this.addImagePlaceholder(t.markdownPlaceholder), t.success(this.uploadImageSuccess).fail(this.uploadImageFail).done(this.uploadImageDone).upload()) : this.notify(t.error, 2e3)
                }, n.prototype.autoUploadImages = function(e, t, n, r, o, a) {
                    var s, l;
                    return null == a && (a = !1), s = i.canUseSelection(), l = 0, t.map(function(t) {
                        return function(c) {
                            var u, d, h, p;
                            return h = !1, u = !1, "data:" === c.substring(0, 5) ? (window.Blob || (u = !0), h = !0, d = Writer.UploadImage.dataURI2Blob(c), p = new Writer.UploadImage(d)) : (p = new Writer.UploadImage(c), p.isValid || (u = !0)), u ? (e[c].map(function(e) {
                                var n, r;
                                return n = "", a || (n = "![" + info.title + "](" + c + ")"), r = t.replaceAllPlaceholder(e.placeholder, n), i.canUseSelection() ? (t.dom.selectionStart = r, t.dom.selectionEnd = r + n.length) : void 0
                            }), void(o && o(c))) : (p.success(function(n, i) {
                                var o;
                                return o = i.regularizedImageURL.zoomed, e[c].map(function(e) {
                                    var n, i;
                                    return n = "![" + e.title + "](" + o + ")", i = t.replaceAllPlaceholder(e.placeholder, n), s ? (t.dom.selectionStart = i, t.dom.selectionEnd = i + n.length) : void 0
                                }), r ? r(c) : void 0
                            }).fail(function(n) {
                                var i;
                                return i = !n.isCancelled, e[c].map(function(e) {
                                    var n, r;
                                    return n = i && (a || h) ? "" : "![" + e.title + "](" + c + ")", r = t.replaceAllPlaceholder(e.placeholder, n), s ? (t.dom.selectionStart = r, t.dom.selectionEnd = r + n.length) : void 0
                                }), o ? o(c) : void 0
                            }).done(function() {
                                var e;
                                return i.canInsertHTML() && i.canUseSelection() || t.ui.forceUpdateUserChangeData(), e = t.taskQueue.indexOf(p), 0 > e || t.taskQueue.splice(e, 1), l--, 0 === l && n ? n() : void 0
                            }).upload(), t.taskQueue.push(p), l++)
                        }
                    }(this)), 0 === l && n ? n() : void 0
                }, n.prototype.cancelUploading = function() {
                    return this.taskQueue.map(function(e) {
                        return e.cancel(!1, !0)
                    }), this.taskQueue = []
                }, n.prototype.isUploading = function() {
                    return 0 !== this.taskQueue.length
                }, n.prototype.tasksLeft = function() {
                    return this.taskQueue.length
                }, n.prototype.getExternalImages = function() {
                    var e, t;
                    return e = this.ui.val(), t = [], e.replace(/!\[(.*?)\]\((.+?)\)/gi, function(e, n, i) {
                        return i.match(Writer.UploadImage.checkIsUploadedImage) ? void 0 : t.indexOf(i) < 0 ? t.push(i) : void 0
                    }), e.replace(/<img (.*?)\/?>/gi, function(e, n) {
                        var i;
                        return i = n.match(/src=('|")?(.*?)\1/), i && (i = i[2], i && !i.match(Writer.UploadImage.checkIsUploadedImage)) && t.indexOf(i) < 0 ? t.push(i) : void 0
                    }), t
                }, n.prototype.uploadExternalImages = function(e, t, n) {
                    var r, o, a, s;
                    return r = this.ui.val(), o = {}, s = [], a = 1, r = r.replace(/!\[(.*?)\]\((.+?)\)/gi, function(e, t, n) {
                        var i;
                        return n.match(Writer.UploadImage.checkIsUploadedImage) ? e : (s.indexOf(n) < 0 && s.push(n), i = "[\u7ad9\u5916\u56fe\u7247\u4e0a\u4f20\u4e2d\u2026\u2026(" + a + ")]", a++, o[n] = o[n] || [], o[n].push({
                            url: n,
                            title: t,
                            placeholder: i
                        }), i)
                    }), r = r.replace(/<img (.*?)\/?>/gi, function(e, t) {
                        var n, i, r;
                        return (r = t.match(/src=('|")?(.*?)\1/)) && (r = r[2]) ? r.match(Writer.UploadImage.checkIsUploadedImage) ? e : (s.indexOf(r) < 0 && s.push(r), n = "[\u7ad9\u5916\u56fe\u7247\u4e0a\u4f20\u4e2d\u2026\u2026(" + a + ")]", a++, i = t.match(/(?:title|alt)=('|")?(.*?)\1/), i && (i = i[2]), i || (i = ""), o[r] = o[r] || [], o[r].push({
                            url: r,
                            title: i,
                            placeholder: n
                        }), n) : e
                    }), this.ui.focus(), i.canInsertHTML() && i.canUseSelection() ? (this.dom.selectionStart = 0, this.dom.selectionEnd = this.ui.val().length, this.insertContent(r)) : this.ui.val(r), this.autoUploadImages(o, s, e, t, n, !1)
                }, n.prototype.insertContent = function(e) {
                    return e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), document.execCommand("insertHTML", !1, e)
                }, n.prototype.insertVideo = function(e) {
                    return this.meta[e.input_url] = {
                        url: e.video_url,
                        preview: e.cover_id,
                        descript: e.description
                    }, this.latestVideo = "\n\n[video]" + e.input_url + "[/video]\n\n"
                }, n.prototype.afterInsertVideo = function() {
                    var e, t;
                    if (this.latestVideo) return this.ui.focus(), i.canInsertHTML() ? this.insertContent(this.latestVideo + "\n") : i.canUseSelection() ? (t = this.ui.val(), e = t.substring(this.dom.selectionEnd, t.length), t = t.substring(0, this.dom.selectionStart), e = t + this.latestVideo + e, this.ui.val(e), this.dom.selectionStart = t.length, this.dom.selectionEnd = t.length + this.latestVideo.length) : (this.latestVideo = this.ui.val() + this.latestVideo, this.ui.val(this.latestVideo)), this.latestVideo = null
                }, n.prototype.insertTab = function() {
                    var e, t, n, r, o, a, s;
                    if (e = "", s = !1, Maleskine.Settings.UseTab) e = "	";
                    else for (t = n = 0, a = Maleskine.Settings.TabSpaces; a >= 0 ? a > n : n > a; t = a >= 0 ? ++n : --n) e += " ";
                    return i.canInsertHTML() ? (document.execCommand("insertHTML", !1, e), s = !0) : i.canUseSelection() && (o = this.ui.val(), r = o.substring(this.dom.selectionEnd, o.length), o = o.substring(0, this.dom.selectionStart), e = o + e + r, this.ui.val(e), s = !0), s
                }, n
            }(), n.fn.markdownEditor = function() {
                var e, t;
                if (o(this)) return e = this.data("controller"), t = !1, e || (t = !0, e = new r(this), this.data("controller", e)), this.isReady = function() {
                    return e.isReady
                }, this.isUploadingImage = function() {
                    return e.isUploading()
                }, this.uploadingImageCount = function() {
                    return e.tasksLeft()
                }, this.getExternalImages = function() {
                    return e.getExternalImages()
                }, this.uploadExternalImages = function(t, n, i) {
                    return e.uploadExternalImages(t, n, i)
                }, this.cancelUploading = function() {
                    return e.cancelUploading()
                }, this.content = function() {
                    return e.content()
                }, this.onContentChange = function(t) {
                    return function(n) {
                        return e.contentChangeCallback = n, t
                    }
                }(this), this.onNotification = function(t) {
                    return function(n) {
                        return e.notificationCallback = n, t
                    }
                }(this), this.onDragEnter = function(t) {
                    return function(n) {
                        return e.dragEnterCallback = n, t
                    }
                }(this), this.onDragLeave = function(t) {
                    return function(n) {
                        return e.dragLeaveCallback = n, t
                    }
                }(this), this.onDrop = function(t) {
                    return function(n) {
                        return e.dropCallback = n, t
                    }
                }(this), this.onUploadImageTaskStart = function(t) {
                    return function(n) {
                        return e.onUploadImageTaskStart = n, t
                    }
                }(this), this.onUploadImageTaskFinish = function(t) {
                    return function(n) {
                        return e.onUploadImageTaskFinish = n, t
                    }
                }(this), this.insertVideo = function(t) {
                    return function(n) {
                        return e.insertVideo(n), t
                    }
                }(this), this.afterInsertVideo = function(t) {
                    return function() {
                        return e.afterInsertVideo(), t
                    }
                }(this), this.userChange(e.contentChange), this.on("paste", e.pasteImage), this.on("keydown", function(t) {
                    return t.keyCode === Kalamu.Keys.TAB_KEY && e.insertTab() ? t.preventDefault() : void 0
                }), Modernizr.draganddrop && (this[0].ondragenter = function() {
                    return function(t) {
                        return e.dragEnterCallback ? e.dragEnterCallback(t) : void 0
                    }
                }(this), this[0].ondragleave = function() {
                    return function(t) {
                        return e.dragLeaveCallback ? e.dragLeaveCallback(t) : void 0
                    }
                }(this), this[0].ondragover = function() {
                    return function(e) {
                        return e.stopPropagation(), e.preventDefault()
                    }
                }(this), this[0].ondrop = function() {
                    return function(t) {
                        return t.preventDefault(), t.stopPropagation(), e.dropCallback && e.dropCallback(t), e.dropImage(t)
                    }
                }(this)), e.isReady = !0, this
            }, o = function(e) {
                return e.is("textarea") ? !0 : !1
            }
        }(jQuery)
}.call(this), function() {
    Spine.Model.include({
        isPersisted: function() {
            var e;
            return e = /c-\d+/, !/c-\d+/.test(this.id + "")
        },
        loadAttribute: function(e, t) {
            return $.ajax({
                type: "GET",
                url: this.url(e),
                dataType: "json",
                timeout: Writer.AJAX_TIMEOUT
            }).success(function(n) {
                return function(i, r, o) {
                    var a;
                    return a = {}, a[e] = i[e], n.load(a), n.save({
                        ajax: !1
                    }), n.content = i[e], t(n), n.constructor.trigger("ajaxSuccess", null, r, o)
                }
            }(this)).fail(function(e) {
                return function(t, n) {
                    return e.constructor.trigger("ajaxError", null, status, n)
                }
            }(this))
        },
        localSyncAttributes: function(e) {
            var t;
            return this && "undefined" != typeof this && null !== this ? (this.load(e), t = this.constructor.records, t[this.id].load(e)) : void 0
        }
    })
}.call(this), function() {
    null == window.Maleskine && (window.Maleskine = {}), Maleskine.Sns = {
        sns_supported: ["weibo", "tweibo", "qzone", "douban", "twitter", "facebook", "google_plus"],
        official_account: {
            weibo: "\u7b80\u4e66",
            tweibo: "jianshuio",
            twitter: "jianshucom"
        },
        mention_official_account: function(e) {
            var t;
            return (t = Maleskine.Settings.official_weibo[e]) ? I18n.t("share.official_account", {
                official_account: t
            }) : ""
        },
        shareScript: function(e, t, n) {
            var i, r, o, a;
            switch (null == n && (n = []), a = e.title, i = e.fullUrl(), i = encodeURIComponent(i + ("?utm_campaign=maleskine&utm_content=note&utm_medium=writer_share&utm_source=" + t)), a = null != a && a.length > 0 ? a.replace(/\'|\"/, "\\\\'") : "", o = I18n.t("share.text", {
                    note_title: a
                }) + " " + this.mention_official_account(t), t) {
                case "weibo":
                    return r = "http://service.weibo.com/share/share.php?appkey=" + Maleskine.Settings.weibo.appKey + "&title=" + encodeURIComponent(o) + "&url=" + encodeURIComponent(i) + "&searchPic=false&style=simple", n.length > 0 && (r += "&pic=" + encodeURIComponent(n[0])), r;
                case "douban":
                    return "javascript:void(function(){var d=document,e=encodeURIComponent,s1=window.getSelection,s2=d.getSelection,s3=d.selection,s=s1?s1():s2?s2():s3?s3.createRange().text:'',r='http://www.douban.com/recommend/?url='+e('" + i + "')+'&title='+e('" + a + "')+'&sel='+e(s)+'&v=1',x=function(){if(!window.open(r,'douban','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330'))location.href=r+'&r=1'};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})()";
                case "tweibo":
                    return "javascript:void(function(){var d=document,e=encodeURIComponent,r='http://share.v.t.qq.com/index.php?c=share&a=index&url='+e('" + i + "')+'&title='+e('" + o + "'),x=function(){if(!window.open(r,'tweibo','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();";
                case "qzone":
                    return "javascript:void(function(){var d=document,e=encodeURIComponent,r='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+e('" + i + "')+'&title='+e('" + o + "'),x=function(){if(!window.open(r,'qzone','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();";
                case "twitter":
                    return "javascript:void(function(){var d=document,e=encodeURIComponent,r='https://twitter.com/share?url='+e('" + i + "')+'&text='+e('" + o + "')+'&related='+e('jianshuio'),x=function(){if(!window.open(r,'twitter','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();";
                case "facebook":
                    return "javascript:void(function(){var d=document,e=encodeURIComponent,r='http://www.facebook.com/sharer.php?s=100&p[url]='+e('" + i + "')+'&p[title]='+e('" + a + " " + I18n.t("share.trailing_jianshushe") + "')+'&p[summary]='+e('" + o + "'),x=function(){if(!window.open(r,'facebook','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();";
                case "google_plus":
                    return "javascript:void(function(){var d=document,e=encodeURIComponent,r='https://plus.google.com/share?url='+e('" + i + "'),x=function(){if(!window.open(r,'google_plus','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();"
            }
        }
    }
}.call(this), function() {
    Spine.Controller.include({
        view: function(e) {
            return JST["writer/views/" + e]
        }
    })
}.call(this), function() {
    var e, t = function(e, t) {
            function i() {
                this.constructor = e
            }
            for (var r in t) n.call(t, r) && (e[r] = t[r]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        },
        n = {}.hasOwnProperty;
    e = function(e) {
        function n() {
            n.__super__.constructor.apply(this, arguments), n.writerVersion = this.el.data("writer-version"), jQuery.timeago.settings.strings = I18n.t("jquery-timeago"), $.ajaxSetup({
                headers: {
                    "x-writer-version": n.writerVersion
                }
            }), this.readyCounter = 0, n.User.bind("refresh", function(e) {
                return function() {
                    return n.currentUser = n.User.currentUser(), e.readyCounter = e.readyCounter + 1, 3 === e.readyCounter ? e.startApplication() : void 0
                }
            }(this)), n.Notebook.bind("refresh", function(e) {
                return function() {
                    return e.readyCounter = e.readyCounter + 1, 3 === e.readyCounter ? e.startApplication() : void 0
                }
            }(this)), n.Note.bind("refresh", function(e) {
                return function() {
                    return e.readyCounter = e.readyCounter + 1, 3 === e.readyCounter ? e.startApplication() : void 0
                }
            }(this)), n.User.fetch(), n.Notebook.fetch(), n.Note.fetch()
        }
        return t(n, e), n.FAILURES = 0, n.AJAX_TIMEOUT = 1e4, n.DEFAULT_TITLES = ["Untitled", I18n.translations["zh-CN"].note.untitled, I18n.translations["zh-TW"].note.untitled], n.prototype.startApplication = function() {
            return $(".writer-splash").fadeOut("slow", function() {
                return $(this).remove()
            }), $.extend(Spine.Ajax.defaults, {
                timeout: n.AJAX_TIMEOUT
            }), this.append(JST["kalamu/video_modal"]()), this.append(this.main = new n.Main), this.append(JST["writer/views/modals/share_weibo_modal"]()), this.append(JST["writer/views/modals/share_modal"]()), this.append(JST["writer/views/modals/rename_notebook_modal"]()), this.append(JST["writer/views/modals/view_mode_modal"]()), this.sharingModal = new n.SharingModal({
                el: "#share-modal"
            }), this.sharingModal.fullscreen = !0, this.weiboModal = new n.WeiboModal({
                el: "#share-weibo-modal"
            }), this.weiboModal.fullscreen = !0, this.renameNotebookModal = new n.RenameNotebookModal({
                el: "#rename-notebook-modal"
            }), this.renameNotebookModal.fullscreen = !0, this.viewModeModal = new n.ViewModeModal({
                el: "#view-mode-modal"
            }), $.noty.defaults.theme = "maleskineTheme", Spine.Route.setup(), this.isMac() ? Mousetrap.bindGlobal("command+s", function(e) {
                return function(t) {
                    return e.stopEvent(t), Spine.trigger("note-save")
                }
            }(this)) : Mousetrap.bindGlobal("ctrl+s", function(e) {
                return function(t) {
                    return e.stopEvent(t), Spine.trigger("note-save")
                }
            }(this))
        }, n
    }(Spine.Controller), window.Writer = e
}.call(this), function() {
    var e, t, n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        i = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) r.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        r = {}.hasOwnProperty,
        o = [].indexOf ||
            function(e) {
                for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
                return -1
            };
    t = Maleskine.Settings, e = Writer.Notebook, Writer.Note = function(e) {
        function r() {
            return this.putBack = n(this.putBack, this), this.destroyDaysLeft = n(this.destroyDaysLeft, this), this.destroyDate = n(this.destroyDate, this), this.checkQRCode = n(this.checkQRCode, this), this.checkImage = n(this.checkImage, this), this.needsCompile = n(this.needsCompile, this), this.isInitialNote = n(this.isInitialNote, this), r.__super__.constructor.apply(this, arguments)
        }
        return i(r, e), r.configure("Note", "title", "content", "slug", "shared", "notebook_id", "seq_in_nb", "note_type", "autosave_control", "content_size_status", "last_compiled_at", "content_updated_at", "deleted_at"), r.belongsTo("user", "Writer.User"), r.hasMany("noteLogs", "Writer.NoteLog"), r.extend(Spine.Model.Ajax), r.url = "/writer/notes", r.prototype.updateContent = function(e, t) {
            return this.title = e, this.content = t, this.save({
                ajax: !1
            })
        }, r.prototype.abbr = function() {
            var e;
            return "undefined" == typeof this.content || null === this.content ? "" : e = this.isMarkdown() ? this.content.slice(0, 61) : Maleskine.Utils.removeHtmlTags(this.content).slice(0, 61)
        }, r.prototype.linkShareTo = function(e) {
            return Maleskine.Sns.shareScript(this, e)
        }, r.prototype.writerPath = function() {
            return "/notebooks/" + this.notebook_id + "/notes/" + this.id
        }, r.prototype.notebook = function() {
            return Writer.Notebook.exists(this.notebook_id)
        }, r.prototype.fullUrl = function() {
            return t.domain + "/p/" + this.slug
        }, r.prototype.isInitialNote = function() {
            var e;
            return e = this.title, o.call(Writer.DEFAULT_TITLES, e) >= 0 && 0 === this.content.length
        }, r.prototype.needsCompile = function() {
            return this.last_compiled_at < this.content_updated_at
        }, r.prototype.checkImage = function(e) {
            return $.get(this.url("image"), function() {
                return function(t) {
                    return e(t)
                }
            }(this))
        }, r.prototype.checkQRCode = function(e) {
            return $.get(this.url("qrcode"), function() {
                return function(t) {
                    return e(t)
                }
            }(this))
        }, r.prototype.destroyDate = function() {
            var e;
            return e = new Date(this.deleted_at), e.setDate(e.getDate() + 60), e
        }, r.prototype.destroyDaysLeft = function() {
            var e;
            return e = new Date(this.deleted_at), Math.floor(60 - (new Date - e) / 864e5)
        }, r.prototype.putBack = function() {
            return $.ajax({
                type: "POST",
                url: this.url("put_back"),
                dataType: "json",
                timeout: Writer.AJAX_TIMEOUT
            }).success(function(e) {
                return function(t) {
                    var n;
                    return e.updateAttribute("deleted_at", t.deleted_at, {
                        ajax: !1
                    }), n = Writer.Notebook.find(t.notebook_id), n.deleted_at = t.deleted_at, n.save({
                        ajax: !1
                    }), Writer.Notebook.trigger("put-back"), Spine.trigger("recycle-on-put-back")
                }
            }(this)).fail(function() {
                return function(e, t, n) {
                    return r.trigger("ajaxError", null, e, t, n)
                }
            }(this))
        }, r.prototype.move = function(e) {
            return $.ajax({
                type: "POST",
                url: this.url("move"),
                data: {
                    new_notebook_id: e
                },
                dataType: "json",
                timeout: Writer.AJAX_TIMEOUT
            }).success(function(e) {
                return function(t, n, i) {
                    return e.updateAttribute("notebook_id", t.notebook_id, {
                        ajax: !1
                    }), e.updateAttribute("seq_in_nb", t.seq_in_nb, {
                        ajax: !1
                    }), e.trigger("moved"), r.trigger("ajaxSuccess", null, n, i)
                }
            }(this)).fail(function() {
                return function(e, t, n) {
                    return r.trigger("ajaxError", null, e, t, n)
                }
            }(this))
        }, r.prototype.publicize = function(e, t) {
            return $.ajax({
                type: "POST",
                url: this.url("publicize"),
                dataType: "json",
                timeout: 2e4
            }).success(function(t) {
                return function(n, i, o) {
                    var a;
                    return a = n.note.shared ? "public" : "private", t.shared = n.note.shared, t.last_compiled_at = n.note.last_compiled_at, t.save({
                        ajax: !1
                    }), t.related_collections = n.collections, t.trigger(a), r.trigger("ajaxSuccess", null, i, o), Spine.trigger("open-share-modal", Writer.currentNote), n.alert && noty({
                        text: n.alert,
                        layout: "topCenter",
                        type: "error",
                        timeout: 3500,
                        theme: "maleskineTheme"
                    }), e ? e() : void 0
                }
            }(this)).fail(function() {
                return function(e, n, i) {
                    return r.trigger("ajaxError", null, e, n, i), t ? t() : void 0
                }
            }(this)).complete(function() {
                return function() {
                    return $("div.publish-loading").hide()
                }
            }(this))
        }, r.prototype.privatize = function() {
            return $.ajax({
                type: "POST",
                url: this.url("privatize"),
                dataType: "json",
                timeout: Writer.AJAX_TIMEOUT
            }).success(function(e) {
                return function(t, n, i) {
                    var o;
                    return o = t.shared ? "public" : "private", e.shared = t.shared, e.save({
                        ajax: !1
                    }), e.trigger(o), r.trigger("ajaxSuccess", null, n, i)
                }
            }(this)).fail(function() {
                return function(e, t, n) {
                    return r.trigger("ajaxError", null, e, t, n)
                }
            }(this))
        }, r.prototype.compile = function(e, t) {
            return $.ajax({
                type: "POST",
                url: this.url("compile"),
                dataType: "json",
                timeout: Writer.AJAX_TIMEOUT
            }).success(function(t) {
                return function(n, i, o) {
                    return t.last_compiled_at = n.last_compiled_at, t.save({
                        ajax: !1
                    }), t.trigger("note-compiled"), r.trigger("ajaxSuccess", null, i, o), e ? e() : void 0
                }
            }(this)).fail(function() {
                return function(e, n, i) {
                    return r.trigger("ajaxError", null, e, n, i), t ? t() : void 0
                }
            }(this))
        }, r.prototype.isMarkdown = function() {
            return "markdown" === this.note_type
        }, r.prototype.isRichText = function() {
            return "plain" === this.note_type
        }, r.prototype.contentWithoutMarkup = function() {
            return this.isRichText() ? Maleskine.Utils.removeHtmlTags(this.content) : this.content
        }, r.prototype.softDestroy = function() {
            return $.ajax({
                type: "POST",
                url: this.url("soft_destroy"),
                dataType: "json",
                timeout: Writer.AJAX_TIMEOUT
            }).success(function(e) {
                return function(t, n, i) {
                    return e.deleted_at = t.deleted_at, e.save({
                        ajax: !1
                    }), r.trigger("soft-destroy", e), r.trigger("ajaxSuccess", null, n, i)
                }
            }(this)).fail(function() {
                return function(e, t, n) {
                    return r.trigger("ajaxError", null, e, t, n)
                }
            }(this))
        }, r.findInDeletedNotes = function(e) {
            var t;
            return t = r.select(function(t) {
                return null != t.deleted_at && t.id === parseInt(e)
            }), t.sort(function(e, t) {
                return new Date(t.deleted_at) - new Date(e.deleted_at)
            }), t[0]
        }, r.allDeletedNotes = function() {
            var e;
            return e = r.select(function(e) {
                return null != e.deleted_at
            }), e.sort(function(e, t) {
                return new Date(e.deleted_at) - new Date(t.deleted_at)
            })
        }, r.firstSeqInNotebook = function(e) {
            var t;
            return t = e.allUndeletedNotes(), 0 === t.length ? 0 : t.first().seq_in_nb
        }, r.lastSeqInNotebook = function(e) {
            var t;
            return t = e.allUndeletedNotes(), 0 === t.length ? 0 : t.last().seq_in_nb
        }, r.removeRecord = function(e) {
            return delete r.records[e]
        }, r.orderedFirstInNotebook = function(e) {
            return e.allUndeletedNotes()[0]
        }, r.updateSequence = function(e) {
            return $.ajax({
                type: "POST",
                url: r.url + "/update_seq",
                data: e,
                dataType: "json",
                timeout: Writer.AJAX_TIMEOUT
            }).success(function(e, t, n) {
                var i, o, a, s;
                for (i = 0, o = e.length; o > i; i++) a = e[i], s = r.find(a.id), s && null != s && (s.seq_in_nb = a.seq_in_nb, s.save({
                    ajax: !1
                }));
                return r.trigger("ajaxSuccess", null, t, n)
            }).fail(function(e, t, n) {
                return r.trigger("ajaxError", null, e, t, n)
            })
        }, r
    }(Spine.Model)
}.call(this), function() {
    var e, t = function(e, t) {
            function i() {
                this.constructor = e
            }
            for (var r in t) n.call(t, r) && (e[r] = t[r]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        },
        n = {}.hasOwnProperty;
    e = Maleskine.Settings, Writer.NoteLog = function(e) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return t(n, e), n.configure("NoteLog", "id", "app", "title", "content", "note_id", "name", "updated_at", "formatted_updated_at", "slot", "note_log_type"), n.belongsTo("note", "Writer.Note"), n.extend(Spine.Model.Ajax), n.url = "/writer/note_logs", n.prototype.isAutoSaveLog = function() {
            return this.slot >= 0
        }, n.prototype.isPublishLog = function() {
            return -1 === this.slot
        }, n.prototype.isCompileLog = function() {
            return -2 === this.slot
        }, n.prototype.note = function() {
            return Writer.Note.find(this.note_id)
        }, n.prototype.restore = function(e) {
            var t, n;
            return t = e || {}, n = this.ajax().ajax({
                url: this.url("restore"),
                type: "POST"
            }), n.success(function(t) {
                return function(n) {
                    var i;
                    return i = t.note(), i.title = n.title, i.content = null, i.save({
                        ajax: !1
                    }), e.success ? e.success() : void 0
                }
            }(this))
        }, n
    }(Spine.Model)
}.call(this), function() {
    var e, t = function(e, t) {
            function i() {
                this.constructor = e
            }
            for (var r in t) n.call(t, r) && (e[r] = t[r]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        },
        n = {}.hasOwnProperty;
    e = Writer.Note, Writer.Notebook = function(n) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }
        return t(i, n), i.configure("Notebook", "name", "seq", "user_id", "deleted_at"), i.belongsTo("user", "Writer.User"), i.hasMany("notes", "Writer.Note"), i.extend(Spine.Model.Ajax), i.url = "/writer/notebooks", i.prototype.allUndeletedNotes = function() {
            var e;
            return e = this.notes().select(function(e) {
                return null == e.deleted_at
            }), e.sort(function(e, t) {
                return e.seq_in_nb - t.seq_in_nb
            }), e
        }, i.prototype.writerPath = function() {
            return "/notebooks/" + this.id
        }, i.prototype.firstNote = function() {
            return this.allUndeletedNotes()[0]
        }, i.allUndeletedNotebooks = function() {
            var e;
            return e = i.select(function(e) {
                return null == e.deleted_at
            }), e.sort(function(e, t) {
                return e.seq - t.seq
            }), e
        }, i.findInDeletedNotes = function(e) {
            var t;
            return t = i.select(function(t) {
                return null != t.deleted_at && t.id === parseInt(e)
            }), notebook.sort(function(e, t) {
                return e.seq - t.seq
            }), t[0]
        }, i.firstSeq = function() {
            return 0 === this.all().length ? 0 : this.first().seq
        }, i.updateSequence = function(e) {
            return $.ajax({
                type: "POST",
                url: i.url + "/update_seq",
                data: e,
                dataType: "json",
                timeout: Writer.AJAX_TIMEOUT
            }).success(function(e, t, n) {
                var r, o, a, s, l;
                for (l = i.records, r = 0, o = e.length; o > r; r++) a = e[r], s = l[a.id], s && null != s && s.load({
                    seq: a.seq
                });
                return i.trigger("ajaxSuccess", null, t, n)
            }).fail(function(e, t, n) {
                return i.trigger("ajaxError", null, e, t, n)
            })
        }, i.prototype.softDestroy = function() {
            return $.ajax({
                type: "POST",
                url: this.url("soft_destroy"),
                dataType: "json",
                timeout: Writer.AJAX_TIMEOUT
            }).success(function(t) {
                return function(n, r, o) {
                    var a, s, l, c, u;
                    for (u = n.notes, s = 0, l = u.length; l > s; s++) a = u[s], c = Writer.Note.find(a.id), c.deleted_at = a.deleted_at, c.save({
                        ajax: !1
                    }), e.trigger("soft-destroy", c);
                    return t.deleted_at = n.deleted_at, t.save({
                        ajax: !1
                    }), i.trigger("soft-destroy", t), i.trigger("ajaxSuccess", null, r, o)
                }
            }(this)).fail(function() {
                return function(t, n, i) {
                    return e.trigger("ajaxError", null, t, n, i)
                }
            }(this))
        }, i.prototype.fetchNotes = function() {
            return this.isPersisted() ? (this.notes = [], $.ajax({
                type: "GET",
                url: this.url("notes"),
                dataType: "json",
                timeout: Writer.AJAX_TIMEOUT
            }).success(function(t) {
                return function(n, r, o) {
                    return e.notebook_id = t.id, e.refresh(n, {
                        clear: !0
                    }), i.trigger("ajaxSuccess", null, r, o)
                }
            }(this)).fail(function() {
                return function(e, t, n) {
                    return i.trigger("ajaxError", null, e, t, n)
                }
            }(this))) : e.refresh([], {
                clear: !0
            })
        }, i
    }(Spine.Model)
}.call(this), function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Writer.UploadImage = function() {
        function t(t) {
            this.destroyPreview = e(this.destroyPreview, this), this.generatePreview = e(this.generatePreview, this), this.cancel = e(this.cancel, this), this.isURL = "string" == typeof t, this.isURL ? "data:" === t.substring(0, 5) ? (this.isURL = !1, this.file = t, this.type = Writer.UploadImage.getDataURIFileType(t), this.name = "data." + this.type, this.size = t.length) : this.origin = t : (this.file = t, this.type = t.type, this.name = t.name, this.size = t.size), this.checkImage(), this.needPreview = !1, this.uploadState = "ready"
        }
        return t.useBlob = !0, t.useFileReader = !1, t.acceptableImageType = /(\.|\/)(jpe?g|png|gif)$/i, t.checkIsUploadedImage = /^https?:\/\/([\w-]+\.jianshu\.(?:io|com)|jianshu\-(?:dev\.u|staging)\.qiniudn\.com)\/upload_images\//, t.isAcceptableImageType = function(e) {
            return e && t.acceptableImageType.test(e)
        }, t.getRegularizedImageURL = function(e, t) {
            var n, i;
            return i = {
                zoomed: e,
                origin: e
            }, t ? (e.match(Writer.UploadImage.checkIsUploadedImage) && (e = e.split("?")[0], n = Writer.UploadImage.getUploadedImagePostfix(t), i.zoomed = e + n.zoomed, i.origin = e + n.origin), i) : i
        }, t.getUploadedImagePostfix = function(e) {
            var t;
            return t = {
                zoomed: "?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",
                origin: "?imageMogr2/auto-orient/strip"
            }, e ? ("webp" === e ? (t.zoomed = "?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240/format/jpg", t.origin = "?imageMogr2/auto-orient/strip%7CimageView2/2/format/jpg") : "gif" === e && (t.zoomed = "?imageMogr2/auto-orient/strip", t.origin = "?imageMogr2/auto-orient/strip"), t) : t
        }, t.prototype.upload = function() {
            var e;
            if (this.isValid) return this.uploadState = "ready", this.isURL ? $.post("/upload_images/fetch.json", {
                url: this.origin
            }, function(e) {
                return function(t) {
                    return e.isCancelled ? void 0 : (e.url = t.url, e.slug = t.slug, e.width = t.width, e.height = t.height, e.format = t.format, e.onUploadSuccess(t), e.onUploadDone())
                }
            }(this)).fail(function(e) {
                return function(t, n, i) {
                    return e.isCancelled ? void 0 : (e.onUploadFail(t, n, i), e.onUploadDone())
                }
            }(this)) : (e = this.name, $.get("/upload_images/token.json", {
                filename: e
            }, function(t) {
                return function(n) {
                    var i, r;
                    if (!t.isCancelled) return e = n.filename, i = new FormData, i.append("token", n.token), i.append("key", n.key), i.append("file", t.file), r = $.ajax({
                        url: "http://upload.qiniu.com",
                        type: "POST",
                        contentType: !1,
                        data: i,
                        processData: !1
                    }), r.filename = e, r.done(function(i, r, o) {
                        var a;
                        if (!t.isCancelled) return e = o.filename, t.url = i.url, a = $.get("/upload_images/image_info.json", {
                            url: i.url
                        }), a.done(function(e) {
                            return t.isCancelled ? void 0 : (t.format = e.format, i.format = e.format, t.width = n.width, t.height = n.height, i.format = e.format, i.width = e.width, i.height = e.height, t.onUploadSuccess(i, r, o), t.onUploadDone())
                        }), a.fail(function() {
                            return t.isCancelled ? void 0 : t.onUploadDone()
                        })
                    }), r.fail(function(e, n, i) {
                        return t.isCancelled ? void 0 : (t.onUploadFail(e, n, i), t.onUploadDone())
                    })
                }
            }(this)).fail(function(e) {
                return function(t, n, i) {
                    return e.isCancelled ? void 0 : (e.onUploadFail(t, n, i), e.onUploadDone())
                }
            }(this))), this
        }, t.prototype.cancel = function(e, t) {
            return null == e && (e = !0), null == t && (t = !0), this.isCancelled = !0, t && this.onUploadFail(null, "cancelled", null), e && this.onUploadDone(), this
        }, t.prototype.isCancelled = !1, t.prototype.checkImage = function() {
            var e;
            return this.isValid = !0, this.isURL ? !this.origin || this.origin.length < 1 ? (this.error = I18n.t("kalamu.image_url_blank"), this.errorType = 1, this.isValid = !1) : "http:" !== (e = this.origin.split("/")[0]) && "https:" !== e && (this.error = I18n.t("kalamu.image_protocol_not_supported"), this.errorType = 2, this.isValid = !1) : this.type && this.type.length && t.isAcceptableImageType(this.name) ? this.size && this.size > Maleskine.Settings.uploadImageSizeLimit && (this.error = I18n.t("kalamu.size_excceed_limit"), this.errorType = 4, this.isValid = !1) : (this.error = I18n.t("kalamu.wrong_image_file_format"), this.errorType = 3, this.isValid = !1), this.isValid
        }, t.prototype.generatePreview = function(e) {
            var t, n;
            return this.needPreview = !0, this.previewImage = e, this.previewImage ? (t = this.previewImage.find("img"), this.isURL ? this.previewImage.updateImage(this.origin) : Writer.UploadImage.useBlob && window.URL && window.URL.createObjectURL ? (this.previewImage.blobUrl = URL.createObjectURL(this.file), this.previewImage.updateImage(this.previewImage.blobUrl)) : Writer.UploadImage.useFileReader && window.FileReader ? (n = new FileReader, n.onload = function(e) {
                return function(t) {
                    return null != e.previewImage && "ready" === e.uploadState ? e.previewImage.updateImage(t.target.result) : void 0
                }
            }(this), n.readAsDataURL(this.file)) : this.previewImage.updateImage(Maleskine.Images["writer-upload-img.gif"])) : void 0
        }, t.prototype.destroyPreview = function() {
            return this.previewImage && this.previewImage.blobUrl && window.URL && window.URL.revokeObjectURL ? (URL.revokeObjectURL(this.previewImage.blobUrl), this.previewImage.blobUrl = null) : void 0
        }, t.prototype.createMarkdownPlaceholderText = function() {
            var e, t, n;
            return t = this.name.split("."), n = (new Date).getTime() + "", e = n.length, n = n.substring(e - 6, e), t[t.length - 2] += "_" + n, t = t.join("."), this.markdownPlaceholder = "![Uploading " + t + " . . .]", this.markdownPlaceholder
        }, t.prototype.success = function(e) {
            return this.sucessCallback = e, this
        }, t.prototype.fail = function(e) {
            return this.failCallback = e, this
        }, t.prototype.done = function(e) {
            return this.doneCallback = e, this
        }, t.prototype.onUploadSuccess = function(e, t, n) {
            return e.regularizedImageURL = Writer.UploadImage.getRegularizedImageURL(e.url, e.format), this.uploadState = "success", null != this.sucessCallback ? this.sucessCallback(this, e, t, n) : void 0
        }, t.prototype.onUploadFail = function(e, t, n) {
            return this.uploadState = "failed", null != this.failCallback ? this.failCallback(this, e, t, n) : void 0
        }, t.prototype.onUploadDone = function() {
            return null != this.doneCallback ? this.doneCallback(this) : void 0
        }, t.getDataURIFileType = function(e) {
            var t;
            return t = e.split(",")[0].split(":")[1].split(";")[0], t.replace("image/", "")
        }, t.dataURI2Blob = function(e) {
            var t, n, i, r, o, a, s, l, c, u;
            for (c = e.split(","), t = c[0], s = c[1], n = t.indexOf("base64") >= 0 ? atob(s) : unescape(s), l = t.split(":")[1].split(";")[0], o = new Uint8Array(n.length), r = a = 0, u = n.length; u >= 0 ? u > a : a > u; r = u >= 0 ? ++a : --a) o[r] = n.charCodeAt(r);
            return i = new Blob([o], {
                type: l
            }), Writer.UploadImage.blobIndex = Writer.UploadImage.blobIndex || 0, Writer.UploadImage.blobIndex++, i.name = "blob_file_" + Writer.UploadImage.blobIndex + "." + l.replace("image/", ""), i
        }, t
    }()
}.call(this), function() {
    var e = function(e, n) {
            function i() {
                this.constructor = e
            }
            for (var r in n) t.call(n, r) && (e[r] = n[r]);
            return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
        },
        t = {}.hasOwnProperty;
    Writer.User = function(t) {
        function n() {
            return n.__super__.constructor.apply(this, arguments)
        }
        return e(n, t), n.configure("User", "preferred_note_type", "nickname", "avatar", "read_mode", "default_font"), n.hasMany("notebooks", "Writer.Notebook"), n.extend(Spine.Model.Ajax), n.url = "/writer/users", n.currentUser = function() {
            return n.all()[0]
        }, n.prototype.undeletedNotebooks = function() {
            var e;
            return e = this.notebooks().select(function(e) {
                return null == e.deleted_at
            }), e.sort(function(e, t) {
                return e.seq - t.seq
            }), e
        }, n.prototype.validate = function() {
            var e;
            return e = /^[^\-\(\)\{\}\[\]\s\!~`<>@;:\'\"\/\\\^#\$%\^&\*=\+]{2,15}$/, e.test(this.nickname) ? "" : I18n.t("nickname_format_invalid")
        }, n
    }(Spine.Model)
}.call(this), function() {
    var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        n = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) i.call(t, r) && (e[r] = t[r]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        i = {}.hasOwnProperty;
    e = Spine.$, Writer.Modal = function(i) {
        function r() {
            this.shown = t(this.shown, this), this.hidden = t(this.hidden, this), this.show = t(this.show, this), r.__super__.constructor.apply(this, arguments), this.el.hasClass("fullscreen") && (this.fullscreen = !0), this.el.on("show", this.show), this.el.on("shown", this.shown), this.el.on("hidden", this.hidden)
        }
        return n(r, i), r.extend(Spine.Events), r.prototype.elements = {
            "#hi": "hi"
        }, r.prototype.open = function() {
            return this.el.modal("show")
        }, r.prototype.close = function() {
            return this.el.modal("hide")
        }, r.prototype.show = function() {}, r.prototype.hidden = function() {}, r.prototype.shown = function() {
            return null != this.fullscreen ? e(".modal-backdrop").css("background", "#FFF").css("opacity", 1) : void 0
        }, r
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) a.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        a = {}.hasOwnProperty;
    e = Spine.$, t = Writer.Note, n = Writer.Notebook, i = Writer.User, Writer.RenameNotebookModal = function(e) {
        function t() {
            this.handleOpen = r(this.handleOpen, this), this.handleEnter = r(this.handleEnter, this), this.submit = r(this.submit, this), this.hidden = r(this.hidden, this), this.shown = r(this.shown, this), this.show = r(this.show, this), t.__super__.constructor.apply(this, arguments), Spine.bind("open-rename-notebook-modal", this.handleOpen)
        }
        return o(t, e), t.extend(Spine.Events), t.prototype.elements = {
            "input[type=text]": "nameInput",
            "input[type=submit]": "submitButton"
        }, t.prototype.events = {
            "click input[type=submit]": "submit",
            "click .cancel-button": "close",
            "keypress input[type=text]": "handleEnter"
        }, t.prototype.show = function() {
            return t.__super__.show.apply(this, arguments), this.nameInput.val(this.currentNotebook.name)
        }, t.prototype.shown = function() {
            return t.__super__.shown.apply(this, arguments), this.nameInput.select()
        }, t.prototype.hidden = function() {
            return t.__super__.hidden.apply(this, arguments), this.nameInput.val("")
        }, t.prototype.submit = function() {
            return this.currentNotebook.name = this.nameInput.val(), this.currentNotebook.save(), this.close()
        }, t.prototype.handleEnter = function(e) {
            return 13 === e.which ? this.submit() : void 0
        }, t.prototype.handleOpen = function(e) {
            return this.currentNotebook = e, this.open()
        }, t
    }(Writer.Modal)
}.call(this), function(e, t) {
    "use strict";
    var n, i = e,
        r = i.document,
        o = i.navigator,
        a = i.setTimeout,
        s = i.encodeURIComponent,
        l = i.ActiveXObject,
        c = i.Number.parseInt || i.parseInt,
        u = i.Number.parseFloat || i.parseFloat,
        d = i.Number.isNaN || i.isNaN,
        h = i.Math.round,
        p = i.Date.now,
        f = i.Object.keys,
        g = i.Object.defineProperty,
        m = i.Object.prototype.hasOwnProperty,
        v = i.Array.prototype.slice,
        b = function(e) {
            return v.call(e, 0)
        },
        y = function() {
            var e, n, i, r, o, a, s = b(arguments),
                l = s[0] || {};
            for (e = 1, n = s.length; n > e; e++) if (null != (i = s[e])) for (r in i) m.call(i, r) && (o = l[r], a = i[r], l !== a && a !== t && (l[r] = a));
            return l
        },
        w = function(e) {
            var t, n, i, r;
            if ("object" != typeof e || null == e) t = e;
            else if ("number" == typeof e.length) for (t = [], n = 0, i = e.length; i > n; n++) m.call(e, n) && (t[n] = w(e[n]));
            else {
                t = {};
                for (r in e) m.call(e, r) && (t[r] = w(e[r]))
            }
            return t
        },
        _ = function(e, t) {
            for (var n = {}, i = 0, r = t.length; r > i; i++) t[i] in e && (n[t[i]] = e[t[i]]);
            return n
        },
        S = function(e, t) {
            var n = {};
            for (var i in e) - 1 === t.indexOf(i) && (n[i] = e[i]);
            return n
        },
        C = function(e) {
            if (e) for (var t in e) m.call(e, t) && delete e[t];
            return e
        },
        k = function(e, t) {
            if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument)) do {
                if (e === t) return !0;
                e = e.parentNode
            } while (e);
            return !1
        },
        x = {
            bridge: null,
            version: "0.0.0",
            pluginType: "unknown",
            disabled: null,
            outdated: null,
            unavailable: null,
            deactivated: null,
            overdue: null,
            ready: null
        },
        T = "11.0.0",
        N = {},
        E = {},
        I = null,
        P = {
            ready: "Flash communication is established",
            error: {
                "flash-disabled": "Flash is disabled or not installed",
                "flash-outdated": "Flash is too outdated to support ZeroClipboard",
                "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
                "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate",
                "flash-overdue": "Flash communication was established but NOT within the acceptable time limit"
            }
        },
        D = function() {
            var e, t, n, i, o = "ZeroClipboard.swf";
            if (!r.currentScript || !(i = r.currentScript.src)) {
                var a = r.getElementsByTagName("script");
                if ("readyState" in a[0]) for (e = a.length; e-- && ("interactive" !== a[e].readyState || !(i = a[e].src)););
                else if ("loading" === r.readyState) i = a[a.length - 1].src;
                else {
                    for (e = a.length; e--;) {
                        if (n = a[e].src, !n) {
                            t = null;
                            break
                        }
                        if (n = n.split("#")[0].split("?")[0], n = n.slice(0, n.lastIndexOf("/") + 1), null == t) t = n;
                        else if (t !== n) {
                            t = null;
                            break
                        }
                    }
                    null !== t && (i = t)
                }
            }
            return i && (i = i.split("#")[0].split("?")[0], o = i.slice(0, i.lastIndexOf("/") + 1) + o), o
        }(),
        M = {
            swfPath: D,
            trustedDomains: e.location.host ? [e.location.host] : [],
            cacheBust: !0,
            forceEnhancedClipboard: !1,
            flashLoadTimeout: 3e4,
            autoActivate: !0,
            bubbleEvents: !0,
            containerId: "global-zeroclipboard-html-bridge",
            containerClass: "global-zeroclipboard-container",
            swfObjectId: "global-zeroclipboard-flash-bridge",
            hoverClass: "zeroclipboard-is-hover",
            activeClass: "zeroclipboard-is-active",
            forceHandCursor: !1,
            title: null,
            zIndex: 999999999
        },
        L = function(e) {
            if ("object" == typeof e && null !== e) for (var t in e) if (m.call(e, t)) if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t)) M[t] = e[t];
            else if (null == x.bridge) if ("containerId" === t || "swfObjectId" === t) {
                if (!V(e[t])) throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
                M[t] = e[t]
            } else M[t] = e[t]; {
                if ("string" != typeof e || !e) return w(M);
                if (m.call(M, e)) return M[e]
            }
        },
        R = function() {
            return {
                browser: _(o, ["userAgent", "platform", "appName"]),
                flash: S(x, ["bridge"]),
                zeroclipboard: {
                    version: Ct.version,
                    config: Ct.config()
                }
            }
        },
        A = function() {
            return !!(x.disabled || x.outdated || x.unavailable || x.deactivated)
        },
        B = function(e, t) {
            var n, i, r, o = {};
            if ("string" == typeof e && e) r = e.toLowerCase().split(/\s+/);
            else if ("object" == typeof e && e && "undefined" == typeof t) for (n in e) m.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Ct.on(n, e[n]);
            if (r && r.length) {
                for (n = 0, i = r.length; i > n; n++) e = r[n].replace(/^on/, ""), o[e] = !0, N[e] || (N[e] = []), N[e].push(t);
                if (o.ready && x.ready && Ct.emit({
                        type: "ready"
                    }), o.error) {
                    var a = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                    for (n = 0, i = a.length; i > n; n++) if (x[a[n]] === !0) {
                        Ct.emit({
                            type: "error",
                            name: "flash-" + a[n]
                        });
                        break
                    }
                }
            }
            return Ct
        },
        O = function(e, t) {
            var n, i, r, o, a;
            if (0 === arguments.length) o = f(N);
            else if ("string" == typeof e && e) o = e.split(/\s+/);
            else if ("object" == typeof e && e && "undefined" == typeof t) for (n in e) m.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && Ct.off(n, e[n]);
            if (o && o.length) for (n = 0, i = o.length; i > n; n++) if (e = o[n].toLowerCase().replace(/^on/, ""), a = N[e], a && a.length) if (t) for (r = a.indexOf(t); - 1 !== r;) a.splice(r, 1), r = a.indexOf(t, r);
            else a.length = 0;
            return Ct
        },
        F = function(e) {
            var t;
            return t = "string" == typeof e && e ? w(N[e]) || null : w(N)
        },
        H = function(e) {
            var t, n, i;
            return e = Q(e), e && !tt(e) ? "ready" === e.type && x.overdue === !0 ? Ct.emit({
                type: "error",
                name: "flash-overdue"
            }) : (t = y({}, e), et.call(this, t), "copy" === e.type && (i = st(E), n = i.data, I = i.formatMap), n) : void 0
        },
        W = function() {
            if ("boolean" != typeof x.ready && (x.ready = !1), !Ct.isFlashUnusable() && null === x.bridge) {
                var e = M.flashLoadTimeout;
                "number" == typeof e && e >= 0 && a(function() {
                    "boolean" != typeof x.deactivated && (x.deactivated = !0), x.deactivated === !0 && Ct.emit({
                        type: "error",
                        name: "flash-deactivated"
                    })
                }, e), x.overdue = !1, ot()
            }
        },
        $ = function() {
            Ct.clearData(), Ct.blur(), Ct.emit("destroy"), at(), Ct.off()
        },
        U = function(e, t) {
            var n;
            if ("object" == typeof e && e && "undefined" == typeof t) n = e, Ct.clearData();
            else {
                if ("string" != typeof e || !e) return;
                n = {}, n[e] = t
            }
            for (var i in n)"string" == typeof i && i && m.call(n, i) && "string" == typeof n[i] && n[i] && (E[i] = n[i])
        },
        j = function(e) {
            "undefined" == typeof e ? (C(E), I = null) : "string" == typeof e && m.call(E, e) && delete E[e]
        },
        z = function(e) {
            return "undefined" == typeof e ? w(E) : "string" == typeof e && m.call(E, e) ? E[e] : void 0
        },
        G = function(e) {
            if (e && 1 === e.nodeType) {
                n && (gt(n, M.activeClass), n !== e && gt(n, M.hoverClass)), n = e, ft(e, M.hoverClass);
                var t = e.getAttribute("title") || M.title;
                if ("string" == typeof t && t) {
                    var i = rt(x.bridge);
                    i && i.setAttribute("title", t)
                }
                var r = M.forceHandCursor === !0 || "pointer" === mt(e, "cursor");
                wt(r), yt()
            }
        },
        q = function() {
            var e = rt(x.bridge);
            e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.top = "1px"), n && (gt(n, M.hoverClass), gt(n, M.activeClass), n = null)
        },
        K = function() {
            return n || null
        },
        V = function(e) {
            return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
        },
        Q = function(e) {
            var t;
            if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
                y(e, {
                    type: t.toLowerCase(),
                    target: e.target || n || null,
                    relatedTarget: e.relatedTarget || null,
                    currentTarget: x && x.bridge || null,
                    timeStamp: e.timeStamp || p() || null
                });
                var i = P[e.type];
                return "error" === e.type && e.name && i && (i = i[e.name]), i && (e.message = i), "ready" === e.type && y(e, {
                    target: null,
                    version: x.version
                }), "error" === e.type && (/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(e.name) && y(e, {
                    target: null,
                    minimumVersion: T
                }), /^flash-(outdated|unavailable|deactivated|overdue)$/.test(e.name) && y(e, {
                    version: x.version
                })), "copy" === e.type && (e.clipboardData = {
                    setData: Ct.setData,
                    clearData: Ct.clearData
                }), "aftercopy" === e.type && (e = lt(e, I)), e.target && !e.relatedTarget && (e.relatedTarget = J(e.target)), e = Y(e)
            }
        },
        J = function(e) {
            var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
            return t ? r.getElementById(t) : null
        },
        Y = function(e) {
            if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
                var n = e.target,
                    o = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : t,
                    a = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : t,
                    s = bt(n),
                    l = i.screenLeft || i.screenX || 0,
                    c = i.screenTop || i.screenY || 0,
                    u = r.body.scrollLeft + r.documentElement.scrollLeft,
                    d = r.body.scrollTop + r.documentElement.scrollTop,
                    h = s.left + ("number" == typeof e._stageX ? e._stageX : 0),
                    p = s.top + ("number" == typeof e._stageY ? e._stageY : 0),
                    f = h - u,
                    g = p - d,
                    m = l + f,
                    v = c + g,
                    b = "number" == typeof e.movementX ? e.movementX : 0,
                    w = "number" == typeof e.movementY ? e.movementY : 0;
                delete e._stageX, delete e._stageY, y(e, {
                    srcElement: n,
                    fromElement: o,
                    toElement: a,
                    screenX: m,
                    screenY: v,
                    pageX: h,
                    pageY: p,
                    clientX: f,
                    clientY: g,
                    x: f,
                    y: g,
                    movementX: b,
                    movementY: w,
                    offsetX: 0,
                    offsetY: 0,
                    layerX: 0,
                    layerY: 0
                })
            }
            return e
        },
        X = function(e) {
            var t = e && "string" == typeof e.type && e.type || "";
            return !/^(?:(?:before)?copy|destroy)$/.test(t)
        },
        Z = function(e, t, n, i) {
            i ? a(function() {
                e.apply(t, n)
            }, 0) : e.apply(t, n)
        },
        et = function(e) {
            if ("object" == typeof e && e && e.type) {
                var t = X(e),
                    n = N["*"] || [],
                    r = N[e.type] || [],
                    o = n.concat(r);
                if (o && o.length) {
                    var a, s, l, c, u, d = this;
                    for (a = 0, s = o.length; s > a; a++) l = o[a], c = d, "string" == typeof l && "function" == typeof i[l] && (l = i[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = y({}, e), Z(l, c, [u], t))
                }
                return this
            }
        },
        tt = function(e) {
            var t = e.target || n || null,
                i = "swf" === e._source;
            delete e._source;
            var r = ["flash-disabled", "flash-outdated", "flash-unavailable", "flash-deactivated", "flash-overdue"];
            switch (e.type) {
                case "error":
                    -1 !== r.indexOf(e.name) && y(x, {
                        disabled: "flash-disabled" === e.name,
                        outdated: "flash-outdated" === e.name,
                        unavailable: "flash-unavailable" === e.name,
                        deactivated: "flash-deactivated" === e.name,
                        overdue: "flash-overdue" === e.name,
                        ready: !1
                    });
                    break;
                case "ready":
                    var o = x.deactivated === !0;
                    y(x, {
                        disabled: !1,
                        outdated: !1,
                        unavailable: !1,
                        deactivated: !1,
                        overdue: o,
                        ready: !o
                    });
                    break;
                case "copy":
                    var a, s, l = e.relatedTarget;
                    !E["text/html"] && !E["text/plain"] && l && (s = l.value || l.outerHTML || l.innerHTML) && (a = l.value || l.textContent || l.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", a), s !== a && e.clipboardData.setData("text/html", s)) : !E["text/plain"] && e.target && (a = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", a));
                    break;
                case "aftercopy":
                    Ct.clearData(), t && t !== pt() && t.focus && t.focus();
                    break;
                case "_mouseover":
                    Ct.focus(t), M.bubbleEvents === !0 && i && (t && t !== e.relatedTarget && !k(e.relatedTarget, t) && nt(y({}, e, {
                        type: "mouseenter",
                        bubbles: !1,
                        cancelable: !1
                    })), nt(y({}, e, {
                        type: "mouseover"
                    })));
                    break;
                case "_mouseout":
                    Ct.blur(), M.bubbleEvents === !0 && i && (t && t !== e.relatedTarget && !k(e.relatedTarget, t) && nt(y({}, e, {
                        type: "mouseleave",
                        bubbles: !1,
                        cancelable: !1
                    })), nt(y({}, e, {
                        type: "mouseout"
                    })));
                    break;
                case "_mousedown":
                    ft(t, M.activeClass), M.bubbleEvents === !0 && i && nt(y({}, e, {
                        type: e.type.slice(1)
                    }));
                    break;
                case "_mouseup":
                    gt(t, M.activeClass), M.bubbleEvents === !0 && i && nt(y({}, e, {
                        type: e.type.slice(1)
                    }));
                    break;
                case "_click":
                case "_mousemove":
                    M.bubbleEvents === !0 && i && nt(y({}, e, {
                        type: e.type.slice(1)
                    }))
            }
            return /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type) ? !0 : void 0
        },
        nt = function(e) {
            if (e && "string" == typeof e.type && e) {
                var t, n = e.target || null,
                    o = n && n.ownerDocument || r,
                    a = {
                        view: o.defaultView || i,
                        canBubble: !0,
                        cancelable: !0,
                        detail: "click" === e.type ? 1 : 0,
                        button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : o.createEvent ? 0 : 1
                    },
                    s = y(a, e);
                n && o.createEvent && n.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget], t = o.createEvent("MouseEvents"), t.initMouseEvent && (t.initMouseEvent.apply(t, s), t._source = "js", n.dispatchEvent(t)))
            }
        },
        it = function() {
            var e = r.createElement("div");
            return e.id = M.containerId, e.className = M.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + _t(M.zIndex), e
        },
        rt = function(e) {
            for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;) t = t.parentNode;
            return t || null
        },
        ot = function() {
            var e, t = x.bridge,
                n = rt(t);
            if (!t) {
                var o = ht(i.location.host, M),
                    a = "never" === o ? "none" : "all",
                    s = ut(M),
                    l = M.swfPath + ct(M.swfPath, M);
                n = it();
                var c = r.createElement("div");
                n.appendChild(c), r.body.appendChild(n);
                var u = r.createElement("div"),
                    d = "activex" === x.pluginType;
                u.innerHTML = '<object id="' + M.swfObjectId + '" name="' + M.swfObjectId + '" width="100%" height="100%" ' + (d ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (d ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + o + '"/><param name="allowNetworking" value="' + a + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/></object>', t = u.firstChild, u = null, t.ZeroClipboard = Ct, n.replaceChild(t, c)
            }
            return t || (t = r[M.swfObjectId], t && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), x.bridge = t || null, t
        },
        at = function() {
            var e = x.bridge;
            if (e) {
                var t = rt(e);
                t && ("activex" === x.pluginType && "readyState" in e ? (e.style.display = "none", function n() {
                    if (4 === e.readyState) {
                        for (var i in e)"function" == typeof e[i] && (e[i] = null);
                        e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t)
                    } else a(n, 10)
                }()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), x.ready = null, x.bridge = null, x.deactivated = null
            }
        },
        st = function(e) {
            var t = {},
                n = {};
            if ("object" == typeof e && e) {
                for (var i in e) if (i && m.call(e, i) && "string" == typeof e[i] && e[i]) switch (i.toLowerCase()) {
                    case "text/plain":
                    case "text":
                    case "air:text":
                    case "flash:text":
                        t.text = e[i], n.text = i;
                        break;
                    case "text/html":
                    case "html":
                    case "air:html":
                    case "flash:html":
                        t.html = e[i], n.html = i;
                        break;
                    case "application/rtf":
                    case "text/rtf":
                    case "rtf":
                    case "richtext":
                    case "air:rtf":
                    case "flash:rtf":
                        t.rtf = e[i], n.rtf = i
                }
                return {
                    data: t,
                    formatMap: n
                }
            }
        },
        lt = function(e, t) {
            if ("object" != typeof e || !e || "object" != typeof t || !t) return e;
            var n = {};
            for (var i in e) if (m.call(e, i)) {
                if ("success" !== i && "data" !== i) {
                    n[i] = e[i];
                    continue
                }
                n[i] = {};
                var r = e[i];
                for (var o in r) o && m.call(r, o) && m.call(t, o) && (n[i][t[o]] = r[o])
            }
            return n
        },
        ct = function(e, t) {
            var n = null == t || t && t.cacheBust === !0;
            return n ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + p() : ""
        },
        ut = function(e) {
            var t, n, r, o, a = "",
                l = [];
            if (e.trustedDomains && ("string" == typeof e.trustedDomains ? o = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length" in e.trustedDomains && (o = e.trustedDomains)), o && o.length) for (t = 0, n = o.length; n > t; t++) if (m.call(o, t) && o[t] && "string" == typeof o[t]) {
                if (r = dt(o[t]), !r) continue;
                if ("*" === r) {
                    l.length = 0, l.push(r);
                    break
                }
                l.push.apply(l, [r, "//" + r, i.location.protocol + "//" + r])
            }
            return l.length && (a += "trustedOrigins=" + s(l.join(","))), e.forceEnhancedClipboard === !0 && (a += (a ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (a += (a ? "&" : "") + "swfObjectId=" + s(e.swfObjectId)), a
        },
        dt = function(e) {
            if (null == e || "" === e) return null;
            if (e = e.replace(/^\s+|\s+$/g, ""), "" === e) return null;
            var t = e.indexOf("//");
            e = -1 === t ? e : e.slice(t + 2);
            var n = e.indexOf("/");
            return e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n), e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
        },
        ht = function() {
            var e = function(e) {
                var t, n, i, r = [];
                if ("string" == typeof e && (e = [e]), "object" != typeof e || !e || "number" != typeof e.length) return r;
                for (t = 0, n = e.length; n > t; t++) if (m.call(e, t) && (i = dt(e[t]))) {
                    if ("*" === i) {
                        r.length = 0, r.push("*");
                        break
                    } - 1 === r.indexOf(i) && r.push(i)
                }
                return r
            };
            return function(t, n) {
                var i = dt(n.swfPath);
                null === i && (i = t);
                var r = e(n.trustedDomains),
                    o = r.length;
                if (o > 0) {
                    if (1 === o && "*" === r[0]) return "always";
                    if (-1 !== r.indexOf(t)) return 1 === o && t === i ? "sameDomain" : "always"
                }
                return "never"
            }
        }(),
        pt = function() {
            try {
                return r.activeElement
            } catch (e) {
                return null
            }
        },
        ft = function(e, t) {
            if (!e || 1 !== e.nodeType) return e;
            if (e.classList) return e.classList.contains(t) || e.classList.add(t), e;
            if (t && "string" == typeof t) {
                var n = (t || "").split(/\s+/);
                if (1 === e.nodeType) if (e.className) {
                    for (var i = " " + e.className + " ", r = e.className, o = 0, a = n.length; a > o; o++) i.indexOf(" " + n[o] + " ") < 0 && (r += " " + n[o]);
                    e.className = r.replace(/^\s+|\s+$/g, "")
                } else e.className = t
            }
            return e
        },
        gt = function(e, t) {
            if (!e || 1 !== e.nodeType) return e;
            if (e.classList) return e.classList.contains(t) && e.classList.remove(t), e;
            if ("string" == typeof t && t) {
                var n = t.split(/\s+/);
                if (1 === e.nodeType && e.className) {
                    for (var i = (" " + e.className + " ").replace(/[\n\t]/g, " "), r = 0, o = n.length; o > r; r++) i = i.replace(" " + n[r] + " ", " ");
                    e.className = i.replace(/^\s+|\s+$/g, "")
                }
            }
            return e
        },
        mt = function(e, t) {
            var n = i.getComputedStyle(e, null).getPropertyValue(t);
            return "cursor" !== t || n && "auto" !== n || "A" !== e.nodeName ? n : "pointer"
        },
        vt = function() {
            var e, t, n, i = 1;
            return "function" == typeof r.body.getBoundingClientRect && (e = r.body.getBoundingClientRect(), t = e.right - e.left, n = r.body.offsetWidth, i = h(t / n * 100) / 100), i
        },
        bt = function(e) {
            var t = {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            if (e.getBoundingClientRect) {
                var n, o, a, s = e.getBoundingClientRect();
                "pageXOffset" in i && "pageYOffset" in i ? (n = i.pageXOffset, o = i.pageYOffset) : (a = vt(), n = h(r.documentElement.scrollLeft / a), o = h(r.documentElement.scrollTop / a));
                var l = r.documentElement.clientLeft || 0,
                    c = r.documentElement.clientTop || 0;
                t.left = s.left + n - l, t.top = s.top + o - c, t.width = "width" in s ? s.width : s.right - s.left, t.height = "height" in s ? s.height : s.bottom - s.top
            }
            return t
        },
        yt = function() {
            var e;
            if (n && (e = rt(x.bridge))) {
                var t = bt(n);
                y(e.style, {
                    width: t.width + "px",
                    height: t.height + "px",
                    top: t.top + "px",
                    left: t.left + "px",
                    zIndex: "" + _t(M.zIndex)
                })
            }
        },
        wt = function(e) {
            x.ready === !0 && (x.bridge && "function" == typeof x.bridge.setHandCursor ? x.bridge.setHandCursor(e) : x.ready = !1)
        },
        _t = function(e) {
            if (/^(?:auto|inherit)$/.test(e)) return e;
            var t;
            return "number" != typeof e || d(e) ? "string" == typeof e && (t = _t(c(e, 10))) : t = e, "number" == typeof t ? t : "auto"
        },
        St = function(e) {
            function t(e) {
                var t = e.match(/[\d]+/g);
                return t.length = 3, t.join(".")
            }
            function n(e) {
                return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
            }
            function i(e) {
                e && (l = !0, e.version && (h = t(e.version)), !h && e.description && (h = t(e.description)), e.filename && (d = n(e.filename)))
            }
            var r, a, s, l = !1,
                c = !1,
                d = !1,
                h = "";
            if (o.plugins && o.plugins.length) r = o.plugins["Shockwave Flash"], i(r), o.plugins["Shockwave Flash 2.0"] && (l = !0, h = "2.0.0.11");
            else if (o.mimeTypes && o.mimeTypes.length) s = o.mimeTypes["application/x-shockwave-flash"], r = s && s.enabledPlugin, i(r);
            else if ("undefined" != typeof e) {
                c = !0;
                try {
                    a = new e("ShockwaveFlash.ShockwaveFlash.7"), l = !0, h = t(a.GetVariable("$version"))
                } catch (p) {
                    try {
                        a = new e("ShockwaveFlash.ShockwaveFlash.6"), l = !0, h = "6.0.21"
                    } catch (f) {
                        try {
                            a = new e("ShockwaveFlash.ShockwaveFlash"), l = !0, h = t(a.GetVariable("$version"))
                        } catch (g) {
                            c = !1
                        }
                    }
                }
            }
            x.disabled = l !== !0, x.outdated = h && u(h) < u(T), x.version = h || "0.0.0", x.pluginType = d ? "pepper" : c ? "activex" : l ? "netscape" : "unknown"
        };
    St(l);
    var Ct = function() {
        return this instanceof Ct ? void("function" == typeof Ct._createClient && Ct._createClient.apply(this, b(arguments))) : new Ct
    };
    g(Ct, "version", {
        value: "2.1.2",
        writable: !1,
        configurable: !0,
        enumerable: !0
    }), Ct.config = function() {
        return L.apply(this, b(arguments))
    }, Ct.state = function() {
        return R.apply(this, b(arguments))
    }, Ct.isFlashUnusable = function() {
        return A.apply(this, b(arguments))
    }, Ct.on = function() {
        return B.apply(this, b(arguments))
    }, Ct.off = function() {
        return O.apply(this, b(arguments))
    }, Ct.handlers = function() {
        return F.apply(this, b(arguments))
    }, Ct.emit = function() {
        return H.apply(this, b(arguments))
    }, Ct.create = function() {
        return W.apply(this, b(arguments))
    }, Ct.destroy = function() {
        return $.apply(this, b(arguments))
    }, Ct.setData = function() {
        return U.apply(this, b(arguments))
    }, Ct.clearData = function() {
        return j.apply(this, b(arguments))
    }, Ct.getData = function() {
        return z.apply(this, b(arguments))
    }, Ct.focus = Ct.activate = function() {
        return G.apply(this, b(arguments))
    }, Ct.blur = Ct.deactivate = function() {
        return q.apply(this, b(arguments))
    }, Ct.activeElement = function() {
        return K.apply(this, b(arguments))
    };
    var kt = 0,
        xt = {},
        Tt = 0,
        Nt = {},
        Et = {};
    y(M, {
        autoActivate: !0
    });
    var It = function(e) {
            var t = this;
            t.id = "" + kt++, xt[t.id] = {
                instance: t,
                elements: [],
                handlers: {}
            }, e && t.clip(e), Ct.on("*", function(e) {
                return t.emit(e)
            }), Ct.on("destroy", function() {
                t.destroy()
            }), Ct.create()
        },
        Pt = function(e, t) {
            var n, i, r, o = {},
                a = xt[this.id] && xt[this.id].handlers;
            if ("string" == typeof e && e) r = e.toLowerCase().split(/\s+/);
            else if ("object" == typeof e && e && "undefined" == typeof t) for (n in e) m.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.on(n, e[n]);
            if (r && r.length) {
                for (n = 0, i = r.length; i > n; n++) e = r[n].replace(/^on/, ""), o[e] = !0, a[e] || (a[e] = []), a[e].push(t);
                if (o.ready && x.ready && this.emit({
                        type: "ready",
                        client: this
                    }), o.error) {
                    var s = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                    for (n = 0, i = s.length; i > n; n++) if (x[s[n]]) {
                        this.emit({
                            type: "error",
                            name: "flash-" + s[n],
                            client: this
                        });
                        break
                    }
                }
            }
            return this
        },
        Dt = function(e, t) {
            var n, i, r, o, a, s = xt[this.id] && xt[this.id].handlers;
            if (0 === arguments.length) o = f(s);
            else if ("string" == typeof e && e) o = e.split(/\s+/);
            else if ("object" == typeof e && e && "undefined" == typeof t) for (n in e) m.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.off(n, e[n]);
            if (o && o.length) for (n = 0, i = o.length; i > n; n++) if (e = o[n].toLowerCase().replace(/^on/, ""), a = s[e], a && a.length) if (t) for (r = a.indexOf(t); - 1 !== r;) a.splice(r, 1), r = a.indexOf(t, r);
            else a.length = 0;
            return this
        },
        Mt = function(e) {
            var t = null,
                n = xt[this.id] && xt[this.id].handlers;
            return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : w(n)), t
        },
        Lt = function(e) {
            if (Ft.call(this, e)) {
                "object" == typeof e && e && "string" == typeof e.type && e.type && (e = y({}, e));
                var t = y({}, Q(e), {
                    client: this
                });
                Ht.call(this, t)
            }
            return this
        },
        Rt = function(e) {
            e = Wt(e);
            for (var t = 0; t < e.length; t++) if (m.call(e, t) && e[t] && 1 === e[t].nodeType) {
                e[t].zcClippingId ? -1 === Nt[e[t].zcClippingId].indexOf(this.id) && Nt[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + Tt++, Nt[e[t].zcClippingId] = [this.id], M.autoActivate === !0 && $t(e[t]));
                var n = xt[this.id] && xt[this.id].elements; - 1 === n.indexOf(e[t]) && n.push(e[t])
            }
            return this
        },
        At = function(e) {
            var t = xt[this.id];
            if (!t) return this;
            var n, i = t.elements;
            e = "undefined" == typeof e ? i.slice(0) : Wt(e);
            for (var r = e.length; r--;) if (m.call(e, r) && e[r] && 1 === e[r].nodeType) {
                for (n = 0; - 1 !== (n = i.indexOf(e[r], n));) i.splice(n, 1);
                var o = Nt[e[r].zcClippingId];
                if (o) {
                    for (n = 0; - 1 !== (n = o.indexOf(this.id, n));) o.splice(n, 1);
                    0 === o.length && (M.autoActivate === !0 && Ut(e[r]), delete e[r].zcClippingId)
                }
            }
            return this
        },
        Bt = function() {
            var e = xt[this.id];
            return e && e.elements ? e.elements.slice(0) : []
        },
        Ot = function() {
            this.unclip(), this.off(), delete xt[this.id]
        },
        Ft = function(e) {
            if (!e || !e.type) return !1;
            if (e.client && e.client !== this) return !1;
            var t = xt[this.id] && xt[this.id].elements,
                n = !! t && t.length > 0,
                i = !e.target || n && -1 !== t.indexOf(e.target),
                r = e.relatedTarget && n && -1 !== t.indexOf(e.relatedTarget),
                o = e.client && e.client === this;
            return i || r || o ? !0 : !1
        },
        Ht = function(e) {
            if ("object" == typeof e && e && e.type) {
                var t = X(e),
                    n = xt[this.id] && xt[this.id].handlers["*"] || [],
                    r = xt[this.id] && xt[this.id].handlers[e.type] || [],
                    o = n.concat(r);
                if (o && o.length) {
                    var a, s, l, c, u, d = this;
                    for (a = 0, s = o.length; s > a; a++) l = o[a], c = d, "string" == typeof l && "function" == typeof i[l] && (l = i[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = y({}, e), Z(l, c, [u], t))
                }
                return this
            }
        },
        Wt = function(e) {
            return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e
        },
        $t = function(e) {
            if (e && 1 === e.nodeType) {
                var t = function(e) {
                        (e || (e = i.event)) && ("js" !== e._source && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source)
                    },
                    n = function(n) {
                        (n || (n = i.event)) && (t(n), Ct.focus(e))
                    };
                e.addEventListener("mouseover", n, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), Et[e.zcClippingId] = {
                    mouseover: n,
                    mouseout: t,
                    mouseenter: t,
                    mouseleave: t,
                    mousemove: t
                }
            }
        },
        Ut = function(e) {
            if (e && 1 === e.nodeType) {
                var t = Et[e.zcClippingId];
                if ("object" == typeof t && t) {
                    for (var n, i, r = ["move", "leave", "enter", "out", "over"], o = 0, a = r.length; a > o; o++) n = "mouse" + r[o], i = t[n], "function" == typeof i && e.removeEventListener(n, i, !1);
                    delete Et[e.zcClippingId]
                }
            }
        };
    Ct._createClient = function() {
        It.apply(this, b(arguments))
    }, Ct.prototype.on = function() {
        return Pt.apply(this, b(arguments))
    }, Ct.prototype.off = function() {
        return Dt.apply(this, b(arguments))
    }, Ct.prototype.handlers = function() {
        return Mt.apply(this, b(arguments))
    }, Ct.prototype.emit = function() {
        return Lt.apply(this, b(arguments))
    }, Ct.prototype.clip = function() {
        return Rt.apply(this, b(arguments))
    }, Ct.prototype.unclip = function() {
        return At.apply(this, b(arguments))
    }, Ct.prototype.elements = function() {
        return Bt.apply(this, b(arguments))
    }, Ct.prototype.destroy = function() {
        return Ot.apply(this, b(arguments))
    }, Ct.prototype.setText = function(e) {
        return Ct.setData("text/plain", e), this
    }, Ct.prototype.setHtml = function(e) {
        return Ct.setData("text/html", e), this
    }, Ct.prototype.setRichText = function(e) {
        return Ct.setData("application/rtf", e), this
    }, Ct.prototype.setData = function() {
        return Ct.setData.apply(this, b(arguments)), this
    }, Ct.prototype.clearData = function() {
        return Ct.clearData.apply(this, b(arguments)), this
    }, Ct.prototype.getData = function() {
        return Ct.getData.apply(this, b(arguments))
    }, "function" == typeof define && define.amd ? define(function() {
        return Ct
    }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Ct : e.ZeroClipboard = Ct
}(function() {
    return this || window
}()), ZeroClipboard.config({
    swfPath: "http://cdn-qn0.jianshu.io/assets/ZeroClipboard-e49723276535f4d5adfc4dcfccd62c84.swf"
}), function() {
    var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) a.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        a = {}.hasOwnProperty;
    e = Spine.$, t = Writer.Note, n = Writer.Notebook, i = Writer.User, Writer.SharingModal = function(n) {
        function i() {
            this.selectPermLink = r(this.selectPermLink, this), this.fillDefaultCollections = r(this.fillDefaultCollections, this), this.showCollectionsListLoader = r(this.showCollectionsListLoader, this), this.refreshCollectionsListWithSearchResults = r(this.refreshCollectionsListWithSearchResults, this), this.refreshCollectionsList = r(this.refreshCollectionsList, this), this.openWeiboModal = r(this.openWeiboModal, this), this.handleOpen = r(this.handleOpen, this), this.hidden = r(this.hidden, this), this.shown = r(this.shown, this), this.show = r(this.show, this);
            var n;
            i.__super__.constructor.apply(this, arguments), t.bind("ajaxError", function(e) {
                return function(t, n) {
                    return 403 === n.status ? e.close() : void 0
                }
            }(this)), n = null, this.collectionSearch.userChange(function(t) {
                return function() {
                    var i;
                    return null != n && clearTimeout(n), i = t.collectionSearch.val(), "" === i ? t.fillDefaultCollections() : (n = setTimeout(function() {
                        return e.getJSON(Routes.writer_search_collections_by_title_path(), {
                            title: i,
                            note_id: t.currentNote.id,
                            limit: 6
                        }, t.refreshCollectionsListWithSearchResults)
                    }, 500), t.showCollectionsListLoader())
                }
            }(this)), Spine.bind("open-share-modal", this.handleOpen)
        }
        return o(i, n), i.extend(Spine.Events), i.prototype.elements = {
            "h2.title a": "noteTitle",
            ".permlink": "permlink",
            ".permlink input#permlink-text": "permlinkText",
            ".copy-to-clipboard": "copyToClip",
            "input.search-query": "collectionSearch",
            ".submission div.loader": "collectionsListLoader",
            ".submission div.no-search-result": "collectionsListEmpty",
            ".submission .contribute": "collectionsList",
            "li.share-wechat div": "qrcodeDiv"
        }, i.prototype.events = {
            "click [data-action=share-to-weibo]": "openWeiboModal",
            "mouseover .permlink input#permlink-text": "selectPermLink"
        }, i.prototype.show = function() {
            var e, t, n, r;
            for (i.__super__.show.apply(this, arguments), this.noteTitle.text(this.currentNote.title), this.noteTitle.prop("href", this.currentNote.fullUrl()), this.permlinkText.val(this.currentNote.fullUrl()), this.permlink.attr("href", this.currentNote.fullUrl()), this.fillDefaultCollections(), this.qrcodeDiv.empty(), Maleskine.Utils.generateQRcode(this.qrcodeDiv[0], this.currentNote.fullUrl() + "?utm_campaign=maleskine&utm_content=note&utm_medium=reader_share&utm_source=weixin", {
                width: 100,
                height: 100
            }), n = ["weibo", "tweibo", "qzone", "douban", "twitter", "facebook", "google_plus"], e = 0, t = n.length; t > e; e++) r = n[e], this.el.find("a[data-sns=" + r + "]").attr("href", this.currentNote.linkShareTo(r));
            return new ZeroClipboard(this.copyToClip.get(0))
        }, i.prototype.shown = function() {
            var e;
            return i.__super__.shown.apply(this, arguments), e = this.noteTitle.parent().tooltip(), e.tooltip().on("show shown hide hidden", function(e) {
                return e.stopPropagation()
            }), e.tooltip("show"), setTimeout(function(e) {
                return function() {
                    return e.noteTitle.parent().tooltip("hide")
                }
            }(this), 3e3)
        }, i.prototype.hidden = function() {
            return i.__super__.hidden.apply(this, arguments), this.noteTitle.text(""), this.noteTitle.parent().attr("href", ""), this.permlinkText.val(""), this.permlink.attr("href", ""), this.collectionsList.empty(), e(".publish-loading").hide()
        }, i.prototype.handleOpen = function(e) {
            return this.currentNote = e, this.open()
        }, i.prototype.openWeiboModal = function(e) {
            return this.stopEvent(e), Spine.trigger("open-weibo-modal", Writer.currentNote), this.close()
        }, i.prototype.refreshCollectionsList = function(e) {
            return this.collectionsListLoader.fadeOut("fast", function(t) {
                return function() {
                    return t.collectionsList.empty().append(JST["writer/views/templates/collection_cards"]({
                        collections: e,
                        current_note: t.currentNote.id
                    }))
                }
            }(this))
        }, i.prototype.refreshCollectionsListWithSearchResults = function(e) {
            return this.collectionsListLoader.fadeOut("fast", function(t) {
                return function() {
                    return 0 === e.collections.search_results.length ? t.collectionsListEmpty.fadeIn("fast") : t.collectionsList.empty().append(JST["writer/views/templates/collection_cards"]({
                        collections: e.collections,
                        current_note: t.currentNote.id
                    }))
                }
            }(this))
        }, i.prototype.showCollectionsListLoader = function() {
            return this.collectionsListEmpty.is(":visible") ? this.collectionsListEmpty.fadeOut(100, function(e) {
                return function() {
                    return e.collectionsList.empty(), e.collectionsListLoader.fadeIn("fast")
                }
            }(this)) : (this.collectionsList.empty(), this.collectionsListLoader.fadeIn("fast"))
        }, i.prototype.fillDefaultCollections = function() {
            return this.refreshCollectionsList(this.currentNote.related_collections)
        }, i.prototype.selectPermLink = function() {
            return this.permlinkText.focus(), this.permlinkText.select()
        }, i
    }(Writer.Modal)
}.call(this), function() {
    var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        n = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) i.call(t, r) && (e[r] = t[r]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        i = {}.hasOwnProperty;
    e = Spine.$, Writer.ViewModeModal = function(e) {
        function i() {
            this.setDay = t(this.setDay, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.extend(Spine.Events), i.prototype.events = {
            'click [data-action="set-day"]': "setDay",
            'click [data-action="set-night"]': "setNight",
            'click [data-action="set-font1"]': "setFont1",
            'click [data-action="set-font2"]': "setFont2"
        }, i.prototype.setDay = function() {
            return Maleskine.Utils.setDay()
        }, i.prototype.setNight = function() {
            return Maleskine.Utils.setNight()
        }, i.prototype.setFont1 = function() {
            return Maleskine.Utils.setFont1()
        }, i.prototype.setFont2 = function() {
            return Maleskine.Utils.setFont2()
        }, i
    }(Writer.Modal)
}.call(this), function(e, t) {
    var n = function(e, t, n, i) {
        var r = null,
            o = 0;
        return (isNaN(t) || 0 > t) && (t = 100), (isNaN(i) || 0 > i || i > t) && (i = t), "function" != typeof n ? n ?
            function() {
                var t = this,
                    n = arguments;
                e.apply(t, n)
            } : function() {
            function n() {
                var l = (new Date).getTime() - o;
                l > t ? (e.apply(a, s), r = null) : r = setTimeout(n, i)
            }
            var a = this,
                s = arguments;
            r && clearTimeout(r), o = (new Date).getTime(), r = setTimeout(n, i)
        } : function() {
            function a() {
                var c = (new Date).getTime() - o;
                c > t || n() ? (e.apply(s, l), r = null) : r = setTimeout(a, i)
            }
            var s = this,
                l = arguments;
            r ? (clearTimeout(r), r = null) : n() ? e.apply(s, l) : (o = (new Date).getTime(), r = setTimeout(a, i))
        }
    };
    e.fn.waitFor = n, e.fn[t] = function(e) {
        return e ? this.bind("resize", n(e)) : this.trigger(t)
    }
}(jQuery || Zepto, "smartResize"), function(e) {
    function t(t) {
        {
            var n = t.target;
            e(n).offset()
        }
        n.dragging = !0, n.dragX = t.clientX, n.dragY = t.clientY, n.dragLeft = parseInt(n.style.left, 10), n.dragTop = parseInt(n.style.top, 10), n.style.transition = "all 0ms linear"
    }
    function n(e) {
        var t = e.target;
        if (t.dragging) {
            if (!isNaN(e.which) && 1 !== e.which) return void i(e);
            t.style.left = e.clientX - t.dragX + t.dragLeft + "px", t.style.top = e.clientY - t.dragY + t.dragTop + "px"
        }
    }
    function i(e) {
        var t = e.target,
            n = Math.abs(t.dragLeft - parseInt(t.style.left, 10)),
            i = Math.abs(t.dragTop - parseInt(t.style.top, 10));
        20 > n && 20 > i ? t.dragging = !1 : setTimeout(function() {
            t.dragging = !1
        }, 10), t.style.transition = ""
    }
    var r = null,
        o = {},
        a = "click",
        s = {
            frameFill: .95,
            smartReisze: !0,
            zIndex: 1e3,
            container: null,
            width: 0,
            height: 0,
            group: "default",
            viewport: function(e) {
                return e
            },
            close: [{
                selector: "document",
                event: "keyup",
                condition: {
                    keyCode: 27
                }
            }, {
                selector: ".imagebubble-backmask",
                event: a
            }],
            callbacks: {
                show: function() {},
                hide: function() {},
                shown: function() {},
                hidden: function() {}
            },
            showTitle: !0,
            showMenu: !0,
            zoomLimit: "width",
            zoomRate: .98
        },
        l = e('<div class="imagebubble-menu" />'),
        c = e('<div class="imagebubble-button zoomOut" />').html("+").appendTo(l),
        u = e('<a class="imagebubble-button downPic" />').appendTo(l).attr("target", "_blank"),
        d = e('<div class="imagebubble-button zoomIn" />').html("-").appendTo(l);
    l.on(a, function(e) {
        e.stopPropagation()
    }), d.on(a, function() {
        var t = e(this),
            n = t.parent().parent(),
            i = n.find(".imagebubble-ghost.selected"),
            r = parseInt(i.attr("scale"), 10) || 10;
        r -= 1, 1 > r && (r = 1), i.attr("scale", r).css({
            transform: "scale(" + r / 10 + ")"
        }), i[0].__showWidgets(i[0].__rect, r)
    }), c.on(a, function() {
        var t = e(this),
            n = t.parent().parent(),
            i = n.find(".imagebubble-ghost.selected"),
            r = parseInt(i.attr("scale"), 10) || 10,
            o = i[0].zoomLimit;
        r += 1, "width" === o ? i.width() * r > i[0].limitWidth * i[0].zoomRate && (r -= 1) : "height" === o ? i.height() * r > i[0].limitHeight * i[0].zoomRate && (r -= 1) : "draggable" !== o && (i.width() * r > i[0].limitWidth * i[0].zoomRate || i.height() * r > i[0].limitHeight * i[0].zoomRate) && (r -= 1), i.attr("scale", r).css({
            transform: "scale(" + r / 10 + ")"
        }), i[0].__showWidgets(i[0].__rect, r)
    }), e.fn.imageBubble = function(c) {
        function d(e, t, n, i) {
            var r = n.width * i,
                o = n.height * i,
                a = 1,
                s = 0,
                l = {};
            return r >= e && o >= t ? (l.width = e, l.height = t) : e > r && t > o ? (a = r / e, s = o / t, a > s && (a = s), l.width = e * a, l.height = t * a) : e > r ? (a = t / e, l.width = r, l.height = r * a) : (a = e / t, l.height = o, l.width = o * a), l.top = .5 * (n.height - l.height) + n.offsetTop, l.left = .5 * (n.width - l.width) + n.offsetLeft, l
        }
        function h() {
            f.find(".imagebubble-bubble").trigger(a)
        }
        function p() {
            var t, n, i, r = m.mask.find(".imagebubble-ghost"),
                o = {};
            g.container.hasClass("imagebubble-mode-on") && m.mask.css({
                width: g.container.width(),
                height: g.container.height()
            }), r.each(function(a) {
                var s, l;
                a = r[a], s = a._origin, a = e(a), l = a.hasClass("selected"), s[0].__setRect(), l ? (t = a[0].naturalWidth, n = a[0].naturalHeight, v = m.getBoundingClientRect(), i = g.viewport(v), i.offsetTop = i.top - v.top, i.offsetLeft = i.left - v.left, a[0].limitWidth = i.width, a[0].limitHeight = i.height, o = d(t, n, i, g.frameFill), a.css({
                    top: o.top,
                    left: o.left,
                    width: o.width,
                    height: o.height
                }), a[0].__rect = o, a[0].__showWidgets(o)) : (v = m.getBoundingClientRect(), a[0].__reset())
            })
        }
        if (!(Maleskine.BrowserDetector && Maleskine.BrowserDetector.isIE() && (Maleskine.BrowserDetector.isIE9() || Maleskine.BrowserDetector.isIE8() || Maleskine.BrowserDetector.lessThanIE8()))) {
            r || (r = e(window), s.container = e(document.body));
            var f = e(this),
                g = e.extend(!0, s, c);
            g.container.addClass("imagebubble-container").addClass("imagebubble-mode-off"), o[c.group] = o[c.group] || null;
            var m = g.container[0],
                v = m.getBoundingClientRect();
            m.mask || (m.mask = e('<div class="imagebubble-backmask image-package" />').css({
                "z-index": g.zIndex
            }).appendTo(g.container).on(a, h)), this.each(function() {
                var s = e(this),
                    h = s.find("img");
                if ((m.contains(this) || m === this) && "ImageBubble" === s.attr("widget") && h.length > 0) {
                    s.addClass("imagebubble"), h.each(function() {
                        var s = e(this),
                            h = s.data("updateImageBubble");
                        if (h) return void h(s.attr("data-original-src"), s.attr("alt"));
                        var f, b, y, w = this.getBoundingClientRect(),
                            _ = s.data("title") || s.attr("alt") || "",
                            S = g.showTitle && !! _ && _.length > 0,
                            C = e('<img class="imagebubble-ghost" />').attr("src", s.attr("data-original-src")).load(function() {
                                function e(e) {
                                    if (!x) {
                                        if (x = !0, k) {
                                            if (C[0].dragging || o[c.group] !== s) return x = !1, void e.stopPropagation();
                                            g.callbacks.hide(), g.container.removeClass("imagebubble-mode-on").addClass("imagebubble-mode-off"), s.css({
                                                opacity: s[0].originalOpacity || 1
                                            }).removeClass("imagebubble-bubble"), C.css({
                                                top: w.top - v.top,
                                                left: w.left - v.left,
                                                width: w.width,
                                                height: w.height,
                                                transform: "scale(1)"
                                            }).removeClass("selected").attr("scale", 10), S && y.removeClass("enable"), setTimeout(b, 250)
                                        } else {
                                            if (null !== o[c.group] && o[c.group] !== s) return void(x = !1);
                                            o[c.group] = s, g.callbacks.show(), s[0].__setRect(), window.getComputedStyle ? s[0].originalOpacity = window.getComputedStyle(s[0]).opacity : document.defaultView && document.defaultView.getComputedStyle ? s[0].originalOpacity = document.defaultView.getComputedStyle(s[0]).opacity : s[0].currentStyle && (s[0].originalOpacity = s[0].currentStyle.opacity), v = m.getBoundingClientRect(), h = g.viewport(v), h.offsetTop = h.top - v.top, h.offsetLeft = h.left - v.left, C[0].limitWidth = h.width, C[0].limitHeight = h.height, m.mask.css({
                                                top: 0,
                                                width: g.container.width(),
                                                height: g.container.height(),
                                                display: "block"
                                            }), setTimeout(function() {
                                                i = d(t, n, h, g.frameFill), g.container.removeClass("imagebubble-mode-off").addClass("imagebubble-mode-on"), s.css({
                                                    opacity: 0
                                                }).addClass("imagebubble-bubble"), C.css({
                                                    top: i.top,
                                                    left: i.left,
                                                    width: i.width,
                                                    height: i.height
                                                }).addClass("selected"), C[0].__rect = i, C[0].__showWidgets(i), setTimeout(f, 250)
                                            }, 0)
                                        }
                                        e.stopPropagation()
                                    }
                                }
                                var t = C[0].naturalWidth,
                                    n = C[0].naturalHeight,
                                    i = {},
                                    h = {};
                                m.mask.append(C.css({
                                    top: w.top - v.top,
                                    left: w.left - v.left,
                                    width: s.width(),
                                    height: s.height()
                                })), s.addClass("imagebubble-image"), C[0]._origin = s, s.on(a, e), C.on(a, e), C[0].__showWidgets = function(e, t) {
                                    var n, i = {};
                                    t = t || 10, t /= 10, g.showMenu ? (m.mask[0].contains(l[0]) || m.mask.append(l), i = l[0].getBoundingClientRect(), i = {
                                        top: e.top + e.height * (1 + t) * .5 + 10,
                                        win_bottom: r.scrollTop() + r.height() - i.height - 20
                                    }, S && (n = y[0].getBoundingClientRect(), i.img_bottom = i.top, i.top += n.height + 10), i.top > i.win_bottom ? (l.addClass("in_pic"), i.top = i.win_bottom) : l.removeClass("in_pic"), l.css({
                                        top: i.top
                                    }), u.attr("href", s.attr("data-original-src")), S && (i.top = i.top - n.height - 10, i.top < i.img_bottom ? y.addClass("in_pic") : y.removeClass("in_pic"), y.addClass("enable").css({
                                        top: i.top,
                                        "margin-left": -n.width / 2
                                    }))) : S && (i = y[0].getBoundingClientRect(), i = {
                                        width: i.width,
                                        top: e.top + e.height * (1 + t) * .5 + 10,
                                        win_bottom: r.scrollTop() + r.height() - i.height - 20
                                    }, i.top > i.win_bottom ? (y.addClass("in_pic"), i.top = i.win_bottom) : y.removeClass("in_pic"), y.addClass("enable").css({
                                        top: i.top,
                                        "margin-left": -i.width / 2
                                    }))
                                }, C[0].__reset = function() {
                                    C.css({
                                        top: w.top - v.top,
                                        left: w.left - v.left,
                                        width: s.width(),
                                        height: s.height()
                                    })
                                }, s.data("updateImageBubble", function(e, t) {
                                    e && C.attr("src", e), t && g.showTitle && (S = t.length > 0, y.html(S ? t : ""))
                                }), C.load(function() {
                                    t = C[0].naturalWidth, n = C[0].naturalHeight, p()
                                }), p()
                            }),
                            k = !1,
                            x = !1;
                        C[0].zoomLimit = g.zoomLimit, C[0].zoomRate = 10 * g.zoomRate, "draggable" === g.zoomLimit && C.attr("draggable", !1).on("mousedown", t).on("mousemove", n).on("mouseup", i), f = function() {
                            k = !0, x = !1, g.callbacks.shown()
                        }, b = function() {
                            m.mask.css({
                                top: 0,
                                width: 0,
                                height: 0,
                                display: "none"
                            }), S && y.removeClass("enable"), k = !1, x = !1, o[c.group] = null, g.callbacks.hidden()
                        }, s[0].__setRect = function() {
                            w = s[0].getBoundingClientRect()
                        }, S && (y = e('<div class="image-caption" />').html(_).appendTo(m.mask))
                    })
                }
            }), g.close && g.close.map(function(t) {
                "window" === t.selector ? r.on(t.event, h) : "document" === t.selector ? t.condition ? e(document).on(t.event, function(e) {
                    var n, i = !0;
                    for (n in t.condition) if (e[n] && e[n] !== t.condition[n]) {
                        i = !1;
                        break
                    }
                    i && h()
                }) : e(document).on(t.event, h) : e(document).on(t.event, t.selector, h)
            }), g.smartReisze ? e(window).smartResize(p) : e(window).resize(p), p()
        }
    }
}(jQuery || Zepto), function() {
    var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) a.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        a = {}.hasOwnProperty;
    e = Spine.$, t = Writer.Note, n = Writer.Notebook, i = Writer.User, Writer.WeiboModal = function(t) {
        function n() {
            this.initImageBubble = r(this.initImageBubble, this), this.handleOpen = r(this.handleOpen, this), this.share = r(this.share, this), this.hidden = r(this.hidden, this), this.checkWeiboImage = r(this.checkWeiboImage, this), this.show = r(this.show, this), n.__super__.constructor.apply(this, arguments), this.useImageCheckbox.iCheck({
                checkboxClass: "icheckbox_minimal"
            }), Spine.bind("open-weibo-modal", this.handleOpen)
        }
        return o(n, t), n.extend(Spine.Events), n.prototype.elements = {
            ".use-image": "useImageCheckbox",
            ".pic-done": "picDoneBlock",
            ".pic-processing": "picProcessingBlock",
            ".pic-Production": "picProductionBlock",
            ".use-image-wrapper": "checkboxWrapper"
        }, n.prototype.events = {
            "click [data-action=close-weibo-share]": "close",
            "click .btn-info": "share"
        }, n.prototype.show = function() {
            return n.__super__.show.apply(this, arguments), this.intervalHandler = setInterval(this.checkWeiboImage, 1500)
        }, n.prototype.checkWeiboImage = function() {
            return this.currentNote.checkImage(function(e) {
                return function(t) {
                    return t.exists ? (e.imageUrl = t.url, clearInterval(e.intervalHandler), e.useImageCheckbox.iCheck("check"), e.picDoneBlock.find("img").prop("src", e.imageUrl), e.picProcessingBlock.fadeOut("fast", function() {
                        return e.picDoneBlock.fadeIn("fast"), e.checkboxWrapper.fadeIn("fast")
                    }), e.picProductionBlock.fadeOut("fast"), e.initImageBubble()) : void 0
                }
            }(this))
        }, n.prototype.hidden = function() {
            return n.__super__.hidden.apply(this, arguments), null != this.intervalHandler && clearInterval(this.intervalHandler), this.imageUrl = null, this.useImageCheckbox.iCheck("uncheck"), this.picProcessingBlock.show(), this.picDoneBlock.hide(), this.picProductionBlock.show(), this.checkboxWrapper.hide(), this.picDoneBlock.removeClass("imagebubble").removeAttr("widget")
        }, n.prototype.share = function() {
            return window.open(this.useImageCheckbox.is(":checked") && null != this.imageUrl && this.imageUrl.length > 0 ? Maleskine.Sns.shareScript(this.currentNote, "weibo", [this.imageUrl]) : Maleskine.Sns.shareScript(this.currentNote, "weibo"))
        }, n.prototype.handleOpen = function(e) {
            return this.currentNote = e, this.open()
        }, n.prototype.initImageBubble = function() {
            var t, n, i, r, o, a, s;
            return n = this.el, a = this.picDoneBlock, t = a.attr("widget"), "ImageBubble" !== t ? (a.attr("widget", "ImageBubble"), i = a.find("img"), o = i.attr("src"), r = e('<div class="preview_image_mask">').css({
                position: "fixed",
                display: "block",
                top: 0,
                left: 0,
                cursor: "zoom-out"
            }).on("mousedown", function(t) {
                return e(".imagebubble-backmask").trigger("mousedown"), t.stopPropagation(), t.preventDefault(), t.cancelBubble = !0
            }), s = e(window), i.attr("data-original-src", o), a.imageBubble({
                container: n,
                showMenu: !1,
                viewport: function() {
                    return function() {
                        var e;
                        return e = {
                            top: 0,
                            left: 0,
                            width: s.width(),
                            height: s.height()
                        }
                    }
                }(this),
                callbacks: {
                    show: function() {
                        return e(".imagebubble-backmask").before(r), r.css({
                            width: s.width(),
                            height: s.height()
                        })
                    },
                    hide: function() {
                        return r.remove()
                    }
                },
                close: [{
                    selector: "window",
                    event: "mousedown"
                }]
            }), n.css({
                position: "fixed"
            })) : void 0
        }, n
    }(Writer.Modal)
}.call(this), function() {
    var e, t, n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        i = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) r.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        r = {}.hasOwnProperty;
    e = Spine.$, t = Writer.Notebook, Writer.CreateNotebookForm = function(e) {
        function r() {
            this.handleEnter = n(this.handleEnter, this), r.__super__.constructor.apply(this, arguments)
        }
        return i(r, e), r.extend(Spine.Events), r.prototype.elements = {
            "input[type=text]": "nameInput"
        }, r.prototype.events = {
            "click .cancel": "close",
            "keypress input[type=text]": "handleEnter",
            "submit form": "submit"
        }, r.prototype.open = function() {
            return this.el.slideToggle(), this.nameInput.focus()
        }, r.prototype.handleEnter = function(e) {
            return 13 === e.which ? this.submit() : void 0
        }, r.prototype.submit = function(e) {
            var n, i;
            return this.stopEvent(e), i = t.firstSeq() - 1, n = new t({
                name: this.nameInput.val(),
                seq: i
            }), n.save(), this.close()
        }, r.prototype.close = function() {
            return this.el.slideToggle(), this.nameInput.val("")
        }, r
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) a.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        a = {}.hasOwnProperty;
    e = Spine.$, t = Writer.Note, n = Writer.Notebook, i = Writer.User, Writer.MovingModal = function(i) {
        function a() {
            this.submit = r(this.submit, this), this.hidden = r(this.hidden, this), this.show = r(this.show, this), a.__super__.constructor.apply(this, arguments), t.bind("moved", function(e) {
                return function() {
                    return e.close()
                }
            }(this)), this.notebooks.on("click", "li", function(t) {
                return function(n) {
                    return t.notebooks.find(".active").removeClass("active"), e(n.currentTarget).addClass("active")
                }
            }(this))
        }
        return o(a, i), a.extend(Spine.Events), a.prototype.elements = {
            ".notebooks-select": "notebooks",
            "form select": "notebookSelect"
        }, a.prototype.events = {
            "click input[type=submit]": "submit",
            "click .cancel-button": "close"
        }, a.prototype.show = function() {
            var t, i, r, o, s;
            for (a.__super__.show.apply(this, arguments), s = n.allUndeletedNotebooks(), this.notebooks.empty(), t = 0, i = s.length; i > t; t++) r = s[t], o = e("<li data-notebook-id='" + r.id + "'><a href='javascript:void(null)'>" + r.name + "</a></li>"), r.id === this.currentNote.notebook_id && o.addClass("active"), this.notebooks.append(o);
            return this.notebookSelect.select2({
                placeholder: I18n.t("change_notebook_placeholder"),
                allowClear: !0
            }), this.notebookSelect.focus()
        }, a.prototype.hidden = function() {
            return a.__super__.hidden.apply(this, arguments), this.currentNote = null, this.notebookSelect.empty()
        }, a.prototype.submit = function() {
            var e;
            return e = this.notebooks.find(".active").data("notebook-id"), e === this.currentNote.notebook_id ? this.close() : e > 0 ? this.currentNote.move(e) : void 0
        }, a
    }(Writer.Modal)
}.call(this), function() {
    var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        n = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) i.call(t, r) && (e[r] = t[r]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        i = {}.hasOwnProperty;
    e = Writer.NoteLog, Writer.NoteLogView = function(e) {
        function i() {
            this.closeBtnClick = t(this.closeBtnClick, this), this.restore = t(this.restore, this), this.render = t(this.render, this), this.renderLoading = t(this.renderLoading, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.extend(Spine.Events), i.prototype.elements = {
            ".history-top": "topBar",
            ".history-top button.close": "closeBtn",
            ".view-area": "viewArea",
            "ul.loading": "loader"
        }, i.prototype.events = {
            "click [data-action=restore]": "restore",
            "click button.close": "closeBtnClick"
        }, i.prototype.className = "history-view", i.prototype.renderLoading = function() {
            return this.html(this.view("forms/loading_note")), this.viewArea.activateVideo(), this.resetHeight()
        }, i.prototype.render = function(e) {
            var t;
            return null == e && (e = !1), t = Writer.currentNoteLog, this.html(this.view("note_logs/top")({
                note_log: t
            })), e ? this.append(this.view("note_logs/no_logs")) : null == t ? (this.append(this.view("note_logs/no_logs")), this.resetHeight()) : null == t.content ? (this.append(this.view("forms/loading_note")), this.resetHeight(), t.loadAttribute("content", function(e) {
                return function() {
                    return e.render()
                }
            }(this))) : (this.append(this.view("note_logs/view")({
                note_log: t
            })), this.viewArea.activateVideo())
        }, i.prototype.restore = function() {
            return Writer.currentNoteLog.restore({
                success: function() {
                    return function() {
                        var e;
                        return e = Writer.currentNote, Spine.trigger("clear-form"), Writer.currentNote = e, Spine.trigger("exit-history-mode")
                    }
                }(this)
            })
        }, i.prototype.closeBtnClick = function() {
            return Spine.trigger("exit-history-mode")
        }, i.prototype.resetHeight = function() {
            return this.refreshElements(), this.loader.length > 0 ? this.loader.css({
                height: document.documentElement.clientHeight - this.topBar.outerHeight()
            }) : void 0
        }, i
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        i = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) r.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        r = {}.hasOwnProperty;
    e = Spine.$, t = Writer.NoteLog, Writer.NoteLogsList = function(r) {
        function o() {
            this.filter = n(this.filter, this), this.toggleFilter = n(this.toggleFilter, this), this.resetHeight = n(this.resetHeight, this), this.showTimeAgo = n(this.showTimeAgo, this), this.showExactTime = n(this.showExactTime, this), this.openNoteLog = n(this.openNoteLog, this), this.render = n(this.render, this), this.renderLoading = n(this.renderLoading, this), o.__super__.constructor.apply(this, arguments)
        }
        return i(o, r), o.extend(Spine.Events), o.prototype.elements = {
            "ul.loading": "loader",
            "li:not([class=title]):not([class^=loading])": "logList",
            "div.history-title": "title"
        }, o.prototype.events = {
            "mouseover li:not(.title)": "showExactTime",
            "mouseleave li:not(.title)": "showTimeAgo",
            "click li:not(.title)": "openNoteLog",
            "click [data-action=toggle-filter]": "toggleFilter",
            "click [data-action=filter]": "filter"
        }, o.prototype.className = "history-list", o.prototype.renderLoading = function() {
            return this.html(this.view("forms/loading_note")), this.resetHeight()
        }, o.prototype.render = function(e) {
            return null == e && (e = !1), this.logList.length > 0 ? void 0 : (e ? this.html(this.view("forms/no_note")) : null == Writer.currentNoteLog ? this.html(this.view("forms/loading_note")) : (this.html(this.view("note_logs/list")({
                note_logs: t.all(),
                current_note_log: Writer.currentNoteLog
            })), this.logList.find("span").timeago()), this.resetHeight())
        }, o.prototype.openNoteLog = function(n) {
            var i;
            return i = e(n.currentTarget), i.hasClass("active") ? void 0 : (Writer.currentNoteLog = t.find(i.data("note-log-id")), this.navigate("/notebooks/" + Writer.currentNotebook.id + "/notes/" + Writer.currentNote.id + "/history/" + Writer.currentNoteLog.id), this.logList.removeClass("active"), i.addClass("active"))
        }, o.prototype.showExactTime = function(t) {
            var n;
            return n = e(t.currentTarget).find("span"), n.html(n.data("formatted-created-at"))
        }, o.prototype.showTimeAgo = function(t) {
            var n;
            return n = e(t.currentTarget).find("span"), n.timeago()
        }, o.prototype.resetHeight = function() {
            return this.refreshElements(), this.loader.length > 0 ? this.loader.css({
                height: document.documentElement.clientHeight
            }) : this.el.find("ul.unstyled").css({
                height: document.documentElement.clientHeight
            })
        }, o.prototype.toggleFilter = function() {
            return this.title.toggleClass("active")
        }, o.prototype.filter = function(t) {
            var n, i, r;
            return n = e(t.currentTarget), n.attr("data-note-log-type") && (r = n.data("note-log-type"), n.is(":checked") ? this.$("ul.unstyled").find("li[data-note-log-type=" + r + "]").show() : this.$("ul.unstyled").find("li[data-note-log-type=" + r + "]").hide()), n.attr("data-note-log-app") ? (i = n.data("note-log-app"), n.is(":checked") ? this.$("ul.unstyled").find("li[data-note-log-app=" + i + "]").show() : this.$("ul.unstyled").find("li[data-note-log-app=" + i + "]").hide()) : void 0
        }, o
    }(Spine.Controller)
}.call(this), function() {
    var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        n = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) i.call(t, r) && (e[r] = t[r]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        i = {}.hasOwnProperty;
    e = Spine.$, Writer.RecycleNoteContent = function(e) {
        function i() {
            this.closeRecycle = t(this.closeRecycle, this), this.deleteForever = t(this.deleteForever, this), this.putBack = t(this.putBack, this), this.render = t(this.render, this), i.__super__.constructor.apply(this, arguments)
        }
        return n(i, e), i.extend(Spine.Events), i.prototype.elements = {
            "ul.loading": "loader",
            ".recycle-content": "contentArea"
        }, i.prototype.events = {
            "click button[data-action=put-back]": "putBack",
            "click button[data-action=delete-forever]": "deleteForever",
            "click button.close": "closeRecycle"
        }, i.prototype.className = "recycle-note-content span7", i.prototype.render = function(e) {
            return this.currentNote = e, null == e ? (this.html(this.view("recycle/no_content")), this.resetHeight()) : null == e.content ? (this.html(this.view("forms/loading_note")), this.resetHeight(), e.loadAttribute("content", function(e) {
                return function(t) {
                    return e.render(t)
                }
            }(this))) : (this.html(this.view("recycle/content")({
                note: e
            })), this.contentArea.activateVideo())
        }, i.prototype.resetHeight = function() {
            return this.refreshElements(), this.loader.length > 0 ? this.loader.css({
                height: document.documentElement.clientHeight
            }) : void 0
        }, i.prototype.putBack = function() {
            return this.currentNote.putBack()
        }, i.prototype.deleteForever = function() {
            return this.confirmMessage(I18n.t("recycle.content.delete_forever_confirm", {
                title: this.currentNote.title
            }).encodeHTML(), function(e) {
                return function() {
                    return e.currentNote.destroy()
                }
            }(this), null)
        }, i.prototype.closeRecycle = function() {
            return Spine.trigger("exit-recycle-mode")
        }, i
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        i = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) r.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        r = {}.hasOwnProperty;
    e = Spine.$, t = Writer.Note, Writer.RecycleNoteList = function(r) {
        function o() {
            this.resetHeight = n(this.resetHeight, this), this.goToNext = n(this.goToNext, this), this.render = n(this.render, this), o.__super__.constructor.apply(this, arguments), t.bind("destroy", this.goToNext), Spine.bind("recycle-on-put-back", this.goToNext)
        }
        return i(o, r), o.extend(Spine.Events), o.prototype.elements = {
            "ul.loading": "loader",
            ".clear-trash": "clearTrash",
            ".recycle-title": "title"
        }, o.prototype.events = {
            "mouseover li:not(.title)": "showExactTime",
            "mouseleave li:not(.title)": "showTimeAgo",
            "click li[data-note-id]": "openRecycledNote"
        }, o.prototype.className = "recycle-note-list", o.prototype.render = function(e) {
            return this.html(this.view("recycle/list")({
                notes: t.allDeletedNotes(),
                currentNote: e
            })), this.resetHeight()
        }, o.prototype.showTimeAgo = function(t) {
            var n;
            return n = e(t.currentTarget).find("span"), n.html(I18n.t("recycle.entry.days_left_before_destroy", {
                days: n.data("destroy-days-left")
            }))
        }, o.prototype.showExactTime = function(t) {
            var n;
            return n = e(t.currentTarget).find("span"), n.html(I18n.t("recycle.entry.destroy_date", {
                date: n.data("destroy-date")
            }))
        }, o.prototype.openRecycledNote = function(t) {
            var n;
            return n = e(t.currentTarget).data("note-id"), this.navigate("/recycle/" + n)
        }, o.prototype.goToNext = function() {
            var e;
            return e = this.$("li.active").next() || this.$("li.active").prev(), this.$("li.active").remove(), this.navigate(null != e && e.length > 0 ? "/recycle/" + e.data("note-id") : "/recycle")
        }, o.prototype.resetHeight = function() {
            return this.refreshElements(), this.el.find("ul.unstyled").css({
                height: document.documentElement.clientHeight - this.title[0].offsetHeight - this.clearTrash[0].offsetHeight
            })
        }, o
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) a.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        a = {}.hasOwnProperty;
    e = Spine.$, t = Writer.Note, n = Writer.Notebook, i = Writer.User, Writer.Navbar = function(e) {
        function t() {
            this.render = r(this.render, this), t.__super__.constructor.apply(this, arguments)
        }
        return o(t, e), t.extend(Spine.Events), t.prototype.className = "navbar", t.prototype.elements = {
            "a[data-toggle=tooltip]": "tooltips"
        }, t.prototype.render = function() {
            return this.html(this.view("navbar/navbar")({
                currentUser: Writer.currentUser
            })), this.refreshElements(), this.tooltips.tooltip()
        }, t
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        i = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) r.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        r = {}.hasOwnProperty,
        o = [].indexOf ||
            function(e) {
                for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
                return -1
            };
    e = Spine.$, t = Writer.Note, Writer.NoteForm = function(r) {
        function a() {
            this.handleSaveButton = n(this.handleSaveButton, this), this.hideSaveNotices = n(this.hideSaveNotices, this), this.showCompiled = n(this.showCompiled, this), this.showSavedPartially = n(this.showSavedPartially, this), this.showSaved = n(this.showSaved, this), this.showSaving = n(this.showSaving, this), this.updatePublishButton = n(this.updatePublishButton, this), this.submitNoteform = n(this.submitNoteform, this), this.onNoteCreate = n(this.onNoteCreate, this), this.savingBlocksCompiling = n(this.savingBlocksCompiling, this), this.renderCompilingButton = n(this.renderCompilingButton, this), this.renderPublishButton = n(this.renderPublishButton, this), this.noteContent = n(this.noteContent, this), this.loadingForm = n(this.loadingForm, this), this.clearForm = n(this.clearForm, this), this.saveNote = n(this.saveNote, this), this.resetHeight = n(this.resetHeight, this), this.finishUploadImage = n(this.finishUploadImage, this), this.startUploadImage = n(this.startUploadImage, this), this.initEditor = n(this.initEditor, this), this.focusingSomewhere = n(this.focusingSomewhere, this), this.noteChanged = n(this.noteChanged, this), this.onCompositionStart = n(this.onCompositionStart, this), this.isEditorReady = n(this.isEditorReady, this), this.initSaveTimer = n(this.initSaveTimer, this), this.render = n(this.render, this), this.afterInsertVideo = n(this.afterInsertVideo, this), this.insertVideo = n(this.insertVideo, this);
            var i;
            a.__super__.constructor.apply(this, arguments), Spine.bind("clear-form", this.clearForm), Spine.bind("loading-form", this.loadingForm), Spine.bind("note-save", this.saveNote), Spine.bind("note-changed", this.noteChanged), Spine.bind("composition-start", this.onCompositionStart), t.bind("create", this.onNoteCreate), t.bind("public", this.renderPublishButton), t.bind("private", this.renderPublishButton), t.bind("note-compiled", function(e) {
                return function() {
                    return e.renderPublishButton(), e.showCompiled()
                }
            }(this)), this.saveDelay = 600, this.saveTimer = null, Maleskine.BrowserDetector.isIE() || Maleskine.BrowserDetector.isMozilla() || (this.el.on("click", "[data-action=undo]", function() {
                return function() {
                    return document.execCommand("Undo", !1, null)
                }
            }(this)), this.el.on("click", "[data-action=redo]", function() {
                return function() {
                    return document.execCommand("Redo", !1, null)
                }
            }(this))), this.el.on("click", "[data-action=trigger-history-mode]", function(e) {
                return function() {
                    return e.saveNote(), e.navigate("/notebooks/" + Writer.currentNote.notebook_id + "/notes/" + Writer.currentNote.id + "/history")
                }
            }(this)), this.el.on("click", "[data-action=trigger-writing-mode]", function(e) {
                return function() {
                    return e.saveNote(), e.isWritingMode ? Spine.trigger("exit-writing-mode") : null != Writer.currentNote ? e.navigate("/notebooks/" + Writer.currentNote.notebook_id + "/notes/" + Writer.currentNote.id + "/writing") : void 0
                }
            }(this)), this.el.on("click", "[data-action=trigger-preview-mode]", function(e) {
                return function() {
                    return e.saveNote(), e.isPreviewMode ? Spine.trigger("exit-preview-mode") : null != Writer.currentNote ? e.navigate("/notebooks/" + Writer.currentNote.notebook_id + "/notes/" + Writer.currentNote.id + "/preview") : void 0
                }
            }(this)), this.el.on("mouseenter", "#publish-button", function() {
                var t;
                return "privatize" === e(this).data("action") ? (t = "<i class='fa fa-times'></i> " + I18n.t("unpublish") + "</a>", e(this).html(t)) : void 0
            }), this.el.on("mouseleave", "#publish-button", function() {
                var t;
                return "privatize" === e(this).data("action") ? (t = "<i class='fa fa-check'></i> " + I18n.t("published") + "</a>", e(this).html(t)) : void 0
            }), this.el.on("click", "#publish-button", function(t) {
                return function(n) {
                    var r, o, a, s, l, c, u, d, h, p, f, g;
                    return r = e(n.currentTarget).data("action"), "privatize" === r ? Writer.currentNote.privatize() : (d = t.editor.getExternalImages(), 0 !== d.length ? (t.isAutoUploadingImages = !0, e.noty.closeAll(), e.noty._closeAll = e.noty.closeAll, e.noty.closeAll = function() {}, e.noty.layouts.maleskineCenter.css.width = "300px", s = d.length, o = 0, u = '<p class="notification_modal_title"><img src="' + Maleskine.CommonImages.loader("tiny") + '">' + I18n.t("kalamu.auto_upload_external_images") + "</p>", g = !0, c = !1, p = noty({
                        text: u,
                        layout: "maleskineCenter",
                        modal: !0,
                        buttons: [{
                            addClass: "btn",
                            text: I18n.t("kalamu.cancel_auto_uploading"),
                            onClick: function(n) {
                                return g && (t.editor.cancelUploading(), c = !0), n.close(), e.noty.layouts.maleskineCenter.css.width = e.noty.layouts.maleskineCenter.defaultWidth
                            }
                        }]
                    }), l = p.$buttons.find("button"), p.$message.css({
                        "padding-left": "0px",
                        "padding-right": "0px"
                    }), p = p.$message.find(".noty_text"), f = p.find(".notification_modal_title"), a = p.find(".auto_uploading_done"), p.find(".auto_uploading_total").html(s), h = p.find("p"), void t.editor.uploadExternalImages(function() {
                        return g = !1, l.html(I18n.t("kalamu.ok")), f.html(I18n.t("kalamu.auto_upload_external_images_finished")), null != t.saveTimer && clearTimeout(t.saveTimer.timer), t.isAutoUploadingImages = !1, t.saveNote(t.noteTitle.val(), t.noteContent(), function() {
                            return i(r, function() {
                                return f.html(I18n.t("kalamu.auto_public_done")), e.noty.closeAll = e.noty._closeAll
                            }, function() {
                                return f.html(I18n.t("kalamu.auto_public_fail")), e.noty.closeAll = e.noty._closeAll
                            })
                        })
                    }, function() {
                        return c ? void 0 : (o++, a.html(o))
                    }, function() {
                        return c ? void 0 : (o++, a.html(o))
                    })) : i(r))
                }
            }(this)), i = function(t) {
                return function(n, i, r) {
                    var o, a;
                    return t.editor.isUploadingImage() ? void t.notification(I18n.t("kalamu.cannot-save-while-uploading"), 5e3) : (a = t.getNoteTitle(), 0 === a.length ? void t.notification(I18n.t("kalamu.cannot-save-with-empty-title"), 5e3) : "publicize" === n ? (e(".publish-loading").show(), Writer.currentNote.publicize(i, r)) : "compile" === n ? (t.renderCompilingButton(), o = Writer.currentNote.compile(i, r)) : void 0)
                }
            }(this)
        }
        return i(a, r), a.extend(Spine.Events), a.include(Maleskine.BrowserDetector), a.prototype.elements = {
            ".kalamu-box": "kalamuBox",
            ".kalamu-box .kalamu-area": "kalamuArea",
            ".title": "noteTitle",
            ".note-form": "noteForm",
            ".loading": "loadingEffect",
            ".no-notes": "noNotes",
            kalamuArea: "#editor",
            "#publish-button": "publishButton",
            ".saving-notice": "savingNotice",
            "#publish-button-item": "publishButton"
        }, a.prototype.events = {
            "submit .note-form": "submitNoteform",
            "click [data-action=trigger-save]": "handleSaveButton"
        }, a.prototype.className = "span7 main", a.prototype.insertVideo = function(e) {
            return this.editor.insertVideo(e)
        }, a.prototype.afterInsertVideo = function() {
            return this.editor.afterInsertVideo()
        }, a.prototype.render = function() {
            var t, n;
            return null != this.isWritingMode && Spine.trigger("normal-mode-clear-form"), Writer.currentNote && null != Writer.currentNote ? (null == Writer.currentNote.content ? (this.$("ul.loading").length > 0 || (this.html(this.view("forms/loading_note")({
                currentNote: Writer.currentNote
            })), this.resetHeight()), Writer.currentNote.loadAttribute("content", function(e) {
                return function() {
                    return e.render()
                }
            }(this))) : (this.initSaveTimer(), this.el.empty(), this.html(this.view("forms/" + Writer.currentNote.note_type)({
                currentNote: Writer.currentNote,
                isWritingMode: this.isWritingMode,
                isPreviewMode: this.isPreviewMode
            })), t = !1, n = !1, this.noteTitle.on("compositionstart", function() {
                return t = !0
            }).on("compositionend", function() {
                return t = !1
            }).on("keydown", function() {
                return t ? n = !0 : void 0
            }).on("keyup", function(t) {
                var i, r, a;
                if (n) return void(n = !1);
                if (!(t.keyCode !== Kalamu.Keys.ENTER_KEY || (a = this.value.length, o.call(Writer.DEFAULT_TITLES, a) >= 0))) return i = e(this).parent(), r = i.find("textarea"), 0 === r.length && (r = i.find(".kalamu-area")), r.focus()
            }), this.initEditor(), this.focusingSomewhere(), Spine.trigger("normal:note_changed", this.getNoteTitle(), this.getNoteContent()), this.el.find("[data-toggle=tooltip]").tooltip()), this.resetHeight()) : (this.html(this.view("forms/no_note")(this)), this.refreshElements(), this.resetHeight())
        }, a.prototype.initSaveTimer = function() {
            return null != this.saveTimer ? (clearTimeout(this.saveTimer.timer), this.saveTimer = null) : void 0
        }, a.prototype.isEditorReady = function() {
            return Writer.currentNote ? Writer.currentNote.isRichText() ? this.$(".kalamu-box").length > 0 ? !0 : !1 : this.editor.isReady && this.editor.isReady() : void 0
        }, a.prototype.onCompositionStart = function() {
            return null != this.saveTimer && (new Date).getTime() - this.saveTimer.time < this.saveDelay ? clearTimeout(this.saveTimer.timer) : void 0
        }, a.prototype.noteChanged = function() {
            var e;
            return null != this.saveTimer && (new Date).getTime() - this.saveTimer.time < this.saveDelay && clearTimeout(this.saveTimer.timer), e = setTimeout(function(e) {
                return function() {
                    var t, n;
                    return e.isPreviewMode && Spine.trigger("preview:note_changed"), n = e.noteTitle.val(), t = e.noteContent(), e.saveNote(n, t), Spine.trigger("normal:note_changed", n, t), e.saveTimer = null
                }
            }(this), this.saveDelay), this.saveTimer = {
                timer: e,
                time: (new Date).getTime()
            }
        }, a.prototype.focusingSomewhere = function() {
            return this.isIE() ? void 0 : Writer.currentNote && Writer.currentNote.isInitialNote() ? this.noteTitle.select() : Writer.currentNote.isRichText() ? this.kalamuArea.focus() : this.$("textarea").focus()
        }, a.prototype.getResetArea = function() {
            return this.isRichText() ? this.$(".kalamu-area") : this.isMarkdown() ? this.$("textarea") : []
        }, a.prototype.getToolbar = function() {
            return this.$(this.isMarkdown() ? "form ul.toolbar" : ".kalamu-box .toolbar")
        }, a.prototype.isRichText = function() {
            return this.$(".kalamu-box").length > 0
        }, a.prototype.isMarkdown = function() {
            return this.$("textarea").length > 0
        }, a.prototype.getNoteTitle = function() {
            return this.noteTitle.val() || ""
        }, a.prototype.getNoteContent = function() {
            return this.noteContent() || ""
        }, a.prototype.initEditor = function() {
            return Writer.currentNote ? (this.noteTitle.userChange(function(e) {
                return function() {
                    return e.noteChanged()
                }
            }(this)), Writer.currentNote.isRichText() && this.$("#editor").length > 0 ? (this.editor = this.$("#editor").kalamu({
                content: Writer.currentNote.content,
                extra_buttons: JST["writer/views/forms/extra_buttons"]({
                    note: Writer.currentNote,
                    isWritingMode: this.isWritingMode,
                    isPreviewMode: this.isPreviewMode
                })
            }).onUploadImageTaskStart(this.startUploadImage).onUploadImageTaskFinish(this.finishUploadImage), this.$("#editor").on("change:composer", function(e) {
                return function() {
                    return e.noteChanged()
                }
            }(this)).find(".kalamu-area").addClass("mousetrap")) : (this.editor = this.el.find("textarea").markdownEditor().onUploadImageTaskStart(this.startUploadImage).onUploadImageTaskFinish(this.finishUploadImage).onContentChange(this.noteChanged).onNotification(this.notification).onDragEnter(function(e) {
                return function() {
                    return e.noteForm.addClass("dropping-img")
                }
            }(this)).onDragLeave(function(e) {
                return function() {
                    return e.noteForm.removeClass("dropping-img")
                }
            }(this)).onDrop(function(e) {
                return function() {
                    return e.noteForm.removeClass("dropping-img")
                }
            }(this)), this.videoModal = e("#kalamu-video-modal"), this.videoModal[0]._controller ? (this.videoModal = this.videoModal[0]._controller, this.videoModal.editor = this) : this.videoModal = new Kalamu.VideoModal({
                el: e("#kalamu-video-modal"),
                editor: this
            })), this.resetHeight()) : void 0
        }, a.prototype.startUploadImage = function() {}, a.prototype.finishUploadImage = function() {}, a.prototype.resetHeight = function() {
            var t, n, i, r, o;
            return this.refreshElements(), t = this.getResetArea(), i = document.documentElement.clientHeight - 21, t.length > 0 ? (this.isMarkdown() ? (o = this.$("form ul.toolbar").outerHeight(), r = i - this.el.padding("top") - this.noteTitle.cssHeight() - o) : (o = e(".kalamu-box .toolbar").outerHeight(), n = t.padding("top") + t.padding("bottom"), r = i - this.el.padding("top") - this.noteTitle.outerHeight() - o - n), t.css({
                height: r
            })) : (this.loadingEffect.length > 0 && (r = i, this.loadingEffect.css({
                height: r
            })), this.noNotes.length > 0 ? (r = i, this.noNotes.css({
                height: r
            })) : void 0)
        }, a.prototype.saveNote = function(t, n, i) {
            return null == t && (t = this.noteTitle.val()), null == n && (n = this.noteContent()), null == i && (i = null), this.isAutoUploadingImages ? void 0 : null != Writer.currentNote && this.noteForm.data("note-id") - Writer.currentNote.id === 0 ? (this.showSaving(), Writer.currentNote.updateContent(t, n), Writer.currentNote.title = t, Writer.currentNote.content = n, Writer.currentNote.autosave_control = Writer.currentNote.autosave_control + 1, Writer.currentNote.bind("ajaxSuccess", function(t) {
                return function(n) {
                    return Writer.currentNote.unbind("ajaxSuccess"), Writer.currentNote.unbind("ajaxError"), Writer.currentNote.content_size_status = n.content_size_status, Writer.CONTENT_WARNING > 0 && e.noty.close(Writer.CONTENT_WARNING), "overflowed" === Writer.currentNote.content_size_status ? (t.showSavedPartially(), Writer.CONTENT_WARNING = t.notification(I18n.t("errors.content_overflow"))) : "danger" === Writer.currentNote.content_size_status ? (t.showSaved(), Writer.CONTENT_WARNING = t.notification(I18n.t("warnings.content_too_large"))) : t.showSaved(), t.renderPublishButton(), i ? i() : void 0
                }
            }(this)), this.savingBlocksCompiling(), Writer.currentNote.save()) : void 0
        }, a.prototype.clearForm = function() {
            return Writer.currentNote = null, this.html(this.view("forms/no_note")(this)), this.resetHeight()
        }, a.prototype.loadingForm = function() {
            return this.$("ul.loading").length > 0 ? void 0 : (this.html(this.view("forms/loading_note")()), this.resetHeight())
        }, a.prototype.noteContent = function() {
            return null == Writer.currentNote ? null : this.editor.content()
        }, a.prototype.renderPublishButton = function() {
            return this.$(".publish-button-item").replaceWith(this.view("forms/publish_button")({
                note: Writer.currentNote
            }))
        }, a.prototype.renderCompilingButton = function() {
            return this.$(".publish-button-item").replaceWith(this.view("forms/compiling_button")())
        }, a.prototype.savingBlocksCompiling = function() {
            return this.$(".publish-button-item").replaceWith(this.view("forms/saving_button")())
        }, a.prototype.onNoteCreate = function(e) {
            return this.html(this.view("forms/loading_note")({
                currentNote: e
            })), this.resetHeight()
        }, a.prototype.submitNoteform = function(e) {
            return this.stopEvent(e)
        }, a.prototype.updatePublishButton = function(e) {
            var t;
            return e.id === Writer.currentNote.id ? (t = e.shared ? "<i class='fa fa-check'></i> " + I18n.t("published") + "</a>" : "<i class='fa fa-mail-forward'></i> " + I18n.t("publish") + "</a>", this.publishButton.html(t), this.publishButton.data("shared", e.shared)) : void 0
        }, a.prototype.showSaving = function() {
            return this.savingNotice.html(I18n.t("saving"))
        }, a.prototype.showSaved = function() {
            return this.savingNotice.html(I18n.t("saved"))
        }, a.prototype.showSavedPartially = function() {
            return this.savingNotice.html(I18n.t("saved_partially"))
        }, a.prototype.showCompiled = function() {
            return this.savingNotice.html(I18n.t("compiled"))
        }, a.prototype.hideSaveNotices = function() {
            return this.savingNotice.empty()
        }, a.prototype.handleSaveButton = function() {
            return this.saveNote()
        }, a
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        i = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) r.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        r = {}.hasOwnProperty;
    e = Spine.$, t = Writer.Notebook, Writer.Notebooks = function(r) {
        function o() {
            this.scrollToNotebook = n(this.scrollToNotebook, this), this.updateSequence = n(this.updateSequence, this), this.deleteNotebook = n(this.deleteNotebook, this), this.onNotebookCreate = n(this.onNotebookCreate, this), this.showCreateNotebookForm = n(this.showCreateNotebookForm, this), this.openRenameModal = n(this.openRenameModal, this), this.resetHeight = n(this.resetHeight, this), this.render = n(this.render, this), this.select = n(this.select, this), this.activeNotebook = n(this.activeNotebook, this), this.change = n(this.change, this), this.goToRecycle = n(this.goToRecycle, this), o.__super__.constructor.apply(this, arguments), t.bind("create", this.onNotebookCreate), t.bind("update", function(e) {
                return function(t) {
                    return e.findNotebookElement(t).find("span").text(t.name)
                }
            }(this)), t.bind("put-back", function(e) {
                return function() {
                    return e.render(!0)
                }
            }(this)), t.bind("soft-destroy", function(e) {
                return function(t) {
                    var n, i;
                    return n = e.findNotebookElement(t), n.next().length > 0 ? i = n.next().item() : n.prev().length > 0 && (i = n.prev().item()), n.remove(), null != i ? e.navigate("/notebooks/" + i.id) : (Spine.trigger("clear-notes"), Spine.trigger("clear-form"))
                }
            }(this))
        }
        return i(o, r), o.extend(Spine.Events), o.include(Maleskine.BrowserDetector), o.prototype.className = "span2 aside", o.prototype.elements = {
            ".one-notebook": "items",
            ".notebooks": "notebookList",
            ".create-notebook-loader": "createNotebookLoader"
        }, o.prototype.events = {
            "click .one-notebook": "select",
            "click [data-action=rename-notebook]": "openRenameModal",
            "click .create-notebook": "showCreateNotebookForm",
            "click [data-action=delete-notebook]": "deleteNotebook",
            "click [data-action=recycle-mode]": "goToRecycle"
        }, o.prototype.goToRecycle = function() {
            return this.navigate("/recycle")
        }, o.prototype.change = function(e) {
            return Writer.currentNotebook = e, this.activeNotebook(e)
        }, o.prototype.activeNotebook = function(e) {
            return this.items.removeClass("active"), this.findNotebookElement(e).addClass("active")
        }, o.prototype.select = function(t) {
            var n;
            return n = e(t.target).closest("li[data-cid]").item(), this.navigate("/notebooks/" + n.id)
        }, o.prototype.render = function(t) {
            var n;
            return null == t && (t = !1), this.el.children().length > 0 && !t ? this.activeNotebook(Writer.currentNotebook) : (n = Writer.currentUser.undeletedNotebooks(), this.html(this.view("notebooks/list")({
                notebooks: n,
                isIE: this.isIE()
            })), Writer.currentNotebook && (this.items.removeClass("active"), this.findNotebookElement(Writer.currentNotebook).addClass("active")), this.notebookList.sortable({
                placeholder: "ui-state-highlight",
                delay: 200,
                update: this.updateSequence
            }), this.notebookList.find("li").droppable({
                accept: ".one-note",
                addClasses: !1,
                over: function() {
                    return e(this).hasClass("active") ? void 0 : e(this).addClass("drag_enter")
                },
                out: function() {
                    return e(this).removeClass("drag_enter")
                },
                drop: function(t, n) {
                    var i, r;
                    if (!e(this).hasClass("active")) return i = e(n.draggable).item(), r = e(this).item(), e(this).removeClass("drag_enter"), i.move(r.id)
                }
            }), this.notebookList.disableSelection(), this.resetHeight(), this.createNotebookForm = null, null == this.createNotebookForm && this.$(".new-notebook-form").length > 0 ? this.createNotebookForm = new Writer.CreateNotebookForm({
                el: ".new-notebook-form"
            }) : void 0)
        }, o.prototype.findNotebookElement = function(e) {
            return this.el.find("li[data-cid=" + e.cid + "]")
        }, o.prototype.resetHeight = function() {
            var e;
            return e = document.documentElement.clientHeight - 300, this.el.css({
                height: document.documentElement.clientHeight - 21
            }), this.el.children(".notebooks").css({
                "max-height": e,
                "min-height": e
            })
        }, o.prototype.openRenameModal = function(e) {
            return this.stopEvent(e), Spine.trigger("open-rename-notebook-modal", Writer.currentNotebook)
        }, o.prototype.showCreateNotebookForm = function(e) {
            return this.stopEvent(e), this.createNotebookForm.open()
        }, o.prototype.onNotebookCreate = function(t) {
            return this.createNotebookLoader.show(), t.bind("save", function(t) {
                return function(n) {
                    var i;
                    return n.isPersisted() ? (i = e(t.view("notebooks/entry")({
                        notebook: n
                    })).droppable({
                        accept: ".one-note",
                        addClasses: !1,
                        over: function() {
                            return e(this).hasClass("active") ? void 0 : e(this).addClass("drag_enter")
                        },
                        out: function() {
                            return e(this).removeClass("drag_enter")
                        },
                        drop: function(t, i) {
                            var r;
                            if (!e(this).hasClass("active")) return r = e(i.draggable).item(), n = e(this).item(), e(this).removeClass("drag_enter"), r.move(n.id)
                        }
                    }), t.notebookList.prepend(i), t.refreshElements(), t.createNotebookLoader.hide(), t.navigate(n.writerPath()), n.unbind("save")) : void 0
                }
            }(this))
        }, o.prototype.deleteNotebook = function(e) {
            return this.stopEvent(e), this.confirmMessage(I18n.t("delete_notebook_confirm", {
                title: Writer.currentNotebook.name
            }).encodeHTML(), function() {
                return function() {
                    return Writer.currentNotebook.softDestroy()
                }
            }(this), null)
        }, o.prototype.updateSequence = function() {
            var n, i, r, o, a, s;
            for (this.refreshElements(), s = {}, s.seq = {}, a = this.items, n = i = 0, r = a.length; r > i; n = ++i) o = a[n], s.seq[e(o).item().id] = n;
            return t.updateSequence(s)
        }, o.prototype.scrollToNotebook = function() {
            var e, t, n, i, r, o;
            return null != Writer.currentNotebook && (r = this.notebookList.offset().top, i = this.notebookList.height(), n = this.notebookList.find('li[data-cid="' + Writer.currentNotebook.cid + '"]'), t = n.offset().top - r, e = n.height(), o = t + e, o > i) ? (o -= i, this.notebookList.scrollTop(o)) : void 0
        }, o
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n, i = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        r = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) o.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        o = {}.hasOwnProperty;
    e = Spine.$, t = Writer.Note, n = Writer.Notebook, Writer.Notes = function(o) {
        function a() {
            this.scrollToNote = i(this.scrollToNote, this), this.updateSequence = i(this.updateSequence, this), this.createNote = i(this.createNote, this), this.onNoteSoftDestroy = i(this.onNoteSoftDestroy, this), this.deleteNote = i(this.deleteNote, this), this.noteMoved = i(this.noteMoved, this), this.openMoveNote = i(this.openMoveNote, this), this.renderNote = i(this.renderNote, this), this.goPrivate = i(this.goPrivate, this), this.openShareNote = i(this.openShareNote, this), this.triggerHistoryMode = i(this.triggerHistoryMode, this), this.openWeiboModal = i(this.openWeiboModal, this), this.resetHeight = i(this.resetHeight, this), this.select = i(this.select, this), this.change = i(this.change, this), this.updateTitleAndAbbr = i(this.updateTitleAndAbbr, this), this.renderLoading = i(this.renderLoading, this), this.render = i(this.render, this), a.__super__.constructor.apply(this, arguments), this.notes = [], t.bind("public", this.renderNote), t.bind("private", this.renderNote), t.bind("moved", this.noteMoved), t.bind("soft-destroy", this.onNoteSoftDestroy), n.bind("create", this.renderLoading), Spine.bind("normal:note_changed", this.updateTitleAndAbbr), Spine.bind("clear-notes", this.renderLoading)
        }
        return r(a, o), a.extend(Spine.Events), a.prototype.className = "span3 middle", a.prototype.elements = {
            "#move-note-modal": "moveNoteModal",
            "#share-directly-modal": "shareNoteModal",
            ".notes": "noteList",
            "li[data-model=note]": "items",
            ".new-note-link": "createButtonTop",
            ".cnlt": "createNoteLoaderTop",
            ".cnlb": "createNoteLoaderBottom",
            ".newnote": "newnote"
        }, a.prototype.events = {
            "click .one-note": "select",
            "click [data-action=open-share-note]": "openShareNote",
            "click [data-action=delete-note]": "deleteNote",
            "click [data-action=trigger-history-mode]": "triggerHistoryMode",
            "click [data-action=go-private]": "goPrivate",
            "click [data-action=open-move-note]": "openMoveNote",
            "click [data-action=share-to-weibo]": "openWeiboModal",
            "click [data-action=create-note]": "createNote"
        }, a.prototype.render = function() {
            var t;
            return t = null != Writer.currentNotebook ? Writer.currentNotebook.allUndeletedNotes() : [], this.html(this.view("notes/list")({
                notes: t
            })), Writer.currentNote && (this.items.removeClass("active"), this.findNoteElement(Writer.currentNote).addClass("active")), this.noteList.sortable({
                placeholder: "ui-state-highlight",
                update: function(t) {
                    return function(n, i) {
                        var r;
                        return r = e(i.item), r.hasClass("one-note") && t.noteList.find("li[data-cid=" + r.data("cid") + "]").length > 0 ? t.updateSequence() : void 0
                    }
                }(this)
            }), this.noteList.disableSelection(), this.resetHeight(), this.movingModal = null, this.$(".move-note-modal").length > 0 && (this.movingModal = new Writer.MovingModal({
                el: ".move-note-modal"
            })), this.movingModal.fullscreen = !0
        }, a.prototype.renderLoading = function() {
            return this.$("ul.loading").length > 0 ? void 0 : (this.html(this.view("notes/loading")()), this.refreshElements(), this.resetHeight())
        }, a.prototype.updateTitleAndAbbr = function(e, t) {
            var n, i;
            return i = Writer.currentNote.isMarkdown() ? t.slice(0, 61) : Maleskine.Utils.removeHtmlTags(t).slice(0, 61), n = this.findNoteElement(Writer.currentNote), n.find(".abbreviate").text(i), n.find(".note-link").text(e), n.find(".wordage").text(I18n.t("wordage", {
                wordage: this.count_words(t, Writer.currentNote.note_type)
            }))
        }, a.prototype.change = function(e) {
            return Writer.currentNote = e, null != this.weiboModal && (this.weiboModal.currentNote = Writer.currentNote), this.items.removeClass("active"), this.findNoteElement(e).addClass("active")
        }, a.prototype.select = function(t) {
            var n;
            return n = e(t.target).closest("li[data-cid]").item(), this.navigate("/notebooks/" + n.notebook_id + "/notes/" + n.id)
        }, a.prototype.findNoteElement = function(e) {
            return this.el.find("li[data-cid=" + e.cid + "]")
        }, a.prototype.resetHeight = function() {
            var t, n;
            return this.el.css({
                height: document.documentElement.clientHeight - 21
            }), t = document.documentElement.clientHeight - e(".navbar").outerHeight(), this.newnote.length > 0 ? (n = t - this.el.padding("top") - 1, this.newnote.css({
                height: n
            })) : void 0
        }, a.prototype.findAvaliableNote = function(e) {
            var t;
            return t = this.findNoteElement(e), t.next().length > 0 ? t.next().item() : t.prev().length > 0 ? t.prev().item() : null
        }, a.prototype.openWeiboModal = function(e) {
            return this.stopEvent(e), Spine.trigger("open-weibo-modal", Writer.currentNote)
        }, a.prototype.triggerHistoryMode = function(e) {
            return this.stopEvent(e), this.navigate("/notebooks/" + Writer.currentNote.notebook_id + "/notes/" + Writer.currentNote.id + "/history")
        }, a.prototype.openShareNote = function(t) {
            return this.stopEvent(t), e(".publish-loading").show(), Writer.currentNote.publicize()
        }, a.prototype.goPrivate = function() {
            return Writer.currentNote.privatize()
        }, a.prototype.renderNote = function(t) {
            var n;
            return null != t ? (n = this.findNoteElement(t), t.shared ? n.find(".note-icon").addClass("shared") : n.find(".note-icon").removeClass("shared"), e(n.find("ul.dropdown-menu")[0]).html(this.view("notes/dropdowns/dropdown_items")({
                note: t
            }))) : void 0
        }, a.prototype.openMoveNote = function(e) {
            return this.stopEvent(e), this.movingModal.currentNote = Writer.currentNote, this.movingModal.open()
        }, a.prototype.noteMoved = function(e) {
            var t, n;
            return this.movingModal && this.movingModal.close(), t = this.findNoteElement(e), n = null, n = t.next().length > 0 ? t.next().item() : t.prev().length > 0 ? t.prev().item() : null, this.navigate(null != n ? n.writerPath() : Writer.currentNotebook.writerPath())
        }, a.prototype.deleteNote = function(n) {
            var i;
            return this.stopEvent(n), i = t.find(e(n.target).parent().parent().parent().data("cid")), this.confirmMessage(I18n.t("delete_note_confirm", {
                title: i.title
            }).encodeHTML(), function() {
                return function() {
                    return Writer.currentNote.softDestroy()
                }
            }(this), null)
        }, a.prototype.onNoteSoftDestroy = function(e) {
            var t;
            return t = this.findAvaliableNote(e), this.findNoteElement(e).remove(), null != t ? this.navigate(t.writerPath()) : (Spine.trigger("clear-form"), this.navigate(Writer.currentNotebook.writerPath()))
        }, a.prototype.createNote = function(n) {
            var i, r;
            return this.stopEvent(n), i = !0, e(n.target).parent().hasClass("new-note-bottom") && (i = !1), i ? this.createNoteLoaderTop.show() : this.createNoteLoaderBottom.show(), r = new t, r.notebook_id = Writer.currentNotebook.id, r.title = I18n.t("default_note_title"), r.seq_in_nb = i ? t.firstSeqInNotebook(Writer.currentNotebook) - 1 : t.lastSeqInNotebook(Writer.currentNotebook) + 1, r.bind("save", function(e) {
                return function(t) {
                    return t.isPersisted() ? (e.createNoteLoaderTop.hide(), e.createNoteLoaderBottom.hide(), e.refreshElements(), e.navigate(t.writerPath()), t.unbind("save")) : void 0
                }
            }(this)), r.save()
        }, a.prototype.updateSequence = function() {
            var n, i, r, o, a, s;
            for (this.refreshElements(), s = {}, s.seq = {}, a = this.items, n = i = 0, r = a.length; r > i; n = ++i) o = a[n], s.seq[e(o).item().id] = n;
            return t.updateSequence(s)
        }, a.prototype.scrollToNote = function() {
            var e, t, n, i, r, o, a;
            if (null != Writer.currentNote) {
                if (i = this.$el.offset().top, o = this.noteList.offset().top, r = this.$el.height() - (o - i), n = this.noteList.find('li[data-cid="' + Writer.currentNote.cid + '"]'), 0 === n.length) return;
                if (t = n.offset().top - o, e = n.height(), a = t + e, a > r) return a -= r, a -= o + this.$el.offset().top - e, this.$el.scrollTop(a)
            }
        }, a
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) a.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        a = {}.hasOwnProperty;
    e = Spine.$, n = Writer.Notebook, t = Writer.Note, i = Writer.User, Writer.NormalMode = function(t) {
        function i() {
            this.resetHeight = r(this.resetHeight, this), this.afterActivated = r(this.afterActivated, this), this.normalModeClearForm = r(this.normalModeClearForm, this), this.activate = r(this.activate, this), i.__super__.constructor.apply(this, arguments), Spine.bind("normal-mode-clear-form", this.normalModeClearForm), this.navbar = new Writer.Navbar, this.notebooks = new Writer.Notebooks, this.notes = new Writer.Notes, this.form = new Writer.NoteForm, this.active(function(e) {
                return Spine.trigger("loading-form"), null != e && null != e.notebook_id && n.exists(e.notebook_id) ? (null != Writer.currentNotebook && e.notebook_id - Writer.currentNotebook.id !== 0 && Spine.trigger("clear-notes"), Writer.currentNotebook = n.find(e.notebook_id)) : Writer.currentNotebook = n.allUndeletedNotebooks()[0], null != Writer.currentNotebook && (Writer.currentNote = null != e && e.note_id && Writer.currentNotebook.exists(e.note_id) ? Writer.currentNotebook.notes().find(e.note_id) : Writer.currentNotebook.firstNote()), this.navbar.render(), this.notebooks.render(), this.notes.render(), this.form.render()
            }), this.append(this.navbar, this.notebooks, this.notes, this.form)
        }
        return o(i, t), i.extend(Spine.Events), i.include(Maleskine.BrowserDetector), i.prototype.className = "row-fluid normal-mode", i.prototype.activate = function() {
            return i.__super__.activate.apply(this, arguments), this.afterActivated(), this
        }, i.prototype.normalModeClearForm = function() {
            return this.form ? this.form.el.empty() : void 0
        }, i.prototype.afterActivated = function() {
            return e("div.stack").css("padding-left", "45px"), this.resetHeight(), this.notebooks.scrollToNotebook(), this.notes.scrollToNote()
        }, i.prototype.resetHeight = function() {
            return this.notebooks.resetHeight(), this.notes.resetHeight(), this.form.resetHeight()
        }, i
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n, i = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        r = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) o.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        o = {}.hasOwnProperty;
    e = Spine.$, n = Writer.User, t = Writer.Note, Writer.PreviewArea = function(t) {
        function n() {
            this.resetHeight = i(this.resetHeight, this), this.highlight = i(this.highlight, this), this.showVideo = i(this.showVideo, this), this.updatePreview = i(this.updatePreview, this), this.render = i(this.render, this), n.__super__.constructor.apply(this, arguments), this.converter = new Maleskine.Spine.MarkdownConverter, Spine.bind("preview:note_changed", this.updatePreview), this.preContent = e("<div>")
        }
        return r(n, t), n.prototype.className = "span6 preview", n.prototype.elements = {
            ".title": "title",
            ".content": "content"
        }, n.prototype.render = function() {
            var e;
            return Writer.currentNote && null != Writer.currentNote ? null == Writer.currentNote.content ? Writer.currentNote.loadAttribute("content", function(e) {
                return function() {
                    return e.render()
                }
            }(this)) : (null != Writer.currentNote.content && (e = this.converter.convert(Writer.currentNote.content)), this.html(this.view("forms/preview_area")({
                title: Writer.currentNote.title,
                content: e
            })), this.showVideo(this.el), this.highlight(this.content), this.resetHeight()) : void 0
        }, n.prototype.updatePreview = function() {
            var t, n, i, r, o, a, s, l, c, u, d, h, p, f, g, m, v, b, y, w, _;
            if (t = e(".preview-mode.active input.title"), _ = e(".preview-mode.active textarea").data("controller"), t.length > 0 && _) {
                for (this.title.text(t.val()), n = this.converter.convert(_.content()), this.preContent.html(n), this.showVideo(this.preContent), this.highlight(this.preContent), p = this.preContent.contents(), h = this.content.contents(), c = p.length, l = h.length, s = c > l ? l : c, i = r = 0, f = s; f >= 0 ? f > r : r > f; i = f >= 0 ? ++r : --r) d = e(p[i]), u = e(h[i]), w = d[0].nodeType === Kalamu.Keys.NODE_TYPES.TEXT_TYPE ? d[0].textContent : d[0].innerHTML, y = u[0].nodeType === Kalamu.Keys.NODE_TYPES.TEXT_TYPE ? u[0].textContent : u[0].innerHTML, d[0].nodeName !== u[0].nodeName ? u.before(d.clone()).remove() : w !== y && (u[0].nodeType === Kalamu.Keys.NODE_TYPES.TEXT_TYPE ? u[0].textContent = w : (u.html(w), u.attr("class", d.attr("class"))));
                if (c > l) for (i = o = g = l, m = c; m >= g ? m > o : o > m; i = m >= g ? ++o : --o) e(p[i]).appendTo(this.content);
                else for (i = a = v = c, b = l; b >= v ? b > a : a > b; i = b >= v ? ++a : --a) e(h[i]).remove()
            }
            return this.resetHeight()
        }, n.prototype.showVideo = function(t) {
            var n;
            return n = Maleskine.Utils.doesVideoURLAvailable, t.find(".video-package").each(function(t, i) {
                var r, o, a;
                return i = e(i), a = i.attr("data-video-url"), a && n(a) ? (o = e('<iframe class="player" height="400" width="480" src="' + a + '" frameborder=0 allowfullscreen></iframe>'), r = i.children(), e(r[0]).before(o)) : void 0
            })
        }, n.prototype.highlight = function(t) {
            return t.find("pre code").each(function(t, n) {
                var i, r, o, a;
                return n = e(n), i = n.parent(), r = n.text(), o = n.attr("class"), o && hljs.listLanguages().indexOf(o) >= 0 ? (a = hljs.highlight(o, r, !0), a = a.value) : (a = hljs.highlightAuto(r), o = a.language, n.attr("class", o), a = a.value), i.attr("class", "hljs " + o), n.html(a)
            })
        }, n.prototype.resetHeight = function() {
            var e;
            return e = document.documentElement.clientHeight, this.el.css({
                "max-height": e,
                "min-height": e
            })
        }, n
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n, i = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        r = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) o.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        o = {}.hasOwnProperty;
    e = Spine.$, n = Writer.User, t = Writer.Note, Writer.PreviewForm = function(e) {
        function t() {
            this.resetHeight = i(this.resetHeight, this), t.__super__.constructor.apply(this, arguments), this.isPreviewMode = !0
        }
        return r(t, e), t.extend(Spine.Events), t.prototype.className = "span6 main", t.prototype.resetHeight = function() {
            var e, t, n, i, r;
            return this.refreshElements(), t = this.getResetArea(), e = document.documentElement.clientHeight, t.length > 0 ? (Writer.currentNote.isMarkdown() ? (r = this.$("form ul.toolbar").outerHeight(), i = e - this.el.padding("top") - this.noteTitle.cssHeight() - r) : (r = 0, this.toolbar && (r = this.toolbar.outerHeight()), n = t.padding("top") + t.padding("bottom"), i = e - this.el.padding("top") - this.noteTitle.outerHeight() - this.toolbar.outerHeight() - n), t.css({
                height: i
            })) : this.loadingEffect.length > 0 ? (i = e, this.loadingEffect.css({
                height: i
            })) : void 0
        }, t
    }(Writer.NoteForm)
}.call(this), function() {
    var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) a.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        a = {}.hasOwnProperty;
    e = Spine.$, i = Writer.User, t = Writer.Note, n = Writer.Notebook, Writer.PreviewMode = function(t) {
        function n() {
            this.resetHeight = r(this.resetHeight, this), this.afterActivated = r(this.afterActivated, this), this.exit = r(this.exit, this), this.changeNote = r(this.changeNote, this), this.activate = r(this.activate, this), n.__super__.constructor.apply(this, arguments), this.form = new Writer.PreviewForm, this.form.isPreviewMode = !0, this.area = new Writer.PreviewArea, this.active(function(e) {
                return function(t) {
                    return e.note_id = parseInt(t.note_id), e.notebook_id = parseInt(t.notebook_id), Writer.currentNotebook = Writer.currentUser.notebooks().find(e.notebook_id), (null == Writer.currentNote || e.note_id - Writer.currentNote.id !== 0) && (Writer.currentNote = Writer.currentNotebook.notes().find(e.note_id)), Writer.currentNote && e.changeNote(), e.noticeMessage(I18n.t("press_esc_to_leave")), Mousetrap.bind("esc", e.exit), Spine.bind("exit-preview-mode", e.exit)
                }
            }(this)), this.append(this.form, this.area)
        }
        return o(n, t), n.extend(Spine.Events), n.include(Maleskine.BrowserDetector), n.prototype.className = "row-fluid preview-mode", n.prototype.activate = function() {
            return n.__super__.activate.apply(this, arguments), this.afterActivated(), this
        }, n.prototype.changeNote = function() {
            return this.area.render(), this.form.render()
        }, n.prototype.exit = function() {
            return Mousetrap.unbind("esc"), this.form.saveNote(), this.navigate("/notebooks/" + Writer.currentNotebook.id + "/notes/" + Writer.currentNote.id)
        }, n.prototype.afterActivated = function() {
            return e("div.stack").css("padding-left", "0"), this.resetHeight()
        }, n.prototype.resetHeight = function() {
            return this.form.resetHeight(), this.area.resetHeight()
        }, n
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n, i = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        r = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) o.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        o = {}.hasOwnProperty;
    e = Spine.$, n = Writer.User, t = Writer.Note, Writer.WritingForm = function(e) {
        function t() {
            this.resetHeight = i(this.resetHeight, this), this.initEditor = i(this.initEditor, this), t.__super__.constructor.apply(this, arguments), this.isWritingMode = !0
        }
        return r(t, e), t.prototype.className = "main", t.prototype.initEditor = function() {
            return t.__super__.initEditor.apply(this, arguments), Writer.currentNote.isMarkdown() ? this.$("textarea").autosize({
                append: "\n"
            }) : void 0
        }, t.prototype.resetHeight = function() {
            var e, t, n, i;
            return this.refreshElements(), t = this.getResetArea(), e = document.documentElement.clientHeight, t.length > 0 ? Writer.currentNote.isMarkdown() ? (n = e - this.el.padding("top") - this.noteTitle.cssHeight(), t.css({
                height: n
            })) : (i = e - this.el.parent().padding("top") - this.el.parent().padding("bottom") - this.el.padding("top") - this.noteTitle.outerHeight() - t.padding("top"), t.css({
                "min-height": i
            })) : this.loadingEffect.length > 0 && (n = e, this.loadingEffect.css({
                height: n
            })), this.$("textarea").trigger("autosize.resize")
        }, t
    }(Writer.NoteForm)
}.call(this), function() {
    var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) a.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        a = {}.hasOwnProperty;
    e = Spine.$, i = Writer.User, t = Writer.Note, n = Writer.Notebook, Writer.WritingMode = function(t) {
        function n() {
            this.afterActivated = r(this.afterActivated, this), this.exit = r(this.exit, this), this.activate = r(this.activate, this), n.__super__.constructor.apply(this, arguments), this.form = new Writer.WritingForm, this.form.isWritingMode = !0, this.active(function(e) {
                return function(t) {
                    return e.note_id = t.note_id, e.notebook_id = t.notebook_id, Writer.currentNotebook = Writer.currentUser.notebooks().find(e.notebook_id), (null == Writer.currentNote || e.note_id - Writer.currentNote.id !== 0) && (Writer.currentNote = Writer.currentNotebook.notes().find(e.note_id)), Writer.currentNote && e.form.render(), e.noticeMessage(I18n.t("press_esc_to_leave")), Mousetrap.bind("esc", e.exit), Spine.bind("exit-writing-mode", e.exit)
                }
            }(this)), this.append(this.form)
        }
        return o(n, t), n.extend(Spine.Events), n.include(Maleskine.BrowserDetector), n.prototype.className = "writing-mode", n.prototype.activate = function() {
            return n.__super__.activate.apply(this, arguments), this.afterActivated(), Spine.trigger("enter-writing-mode"), this
        }, n.prototype.exit = function() {
            return Mousetrap.unbind("esc"), this.form.saveNote(), this.navigate("/notebooks/" + Writer.currentNotebook.id + "/notes/" + Writer.currentNote.id), Spine.trigger("back-to-normal-mode")
        }, n.prototype.afterActivated = function() {
            return e("div.stack").css("padding-left", "0")
        }, n
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) a.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        a = {}.hasOwnProperty;
    e = Spine.$, t = Writer.Note, i = Writer.Notebook, n = Writer.NoteLog, Writer.HistoryMode = function(t) {
        function i() {
            this.exit = r(this.exit, this), this.resetHeight = r(this.resetHeight, this), this.afterActivated = r(this.afterActivated, this), this.activate = r(this.activate, this), i.__super__.constructor.apply(this, arguments), Spine.bind("exit-history-mode", this.exit), this.noteLogsList = new Writer.NoteLogsList, this.noteLogView = new Writer.NoteLogView, this.active(function(e) {
                return function(t) {
                    return Mousetrap.bind("esc", e.exit), e.note_id = t.note_id, e.notebook_id = t.notebook_id, e.note_log_id = t.note_log_id, null == Writer.currentNote || Writer.currentNote.id - e.note_id !== 0 || 0 === n.all().length ? (Writer.currentNotebook = Writer.currentUser.notebooks().find(e.notebook_id), (null == Writer.currentNote || e.note_id - Writer.currentNote.id !== 0) && (Writer.currentNote = Writer.currentNotebook.notes().find(e.note_id)), Writer.currentNoteLog = null, e.noteLogsList.renderLoading(), e.noteLogView.renderLoading(), n.fetch({
                        data: {
                            note_id: Writer.currentNote.id
                        },
                        processData: !0
                    }), n.bind("refresh", function() {
                        return Writer.currentNoteLog = null != e.note_log_id ? Writer.currentNote.noteLogs().find(e.note_log_id) : Writer.currentNote.noteLogs().all().length > 0 ? Writer.currentNote.noteLogs().first() : null, e.noteLogsList.render(0 === n.all().length), e.noteLogView.render()
                    })) : (e.noteLogsList.render(0 === n.all().length), e.noteLogView.render())
                }
            }(this)), this.append(this.noteLogsList, this.noteLogView)
        }
        return o(i, t), i.extend(Spine.Events), i.include(Maleskine.BrowserDetector), i.prototype.className = "row-fluid history-mode", i.prototype.activate = function() {
            return i.__super__.activate.apply(this, arguments), this.afterActivated(), this
        }, i.prototype.afterActivated = function() {
            return e("div.stack").css("padding-left", "0"), this.resetHeight()
        }, i.prototype.resetHeight = function() {
            return this.noteLogsList.resetHeight(), this.noteLogView.resetHeight()
        }, i.prototype.exit = function() {
            return Mousetrap.unbind("esc"), n.deleteAll(), Writer.currentNoteLog = null, this.navigate(Writer.currentNote.writerPath()), Spine.trigger("back-to-normal-mode")
        }, i
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) a.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        a = {}.hasOwnProperty;
    e = Spine.$, t = Writer.Note, i = Writer.Notebook, n = Writer.NoteLog, Writer.RecycleMode = function(n) {
        function i() {
            this.exit = r(this.exit, this), this.resetHeight = r(this.resetHeight, this), this.afterActivated = r(this.afterActivated, this), this.activate = r(this.activate, this), this.renderLoading = r(this.renderLoading, this), i.__super__.constructor.apply(this, arguments), Spine.bind("exit-recycle-mode", this.exit), this.noteList = new Writer.RecycleNoteList, this.noteContent = new Writer.RecycleNoteContent, this.active(function(e) {
                return function(n) {
                    var i;
                    return Mousetrap.bind("esc", e.exit), i = t.findInDeletedNotes(n.note_id) || t.allDeletedNotes()[0], e.noteList.render(i), e.noteContent.render(i)
                }
            }(this)), this.append(this.noteList, this.noteContent)
        }
        return o(i, n), i.extend(Spine.Events), i.include(Maleskine.BrowserDetector), i.prototype.className = "row-fluid recycle-mode", i.prototype.renderLoading = function() {
            return this.html(this.view("forms/loading_note")), this.resetHeight()
        }, i.prototype.activate = function() {
            return i.__super__.activate.apply(this, arguments), this.afterActivated(), this
        }, i.prototype.afterActivated = function() {
            return e("div.stack").css("padding-left", "0"), this.resetHeight()
        }, i.prototype.resetHeight = function() {
            return this.noteList.resetHeight()
        }, i.prototype.exit = function() {
            return Mousetrap.unbind("esc"), this.navigate(null != Writer.currentNote ? Writer.currentNote.writerPath() : "/")
        }, i
    }(Spine.Controller)
}.call(this), function() {
    var e, t, n, i, r = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) a.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        },
        a = {}.hasOwnProperty;
    e = Spine.$, n = Writer.Notebook, t = Writer.Note, i = Writer.User, Writer.Main = function(t) {
        function n() {
            this.windowResize = r(this.windowResize, this), this.networkDownNotification = r(this.networkDownNotification, this), this.networkIssueNotification = r(this.networkIssueNotification, this), this.networkBackNotification = r(this.networkBackNotification, this), this.timeOutNotification = r(this.timeOutNotification, this), this.errorNotification = r(this.errorNotification, this), this.handleAjaxError = r(this.handleAjaxError, this), this.handleAjaxSuccess = r(this.handleAjaxSuccess, this), this.isMac() ? Mousetrap.bind("command+shift+1", function(e) {
                return function(t) {
                    return e.stopEvent(t)
                }
            }(this)) : Mousetrap.bind("ctrl+shift+1", function(e) {
                return function(t) {
                    return e.stopEvent(t)
                }
            }(this)), Writer.User.bind("ajaxError", this.handleAjaxError), Writer.Notebook.bind("ajaxError", this.handleAjaxError), Writer.Note.bind("ajaxError", this.handleAjaxError), Writer.User.bind("ajaxSuccess", this.handleAjaxSuccess), Writer.Notebook.bind("ajaxSuccess", this.handleAjaxSuccess), Writer.Note.bind("ajaxSuccess", this.handleAjaxSuccess), n.__super__.constructor.apply(this, arguments), e(window).resize(this.windowResize)
        }
        return o(n, t), n.extend(Spine.Events), n.include(Maleskine.BrowserDetector), n.prototype.className = "stack expansion", n.prototype.controllers = {
            normal: Writer.NormalMode,
            preview: Writer.PreviewMode,
            writing: Writer.WritingMode,
            history: Writer.HistoryMode,
            recycle: Writer.RecycleMode
        }, n.prototype.routes = {
            "/": "normal",
            "/recycle": "recycle",
            "/recycle/:note_id": "recycle",
            "/notebooks/:notebook_id": "normal",
            "/notebooks/:notebook_id/notes/:note_id": "normal",
            "/notebooks/:notebook_id/notes/:note_id/preview": "preview",
            "/notebooks/:notebook_id/notes/:note_id/writing": "writing",
            "/notebooks/:notebook_id/notes/:note_id/history": "history",
            "/notebooks/:notebook_id/notes/:note_id/history/:note_log_id": "history"
        }, n.prototype.handleAjaxSuccess = function() {
            return e.noty.closeAll()
        }, n.prototype.handleAjaxError = function(e, t) {
            switch (t.status) {
                case 401:
                    return this.notification(I18n.t("errors.401"));
                case 403:
                    return this.noticeMessage(t.responseJSON.message);
                case 409:
                    return this.notification(I18n.t("errors.writer_version_conflict"));
                case 500:
                    return this.notification(I18n.t("errors.500"))
            }
        }, n.prototype.errorNotification = function() {
            return this.notification(I18n.t("ajax_error"))
        }, n.prototype.timeOutNotification = function() {
            return this.notification(I18n.t("network.issue"))
        }, n.prototype.networkBackNotification = function() {
            return this.networkIssueNotyId = null, this.networkDownNotyId = null, this.notification(I18n.t("network.back"), 1500)
        }, n.prototype.networkIssueNotification = function() {
            return this.networkIssueNotyId && null != this.networkIssueNotyId ? void 0 : this.networkIssueNotyId = this.notification(I18n.t("network.issue"))
        }, n.prototype.networkDownNotification = function() {
            return this.networkDownNotyId && null != this.networkDownNotyId ? void 0 : (e.noty.closeAll(), this.networkIssueNotyId = this.notification(I18n.t("network.down")))
        }, n.prototype.windowResize = function() {
            var e, t, n, i, r;
            for (i = this.manager.controllers, r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.isActive() && e.resetHeight ? e.resetHeight() : void 0);
            return r
        }, n
    }(Spine.Stack)
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/commons/saving_notices"] = function() {
        var e = "<span class='saving-notice'></span>";
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/forms/compiling_button"] = function() {
        var e = '<li class="pull-right publish-button-item"> <a href="javascript:void(null)"> <img alt="Tiny" class="loader-tiny" src="http://baijii-common.b0.upaiyun.com/loaders/tiny.gif"> ' + (I18n.t("publishing") || "").toString().encodeHTML() + " </a></li>";
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/forms/error"] = function() {
        var e = '<p><a href="javascript:void(0)" data-action="error">Error</a></p>';
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/forms/extra_buttons"] = function(e) {
        var t = "" + JST["writer/views/forms/publish_button"](e) + '<li class="pull-right"> <a href="javascript:void(null)" data-action="trigger-writing-mode" data-toggle="tooltip" data-original-title="' + (I18n.t("toolbar.writing_mode") || "").toString().encodeHTML() + '">';
        return e.isWritingMode && (t += ' <i class="fa fa-compress"></i>'), e.isWritingMode || (t += ' <i class="fa fa-expand"></i>'), t += " </a></li>", e.note.isMarkdown() && (t += " ", t += e.isPreviewMode ? ' <li class="pull-right"> <a href="javascript:void(null)" data-action="trigger-preview-mode" data-toggle="tooltip" data-original-title="' + (I18n.t("toolbar.return") || "").toString().encodeHTML() + '"> <i class="fa fa-columns"></i> </a> </li> ' : ' <li class="pull-right"> <a href="javascript:void(null)" data-action="trigger-preview-mode" data-toggle="tooltip" data-original-title="' + (I18n.t("toolbar.preview_mode") || "").toString().encodeHTML() + '"> <i class="fa fa-columns"></i> </a> </li> '), t += ' <li class="pull-right"> <a href="javascript:void(null)" data-action="trigger-save" data-toggle="tooltip" data-original-title="' + (I18n.t("toolbar.save") || "").toString().encodeHTML() + '"> <i class="fa fa-floppy-o"></i> </a> </li> <li class="history-btn"> <a href="javascript:void(null)" data-action="trigger-history-mode" data-toggle="tooltip" data-original-title="' + (I18n.t("toolbar.history") || "").toString().encodeHTML() + '"> <i class="fa fa-clock-o"></i> </a> </li>' + JST["writer/views/commons/saving_notices"]()
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/forms/loading_note"] = function() {
        var e = '<ul class="loading"> <li class="loading-a"></li> <li class="loading-b"></li></ul>';
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/forms/markdown"] = function(e) {
        var t = '<form class="note-form markdown" data-note-id="' + (e.currentNote.id || "").toString().encodeHTML() + '" onsubmit="return false;"> <input class="title mousetrap" name="note_name" type="text" id="note_title" value="' + (e.currentNote.title || "").toString().encodeHTML() + '"> <ul class="toolbar clearfix"> ';
        return Maleskine.BrowserDetector.isIE() || Maleskine.BrowserDetector.isMozilla() || (t += ' <li> <a href="javascript:void(null)" data-action="undo" data-toggle="tooltip" data-original-title="' + (I18n.t("toolbar.undo") || "").toString().encodeHTML() + '"> <i class="fa fa-undo"></i> </a> </li> <li> <a href="javascript:void(null)" data-action="redo" data-toggle="tooltip" data-original-title="' + (I18n.t("toolbar.redo") || "").toString().encodeHTML() + '"> <i class="fa fa-repeat"></i> </a> </li> '), t += " ", Modernizr.draganddrop && (t += " ", t += Maleskine.BrowserDetector.canPasteImage() ? ' <li><a href="javascript:void(null)" data-placement="right" data-toggle="tooltip" data-original-title="' + (I18n.t("button.upload_image_notice") + "\uff0c" + I18n.t("button.upload_image_paste_notice") || "").toString().encodeHTML() + '"><i class="fa fa-picture-o"></i></a></li> ' : ' <li><a href="javascript:void(null)" data-placement="right" data-toggle="tooltip" data-original-title="' + (I18n.t("button.upload_image_notice") || "").toString().encodeHTML() + '"><i class="fa fa-picture-o"></i></a></li> ', t += " "), t += ' <!-- <li> <a href="javascript:void(null)" data-action="insert-video" data-placement="right" data-toggle="tooltip" data-original-title="' + (I18n.t("toolbar.insert_video") || "").toString().encodeHTML() + '"> <i class="fa fa-youtube-play"></i> </a> </li> --> ' + JST["writer/views/forms/extra_buttons"]({
                note: e.currentNote,
                isWritingMode: e.isWritingMode,
                isPreviewMode: e.isPreviewMode
            }) + ' </ul> <textarea class="text mousetrap" name="note_content">' + (e.currentNote.content || "").toString().encodeHTML() + "</textarea></form>"
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/forms/no_note"] = function() {
        var e = '<div class="no-notes"><span>\u7b80&nbsp\u4e66</span></div>';
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/forms/plain"] = function(e) {
        var t = '<form class="note-form rich-text" data-note-id="' + (e.currentNote.id || "").toString().encodeHTML() + '"><input class="title mousetrap" name="note_title" id="note_title" type="text" value="' + (e.currentNote.title || "").toString().encodeHTML() + '"><div id="editor"></div></form>';
        return t
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/forms/preview_area"] = function(e) {
        var t = '<h1 class="title mousetrap">' + (e.title || "").toString().encodeHTML() + '</h1><div class="content mousetrap">' + e.content + "</div>";
        return t
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/forms/publish_button"] = function(e) {
        var t = "";
        return e.note.shared ? (t += " ", t += e.note.needsCompile() ? " <li class='pull-right publish-button-item'> <a href='javascript:void(null)' data-action='compile' id='publish-button'> <i class='fa fa-refresh'></i> " + (I18n.t("publish_changes") || "").toString().encodeHTML() + " </a> </li> " : " <li class='pull-right publish-button-item'> <a href='javascript:void(null)' data-action='privatize' id='publish-button'> <i class='fa fa-check'></i> " + (I18n.t("published") || "").toString().encodeHTML() + " </a> </li> ") : t += " <li class='pull-right publish-button-item'> <a href='javascript:void(null)' data-action='publicize' id='publish-button'> <i class='fa fa-mail-forward'></i> " + (I18n.t("publish") || "").toString().encodeHTML() + " </a> </li>", t
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/forms/saving_button"] = function() {
        var e = "<li class='pull-right publish-button-item'> <a href='javascript:void(null)' data-action='saving' id='publish-button'> <i class='fa fa-floppy-o'></i> " + (I18n.t("saving") || "").toString().encodeHTML() + " </a></li>";
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/forms/writing"] = function() {
        var e = "";
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/modals/rename_notebook_modal"] = function() {
        var e = '<div tabindex="-1" aria-hidden="true" class="modal hide fade rename-notebook-modal fullscreen" id="rename-notebook-modal"> <div class="modal-header"> <b>' + (I18n.t("rename_notebook") || "").toString().encodeHTML() + '</b> </div> <div class="modal-body"> <form class="modal-form" onsubmit="return false"> <input placeholder="' + (I18n.t("new_notebook_name") || "").toString().encodeHTML() + '" name="name" type="text" class="input-large notebook-input" size="30"> </form> </div> <div class="modal-footer"> <a href="javascript:void(0)" class="btn cancel-button"> ' + (I18n.t("button.cancel") || "").toString().encodeHTML() + ' </a> <input class="rename-a-notebook btn btn-info" name="commit" type="submit" value="' + (I18n.t("button.submit") || "").toString().encodeHTML() + '" data-action="submit-rename-notebook"> </div></div>';
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/modals/share_modal"] = function() {
        var e = '<div id="share-modal" tabindex="-1" aria-hidden="true" class="modal hide fade share-directly-modal fullscreen"> <a href="javascript:void(null)" class="close" data-dismiss="modal"><i class="fa fa-times"></i></a> <div class="container"> <div class="modal-header"> <h3 class=""><i class="fa fa-check"></i> ' + (I18n.t("note.share.success") || "").toString().encodeHTML() + '</h3> </div> <div class="modal-body"> <div class="social-network"> <h2 class="title" data-toggle="tooltip" data-title="' + (I18n.t("note.share.click_to_show") || "").toString().encodeHTML() + '" data-trigger="manual" data-placement="right" data-container=".share-directly-modal"> <a href="javascript:void(null)" class="text-info" target="_blank"> </a> </h2> <p>' + (I18n.t("note.share.share_note") || "").toString().encodeHTML() + '</p> <ul class="share unstyled"> <li class="item-1 share-link"> <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(null)"> <i class="fa fa-link"></i> </a> <div class="arrow-top dropdown-menu permlink"> <input id="permlink-text" class="text-left" readonly> <a href="javascript:void(null)" class="btn btn-info btn-small copy-to-clipboard" data-clipboard-target="permlink-text">\u590d\u5236\u94fe\u63a5</a> </div> </li> <li class="weibo"> <a href="#share-weibo-modal" role="button" data-toggle="modal" data-action="share-to-weibo"> <i class="fa fa-weibo"></i> </a> </li> <li class="weixin share-wechat"> <a href="javascript:void(null)" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-weixin"></i> </a> <div class="arrow-top dropdown-menu"></div> </li> <li class="douban"><a href="javascript:void(null)" data-sns="douban"><i class="fa fa-douban"></i></a></li> <li class="ellipsis"> <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(null)"> <i class="fa fa-ellipsis-h"></i> </a> <ul class="dropdown-menu arrow-top more-sns"> ',
            t = ["tweibo", "qzone", "twitter", "facebook", "google_plus"];
        if (t) for (var n, i = -1, r = t.length - 1; r > i;) n = t[i += 1], e += ' <li> <a href="javascript:void(null)" data-sns="' + (n || "").toString().encodeHTML() + "\"> <img src='" + (Maleskine.CommonImages.social_icon(n, 32, 32) || "").toString().encodeHTML() + "'> " + (I18n.t("note.dropdown.share_to_sns." + n) || "").toString().encodeHTML() + " </a> </li> ";
        return e += ' </ul> </li> </ul> </div> <div class="submission"> <span>' + (I18n.t("note.contribute.hint") || "").toString().encodeHTML() + '</span> <div class="search"> <input class="input-large search-query" placeholder="\u641c\u7d22" type="text"> </div> <div class="loader"> <img src="' + Maleskine.CommonImages.loader("tiny") + '" class="lodaer loader-tiny" /> </div> <div class="no-search-result" style="display:none"> <p>' + (I18n.t("note.contribute.no_search_result") || "").toString().encodeHTML() + '</p> </div> <div class="contribute"> </div> </div> </div> <div class="modal-footer"> <!-- <a href="javascript:void(null)" class="btn" data-action="close-share-note">' + (I18n.t("button.close") || "").toString().encodeHTML() + '</a> <a href="javascript:void(null)" class="btn btn-info share-l" data-action="submit-share-note">' + (I18n.t("button.publish") || "").toString().encodeHTML() + '</a> --> </div> </div></div><div class="publish-loading writer-splash" style="display:none"> <img src="' + Maleskine.CommonImages.loader("writer") + '" %></div>'
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/modals/share_weibo_modal"] = function() {
        var e = '<div id="share-weibo-modal" tabindex="-1" aria-hidden="true" class="share-longweibo modal hide fade fullscreen"> <div class="modal-header"> <b>' + (I18n.t("note.dropdown.share_to_sns.weibo") || "").toString().encodeHTML() + '</b> </div> <div class="modal-body"> <div class="pic-processing"> <img src="' + Maleskine.CommonImages.loader("tiny") + '" class="loader-tiny"><br> ' + (I18n.t("note.shareToWeibo.processing") || "").toString().encodeHTML() + ' </div> <div class="pic-done" style="display:none"> <img class="imagebubble-image"> </div> <div class="use-image-wrapper" style="display:none"> <label><input class="use-image" type="checkbox" />' + (I18n.t("note.shareToWeibo.done") || "").toString().encodeHTML() + '</label> </div> <p class="pic-Production">' + (I18n.t("note.shareToWeibo.processingNotice") || "").toString().encodeHTML() + '</p> </div> <div class="modal-footer"> <button class="btn btn-info"> <span>' + (I18n.t("note.shareToWeibo.share") || "").toString().encodeHTML() + '</span> </button> <a href="javascript:void(0)" class="btn btn-link" data-action="close-weibo-share">' + (I18n.t("button.close") || "").toString().encodeHTML() + "</a> </div></div>";
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/modals/view_mode_modal"] = function() {
        var e = '<div id="view-mode-modal" tabindex="-1" class="modal hide read-modal" aria-hidden="false"> <div class="btn-group change-background" data-toggle="buttons-radio"> <a class="btn btn-daytime ' + ("day" == Writer.currentUser.read_mode ? "active" : "").toString().encodeHTML() + '" href="javascript:void(null)" data-action="set-day"  rel="nofollow"> <i class="fa fa-sun-o"></i> </a> <a class="btn btn-nighttime ' + ("night" == Writer.currentUser.read_mode ? "active" : "").toString().encodeHTML() + '" href="javascript:void(null)" data-action="set-night" rel="nofollow"> <i class="fa fa-moon-o"></i> </a> </div> <div class="btn-group change-font" data-toggle="buttons-radio"> <a class="btn font ' + ("font1" == Writer.currentUser.default_font ? "active" : "").toString().encodeHTML() + '" href="javascript:void(null)" data-action="set-font1"  rel="nofollow">\u5b8b\u4f53</a> <a class="btn font hei ' + ("font2" == Writer.currentUser.default_font ? "active" : "").toString().encodeHTML() + '" href="javascript:void(null)" data-action="set-font2" rel="nofollow">\u9ed1\u4f53</a> </div></div>';
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/navbar/navbar"] = function() {
        var e = '<div class="writer-nav-header"></div><div class="navbar navbar-jianshu shrink"> <div class="dropdown"> <a target="_blank" class="dropdown-toggle logo" id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="javascript:void(0)"> \u7b80 </a> <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel"> <li class=""> <a target="_blank" href="' + (Routes.root_path() || "").toString().encodeHTML() + '"><i class="fa fa-home"></i> ' + (I18n.t("navbar.homepage") || "").toString().encodeHTML() + '</a> </li> <li> <a target="_blank" href="' + (Routes.collections_path() || "").toString().encodeHTML() + '"> <i class="fa fa-th"></i> ' + (I18n.t("navbar.collections") || "").toString().encodeHTML() + ' </a> </li> <li> <a target="_blank" href="' + (Routes.user_timeline_path() || "").toString().encodeHTML() + '"> <i class="fa fa-users"></i> ' + (I18n.t("navbar.timeline") || "").toString().encodeHTML() + ' </a> </li> </ul> </div></div><div class="navbar navbar-jianshu expanded"> <div class="dropdown"> <a target="_blank" href="' + (Routes.root_path() || "").toString().encodeHTML() + '" class="logo" data-container="body" data-original-title="\u4e2a\u4eba\u4e3b\u9875" role="button"> <b>\u7b80</b><i class="fa fa-home"></i> <span class="title">' + (I18n.t("navbar.homepage") || "").toString().encodeHTML() + '</span> </a> <a target="_blank" href="' + (Routes.collections_path() || "").toString().encodeHTML() + '" data-container="body" data-original-title="' + (I18n.t("navbar.collections") || "").toString().encodeHTML() + '" data-placement="right" data-toggle="tooltip"> <i class="fa fa-th"></i><span class="title">' + (I18n.t("navbar.collections") || "").toString().encodeHTML() + '</span> </a> <a target="_blank" href="' + (Routes.user_timeline_path() || "").toString().encodeHTML() + '" data-container="body" data-original-title="' + (I18n.t("navbar.timeline") || "").toString().encodeHTML() + '" data-placement="right" data-toggle="tooltip"> <i class="fa fa-users"></i><span class="title">' + (I18n.t("navbar.timeline") || "").toString().encodeHTML() + '</span> </a> <a class="active" href="javascript:void(null)" data-container="body" data-original-title="' + (I18n.t("navbar.writer") || "").toString().encodeHTML() + '" data-placement="right" data-toggle="tooltip"> <i class="fa fa-pencil"></i><span class="title">' + (I18n.t("navbar.writer") || "").toString().encodeHTML() + '</span> </a> </div> <div class="nav-user"> <a target="_blank" href="' + (Routes.user_path(Writer.currentUser.slug) || "").toString().encodeHTML() + '" data-container="body" data-original-title="' + (I18n.t("navbar.user_homepage") || "").toString().encodeHTML() + '" data-placement="right" data-toggle="tooltip"> <i class="fa fa-user"></i><span class="title">' + (I18n.t("navbar.user_homepage") || "").toString().encodeHTML() + '</span> </a> <a target="_blank" href="' + (Routes.bookmarks_path() || "").toString().encodeHTML() + '" data-container="body" data-original-title="' + (I18n.t("navbar.bookmarks") || "").toString().encodeHTML() + '" data-placement="right" data-toggle="tooltip"> <i class="fa fa-bookmark"></i><span class="title">' + (I18n.t("navbar.bookmarks") || "").toString().encodeHTML() + '</span> </a> <a target="_blank" href="' + (Routes.notifications_path() || "").toString().encodeHTML() + '" data-container="body" data-original-title="' + (I18n.t("navbar.notifications") || "").toString().encodeHTML() + '" data-placement="right" data-toggle="tooltip"> <i class="fa fa-bell" id="notify-icon"></i><span class="title">' + (I18n.t("navbar.notifications") || "").toString().encodeHTML() + '</span> </a> <a target="_blank" href="' + (Routes.chats_path() || "").toString().encodeHTML() + '" data-container="body" data-original-title="' + (I18n.t("navbar.messages") || "").toString().encodeHTML() + '" data-placement="right" data-toggle="tooltip"> <i class="fa fa-envelope" id="chat-message-icon"></i><span class="title">' + (I18n.t("navbar.messages") || "").toString().encodeHTML() + '</span> </a> <a href="#view-mode-modal" data-toggle="modal"> <i class="fa fa-font"></i><span class="title">' + (I18n.t("navbar.view_mode") || "").toString().encodeHTML() + '</span> </a> <a target="_blank" href="' + (Routes.settings_path() || "").toString().encodeHTML() + '" data-container="body" data-original-title="' + (I18n.t("navbar.settings") || "").toString().encodeHTML() + '" data-placement="right" data-toggle="tooltip"> <i class="fa fa-cogs"></i><span class="title">' + (I18n.t("navbar.settings") || "").toString().encodeHTML() + '</span> </a> <a target="_blank" href="' + (Routes.destroy_user_session_path() || "").toString().encodeHTML() + '" data-container="body" data-method="delete" data-original-title="' + (I18n.t("navbar.sign_out") || "").toString().encodeHTML() + '" data-placement="right" data-toggle="tooltip" rel="nofollow"> <i class="fa fa-sign-out"></i><span class="title">' + (I18n.t("navbar.sign_out") || "").toString().encodeHTML() + "</span> </a> </div></div>";
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/note_logs/list"] = function(e) {
        var t = '<div class="history-title"><a href="javascript:void(null)" class="filter-btn pull-right" data-action="toggle-filter"> ' + (I18n.t("note_logs.filter") || "").toString().encodeHTML() + ' <i class="fa fa-angle-double-down"></i> </a><i class="fa fa-clock-o"></i> ' + (I18n.t("note_logs.list_title", {
                count: Writer.NoteLog.all().length
            }) || "").toString().encodeHTML() + ' <a href="http://www.jianshu.com/p/e0655753c84e" target="_blank"><i class="fa fa-question-circle"></i></a><div class="filter-factor"> ';
        for (var n in I18n.t("note_logs.types")) t += '<label class="checkbox"><input type="checkbox" checked="true" data-action="filter" data-note-log-type="' + (n || "").toString().encodeHTML() + '">' + (I18n.t("note_logs.types." + n) || "").toString().encodeHTML() + "</label> ";
        for (var i in I18n.t("note_logs.apps")) t += '<label class="checkbox"><input type="checkbox" checked="true" data-action="filter" data-note-log-app="' + (i || "").toString().encodeHTML() + '">' + (I18n.t("note_logs.apps." + i) || "").toString().encodeHTML() + "</label>";
        t += '</div></div><ul class="unstyled"> ';
        var r = e.note_logs;
        if (r) for (var o, a = -1, s = r.length - 1; s > a;) o = r[a += 1], t += ' <li data-note-log-app="' + (o.app || "").toString().encodeHTML() + '" data-note-log-type="' + (o.note_log_type || "").toString().encodeHTML() + '" data-note-log-id="' + (o.id || "").toString().encodeHTML() + '" ', e.current_note_log.id === o.id && (t += ' class="active" '), t += ' > <span title="' + (o.updated_at || "").toString().encodeHTML() + '" data-formatted-created-at="' + (o.formatted_updated_at || "").toString().encodeHTML() + '"></span> ' + (I18n.t("note_logs.types." + o.note_log_type) || "").toString().encodeHTML() + " </li> ";
        return t += "</ul>"
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/note_logs/no_logs"] = function() {
        var e = '<div class="no-notes"><span>\u672c\u6587\u73b0\u5728\u6ca1\u6709\u5386\u53f2\u7248\u672c</span></div>';
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/note_logs/top"] = function(e) {
        var t = '<div class="revision-top history-top clearfix"> <h3>' + (e.note_log.title || "").toString().encodeHTML() + '</h3> <button type="button" class="close" aria-hidden="true">\xd7</button> ';
        return null != e.note_log && (t += ' <a href="javascript:void(null)" class="btn btn-large btn-success" data-action="restore">' + (I18n.t("note_logs.apply_this_log") || "").toString().encodeHTML() + "</a> "), t += "</div>"
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/note_logs/view"] = function(e) {
        var t = '<div class="view-area"> ';
        return null != e.note_log ? (t += " ", t += e.note_log.note().isMarkdown() ? " <pre> " + (e.note_log.content || "").toString().encodeHTML() + " </pre> " : " " + e.note_log.content + " ", t += " ") : t += ' <div class="no-notes"><span>\u7b80&nbsp\u4e66</span></div> ', t += "</div>"
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/notebooks/entry"] = function(e) {
        var t = '<li class="one-notebook item" data-model="notebook" data-cid="' + (e.notebook.cid || "").toString().encodeHTML() + '"> <a href=\'javascript:void(0)\' data-type="active" class="notebook-name"><i class=\'icon icon-notebook\'></i><span>' + (e.notebook.name || "").toString().encodeHTML() + '</span></a> <a href=\'javascript:void(0)\' data-type=\'edit\' class=\'edit-notebook dropdown-toggle\' data-toggle="dropdown"> <i class=\'fa fa-gear\'></i> </a> <ul class="dropdown-menu arrow-top"> <li> <a href="javascript:void(0)" data-action="rename-notebook" data-toggle="modal"> <i class="fa fa-pencil-square-o"></i> ' + (I18n.t("rename_notebook") || "").toString().encodeHTML() + ' </a> </li> <li class="divider"></li> <li> <a href="javascript:void(0)" data-action="delete-notebook"> <i class="fa fa-trash-o"></i> ' + (I18n.t("delete_notebook") || "").toString().encodeHTML() + " </a> </li></ul></li>";
        return t
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/notebooks/list"] = function(e) {
        var t = "<div class=\"new-notebook\"> <a href='javascript:void(0)' class='create-notebook win-text'> +" + (I18n.t("new_notebook") || "").toString().encodeHTML() + " <img src='" + Maleskine.CommonImages.loader("tiny") + '\' class="hide loader-tiny create-notebook-loader"> </a> <div class="new-notebook-form hide"> <form class="create-notebook-form"> <input placeholder="' + (I18n.t("notebook_name_placeholder") || "").toString().encodeHTML() + '" type="text" name="name" class="input-medium notebook-input" /> <a href="javascript:void(0)" class="btn cancel" data-action="cancel-create-notebook"> ' + (I18n.t("button.cancel") || "").toString().encodeHTML() + ' </a><input class="btn btn-mainRed submit" name="commit" type="submit" value="' + (I18n.t("button.submit") || "").toString().encodeHTML() + '" data-action="submit"> </form> </div></div><ul class="nav nav-list notebooks"> ',
            n = e.notebooks;
        if (n) for (var i, r = -1, o = n.length - 1; o > r;) i = n[r += 1], t += " " + JST["writer/views/notebooks/entry"]({
                notebook: i
            }) + " ";
        return t += '</ul><div class="commercial"> ', Maleskine.BrowserDetector.isIE() ? (t += " ", t += Maleskine.BrowserDetector.isIE8() || Maleskine.BrowserDetector.isIE9() ? " <p>" + (I18n.t("suggest_upgrade") || "").toString().encodeHTML() + "</p> " : " <p>" + (I18n.t("suggest_chrome") || "").toString().encodeHTML() + "</p> ", t += " ") : (t += " ", t += /Chrome\/(.*?) /.test(window.navigator.appVersion) && "33.0.1750.152" == window.navigator.appVersion.match(/Chrome\/(.*?) /)[1] ? " <p>" + (I18n.t("chrome_bug") || "").toString().encodeHTML() + "</p> " : " <p>" + (I18n.t("commerical_placeholder") || "").toString().encodeHTML() + "</p> ", t += " "), t += ' <a class="btn" href="javascript:void(null)" data-action="recycle-mode">\u56de\u6536\u7ad9</a></div>'
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/notes/dropdown"] = function(e) {
        var t = '<ul class="dropdown-menu arrow-top"> ' + JST["writer/views/notes/dropdowns/dropdown_items"]({
                note: e.note
            }) + "</ul>";
        return t
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/notes/dropdowns/common_actions"] = function() {
        var e = '<li> <a href="javascript:void(0)" class="" data-action="history"> <i class="fa fa-clock-o"></i> \u5386\u53f2\u8bb0\u5f55 </a></li><li class="divider"></li><li> <a href="javascript:void(0)" data-action="delete-note"> <i class="fa fa-trash-o"></i> \u5220\u9664\u6587\u7ae0 </a></li>';
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/notes/dropdowns/dropdown_items"] = function(e) {
        var t = "";
        return t += e.note.shared ? " " + JST["writer/views/notes/dropdowns/public"]({
            note: e.note
        }) : " " + JST["writer/views/notes/dropdowns/private"]({
            note: e.note
        }), t += '<li> <a href="javascript:void(0)" data-action="trigger-history-mode"> <i class="fa fa-clock-o"></i> ' + (I18n.t("note.dropdown.revision_history") || "").toString().encodeHTML() + ' </a></li><li class="divider"></li><li> <a href="javascript:void(0)" data-action="delete-note"> <i class="fa fa-trash-o"></i> ' + (I18n.t("note.dropdown.delete_note") || "").toString().encodeHTML() + " </a></li>"
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/notes/dropdowns/private"] = function() {
        var e = ' <li> <a href="javascript:void(0)" class="share-link" data-action="open-share-note"> <i class="fa fa-share"></i> ' + (I18n.t("note.dropdown.share_directly") || "").toString().encodeHTML() + ' </a> </li> <li class="divider"></li> <li> <a href="javascript:void(0)" data-action="open-move-note"> <i class="fa fa-folder-open"></i> ' + (I18n.t("note.dropdown.move_note") || "").toString().encodeHTML() + " </a> </li>";
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/notes/dropdowns/public"] = function(e) {
        var t = '<li><b><i class="fa fa-check"></i>' + (I18n.t("note.dropdown.shared") || "").toString().encodeHTML() + '</b></li><li class="dropdown-submenu pull-left"> <a tabindex="-1" href="#"><i class="fa fa-share"></i>' + (I18n.t("note.dropdown.share_to") || "").toString().encodeHTML() + '</a> <ul class="dropdown-menu share-to-social-network"> <li> <a href="javascript:void(null)" data-action="share-to-weibo"> <img src="' + Maleskine.CommonImages.social_icon("weibo", 32, 32) + '"> </a> </li> ',
            n = ["tweibo", "qzone", "douban", "twitter", "facebook", "google_plus"];
        if (n) for (var i, r = -1, o = n.length - 1; o > r;) i = n[r += 1], t += " <li>" + JST["writer/views/notes/dropdowns/social_entry"]({
                note: e.note,
                sns: i
            }) + "</li> ";
        return t += ' </ul></li><li class="divider"></li><li> <a href="javascript:void(0)" data-action="go-private"> <i class="fa fa-lock"></i> ' + (I18n.t("note.dropdown.stop_sharing") || "").toString().encodeHTML() + ' </a></li><li><a href="' + (e.note.fullUrl() || "").toString().encodeHTML() + '" target="_blank"><i class="fa fa-external-link"></i> ' + (I18n.t("note.dropdown.open_in_new_window") || "").toString().encodeHTML() + '</a><li class="divider"></li><li><a href="javascript:void(0)" data-action="open-move-note"><i class="fa fa-folder-open"></i> ' + (I18n.t("note.dropdown.move_note") || "").toString().encodeHTML() + "</a></li>"
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/notes/dropdowns/social_entry"] = function(e) {
        var t = '<a href="' + (e.note.linkShareTo(e.sns) || "").toString().encodeHTML() + '" title="' + (I18n.t("note.dropdown.share_to_sns." + e.sns) || "").toString().encodeHTML() + "\"> <img src='" + Maleskine.CommonImages.social_icon(e.sns, 32, 32) + "'></a>";
        return t
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/notes/entry"] = function(e) {
        var t = '<li class="one-note" data-model="note" data-cid="' + (e.note.cid || "").toString().encodeHTML() + '"> <i class="icon icon-note note-icon ' + (e.note.shared ? "shared" : "stop-share").toString().encodeHTML() + '"></i> <p class="abbreviate">' + (e.note.abbr() || "").toString().encodeHTML() + '</p> <p class="wordage win-text">' + "".toString().encodeHTML() + "</p> <a href='javascript:void(0)' data-type='edit' class='note-link title'>" + (e.note.title || "").toString().encodeHTML() + "</a> <a href='javascript:void(0)' data-type='share' class='share-note dropdown-toggle' data-toggle=\"dropdown\"><i class='fa fa-gear'></i></a> " + JST["writer/views/notes/dropdown"]({
                note: e.note
            }) + " <!--a href='javascript:void(null)' class='delete-note'><i class=\"fa fa-trash-o\"></i></a--></li>";
        return t
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/notes/list"] = function(e) {
        var t = "<div id=\"notes-list\"> <div id='new-note'> <a href='javascript:void(0)' data-action='create-note' class='new-note-link'> <i class=\"icon fa fa-pencil\"></i> <span class=\"win-text\">+" + (I18n.t("new_note") || "").toString().encodeHTML() + " <img src='" + Maleskine.CommonImages.loader("tiny") + '\' class="hide cnlt loader-tiny"></span> </a> </div> <ul class="nav nav-list notes"> ',
            n = e.notes;
        if (n) for (var i, r = -1, o = n.length - 1; o > r;) i = n[r += 1], t += " " + JST["writer/views/notes/entry"]({
                note: i
            }) + " ";
        return t += " </ul> ", e.notes.length > 0 && (t += ' <div class="one-note new-note-bottom"> <a href="javascript:void(0)" data-action="create-note">+' + (I18n.t("new_note_bottom") || "").toString().encodeHTML() + " <img src='" + Maleskine.CommonImages.loader("tiny") + '\' class="hide cnlb loader-tiny"></a> </div> '), t += '</div><div id="move-note-modal" tabindex="-1" aria-hidden="true" class="move-note-modal modal hide fade fullscreen"> <div class="modal-header"> <b>' + (I18n.t("note.moving.title") || "").toString().encodeHTML() + '</b> </div> <div class="modal-body"> <ul class="notebooks-select"> </ul> </div> <div class="modal-footer"> <button class="btn cancel-button">' + (I18n.t("button.cancel") || "").toString().encodeHTML() + '</button> <input data-action="submit-move-note" class="btn btn-info" name="commit" type="submit" value="' + (I18n.t("button.submit") || "").toString().encodeHTML() + '"> </div></div>'
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/notes/loading"] = function() {
        var e = '<ul class="loading newnote"> <li class="loading-a"></li> <li class="loading-b"></li></ul>';
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/recycle/content"] = function(e) {
        var t = '<div class="recycle-title"><h3>' + (e.note.title || "").toString().encodeHTML() + '</h3> <button type="button" class="close" aria-hidden="true">\xd7</button></div><div class="recycle-content">' + e.note.content + '</div><div class="recycle-toolbar"><div class="recycle-footer text-center"><button data-action="put-back" class="btn btn-success" type="button">' + (I18n.t("recycle.content.put_back") || "").toString().encodeHTML() + '</button><button data-action="delete-forever" class="btn btn-mainRed" type="button">' + (I18n.t("recycle.content.delete_forever") || "").toString().encodeHTML() + "</button></div></div>";
        return t
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/recycle/list"] = function(e) {
        var t = '<div class="affix"> <h2 class="recycle-title"><i class="fa fa-fw fa-trash"></i>' + (I18n.t("recycle.list.title", {
                    count: e.notes.length
                }) || "").toString().encodeHTML() + '</h2> <ul class="unstyled"> ',
            n = e.notes;
        if (n) for (var i, r = -1, o = n.length - 1; o > r;) i = n[r += 1], t += " ", t += "undefined" != e.currentNote && null != e.currentNote && i.id == e.currentNote.id ? ' <li data-note-id="' + (i.id || "").toString().encodeHTML() + '" class="active"> ' : ' <li data-note-id="' + (i.id || "").toString().encodeHTML() + '"> ', t += ' <h5><i class="fa fa-fw fa-file-text"></i>' + (i.title || "").toString().encodeHTML() + '</h5> <span data-destroy-days-left="' + (i.destroyDaysLeft() || "").toString().encodeHTML() + '" data-destroy-date="' + (i.destroyDate().toLocaleDateString() || "").toString().encodeHTML() + '">' + (I18n.t("recycle.entry.days_left_before_destroy", {
                days: i.destroyDaysLeft()
            }) || "").toString().encodeHTML() + "</span> </li> ";
        return t += ' </ul> <a class="clear-trash" style="display:none" href="javascript:void(null)">\u6e05\u7a7a\u56de\u6536\u7ad9</a></div>'
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/recycle/no_content"] = function() {
        var e = '<div class="recycle-title"> <h3></h3> <button type="button" class="close" aria-hidden="true">\xd7</button></div><div class="recycle-content"></div>';
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/templates/browser_not_supported"] = function() {
        var e = '<div class="browsertip" tabindex="-1" aria-hidden="true"> <b></b> <h3>' + (I18n.t("browser_tip.title") || "").toString().encodeHTML() + '</h3> <p class="meta">' + (I18n.t("browser_tip.intro") || "").toString().encodeHTML() + '</p> <ul class="unstyled"> <li> <span class="item-1"></span> <p>IE 11</p> <a href=\'' + ("http://windows.microsoft.com/" + I18n.locale + "/internet-explorer/download-ie" || "").toString().encodeHTML() + "'>" + (I18n.t("browser_tip.download") || "").toString().encodeHTML() + '</a> </li> <li> <span class="item-2"></span> <p>Chrome</p> <a href="http://www.google.com/chrome/">' + (I18n.t("browser_tip.download") || "").toString().encodeHTML() + '</a> </li> <li> <span class="item-3"></span> <p>Firefox</p> <a href="https://www.mozilla.org/firefox/">' + (I18n.t("browser_tip.download") || "").toString().encodeHTML() + '</a> </li> <li> <span class="item-4"></span> <p>Safari</p> <a href="http://www.apple.com/safari/">' + (I18n.t("browser_tip.download") || "").toString().encodeHTML() + "</a> </li> </ul></div>";
        return e
    }
}.call(this), function() {
    this.JST || (this.JST = {}), this.JST["writer/views/templates/collection_cards"] = function(e) {
        var t = "";
        for (var n in e.collections) if (t += " ", e.collections[n].length > 0) {
            t += " ", "similar" == n ? t += " <p>" + (I18n.t("note.contribute.similar_collections") || "").toString().encodeHTML() + '</p> <ul class="unstyled clearfix"> ' : "editable" == n ? t += " <p>" + (I18n.t("note.contribute.editable_collections") || "").toString().encodeHTML() + '</p> <ul class="unstyled clearfix"> ' : "search_results" == n && (t += ' <ul class="unstyled clearfix search-collections"> '), t += " ";
            var i = e.collections[n];
            if (i) for (var r, o = -1, a = i.length - 1; a > o;) r = i[o += 1], t += ' <li data-collection-id="' + (r.id || "").toString().encodeHTML() + '"> <a href="' + (r.full_url || "").toString().encodeHTML() + '" target=\'_blank\'> <div class="avatar"> <img alt="' + (r.image_file_name || "").toString().encodeHTML() + '" src="' + (r.image_source || "").toString().encodeHTML() + '" thumbnail="180x180"> </div> <h4>' + (r.title || "").toString().encodeHTML() + "</h4> </a> <p>" + (I18n.t("note.contribute.collection_info", {
                    notes_count: r.notes_count,
                    subscribers_count: r.subscribers_count
                }) || "").toString().encodeHTML() + "</p> ", r.already_in_collection ? t += ' <a class="btn delete" href="' + (Routes.writer_submissions_path({
                    collection_id: r.id,
                    note_id: e.current_note
                }) || "").toString().encodeHTML() + '" data-method="delete" data-remote="true" rel="nofollow"> ' + (I18n.t("note.contribute.remove_from_collection") || "").toString().encodeHTML() + " </a> " : (t += " ", "not_submitted" == r.submission_state ? (t += ' <a class="btn btn-success add" href="' + (Routes.writer_submissions_path({
                    collection_id: r.id,
                    note_id: e.current_note
                }) || "").toString().encodeHTML() + '" data-method="post" data-remote="true" rel="nofollow"> ', t += r.current_user_editable ? " " + (I18n.t("note.contribute.add_to_collection") || "").toString().encodeHTML() + " " : " " + (I18n.t("note.contribute.contribute_to_collection") || "").toString().encodeHTML() + " ", t += " </a> ") : "pending" == r.submission_state && (t += ' <a class="btn disabled" href="javascript:void(null)"> ' + (I18n.t("note.contribute.pending") || "").toString().encodeHTML() + " </a> "), t += " "), t += " </li> ";
            t += " </ul> "
        }
        return t
    }
}.call(this), $(document).ready(function() {
    var e;
    e = $("#flash"), e.length > 0 && $.each(e.children(), function(e, t) {
        var n, i, r;
        return r = $(t).data("flash-type"), i = "notice" === r ? "information" : "error", n = "notice" === r ? 2500 : 3e3, $.each($(t).children(), function(e, t) {
            return noty({
                text: $(t).text(),
                layout: "topCenter",
                type: i,
                timeout: n,
                theme: "maleskineTheme"
            })
        })
    })
}), $("a[data-toggle=tooltip]").tooltip(), jQuery(function() {
    var e = window.location.hash;
    ("#" != e[0] || "/" != e[1]) && (window.location = window.location.origin + window.location.pathname + "#/"), new Writer({
        el: $("#writer")
    })
}), $("body").on("click", 'a[href="javascript:void(0)"]', function(e) {
    e.preventDefault()
}), $("body").on("click", 'a[href="javascript:void(null);"]', function(e) {
    e.preventDefault()
});