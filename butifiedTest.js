function ListFrame_onShow() {
    var t;
    this.parentApp.options && (t = this.parentApp.options.getSettings()) && (this.setTitle(t.title), this.setDescription(t.description))
}

CPM = window.CPM || {}, CPM.Graph3d && CPM.Graph3d.makeApp || ! function() {
    CPM.Graph3d = CPM.Graph3d || {}, CPM.Graph3d.UNIT_WIDTH = CPM.Graph3d.UNIT_WIDTH || 41, CPM.Graph3d.makeApp = function(t) {
        function e() {
            n.tray.currentFrame !== n.options ? (n.tray.setFrame(n.options), n.tray.replaceOption(n.frameOption, "Back", e)) : (n.tray.setFrame(n.plotter), n.tray.replaceOption(n.frameOption, "Options", e))
        }
        var n = this;
        n.tray = CPM.Base.createTray(n), n.tray.setTitle("CPM 3D Plotter"), n.tray.attachTo(n), n.plotter = CPM.Graph3d.createListFrame(n), n.tray.addFrame(n.plotter), n.options = CPM.Graph3d.createOptionFrame(n), n.tray.addFrame(n.options), n.viewport = CPM.Graph3d.createViewport(n), n.world = n.viewport.origin3d, CPM.Graph3d.addAxes(n.world), n.appendChild(n.viewport), n.colorPicker = CPM.Graph3d.createColorPicker(n), n.appendChild(n.colorPicker), n.helpDialog = CPM.Graph3d.createHelpDialog(n), n.appendChild(n.helpDialog), n.frameOption = n.tray.addOption("Options", e), n.tray.addOption("Clear All", function() {
            n.plotter.clear()
        }), n.tray.addOption("Save", function() {
            CPM.Graph3d.saveState(n)
        }), t.data ? CPM.Similarity.loadState(n, t.data) : CPM.Base.loadFromQuery(CPM.Graph3d.loadState, n, "graph3d")
    }, 
    CPM.Graph3d.App = CPM.Graph3d.makeApp, CPM.Graph3d.saveState = function(t) {
        var e, n = new CPM.Base.Encoder;
        t.options.save(n), t.plotter.save(n), e = CPM.Base.createSavePopup(t, "graph3ddata=" + n, "graph3ddata="), t.appendChild(e), e.show()
    }, CPM.Graph3d.loadState = function(t, e) {
        var n = new CPM.Base.Decoder(e);
        t.options.load(n), t.plotter.load(n)
    }
}(), CPM = window.CPM || {}, CPM.makeApp || ! function() {
    function t() {
        var e;
        if (!t.calledBefore) {
            var e = CPM.Style.getStylesheet("main");
            e.addRule(".CPM-app", {
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                background: e.makeGradient("to bottom", "#fff 0%", "#eee 100%")
            }), t.calledBefore = !0
        }
    }

    function e() {
        var e;
        for (t(), e = 0; e < i.length; ++e) n(i[e])
    }

    function n(t) {
        var e = document.createElement("div");
        e.getOffset = function() {
            for (var t = {
                    x: this.offsetLeft,
                    y: this.offsetTop
                }, e = this; e = e.offsetParent;) t.x += e.clientLeft + e.offsetLeft - e.scrollLeft, t.y += e.clientTop + e.offsetTop - e.scrollTop;
            return t
        }, e.setAttribute("class", "CPM-app"), e.GUID = CPM.GUID(), t.parent.appendChild(e), t.constructor.call(e, t)
    }
    var i = [];
    ! function() {
        var t = {};
        CPM.GUID = function() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            for (var n;;)
                if (n = e() + e() + e() + e() + e() + e(), null == t[n]) return t[n] = !0, n
        }
    }(), CPM.makeApp = function(t, e) {
        var n = document.getElementsByTagName("script"),
            o = n[n.length - 1].parentNode;
        e = e || {}, e.constructor = t, e.parent = e.parent || o, i.push(e)
    }, window.addEventListener("load", e, !1)
}(), CPM = window.CPM || {}, CPM.Style && CPM.Style.enable || ! function() {
    function t(t, e) {
        for (var n = -1;;) {
            if (-1 === (n = t.indexOf(e, n + 1))) break;
            if (!(0 !== n && " " !== t[n - 1] || n + e.length !== t.length && " " !== t[n + e.length])) break
        }
        return n
    }

    function e(e, n) {
        for (var i = e.getAttribute("class") || "", o = "", a = 0, r = -1; a < n.length;) - 1 === (r = n.indexOf(" ", r + 1)) ? (o = n.substr(a), a = n.length) : r > a && (o = n.substr(a, r - a), a = r + 1), -1 === t(i, o) && (i += (i.length > 0 ? " " : "") + o);
        e.setAttribute("class", i)
    }

    function n(e, n) {
        for (var i, o = e.getAttribute("class") || "", a = "", r = 0, s = -1; r < n.length;)
            for (-1 === (s = n.indexOf(" ", s + 1)) ? (a = n.substr(r), r = n.length) : s > r && (a = n.substr(r, s - r), r = s + 1); - 1 !== (i = t(o, a));) {
                for (o = o.slice(0, i - 1) + o.slice(i + a.length), i = o.length;
                    " " === o[i - 1];) --i;
                i !== o.length && (o = o.slice(0, i - o.length))
            }
        e.setAttribute("class", o)
    }

    function i(t) {
        return t.charAt(0).toUpperCase().concat(t.slice(1))
    }

    function o(t, e, n) {
        var i = t.cssRules.length;
        t.appendRule ? t.appendRule(e + " { }") : t.insertRule(e + " { }", i), this.style = t.cssRules[i].style, null != n && this.setStyle(n)
    }

    function a() {
        var t = document.createElement("style"),
            e = document.getElementsByTagName("head")[0];
        if (!e) throw new Error("Could not create Style element, create new Stylesheet failed.");
        e.appendChild(t), this.ruleList = document.styleSheets[document.styleSheets.length - 1]
    }
    CPM.Style = CPM.Style || {};
    var r, s, l;
    r = function() {
        function t(t) {
            var e, n, i, o, a;
            if (-1 !== t.indexOf("-")) return t.toLowerCase().split("-");
            for (e = [], i = 0, o = 1, a = t.length; a > o; ++o) n = t[o], n === n.toUpperCase() && n !== n.toLowerCase() && (e.push(t.slice(i, o).toLowerCase()), i = o);
            return e.push(t.slice(i, a).toLowerCase()), e
        }

        function e(e) {
            var n, o, a, d, p, c, u = document.getElementsByTagName("body")[0],
                h = [];
            if (!u) return !1;
            for (n = t(e), o = n[0], p = 1, c = n.length; c > p; ++p) o += n[p].charAt(0).toUpperCase().concat(n[p].slice(1));
            for (a = i(o), h[0] = o, p = 1, c = r.length; c > p; ++p) h[p] = r[p] + a;
            for (p = 0, c = h.length; c > p; ++p)
                if ("undefined" != typeof u.style[h[p]]) {
                    d = r[p];
                    break
                } return null != d ? (s[e] = h[p], l[e] = 0 === p ? n.join("-") : "-" + d + "-" + n.join("-")) : (s[e] = "none", l[e] = "none"), !0
        }

        function n(t) {
            var n, i, o, a, r = "";
            if ("" === t) return "";
            for (n = t.split(","), a = 0; a < n.length; a += 1) r.length > 0 && (r += ", "), n[a].trim(), i = n[a].split(" "), o = i.shift(), r += void 0 !== l[o] || e(o) ? l[o] + " " + i.join(" ") : o + " " + i.join(" ");
            return r
        }

        function o(t, i) {
            var o, a;
            if (!(arguments.length < 2))
                for (o in i) i.hasOwnProperty(o) && (a = "transition" === o ? n(i[o]) : i[o], void 0 !== s[o] || e(o) ? t[s[o]] = a : t[o] = a)
        }

        function a(t, n) {
            var i;
            switch (n) {
                case "CSS":
                    i = l;
                    break;
                case "JS":
                default:
                    i = s
            }
            return void 0 !== i[t] || e(t) ? i[t] : null
        }
        var r = ["", "webkit", "moz", "Moz", "o", "ms", "khtml"],
            s = {},
            l = {};
        return {
            set: o,
            get: a
        }
    }(), o.prototype.setStyle = function(t) {
        r.set(this.style, t)
    }, o.prototype.transform = function(t) {
        r.set(this.style, {
            transform: t
        })
    }, a.prototype.addRule = function(t, e) {
        return new o(this.ruleList, t, e)
    }, a.prototype.lockCursor = function(t) {
        null == this.wildcard && (this.wildcard = this.addRule("*")), this.wildcard.setStyle({
            userSelect: "none"
        }), this.wildcard.style.cssText += ";cursor: " + t + " !important"
    }, a.prototype.unlockCursor = function() {
        this.wildcard.setStyle({
            userSelect: "",
            cursor: ""
        })
    }, a.prototype.makeGradient = function() {
        function t(t) {
            return 1 === t.length ? "string" == typeof t[0] ? t[0] : Array.isArray(t[0]) ? t[0].join(", ") : "" : t.join(", ")
        }

        function e(t) {
            var e = t.split(" "),
                n = e[0],
                i = "",
                o = "",
                a = 1;
            if ("at" !== n)
                for (;
                    "at" !== e[a];) i.length > 0 && (i += " "), i += e[a], ++a;
            else n = "";
            for (++a; e[a];) o.length > 0 && (o += " "), o += e[a], ++a;
            if ("circle" !== n && "ellipse" !== n && (i = n + i, n = ""), -1 === i.indexOf(" ")) switch (i) {
                case "closest-corner":
                case "closest-side":
                case "farthest-corner":
                case "farthest-side":
                    break;
                default:
                    i += " " + i
            }
            return "center" === o && (o = ""), "" !== o && (o += ", "), "" !== n && (n += " "), o + n + i
        }

        function n(e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return "radial" === e ? "radial-gradient(" + n.join(", ") + ")" : "linear-gradient(" + e + ", " + t(n) + ")"
        }

        function i(n) {
            return function(i) {
                var o, a, r, s, l;
                if ("radial" === i) return r = e(arguments[1]), o = Array.prototype.slice.call(arguments, 2), n + "radial-gradient(" + r + ", " + t(o) + ")";
                if (o = Array.prototype.slice.call(arguments, 1), -1 !== i.indexOf("to")) {
                    for (a = i.split(" ").slice(1), s = 0, l = a.length; l > s; ++s) switch (a[s]) {
                        case "top":
                            a[s] = "bottom";
                            break;
                        case "bottom":
                            a[s] = "top";
                            break;
                        case "left":
                            a[s] = "right";
                            break;
                        case "right":
                            a[s] = "left"
                    }
                    a = a.join(" ")
                } else a = i;
                return n + "linear-gradient(" + a + ", " + t(o) + ")"
            }
        }

        function o() {
            var e, n, i = Array.prototype.slice.call(arguments, 1);
            return e = t(i), n = e.indexOf("#"), -1 === n && (n = e.indexOf("rgba(")), e.substring(n, e.indexOf(" ", n))
        }
        return function() {
            function t(t) {
                return l.style.background = e, a.prototype.makeGradient = t, t.apply(this, p)
            }
            var e, r, s, l = document.getElementsByTagName("body")[0],
                d = ["-webkit-", "-moz-", "-o-", "-ms-"],
                p = arguments;
            if (!l) return null;
            if (e = l.style.background, l.style.background = "", l.style.background = "linear-gradient(to bottom, #fff 0%, #000 100%)", "" != l.style.background) return t(n);
            for (r = 0, s = d.length; s > r; ++r)
                if (l.style.background = d[r] + "linear-gradient(top, #000 0%, #fff 100%)", "" != l.style.background) return t(i(d[r]));
            return t(o)
        }
    }(), a.prototype.addAnimation = function(t) {
        return new s(this, t)
    }, CPM.Style.getStylesheet = function() {
        var t = {};
        return function(e) {
            return void 0 !== t[e] ? t[e] : t[e] = new a
        }
    }(), s = function() {
        function t() {
            var e, o, l, d, p, c, u, h = document.createElement("div"),
                f = ["", "webkit", "moz", "o", "MS"],
                m = ["start", "iteration", "end"],
                b = [];
            if (c = r.get("animation-name", "CSS"), null == c) return n = "none", c;
            for (n = c.slice(0, c.indexOf("animation-name")) + "keyframes", "-khtml-keyframes" === n && (n = "-webkit-keyframes"), o = 0, d = f.length; d > o; ++o)
                for (l = 0, p = m.length; p > l; ++l) e = {}, e.type = m[l], e.name = f[o], e.name += 0 === o ? "animation" + m[l] : "Animation" + i(m[l]), b.push(e);
            for (o = 0, d = b.length; d > o; ++o) h.addEventListener(b[o].name, function(t) {
                return function e() {
                    s[t.type] || (s[t.type] = t.name), this.removeEventListener(t.name, e, !1)
                }
            }(b[o]), !1);
            return document.getElementsByTagName("body")[0].appendChild(h), u = new a("test").addAnimation("test"), u.addFrame(0, {
                color: "#000"
            }), u.addFrame(1, {
                color: "#fff"
            }), h.style[r.get("animation")] = "test 0.01s linear 0s 2", window.setTimeout(function() {
                h && (h.parentNode && h.parentNode.removeChild(h), h = void 0)
            }, 1e3), window.removeEventListener("load", t, !1), n
        }

        function e(e, i) {
            var o = e.ruleList;
            if ("none" === n) return null;
            if (null == n && !t()) return n = "none", null;
            var a = o.cssRules.length;
            o.insertRule ? o.insertRule("@" + n + " " + i + " { }", a) : o.appendRule("@" + n + " " + i + " { }"), this.name = i, this.ruleList = o.cssRules[a], this.frameRules = {}
        }
        var n, s = {};
        return window.addEventListener("load", t, !1), e.prototype.addFrame = function(t, e) {
            var n = new o(this.ruleList, 100 * t + "%", e);
            return this.frameRules[t] = n, n
        }, e.prototype.getFrame = function(t) {
            return this.frameRules[t]
        }, e.prototype.clear = function() {
            for (var t; this.ruleList.cssRules.length > 0;) this.ruleList.deleteRule(this.ruleList.cssRules[0].keyText);
            for (t in this.frameRules) this.frameRules.hasOwnProperty(t) && delete this.frameRules[t]
        }, CPM.Style.getAnimationEventName = function(t) {
            return s[t]
        }, e
    }(), l = function() {
        function t() {
            var e, n, i = document.createElement("div"),
                o = ["", "webkit", "moz", "o", "MS"],
                a = [];
            if (u = r.get("transition"), null == u) return u = "none", h = "", void 0;
            for (a[0] = "transitionend", e = 1, n = o.length; n > e; ++e) a[e] = o[e] + "TransitionEnd";
            for (e = 0, n = a.length; n > e; ++e) i.addEventListener(a[e], function(t) {
                return function e() {
                    h || (h = t), this.removeEventListener(t, e, !1), this.parentNode && this.parentNode.removeChild(this), i = void 0
                }
            }(a[e]), !1);
            document.getElementsByTagName("body")[0].appendChild(i), i.style.color = "#000", window.getComputedStyle(i).color, i.style[u] = "color 0.01s", i.style.color = "#fff", window.setTimeout(function() {
                i && (i.parentNode && i.parentNode.removeChild(i), h = "", i = void 0)
            }, 1e3), window.removeEventListener("load", t, !1)
        }

        function e(t, e, n) {
            var i, o = "",
                a = n && n.type ? " " + n.type : "",
                s = n && n.delay ? " " + n.delay : "",
                l = n && n.length || m;
            for (i in e) e.hasOwnProperty(i) && (o.length > 0 && (o += ", "), o += r.get(i, "CSS") + " " + l + a + s);
            t.style[u] = o
        }

        function n(t, e) {
            var n;
            for (n in e)
                if (e.hasOwnProperty(n)) return window.getComputedStyle(t)[r.get(n)], void 0
        }

        function i(t) {
            var e = t && t.delay ? parseFloat(t.delay) : 0,
                n = t && t.length ? parseFloat(t.length) : f;
            return Math.ceil(1e3 * (e + n))
        }

        function o(t) {
            var e;
            delete t.transitionTimeout, r.set(t.style, t.transitionEndState), delete t.transitionEndState, t.style.pointerEvents = t.cachedPointerEvents, delete t.cachedPointerEvents, "function" == typeof t.transitionCallback && (e = t.transitionCallback, delete t.transitionCallback, e.call(t))
        }

        function a(t, e, n, a, s) {
            var l = i(s);
            t.transitionTimeout && (window.clearTimeout(t.transitionTimeout), o(t)), r.set(t.style, e), n && (t.transitionCallback = a, t.transitionEndState = n, t.cachedPointerEvents = t.style.pointerEvents, s && s.allowInteraction || (t.style.pointerEvents = "none"), t.transitionTimeout = window.setTimeout(function() {
                o(t)
            }, l))
        }

        function s(t) {
            var e;
            delete t.transitionTimeout, r.set(t.style, t.transitionEndState), delete t.transitionEndState, t.style[u] = t.cachedTransition, delete t.cachedTransition, t.style.pointerEvents = t.cachedPointerEvents, delete t.cachedPointerEvents, "function" == typeof t.transitionCallback && (e = t.transitionCallback, delete t.transitionCallback, e.call(t))
        }

        function l(t, o, a, l, d) {
            var p;
            t.transitionEventActive && s(t), t.cachedTransition = t.style[u], t.style[u] = "none", r.set(t.style, o), a ? (t.transitionCallback = l, t.cachedPointerEvents = t.style.pointerEvents, d && d.allowInteraction || (t.style.pointerEvents = "none"), n(t, o), e(t, a, d), r.set(t.style, a), p = i(d), t.transitionTimeout = window.setTimeout(function() {
                s(t)
            }, p)) : (t.style[u] = t.cachedTransition, delete t.cachedTransition)
        }

        function d() {
            this.transitionEventActive && p(this)
        }

        function p(t) {
            var e;
            delete t.transitionEventActive, t.removeEventListener(h, d, !1), t.style.pointerEvents = t.cachedPointerEvents, t.style[u] = t.cachedTransition, delete t.cachedPointerEvents, delete t.cachedTransition, "function" == typeof t.transitionCallback && (e = t.transitionCallback, delete t.transitionCallback, e.call(t))
        }

        function c(t, i, o, a, s) {
            t.transitionEventActive && p(t), t.cachedTransition = t.style[u], t.style[u] = "none", r.set(t.style, i), o ? (t.transitionCallback = a, t.transitionEventActive = !0, t.cachedPointerEvents = t.style.pointerEvents, s && s.allowInteraction || (t.style.pointerEvents = "none"), t.addEventListener(h, d, !1), n(t, i), e(t, o, s), r.set(t.style, o)) : (t.style[u] = t.cachedTransition, delete t.cachedTransition)
        }
        var u, h, f = .2,
            m = f + "s",
            b = {};
        return window.addEventListener("load", t, !1), b.set = function(e, n, i, o, s) {
            return void 0 === u && t(), void 0 === h ? (r.set(e.style, n), r.set(e.style, i), "function" == typeof o && o.call(e), !1) : (b.set = "none" !== u && "none" !== h ? c : "none" !== u ? l : a, b.set(e, n, i, o, s), void 0)
        }, b
    }(), ! function() {
        var t, e = document.createElement("div"),
            n = {},
            i = ["", "webkit", "moz", "o", "MS"],
            o = [],
            a = function() {
                if (t = r.get("animation"), "none" !== t) {
                    for (var s in i) "" === i[s] ? (o.push({
                        type: "start",
                        name: "animationstart"
                    }), o.push({
                        type: "end",
                        name: "animationend"
                    }), o.push({
                        type: "iteration",
                        name: "animationiteration"
                    })) : (o.push({
                        type: "start",
                        name: i[s] + "AnimationStart"
                    }), o.push({
                        type: "end",
                        name: i[s] + "AnimationEnd"
                    }), o.push({
                        type: "iteration",
                        name: i[s] + "AnimationIteration"
                    }));
                    document.getElementsByTagName("body")[0].appendChild(e);
                    for (var s in o) e.addEventListener(o[s].name, function(t) {
                        return function i() {
                            n[t.type] = t.name, this.removeEventListener(t.name, i, !1), "end" === t.type && this.parentNode && this.parentNode.removeChild(this), e = void 0
                        }
                    }(o[s]), !1);
                    var l = CPM.Style.getStylesheet("test").addAnimation("test");
                    l.addFrame(0, {
                        color: "#000"
                    }), l.addFrame(1, {
                        color: "#fff"
                    }), e.style[t] = "test 0.01s linear 0s 1", window.removeEventListener("load", a, !1), i = void 0, o = void 0
                }
            };
        return window.addEventListener("load", a, !1),
            function(t) {
                return n[t]
            }
    }(), CPM.Style.enable = function(t) {
        return t.addClass = function(t) {
            e(this, t)
        }, t.removeClass = function(t) {
            n(this, t)
        }, t.setTransition = function(t, e, n, i) {
            l.set(this, t, e, n, i)
        }, t.setStyle = function(t) {
            r.set(this.style, t)
        }, t.transform = function(t) {
            r.set(this.style, {
                transform: t
            })
        }, t
    }
}(), CPM = window.CPM || {}, CPM.Base = CPM.Base || {}, CPM.Base.makeEventReporter || (CPM.Base.makeEventReporter = function() {
    function t(t, e) {
        var n, i, o;
        for (n = 0, i = this.customListeners.length; i > n && (o = this.customListeners[n], o.type !== t || o.callback !== e); ++n);
        n === i && this.customListeners.push({
            type: t,
            callback: e
        })
    }

    function e(t, e) {
        var n, i, o;
        for (n = 0, i = this.customListeners.length; i > n; ++n)
            if (o = this.customListeners[n], o.type === t && o.callback === e) return this.customListeners.splice(n, 1), void 0
    }

    function n(t, e) {
        "object" != typeof e ? e = {
            data: e,
            target: this,
            type: t
        } : null !== e && (e.target = this, e.type = t);
        var n, i, o;
        for (n = 0, i = this.customListeners.length; i > n; ++n) o = this.customListeners[n], o && o.type === t && "function" == typeof o.callback && o.callback.call(this, e)
    }
    return function(i) {
        return i.customListeners = [], i.addCustomEventListener = t, i.removeCustomEventListener = e, i.fireEvent = n, i
    }
}()), window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame, window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame, CPM = window.CPM || {}, CPM.Base = CPM.Base || {}, CPM.Base.delegateEvents || (CPM.Base.delegateEvents = function() {
    function t(t, e) {
        for (var n = 0; n < t.length; ++n)
            if (t[n].identifier === e) return t[n];
        return void 0
    }

    function e(t, e, n, i, o) {
        t.push({
            handler: e,
            type: n,
            callback: i,
            capturing: o
        }), e.addEventListener(n, i, o)
    }

    function n(t) {
        for (var e; t.length > 0;) e = t.pop(), e.handler.removeEventListener(e.type, e.callback, e.capturing)
    }

    function i(t, e) {
        var n = t.delegate;
        n.onAnimationFrame && (t.animationFrame && o(t), window.requestAnimationFrame ? ! function i() {
            n.onAnimationFrame.call(t, e), t.animationFrame = window.requestAnimationFrame(i)
        }() : ! function i() {
            n.onAnimationFrame.call(t, e), t.animationFrame = window.setTimeout(i, y)
        }())
    }

    function o(t, e) {
        t.animationFrame && (t.delegate.onAnimationFrame.call(t, e), window.cancelAnimationFrame ? window.cancelAnimationFrame(t.animationFrame) : window.clearTimeout(t.animationFrame), t.animationFrame = null)
    }

    function a(t) {
        switch (t.type.toLowerCase()) {
            case "mousedown":
                u.call(this, t);
                break;
            case "touchstart":
                h.call(this, t)
        }
    }

    function r() {
        this.deactivate(), e(this.eventList, this, "mousedown", u, !1), e(this.eventList, this, "touchstart", h, !1)
    }

    function s() {
        this.timeout && (window.clearTimeout(this.timeout), this.timeout = null), n(this.eventList), o(this)
    }

    function l() {
        this.deactivate(), this.delegate.onDestroy && this.delegate.onDestroy.call(this), delete this.delegate, delete this.eventList, delete this.activate, delete this.deactivate, delete this.destroy, this.destroyed = !0
    }

    function d(t, e, o) {
        var a = this.delegate;
        "function" == typeof a.onHit && a.onHit.call(this, t, e, o), o.hitTime = Date.now(), i(this, o), "function" == typeof a.onHold && (this.timeout && window.clearTimeout(this.timeout), this.timeout = window.setTimeout(function(n) {
            return function() {
                o.isClick && a.onHold.call(n, t, e, o)
            }
        }(this), g)), n(this.eventList)
    }

    function p(t, e, n, i) {
        var o = this.delegate;
        (n.isClick && Date.now() - n.hitTime > m || Math.abs(t - i.x) > f || Math.abs(e - i.y) > f) && (n.isClick = !1), "function" == typeof o.onMove && o.onMove.call(this, t, e, n)
    }

    function c(t, n, i) {
        var a = this.delegate;
        if (o(this, i), a.onDoubleClick || a.onClick || a.onRelease) {
            if (this.deactivate(), "function" == typeof a.onRelease && a.onRelease.call(this, t, n, i), this.destroyed) return;
            i.isClick ? ("function" == typeof a.onClick && a.onClick.call(this, t, n, i), "function" == typeof a.onDoubleClick && ("function" == typeof this.deactivate && this.deactivate(), e(this.eventList, this, "mousedown", function(t) {
                a.onDoubleClick.call(this, t.pageX, t.pageY, i)
            }, !1), e(this.eventList, this, "touchstart", function(t) {
                a.onDoubleClick.call(this, t.changedTouches[0].pageX, t.changedTouches[0].pageY, i)
            }, !1), this.timeout && window.clearTimeout(this.timeout), this.timeout = window.setTimeout(function(t) {
                return function() {
                    t.activate()
                }
            }(this), b))) : a.onRelease || this.activate()
        } else this.activate()
    }

    function u(t) {
        var n = this,
            i = this.delegate,
            o = {
                isClick: !0
            },
            a = {
                x: t.pageX,
                y: t.pageY
            };
        return !i.validateMouseClick || i.validateMouseClick.call(n, t, o) ? (d.call(this, t.pageX, t.pageY, o), e(this.eventList, document, "mousemove", function(t) {
            p.call(n, t.pageX, t.pageY, o, a)
        }, !0), e(this.eventList, document, "mouseup", function(t) {
            c.call(n, t.pageX, t.pageY, o)
        }, !0), t.preventDefault(), !1) : void 0
    }

    function h(n) {
        var i, o = this,
            a = this.delegate,
            r = {
                isClick: !0
            },
            s = n.changedTouches[0],
            l = {};
        return !a.validateTouch || a.validateTouch.call(o, n, r) ? (r.id = i = s.identifier, l.x = s.pageX, l.y = s.pageY, d.call(this, s.pageX, s.pageY, r), e(this.eventList, document, "touchmove", function(e) {
            var n = t(e.changedTouches, i);
            return void 0 !== n ? (p.call(o, n.pageX, n.pageY, r, l), e.preventDefault(), !1) : void 0
        }, !0), e(this.eventList, document, "touchend", function(e) {
            var n = t(e.changedTouches, i);
            return void 0 !== n ? (c.call(o, n.pageX, n.pageY, r), e.preventDefault(), !1) : void 0
        }, !0), n.preventDefault(), !1) : void 0
    }
    var f = 5,
        m = 100,
        b = 200,
        g = 550,
        C = 50,
        y = 1e3 / C;
    return function(t, e, n) {
        t.delegate = e || {}, t.eventList = [], t.forwardEvent = a, t.activate = r, t.deactivate = s, t.destroy = l, n && t.activate()
    }
}()), CPM = window.CPM || {}, CPM.UI = CPM.UI || {}, CPM.UI.createIntegerField || ! function(t) {
    function e() {
        var t;
        e.applied || (t = CPM.Style.getStylesheet("main"), t.addRule(".CPM-slider", {
            display: "inline-block",
            position: "relative",
            cursor: "pointer"
        }), t.addRule(".CPM-slider.horizontal", {
            height: "30px"
        }), t.addRule(".CPM-slider.vertical", {
            width: "30px"
        }), t.addRule(".CPM-slider-bar", {
            position: "relative",
            background: t.makeGradient("to bottom", "rgba(0,0,0,0.05) 0%", "rgba(0,0,0,0.1) 100%"),
            borderRadius: "6px",
            boxShadow: "0 1px 1px 1px rgba(0,0,0,0.05), inset 0 -1px 1px 1px rgba(255,255,255,0.15), inset 0 1px 1px 1px rgba(0,0,0,0.05)"
        }), t.addRule(".horizontal > .CPM-slider-bar", {
            width: "100%",
            height: "6px",
            top: "50%",
            marginTop: "-3px"
        }), t.addRule(".vertical > .CPM-slider-bar", {
            height: "100%",
            width: "6px",
            left: "50%",
            marginLeft: "-3px"
        }), t.addRule(".CPM-slider-knob", {
            position: "absolute",
            width: "14px",
            height: "14px",
            border: "1px solid #bbb",
            borderRadius: "20px",
            background: t.makeGradient("to bottom", "#fff 0%", "#ddd 100%"),
            boxShadow: "0 1px 2px rgba(0,0,0,0.25), inset 0 -1px 1px 1px rgba(255,255,255,0.15), inset 0 1px 1px 1px rgba(0,0,0,0.05)"
        }), t.addRule(".horizontal > .CPM-slider-knob", {
            left: 0,
            top: "50%",
            marginTop: "-8px"
        }), t.addRule(".vertical > .CPM-slider-knob", {
            left: "50%",
            top: 0,
            marginLeft: "-8px"
        }), e.applied = !0)
    }

    function n(t) {
        var n = CPM.Base.makeEventReporter(CPM.Style.enable(document.createElement("div"))),
            i = CPM.Style.enable(document.createElement("div")),
            o = CPM.Style.enable(document.createElement("div")),
            a = 0;
        return e(), n.getValue = function() {
            return a
        }, n.setValue = function(t, e) {
            var i = Math.floor(t);
            a !== i && (a = i, 1 === n.orientation ? o.style.left = a.toString() + "px" : o.style.top = a.toString() + "px", e || this.fireEvent("change", {
                value: a
            }))
        }, n.orientation = "horizontal" === t ? 1 : 0, CPM.Base.delegateEvents(n, function() {
            var t, e, i, r = 1 === n.orientation;
            return i = r ? function(e, n) {
                var i = e.offsetLeft;
                for (e = e.offsetParent; e;) i += e.clientLeft + e.offsetLeft - e.scrollLeft, e = e.offsetParent;
                return Math.max(Math.min(n - i - o.offsetWidth / 2, t), 0)
            } : function(e, n) {
                var i = e.offsetTop;
                for (e = e.offsetParent; e;) i += e.clientTop + e.offsetTop - e.scrollTop, e = e.offsetParent;
                return Math.max(Math.min(n - i - o.offsetHeight / 2, t), 0)
            }, {
                onAnimationFrame: function() {
                    this.setValue(e)
                },
                onHit: function(n, o) {
                    t = this.max, this.setValue(i(this, r ? n : o)), e = a
                },
                onMove: function(t, n) {
                    e = i(this, r ? t : n)
                },
                onRelease: function() {
                    this.setValue(e), this.activate()
                }
            }
        }(), !0), n.setAttribute("class", "CPM-slider " + ("horizontal" === t ? "horizontal" : "vertical")), i.setAttribute("class", "CPM-slider-bar"), o.setAttribute("class", "CPM-slider-knob"), n.appendChild(i), n.appendChild(o), Object.defineProperties(n, {
            max: {
                get: 1 === n.orientation ? function() {
                    return n.offsetWidth - o.offsetWidth
                } : function() {
                    return n.offsetHeight - o.offsetHeight
                }
            }
        }), n
    }

    function i() {
        var t, e = 35;
        i.applied || (t = CPM.Style.getStylesheet("main"), t.addRule(".CPM-numeric-field", {
            display: "inline-block",
            position: "relative",
            height: "35px",
            minWidth: "110px",
            verticalAlign: "middle",
            marginTop: "4px",
            marginBottom: "4px",
            userSelect: "none"
        }), t.addRule(".CPM-numeric-field:first-of-type", {
            marginTop: "0"
        }), t.addRule(".CPM-numeric-field-wrapper", {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: e + "px",
            right: e + "px",
            border: "1px solid #ccc",
            borderLeft: "none",
            borderRight: "none",
            padding: "0 4px",
            background: "#ffffff",
            boxShadow: "0 2px 2px rgba(0,0,0,0.1)"
        }), t.addRule(".CPM-numeric-field-input", {
            width: "100%",
            height: "100%",
            margin: 0,
            border: 0,
            padding: 0,
            background: "transparent"
        }), t.addRule(".CPM-numeric-field-button", {
            position: "absolute",
            top: 0,
            bottom: 0,
            width: e + "px",
            border: "1px solid #ccc",
            background: t.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
            boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
            cursor: "pointer"
        }), t.addRule(".CPM-numeric-field-button:active", {
            background: t.makeGradient("to bottom", "#ccc 0%", "#eee 100%")
        }), t.addRule(".CPM-numeric-field-button:first-child", {
            left: 0,
            borderRadius: "40px 0 0 40px"
        }), t.addRule(".CPM-numeric-field-button:last-child", {
            right: 0,
            borderRadius: "0 40px 40px 0"
        }), i.applied = !0)
    }

    function o(t, e) {
        var n = document.createElement("div"),
            o = document.createElement("button"),
            a = document.createElement("div"),
            r = document.createElement("input"),
            s = document.createElement("button");
        return i(), n.setAttribute("class", "CPM-numeric-field"), o.setAttribute("class", "CPM-numeric-field-button"), o.appendChild(document.createTextNode("–")), t.onMinus && o.addEventListener("click", function() {
            t.onMinus.call(r), n.fireEvent("change", {
                value: n.getValue()
            })
        }, !1), a.appendChild(r), a.setAttribute("class", "CPM-numeric-field-wrapper"), r.setAttribute("class", "CPM-numeric-field-input"), r.value = "0", r.addEventListener("touchend", function() {
            this.setAttribute("type", "number")
        }, !1), r.addEventListener("keyup", function(t) {
            13 === t.keyCode && this.blur()
        }, !1), t.onInput && r.addEventListener("input", t.onInput, !1), t.onFocus && r.addEventListener("focus", t.onFocus, !1), t.onBlur ? (r.addEventListener("blur", function(e) {
            t.onBlur.call(this, e), n.fireEvent("change", {
                value: n.getValue()
            })
        }, !1), t.onBlur.call(r)) : r.addEventListener("blur", function() {
            n.fireEvent("change", {
                value: n.getValue()
            })
        }, !1), s.setAttribute("class", "CPM-numeric-field-button"), s.appendChild(document.createTextNode("+")), t.onPlus && s.addEventListener("click", function() {
            t.onPlus.call(r), n.fireEvent("change", {
                value: n.getValue()
            })
        }, !1), n.appendChild(o), n.appendChild(a), n.appendChild(s), n.getValue = t.getValue ? function() {
            return t.getValue.apply(r, arguments)
        } : function() {
            return r.value
        }, n.setValue = t.setValue ? function() {
            return t.setValue.apply(r, arguments)
        } : function(t) {
            r.value = t
        }, e && (n.style.width = e + "px"), CPM.Base.makeEventReporter(n), n
    }

    function a(t, e, n) {
        function i(t) {
            return Math.min(a.max, Math.max(a.min, t))
        }
        var a = o({
            onMinus: function() {
                this.value = i(parseInt(this.value, 10) - 1)
            },
            onInput: function() {
                "" !== this.value && "-" !== this.value && (this.value = "0-" === this.value ? "-" : i(parseInt(this.value, 10) || this.min))
            },
            onBlur: function() {
                a && (this.value = i(parseInt(this.value, 10) || this.min))
            },
            onPlus: function() {
                this.value = i(parseInt(this.value, 10) + 1)
            },
            getValue: function() {
                return parseInt(this.value, 10)
            }
        });
        return a.setValue(n || t || 0), null == t && (t = -Number.MAX_VALUE), null == e && (e = Number.MAX_VALUE), a.min = t, a.max = e, a
    }

    function r(t, e, n) {
        function i(t) {
            return Math.min(a.max, Math.max(a.min, t))
        }
        var a = o({
            onMinus: function() {
                var t = parseFloat(this.value, 10);
                "round" === a.buttonMode && (t = Math.ceil(t)), "log" === a.buttonMode ? (t = Math.round(Math.log(t) / Math.log(10)), this.value = i(Math.pow(10, t - 1))) : this.value = i(t - 1)
            },
            onInput: function() {},
            onBlur: function() {
                var t;
                a && ("log" === a.buttonMode ? (t = Math.round(Math.log(parseFloat(this.value, 10)) / Math.log(10)), this.value = i(Math.pow(10, t))) : (t = parseFloat(this.value, 10), this.value = isNaN(t) ? this.min : i(t)))
            },
            onPlus: function() {
                var t = parseFloat(this.value, 10);
                "round" === a.buttonMode && (t = Math.floor(t)), "log" === a.buttonMode ? (t = Math.round(Math.log(t) / Math.log(10)), this.value = i(Math.pow(10, t + 1))) : this.value = i(t + 1)
            },
            getValue: function() {
                return i(parseFloat(this.value, 10) || this.min)
            }
        });
        return a.setValue(n || t || 0), null == t && (t = -Number.MAX_VALUE), null == e && (e = Number.MAX_VALUE), a.buttonMode = "float", a.min = t, a.max = e, a
    }

    function s() {
        function t(t) {
            switch (t) {
                case -3:
                    return "270° CCW";
                case -2:
                    return "180° CCW";
                case -1:
                    return "90° CCW";
                case 1:
                    return "90° CW";
                case 2:
                    return "180° CW";
                case 3:
                    return "270° CW";
                default:
                    return "0°"
            }
        }
        var e = 0;
        return o({
            onMinus: function() {
                e > -3 ? --e : e = 0, this.value = t(e)
            },
            onInput: function() {
                "-" !== this.value && (this.value = "0-" === this.value ? "-" : parseInt(this.value, 10) || "0")
            },
            onFocus: function() {
                this.value = 90 * e
            },
            onBlur: function() {
                var n = (parseInt(this.value, 10) || 0) % 360;
                e = n > 315 ? 0 : n > 225 ? 3 : n > 135 ? 2 : n > 45 ? 1 : n > -45 ? 0 : n > -135 ? -1 : n > -225 ? -2 : n > -315 ? -3 : 0, this.value = t(e)
            },
            onPlus: function() {
                3 > e ? ++e : e = 0, this.value = t(e)
            },
            getValue: function() {
                return e
            },
            setValue: function(n) {
                e = n, this.value = t(e)
            }
        }, 140)
    }

    function l() {
        var t, e = 35;
        l.applied || (t = CPM.Style.getStylesheet("main"), t.addRule(".CPM-button", {
            display: "block",
            height: e + "px",
            lineHeight: e + "px",
            verticalAlign: "middle",
            marginTop: "4px",
            marginBottom: "4px",
            border: "1px solid #ccc",
            borderRadius: e + "px",
            background: t.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
            boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
            textAlign: "center",
            cursor: "pointer",
            userSelect: "none"
        }), t.addRule(".CPM-button:active", {
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            background: t.makeGradient("to bottom", "#ccc 0%", "#eee 100%")
        }), l.applied = !0)
    }

    function d(t) {
        var e = document.createElement("div");
        return l(), e.setAttribute("class", "CPM-button"), (e.setLabel = function(t) {
            if ("string" == typeof t) e.innerHTML = t;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(t)
            }
        })(t || ""), e
    }

    function p() {
        var t, e = 35;
        p.applied || (t = CPM.Style.getStylesheet("main"), t.addRule(".CPM-toggle-button", {
            position: "relative",
            height: e + "px",
            verticalAlign: "middle",
            marginTop: "4px",
            marginBottom: "4px",
            borderRadius: e + "px",
            cursor: "pointer"
        }), t.addRule(".CPM-toggle-button:active", {
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
        }), t.addRule(".CPM-toggle-button-handle", {
            height: "100%",
            width: e + "px",
            margin: 0,
            padding: 0,
            border: "1px solid #ccc",
            borderRadius: "" + e + "px 0 0 " + e + "px",
            background: t.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
            boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
            cursor: "pointer",
            color: "#666",
            verticalAlign: "bottom"
        }), t.addRule(".CPM-toggle-button-handle:active, .CPM-toggle-button-handle.toggled", {
            background: t.makeGradient("to bottom", "#ccc 0%", "#eee 100%"),
            color: "#222"
        }), t.addRule(".CPM-toggle-button-label", {
            position: "absolute",
            left: e + "px",
            top: 0,
            right: 0,
            bottom: 0,
            padding: "0 0.5em",
            border: "1px solid #ccc",
            borderLeft: "none",
            borderRadius: "0 " + e + "px " + e + "px 0",
            background: t.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
            boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
            lineHeight: e - 2 + "px",
            verticalAlign: "bottom",
            userSelect: "none"
        }), p.applied = !0)
    }

    function c(t) {
        var e = document.createElement("div"),
            n = document.createElement("button"),
            i = document.createElement("span"),
            o = !1;
        return p(), e.setAttribute("class", "CPM-toggle-button"), CPM.Base.makeEventReporter(e), n.setAttribute("class", "CPM-toggle-button-handle"), e.addEventListener("click", function() {
            this.setValue(!o), this.fireEvent("change", {
                value: o
            })
        }, !1), e.appendChild(n), i.setAttribute("class", "CPM-toggle-button-label"), e.appendChild(i), e.getValue = function() {
            return o
        }, e.setValue = function(t) {
            o = t, o ? n.setAttribute("class", "CPM-toggle-button-handle toggled") : n.setAttribute("class", "CPM-toggle-button-handle")
        }, (e.setLabel = function(t) {
            if ("string" == typeof t) i.innerHTML = t;
            else {
                for (; i.firstChild;) i.removeChild(i.firstChild);
                i.appendChild(t)
            }
        })(t || ""), e
    }

    function u() {
        var t, e = 35;
        u.applied || (t = CPM.Style.getStylesheet("main"), t.addRule(".CPM-toggle-set", {
            position: "relative",
            height: e + "px",
            verticalAlign: "middle",
            marginTop: "4px",
            marginBottom: "4px"
        }), t.addRule(".CPM-toggle-set-button", {
            height: "100%",
            border: "1px solid #ccc",
            borderLeft: "none",
            background: t.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
            boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
            whiteSpace: "nowrap"
        }), t.addRule(".CPM-toggle-set-button:enabled", {
            cursor: "pointer",
            color: "#666"
        }), t.addRule(".CPM-toggle-set-button:active, .CPM-toggle-set-button:disabled", {
            background: t.makeGradient("to bottom", "#ccc 0%", "#eee 100%"),
            color: "#222"
        }), t.addRule(".CPM-toggle-set-button:first-child", {
            borderLeft: "1px solid #ccc",
            borderRadius: "" + e + "px 0 0 " + e + "px"
        }), t.addRule(".CPM-toggle-set-button:last-child", {
            borderRadius: "0 " + e + "px " + e + "px 0"
        }), u.applied = !0)
    }

    function h(t) {
        var e, n, i = document.createElement("div"),
            o = null,
            a = 0;
        for (u(), i.setAttribute("class", "CPM-toggle-set"), CPM.Base.makeEventReporter(i), n = 0; t > n; ++n) e = document.createElement("button"), e.setAttribute("class", "CPM-toggle-set-button"), e.style.width = 100 / t + "%", e.addEventListener("click", function(t) {
            return function() {
                o.disabled = !1, this.disabled = !0, o = this, a = t, i.fireEvent("change", {
                    value: t
                })
            }
        }(n), !1), i.appendChild(e);
        return i.firstChild.disabled = !0, o = i.firstChild, i.getValue = function() {
            return a
        }, i.setValue = function(t) {
            t >= 0 && t < i.childNodes.length && (o.disabled = !1, o = i.childNodes[t], o.disabled = !0, a = t)
        }, i
    }

    function f() {
        var t, e = 66,
            n = 33;
        f.applied || (t = CPM.Style.getStylesheet("main"), t.addRule(".action-wheel", {
            position: "absolute",
            top: "2px",
            right: "10px",
            width: e + "px",
            height: e + "px",
            background: t.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
            border: "1px solid #ccc",
            borderRadius: e + "px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            cursor: "pointer"
        }), t.addRule(".action-wheel > button", {
            position: "absolute",
            width: n + "px",
            height: n + "px",
            border: "none",
            background: "transparent",
            cursor: "pointer"
        }), t.addRule(".action-wheel > button::before, .action-wheel > button::after", {
            position: "absolute",
            content: "''"
        }), t.addRule(".action-wheel > button:active", {
            background: t.makeGradient("to bottom", "rgba(0,0,0,0.3) 0%", "rgba(0,0,0,0) 100%")
        }), t.addRule(".action-wheel > .northwest", {
            top: 0,
            left: 0,
            borderRight: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
            borderRadius: n + "px 0 0 0"
        }), t.addRule(".action-wheel > .northeast", {
            top: 0,
            right: 0,
            borderBottom: "1px solid #ccc",
            borderRadius: "0 " + n + "px 0 0"
        }), t.addRule(".action-wheel > .southwest", {
            bottom: 0,
            left: 0,
            borderRight: "1px solid #ccc",
            borderRadius: "0 0 0 " + n + "px"
        }), t.addRule(".action-wheel > .southeast", {
            bottom: 0,
            right: 0,
            borderRadius: "0 0 " + n + "px 0"
        }), f.applied = !0)
    }

    function m() {
        var t = document.createElement("div");
        return f(), t.northwest = document.createElement("button"), t.northeast = document.createElement("button"), t.southwest = document.createElement("button"), t.southeast = document.createElement("button"), t.setAttribute("class", "action-wheel"), t.northwest.setAttribute("class", "northwest"), t.northeast.setAttribute("class", "northeast"), t.southwest.setAttribute("class", "southwest"), t.southeast.setAttribute("class", "southeast"), t.appendChild(t.northwest), t.appendChild(t.northeast), t.appendChild(t.southwest), t.appendChild(t.southeast), t
    }
    t._base = t._base || {}, t._base.createNumericField = o, t._base.createActionWheel = m, t.createSlider = n, t.createIntegerField = a, t.createDecimalField = r, t.createAngleField = s, t.createToggleSet = h, t.createToggleButton = c, t.createButton = d
}(CPM.UI), CPM = window.CPM || {}, CPM.UI = CPM.UI || {}, CPM.UI.createFoldingList || ! function() {
    function t() {
        var e;
        t.applied || (e = CPM.Style.getStylesheet("main"), e.addRule(".CPM-folding-list", {
            margin: 0,
            padding: 0,
            listStyleType: "none"
        }), e.addRule(".CPM-folding-list-item", {
            position: "relative",
            width: "100%",
            borderBottom: "1px solid #ccc",
            background: "none",
            color: "#666",
            overflow: "hidden"
        }), e.addRule(".CPM-folding-list-item-label", {
            padding: "0.25em 2em",
            cursor: "pointer",
            userSelect: "none"
        }), e.addRule(".CPM-folding-list-item-label:hover", {
            background: "rgba(64,192,255,0.2)"
        }), e.addRule(".CPM-folding-list-content", {
            position: "relative",
            borderTop: "1px solid #ddd"
        }), e.addRule(".CPM-folding-list-item-label::before", {
            position: "absolute",
            content: "'►'",
            left: "0.5em"
        }), e.addRule(".open > .CPM-folding-list-item-label::before", {
            content: "'▼'"
        }), t.applied = !0)
    }

    function e() {
        t(), this.elementid = document.createElement("ul"), this.elementid.setAttribute("class", "CPM-folding-list"), this.items = [], this.autoClose = !0
    }

    function n(t, e, n) {
        this.parentList = n, this.elementid = CPM.Style.enable(document.createElement("li")), this.elementid.setAttribute("class", "CPM-folding-list-item"), e instanceof HTMLElement ? this.content = e : (this.content = document.createElement("div"), this.content.innerHTML = e), "function" != typeof this.content.addClass && CPM.Style.enable(this.content), this.content.addClass("CPM-folding-list-content"), this.label = document.createElement("div"), this.label.setAttribute("class", "CPM-folding-list-item-label"), this.label.addEventListener("click", a.bind(this), !1), this.setLabel(t), this.elementid.appendChild(this.label), this.isOpen = !1
    }

    function i() {
        this.elementid.style.height = "auto"
    }

    function o() {
        this.elementid.style.height = "auto", this.elementid.removeChild(this.content), this.elementid.removeClass("open"), this.isOpen = !1
    }

    function a() {
        this.isOpen ? this.close() : (this.parentList && this.parentList.autoClose && "function" == typeof this.parentList.closeAll && this.parentList.closeAll(), this.open())
    }
    CPM.UI.createFoldingList = function() {
        return new e
    }, e.prototype.insertItem = function(t, e, i) {
        var o = new n(e, i, this);
        return o.index = t, t < this.items.length ? (this.elementid.insertBefore(o.elementid, this.items[t].elementid), this.items.splice(t, 0, o)) : (this.elementid.appendChild(o.elementid), this.items.push(o)), o
    }, e.prototype.addItem = function(t, e) {
        return this.insertItem(this.items.length, t, e)
    }, e.prototype.removeItem = function(t) {
        this.elementid.removeChild(t.elementid), this.items.splice(t.index)
    }, e.prototype.getOpenFolds = function() {
        var t, e = [];
        for (t = 0; t < this.items.length; ++t) this.items[t].isOpen && e.push(this.items[t]);
        return e
    }, e.prototype.forEach = function(t) {
        for (var e = 0; e < this.items.length; ++e) t.call(this.items[e], e)
    }, e.prototype.openAll = function() {
        for (var t = 0; t < this.items.length; ++t) this.items[t].open()
    }, e.prototype.closeAll = function() {
        for (var t = 0; t < this.items.length; ++t) this.items[t].close()
    }, n.prototype.open = function() {
        var t, e = this.elementid.offsetHeight;
        if (!this.isOpen) {
            this.isOpen = !0, this.elementid.appendChild(this.content), this.elementid.addClass("open"), t = this.elementid.offsetHeight;
            var n = i.bind(this);
            t > 0 ? this.elementid.setTransition({
                height: e + "px"
            }, {
                height: t + "px"
            }, n) : n()
        }
    }, n.prototype.close = function() {
        var t, e = this.elementid.offsetHeight;
        if (this.isOpen) {
            t = this.label.offsetHeight;
            var n = o.bind(this);
            t > 0 ? this.elementid.setTransition({
                height: e + "px"
            }, {
                height: t + "px"
            }, n) : n()
        }
    }, n.prototype.setLabel = function(t) {
        t instanceof HTMLElement ? (this.label.innerHTML = "", this.label.appendChild(t)) : this.label.innerHTML = t
    }
}(), CPM = window.CPM || {}, CPM.UI = CPM.UI || {}, CPM.UI.createShuffleList || (CPM.UI.createShuffleList = function t() {
    function n(t, e) {
        var n, i, o = !1,
            a = 1;
        for (n = this.firstChild; n;)(n === t || o) && (n.renumber(a), o = !0), ++a, n = n.nextSibling;
        if (!e)
            for (this.setTransition({
                    height: this.offsetHeight - t.offsetHeight + "px"
                }, {
                    height: this.offsetHeight + "px"
                }, function() {
                    this.style.height = ""
                }), t.setTransition({
                    minHeight: 0,
                    height: 0
                }, {
                    height: t.offsetHeight - 1 + "px"
                }, function() {
                    this.style.height = this.style.minHeight = ""
                }), i = t.nextSibling; i;) i.setTransition({
                transform: "translate3d(0," + -t.offsetHeight + "px,0)"
            }, {
                transform: "translate3d(0,0,0)"
            }), i = i.nextSibling;
        this.select(t), this.fireEvent("insert", {
            item: t
        })
    }
    var o = function() {
            var t = function() {
                function t(t, n) {
                    e && t.shift !== n && (t.transform("translate3d(0," + n * e.offsetHeight + "px,0)"), t.shift = n)
                }
                var e, n, i, o, r, s = {},
                    l = {},
                    d = [],
                    p = [];
                return {
                    onAnimationFrame: function() {
                        e.transform("translate3d(" + (l.x - s.x) + "px," + (l.y - s.y) + "px,0)")
                    },
                    onHit: function(t, a) {
                        for (e = this.parentNode, e.addClass("dragging"), CPM.Style.getStylesheet("main").lockCursor("move"), l.x = s.x = t, l.y = s.y = a, n = e.parentNode.childNodes.length; n; --n) i = e.parentNode.childNodes[n - 1], i !== e ? (i.setStyle({
                            transition: "transform 0.2s",
                            transform: "translate3d(0,0,0)"
                        }), i.style.top = 0, i.shift = 0, i.deactivate(), d.unshift(e.parentNode.childNodes[n - 1]), p.unshift(i.offsetTop - e.offsetTop + i.offsetHeight / 2 - (i.offsetTop > e.offsetTop ? e.offsetHeight : 0))) : r = o = n - 1
                    },
                    onMove: function(e, n) {
                        var a = n - s.y;
                        for (l.x = e, l.y = n; a < p[r - 1];) --r, i = d[r], o > r ? t(i, 1) : t(i, 0);
                        for (; a > p[r];) ++r, i = d[r - 1], o >= r ? t(i, 0) : t(i, -1)
                    },
                    onRelease: function() {
                        for (e.parentNode.insertBefore(e, d[r]), e.transform(""); d.length > 0;) i = d.pop(), i.setStyle({
                            transform: "",
                            transition: ""
                        }), i.style.top = 0, i.activate();
                        for (p.splice(0, p.length), n = Math.min(r, o); n <= Math.max(r, o); ++n) e.parentNode.childNodes[n].renumber(n + 1);
                        e.removeClass("dragging"), CPM.Style.getStylesheet("main").unlockCursor(), this.activate(), e.parentNode.fireEvent("reorder", {
                            item: a
                        })
                    }
                }
            }();
            return function() {
                function n() {
                    var t, n = s.parentNode,
                        o = s.previousSibling;
                    for (l.destroy(), n.removeChild(s), n.style.height = "", i = n.childNodes.length; i; --i) t = n.childNodes[i - 1], t.renumber(i), t.setStyle({
                        transform: "",
                        transition: ""
                    });
                    r === s && n.select(o), s.onDestroy && s.onDestroy(), n.fireEvent("remove", {
                        item: s,
                        replacement: o
                    }), e = s = l = d = p = n = null, delete this.renumber, delete this.destroy
                }

                function o() {
                    s.parentNode.select(s), s.parentNode.fireEvent("select", {
                        item: s
                    })
                }

                function a() {
                    s.destroy(), this.removeEventListener("click", a, !1)
                }
                var s = CPM.Style.enable(document.createElement("li")),
                    l = document.createElement("span"),
                    d = document.createElement("div"),
                    p = document.createElement("a");
                return s.renumber = function(t) {
                    l.firstChild.nodeValue = t
                }, s.setLabel = function(t) {
                    d.firstChild.nodeValue = t
                }, s.activate = function() {
                    l.activate(), d.addEventListener("click", o, !1), p.addEventListener("click", a, !1)
                }, s.deactivate = function() {
                    l.deactivate(), d.removeEventListener("click", o, !1), p.removeEventListener("click", a, !1)
                }, s.destroy = function(t) {
                    if (t) return n(), void 0;
                    var e, i, o = s.parentNode.offsetHeight,
                        a = s.offsetHeight,
                        r = [],
                        l = -1;
                    for (e = 0; e < s.parentNode.childNodes.length; ++e) i = s.parentNode.childNodes[e], i === s ? l = e : l >= 0 && r.push(i);
                    for (s.setTransition({
                            transform: "translate3d(0,0,0)",
                            opacity: 1
                        }, {
                            transform: "translate3d(" + -s.offsetWidth + "px,0,0)",
                            opacity: 0
                        }, function() {
                            n()
                        }), e = r.length; e; --e) i = r[e - 1], i.setTransition({
                        transform: "translate3d(0,0,0)"
                    }, {
                        transform: "translate3d(0," + -a + "px,0)"
                    });
                    s.parentNode.setTransition({
                        height: o + "px"
                    }, {
                        height: o - a + "px"
                    })
                }, s.setAttribute("class", "shuffle-list-item"), l.setAttribute("class", "numeral"), l.appendChild(document.createTextNode("")), CPM.Base.delegateEvents(l, t, !0), d.setAttribute("class", "label"), d.appendChild(document.createTextNode("")), p.setAttribute("class", "delete-button"), p.appendChild(document.createTextNode("x")), s.appendChild(l), s.appendChild(d), s.appendChild(p), s.activate(), s.itemLabel = d, s.itemNumeral = l, s
            }
        }(),
        a = CPM.Base.makeEventReporter(CPM.Style.enable(document.createElement("ol"))),
        r = null;
    return t.styled || ! function() {
        var e = CPM.Style.getStylesheet("main");
        e.addRule(".shuffle-list", {
            margin: 0,
            padding: 0,
            listStyleType: "none"
        }), e.addRule(".shuffle-list-item", {
            position: "relative",
            width: "100%",
            minHeight: "40px",
            borderBottom: "1px solid #ccc",
            background: "none",
            color: "#444",
            opacity: .9,
            overflow: "hidden"
        }), e.addRule(".shuffle-list-item:active", {
            boxShadow: "inset 0 0 2px 2px rgba(127,160,224,0.4)"
        }), e.addRule(".shuffle-list-item.selected", {
            boxShadow: "inset 0 0 0 2px #8ad"
        }), e.addRule(".shuffle-list-item.dragging", {
            background: "#fff",
            boxShadow: "0 0 8px rgba(0,0,0,0.5)",
            zIndex: 10
        }), e.addRule(".shuffle-list-item.selected.dragging", {
            boxShadow: "inset 0 0 0 2px #8ad, 0 0 4px rgba(0,0,0,0.5)"
        }), e.addRule(".shuffle-list-item > .numeral", {
            position: "absolute",
            left: 0,
            top: 0,
            width: "28px",
            paddingLeft: "2px",
            height: "100%",
            background: "rgba(0,0,0,0.04)",
            borderRight: "1px solid #ccc",
            cursor: "move"
        }), e.addRule(".shuffle-list-item.selected > .numeral", {
            color: "#fff",
            backgroundColor: "#8ad",
            borderColor: "#8ad"
        }), e.addRule(".shuffle-list-item > .label", {
            marginLeft: "31px",
            marginRight: "21px",
            padding: "8px 0 8px 8px",
            fontSize: "12pt",
            cursor: "pointer"
        }), e.addRule(".shuffle-list-item > .delete-button", {
            position: "absolute",
            right: "5px",
            top: 0,
            opacity: .3,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: "14pt",
            cursor: "pointer"
        }), e.addRule(".shuffle-list-item > .delete-button:hover", {
            opacity: .7
        }), e.addRule(".shuffle-list-item > .delete-button:active", {
            opacity: 1
        }), t.styled = !0
    }(), a.createItem = function() {
        return o()
    }, a.insertItem = function(t, e, i) {
        if ("object" != typeof e) {
            if ("object" != typeof t) throw new Error("Invalid ShuffleList item for insertion");
            i = e, e = t, t = o()
        }
        return this.insertBefore(t, e), n.call(this, t, i), t
    }, a.addItem = function(t, e) {
        return "object" != typeof t && (e = t, t = o()), this.appendChild(t), n.call(this, t, e), t
    }, a.select = function(t) {
        r && r.removeClass("selected"), t && t.addClass("selected"), r = t
    }, a.getSelection = function() {
        return r
    }, a.clear = function() {
        this.firstChild && (this.style.overflow = "hidden", this.setTransition({
            height: this.offsetHeight + "px"
        }, {
            height: 0
        }, function() {
            for (; this.firstChild;) this.firstChild.destroy(!0);
            this.style.height = "", this.style.overflow = ""
        }))
    }, a.setAttribute("class", "shuffle-list"), a.addCustomEventListener("remove", function(t) {
        this.fireEvent("reorder", {
            item: t.replacement
        })
    }), a
}), CPM = window.CPM || {}, CPM.Base = CPM.Base || {}, CPM.Base.createDialog || (CPM.Base.createDialog = function t(e) {
    function n(t) {
        t.setStyle({
            transform: "",
            left: "",
            right: "",
            top: "",
            bottom: ""
        })
    }

    function i(t, e) {
        t.setTransition({
            display: "",
            transform: "scale(0)"
        }, {
            transform: "scale(1)"
        }, e)
    }

    function o(t, e) {
        t.setTransition({
            transform: "scale(1)"
        }, {
            transform: "scale(0)"
        }, function() {
            this.style.display = "none", n(this), "function" == typeof e && e.call(this)
        })
    }
    var a = e,
        r = CPM.Style.enable(document.createElement("div"));
    if (!t.styled) {
        var s = CPM.Style.getStylesheet("main");
        s.addRule(".CPM-dialog", {
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            maxWidth: "320px",
            margin: "0 auto",
            background: s.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
            border: "1px solid #bbb",
            textAlign: "left",
            color: "#666",
            boxShadow: "0 6px 20px 1px rgba(0,0,0,0.8)",
            zIndex: 2e4
        }), s.addRule(".CPM-dialog-header", {
            height: "40px",
            borderBottom: "1px solid #bbb",
            background: s.makeGradient("to bottom", "#fff 0%", "#ddd 100%"),
            color: "#444"
        }), s.addRule(".CPM-dialog-footer", {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "40px",
            borderTop: "1px solid #bbb",
            background: s.makeGradient("to bottom", "#eee 0%", "#ccc 100%"),
            color: "#444"
        }), s.addRule(".CPM-dialog-title", {
            padding: "5px",
            fontFamily: "sans-serif",
            fontSize: "18pt"
        }), s.addRule(".CPM-dialog-close-button", {
            position: "absolute",
            top: 0,
            right: 0,
            padding: "0 5px",
            cursor: "pointer",
            color: "#444",
            fontWeight: "bold",
            fontSize: "18pt",
            fontFamily: "sans-serif",
            textShadow: "0 1px 0 #fff"
        }), s.addRule(".CPM-dialog-close-button:hover", {
            background: "rgba(0,0,0,0.15)",
            textShadow: "none"
        }), s.addRule(".CPM-dialog-close-button:active", {}), t.styled = !0
    }
    return r.show = function(t) {
        a && (a.dialog && a.dialog !== this && a.dialog.hide(), a.dialog = this), "none" === this.style.display && this.transitionIn(t)
    }, r.hide = function(t) {
        a && a.dialog === this && (a.dialog = null), "none" !== this.style.display && this.transitionOut(t)
    }, r.transitionIn = function(t) {
        i(this, t)
    }, r.transitionOut = function(t) {
        o(this, t)
    }, r.setAttribute("class", "CPM-dialog"), r.style.display = "none", r.dialogheader = document.createElement("div"), r.dialogheader.setAttribute("class", "CPM-dialog-header"), r.dialogtitle = document.createElement("h1"), r.dialogtitle.setAttribute("class", "CPM-dialog-title"), r.closebutton = document.createElement("a"), r.closebutton.setAttribute("class", "CPM-dialog-close-button"), r.closebutton.appendChild(document.createTextNode("x")), r.closebutton.addEventListener("click", function() {
        r.hide()
    }, !1), r.dialogheader.appendChild(r.dialogtitle), r.dialogheader.appendChild(r.closebutton), r.appendChild(r.dialogheader), r
}), CPM = window.CPM || {}, CPM.Base = CPM.Base || {}, CPM.Base.createHelpDialog || ! function() {
    function t(t) {
        return t.appendChild(document.createElement("div")), t.lastChild.setAttribute("class", "CPM-icon-paper shadow"), t.lastChild.appendChild(document.createElement("div")), t.lastChild.lastChild.setAttribute("class", "CPM-icon-pencil"), t.lastChild.appendChild(document.createElement("div")), t.lastChild.lastChild.setAttribute("class", "CPM-icon-lines"), t.appendChild(t.lastChild.cloneNode(!0)), t.lastChild.setAttribute("class", "CPM-icon-paper"), t
    }

    function e(t) {
        return t.appendChild(document.createElement("div")), t.lastChild.setAttribute("class", "CPM-icon-question"), t
    }

    function n(t) {
        return t.appendChild(document.createElement("div")), t.lastChild.setAttribute("class", "CPM-icon-triangle left"), t
    }
    CPM.Base.generateElementShortcuts = function() {
        var t, e = ["a", "p", "em", "strong", "span", "div"];
        return function(n) {
            var i, o;
            if (null != t) return t;
            for (t = {}, i = 0, o = e.length; o > i; ++i) t[e[i]] = function(t) {
                return function(e) {
                    var n = document.createElement(t);
                    return null != e && n.appendChild(document.createTextNode(e)), n
                }
            }(e[i]);
            return t.icon = function(t) {
                var e = document.createElement("span");
                return e.setAttribute("class", "CPM-help-dialog-icon " + t), e.appendChild(document.createElement("div")), e.firstChild.setAttribute("class", "decoration"), e
            }, t.link = function(t, e) {
                null == e && (e = t);
                var i = document.createElement("span");
                return i.setAttribute("class", "CPM-help-link"), i.appendChild(document.createTextNode(e)), i.addEventListener("click", function() {
                    n.goToPage(n.lookup(t))
                }, !1), i
            }, t
        }
    }(), CPM.Base.createHelpDialog = function i(o) {
        function a(t) {
            function e(t) {
                0 === g ? (u > 0 ? (b.previousPage && b.previousPage.setStyle({
                    display: "",
                    opacity: 1,
                    transform: "translate3d(" + (-b.offsetWidth + u) + "px,0,0)"
                }), b.nextPage && (b.nextPage.style.display = "none")) : 0 > u && (b.nextPage && b.nextPage.setStyle({
                    display: "",
                    opacity: 1,
                    transform: "translate3d(" + (b.offsetWidth + u) + "px,0,0)"
                }), b.previousPage && (b.previousPage.style.display = "none")), b.transform("translate3d(" + u + "px,0,0)")) : 1 === g && (b.transform("translate3d(0,0,0)"), b.scrollTop = Math.max(0, f - h)), t && (s = window.requestAnimationFrame(function() {
                    e(!0)
                }))
            }

            function n(t, e) {
                var n;
                for (n = t.length; n; --n)
                    if (t[n - 1].identifier === e) return t[n - 1];
                return null
            }

            function i(t) {
                var e;
                (e = n(t.changedTouches, m)) && (u = e.pageX - d, h = e.pageY - c, -1 === g && (Math.abs(u) > r ? g = 0 : Math.abs(h) > r && (g = 1)), t.preventDefault())
            }

            function o(t) {
                var e;
                (e = n(t.changedTouches, m)) && (0 === g && (u = e.pageX - d, h = e.pageY - c, u > r && p.previousPage ? l.previousPage(!0) : -r > u && p.nextPage ? l.nextPage(!0) : (b.setTransition({}, {
                    transform: "translate3d(0,0,0)"
                }), b.nextPage && "none" !== b.nextPage.style.display && b.nextPage.setTransition({}, {
                    transform: "translate3d(" + b.offsetWidth + "px,0,0)"
                }, function() {
                    this.style.display = "none"
                }), b.previousPage && "none" !== b.previousPage.style.display && b.previousPage.setTransition({}, {
                    transform: "translate3d(" + -b.offsetWidth + "px,0,0)"
                }, function() {
                    this.style.display = "none"
                }))), this.removeEventListener("touchmove", i, !1), this.removeEventListener("touchend", o, !1), b.addEventListener("touchstart", a, !1), window.cancelAnimationFrame ? window.cancelAnimationFrame(s) : window.clearInterval(s), t.preventDefault())
            }
            var s, d = (t.timeStamp, t.changedTouches[0].pageX),
                c = t.changedTouches[0].pageY,
                u = 0,
                h = 0,
                f = this.scrollTop,
                m = t.changedTouches[0].identifier,
                b = this,
                g = -1;
            b.removeEventListener("touchstart", a, !1), window.requestAnimationFrame ? e(!0) : s = window.setInterval(e, 20), document.addEventListener("touchmove", i, !1), document.addEventListener("touchend", o, !1)
        }
        var r = 15,
            s = o,
            l = CPM.Base.createDialog(s),
            d = [],
            p = null,
            c = document.createElement("span"),
            u = document.createElement("div"),
            h = document.createElement("span"),
            f = document.createElement("span"),
            m = document.createElement("span"),
            b = document.createElement("a"),
            g = document.createElement("a"),
            C = CPM.Base.generateElementShortcuts(l),
            y = (C.a, C.p),
            x = (C.span, C.icon),
            v = C.link;
        if (!i.styled) {
            var P = CPM.Style.getStylesheet("main");
            P.addRule(".CPM-dialog.CPM-help-dialog", {
                maxWidth: "420px",
                maxHeight: "520px",
                bottom: "20px",
                color: "#666",
                overflow: "hidden"
            }), P.addRule(".CPM-help-dialog-title", {
                fontSize: "medium"
            }), P.addRule(".CPM-help-dialog-footer", {
                height: "20px",
                padding: "10px",
                textAlign: "center"
            }), P.addRule(".CPM-help-dialog-footer > a", {
                marginTop: "-3px",
                padding: "3px",
                opacity: .1,
                cursor: "default",
                userSelect: "none"
            }), P.addRule(".CPM-help-dialog-footer > a.enabled", {
                opacity: 1,
                cursor: "pointer"
            }), P.addRule(".CPM-help-dialog-footer > a.enabled:hover", {
                background: "rgba(0,0,0,0.15)"
            }), P.addRule(".CPM-help-dialog-footer > a.enabled:active", {}), P.addRule(".CPM-link-to-toc", {
                color: "#00f",
                textDecoration: "underline",
                cursor: "pointer"
            }), P.addRule(".CPM-help-dialog-page", {
                position: "absolute",
                left: 0,
                right: 0,
                top: "41px",
                bottom: "41px",
                padding: "5px",
                overflowY: "auto"
            }), P.addRule(".CPM-help-dialog-page > h1", {
                fontSize: "x-large",
                fontFamily: "sans-serif",
                textAlign: "center"
            }), P.addRule(".CPM-help-dialog-page > p", {
                marginBottom: "1em"
            }), P.addRule(".CPM-help-dialog-page > p:last-child", {
                marginBottom: 0
            }), P.addRule(".CPM-help-dialog-page > .copyright", {
                fontSize: "small",
                textAlign: "center"
            }), P.addRule(".CPM-table-of-contents", {
                margin: "0.5em 3em 0 1em",
                listStyleType: "none"
            }), P.addRule(".CPM-table-of-contents-section", {
                marginBottom: "0.5em",
                fontSize: "120%",
                fontWeight: "bold",
                fontFamily: "sans-serif"
            }), P.addRule(".CPM-table-of-contents-link", {
                color: "#00f",
                marginLeft: "2em",
                marginBottom: "0.5em",
                borderBottom: "1px solid #00f",
                lineHeight: "0.8em",
                cursor: "pointer"
            }), P.addRule(".CPM-table-of-contents-link > span:last-child", {
                cssFloat: "right"
            }), P.addRule(".CPM-table-of-contents > li:last-child", {
                marginBottom: 0
            }), P.addRule(".CPM-help-link", {
                color: "#00f",
                borderBottom: "1px solid #00f",
                cursor: "pointer"
            }), P.addRule(".CPM-help-dialog-icon", {
                cssFloat: "left",
                clear: "both",
                display: "inline-block",
                pointerEvents: "none",
                boxSizing: "border-box",
                textAlign: "center"
            }), P.addRule(".CPM-help-dialog-mockup", {
                position: "relative",
                width: "260px",
                margin: "1em auto",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                pointerEvents: "none",
                overflow: "hidden"
            }), i.styled = !0
        }
        return l.addPage = function(t, e) {
            var n = d.length > 0 ? d[d.length - 1] : null,
                i = CPM.Style.enable(document.createElement("div"));
            return n ? (i.previousPage = n, n.nextPage = i, i.style.display = "none", g.setAttribute("class", "enabled")) : (i.previousPage = null, p = i, f.firstChild.nodeValue = "1", c.firstChild.nodeValue = t ? " - " + t : ""), i.pageTitle = t, i.pageID = null != e ? e : t, i.nextPage = null, i.pageNumber = d.length + 1, i.setAttribute("class", "CPM-help-dialog-page"), i.addEventListener("touchstart", a, !1), l.appendChild(i), d.push(i), m.firstChild.nodeValue = i.pageNumber.toString(), i
        }, l.addTitlePage = function(t, e) {
            var n = this.addPage("Welcome"),
                i = document.createElement("h1"),
                o = y("© CPM Educational Program 2014");
            return i.appendChild(document.createTextNode(t)), o.setAttribute("class", "copyright"), n.appendChild(i), n.appendChild(o), e && e.singlePage || (n.epilogue = y("Click on 'Next ▶' below to get started!"), n.appendChild(n.epilogue), n.addContent = function(t) {
                this.insertBefore(t, this.epilogue)
            }), this.titlePage = n, n
        }, l.addTrayPage = function(i) {
            var o, a, r, s, d = l.addPage("The Toolbar"),
                p = document.createElement("div"),
                c = document.createElement("div");
            return d.appendChild(y("At the top of the tray is a menu bar like the one below.")), p.setAttribute("class", "CPM-help-dialog-mockup"), p.style.height = "40px", p.style.borderRight = "none", c.setAttribute("class", "CPM-tray-topbar"), o = document.createElement("button"), o.setAttribute("class", "CPM-tray-topbar-button"), t(o), c.appendChild(o), o = document.createElement("button"), o.setAttribute("class", "CPM-tray-topbar-button"), e(o), c.appendChild(o), o = document.createElement("button"), o.setAttribute("class", "CPM-tray-topbar-button"), n(o), o.style.cssFloat = "right", c.appendChild(o), o = document.createTextNode(i), c.appendChild(o), p.appendChild(c), d.appendChild(p), d.appendChild(n(x("CPM-tray-topbar-button"))), a = y("This button will hide the tray. When the tray is hidden, you can click on the button in the top left corner of the screen to show it again."), d.appendChild(a), d.setHideDescription = function(t) {
                a.firstChild.nodeValue = t
            }, d.appendChild(e(x("CPM-tray-topbar-button"))), r = y("This button will show the help, which you are currently reading."), d.appendChild(r), d.setHelpDescription = function(t) {
                r.firstChild.nodeValue = t
            }, d.appendChild(t(x("CPM-tray-topbar-button"))), s = y("This button will open a menu with more options."), d.appendChild(s), d.setGearDescription = function(t) {
                s.firstChild.nodeValue = t
            }, d
        }, l.addTableOfContents = function() {
            var t, e = this.addPage("Table of Contents"),
                n = document.createElement("ol");
            return n.setAttribute("class", "CPM-table-of-contents"), e.add = function(t) {
                var e = document.createElement("li");
                e.setAttribute("class", "CPM-table-of-contents-link"), e.appendChild(document.createElement("span")), e.lastChild.appendChild(document.createTextNode(t.pageTitle)), e.appendChild(document.createElement("span")), e.lastChild.appendChild(document.createTextNode(t.pageNumber)), e.addEventListener("click", function() {
                    l.goToPage(t)
                }, !1), n.appendChild(e)
            }, e.addSection = function(t) {
                var e = document.createElement("li");
                e.setAttribute("class", "CPM-table-of-contents-section"), e.appendChild(document.createTextNode(t)), n.appendChild(e)
            }, e.appendChild(n), h.setAttribute("class", "CPM-link-to-toc"), h.addEventListener("click", function() {
                l.goToPage(e)
            }, !1), t = y("Click on '"), t.appendChild(v("Table of Contents", "Page X of Y")), t.appendChild(document.createTextNode("' below at any time to see the table of contents.")), this.titlePage.appendChild(t), this.tableOfContents = e, e
        }, l.nextPage = function(t) {
            p && p.nextPage && (p.nextPage.style.display = "", t !== !0 ? (p.setTransition({
                display: "",
                opacity: 1
            }, {
                opacity: 0,
                transform: "translate3d(" + -p.offsetWidth + "px,0,0)"
            }, function() {
                this.style.display = "none"
            }), p.nextPage.setTransition({
                display: "",
                opacity: 0,
                transform: "translate3d(" + p.offsetWidth + "px,0,0)"
            }, {
                opacity: 1,
                transform: "translate3d(0,0,0)"
            })) : (p.setTransition({}, {
                transform: "translate3d(" + -p.offsetWidth + "px,0,0)"
            }, function() {
                this.style.display = "none"
            }, {
                type: "cubic-bezier(0,0,0,1)"
            }), p.nextPage.setTransition({}, {
                transform: "translate3d(0,0,0)"
            }, null, {
                type: "cubic-bezier(0,0,0,1)"
            })), f.firstChild.nodeValue = parseInt(f.firstChild.nodeValue) + 1, p = p.nextPage, c.firstChild.nodeValue = p.pageTitle ? " - " + p.pageTitle : "", p.nextPage || g.setAttribute("class", "disabled"), b.setAttribute("class", "enabled"))
        }, l.previousPage = function(t) {
            p && p.previousPage && (t !== !0 ? (p.setTransition({
                display: "",
                opacity: 1
            }, {
                opacity: 0,
                transform: "translate3d(420px,0,0)"
            }, function() {
                this.style.display = "none"
            }), p.previousPage.setTransition({
                display: "",
                opacity: 0,
                transform: "translate3d(-420px,0,0)"
            }, {
                opacity: 1,
                transform: "translate3d(0,0,0)"
            })) : (p.setTransition({}, {
                transform: "translate3d(" + p.offsetWidth + "px,0,0)"
            }, function() {
                this.style.display = "none"
            }, {
                type: "cubic-bezier(0,0,0,1)"
            }), p.previousPage.setTransition({}, {
                transform: "translate3d(0,0,0)"
            }, null, {
                type: "cubic-bezier(0,0,0,1)"
            })), f.firstChild.nodeValue = parseInt(f.firstChild.nodeValue) - 1, p = p.previousPage, c.firstChild.nodeValue = p.pageTitle ? " - " + p.pageTitle : "", p.previousPage || b.setAttribute("class", "disabled"), g.setAttribute("class", "enabled"))
        }, l.goToPage = function(t) {
            p && t && p !== t && (t.style.display = "", p.pageNumber < t.pageNumber ? (p.setTransition({
                display: "",
                opacity: 1
            }, {
                opacity: 0,
                transform: "translate3d(" + -p.offsetWidth + "px,0,0)"
            }, function() {
                this.style.display = "none"
            }), t.setTransition({
                display: "",
                opacity: 0,
                transform: "translate3d(" + p.offsetWidth + "px,0,0)"
            }, {
                opacity: 1,
                transform: "translate3d(0,0,0)"
            })) : (p.setTransition({
                display: "",
                opacity: 1
            }, {
                opacity: 0,
                transform: "translate3d(" + p.offsetWidth + "px,0,0)"
            }, function() {
                this.style.display = "none"
            }), t.setTransition({
                display: "",
                opacity: 0,
                transform: "translate3d(" + -p.offsetWidth + "px,0,0)"
            }, {
                opacity: 1,
                transform: "translate3d(0,0,0)"
            })), f.firstChild.nodeValue = t.pageNumber, p = t, c.firstChild.nodeValue = p.pageTitle ? " - " + p.pageTitle : "", p.nextPage ? g.setAttribute("class", "enabled") : g.setAttribute("class", "disabled"), p.previousPage ? b.setAttribute("class", "enabled") : b.setAttribute("class", "disabled"))
        }, l.lookup = function(t) {
            var e;
            for (e = 0; e < d.length; ++e)
                if (d[e].pageID === t) return d[e];
            return null
        }, g.addEventListener("click", l.nextPage, !1), b.addEventListener("click", l.previousPage, !1), l.setAttribute("class", "CPM-dialog CPM-help-dialog"), c.setAttribute("class", "CPM-help-dialog-title"), c.appendChild(document.createTextNode("")), l.dialogtitle.appendChild(document.createTextNode("Help")), l.dialogtitle.appendChild(c), f.appendChild(document.createTextNode("0")), m.appendChild(document.createTextNode("0")), h.appendChild(document.createTextNode("Page ")), h.appendChild(f), h.appendChild(document.createTextNode(" of ")), h.appendChild(m), b.appendChild(document.createTextNode("◀ Prev")), b.style.cssFloat = "left", g.appendChild(document.createTextNode("Next ▶")), g.style.cssFloat = "right", u.setAttribute("class", "CPM-dialog-footer CPM-help-dialog-footer"), u.appendChild(b), u.appendChild(g), u.appendChild(h), l.appendChild(u), l
    }
}(), CPM = window.CPM || {}, CPM.Base = CPM.Base || {}, CPM.Base.createSavePopup || (CPM.Base.createSavePopup = function t(e, n, i, o) {
    function a(t, e) {
        t.style.display = "", t.style.position = "absolute", t.setTransition({
            transform: "translate3d(0,-" + (t.offsetHeight + 10) + "px,0)"
        }, {
            transform: "translate3d(0,0,0)"
        }, e)
    }

    function r(t, e) {
        function n() {
            this.style.display = "none", this.style.top = "", "function" == typeof e && e.call(this)
        }
        t.setTransition({
            transform: "translate3d(0,0,0)"
        }, {
            transform: "translate3d(0,-" + (t.offsetHeight + 10) + "px,0)"
        }, n)
    }
    var s, l, d, p, c = CPM.Base.createDialog(e);
    if (!t.styled) {
        var u = CPM.Style.getStylesheet("main");
        u.addRule(".CPM-dialog.save-popup", {
            top: 0,
            maxWidth: "360px",
            borderTop: "none"
        }), u.addRule(".save-popup-area", {
            padding: "5px",
            textAlign: "center"
        }), u.addRule(".CPM-dialog.save-popup textarea", {
            width: "90%",
            height: "8em",
            resize: "none"
        }), t.styled = !0
    }
    return c.transitionIn = function(t) {
        a(this, function() {
            l && l.select(), "function" == typeof t && t.call(c)
        })
    }, c.transitionOut = function(t) {
        r(this, t)
    }, c.setAttribute("class", "CPM-dialog save-popup"), c.dialogarea = document.createElement("div"), c.dialogarea.setAttribute("class", "save-popup-area"), n !== i ? (c.dialogtitle.appendChild(document.createTextNode("Saved!")), c.dialogarea.appendChild(document.createTextNode("Bookmark or copy this link:")), c.dialogarea.appendChild(document.createElement("br")), s = (window.location.origin || window.location.protocol + "//" + window.location.hostname) + window.location.pathname + "?" + n, l = document.createElement("textarea"), l.appendChild(document.createTextNode(s)), c.dialogarea.appendChild(l), c.dialogarea.appendChild(document.createElement("br")), d = document.createElement("a"), d.setAttribute("target", "_blank"), d.setAttribute("href", s), "string" == typeof o && "" !== o ? (p = o.toLowerCase(), d.appendChild(document.createTextNode("Click here to open the saved " + p))) : d.appendChild(document.createTextNode("Click here to open the saved tool")), c.dialogarea.appendChild(d)) : (c.dialogtitle.appendChild(document.createTextNode("Error")), c.dialogarea.appendChild(document.createTextNode("Nothing to save"))), c.appendChild(c.dialogarea), c
}, CPM.Base.loadFromQuery = function(t, e, n) {
    "string" != typeof n && (n = "");
    var i, o, a = window.location.search.substring(1).split("&");
    for (i in a)
        if (o = a[i].split("="), o[0] === n + "data") break;
    if (void 0 !== o && o[0] === n + "data") try {
        t(e, o[1])
    } catch (r) {
        throw alert("A problem occurred while loading the tool."), r
    }
}, function() {
    function t(t) {
        function e(t, e) {
            var i;
            return "string" == typeof t ? (i = n.substr(0, n.indexOf(t)), e && (n = n.slice(n.indexOf(t) + t.length))) : (i = n.substr(0, t), e && (n = n.slice(t))), i
        }
        var n = t;
        this.chomp = function(t) {
            return e(t, !0)
        }, this.peek = function(t) {
            return e(t, !1)
        }, Object.defineProperties(this, {
            remaining: {
                get: function() {
                    return n
                }
            },
            length: {
                get: function() {
                    return n.length
                }
            }
        })
    }

    function e(t) {
        return t - Math.floor(t) < o ? Math.floor(t) : Math.ceil(t) - t < o ? Math.ceil(t) : t
    }

    function n(t) {
        this.chunks = [], this.set(t)
    }
    var i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+-_.0123456789",
        o = 1e-5;
    t.prototype.toString = function() {
        return this.remaining
    }, n.WORD_SIZE = i.length, n.CHUNK_WIDTH = 4, n.CHUNK_SIZE = Math.pow(n.WORD_SIZE, n.CHUNK_WIDTH), n.prototype.set = function(t) {
        var e, n;
        if (this.chunks.splice(0, this.chunks.length), "number" == typeof t && t >= 0) this.chunks[0] = t, this.add(0);
        else if ("object" == typeof t && t.chunks)
            for (e = 0, n = t.chunks.length; n > e; ++e) this.chunks[e] = t.chunks[e];
        else this.chunks[0] = 0;
        return this
    }, n.prototype.add = function(t) {
        var e, i;
        if ("number" == typeof t) {
            if (0 > t) return this.subtract(-t);
            for (this.chunks[0] += t, e = 0; e < this.chunks.length; ++e) this.chunks[e] >= n.CHUNK_SIZE && (this.chunks[e + 1] || (this.chunks[e + 1] = 0), this.chunks[e + 1] += Math.floor(this.chunks[e] / n.CHUNK_SIZE), this.chunks[e] = this.chunks[e] % n.CHUNK_SIZE)
        } else if ("object" == typeof t && t.chunks) {
            for (e = 0, i = t.chunks.length; i > e; ++e) this.chunks[e] || (this.chunks[e] = 0), this.chunks[e] += t.chunks[e];
            this.add(0)
        }
        return this
    }, n.prototype.subtract = function(t) {
        var e, i;
        if ("number" == typeof t) {
            if (0 > t) return this.add(-t);
            for (this.chunks[0] -= t, e = 0; this.chunks[e] < 0;) {
                if (null == this.chunks[e + 1] || this.chunks[e + 1] < 0) return this.set(0);
                i = Math.ceil(Math.abs(this.chunks[e]) / n.CHUNK_SIZE), this.chunks[e + 1] -= i, this.chunks[e] += i * n.CHUNK_SIZE, ++e
            }
        } else if ("object" == typeof t && t.chunks) {
            for (e = 0, i = t.chunks.length; i > e; ++e) this.chunks[e] || (this.chunks[e] = 0), this.chunks[e] -= t.chunks[e];
            this.subtract(0)
        }
        return this
    }, n.prototype.multiply = function(t) {
        var e, n;
        if ("number" == typeof t) {
            if (0 > t) return this.set(0);
            for (e = 0, n = this.chunks.length; n > e; ++e) this.chunks[e] *= t;
            this.add(0)
        } else "object" == typeof t && t.chunks;
        return this
    }, n.prototype.divide = function(t) {
        var e, i;
        if ("number" == typeof t) {
            if (0 > t) return this.set(0);
            for (e = this.chunks.length - 1; e >= 0; --e) i = this.chunks[e] % t, this.chunks[e] = Math.floor(this.chunks[e] / t), e > 0 && (this.chunks[e - 1] += i * n.CHUNK_SIZE)
        } else "object" == typeof t && t.chunks;
        return this.lastRemainder = i, this
    }, n.prototype.getWordLength = function() {
        var t = this.chunks.length - 1,
            i = 0;
        return i = 0 === this.chunks[t] ? 0 : 1 === this.chunks[t] ? 1 : Math.ceil(e(Math.log(this.chunks[t]) / Math.log(n.WORD_SIZE))), i += n.CHUNK_WIDTH * t
    }, n.prototype.extract = function() {
        var t, e, i = 0;
        for (t = 0, e = this.chunks.length; e > t; ++t) i += this.chunks[t] * Math.pow(n.CHUNK_SIZE, t);
        return i
    }, CPM.Base.Encoder = function() {
        var t = "";
        this.pushValue = function(e, n) {
            var o, a = "",
                r = i.length;
            if (e = Math.floor(e), 0 >= e) a = Number(n) > 0 ? new Array(n + 1).join(i[0]) : i[0];
            else {
                for (; e > 0;) e -= o = e % r, e /= r, a = i[o] + a;
                if (Number(n) > 0)
                    for (; a.length < n;) a = i[0] + a
            }
            return t += a, a
        }, this.pushDecimal = function(t, e, n, o) {
            var a = Math.pow(10, o),
                r = (n - e) * a,
                s = Math.ceil(Math.log(r) / Math.log(i.length)),
                l = Math.max(0, Math.min(r, t * a - e * a));
            return this.pushValue(l, s)
        }, this.pushChars = function(e) {
            return e = encodeURIComponent(e), t += e, e
        }, this.pushRawString = function(e) {
            var n = 0,
                o = 0,
                a = "";
            for (e = encodeURIComponent(e); e.length > 0;)
                if (o = n = e.indexOf("_"), -1 !== n) {
                    for (;
                        "_" !== i[o - n] && "_" === e[++o];);
                    a += e.slice(0, n), a += "_", a += i[o - n - 1], e = e.slice(o)
                } else a += e, e = "";
            return a += "__", t += a, a
        }, this.pack = function() {
            for (var t, e, o, a = (i.length, new n(0)), r = new n(1), s = 0, l = arguments.length; l > s + 1;) t = arguments[s], e = arguments[s + 1], a.multiply(e), a.add(t), r.multiply(e), s += 2;
            for (r.subtract(1), o = r.getWordLength(), l = r.chunks.length - 1, 0 !== o % n.CHUNK_WIDTH ? (this.pushValue(a.chunks[l] || 0, o % n.CHUNK_WIDTH), s = l - 1) : s = l; s >= 0;) this.pushValue(a.chunks[s] || 0, n.CHUNK_WIDTH), --s
        }, Object.defineProperties(this, {
            data: {
                get: function() {
                    return t
                }
            }
        })
    }, CPM.Base.Encoder.prototype.toString = function() {
        return this.data
    }, CPM.Base.Decoder = function(e) {
        function o(t) {
            for (var e = 0, n = i.length; t.length > 0;) e *= n, e += i.indexOf(t[0]), t = t.substring(1);
            return e
        }
        var a = new t(e);
        this.peekValue = function(t) {
            return o(a.peek(t))
        }, this.popValue = function(t) {
            return o(a.chomp(t))
        }, this.popDecimal = function(t, e, n) {
            var r = Math.pow(10, n),
                s = (e - t) * r,
                l = Math.ceil(Math.log(s) / Math.log(i.length)),
                d = o(a.chomp(l));
            return (d + t * r) / r
        }, this.peekChar = function() {
            return a.peek(1)
        }, this.popChars = function(t) {
            return a.chomp(t)
        }, this.hasRawString = function() {
            return a.remaining.indexOf("__") > -1
        }, this.popRawString = function() {
            for (var t, e, n, i = "", r = decodeURIComponent(a.chomp("__"));
                (t = r.indexOf("_")) > -1;) {
                for (i += r.slice(0, t), e = o(r[t + 1]), n = 0; e >= n; i += "_", ++n);
                r = r.slice(t + 2)
            }
            return i + r
        }, this.unpack = function() {
            var t, e, o = (i.length, new n(0)),
                a = new n(1),
                r = [],
                s = 0,
                l = arguments.length;
            for (s = 0; l > s; ++s) a.multiply(arguments[s]);
            for (a.subtract(1), t = a.getWordLength(), l = a.chunks.length - 1, 0 !== t % n.CHUNK_WIDTH ? (o.chunks[l] = this.popValue(t % n.CHUNK_WIDTH), s = l - 1) : s = l; s >= 0;) o.chunks[s] = this.popValue(n.CHUNK_WIDTH), --s;
            for (s = arguments.length - 1; s >= 0; --s) e = arguments[s], o.divide(e), r[s] = o.lastRemainder;
            return r
        }, Object.defineProperties(this, {
            data: {
                get: function() {
                    return a.toString()
                }
            }
        })
    }, CPM.Base.Decoder.prototype.toString = function() {
        return this.data
    }
}()), CPM = window.CPM || {}, CPM.Base = CPM.Base || {}, CPM.Base.createTray || ! function() {
    function t() {
        var e;
        t.applied || (e = CPM.Style.getStylesheet("probability"), e.addRule(".CPM-tray, .CPM-micro-tray", {
            position: "absolute",
            top: 0,
            left: 0,
            width: "260px",
            minHeight: "97px",
            borderRight: "1px solid #bbb",
            background: e.makeGradient("to bottom", "#fff 0%", "#fbfbfb 100%"),
            boxShadow: "-5px 0 10px 5px rgba(0,0,0,0.4)",
            zIndex: 10
        }), e.addRule(".CPM-tray", {
            bottom: 0
        }), e.addRule(".CPM-tray-topbar", {
            position: "relative",
            width: "100%",
            height: "40px",
            borderBottom: "1px solid #bbb",
            background: e.makeGradient("to bottom", "#fff 0%", "#ddd 100%"),
            cursor: "default",
            color: "#444",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            lineHeight: "40px",
            verticalAlign: "middle",
            whiteSpace: "nowrap"
        }), e.addRule(".CPM-tray-topbar-button", {
            position: "relative",
            cssFloat: "left",
            width: "30px",
            height: "30px",
            margin: "5px",
            cursor: "pointer",
            verticalAlign: "top",
            background: e.makeGradient("to bottom", "#fff 10%", "#ddd 90%"),
            border: "1px solid #bbb",
            borderRadius: "30px",
            boxShadow: "0 2px 2px rgba(0,0,0,0.2), inset 0 -2px 2px rgba(0,0,0,0.1), inset 0 2px 2px rgba(255,255,255,0.5)"
        }), e.addRule(".CPM-tray-topbar-button:hover:enabled", {
            background: e.makeGradient("to bottom", "#fff 20%", "#eee 90%"),
            boxShadow: "0 2px 6px rgba(0,0,0,0.4), inset 0 -2px 2px rgba(0,0,0,0.1), inset 0 2px 2px rgba(255,255,255,0.5)"
        }), e.addRule(".CPM-tray-topbar-button:active:enabled", {
            background: e.makeGradient("to bottom", "#fff 20%", "#eee 90%"),
            boxShadow: "0 2px 2px rgba(0,0,0,0.2), inset 0 2px 2px rgba(0,0,0,0.1), inset 0 -2px 2px rgba(255,255,255,0.5)"
        }), e.addRule(".cpm-tray-footer", {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "48px",
            lineHeight: "16px",
            padding: "4px 0",
            borderTop: "1px solid #bbb",
            backgroundColor: "#f8f8f8",
            textAlign: "center",
            fontSize: "10pt",
            fontFamily: "sans-serif"
        }), e.addRule(".cpm-tray-footer a", {
            color: "#888"
        }), e.addRule(".cpm-tray-footer a:hover", {
            color: "#444"
        }), e.addRule(".CPM-icon-question::before", {
            content: "'?'",
            lineHeight: "30px",
            color: "#444",
            fontFamily: "serif",
            fontSize: "30px",
            textShadow: "0 1px 0 #fff"
        }), e.addRule(".CPM-icon-triangle::before, .CPM-icon-triangle::after", {
            position: "absolute",
            content: "''",
            left: "50%",
            top: "50%",
            marginLeft: "-9px",
            marginTop: "-8px",
            border: "8px solid transparent"
        }), e.addRule(".CPM-icon-triangle.left::before", {
            marginTop: "-7px",
            borderLeft: "none",
            borderRight: "16px solid #fff"
        }), e.addRule(".CPM-icon-triangle.left::after", {
            borderLeft: "none",
            borderRight: "16px solid #444"
        }), e.addRule(".CPM-icon-triangle.right::before", {
            marginTop: "-7px",
            borderLeft: "16px solid #fff",
            borderRight: "none"
        }), e.addRule(".CPM-icon-triangle.right::after", {
            marginTop: "-8px",
            borderLeft: "16px solid #444",
            borderRight: "none"
        }), e.addRule(".CPM-icon-paper", {
            position: "absolute",
            left: "6px",
            top: "4px",
            width: "10px",
            height: "16px",
            border: "2px solid #444",
            borderRight: "none",
            borderRadius: "3px 0 0 3px"
        }), e.addRule(".CPM-icon-paper::after", {
            position: "absolute",
            content: "''",
            left: "10px",
            top: "12px",
            width: "3px",
            height: "4px",
            borderRight: "2px solid #444",
            borderBottom: "2px solid #444",
            borderRadius: "0 0 3px 0"
        }), e.addRule(".CPM-icon-paper > .CPM-icon-pencil", {
            position: "absolute",
            left: "8px",
            top: "3px",
            width: "8px",
            height: "4px",
            background: "#444",
            transform: "rotate(-70deg)"
        }), e.addRule(".CPM-icon-paper > .CPM-icon-pencil::before", {
            position: "absolute",
            content: "''",
            left: "-6px",
            top: 0,
            borderRight: "5px solid #444",
            borderTop: "2px solid transparent",
            borderBottom: "2px solid transparent"
        }), e.addRule(".CPM-icon-paper > .CPM-icon-pencil::after", {
            position: "absolute",
            content: "''",
            left: "9px",
            top: 0,
            border: "2px solid #444",
            borderLeft: "none",
            borderRadius: "0 2px 2px 0"
        }), e.addRule(".CPM-icon-paper > .CPM-icon-lines", {
            position: "absolute",
            left: "2px",
            top: "2px",
            width: "5px",
            height: "2px",
            borderTop: "6px double #444",
            borderRight: "2px solid transparent"
        }), e.addRule(".CPM-icon-paper > .CPM-icon-lines::before", {
            position: "absolute",
            content: "''",
            left: 0,
            top: "2px",
            width: "5px",
            borderBottom: "2px solid #444"
        }), e.addRule(".CPM-icon-paper.shadow", {
            top: "5px"
        }), e.addRule(".CPM-icon-paper.shadow, .CPM-icon-paper.shadow::after, .CPM-icon-paper.shadow > .CPM-icon-pencil::after, .CPM-icon-paper.shadow > .CPM-icon-lines::before", {
            borderColor: "white"
        }), e.addRule(".CPM-icon-paper.shadow > .CPM-icon-pencil", {
            background: "white"
        }), e.addRule(".CPM-icon-paper.shadow > .CPM-icon-pencil::before", {
            borderRightColor: "white"
        }), e.addRule(".CPM-icon-paper.shadow > .CPM-icon-lines", {
            borderTopColor: "white"
        }), e.addRule(".CPM-tray-options-menu", {
            position: "absolute",
            top: "35px",
            left: "4px",
            padding: "6px",
            border: "1px solid #bbb",
            borderRadius: "6px",
            background: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            listStyleType: "none",
            fontFamily: "sans-serif",
            zIndex: 20
        }), e.addRule(".CPM-tray-options-menu::before, .CPM-tray-options-menu::after", {
            content: "''",
            position: "absolute",
            left: "8px",
            border: "8px solid transparent",
            borderTop: "none",
            pointerEvents: "none"
        }), e.addRule(".CPM-tray-options-menu::before", {
            top: "-15px",
            borderBottom: "15px solid #bbb"
        }), e.addRule(".CPM-tray-options-menu::after", {
            top: "-13px",
            borderBottom: "15px solid #fff"
        }), e.addRule(".CPM-tray-options-menu > li", {
            fontSize: "14pt",
            padding: "4px",
            color: "#888",
            cursor: "pointer"
        }), e.addRule(".CPM-tray-options-menu > li:hover", {
            background: "rgba(64,192,255,0.2)"
        }), e.addRule(".CPM-tray-options-menu > li:active", {}), e.addRule(".CPM-tray-area", {
            position: "absolute",
            left: 0,
            right: 0,
            top: "41px",
            bottom: "57px",
            overflowX: "hidden",
            overflowY: "auto",
            cursor: "default"
        }), e.addRule(".CPM-tray-frame-title", {
            padding: "5px",
            borderBottom: "3px double #bbb",
            fontSize: "large",
            fontFamily: "sans-serif",
            fontWeight: "normal",
            color: "#444"
        }), e.addRule(".CPM-tray-frame-description", {
            padding: "5px",
            borderBottom: "1px solid #ddd",
            color: "#666",
            whiteSpace: "pre-line"
        }), e.addRule(".CPM-tray-frame-title-editor-wrapper", {
            position: "relative",
            height: "25px"
        }), e.addRule(".CPM-tray-frame-title-editor", {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "0 5px",
            borderBottom: "1px solid #eee"
        }), e.addRule(".CPM-tray-frame-title-editor input", {
            width: "100%",
            height: "100%",
            border: "none",
            margin: "none",
            background: "none",
            resize: "none",
            fontSize: "110%",
            verticalAlign: "top"
        }), e.addRule(".CPM-tray-frame-description-editor-wrapper", {
            position: "relative",
            height: "8em"
        }), e.addRule(".CPM-tray-frame-description-editor", {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "5px"
        }), e.addRule(".CPM-tray-frame-description-editor textarea", {
            width: "100%",
            height: "100%",
            border: "none",
            margin: "none",
            background: "none",
            resize: "none"
        }), e.addRule(".CPM-tray-show-button", {
            width: "40px",
            height: "40px",
            background: e.makeGradient("to bottom", "#fff 0%", "#ddd 100%"),
            position: "absolute",
            top: 0,
            left: 0,
            border: "1px solid #bbb",
            borderLeft: "none",
            borderTop: "none",
            borderBottomRightRadius: "6px",
            boxShadow: "0 0 5px 0 rgba(0,0,0,0.4)",
            cursor: "pointer",
            zIndex: 5,
            color: "#444",
            fontSize: "30px",
            textShadow: "0 1px 0 #fff",
            verticalAlign: "top",
            transition: "opacity 0.2s"
        }), e.addRule(".CPM-tray-show-button:hover", {
            background: e.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
            boxShadow: "-2px 0 7px 2px rgba(0,0,0,0.4)"
        }), e.addRule(".CPM-tray-show-button:active", {
            background: e.makeGradient("to bottom", "#fff 20%", "#eee 90%"),
            boxShadow: "0 2px 2px rgba(0,0,0,0.2), inset 0 2px 2px rgba(0,0,0,0.1), inset 0 -2px 2px rgba(255,255,255,0.5)"
        }), t.applied = !0)
    }

    function e(e) {
        function n(t) {
            t.stopImmediatePropagation()
        }
        t(), CPM.Base.makeEventReporter(this), this.parentApp = e, this.isMicroTray = !0, this.elementid = CPM.Style.enable(document.createElement("div")), this.elementid.setAttribute("class", "CPM-micro-tray"), this.topBar = new o(this, {
            options: !0,
            help: !0,
            hide: !1,
            title: ""
        }, e), this.elementid.appendChild(this.topBar.elementid), this.elementid.appendChild(l()), this.options = new d(this), this.elementid.appendChild(this.options.elementid), this.shown = !0, this.showButton = document.createElement("button"), this.showButton.setAttribute("class", "CPM-tray-show-button"), this.showButton.addEventListener("click", this.show.bind(this), !1), this.showButton.appendChild(document.createElement("div")), this.showButton.lastChild.setAttribute("class", "CPM-icon-triangle right"), this.showButton.addEventListener("mousedown", n, !1), this.showButton.addEventListener("touchstart", n, !1), this.showButton.style.display = "none"
    }

    function n() {
        this.showButton.style.display = "none"
    }

    function i() {
        this.showButton.style.opacity = "1", this.elementid.style.display = "none", this.shown = !1
    }

    function o(t, e, n) {
        this.parentTray = t, this.parentApp = n, this.elementid = document.createElement("div"), this.elementid.setAttribute("class", "CPM-tray-topbar"), e.options && this.addOptionsButton(), e.help && this.addHelpButton(), e.hide && this.addHideButton(), this.titleNode = document.createTextNode(""), this.elementid.appendChild(this.titleNode), null != e.title && this.setTitle(e.title)
    }

    function a() {
        this.parentTray.options.show()
    }

    function r() {
        this.parentApp.helpDialog && (this.parentApp.dialog === this.parentApp.helpDialog ? this.parentApp.helpDialog.hide() : this.parentApp.helpDialog.show())
    }

    function s() {
        this.parentTray.hide()
    }

    function l() {
        var t = document.createElement("div");
        t.setAttribute("class", "cpm-tray-footer"), t.innerHTML = "&copy; 2016 CPM Educational Program.<br>All rights reserved.";
        var e = document.createElement("a");
        e.setAttribute("href", "http://pdfs.cpm.org/information/CPM%20Website%20Privacy%20Policy.pdf"), e.innerHTML = "Privacy Policy";
        var n = document.createElement("div");
        return n.style.padding = "0 2em", n.appendChild(e), t.appendChild(n), t
    }

    function d(t) {
        this.parentTray = t, this.elementid = CPM.Style.enable(document.createElement("ul")), this.elementid.setAttribute("class", "CPM-tray-options-menu");
        var e = this.preserve.bind(this);
        this.elementid.addEventListener("mousedown", e, !1), this.elementid.addEventListener("touchstart", e, !1), this.elementid.style.display = "none"
    }

    function p() {
        this.context = CPM.Base.openContext(this.hide.bind(this))
    }

    function c() {
        this.shown = !1, this.elementid.style.display = "none", this.context && this.context.isOpen && this.context.close(!0), this.context = null, "function" == typeof _callback && _callback.call(this.parentTray)
    }

    function u() {
        this.style.display = "none", this.onHide && this.onHide()
    }

    function h(t) {
        var e = u.bind(this);
        !t && this.offsetWidth > 0 ? this.setTransition({
            left: 0,
            opacity: 1,
            transform: "translate3d(0,0,0)"
        }, {
            opacity: 0,
            transform: "translate3d(" + (-this.offsetWidth).toString() + "px,0,0)"
        }, e) : e()
    }

    function f(t) {
        this.onShow && this.onShow(), this.style.display = "", !t && this.offsetWidth > 0 && this.setTransition({
            position: "absolute",
            left: 0,
            opacity: 0,
            transform: "translate3d(" + (-this.offsetWidth).toString() + "px,0,0)"
        }, {
            opacity: 1,
            transform: "translate3d(0,0,0)"
        })
    }

    function m(t) {
        null != t && "" !== t ? (this.titleElement || (this.titleElement = document.createElement("h1"), this.titleElement.setAttribute("class", "CPM-tray-frame-title"), this.insertBefore(this.titleElement, this.firstChild)), this.titleElement.innerText ? this.titleElement.innerText = t : this.titleElement.textContent = t) : this.titleElement && (this.removeChild(this.titleElement), this.titleElement = null)
    }

    function b(t) {
        var e;
        null != t && "" !== t ? (this.descriptionElement || (this.descriptionElement = document.createElement("p"), this.descriptionElement.setAttribute("class", "CPM-tray-frame-description"), e = this.titleElement ? this.titleElement.nextSibling : this.firstChild, this.insertBefore(this.descriptionElement, e)), this.descriptionElement.innerText ? this.descriptionElement.innerText = t : this.descriptionElement.textContent = t) : this.descriptionElement && (this.removeChild(this.descriptionElement), this.descriptionElement = null)
    }

    function g(t) {
        var e = document.createElement("div");
        return e.wrapper = document.createElement("div"), e.input = document.createElement(t), e.wrapper.appendChild(e.input), e.appendChild(e.wrapper), e
    }

    function C() {
        var t = g("input");
        return t.setAttribute("class", "CPM-tray-frame-title-editor-wrapper"), t.wrapper.setAttribute("class", "CPM-tray-frame-title-editor"), t.input.placeholder = "Title", t
    }

    function y() {
        var t = g("textarea");
        return t.setAttribute("class", "CPM-tray-frame-description-editor-wrapper"), t.wrapper.setAttribute("class", "CPM-tray-frame-description-editor"), t.input.placeholder = "add a description", t
    }

    function x() {
        return this.titleInput.input.value
    }

    function v() {
        return this.descriptionInput.input.value
    }

    function P(t) {
        this.titleInput.input.value = t
    }

    function M(t) {
        this.descriptionInput.input.value = t
    }

    function w() {
        this.titleInput.input.value = "", this.descriptionInput.input.value = ""
    }

    function k(t) {
        t.pushRawString(this.getTitle()), t.pushRawString(this.getDescription())
    }

    function E(t) {
        this.titleInput.input.value = t.popRawString(), this.descriptionInput.input.value = t.popRawString()
    }
    CPM.Base.createTray = function(t) {
        return new e(t)
    }, e.prototype.addOption = function(t, e) {
        return this.options.addOption(t, e)
    }, e.prototype.removeOption = function(t) {
        this.options.removeOption(t)
    }, e.prototype.replaceOption = function(t, e, n) {
        this.options.replaceOption(t, e, n)
    }, e.prototype.setTitle = function(t, e) {
        this.topBar.setTitle(t, e)
    }, e.prototype.addFrame = function(t) {
        this.isMicroTray && (this.elementid.setAttribute("class", "CPM-tray"), this.topBar.addHideButton(), this.isMicroTray = !1), this.elementid.appendChild(t), this.currentFrame ? t.hide(!0) : this.setFrame(t)
    }, e.prototype.setFrame = function(t, e) {
        this.currentFrame !== t && (this.currentFrame && (this.currentFrame.hide(e), t.show(e)), this.currentFrame = t)
    }, e.prototype.attachTo = function(t) {
        t.appendChild(this.showButton), t.appendChild(this.elementid)
    }, e.prototype.getX = function() {
        return this.elementid.offsetLeft
    }, e.prototype.getY = function() {
        return this.elementid.offsetTop
    }, e.prototype.getWidth = function() {
        return this.elementid.offsetWidth
    }, e.prototype.getHeight = function() {
        return this.elementid.offsetHeight
    }, e.prototype.show = function() {
        this.shown || (this.shown = !0, this.elementid.style.display = "", this.showButton.style.opacity = "0", this.fireEvent("show", {
            openState: !0
        }), this.elementid.setTransition({
            transform: "translate3d(" + (-this.offsetWidth - 10).toString() + "px,0,0)"
        }, {
            transform: "translate3d(0,0,0)"
        }, n.bind(this)))
    }, e.prototype.hide = function() {
        this.shown && (this.showButton.style.opacity = "0", this.showButton.style.display = "", this.fireEvent("hide", {
            openState: !1
        }), this.elementid.setTransition({
            transform: "translate3d(0,0,0)"
        }, {
            transform: "translate3d(" + (-this.elementid.offsetWidth - 10) + "px,0,0)"
        }, i.bind(this)))
    }, o.prototype.addButton = function(t) {
        var e = document.createElement("button");
        return e.setAttribute("class", "CPM-tray-topbar-button"), e.addEventListener("click", t, !1), e
    }, o.prototype.addOptionsButton = function() {
        if (!this.optionsButton) {
            this.optionsButton = this.addButton(a.bind(this));
            var t = document.createElement("div");
            t.setAttribute("class", "CPM-icon-paper"), t.appendChild(document.createElement("div")), t.lastChild.setAttribute("class", "CPM-icon-lines"), t.appendChild(document.createElement("div")), t.lastChild.setAttribute("class", "CPM-icon-pencil"), this.optionsButton.appendChild(t.cloneNode(!0)), this.optionsButton.lastChild.setAttribute("class", "CPM-icon-paper shadow"), this.optionsButton.appendChild(t), this.elementid.firstChild ? this.elementid.insertBefore(this.optionsButton, this.elementid.firstChild) : this.elementid.appendChild(this.optionsButton)
        }
    }, o.prototype.addHelpButton = function() {
        if (!this.helpButton) {
            this.helpButton = this.addButton(r.bind(this));
            var t = document.createElement("div");
            t.setAttribute("class", "CPM-icon-question"), this.helpButton.appendChild(t), this.hideButton ? this.elementid.insertBefore(this.helpButton, this.hideButton) : this.titleNode ? this.elementid.insertBefore(this.helpButton, this.titleNode) : this.elementid.appendChild(this.helpButton)
        }
    }, o.prototype.addHideButton = function() {
        if (!this.hideButton) {
            this.hideButton = this.addButton(s.bind(this)), this.hideButton.style.cssFloat = "right";
            var t = document.createElement("div");
            t.setAttribute("class", "CPM-icon-triangle left"), this.hideButton.appendChild(t), this.titleNode ? this.elementid.insertBefore(this.hideButton, this.titleNode) : this.elementid.appendChild(this.hideButton)
        }
    }, o.prototype.setTitle = function(t, e) {
        this.titleNode.nodeValue = t, e && (this.elementid.style.fontSize = e)
    }, d.prototype.addOption = function(t, e) {
        var n = document.createElement("li");
        return n.innerHTML = t, n.callback = e, n.parentMenu = this, n.addEventListener("click", function() {
            this.parentMenu.hide(this.callback), "function" == typeof this.callback && this.callback()
        }, !1), this.elementid.appendChild(n), n
    }, d.prototype.removeOption = function(t) {
        t.callback = null, t.parentMenu = null, this.elementid.removeChild(t)
    }, d.prototype.replaceOption = function(t, e, n) {
        t.innerHTML = e, t.callback = n
    }, d.prototype.show = function() {
        this.shown || (this.shown = !0, this.elementid.style.display = "", this.elementid.setTransition({
            opacity: 0
        }, {
            opacity: 1
        }, p.bind(this)))
    }, d.prototype.hide = function() {
        this.shown && this.elementid.setTransition({
            opacity: 1
        }, {
            opacity: 0
        }, c.bind(this))
    }, d.prototype.preserve = function() {
        this.context && this.context.preserve()
    }, CPM.Base.createTrayFrame = function(t) {
        var e = CPM.Style.enable(document.createElement("div"));
        return e.hide = h, e.show = f, e.setTitle = m, e.setDescription = b, e.parentApp = t, e.setAttribute("class", "CPM-tray-area"), e
    }, CPM.Base.createTrayFrameEditors = function() {
        var t = document.createElement("div");
        return t.titleInput = C(), t.descriptionInput = y(), t.getTitle = x, t.getDescription = v, t.setTitle = P, t.setDescription = M, t.clear = w, t.save = k, t.load = E, t.appendChild(t.titleInput), t.appendChild(t.descriptionInput), t
    }
}(), CPM = window.CPM || {}, CPM.Base = CPM.Base || {}, CPM.Base.openContext || ! function() {
    function t() {
        var t, e;
        for (t = 0, e = i.length; e > t; ++t) i[t].invalidate()
    }

    function e() {
        for (var n, o = i.slice(); o.length > 0;) n = o.pop(), n.isOpen && !n.isValid && n.close();
        0 === i.length && (document.removeEventListener("mousedown", t, !0), document.removeEventListener("touchstart", t, !0), document.removeEventListener("mousedown", e, !1), document.removeEventListener("touchstart", e, !1))
    }

    function n(n) {
        0 === i.length && (document.addEventListener("mousedown", t, !0), document.addEventListener("touchstart", t, !0), document.addEventListener("mousedown", e, !1), document.addEventListener("touchstart", e, !1)), this.isValid = !0, this.isOpen = !0, this.onClose = n, i.push(this)
    }
    var i = [];
    n.prototype.invalidate = function() {
        this.isValid = !1
    }, n.prototype.preserve = function() {
        this.isValid = !0
    }, n.prototype.close = function(t) {
        this.isOpen && (this.isOpen = !1, i.splice(i.indexOf(this), 1), t || "function" != typeof this.onClose || this.onClose())
    }, CPM.Base.openContext = function(t) {
        return new n(t)
    }
}(), CPM = window.CPM || {}, CPM.UI = CPM.UI || {}, CPM.UI.addZoomButtons || ! function() {
    function t() {
        var e;
        t.applied || (e = CPM.Style.getStylesheet("main"), e.addRule(".CPM-zoom-button", {
            position: "absolute",
            top: "10px",
            right: "10px",
            paddingLeft: "5px",
            width: "35px",
            height: "40px",
            fontFamily: "monospace",
            fontSize: "21px",
            fontWeight: "bold",
            color: "#444",
            cursor: "pointer",
            userSelect: "none",
            opacity: .5
        }), e.addRule(".CPM-zoom-button::before", {
            position: "absolute",
            content: "''",
            top: 0,
            left: 0,
            width: "17px",
            height: "17px",
            border: "3px solid #444",
            borderRadius: "20px"
        }), e.addRule(".CPM-zoom-button::after", {
            position: "absolute",
            content: "''",
            top: "19px",
            left: "22px",
            width: "14px",
            height: "4px",
            background: "#444",
            transform: "rotate(45deg)",
            transformOrigin: "0 0"
        }), e.addRule(".CPM-zoom-button:hover", {
            opacity: .8
        }), e.addRule(".CPM-zoom-button:active", {
            opacity: 1
        }), e.addRule(".CPM-zoom-button.zoom-out", {
            position: "absolute",
            top: "60px",
            right: "10px"
        }), t.applied = !0)
    }
    CPM.UI.addZoomButtons = function(e) {
        var n = document.createElement("a"),
            i = document.createElement("a");
        t(), n.setAttribute("class", "CPM-zoom-button zoom-in"), n.appendChild(document.createTextNode("+")), n.addEventListener("click", function() {
            e.zoomIn()
        }, !1), i.setAttribute("class", "CPM-zoom-button zoom-out"), i.appendChild(document.createTextNode("-")), i.addEventListener("click", function() {
            e.zoomOut()
        }, !1), e.appendChild(n), e.appendChild(i)
    }
}(), CPM = window.CPM || {}, CPM.Graph3d = CPM.Graph3d || {}, CPM.Graph3d.Vector3d || ! function() {
    function t(t) {
        return Math.abs(t) < .001 ? 0 : t
    }

    function e(t, e, n) {
        this.x = t || 0, this.y = e || 0, this.z = n || 0
    }

    function n(t, e, n, i) {
        this.x = t || 1, this.y = e || 0, this.z = n || 0, this.w = i || 0
    }
    e.prototype.setValues = function(t, e, n) {
        return this.x = t, this.y = e, this.z = n, this
    }, e.prototype.copyValues = function(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this
    }, e.prototype.normalize = function() {
        var e = 1 / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        return this.x = t(this.x * e), this.y = t(this.y * e), this.z = t(this.z * e), this
    }, e.prototype.dot = function(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z
    }, e.prototype.cross = function(t) {
        var e = this.y * t.z - this.z * t.y,
            n = this.z * t.x - this.x * t.z,
            i = this.x * t.y - this.y * t.x;
        return this.x = e, this.y = n, this.z = i, this
    }, e.prototype.rotate = function() {
        var t = new e(0, 0, 0);
        return function(e, n) {
            var i = Math.cos(n),
                o = Math.sin(n),
                a = 1 - i,
                r = this.dot(e),
                s = this.x * i,
                l = this.y * i,
                d = this.z * i,
                p = e.x * r * a,
                c = e.y * r * a,
                u = e.z * r * a;
            return t.copyValues(e), t.cross(this), t.x *= o, t.y *= o, t.z *= o, this.x = s + t.x + p, this.y = l + t.y + c, this.z = d + t.z + u, this
        }
    }(), e.prototype.toString = function() {
        return "(" + this.x + "," + this.y + "," + this.z + ")"
    }, n.prototype.setValues = function(t, e, n, i) {
        return this.x = t, this.y = e, this.z = n, this.w = i, this
    }, n.prototype.copyValues = function(t) {
        return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w, this
    }, n.prototype.fromAxisAngle = function(t, e, n, i) {
        var o, a;
        if (2 === arguments.length) {
            var r = t;
            i = e, t = r.x, e = r.y, n = r.z
        }
        return i /= 2, o = 1 / Math.sqrt(t * t + e * e + n * n), a = Math.sin(i), this.x = a * t * o, this.y = a * e * o, this.z = a * n * o, this.w = Math.cos(i), this
    }, n.prototype.toAxisAngle = function(e) {
        var n;
        return "object" != typeof e ? null : (this.normalize(), n = t(Math.sqrt(1 - this.w * this.w)), 0 !== n && (n = 1 / n), e[0] = this.x * n, e[1] = this.y * n, e[2] = this.z * n, e[3] = 2 * Math.acos(this.w), e)
    }, n.prototype.toMatrix = function(t) {
        return "object" != typeof t ? null : (t[0] = 1 - 2 * (this.y * this.y + this.z * this.z), t[1] = 2 * (this.x * this.y + this.z * this.w), t[2] = 2 * (this.x * this.z + this.y * this.w), t[3] = 0, t[4] = 2 * (this.x * this.y - this.z * this.w), t[5] = 1 - 2 * (this.x * this.x + this.z * this.z), t[6] = 2 * (this.y * this.z + this.x * this.w), t[7] = 0, t[8] = 2 * (this.x * this.z + this.y * this.w), t[9] = 2 * (this.y * this.z - this.x * this.w), t[10] = 1 - 2 * (this.x * this.x + this.y * this.y), t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
    }, n.prototype.normalize = function() {
        var e = 1 / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        return this.x = t(this.x * e), this.y = t(this.y * e), this.z = t(this.z * e), this.w = t(this.w * e), this
    }, n.prototype.multiply = function() {
        return function(t) {
            var e = this.w * t.w - this.x * t.x - this.y * t.y - this.z * t.z,
                n = this.w * t.x + this.x * t.w + this.y * t.z - this.z * t.y,
                i = this.w * t.y - this.x * t.z + this.y * t.w + this.z * t.x,
                o = this.w * t.z + this.x * t.y - this.y * t.x + this.z * t.w;
            return this.w = e, this.x = n, this.y = i, this.z = o, this
        }
    }(), n.prototype.rotate = function() {
        var t = new n;
        return function(e, n) {
            return t.copyValues(this), this.fromAxisAngle(e, n), this.multiply(t).normalize()
        }
    }(), CPM.Graph3d.Vector3d = e, CPM.Graph3d.Quaternion = n
}(), CPM = window.CPM || {}, CPM.Graph3d = CPM.Graph3d || {}, CPM.Graph3d.addAxes || ! function() {
    function t() {
        if (!t.applied) {
            var e = CPM.Style.getStylesheet("graph3d");
            e.addRule(".axis", {
                position: "absolute",
                top: "-0.05em",
                borderTop: "0.1em solid #888",
                transformOrigin: "0 0.05em",
                transformStyle: "preserve-3d"
            }), e.addRule(".axis::before", {
                position: "absolute",
                content: "''",
                width: "100%",
                top: "-0.1em",
                borderTop: "inherit",
                transform: "rotateX(90deg)",
                transformOrigin: "0 0.05em"
            }), e.addRule(".axis > div::before", {
                position: "absolute",
                content: "''",
                right: "-0.1em",
                top: "-0.3em",
                border: "0.25em solid transparent",
                borderLeft: "0.5em solid #888",
                borderRight: "none"
            }), e.addRule(".axis > div::after", {
                position: "absolute",
                content: "''",
                left: "-0.1em",
                top: "-0.3em",
                border: "0.25em solid transparent",
                borderLeft: "none",
                borderRight: "0.5em solid #888"
            }), e.addRule(".axis-label", {
                width: "2em",
                height: "2em",
                lineHeight: "2em",
                marginLeft: "-1em",
                marginTop: "-1em",
                textAlign: "center",
                verticalAlign: "center",
                color: "#888",
                fontSize: "13pt",
                fontWeight: "bold",
                fontStyle: "italic"
            }), e.addRule(".grid", {
                position: "absolute",
                transformStyle: "preserve-3d",
                backgroundImage: e.makeGradient("to bottom", "rgba(0,0,0,0.15) 0%", "rgba(0,0,0,0.15) 5%", "rgba(0,0,0,0) 5%", "rgba(0,0,0,0) 95%", "rgba(0,0,0,0.15) 95%", "rgba(0,0,0,0.15) 100%") + ", " + e.makeGradient("to right", "rgba(0,0,0,0.15) 0%", "rgba(0,0,0,0.15) 5%", "rgba(0,0,0,0.0) 5%", "rgba(0,0,0,0.0) 95%", "rgba(0,0,0,0.15) 95%", "rgba(0,0,0,0.15) 100%"),
                backgroundSize: "1em 1em, 1em 1em"
            }), e.addRule(".grid.grid-xy", {}), e.addRule(".grid.grid-yz", {
                transform: "rotateY(90deg)"
            }), e.addRule(".grid.grid-xz", {
                transform: "rotateX(90deg)"
            }), t.applied = !0
        }
    }
    CPM.Graph3d.addAxes = function(e) {
        var n = CPM.Style.enable(document.createElement("div")),
            i = CPM.Style.enable(document.createElement("div")),
            o = CPM.Style.enable(document.createElement("div")),
            a = CPM.Style.enable(document.createElement("div")),
            r = CPM.Style.enable(document.createElement("div")),
            s = CPM.Style.enable(document.createElement("div")),
            l = document.createElement("div"),
            d = document.createElement("div"),
            p = document.createElement("div"),
            c = document.createElement("div"),
            u = document.createElement("div"),
            h = document.createElement("div"),
            f = CPM.Graph3d.makeBillboard;
        t(), n.setAttribute("class", "axis axis-x"), i.setAttribute("class", "axis axis-y"), o.setAttribute("class", "axis axis-z"), n.appendChild(document.createElement("div")), i.appendChild(document.createElement("div")), o.appendChild(document.createElement("div")), a.setAttribute("class", "grid grid-xy"), r.setAttribute("class", "grid grid-yz"), s.setAttribute("class", "grid grid-xz"), l.setAttribute("class", "axis-label"), d.setAttribute("class", "axis-label"), p.setAttribute("class", "axis-label"), c.setAttribute("class", "axis-label"), u.setAttribute("class", "axis-label"), h.setAttribute("class", "axis-label"), l.appendChild(document.createTextNode("+ x")), d.appendChild(document.createTextNode("– x")), p.appendChild(document.createTextNode("+ y")), c.appendChild(document.createTextNode("– y")), u.appendChild(document.createTextNode("+ z")), h.appendChild(document.createTextNode("– z")), l = f(l), d = f(d), p = f(p), c = f(c), u = f(u), h = f(h), e.appendChild(n), e.appendChild(i), e.appendChild(o), e.appendChild(a), e.appendChild(r), e.appendChild(s), e.appendChild(l), e.appendChild(d), e.appendChild(p), e.appendChild(c), e.appendChild(u), e.appendChild(h), e.showAxes = function() {
            n.style.display = "", i.style.display = "", o.style.display = "", l.style.display = "", d.style.display = "", p.style.display = "", c.style.display = "", u.style.display = "", h.style.display = ""
        }, e.hideAxes = function() {
            n.style.display = "none", i.style.display = "none", o.style.display = "none", l.style.display = "none", d.style.display = "none", p.style.display = "none", c.style.display = "none", u.style.display = "none", h.style.display = "none"
        }, e.setAxesLength = function(t, e, f) {
            n.setStyle({
                width: 2 * t + 2 + "em",
                transform: "translate3d(-" + (t + 1) + "em,0,0)"
            }), i.setStyle({
                width: 2 * e + 2 + "em",
                transform: "translate3d(0,-" + (e + 1) + "em,0) rotateZ(90deg)"
            }), o.setStyle({
                width: 2 * f + 2 + "em",
                transform: "translate3d(0,0,-" + (f + 1) + "em) rotateY(-90deg)"
            }), a.setStyle({
                left: "-" + t + "em",
                top: "-" + e + "em",
                width: 2 * t + "em",
                height: 2 * e + "em",
                backgroundPosition: t + "em " + e + "em, " + t + "em " + e + "em"
            }), r.setStyle({
                left: "-" + f + "em",
                top: "-" + e + "em",
                width: 2 * f + "em",
                height: 2 * e + "em",
                backgroundPosition: f + "em " + e + "em, " + f + "em " + e + "em"
            }), s.setStyle({
                left: "-" + t + "em",
                top: "-" + f + "em",
                width: 2 * t + "em",
                height: 2 * f + "em",
                backgroundPosition: t + "em " + f + "em, " + t + "em " + f + "em"
            }), l.transform("translate3d(" + (t + 2) + "em,0,0)"), d.transform("translate3d(-" + (t + 2) + "em,0,0)"), p.transform("translate3d(0," + (e + 2) + "em,0)"), c.transform("translate3d(0,-" + (e + 2) + "em,0)"), u.transform("translate3d(0,0," + (f + 2) + "em)"), h.transform("translate3d(0,0,-" + (f + 2) + "em)")
        }, e.showGrids = function(t, e, n) {
            a.style.display = t ? "" : "none", r.style.display = e ? "" : "none", s.style.display = n ? "" : "none"
        }, e.showGrids(!0, !1, !1), e.setAxesLength(15, 15, 15)
    }
}(), CPM = window.CPM || {}, CPM.Graph3d = CPM.Graph3d || {}, CPM.Graph3d.createViewport || ! function() {
    CPM.Graph3d.makeBillboard = function(t) {
        var e = CPM.Style.enable(document.createElement("div"));
        return e.setAttribute("class", "billboard"), e.appendChild(t), e.billboardElement = t, e
    }, CPM.Graph3d.createViewport = function t(e) {
        function n(t) {
            t ? c.origin3d.setTransition({}, {
                transform: c.getTransformation() + " scaleY(-1)"
            }, function() {
                a && a.transform("scaleY(-1) " + c.getReverseTransformation())
            }) : (c.origin3d.transform(c.getTransformation() + " scaleY(-1)"), a && a.transform("scaleY(-1) " + c.getReverseTransformation()))
        }

        function i(t) {
            var e = null != t.deltaY ? t.deltaY : null != t.wheelDelta ? -t.wheelDelta : t.detail;
            e > 0 ? this.zoomOut(!0) : this.zoomIn(!0)
        }

        function o(t) {
            c.style.left = t.openState ? "260px" : 0
        }
        var a, r, s = 10,
            l = 50,
            d = CPM.Graph3d.Quaternion,
            p = CPM.Graph3d.Vector3d,
            c = document.createElement("div"),
            u = (new d).fromAxisAngle(.54, -1, 1.7, 2.3);
        return t.styled || ! function() {
                var e = CPM.Style.getStylesheet("graph3d");
                e.addRule("#viewport-3d", {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    perspective: "0px",
                    transformStyle: "preserve-3d"
                }), e.addRule("#world-3d", {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transformStyle: "preserve-3d",
                    pointerEvents: "none"
                }), r = e.addRule("#world-3d", {
                    fontSize: "20px",
                    transition: "font-size 0.2s"
                }), r.currentSize = 20, e.addRule(".billboard", {
                    position: "absolute",
                    transformStyle: "preserve-3d",
                    transformOrigin: "50% 50%",
                    backfaceVisibility: "hidden"
                }), a = e.addRule(".billboard>*", {
                    transformOrigin: "50% 50%"
                }), t.styled = !0
            }(),
            function() {
                var t = new p,
                    e = [0, 0, 0, 0];
                c.spin = function(e, i) {
                    var o = Math.sqrt(e * e + i * i);
                    t.setValues(-i, e, 0).normalize(), u.rotate(t, o * Math.PI / 320), n()
                }, c.turn = function(e) {
                    0 !== e && (t.setValues(0, 0, 1), u.rotate(t, e * Math.PI / 320), n())
                }, c.lookToward = function(t, e, i, o, a, r, s) {
                    var l, d = new p(t, e, i).normalize(),
                        c = new p(o, a, r).normalize().cross(d).normalize(),
                        h = (new p).copyValues(d).cross(c).normalize();
                    l = .5 * Math.sqrt(1 + c.x + h.y + d.z), 0 !== l ? (u.w = l, l = 1 / (4 * l), u.x = (d.y - h.z) * l, u.y = (c.z - d.x) * l, u.z = (h.x - c.y) * l) : c.x > h.y && c.x > d.z ? (u.x = .5 * Math.sqrt(1 + c.x - h.y - d.z), l = 1 / (4 * u.x), u.y = (h.x + c.y) * l, u.z = (c.z + d.x) * l, u.w = (d.y - h.z) * l) : h.y > d.z ? (u.y = .5 * Math.sqrt(1 - c.x + h.y - d.z), l = 1 / (4 * u.y), u.x = (h.x + c.y) * l, u.z = (d.y + h.z) * l, u.w = (c.z - d.x) * l) : (u.z = .5 * Math.sqrt(1 - c.x - h.y + d.z), l = 1 / (4 * u.z), u.x = (c.z + d.x) * l, u.y = (d.y + h.z) * l, u.w = (h.x - c.y) * l), u.normalize(), n(s)
                }, c.getTransformation = function() {
                    return u.toAxisAngle(e), "rotate3d(" + e[0] + "," + e[1] + "," + e[2] + "," + e[3] + "rad)"
                }, c.getReverseTransformation = function() {
                    return u.toAxisAngle(e), "rotate3d(" + e[0] + "," + e[1] + "," + e[2] + "," + -e[3] + "rad)"
                }
            }(), c.enablePointerEvents = function() {
                this.origin3d.setStyle({
                    pointerEvents: "auto"
                })
            }, c.disablePointerEvents = function() {
                this.origin3d.setStyle({
                    pointerEvents: ""
                })
            }, c.setZoomLevel = function(t, e, n) {
                3 === arguments.length && (s = e, l = n), r.currentSize = Math.round(Math.min(Math.max(t, s), l)), r.style.fontSize = r.currentSize + "px"
            }, c.zoomIn = function(t) {
                r.currentSize *= t ? 1.2 : 1.5, r.currentSize = Math.round(Math.min(Math.max(r.currentSize, s), l)), r.style.fontSize = r.currentSize + "px"
            }, c.zoomOut = function(t) {
                r.currentSize /= t ? 1.2 : 1.5, r.currentSize = Math.round(Math.min(Math.max(r.currentSize, s), l)), r.style.fontSize = r.currentSize + "px"
            }, "onwheel" in document.createElement("div") ? c.addEventListener("wheel", i, !1) : void 0 !== document.onmousewheel ? c.addEventListener("mousewheel", i, !1) : c.addEventListener("DOMMouseScroll", i, !1), CPM.Base.delegateEvents(c, {
                validateMouseClick: function(t) {
                    return t.target === c && 0 === t.button
                },
                validateTouch: function(t) {
                    return t.target === c
                },
                onAnimationFrame: function() {
                    (this.lastX !== this.posX || this.lastY !== this.posY) && (this.spin(this.posX - this.lastX, this.posY - this.lastY), this.lastX = this.posX, this.lastY = this.posY)
                },
                onHit: function(t, e) {
                    this.hitX = t, this.hitY = e, this.startX = this.posX, this.startY = this.posY, this.lastX = this.posX, this.lastY = this.posY, CPM.Style.getStylesheet("main").lockCursor("all-scroll")
                },
                onMove: function(t, e) {
                    this.posX = this.startX + t - this.hitX, this.posY = this.startY + e - this.hitY
                },
                onRelease: function() {
                    CPM.Style.getStylesheet("main").unlockCursor(), this.activate()
                }
            }, !0), e.tray && (e.tray.addCustomEventListener("show", o), e.tray.addCustomEventListener("hide", o), c.style.left = "260px", CPM.Style.enable(c).setStyle({
                transition: "left 0.2s"
            })), c.setAttribute("id", "viewport-3d"), c.origin3d = CPM.Style.enable(document.createElement("div")), c.origin3d.setAttribute("id", "world-3d"), c.appendChild(c.origin3d), CPM.UI.addZoomButtons(c), n(), c.posX = 0, c.posY = 0, c
    }
}(), CPM = window.CPM || {}, CPM.Graph3d = CPM.Graph3d || {}, CPM.Graph3d.createListFrame || (CPM.Graph3d.createListFrame = function(t) {
    function e(e) {
        var n = document.createElement("em"),
            i = CPM.UI.createToggleButton(" - grid"),
            o = "grid" + e.toUpperCase();
        return n.appendChild(document.createTextNode(e)), i.lastChild.insertBefore(n, i.lastChild.firstChild), i.addCustomEventListener("change", function(e) {
            a[o] = e.value, t.world.showGrids(a.gridXY, a.gridYZ, a.gridXZ)
        }), i
    }

    function n() {
        p.renumber(l.childNodes.length + 1)
    }

    function i(t) {
        d && (d.itemPoint || d.itemPlane).hideEditors(), t.item && (t.item !== d ? ((t.item.itemPoint || t.item.itemPlane).showEditors(), d = t.item) : (l.select(null), d = null))
    }
    var o = Object.keys(CPM.Graph3d.COLORS),
        a = CPM.Base.createTrayFrame(t),
        r = CPM.UI.createFoldingList(),
        s = document.createElement("div"),
        l = CPM.UI.createShuffleList(),
        d = null;
    ! function() {
        var t, e, n = CPM.Style.getStylesheet("graph3d"),
            i = CPM.Graph3d.COLORS,
            o = 18;
        n.addRule(".plot3d-options", {
            padding: "0 20px"
        }), n.addRule(".list-object-3d-label", {
            paddingLeft: "40px",
            paddingRight: "40px",
            height: "24px"
        }), n.addRule(".list-object-3d-editor", {
            marginTop: "12px"
        }), n.addRule(".number-field-label", {
            padding: "0 8px",
            fontStyle: "italic"
        }), n.addRule(".trail-button, .intercept-button, .color-picker-button", {
            position: "absolute",
            top: "4px",
            width: "32px",
            height: "32px",
            border: "1px solid #ccc",
            borderRadius: "32px",
            background: n.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
            boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
            cursor: "pointer",
            verticalAlign: "middle"
        }), n.addRule(".trail-button:active, .trail-button.activated, .intercept-button:active, .intercept-button.activated, .color-picker-button:active, .color-picker-button.activated", {
            background: n.makeGradient("to bottom", "#ccc 0%", "#eee 100%")
        }), n.addRule(".trail-button:hover, .intercept-button:hover, .color-picker-button:hover", {
            boxShadow: "0 0 6px rgba(128,192,224,1)"
        }), n.addRule(".color-picker-button", {
            left: "36px"
        }), n.addRule(".color-picker-button::before", {
            position: "absolute",
            content: "''",
            left: (30 - o) / 2 + "px",
            top: (30 - o) / 2 + "px",
            width: o + "px",
            height: o + "px",
            backgroundImage: n.makeGradient("to bottom", "rgba(255,255,255,0.2) 0%", "rgba(255,255,255,0) 50%", "rgba(0,0,0,0) 50%", "rgba(0,0,0,0.2) 100%"),
            borderRadius: o + "px",
            boxShadow: "0 -1px 1px rgba(0,0,0,0.2), 0 1px 1px rgba(255,255,255,0.5), inset 0 0 1px rgba(0,0,0,0.5)"
        }), n.addRule(".color-picker-button:active", {
            background: n.makeGradient("to bottom", "#ccc 0%", "#eee 100%")
        }), n.addRule(".point-3d-color-menu", {
            background: "#fff",
            border: "1px solid #000"
        }), e = i.length;
        for (t in i) i.hasOwnProperty(t) && n.addRule(".color-picker-button." + t + "::before", {
            backgroundColor: i[t]
        });
        n.addRule(".trail-button, .intercept-button", {
            right: "24px"
        }), n.addRule(".trail-button::before", {
            position: "absolute",
            content: "''",
            left: "8px",
            top: "13px",
            height: "10px",
            borderRight: "2px dotted #888",
            boxShadow: "0 1px #fff"
        }), n.addRule(".trail-button > div", {
            position: "absolute",
            left: "6px",
            top: "10px",
            width: "6px",
            height: "6px",
            borderRadius: "6px",
            background: "#888",
            boxShadow: "0 1px #fff"
        }), n.addRule(".trail-button > div::before", {
            position: "absolute",
            content: "''",
            left: "9px",
            top: "-2px",
            width: "10px",
            borderTop: "2px dotted #888",
            boxShadow: "0 1px #fff",
            transform: "rotate(30deg)",
            transformOrigin: "0 1px"
        }), n.addRule(".trail-button > div::after", {
            position: "absolute",
            content: "''",
            left: "3px",
            top: "13px",
            width: "18px",
            borderTop: "2px dotted #888",
            boxShadow: "0 1px #fff",
            transform: "rotate(-30deg)",
            transformOrigin: "0 1px"
        }), n.addRule(".intercept-button::before", {
            position: "absolute",
            content: "''",
            left: "14px",
            top: "5px",
            height: "20px",
            borderRight: "2px solid #888",
            boxShadow: "-1px 1px #fff",
            transform: "rotate(-60deg)"
        }), n.addRule(".intercept-button::after", {
            position: "absolute",
            content: "''",
            left: "14px",
            top: "5px",
            height: "20px",
            borderRight: "2px solid #888",
            boxShadow: "1px 1px #fff",
            transform: "rotate(60deg)"
        }), n.addRule(".intercept-button > div", {
            position: "absolute",
            left: "14px",
            top: "5px",
            height: "20px",
            borderRight: "2px solid #888",
            boxShadow: "0 1px #fff"
        }), n.addRule(".intercept-button > div::before", {
            position: "absolute",
            content: "''",
            left: "-1px",
            top: "1px",
            width: "4px",
            height: "4px",
            background: "#888",
            borderRadius: "4px",
            boxShadow: "0 1px #fff",
            transform: "rotate(-60deg)"
        }), n.addRule(".intercept-button > div::after", {
            position: "absolute",
            content: "''",
            left: "5px",
            top: "12px",
            width: "4px",
            height: "4px",
            background: "#888",
            borderRadius: "4px",
            boxShadow: "0 1px #fff",
            transform: "rotate(-60deg)"
        }), n.addRule(".plot3d-adder", {
            position: "relative",
            width: "100%",
            height: "60px",
            padding: 0,
            background: "none",
            opacity: .9,
            color: "#666",
            textAlign: "center"
        }), n.addRule(".plot3d-adder > .numeral", {
            position: "relative",
            display: "inline-block",
            cssFloat: "left",
            width: "28px",
            paddingLeft: "2px",
            height: "100%",
            background: n.makeGradient("to bottom", "rgba(0,0,0,0.04) 0%", "rgba(0,0,0,0) 100%"),
            borderRight: "1px solid transparent",
            textAlign: "left"
        }), n.addRule(".plot3d-adder > .numeral::after", {
            position: "absolute",
            content: "''",
            top: 0,
            right: "-1px",
            bottom: 0,
            width: "1px",
            background: n.makeGradient("to bottom", "rgba(204,204,204,1) 0%", "rgba(204,204,204,0) 100%")
        }), n.addRule(".plot3d-adder > button", {
            position: "relative",
            width: "90px",
            height: "40px",
            margin: "8px 4px",
            border: "1px solid #ccc",
            borderRadius: "40px",
            background: n.makeGradient("to bottom", "#fff 0%", "#eee 100%"),
            boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
            cursor: "pointer"
        }), n.addRule(".plot3d-adder > button::before", {
            position: "absolute",
            content: "'+'",
            left: "4px",
            top: "2px",
            color: "rgba(0,0,0,0.4)",
            textShadow: "0 1px rgba(255,255,255,0.6)",
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "sans-serif"
        }), n.addRule(".plot3d-adder > button:active", {
            background: n.makeGradient("to bottom", "#ccc 0%", "#eee 100%")
        }), n.addRule(".plot3d-adder > button > span", {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: "3px",
            color: "rgba(0,0,0,0.4)",
            textShadow: "0 1px rgba(255,255,255,0.6)",
            fontSize: "9pt",
            fontFamily: "sans-serif"
        }), n.addRule(".icon-point", {
            position: "absolute",
            left: 0,
            right: 0,
            top: "4px",
            margin: "auto",
            width: "12px",
            height: "12px",
            borderRadius: "12px",
            background: "rgba(0,0,0,0.4)",
            boxShadow: "0 1px rgba(255,255,255,0.6)"
        }), n.addRule(".icon-plane", {
            position: "absolute",
            left: 0,
            right: 0,
            top: "4px",
            margin: "auto",
            width: "12px",
            height: "12px",
            background: "rgba(0,0,0,0.4)",
            boxShadow: "1px 1px rgba(255,255,255,0.6)",
            transform: "skewX(-33deg)"
        })
    }(), a.onShow = function() {}, a.onHide = function() {}, l.addCustomEventListener("insert", n), l.addCustomEventListener("remove", n), l.addCustomEventListener("select", i), a.save = function(t) {
            var e, n, i;
            for (t.pushValue((this.gridXY ? 1 : 0) + 2 * (this.gridXZ ? 1 : 0) + 4 * (this.gridYZ ? 1 : 0), 1), e = 0, n = l.childNodes.length; n > e; ++e) i = l.childNodes[e], i.itemPoint ? (i = i.itemPoint, t.pushValue(32 + (i.trailsOn ? 10 : 0) + o.indexOf(i.currentColor), 1), t.pushDecimal(i.x, -100, 100, 3), t.pushDecimal(i.y, -100, 100, 3), t.pushDecimal(i.z, -100, 100, 3)) : i.itemPlane && (i = i.itemPlane, t.pushValue((i.interceptsOn ? 10 : 0) + o.indexOf(i.currentColor), 1), t.pushDecimal(i.x, -100, 100, 3), t.pushDecimal(i.y, -100, 100, 3), t.pushDecimal(i.z, -100, 100, 3), t.pushDecimal(i.c, -1e3, 1e3, 3))
        }, a.load = function(t) {
            var e, n, i, a, r, l, d;
            for (e = t.popValue(1), this.gridXY = !!(e % 2), this.gridXZ = !!((e = (e - this.gridXY) / 2) % 2), this.gridYZ = !!((e - this.gridXZ) / 2 % 2), s.update();
                "" !== t.peekChar();) n = t.popValue(1), i = t.popDecimal(-100, 100, 3), a = t.popDecimal(-100, 100, 3), r = t.popDecimal(-100, 100, 3), n >= 32 ? (d = this.addPoint(), n -= 32, d.setTrails(n >= 10), d.trailsOn && (n -= 10), d.setColor(o[n]), d.setValues({
                x: i,
                y: a,
                z: r
            })) : (l = t.popDecimal(-1e3, 1e3, 3), d = this.addPlane(), d.setIntercepts(n >= 10), d.interceptsOn && (n -= 10), d.setColor(o[n]), d.setValues({
                x: i,
                y: a,
                z: r,
                c: l
            }));
            this.onShow()
        }, a.addPoint = function() {
            var e = l.createItem(),
                n = CPM.Graph3d.createPoint(t);
            return e.itemLabel.appendChild(n.listItem), e.onDestroy = function() {
                n.destroy()
            }, e.itemPoint = n, n.attachTo(t.world), l.addItem(e), l.select(d), n
        }, a.addPlane = function() {
            var e = l.createItem(),
                n = CPM.Graph3d.createPlane(t);
            return e.itemLabel.appendChild(n.listItem), e.onDestroy = function() {
                n.destroy()
            }, e.itemPlane = n, n.attachTo(t.world), l.addItem(e), l.select(d), n
        }, a.clear = function() {
            l.clear()
        }, a.onShow = ListFrame_onShow, a.gridXY = !0, a.gridXZ = !1, a.gridYZ = !1,
        function() {
            var n = e("xy"),
                i = e("xz"),
                o = e("yz");
            s.setAttribute("class", "plot3d-options"), s.appendChild(n), s.appendChild(i), s.appendChild(o), s.update = function() {
                n.setValue(a.gridXY), i.setValue(a.gridXZ), o.setValue(a.gridYZ), t.world && t.world.showGrids(a.gridXY, a.gridYZ, a.gridXZ)
            }
        }(), s.update(), r.addItem("Show / hide grids", s), a.appendChild(r.elementid), a.appendChild(l);
    var p = function() {
        var t = CPM.Style.enable(document.createElement("div")),
            e = document.createElement("div"),
            n = document.createElement("button"),
            i = document.createElement("button");
        return t.setAttribute("class", "plot3d-adder"), e.setAttribute("class", "numeral"), e.appendChild(document.createTextNode("1")), t.appendChild(e), n.appendChild(document.createElement("span")), n.lastChild.appendChild(document.createTextNode("(1,2,3)")), n.appendChild(document.createElement("div")), n.lastChild.setAttribute("class", "icon-point"), n.addEventListener("click", function() {
            a.addPoint()
        }, !1), t.appendChild(n), i.appendChild(document.createElement("span")), i.lastChild.appendChild(document.createTextNode("x+y+z=1")), i.appendChild(document.createElement("div")), i.lastChild.setAttribute("class", "icon-plane"), i.addEventListener("click", function() {
            a.addPlane()
        }, !1), t.appendChild(i), t.renumber = function(t) {
            e.firstChild.nodeValue = t.toString()
        }, t
    }();
    return a.appendChild(p), a
}), CPM = window.CPM || {}, CPM.Graph3d = CPM.Graph3d || {}, CPM.Graph3d.createOptionFrame || ! function() {
    CPM.Graph3d.createOptionFrame = function(t) {
        var e = CPM.Base.createTrayFrame(t),
            n = CPM.Base.createTrayFrameEditors();
        return n.style.borderBottom = "1px solid #ddd", e.appendChild(n), e.save = function(t) {
            n.save(t)
        }, e.load = function(t) {
            n.load(t)
        }, e.getSettings = function() {
            var t = {};
            return t.title = n.getTitle(), t.description = n.getDescription(), t
        }, e
    }
}(), CPM = window.CPM || {}, CPM.Graph3d = CPM.Graph3d || {}, CPM.Graph3d.createColorPicker || ! function() {
    var t = {
            hidden: "transparent",
            red: "#f21",
            orange: "#f92",
            yellow: "#fe1",
            green: "#2e4",
            blue: "#35f",
            purple: "#d1f"
        },
        e = (Object.keys(t), !1);
    CPM.Graph3d.COLORS = t, CPM.Graph3d.createColorPicker = function n(i) {
        function o(t) {
            var e = t,
                n = i.area;
            for (u.x = 0, u.y = 0; e && e !== n;) u.x += e.offsetLeft + e.scrollLeft, u.y += e.offsetTop + e.scrollTop, e = e.offsetParent;
            return u
        }

        function a() {
            e = !1
        }

        function r() {
            e || "" !== d.style.display || (d.setTransition({
                width: p.offsetWidth + "px"
            }, {
                width: 0
            }, function() {
                this.style.display = "none", this.style.width = ""
            }), document.removeEventListener("click", a, !0), document.removeEventListener("click", r, !1), c = null)
        }

        function s(t) {
            return function() {
                "function" == typeof c.setColor && c.setColor(t)
            }
        }
        var l, d = CPM.Style.enable(document.createElement("div")),
            p = document.createElement("div"),
            c = null,
            u = {};
        n.styled || ! function() {
            var t, e = CPM.Style.getStylesheet("graph3d"),
                i = CPM.Graph3d.COLORS;
            e.addRule(".color-picker-popout", {
                position: "absolute",
                height: "34px",
                marginLeft: "5px",
                border: "1px solid #bbb",
                borderRadius: "6px",
                background: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                zIndex: 20,
                transition: "transform 0.2s"
            }), e.addRule(".color-picker-popout::before, .color-picker-popout::after", {
                content: "''",
                position: "absolute",
                top: "50%",
                marginTop: "-8px",
                border: "8px solid transparent",
                borderLeft: "none",
                pointerEvents: "none"
            }), e.addRule(".color-picker-popout::before", {
                left: "-15px",
                borderRight: "15px solid #bbb"
            }), e.addRule(".color-picker-popout::after", {
                left: "-13px",
                borderRight: "15px solid #fff"
            }), e.addRule(".color-picker-wrapper", {
                padding: "2px",
                overflow: "hidden",
                whiteSpace: "nowrap"
            }), e.addRule(".color-picker-wrapper > button", {
                position: "relative",
                margin: "0 2px",
                width: "30px",
                height: "30px",
                border: "none",
                borderRadius: "6px",
                backgroundImage: e.makeGradient("to bottom", "rgba(255,255,255,0.4) 0%", "rgba(255,255,255,0) 50%", "rgba(0,0,0,0) 50%", "rgba(0,0,0,0.2) 100%"),
                boxShadow: "0 1px 3px rgba(0,0,0,0.5),inset 0 0 2px rgba(0,0,0,0.5)",
                verticalAlign: "bottom"
            }), e.addRule(".color-picker-wrapper > button:active", {
                backgroundImage: e.makeGradient("to bottom", "rgba(0,0,0,0.4) 0%", "rgba(0,0,0,0.2) 100%")
            }), e.addRule(".color-picker-wrapper > .hidden", {
                position: "relative",
                backgroundColor: "transparent",
                backgroundImage: e.makeGradient("to bottom", "rgba(0,0,0,0.1) 0%", "rgba(0,0,0,0) 50%", "rgba(0,0,0,0) 100%"),
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)"
            }), e.addRule(".color-picker-wrapper > .hidden::before, .color-picker-wrapper > .hidden::after", {
                position: "absolute",
                content: "''",
                left: "50%",
                top: "50%",
                marginLeft: "-9px",
                marginTop: "-3px",
                width: "18px",
                height: "6px",
                backgroundColor: "#ccc"
            }), e.addRule(".color-picker-wrapper > .hidden::before", {
                transform: "rotate(-45deg)"
            }), e.addRule(".color-picker-wrapper > .hidden::after", {
                transform: "rotate(45deg)"
            }), e.addRule(".color-picker-wrapper > .hidden", {
                backgroundColor: "transparent",
                backgroundImage: e.makeGradient("to bottom", "rgba(0,0,0,0.1) 0%", "rgba(0,0,0,0) 50%", "rgba(0,0,0,0) 100%"),
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)"
            }), e.addRule(".color-picker-wrapper > .hidden:active", {
                backgroundImage: e.makeGradient("to bottom", "rgba(0,0,0,0.2) 0%", "rgba(0,0,0,0.1) 50%", "rgba(0,0,0,0.1) 100%"),
                boxShadow: "inset 0 2px 3px rgba(0,0,0,0.5)"
            }), t = i.length;
            for (l in i) i.hasOwnProperty(l) && "hidden" !== l && e.addRule(".color-picker-wrapper > ." + l, {
                backgroundColor: i[l]
            });
            n.styled = !0
        }(), d.showAt = function(t) {
            t !== c ? (o(t), this.transform("translate3d(" + (u.x + t.offsetWidth) + "px," + (u.y + t.offsetHeight / 2 - 18) + "px,0)"), "" !== this.style.display && (this.style.display = "", this.setTransition({
                width: 0
            }, {
                width: p.offsetWidth + "px"
            }, function() {
                this.style.width = ""
            }), document.addEventListener("click", a, !0), document.addEventListener("click", r, !1)), c = t, e = !0) : r()
        }, d.setAttribute("class", "color-picker-popout"), d.style.display = "none", p.setAttribute("class", "color-picker-wrapper");
        for (l in t) t.hasOwnProperty(l) && (p.appendChild(document.createElement("button")), p.lastChild.setAttribute("class", l), p.lastChild.addEventListener("click", s(l), !1));
        return d.appendChild(p), d
    }
}(), CPM = window.CPM || {}, CPM.Graph3d = CPM.Graph3d || {}, CPM.Graph3d.createPoint || ! function() {
    function t() {
        if (!t.applied) {
            var e, n, i = CPM.Style.getStylesheet("graph3d"),
                o = CPM.Graph3d.COLORS,
                a = .55,
                r = 20,
                s = .25;
            i.addRule(".point-3d", {
                position: "absolute",
                marginLeft: -a / 2 + "em",
                marginTop: -a / 2 + "em",
                width: a - .1 + "em",
                height: a - .1 + "em",
                border: "0.05em solid #000",
                borderRadius: a + "em",
                background: "#000"
            }), i.addRule(".point-3d.selected", {
                boxShadow: "0 0 4px 4px #8ad"
            }), i.addRule(".point-3d.hidden", {
                borderColor: "transparent"
            }), i.addRule(".point-trail-3d", {
                position: "absolute",
                top: "-0.1em",
                borderTop: "0.2em dashed #888",
                transformOrigin: "0 0.1em",
                transformStyle: "preserve-3d"
            }), i.addRule(".point-trail-3d::before", {
                position: "absolute",
                content: "''",
                width: "100%",
                top: "-0.2em",
                borderTop: "inherit",
                transform: "rotateX(90deg)",
                transformOrigin: "0 0.1em"
            }), i.addRule(".plane-3d", {
                position: "absolute",
                marginLeft: -(r / 2 + .05) + "em",
                marginTop: -(r / 2 + .05) + "em",
                width: r + "em",
                height: r + "em",
                border: "0.05em solid #000"
            }), i.addRule(".plane-3d::before", {
                position: "absolute",
                content: "''",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                background: "#f00",
                opacity: .4
            }), i.addRule(".plane-3d.selected", {
                boxShadow: "0 0 4px 4px #8ad"
            }), i.addRule(".intercept-3d", {
                position: "absolute",
                marginLeft: -s / 2 + "em",
                marginTop: -s / 2 + "em",
                width: s + "em",
                height: s + "em",
                borderRadius: s + "em",
                background: "#000"
            }), n = o.length;
            for (e in o) o.hasOwnProperty(e) && (i.addRule(".point-3d." + e + ", .intercept-3d." + e + ", .plane-3d." + e + "::before", {
                backgroundColor: o[e]
            }), i.addRule(".plane-3d." + e, {
                borderColor: o[e]
            }), i.addRule(".point-trail-3d." + e, {
                borderTopColor: o[e]
            }));
            t.applied = !0
        }
    }

    function e(e, o) {
        function a(t) {
            t.stopPropagation()
        }

        function r(t) {
            u[t].setValue(s[t])
        }
        var s = e,
            l = CPM.Style.enable(document.createElement("div")),
            d = document.createElement("div"),
            p = document.createElement("span"),
            c = CPM.Style.enable(document.createElement("div")),
            u = {},
            h = document.createElement("button");
        return t(), s.destroy = function() {
            var t, e = s.parts3d,
                n = e.length;
            for (t = 0; n > t; ++t) e[t] && e[t].parentNode && e[t].parentNode.removeChild(e[t])
        }, s.attachTo = function(t) {
            var e, n = s.parts3d,
                i = n.length;
            for (e = 0; i > e; ++e) n[e] && t.appendChild(n[e])
        }, s.addEditorField = function(t, e, n, i, o) {
            var r = document.createElement("span"),
                l = CPM.UI.createDecimalField(e, n);
            o || (o = t), r.setAttribute("class", "number-field-label"), r.appendChild(document.createTextNode(t)), c.appendChild(r), c.appendChild(l), c.appendChild(document.createElement("br")), l.setValue(i), l.addCustomEventListener("change", function(t) {
                s[o] = t.value, "function" == typeof s.update && s.update()
            }), l.addEventListener("click", a, !1), u[o] = l
        }, s.setValues = function(t) {
            var e;
            for (e in t) t.hasOwnProperty(e) && (this[e] = t[e], r(e), this.update())
        }, s.showEditors = function(t) {
            l.appendChild(c), t || l.setTransition({
                height: d.offsetHeight + "px"
            }, {
                height: l.offsetHeight + "px"
            }, function() {
                this.style.height = ""
            }), s.isSelected = !0, "function" == typeof this.onSelect && this.onSelect()
        }, s.hideEditors = function(t) {
            t ? l.removeChild(c) : l.setTransition({
                height: l.offsetHeight + "px"
            }, {
                height: d.offsetHeight + "px"
            }, function() {
                this.style.height = "", this.removeChild(c)
            }), s.isSelected = !1, "function" == typeof this.onDeselect && this.onDeselect()
        }, s.setColor = function(t) {
            this.currentColor = t, h.setAttribute("class", "color-picker-button " + t), this.updateColor()
        }, s.updateColor = null, s.update = null, s.parts3d = [s], s.currentColor = n[i], s.isSelected = !1, s.listItem = l, s.listItemLabel = d, s.listItemLabelText = p, d.setAttribute("class", "list-object-3d-label"), h.setAttribute("class", "color-picker-button " + s.currentColor), h.addEventListener("click", function(t) {
            o.colorPicker.showAt(this), t.stopPropagation()
        }, !1), h.setColor = function(t) {
            this.setAttribute("class", "color-picker-button " + t), "function" == typeof s.setColor && s.setColor(t)
        }, d.appendChild(h), d.appendChild(p), l.appendChild(d), c.setAttribute("class", "list-object-3d-editor"), ++i, i === n.length && (i = 1), s
    }
    var n = Object.keys(CPM.Graph3d.COLORS),
        i = 1;
    CPM.Graph3d.createPoint = function(t) {
        var n = document.createElement("div"),
            i = CPM.Style.enable(document.createElement("div")),
            o = CPM.Style.enable(document.createElement("div")),
            a = CPM.Style.enable(document.createElement("div")),
            r = document.createTextNode(""),
            s = document.createElement("button");
        return n = CPM.Graph3d.makeBillboard(n), e(n, t), n.firstChild.setAttribute("class", "point-3d " + n.currentColor), n.update = function() {
            var t, e, s, l = n,
                d = r,
                p = [l.x, l.y, l.z],
                c = [l.lastX, l.lastY, l.lastZ],
                u = [i, o, a],
                h = 3;
            if (d.nodeValue = "( " + l.x + " , " + l.y + " , " + l.z + " )", n.trailsOn) {
                if (l.lastX === l.x && l.lastY === l.y && l.lastZ === l.z)
                    for (e = 0; h > e; ++e) u[e].setStyle({
                        display: "",
                        width: Math.abs(p[e]) + "em",
                        transform: "translate3d(" + (e > 0 || l.x < 0 ? l.x : 0) + "em," + (1 === e && l.y < 0 || 2 === e ? l.y : 0) + "em," + (2 === e && l.z < 0 ? l.z : 0) + "em)" + (1 === e ? " rotateZ(90deg)" : 2 === e ? " rotateY(-90deg)" : "")
                    });
                else
                    for (e = 0; h > e; ++e)
                        if (p[e] !== c[e])
                            for (t = 1 === e ? " rotateZ(90deg)" : 2 === e ? " rotateY(-90deg)" : "", u[e].style.display = "", u[e].setTransition({
                                    width: Math.abs(c[e]) + "em",
                                    transform: "translate3d(" + (e > 0 ? l.x : l.lastX < 0 ? l.lastX : 0) + "em," + (1 > e ? 0 : e > 1 ? l.y : l.lastY < 0 ? l.lastY : 0) + "em," + (2 > e ? 0 : l.lastZ < 0 ? l.lastZ : 0) + "em)" + t
                                }, {
                                    width: Math.abs(p[e]) + "em",
                                    transform: "translate3d(" + (e > 0 || l.x < 0 ? l.x : 0) + "em," + (1 === e && l.y < 0 || 2 === e ? l.y : 0) + "em," + (2 === e && l.z < 0 ? l.z : 0) + "em)" + t
                                }, function() {
                                    0 === p[e] && (this.style.display = "none")
                                }), s = e + 1; h > s; ++s) 0 !== p[s] && (t = 1 === s ? " rotateZ(90deg)" : 2 === s ? " rotateY(-90deg)" : "", u[s].setTransition({
                                transform: "translate3d(" + (0 === e ? l.lastX : l.x) + "em," + (1 > e ? 2 === s || l.y < 0 ? l.y : 0 : l.lastY) + "em," + (2 === s && l.z < 0 ? l.z : 0) + "em)" + t
                            }, {
                                transform: "translate3d(" + l.x + "em," + (2 === s || l.y < 0 ? l.y : 0) + "em," + (2 === s && l.z < 0 ? l.z : 0) + "em)" + t
                            }))
            } else i.style.display = "none", o.style.display = "none", a.style.display = "none";
            (l.lastX !== l.x || l.lastY !== l.y || l.lastZ !== l.z) && (l.setTransition({
                transform: "translate3d(" + l.lastX + "em," + l.lastY + "em," + l.lastZ + "em)"
            }, {
                transform: "translate3d(" + l.x + "em," + l.y + "em," + l.z + "em)"
            }), l.lastX = l.x, l.lastY = l.y, l.lastZ = l.z)
        }, n.onSelect = function() {
            n.firstChild.setAttribute("class", "point-3d " + this.currentColor + " selected")
        }, n.onDeselect = function() {
            n.firstChild.setAttribute("class", "point-3d " + this.currentColor)
        }, n.setTrails = function(t) {
            this.trailsOn = t, t ? s.setAttribute("class", "trail-button activated") : s.setAttribute("class", "trail-button")
        }, n.updateColor = function() {
            n.firstChild.setAttribute("class", "point-3d " + this.currentColor + (this.isSelected ? " selected" : "")), i.setAttribute("class", "point-trail-3d trail-x " + this.currentColor), o.setAttribute("class", "point-trail-3d trail-y " + this.currentColor), a.setAttribute("class", "point-trail-3d trail-z " + this.currentColor)
        }, n.parts3d.splice(n.parts3d.length, 0, i, o, a), n.listItemLabelText.appendChild(r), s.setAttribute("class", "trail-button"), s.appendChild(document.createElement("div")), s.addEventListener("click", function(t) {
            n.trailsOn = !n.trailsOn, n.trailsOn ? this.setAttribute("class", "trail-button activated") : this.setAttribute("class", "trail-button"), n.update(), t.stopPropagation()
        }, !1), n.listItemLabel.appendChild(s), n.addEditorField("x", -100, 100, 0), n.addEditorField("y", -100, 100, 0), n.addEditorField("z", -100, 100, 0), i.setAttribute("class", "point-trail-3d trail-x " + n.currentColor), o.setAttribute("class", "point-trail-3d trail-y " + n.currentColor), a.setAttribute("class", "point-trail-3d trail-z " + n.currentColor), n.trailsOn = !1, n.x = n.y = n.z = n.lastX = n.lastY = n.lastZ = 0, n.update(), n
    }, CPM.Graph3d.createPlane = function(n) {
        function i() {
            var t, e, n, i = o,
                a = ["x", "y", "z"],
                r = [d, p, c],
                s = !1,
                u = a.length;
            for (n = 0; u > n; ++n) t = i[a[n]], e = r[n], 0 !== t ? (e.style.display = "", e.firstChild.nodeValue = s ? 0 > t ? " – " : " + " : 0 > t ? "–" : "", 1 !== Math.abs(t) && (e.firstChild.nodeValue += Math.abs(t)), s = !0) : e.style.display = "none";
            l.lastChild.nodeValue = s ? " =" : "0 = ", l.lastChild.nodeValue += i.c < 0 ? "–" + Math.abs(i.c) : i.c
        }
        var o = e(CPM.Style.enable(document.createElement("div")), n),
            a = document.createElement("div"),
            r = document.createElement("div"),
            s = document.createElement("div"),
            l = o.listItemLabelText,
            d = document.createElement("span"),
            p = document.createElement("span"),
            c = document.createElement("span"),
            u = document.createElement("button");
        t();
        var h = function() {
            var t = new CPM.Graph3d.Vector3d,
                e = new CPM.Graph3d.Vector3d,
                n = new CPM.Graph3d.Vector3d,
                i = new CPM.Graph3d.Vector3d;
            return function(o, a, r, s) {
                if (0 === o & 0 === a && 0 === r) return null;
                var l, d, p, c, u, h = 3,
                    f = [],
                    m = [],
                    b = 0,
                    g = [],
                    C = 0;
                for (l = 0; h > l; ++l) d = arguments[l], 0 !== d ? (f[l] = s / d, m[l] = !0, ++b) : (f[l] = 1, m[l] = !1);
                if (3 === b) 0 !== s ? (t.setValues(-f[0], f[1], 0), e.setValues(-f[0], 0, f[2])) : (t.setValues(a, -o, 0), e.setValues(0, r, -a));
                else {
                    for (l = 0; h > l; ++l)
                        if (m[l]) g[l] = f[l];
                        else {
                            if (g[l] = null, ++C, !(2 > C)) {
                                e.setValues(0 === l ? 1 : 0, 1 === l ? 1 : 0, 2 === l ? 1 : 0);
                                break
                            }
                            t.setValues(0 === l ? 1 : 0, 1 === l ? 1 : 0, 2 === l ? 1 : 0)
                        } 1 === C && (0 !== s ? e.setValues(null == g[0] ? 0 : -g[0], null == g[1] ? 0 : null == g[0] ? -g[1] : g[1], null == g[2] ? 0 : g[2]) : e.setValues(a - r, r - o, o - a))
                }
                for (n.copyValues(t).cross(e).normalize(), i.setValues(0, 0, 1), p = Math.acos(i.dot(n)), i.cross(n), c = null, l = 0; h > l; ++l) m[l] && (null == c || f[l] <= c) && (c = f[l], u = l);
                return "translate3d(" + (0 === u ? c + "em" : 0) + "," + (1 === u ? c + "em" : 0) + "," + (2 === u ? c + "em" : 0) + ") rotate3d(" + i.x + "," + i.y + "," + i.z + "," + p + "rad)"
            }
        }();
        return o.update = function() {
            var t, e, n, l = o,
                d = [l.x, l.y, l.z],
                p = [a, r, s];
            if (i(), l.interceptsOn)
                if (0 !== l.c)
                    for (e = 0, n = 3; n > e; ++e) 0 !== d[e] ? p[e].setStyle({
                        display: "",
                        transform: "translate3d(" + (0 === e ? l.c / l.x : 0) + "em," + (1 === e ? l.c / l.y : 0) + "em," + (2 === e ? l.c / l.z : 0) + "em)"
                    }) : p[e].style.display = "none";
                else a.setStyle({
                    display: "",
                    transform: "translate3d(0,0,0)"
                }), r.style.display = "none", s.style.display = "none";
            else a.style.display = "none", r.style.display = "none", s.style.display = "none";
            (l.lastX !== l.x || l.lastY !== l.y || l.lastZ !== l.z || l.lastC !== l.c) && (t = h(l.x, l.y, l.z, l.c), null != t ? l.setStyle({
                display: "",
                transform: t
            }) : (l.style.display = "none", a.style.display = "none", r.style.display = "none", s.style.display = "none"), l.lastX = l.x, l.lastY = l.y, l.lastZ = l.z, l.lastC = l.c)
        }, o.onSelect = function() {
            this.setAttribute("class", "plane-3d " + this.currentColor + " selected")
        }, o.onDeselect = function() {
            this.setAttribute("class", "plane-3d " + this.currentColor)
        }, o.setIntercepts = function(t) {
            this.interceptsOn = t, t ? u.setAttribute("class", "intercept-button activated") : u.setAttribute("class", "intercept-button")
        }, o.updateColor = function() {
            this.setAttribute("class", "plane-3d " + this.currentColor + (this.isSelected ? " selected" : "")), a.firstChild.setAttribute("class", "intercept-3d " + this.currentColor), r.firstChild.setAttribute("class", "intercept-3d " + this.currentColor), s.firstChild.setAttribute("class", "intercept-3d " + this.currentColor)
        }, o.setAttribute("class", "plane-3d " + o.currentColor), a.setAttribute("class", "intercept-3d " + o.currentColor), r.setAttribute("class", "intercept-3d " + o.currentColor), s.setAttribute("class", "intercept-3d " + o.currentColor), a = CPM.Graph3d.makeBillboard(a), r = CPM.Graph3d.makeBillboard(r), s = CPM.Graph3d.makeBillboard(s), o.parts3d.splice(o.parts3d.length, 0, a, r, s), d.appendChild(document.createTextNode("")), d.appendChild(document.createElement("em")), d.lastChild.appendChild(document.createTextNode("x")), l.appendChild(d), p.appendChild(document.createTextNode("")), p.appendChild(document.createElement("em")), p.lastChild.appendChild(document.createTextNode("y")), l.appendChild(p), c.appendChild(document.createTextNode("")), c.appendChild(document.createElement("em")), c.lastChild.appendChild(document.createTextNode("z")), l.appendChild(c), l.appendChild(document.createTextNode("")), u.setAttribute("class", "intercept-button activated"), u.appendChild(document.createElement("div")), u.addEventListener("click", function(t) {
            o.interceptsOn = !o.interceptsOn, o.interceptsOn ? this.setAttribute("class", "intercept-button activated") : this.setAttribute("class", "intercept-button"), o.update(), t.stopPropagation()
        }, !1), o.listItemLabel.appendChild(u), o.addEditorField("a", -100, 100, 1, "x"), o.addEditorField("b", -100, 100, 1, "y"), o.addEditorField("c", -100, 100, 1, "z"), o.addEditorField("d", -1e3, 1e3, 1, "c"), o.interceptsOn = !0, o.x = o.y = o.z = o.c = 1, o.lastX = o.lastY = o.lastZ = o.lastC = 0, o.update(), o
    }
}(), CPM = window.CPM || {}, CPM.Graph3d = CPM.Graph3d || {}, CPM.Graph3d.createHelpDialog || ! function() {
    CPM.Graph3d.createHelpDialog = function t(e) {
        function n(t, e, n, i) {
            var o = document.createElement("li"),
                a = document.createElement("span"),
                r = document.createElement("div"),
                s = document.createElement("button"),
                l = document.createElement("button"),
                d = document.createElement("a");
            return o.setAttribute("class", "shuffle-list-item"), a.setAttribute("class", "numeral"), r.setAttribute("class", "label"), s.setAttribute("class", "color-picker-button " + n), d.setAttribute("class", "delete-button"), a.appendChild(document.createTextNode(t)), o.appendChild(a), r.appendChild(document.createElement("div")), r.lastChild.setAttribute("class", "list-object-3d-label"), r.lastChild.appendChild(s), "string" == typeof e ? r.lastChild.appendChild(document.createTextNode(e)) : r.lastChild.appendChild(e), l.appendChild(document.createElement("div")), l.setAttribute("class", i), r.appendChild(l), o.appendChild(r), o.itemLabel = r, d.appendChild(document.createTextNode("x")), o.appendChild(d), o
        }

        function i(t, e) {
            var n = document.createElement("div"),
                i = document.createElement("span"),
                o = CPM.UI.createIntegerField(e);
            return i.appendChild(document.createTextNode(t)), i.setAttribute("class", "number-field-label"), n.appendChild(i), n.appendChild(o), n
        }
        var o, a = CPM.Base.createHelpDialog(e);
        if (shortcuts = CPM.Base.generateElementShortcuts(), em = shortcuts.em, paragraph = shortcuts.p, icon = shortcuts.icon, !t.styled) {
            var r = CPM.Style.getStylesheet("main");
            r.addRule(".CPM-help-dialog-icon.main-button", {
                position: "relative",
                left: 0,
                top: 0,
                margin: "0 8px"
            }), r.addRule(".CPM-help-dialog-billboard", {
                position: "absolute",
                transformStyle: "preserve-3d",
                transformOrigin: "50% 50%",
                backfaceVisibility: "hidden"
            }), o = r.addRule(".CPM-help-dialog-billboard>*", {
                transformOrigin: "50% 50%"
            }), t.styled = !0
        }
        return function() {
                var t = a.addTitlePage("CPM 3D Plotter");
                t.addContent(paragraph("Welcome to the 3D Plotter! With this tool, you can graph points and planes on a set of 3D axes."))
            }(), toc = a.addTableOfContents("CPM 3D Plotter"), toc.addSection("The 3D Graph"),
            function() {
                var t, n, i, r, s, l = a.addPage("The 3D Axes");
                for (toc.add(l), t = document.createElement("div"), t.setAttribute("class", "CPM-help-dialog-mockup"), t.style.height = "230px", n = CPM.Graph3d.createViewport(e), CPM.Graph3d.addAxes(n.origin3d), n.origin3d.setAxesLength(9, 9, 9); n.childNodes.length > 1;) n.removeChild(n.lastChild);
                for (n.style.left = 0, n.firstChild.style.fontSize = "10px", o.transform("scaleY(-1) " + n.getReverseTransformation()), i = 0, r = n.origin3d.childNodes.length; r > i; ++i) s = n.origin3d.childNodes[i], "billboard" === s.getAttribute("class") && s.setAttribute("class", "CPM-help-dialog-billboard");
                t.appendChild(n), l.appendChild(t), l.appendChild(paragraph("In the middle you will see the 3D axes with the XY grid shown. Click and drag anywhere to rotate the axes. You can click on 'Show / hide grids' in the tray at left to see a different grid.")), n = icon("CPM-zoom-button zoom-in"), n.style.position = "relative", n.style.right = 0, n.style.top = 0, n.style.textAlign = "left", n.replaceChild(document.createTextNode("+"), n.firstChild), l.appendChild(n), n = icon("CPM-zoom-button zoom-out"), n.style.position = "relative", n.style.right = 0, n.style.top = 0, n.style.textAlign = "left", n.replaceChild(document.createTextNode("-"), n.firstChild), l.appendChild(n), l.appendChild(paragraph("In the top right corner you will see these two buttons. You can click on the '+' button to zoom in on the axes, and click on the '-' button to zoom out. If you have a mouse wheel, you can also use that to zoom."))
            }(), toc.addSection("The Tray"),
            function() {
                var t, e, i = a.addPage("Plotting Points and Planes");
                toc.add(i), i.appendChild(paragraph("In the tray at left, you will see two buttons.")), t = document.createElement("div"), t.setAttribute("class", "CPM-help-dialog-mockup plot3d-adder"), t.style.width = "260px", t.style.height = "52px", e = document.createElement("div"), e.setAttribute("class", "numeral"), e.appendChild(document.createTextNode("1")), t.appendChild(e), e = document.createElement("button"), e.appendChild(document.createElement("span")), e.lastChild.appendChild(document.createTextNode("(1,2,3)")), e.appendChild(document.createElement("div")), e.lastChild.setAttribute("class", "icon-point"), t.appendChild(e), e = document.createElement("button"), e.appendChild(document.createElement("span")), e.lastChild.appendChild(document.createTextNode("x+y+z=1")), e.appendChild(document.createElement("div")), e.lastChild.setAttribute("class", "icon-plane"), t.appendChild(e), i.appendChild(t), i.appendChild(paragraph("Click the left button to plot a point, and the other to plot a plane.")), t = document.createElement("ol"), t.setAttribute("class", "CPM-help-dialog-mockup shuffle-list"), t.appendChild(n(1, "(0,0,0)", "red", "trail-button")), e = document.createElement("span"), e.appendChild(document.createElement("em")), e.lastChild.appendChild(document.createTextNode("x")), e.appendChild(document.createTextNode(" + ")), e.appendChild(document.createElement("em")), e.lastChild.appendChild(document.createTextNode("y")), e.appendChild(document.createTextNode(" + ")), e.appendChild(document.createElement("em")), e.lastChild.appendChild(document.createTextNode("z")), e.appendChild(document.createTextNode(" = 1")), t.appendChild(n(2, e, "orange", "intercept-button")), i.appendChild(t), i.appendChild(paragraph("Click and drag on the number to the left of any item to reorder the list. Click on the 'x' to the right of any item to delete it.")), e = icon("color-picker-button red"), e.style.position = "relative", e.style.left = 0, e.style.top = 0, e.style.margin = "4px", i.appendChild(e), e = paragraph("Click this to change the color of an item."), e.style.paddingTop = "10px", i.appendChild(e), e = icon("trail-button"), e.style.position = "relative", e.style.left = 0, e.style.top = 0, e.style.margin = "4px", i.appendChild(e), e = paragraph("Click this to connect the point to the origin."), e.style.paddingTop = "10px", i.appendChild(e), e = icon("intercept-button"), e.style.position = "relative", e.style.left = 0, e.style.top = 0, e.style.margin = "4px", i.appendChild(e), e = paragraph("Click this to show where the plane intersects the axes."), e.style.paddingTop = "10px", i.appendChild(e)
            }(),
            function() {
                var t, e, o, r, s = a.addPage("Editing Points and Planes"),
                    l = ["hidden", "red", "orange", "yellow", "green", "blue"];
                for (toc.add(s), s.appendChild(paragraph("Click on any point or plane to access an editor.")), t = document.createElement("ol"), t.setAttribute("class", "CPM-help-dialog-mockup shuffle-list"), e = n(2, "", "orange"), e.setAttribute("class", "shuffle-list-item selected"), t.appendChild(e), e = document.createElement("div"), e.setAttribute("class", "list-object-3d-editor"), e.appendChild(i("x", 1)), e.appendChild(i("y", 1)), e.appendChild(i("z", 1)), e.appendChild(i("c", 1)), t.lastChild.itemLabel.appendChild(e), e = document.createElement("div"), e.setAttribute("class", "color-picker-popout"), e.appendChild(document.createElement("div")), e.lastChild.setAttribute("class", "color-picker-wrapper"), o = 0, r = l.length; r > o; ++o) e.lastChild.appendChild(document.createElement("button")), e.lastChild.lastChild.setAttribute("class", l[o]);
                e.style.left = "68px", e.style.top = "2px", t.appendChild(e), s.appendChild(t), e = paragraph("For points, these fields correspond to the point's coordinates. For planes, these fields correspond to the equation's "), e.appendChild(em("x")), e.appendChild(document.createTextNode(", ")), e.appendChild(em("y")), e.appendChild(document.createTextNode(", and ")), e.appendChild(em("z")), e.appendChild(document.createTextNode(" coefficients. The 'c' field refers to the constant term.")), s.appendChild(e), s.appendChild(paragraph("Also shown above is the color picker. Choose from any of the six colors, or click on the leftmost button to hide the point or plane without deleting it."))
            }(),
            function() {
                var t = a.addTrayPage("CPM 3D Plotter");
                toc.add(t), t.setGearDescription("This button will open a menu with more options. Click on 'Save' to save all of the points and planes that you have plotted.")
            }(), a
    }
}();