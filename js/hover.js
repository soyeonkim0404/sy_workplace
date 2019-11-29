(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    282: function(t, e, n) {
        "use strict";
        e.a = function(element) {
            var t = 0
                , e = 0;
            do {
                t += element.offsetTop || 0,
                    e += element.offsetLeft || 0,
                    element = element.offsetParent
            } while (element);return {
                top: t,
                left: e
            }
        }
    },
    283: function(t, e, n) {
        var o = n(12)
            , r = n(15)
            , c = n(29)
            , l = /"/g
            , h = function(t, e, n, o) {
            var r = String(c(t))
                , h = "<" + e;
            return "" !== n && (h += " " + n + '="' + String(o).replace(l, "&quot;") + '"'),
            h + ">" + r + "</" + e + ">"
        };
        t.exports = function(t, e) {
            var n = {};
            n[t] = e(h),
                o(o.P + o.F * r(function() {
                    var e = ""[t]('"');
                    return e !== e.toLowerCase() || e.split('"').length > 3
                }), "String", n)
        }
    },
    284: function(t, e, n) {
        "use strict";
        e.a = {
            functional: !0,
            render: function(t, e) {
                var n = e._c;
                return n("svg", {
                    class: [e.data.class, e.data.staticClass],
                    style: [e.data.style, e.data.staticStyle],
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 132 89"
                    }
                }, [n("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        d: "M85.085 84.167c15.984-15.935 27.434-27.033 34.34-33.285l2.572-2.329-3.465.036c-24.534.252-64.046.254-118.532.006v-5.576c54.509.194 94.026.192 118.556-.005l3.065-.024-2.133-2.208c-6.944-7.184-18.435-18.779-34.477-34.788L89.303 0 132 45.775 89.237 89l-4.152-4.833z"
                    }
                })])
            }
        }
    },
    285: function(t, e, n) {
        "use strict";
        n(283)("link", function(t) {
            return function(e) {
                return t(this, "a", "href", e)
            }
        })
    },
    287: function(t, e, n) {
        "use strict";
        e.a = {
            functional: !0,
            render: function(t, e) {
                var n = e._c;
                return n("svg", {
                    class: [e.data.class, e.data.staticClass],
                    style: [e.data.style, e.data.staticStyle],
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 48 48"
                    }
                }, [n("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        d: "M20.078 14.026L24.157 0l5.02 14.026 12.548-7.013-6.588 13.247L48 24.312l-12.863 4.675 6.588 12.78-13.803-7.481L24.157 48l-4.079-13.714-13.176 7.48 5.96-12.779L0 24l12.863-3.74-5.02-13.247 12.235 7.013z"
                    }
                })])
            }
        }
    },
    289: function(t, e, n) {
        "use strict";
        var o = n(1)
            , r = n(282)
            , c = (n(134),
            {
                data: function() {
                    return {
                        anims: []
                    }
                },
                methods: {
                    resizeMobile: function() {
                        var t = this;
                        this.anims.forEach(function(e) {
                            e.offset = Object(r.a)(e.el).top - t.h,
                                e.height = e.el.clientHeight
                        })
                    },
                    tickMobile: function(t) {
                        var e = this;
                        this.isShown && this.anims.forEach(function(n) {
                            n.offset < t && n.offset + n.height > t - e.h && (n.shown || (n.shown = !0,
                                n.anime = Object(o.a)({
                                    targets: n.el,
                                    translateY: 0,
                                    opacity: 1,
                                    duration: 900,
                                    easing: "easeOutQuad",
                                    delay: 100
                                }))),
                            n.offset + n.height < t - e.h && n.shown && (n.shown = !1,
                                n.anime.pause(),
                                o.a.set(n.el, {
                                    translateY: -50,
                                    opacity: 0
                                })),
                            n.offset > t && n.shown && (n.shown = !1,
                                n.anime.pause(),
                                o.a.set(n.el, {
                                    translateY: 50,
                                    opacity: 0
                                }))
                        })
                    },
                    setupMobile: function() {
                        var t = this;
                        this.anims = [],
                            [].slice.call(this.$el.querySelectorAll(".mobile-anime")).forEach(function(e) {
                                t.anims.push({
                                    el: e
                                }),
                                    o.a.set(e, {
                                        translateY: 50,
                                        opacity: 0
                                    })
                            })
                    }
                }
            })
            , l = n(4)
            , component = Object(l.a)(c, void 0, void 0, !1, null, null, null);
        e.a = component.exports
    },
    291: function(t, e, n) {
        "use strict";
        e.a = {
            functional: !0,
            render: function(t, e) {
                var n = e._c;
                return n("svg", {
                    class: [e.data.class, e.data.staticClass],
                    style: [e.data.style, e.data.staticStyle],
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 165 165"
                    }
                }, [n("g", {
                    attrs: {
                        fill: "none",
                        "fill-rule": "evenodd",
                        transform: "translate(-.774 .226)"
                    }
                }, [n("g", {
                    attrs: {
                        fill: "#FFF"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M115.646 82.94c0 2.824 2.262 5.117 5.05 5.117 2.79 0 5.052-2.293 5.052-5.118 0-2.828-2.262-5.118-5.052-5.118-2.788 0-5.05 2.29-5.05 5.118M50.16 89.53c0 2.826-2.26 5.119-5.051 5.119-2.791 0-5.051-2.293-5.051-5.118 0-2.828 2.26-5.118 5.05-5.118 2.792 0 5.052 2.29 5.052 5.118M84.336 134.856c-26.995 0-39.336-20.064-39.85-20.918a2.347 2.347 0 0 1 .842-3.236 2.414 2.414 0 0 1 3.28.83c.456.756 11.533 18.6 35.599 18.6 24.192 0 35.27-17.844 35.73-18.604a2.414 2.414 0 0 1 3.28-.822 2.344 2.344 0 0 1 .837 3.232c-.511.854-12.852 20.918-39.718 20.918"
                    }
                })]), n("circle", {
                    attrs: {
                        cx: "82.824",
                        cy: "82.317",
                        r: "80.5",
                        stroke: "#FFF",
                        "stroke-width": "3"
                    }
                })])])
            }
        }
    },
    292: function(t, e, n) {
        "use strict";
        var o = n(1)
            , r = {
            methods: {
                doBlur: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    if (!this.isDevice) {
                        var e = 50 + 50 * Math.random()
                            , n = 30 * Math.random();
                        this.blurAnime = Object(o.a)({
                            targets: ".inner-blur",
                            translateX: function() {
                                return o.a.random(-4, 4) * t
                            },
                            translateY: function() {
                                return o.a.random(-4, 4) * t
                            },
                            duration: e,
                            easing: "easeOutQuad",
                            delay: n,
                            complete: this.doBlur.bind(this, t)
                        })
                    }
                }
            },
            beforeDestroy: function() {
                this.blurAnime && this.blurAnime.pause()
            }
        }
            , c = n(4)
            , component = Object(c.a)(r, void 0, void 0, !1, null, null, null);
        e.a = component.exports
    },
    330: function(t, e, n) {
        var content = n(424);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("27ee285a", content, !0, {
            sourceMap: !1
        })
    },
    331: function(t, e, n) {
        var content = n(426);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("bd772e66", content, !0, {
            sourceMap: !1
        })
    },
    332: function(t, e, n) {
        var content = n(428);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("fb3eb326", content, !0, {
            sourceMap: !1
        })
    },
    333: function(t, e, n) {
        var content = n(430);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("3954bb8b", content, !0, {
            sourceMap: !1
        })
    },
    334: function(t, e, n) {
        var content = n(432);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("bfd4d7e0", content, !0, {
            sourceMap: !1
        })
    },
    335: function(t, e, n) {
        var content = n(435);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("a6b3dd7a", content, !0, {
            sourceMap: !1
        })
    },
    336: function(t, e, n) {
        var content = n(437);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("1c877dbe", content, !0, {
            sourceMap: !1
        })
    },
    337: function(t, e, n) {
        var content = n(439);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("60a89708", content, !0, {
            sourceMap: !1
        })
    },
    338: function(t, e, n) {
        var content = n(441);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("4dc10c4f", content, !0, {
            sourceMap: !1
        })
    },
    339: function(t, e, n) {
        var content = n(443);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("a9e21702", content, !0, {
            sourceMap: !1
        })
    },
    340: function(t, e, n) {
        var content = n(445);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("b106384c", content, !0, {
            sourceMap: !1
        })
    },
    341: function(t, e, n) {
        var content = n(447);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("29b075cf", content, !0, {
            sourceMap: !1
        })
    },
    342: function(t, e, n) {
        var content = n(449);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("4c2011cb", content, !0, {
            sourceMap: !1
        })
    },
    343: function(t, e, n) {
        var content = n(451);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
            n(9).default)("1196deb8", content, !0, {
            sourceMap: !1
        })
    },
    423: function(t, e, n) {
        "use strict";
        var o = n(330);
        n.n(o).a
    },
    424: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".circles[data-v-c0240b48]{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.circles svg[data-v-c0240b48]{position:absolute;display:block;fill:#f93700;width:15vw;height:15vw;transform:translate(-50%,-50%);transition:fill .5s cubic-bezier(.455,.03,.515,.955)}.red .circles svg[data-v-c0240b48]{fill:#dbd5c9}.circles svg.pink[data-v-c0240b48]{fill:#f9dddd}", ""])
    },
    425: function(t, e, n) {
        "use strict";
        var o = n(331);
        n.n(o).a
    },
    426: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".top-layer[data-v-496dcc90]{height:100vh;left:0;pointer-events:none;position:absolute;top:0;width:100vw}.top-layer .horizontal[data-v-496dcc90]{height:2px;border-bottom:1px solid #191919;left:0;opacity:.1;transform-origin:0 50%;top:65vh;width:100%}.top-layer .circle-container[data-v-496dcc90],.top-layer .horizontal[data-v-496dcc90]{position:absolute;transition:opacity .5s cubic-bezier(.215,.61,.355,1)}.top-layer .circle-container[data-v-496dcc90]{left:50%;top:50%;height:45vw;width:45vw;opacity:.5;transform:translate(-95%,-50%)}.top-layer .circle[data-v-496dcc90]{border:1px solid #191919;border-radius:50%;width:100%;height:100%}.red .top-layer .horizontal[data-v-496dcc90]{opacity:.2}.red .top-layer .circle-container[data-v-496dcc90]{opacity:1}@media only screen and (max-width:1050px){.top-layer[data-v-496dcc90]{z-index:-1}.top-layer .horizontal[data-v-496dcc90]{top:50vh}.top-layer .circle-container[data-v-496dcc90]{width:25vw;height:25vw;transform:translate(18vw,-42vw)}}@media only screen and (max-width:600px){.top-layer[data-v-496dcc90]{z-index:auto}.top-layer .circle-container[data-v-496dcc90]{width:85vw;height:85vw;transform:translate(-50%,-50%)}.top-layer .horizontal[data-v-496dcc90]{display:none}}", ""])
    },
    427: function(t, e, n) {
        "use strict";
        var o = n(332);
        n.n(o).a
    },
    428: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".bottom-layer[data-v-256667e9]{height:100vh;left:0;pointer-events:none;position:absolute;top:0;width:100vw}.bottom-layer .bg[data-v-256667e9]{background:#f93700;bottom:0;left:0;position:absolute;right:0;top:0}.bottom-layer .vertical[data-v-256667e9]{background:#191919;height:100%;left:50%;top:0;transform-origin:50% 0;width:1px}.bottom-layer .horizontal[data-v-256667e9],.bottom-layer .vertical[data-v-256667e9]{position:absolute;transition:opacity .5s cubic-bezier(.215,.61,.355,1);opacity:.1}.bottom-layer .horizontal[data-v-256667e9]{height:2px;border-bottom:1px solid #191919;left:0;transform-origin:0 50%;top:50vh;width:100%;display:none}.bottom-layer .numbers[data-v-256667e9]{position:absolute;width:100%;top:33vh;display:flex;opacity:.3;transition:opacity .5s cubic-bezier(.215,.61,.355,1);justify-content:space-between}.bottom-layer .numbers li[data-v-256667e9]{padding:0 4vw;letter-spacing:6px;color:#191919}.red .bottom-layer .numbers[data-v-256667e9]{opacity:.5}.red .bottom-layer .vertical[data-v-256667e9]{opacity:.2}@media only screen and (max-width:1050px){.bottom-layer .numbers[data-v-256667e9]{display:none}}@media only screen and (min-width:600px) and (max-width:1050px){.bottom-layer .vertical[data-v-256667e9]{display:none}}@media only screen and (max-width:600px){.bottom-layer .horizontal[data-v-256667e9]{display:block}}", ""])
    },
    429: function(t, e, n) {
        "use strict";
        var o = n(333);
        n.n(o).a
    },
    430: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".background[data-v-2420e80e]{height:100vh;pointer-events:none;width:100vw}.background[data-v-2420e80e],.bg[data-v-2420e80e]{left:0;position:absolute;top:0}.bg[data-v-2420e80e]{background:#f93700;bottom:0;right:0}.fade-enter-active[data-v-2420e80e],.fade-leave-active[data-v-2420e80e]{transition:opacity .5s}.fade-enter[data-v-2420e80e],.fade-leave-to[data-v-2420e80e]{opacity:0}", ""])
    },
    431: function(t, e, n) {
        "use strict";
        var o = n(334);
        n.n(o).a
    },
    432: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, 'footer[data-v-67fc73a4]{position:absolute;width:100%;display:flex;bottom:0;justify-content:space-between;align-items:baseline}footer button[data-v-67fc73a4]{padding:0 4vw 3vh;position:relative;text-transform:uppercase;transition:color .3s cubic-bezier(.25,.46,.45,.94)}footer button[data-v-67fc73a4]:after{content:"";height:3px;width:100%;display:block;position:absolute;bottom:0;left:0;transition:transform .7s cubic-bezier(.25,.46,.45,.94)}footer button.active.nude[data-v-67fc73a4]:after,footer button.active.red[data-v-67fc73a4]:after{transform:translateY(0)}footer button.red[data-v-67fc73a4]{color:#191919}footer button.red.active[data-v-67fc73a4]{color:#fff}footer button.red[data-v-67fc73a4]:after{background:#fff;transform:translateX(-100%)}footer button.nude[data-v-67fc73a4]{color:#191919}footer button.nude.active[data-v-67fc73a4]{color:#f93700}footer button.nude[data-v-67fc73a4]:after{background:#f93700;transform:translateX(100%)}@media only screen and (max-width:1050px){footer[data-v-67fc73a4]{justify-content:center;padding-bottom:4vh}footer button[data-v-67fc73a4]{display:none}}', ""])
    },
    433: function(t) {
        t.exports = [[{
            top: -.001,
            left: .45
        }, {
            top: .3,
            left: 1.005
        }, {
            top: .72,
            left: .62
        }], [{
            top: .5,
            left: .35,
            pink: !0
        }], [{
            top: .55,
            left: -.001
        }, {
            top: .95,
            left: .25
        }]]
    },
    434: function(t, e, n) {
        "use strict";
        var o = n(335);
        n.n(o).a
    },
    435: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".home[data-v-0405a88c]{position:relative;height:100vh;width:100vw;z-index:1;overflow:hidden}.img-container[data-v-0405a88c]{position:absolute;width:30vw;top:50%;left:50%}.img-container.img-front[data-v-0405a88c]{z-index:5}.img-container.img-front div[data-v-0405a88c]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;transform:translate(-50%,-50%);display:block}.img-container.img-front div img[data-v-0405a88c]{transform:none}.img-container img[data-v-0405a88c]{display:block;position:relative;transform:translate(-50%,-50%);max-width:100%}.img-container .hover[data-v-0405a88c]{position:absolute;top:0;left:0;bottom:0;right:0}.img-container .hover img[data-v-0405a88c]{position:absolute}@media only screen and (max-width:1050px){.img-container[data-v-0405a88c]{width:50vw}}@media only screen and (max-width:600px){.img-container[data-v-0405a88c]{width:90vw}}h1[data-v-0405a88c]{color:#fff;font-family:Schnyder L,serif;font-size:7vw;font-weight:600;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}h1 .title-container[data-v-0405a88c]{position:absolute;top:0;left:0;bottom:0;right:0}h1 span[data-v-0405a88c]{display:block}h1 .label[data-v-0405a88c]{opacity:0}h1 .left[data-v-0405a88c],h1 .right[data-v-0405a88c]{position:absolute;top:0;overflow:hidden;width:70%}h1 .left span[data-v-0405a88c],h1 .right span[data-v-0405a88c]{transition:transform 2s cubic-bezier(.25,.46,.45,.94)}h1 .left[data-v-0405a88c]{left:-20%}h1 .left span[data-v-0405a88c]{transform:translateX(100%)}h1 .right[data-v-0405a88c]{right:-25%;text-align:right}h1 .right span[data-v-0405a88c]{transform:translateX(-100%)}h1.ready .left span[data-v-0405a88c],h1.ready .right span[data-v-0405a88c]{transform:translateX(0)}@media only screen and (max-width:1050px){h1[data-v-0405a88c]{font-size:10vw;height:55vw;width:50vw;z-index:3}h1 .left[data-v-0405a88c],h1 .right[data-v-0405a88c]{top:auto;right:auto;left:50%;bottom:auto;text-align:center}h1 .left span[data-v-0405a88c],h1 .right span[data-v-0405a88c]{opacity:0;transition:transform 1s cubic-bezier(.25,.46,.45,.94),opacity 1s cubic-bezier(.25,.46,.45,.94)}h1 .left[data-v-0405a88c]{top:0;left:50%;transform:translate(-50%,-60%)}h1 .left span[data-v-0405a88c]{transform:translateY(100%)}h1 .right[data-v-0405a88c]{bottom:0;transform:translate(-50%,40%)}h1 .right span[data-v-0405a88c]{opacity:0;transform:translateY(-100%)}h1.ready .left span[data-v-0405a88c],h1.ready .right span[data-v-0405a88c]{opacity:1;transform:translate(0)}}@media only screen and (max-width:600px){h1[data-v-0405a88c]{height:100vw;width:90vw}}.play[data-v-0405a88c]{position:absolute;top:68vh;left:50%;transform:translateX(-32vw);font-size:11px;text-transform:uppercase;letter-spacing:6px;text-align:left}@media only screen and (max-width:1050px){.play[data-v-0405a88c]{transform:translate(25vw,-33vw);top:50%}}@media only screen and (max-width:600px){.play[data-v-0405a88c]{top:2vh;text-align:center;width:50%;left:50%;transform:translate(-50%)}}.click[data-v-0405a88c]{position:absolute;text-align:left;left:75vw;top:70vh}.click ul[data-v-0405a88c]{font-size:18px;font-family:Schnyder L,serif;line-height:1.5;font-weight:600}.click button[data-v-0405a88c]{width:42px;height:42px;margin-left:-42px;position:relative}.click svg[data-v-0405a88c]{display:block;width:42px;height:42px;fill:#f93700}.click span[data-v-0405a88c]{color:#f93700;font-size:10px;text-transform:uppercase;position:absolute;white-space:nowrap;top:0;transform-origin:0 0;transform:translateX(20px) rotate(-30deg)}@media only screen and (max-width:1050px){.click[data-v-0405a88c]{text-align:center;left:50vw;transform:translateX(-50%);font-size:21px;top:75vh}.click button[data-v-0405a88c]{pointer-events:none;margin-left:0;width:100%}.click span[data-v-0405a88c]{display:none}.click svg[data-v-0405a88c]{margin:0 auto}}@media only screen and (max-width:600px){.click[data-v-0405a88c]{display:none}}.red .play[data-v-0405a88c]{color:#fff}.red .click svg[data-v-0405a88c]{fill:#dbd5c9}.red .click span[data-v-0405a88c],.red .click ul[data-v-0405a88c]{color:#fff}", ""])
    },
    436: function(t, e, n) {
        "use strict";
        var o = n(336);
        n.n(o).a
    },
    437: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, '.gems[data-v-41b75e0e]{background:#f2f2f2;overflow:hidden;height:100vh;width:100vw;position:relative}.gems strong[data-v-41b75e0e]{position:absolute;top:2vh;text-align:center;left:50%;transform:translateX(-50%)}.d-f[data-v-41b75e0e]{font-size:6vw;font-family:Schnyder L,serif;font-weight:600;height:100%}.d-f[data-v-41b75e0e],.line[data-v-41b75e0e]{display:flex;align-items:center}.line[data-v-41b75e0e]{justify-content:space-between;will-change:transform;line-height:1.11;padding:1vw 6vw;width:100vw}.line+.line[data-v-41b75e0e]{margin-top:2vw}.star[data-v-41b75e0e]{fill:#f93700;width:2vw;height:2vw;display:block}.underline[data-v-41b75e0e]{opacity:0;transition:opacity .5s cubic-bezier(.25,.46,.45,.94) .1s}.underline[data-v-41b75e0e],.underline span[data-v-41b75e0e]{position:relative}.underline[data-v-41b75e0e]:before{position:absolute;width:100%;height:.2vw;background:#f93700;content:"";bottom:0;display:block;transition:transform .5s cubic-bezier(.25,.46,.45,.94) .5s;transform:translateX(-150%)}.underline.ready[data-v-41b75e0e]{opacity:1}.underline.ready[data-v-41b75e0e]:before{transform:translateX(0)}.and[data-v-41b75e0e]{width:10vw;height:3vw;position:relative}.and span[data-v-41b75e0e]{text-align:center;line-height:1.6;font-size:1.5vw;border-bottom:.2vw solid #191919;opacity:0;position:absolute;width:100%;height:100%;transform:translateX(60%);transition:transform .5s cubic-bezier(.25,.46,.45,.94) .5s,opacity .7s cubic-bezier(.25,.46,.45,.94) .5s}.and span+span[data-v-41b75e0e]{transform:translateX(-60%)}.and.ready span[data-v-41b75e0e]{opacity:1;transform:translateX(0)}.word[data-v-41b75e0e]{display:flex}.mobile .gems[data-v-41b75e0e]{height:auto}.mobile .gems ul[data-v-41b75e0e]{padding:100px 0}.mobile .gems li[data-v-41b75e0e]{display:block;text-align:center;font-family:Schnyder L,serif;font-weight:600;font-size:12vw}.mobile .gems li+li[data-v-41b75e0e]{padding-top:2.5vh}.mobile .gems .star[data-v-41b75e0e]{width:30px;height:30px;margin:0 auto 30px}', ""])
    },
    438: function(t, e, n) {
        "use strict";
        var o = n(337);
        n.n(o).a
    },
    439: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".gems .inner{display:block}", ""])
    },
    440: function(t, e, n) {
        "use strict";
        var o = n(338);
        n.n(o).a
    },
    441: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, '.work[data-v-40a6668e]{position:relative}.inner[data-v-40a6668e],.work[data-v-40a6668e]{width:100%;height:100vh}.inner[data-v-40a6668e]{display:flex}.letter-container[data-v-40a6668e]{position:absolute;top:50%;left:50%}.letter[data-v-40a6668e]{font-size:10vw;text-align:center;width:8vw;font-weight:300;color:#191919;transform:translate(-50%,-50%)}.left[data-v-40a6668e],.right[data-v-40a6668e]{width:50%;height:100%;position:relative;overflow:hidden}.left img[data-v-40a6668e],.right img[data-v-40a6668e]{-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.left[data-v-40a6668e]{background:#fff}.left .img[data-v-40a6668e]{width:50%;height:60vh;overflow:hidden;margin:20vh auto 0}.left .text[data-v-40a6668e]{height:20vh;z-index:1;position:relative}.right[data-v-40a6668e]{background:#f2f2f2}.right .img[data-v-40a6668e]{width:100%;overflow:hidden;position:absolute;bottom:0;height:30vh}.right .text[data-v-40a6668e]{width:40%;left:50%;transform:translateY(-50%);position:absolute;top:35%}.title[data-v-40a6668e]{font-size:1.8vw;margin-bottom:10px}.h3[data-v-40a6668e]{font-size:3.1vw;line-height:.9;width:40%;margin:-20px auto;text-transform:uppercase}.h3[data-v-40a6668e],.type[data-v-40a6668e]{font-family:Schnyder L,serif;font-weight:600;text-align:center}.type[data-v-40a6668e]{font-size:20px;position:absolute;bottom:3vh;left:25%;width:50%;color:#191919}ul li[data-v-40a6668e]{display:inline}.intro[data-v-40a6668e]{width:50%;padding:50px 0}a[data-v-40a6668e]{font-family:Schnyder L,serif;font-weight:600;font-size:1.8vw;display:inline-block}a[data-v-40a6668e]:after{content:"";display:block;width:100%;height:2px;bottom:0;left:0;background:#000}.work+.work[data-v-40a6668e]{color:#fff}.work+.work .left[data-v-40a6668e]{background:#dbd5c9}.work+.work .right[data-v-40a6668e]{background:#f93700}.work+.work .right a[data-v-40a6668e]:after{background:#fff}@media only screen and (max-width:1050px){.work .letter[data-v-40a6668e]{display:none}.work .right .text[data-v-40a6668e]{position:relative;width:70%;padding-top:10vh;left:auto;top:auto;height:auto;margin:10px auto;transform:none}.work .left .img[data-v-40a6668e]{width:70%;z-index:1}.work p[data-v-40a6668e]{margin:10px 0}}@media only screen and (max-width:600px){.work[data-v-40a6668e]{padding:40px 0;height:auto;text-align:center;background:#fff}.work .left[data-v-40a6668e],.work .right[data-v-40a6668e]{background:none}.work .inner[data-v-40a6668e]{display:block;height:auto}.work .right .text[data-v-40a6668e]{position:relative;width:70%;left:auto;top:auto;height:auto;margin:10px auto;padding-top:0}.work .title[data-v-40a6668e]{display:none}.work .h3[data-v-40a6668e],.work .type[data-v-40a6668e]{position:relative;width:90%;margin:10px auto;top:auto;left:auto;bottom:auto}.work .h3[data-v-40a6668e]{font-size:31px}.work .left .img[data-v-40a6668e]{width:90%;position:relative;margin:0 auto;overflow:hidden}.work .left .text[data-v-40a6668e]{height:auto;padding-top:10px}.work .right .img[data-v-40a6668e]{display:none}.work .left[data-v-40a6668e],.work .right[data-v-40a6668e]{width:100%;height:auto}.work p[data-v-40a6668e]{margin:10px auto}.work a[data-v-40a6668e]{font-size:30px}.work+.work[data-v-40a6668e]{background:#f93700}.work+.work .type[data-v-40a6668e]{color:#fff}.work+.work .left[data-v-40a6668e],.work+.work .right[data-v-40a6668e]{background:none}}', ""])
    },
    442: function(t, e, n) {
        "use strict";
        var o = n(339);
        n.n(o).a
    },
    443: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".works[data-v-265c7e25]{overflow:hidden;height:200vh;width:100vw;position:relative}.strong[data-v-265c7e25]{position:absolute;display:block;left:75%;z-index:1;top:3vw}@media only screen and (max-width:1050px){.strong[data-v-265c7e25]{left:57%}}@media only screen and (max-width:600px){.strong[data-v-265c7e25]{position:relative;left:0;width:100%;text-align:center;top:auto;background:#fff;padding-top:7vh}}.dot-container[data-v-265c7e25]{font-size:10vw;position:absolute;top:25%;left:50%}.dot-container .dot[data-v-265c7e25]{text-align:center;font-weight:300;color:#191919;padding-left:8.5vw;transform:translate(-50%,-50%)}@media only screen and (max-width:1050px){.dot-container[data-v-265c7e25]{display:none}}.mobile .works[data-v-265c7e25]{height:auto}.mobile .works .dot-container[data-v-265c7e25]{display:none}", ""])
    },
    444: function(t, e, n) {
        "use strict";
        var o = n(340);
        n.n(o).a
    },
    445: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, '.worksLink[data-v-dbac1ad2]{height:50vh;width:100vw;position:relative;display:flex;justify-content:center;align-items:center;overflow:hidden}.worksLink a[data-v-dbac1ad2]{color:#fff;font-size:11vw;line-height:1.1;display:block;position:relative}.worksLink a[data-v-dbac1ad2]:after{content:"";background:#fff;height:.4vw;width:100%;bottom:0;position:absolute;left:0;display:block;transform:scaleX(0);transform-origin:0 50%;transition:transform .5s cubic-bezier(.25,.46,.45,.94)}.worksLink.ready a[data-v-dbac1ad2]:after{transform:scale(1)}@media only screen and (max-width:600px){.worksLink a[data-v-dbac1ad2]{width:50%;margin:0 auto;text-align:center;font-size:12vw}.worksLink a span[data-v-dbac1ad2]{line-height:1;display:inline-block;border-bottom:2px solid #fff}.worksLink a[data-v-dbac1ad2]:after{display:none}}', ""])
    },
    446: function(t, e, n) {
        "use strict";
        var o = n(341);
        n.n(o).a
    },
    447: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, '.contact[data-v-41f749ee]{height:100vh;font-size:8.3vw;position:relative;align-items:center;font-family:Schnyder L,serif;font-weight:600}.contact[data-v-41f749ee],.contact .line[data-v-41f749ee]{width:100vw;display:flex}.contact .line[data-v-41f749ee]{padding:1vh 6vw;line-height:1.1;justify-content:space-between;align-items:baseline}.contact .line[data-v-41f749ee]:first-child{justify-content:center}.contact strong[data-v-41f749ee]{transition:color .5s cubic-bezier(.25,.46,.45,.94)}.contact a[data-v-41f749ee]{color:#f93700;position:relative}.contact a[data-v-41f749ee]:after{content:"";display:block;bottom:0;width:100%;height:.3vw;left:0;background:#f93700;transform:scaleX(0);transform-origin:0 50%;transition:transform .5s cubic-bezier(.25,.46,.45,.94)}.contact svg[data-v-41f749ee]{display:block}.contact .arrow[data-v-41f749ee]{width:6.8vw;height:4.5vw;opacity:0;transform:translateX(-3vw);transition:transform .5s cubic-bezier(.25,.46,.45,.94),opacity .5s cubic-bezier(.25,.46,.45,.94)}.contact .arrow.red[data-v-41f749ee]{fill:#f93700}.contact .arrow+.arrow[data-v-41f749ee]{transition:transform .5s cubic-bezier(.25,.46,.45,.94) .2s,opacity .5s cubic-bezier(.25,.46,.45,.94) .2s}.contact .arrow+.arrow+.arrow[data-v-41f749ee]{transition:transform .5s cubic-bezier(.25,.46,.45,.94) .3s,opacity .5s cubic-bezier(.25,.46,.45,.94) .3s}.contact .star[data-v-41f749ee]{width:4.5vw;height:4.5vw;fill:#f93700}.contact .smiley[data-v-41f749ee]{width:4.1vw;height:4.1vw}.safari .contact strong[data-v-41f749ee]{color:#fff}.contact .ready a[data-v-41f749ee]:after{transform:scale(1)}.contact .ready .arrow[data-v-41f749ee]{opacity:1;transform:translateX(0)}.contact .ready strong[data-v-41f749ee]{color:#fff}.mobile .contact[data-v-41f749ee]{display:block;height:80vh}.mobile .contact svg[data-v-41f749ee]{width:30px;height:30px;margin:0 auto 30px}.mobile .contact p[data-v-41f749ee]{text-align:center;font-family:Schnyder L,serif;font-weight:600;font-size:12vw}.mobile .contact p a[data-v-41f749ee]{display:inline-block;line-height:1.2}.mobile .contact p a[data-v-41f749ee]:after{transform:scale(1);height:3px}', ""])
    },
    448: function(t, e, n) {
        "use strict";
        var o = n(342);
        n.n(o).a
    },
    449: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, '.thanks[data-v-3127b688]{height:auto;width:100vw;height:50vh;position:relative;display:flex;justify-content:center}.thanks[data-v-3127b688],.thanks p[data-v-3127b688]{align-items:center}.thanks p[data-v-3127b688]{font-size:2vw;font-family:Schnyder L,serif;font-weight:600;font-style:italic;text-align:center;line-height:1.1}.thanks p span[data-v-3127b688]{display:block;margin-bottom:.2vw}.thanks a[data-v-3127b688]{position:relative;display:inline-block}.thanks a[data-v-3127b688]:after{content:"";display:block;bottom:0;width:100%;height:2px;left:0;background:#191919;transform:scaleX(0);transform-origin:0 50%;transition:transform .5s cubic-bezier(.25,.46,.45,.94)}.thanks .ready a[data-v-3127b688]:after{transform:scale(1)}@media only screen and (max-width:1050px){.thanks[data-v-3127b688]{height:auto;padding:10vh 0 20vh}.thanks p[data-v-3127b688]{font-size:6vw}.thanks a[data-v-3127b688]:after{height:2px}}@media only screen and (max-width:600px){.thanks[data-v-3127b688]{padding:0 0 10vh}}', ""])
    },
    450: function(t, e, n) {
        "use strict";
        var o = n(343);
        n.n(o).a
    },
    451: function(t, e, n) {
        (t.exports = n(8)(!1)).push([t.i, ".index[data-v-7cf39d24]{position:relative}", ""])
    },
    458: function(t, e, n) {
        "use strict";
        n.r(e);
        n(285);
        var o = n(3)
            , r = n(13)
            , c = n(94)
            , l = n(20)
            , h = n.n(l)
            , d = n(1)
            , f = {
            data: function() {
                return {
                    isShown: !1
                }
            },
            props: ["circles", "id"],
            methods: {
                tick: function(t, e) {
                    h()(this.$el, {
                        translate3d: [200 * t, 200 * e, 0]
                    })
                },
                resize: function(t, e) {
                    var n = this;
                    t && e && (this.w = t,
                        this.h = e),
                    this.isShown && this.$refs.circles.forEach(function(circle, i) {
                        circle.style.top = n.circles[i].top * n.h + "px",
                            circle.style.left = n.circles[i].left * n.w + "px"
                    })
                },
                toggleShow: function(t) {
                    t ? this.show() : this.hide()
                },
                show: function() {
                    this.isShown = !0,
                        this.resize(),
                    this.anime && this.anime.pause(),
                        this.anime = Object(d.a)({
                            targets: this.$refs.circles,
                            scale: 1,
                            opacity: 1,
                            translateX: "-50%",
                            translateY: "-50%",
                            duration: 500,
                            delay: d.a.stagger(150),
                            easing: "easeOutQuad"
                        })
                },
                hide: function() {
                    this.isShown = !1,
                    this.anime && this.anime.pause(),
                        this.anime = Object(d.a)({
                            targets: this.$refs.circles,
                            scale: .4,
                            opacity: 0,
                            translateX: "-50%",
                            translateY: "100%",
                            duration: 300,
                            easing: "easeInQuad"
                        })
                }
            },
            beforeDestroy: function() {
                this.anime && this.anime.pause()
            },
            mounted: function() {
                d.a.set(this.$refs.circles, {
                    scale: .4,
                    opacity: 0,
                    translateX: "-50%",
                    translateY: "100%"
                })
            }
        }
            , v = (n(423),
            n(4))
            , m = Object(v.a)(f, function() {
            var t = this.$createElement
                , e = this._self._c || t;
            return e("div", {
                staticClass: "circles"
            }, this._l(this.circles, function(circle, t) {
                return e("svg", {
                    key: "circle-" + t,
                    ref: "circles",
                    refInFor: !0,
                    class: {
                        pink: circle.pink
                    },
                    attrs: {
                        viewBox: "0 0 100 100",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("circle", {
                    attrs: {
                        cx: "50",
                        cy: "50",
                        r: "50"
                    }
                })])
            }), 0)
        }, [], !1, null, "c0240b48", null).exports
            , w = {
            methods: {
                show: function() {
                    this.circleAnim = Object(d.a)({
                        targets: this.$refs.circle,
                        scaleX: 1,
                        scaleY: 1,
                        opacity: .2,
                        easing: "easeOutQuad",
                        delay: 500,
                        duration: 1500
                    }),
                        this.barAnim = Object(d.a)({
                            targets: this.$refs.bar,
                            scaleX: 1,
                            easing: "easeOutQuad",
                            duration: 1500,
                            delay: 700
                        })
                }
            },
            beforeDestroy: function() {
                this.barAnim && this.barAnim.pause(),
                this.circleAnim && this.circleAnim.pause()
            },
            mounted: function() {
                d.a.set(this.$refs.circle, {
                    scaleX: .5,
                    scaleY: .5,
                    opacity: 0
                }),
                    d.a.set(this.$refs.bar, {
                        scaleX: 0
                    })
            }
        }
            , y = (n(425),
            Object(v.a)(w, function() {
                var t = this.$createElement
                    , e = this._self._c || t;
                return e("div", {
                    staticClass: "top-layer"
                }, [e("div", {
                    ref: "bar",
                    staticClass: "horizontal"
                }), this._v(" "), e("div", {
                    staticClass: "circle-container"
                }, [e("div", {
                    ref: "circle",
                    staticClass: "circle"
                })])])
            }, [], !1, null, "496dcc90", null).exports)
            , k = {
            computed: {},
            methods: {
                show: function() {
                    this.numberAnim = Object(d.a)({
                        targets: this.$refs.numbers,
                        translateY: 0,
                        opacity: 1,
                        easing: "easeOutQuad",
                        duration: 500,
                        delay: d.a.stagger(200, {
                            easing: "easeOutIn"
                        })
                    }),
                        this.barAnim = Object(d.a)({
                            targets: this.$refs.bar,
                            scaleY: 1,
                            easing: "easeOutQuad",
                            duration: 2e3
                        }),
                        this.barHAnim = Object(d.a)({
                            targets: this.$refs.barH,
                            scaleX: 1,
                            easing: "easeOutQuad",
                            duration: 1500,
                            delay: 700
                        })
                }
            },
            beforeDestroy: function() {
                this.numberAnim && this.numberAnim.pause(),
                this.barAnim && this.barAnim.pause(),
                this.barHAnim && this.barHAnim.pause()
            },
            mounted: function() {
                d.a.set(this.$refs.numbers, {
                    translateY: 30,
                    opacity: 0
                }),
                    d.a.set(this.$refs.bar, {
                        scaleY: 0
                    }),
                    d.a.set(this.$refs.barH, {
                        scaleX: 0
                    })
            }
        }
            , x = (n(427),
            Object(v.a)(k, function() {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("div", {
                    staticClass: "bottom-layer"
                }, [n("div", {
                    ref: "bar",
                    staticClass: "vertical"
                }), t._v(" "), n("div", {
                    ref: "barH",
                    staticClass: "horizontal"
                }), t._v(" "), n("ul", {
                    staticClass: "numbers"
                }, t._l(9, function(e, o) {
                    return n("li", {
                        key: o,
                        ref: "numbers",
                        refInFor: !0
                    }, [t._v("0" + t._s(o + 1))])
                }), 0)])
            }, [], !1, null, "256667e9", null).exports)
            , _ = n(5)
            , C = {
            computed: Object(o.a)({}, Object(_.d)(["color"]))
        }
            , $ = (n(429),
            Object(v.a)(C, function() {
                var t = this.$createElement
                    , e = this._self._c || t;
                return e("div", {
                    staticClass: "background"
                }, [e("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "red" === this.color,
                        expression: "color === 'red'"
                    }],
                    staticClass: "bg"
                })])], 1)
            }, [], !1, null, "2420e80e", null).exports)
            , z = {
            data: function() {
                return {}
            },
            components: {
                vSocials: n(125).a
            },
            computed: Object(o.a)({}, Object(_.d)(["color"])),
            methods: Object(o.a)({}, Object(_.b)(["setColor"]), {
                show: function() {
                    this.$refs.socials.show(1e3),
                        this.showAnim = Object(d.a)({
                            targets: [this.$refs.buttonRed, this.$refs.buttonNude],
                            translateX: "0%",
                            duration: 700,
                            easing: "easeOutQuad",
                            delay: d.a.stagger(900, {
                                start: 500
                            })
                        })
                }
            }),
            beforeDestroy: function() {
                this.showAnim && this.showAnim.pause()
            },
            mounted: function() {
                d.a.set(this.$refs.buttonRed, {
                    translateX: "-100%"
                }),
                    d.a.set(this.$refs.buttonNude, {
                        translateX: "100%"
                    }),
                    this.$refs.socials.fastHide()
            }
        }
            , O = (n(431),
            Object(v.a)(z, function() {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("footer", [n("button", {
                    ref: "buttonRed",
                    staticClass: "red",
                    class: {
                        active: "red" === t.color
                    },
                    on: {
                        click: function(e) {
                            return t.setColor("red")
                        }
                    }
                }, [t._v("In red")]), t._v(" "), n("v-socials", {
                    ref: "socials"
                }), t._v(" "), n("button", {
                    ref: "buttonNude",
                    staticClass: "nude",
                    class: {
                        active: "nude" === t.color
                    },
                    on: {
                        click: function(e) {
                            return t.setColor("nude")
                        }
                    }
                }, [t._v("In Light")])], 1)
            }, [], !1, null, "67fc73a4", null).exports)
            , j = n(287)
            , P = n(27)
            , A = n(433)
            , L = {
            data: function() {
                return {
                    totalHover: 11,
                    isReady: !1,
                    isHover: !1,
                    w: 0,
                    h: 0,
                    homeCircles: A,
                    circlesShown: !1,
                    currentHover: 0
                }
            },
            computed: Object(o.a)({}, Object(_.d)(["color"]), Object(_.c)(["isDevice", "isPhone"])),
            components: {
                vBottomLayer: x,
                vTopLayer: y,
                vHomeFooter: O,
                vSvg: j.a,
                vCircles: m,
                vBackground: $
            },
            methods: Object(o.a)({}, Object(_.b)(["setVideo"]), {
                resize: function(t, e) {
                    var n = this;
                    t && e && (this.w = t,
                        this.h = e),
                        this.circles.forEach(function(circle) {
                            circle.resize(n.w, n.h)
                        })
                },
                tick: function(t) {
                    var e = this
                        , n = t / this.h
                        , o = this.w > 768 ? 1 : -1;
                    if (h()(this.$refs.topLayer.$el, {
                        translate3d: [0, 100 * n, 0]
                    }),
                        h()(this.$refs.title, {
                            translate3d: [0, o * n * 300, 0]
                        }),
                        h()(this.$refs.imgBack, {
                            translate3d: [0, 200 * n, 0]
                        }),
                        h()(this.$refs.imgFront, {
                            translate3d: [0, 200 * n, 0]
                        }),
                        this.$refs.title.style.opacity = 1 - 2 * n,
                    this.circlesShown && this.circles.forEach(function(circle) {
                        circle.tick(.5 - P.a.easeSlowX / e.w, .5 - P.a.easeSlowY / e.h)
                    }),
                        !this.isDevice) {
                        var r = P.a.x
                            , l = P.a.y + t
                            , d = (P.a.easeX,
                            P.a.easeY,
                        .5 * this.w - .32 * this.w)
                            , f = .68 * this.h
                            , v = this.distance(r, l, d, f)
                            , m = 0;
                        v < 200 && (m = Object(c.d)(1 - v / 200)) > 1 && (m = 1);
                        var w = (r - d) * m - .32 * this.w
                            , y = (l - f) * m;
                        h()(this.$refs.play, {
                            translate3d: [w, y, 0]
                        })
                    }
                },
                onMouseEnter: function() {
                    this.isPhone || (this.isHover = !0,
                        this.hoverTimeout = setTimeout(this.incrementHover.bind(this), 120),
                        this.$refs.imgFront.style.opacity = 0)
                },
                onMouseLeave: function() {
                    this.isPhone || (this.isHover = !1,
                        clearTimeout(this.hoverTimeout))
                },
                incrementHover: function() {
                    this.currentHover++,
                    this.currentHover === this.totalHover && (this.currentHover = 0),
                        this.hoverTimeout = setTimeout(this.incrementHover.bind(this), 120)
                },
                onPlayBtClicked: function() {
                    this.setVideo(!0),
                        r.a.emit("VIDEO_BUTTON_CLICKED")
                },
                showCircles: function() {
                    var t = this;
                    P.a.setMouse(),
                        this.circlesShown = !this.circlesShown,
                        this.circles.forEach(function(circle) {
                            circle.toggleShow(t.circlesShown)
                        })
                },
                distance: function(t, e, n, o) {
                    var r = t - n
                        , c = e - o;
                    return Math.sqrt(r * r + c * c)
                },
                show: function() {
                    var t = this;
                    this.isReady = !0,
                        this.$refs.topLayer.show(),
                        this.$refs.bottomLayer.show(),
                        this.$refs.footer.show(),
                        this.showAnim = Object(d.a)({
                            targets: [this.$refs.play, this.$refs.click],
                            opacity: 1,
                            easing: "easeOutQuad",
                            duration: 700,
                            delay: d.a.stagger(400, {
                                start: 1e3
                            }),
                            complete: function() {
                                t.$refs.imgFront.style.opacity = 0
                            }
                        }),
                        this.skillsAnim = Object(d.a)({
                            targets: this.skills,
                            opacity: 1,
                            translateY: "0%",
                            easing: "easeOutQuad",
                            duration: 700,
                            delay: d.a.stagger(100, {
                                start: 1300
                            })
                        })
                }
            }),
            beforeDestroy: function() {
                this.showAnim && this.showAnim.pause(),
                this.skillsAnim && this.skillsAnim.pause()
            },
            mounted: function() {
                var t = this;
                this.$el.querySelector(".label").style.opacity = 0,
                    this.$nextTick(function() {
                        t.circles = [t.$refs["circles-0"], t.$refs["circles-1"], t.$refs["circles-2"]]
                    }),
                    this.skills = [].slice.call(this.$refs.skills.querySelectorAll("li")),
                    d.a.set(this.$refs.play, {
                        opacity: 0
                    }),
                    d.a.set(this.$refs.click, {
                        opacity: 0
                    }),
                    d.a.set(this.skills, {
                        opacity: 0,
                        translateY: "100%"
                    })
            }
        }
            , S = (n(434),
            Object(v.a)(L, function() {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("article", {
                    staticClass: "home",
                    class: t.color
                }, [n("no-ssr", [n("v-background")], 1), t._v(" "), n("no-ssr", [n("v-circles", {
                    ref: "circles-0",
                    attrs: {
                        circles: t.homeCircles[0],
                        id: 0,
                        "aria-hidden": "true"
                    }
                })], 1), t._v(" "), n("no-ssr", [n("v-bottom-layer", {
                    ref: "bottomLayer",
                    attrs: {
                        "aria-hidden": "true"
                    }
                })], 1), t._v(" "), n("div", {
                    ref: "imgBack",
                    staticClass: "img-container"
                }, [n("img", {
                    class: {
                        "js-fs-on-mobile": t.isPhone
                    },
                    attrs: {
                        src: "",
                        "data-src": "/images/home/zhenya-bg.jpg",
                        alt: "Zhenya Rynzhuk",
                        width: "1070",
                        height: "1184"
                    }
                }), t._v(" "), n("no-ssr", [t.isPhone ? t._e() : n("div", {
                    staticClass: "hover"
                }, t._l(t.totalHover, function(e, i) {
                    return n("img", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.isHover && t.currentHover === i,
                            expression: "isHover && currentHover === i"
                        }],
                        key: i,
                        class: ["mom-" + i, {
                            "js-fs-on-mobile": t.isPhone
                        }],
                        attrs: {
                            "data-src": "/images/home/" + i + ".jpg",
                            alt: "Zhenya Rynzhuk",
                            width: "1070",
                            height: "1184"
                        }
                    })
                }), 0)])], 1), t._v(" "), n("no-ssr", [n("v-circles", {
                    ref: "circles-1",
                    attrs: {
                        circles: t.homeCircles[1],
                        id: 1,
                        "aria-hidden": "true"
                    }
                })], 1), t._v(" "), n("h1", {
                    class: {
                        ready: t.isReady
                    }
                }, [n("span", {
                    staticClass: "label"
                }, [t._v("Zhenya Rynzhuk")]), t._v(" "), n("no-ssr", [n("div", {
                    ref: "title",
                    staticClass: "title-container"
                }, [n("span", {
                    staticClass: "left"
                }, [n("span", [t._v("Zhenya ")])]), t._v(" "), n("span", {
                    staticClass: "right"
                }, [n("span", [t._v("Rynzhuk")])])])])], 1), t._v(" "), n("div", {
                    ref: "imgFront",
                    staticClass: "img-container img-front"
                }, [n("div", {
                    on: {
                        mouseenter: t.onMouseEnter,
                        mouseleave: t.onMouseLeave
                    }
                }, [n("img", {
                    class: {
                        "js-fs-on-mobile": t.isPhone
                    },
                    attrs: {
                        src: "",
                        "data-src": "/images/home/zhenya-front.png",
                        alt: "Zhenya Rynzhuk",
                        width: "1070",
                        height: "1184"
                    }
                })])]), t._v(" "), n("no-ssr", [n("v-top-layer", {
                    ref: "topLayer",
                    attrs: {
                        "aria-hidden": "true"
                    }
                })], 1), t._v(" "), n("button", {
                    ref: "play",
                    staticClass: "play",
                    attrs: {
                        "aria-label": "play video"
                    },
                    on: {
                        click: t.onPlayBtClicked
                    }
                }, [t._v("Play"), n("br"), t._v("Showreel")]), t._v(" "), n("div", {
                    staticClass: "click"
                }, [n("button", {
                    ref: "click",
                    attrs: {
                        "aria-label": "click"
                    },
                    on: {
                        click: t.showCircles
                    }
                }, [n("v-svg", {
                    staticClass: "star"
                }), n("span", [t._v("Click click")])], 1), t._v(" "), n("ul", {
                    ref: "skills"
                }, [n("li", [t._v("Art direction")]), t._v(" "), n("li", [t._v("Digital production")]), t._v(" "), n("li", [t._v("Branding")])])]), t._v(" "), n("no-ssr", [n("v-circles", {
                    ref: "circles-2",
                    attrs: {
                        circles: t.homeCircles[2],
                        id: 2,
                        "aria-hidden": "true"
                    }
                })], 1), t._v(" "), n("v-home-footer", {
                    ref: "footer"
                })], 1)
            }, [], !1, null, "0405a88c", null).exports)
            , M = (n(96),
            n(292))
            , R = {
            data: function() {
                return {
                    w: 0,
                    h: 0,
                    isShown: !1,
                    isBlurActive: !1,
                    showComplete: !1
                }
            },
            components: {
                vSvgStar: j.a
            },
            computed: Object(o.a)({}, Object(_.c)(["isDevice", "isPhone"])),
            mixins: [M.a],
            methods: {
                resize: function(t, e) {
                    t && e && (this.w = t,
                        this.h = e),
                        this.offset = this.h
                },
                tick: function(t) {
                    this.isPhone || (t > this.offset - .5 * this.h && !this.isShown && this.show(),
                        t > this.offset - .8 * this.h && t < this.offset + .5 * this.h && this.showComplete ? this.isBlurActive || this.startBlur() : this.isBlurActive && (this.isBlurActive = !1,
                        this.blurAnime && this.blurAnime.pause()))
                },
                show: function() {
                    this.isShown = !0,
                        this.words.forEach(function(t, i) {
                            Object(d.a)({
                                targets: t.inners,
                                opacity: 1,
                                translateX: 0,
                                duration: 100,
                                easing: "easeOutQuad",
                                delay: d.a.stagger(50, {
                                    start: 100 * i,
                                    easing: "easeInQuad"
                                })
                            })
                        }),
                        Object(d.a)({
                            targets: [this.star, this.blur],
                            opacity: 1,
                            easing: "easeOutQuad",
                            delay: d.a.stagger(200, {
                                start: 100
                            })
                        }),
                        setTimeout(this.startBlur.bind(this), 500)
                },
                startBlur: function() {
                    this.isDevice || (this.showComplete = !0,
                        this.isBlurActive = !0,
                        this.doBlur())
                },
                setup: function() {
                    this.words.forEach(function(t) {
                        var html = '<span class="inner">' + t.el.innerText.split("").join('</span><span class="inner">') + "</span>";
                        t.el.innerHTML = html,
                            t.inners = [].slice.call(t.el.querySelectorAll(".inner")),
                            t.inners.forEach(function(t) {
                                "" === t.innerText && (t.innerHTML = "&nbsp;")
                            }),
                            d.a.set(t.inners, {
                                opacity: 0,
                                translateX: 50
                            })
                    }),
                        d.a.set([this.blur, this.star], {
                            opacity: 0
                        })
                }
            },
            mounted: function() {
                var t = this;
                this.isPhone || (this.$el.querySelector("ul").style.display = "none",
                    this.$nextTick(function() {
                        var e = [].slice.call(t.$el.querySelectorAll(".word"));
                        t.words = [],
                            e.forEach(function(e) {
                                t.words.push({
                                    el: e
                                })
                            }),
                            t.star = t.$el.querySelector(".d-f .star"),
                            t.blur = t.$el.querySelector(".d-f .blur"),
                            t.setup()
                    }))
            }
        }
            , T = (n(436),
            n(438),
            Object(v.a)(R, function() {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("article", {
                    staticClass: "gems"
                }, [n("strong", {
                    staticClass: "strong"
                }, [n("span", {
                    class: {
                        "mobile-anime": t.isPhone
                    }
                }, [t._v("My main services")])]), t._v(" "), n("ul", [n("li", {
                    class: {
                        "mobile-anime": t.isPhone
                    }
                }, [n("v-svg-star", {
                    staticClass: "star"
                })], 1), t._v(" "), n("li", {
                    class: {
                        "mobile-anime": t.isPhone
                    }
                }, [t._v("Art direction")]), t._v(" "), n("li", {
                    class: {
                        "mobile-anime": t.isPhone
                    }
                }, [t._v("Product design")]), t._v(" "), n("li", {
                    class: {
                        "mobile-anime": t.isPhone
                    }
                }, [t._v("Visual design")]), t._v(" "), n("li", {
                    class: {
                        "mobile-anime": t.isPhone
                    }
                }, [t._v("Mobile design")]), t._v(" "), n("li", {
                    class: {
                        "mobile-anime": t.isPhone
                    }
                }, [t._v("Web design")]), t._v(" "), n("li", {
                    class: {
                        "mobile-anime": t.isPhone
                    }
                }, [t._v("Interaction design")]), t._v(" "), n("li", {
                    class: {
                        "mobile-anime": t.isPhone
                    }
                }, [t._v("Animation")])]), t._v(" "), n("no-ssr", [t.isPhone ? t._e() : n("div", {
                    staticClass: "d-f",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [n("div", [n("div", {
                    staticClass: "line"
                }, [n("span", {
                    staticClass: "word"
                }, [t._v("Art direction")]), t._v(" "), n("v-svg-star", {
                    staticClass: "star"
                }), t._v(" "), n("span", {
                    staticClass: "italic blur",
                    class: {
                        ready: t.isBlurActive
                    }
                }, [t._v("Product design\n            "), n("span", {
                    staticClass: "inner-blur",
                    attrs: {
                        "data-text": "Product design"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "inner-blur",
                    attrs: {
                        "data-text": "Product design"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "inner-blur",
                    attrs: {
                        "data-text": "Product design"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "inner-blur",
                    attrs: {
                        "data-text": "Product design"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "inner-blur",
                    attrs: {
                        "data-text": "Product design"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "inner-blur",
                    attrs: {
                        "data-text": "Product design"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "inner-blur",
                    attrs: {
                        "data-text": "Product design"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "inner-blur",
                    attrs: {
                        "data-text": "Product design"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "inner-blur",
                    attrs: {
                        "data-text": "Product design"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "inner-blur",
                    attrs: {
                        "data-text": "Product design"
                    }
                }), t._v(" "), n("span", {
                    staticClass: "inner-blur",
                    attrs: {
                        "data-text": "Product design"
                    }
                })])], 1), t._v(" "), n("div", {
                    staticClass: "line"
                }, [n("span", {
                    staticClass: "underline italic",
                    class: {
                        ready: t.isShown
                    }
                }, [n("span", [t._v("Visual design")])]), t._v(" "), n("span", {
                    staticClass: "word"
                }, [t._v("Mobile & web design")])]), t._v(" "), n("div", {
                    staticClass: "line"
                }, [n("span", {
                    staticClass: "word"
                }, [t._v("Interaction design")]), t._v(" "), n("div", {
                    staticClass: "and",
                    class: {
                        ready: t.isShown
                    }
                }, [n("span", [t._v("&")]), n("span", [t._v("&")])]), t._v(" "), n("span", {
                    staticClass: "word"
                }, [t._v("Animation")])])])])])], 1)
            }, [], !1, null, "41b75e0e", null).exports)
            , H = n(282)
            , E = {
            data: function() {
                return {
                    w: 0,
                    h: 0,
                    coef: -1,
                    isBlurReady: !1,
                    isHover: !1,
                    isTimerDone: !1,
                    isLeaveRequested: !1
                }
            },
            props: ["work", "id"],
            computed: Object(o.a)({}, Object(_.d)(["path"]), Object(_.c)(["isPhone", "isDevice"]), {
                letter: function() {
                    return this.work.title.charAt(0)
                }
            }),
            mixins: [M.a],
            methods: {
                resize: function(t, e) {
                    t && e && (this.w = t,
                        this.h = e),
                        this.offset = Object(H.a)(this.$el).top - this.h,
                    this.isPhone || (this.offsetImgR = Object(H.a)(this.$refs.rightImg).top - this.h)
                },
                tick: function(t, e) {
                    if (this.isPhone) {
                        var n = 0;
                        e >= this.offset && (n = (e - this.offset) / this.h),
                            n = Math.min(1, n),
                            h()(this.$refs.img, {
                                scale3d: [1.5 - .5 * n, 1.5 - .5 * n, 1]
                            })
                    } else {
                        var o = 0;
                        if (e >= this.offset && (o = (e - this.offset) / this.h),
                        0 === this.id && o > 1 && (h()(this.$refs.letter, {
                            translate3d: [0, (o - 1) * this.h * .8, 0]
                        }),
                            this.$refs.letter.style.opacity = 1 - 2 * o + 2),
                        (o = Math.min(1, o)) !== this.coef) {
                            var r = Object(c.a)(o);
                            h()(this.$refs.leftImgContainer, {
                                scale3d: [1.5 - .5 * r, 1.5 - .5 * r, 1]
                            }),
                                this.$refs.letter.style.opacity = Math.max(0, 2 * o - 1),
                            1 === this.id && h()(this.$refs.letter, {
                                translate3d: [0, .8 * -this.h + o * this.h * .8, 0]
                            }),
                                this.coef = o
                        }
                        if (e >= this.offsetImgR && e < this.offsetImgR + .5 * this.h) {
                            var l = Object(c.b)((e - this.offsetImgR) / (.5 * this.h));
                            h()(this.$refs.rightImg, {
                                scale3d: [1.25 - .25 * l, 1.25 - .25 * l, 1]
                            })
                        }
                        0 === this.id && o > 1 && (h()(this.$refs.letter, {
                            translate3d: [0, (o - 1) * this.h * .8, 0]
                        }),
                            this.$refs.letter.style.opacity = 1 - 2 * o + 2)
                    }
                },
                onMouseEnter: function() {
                    var t = this;
                    this.isDevice || (this.isBlurReady = !0,
                        this.doBlur(.4),
                    this.isHover || (this.isHover = !0,
                        this.isTimerDone = !1,
                        this.timer = setTimeout(function() {
                            t.isTimerDone = !0,
                                t.doOut()
                        }, 1e3)))
                },
                onMouseLeave: function() {
                    this.isDevice || (this.blurAnime && this.blurAnime.pause(),
                        this.isBlurReady = !1,
                        this.isLeaveRequested = !0,
                        this.doOut())
                },
                doOut: function() {
                    this.isLeaveRequested && this.isTimerDone && (this.isHover = !1)
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    if (!t.isPhone) {
                        var e = window.innerHeight;
                        h()(t.$refs.leftImgContainer, {
                            scale3d: [1.5, 1.5, 1]
                        }),
                            t.$refs.letter.style.opacity = 0,
                        1 === t.id && h()(t.$refs.letter, {
                            translate3d: [0, .8 * -e, 0]
                        }),
                            h()(t.$refs.rightImg, {
                                scale3d: [1.25, 1.25, 1]
                            })
                    }
                })
            }
        }
            , X = (n(440),
            {
                data: function() {
                    return {
                        w: 0,
                        h: 0,
                        coef: -1
                    }
                },
                components: {
                    vWork: Object(v.a)(E, function() {
                        var t = this
                            , e = t.$createElement
                            , n = t._self._c || e;
                        return n("article", {
                            staticClass: "work"
                        }, [n("div", {
                            staticClass: "inner"
                        }, [n("div", {
                            staticClass: "left"
                        }, [n("div", {
                            ref: "leftImgContainer",
                            staticClass: "img"
                        }, [n("img", {
                            ref: "img",
                            class: {
                                "js-fs-on-mobile": t.isPhone
                            },
                            attrs: {
                                src: "",
                                "data-src": "" + t.path + t.work.homeMenuNarrow,
                                alt: t.work.title,
                                width: "484",
                                height: "536"
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "text"
                        }, [n("h3", {
                            staticClass: "h3 mobile-anime",
                            domProps: {
                                innerHTML: t._s(t.work.title)
                            }
                        }), t._v(" "), n("p", {
                            staticClass: "type mobile-anime",
                            domProps: {
                                textContent: t._s(t.work.type)
                            }
                        })])]), t._v(" "), n("div", {
                            staticClass: "right"
                        }, [n("div", {
                            staticClass: "text"
                        }, [n("p", {
                            staticClass: "title mobile-anime",
                            domProps: {
                                innerHTML: t._s(t.work.title)
                            }
                        }), t._v(" "), n("ul", {
                            staticClass: "mobile-anime"
                        }, t._l(t.work.skills, function(e, o) {
                            return n("li", {
                                key: "skill-" + o,
                                staticClass: "strong",
                                domProps: {
                                    textContent: t._s(0 === o ? e : " / " + e)
                                }
                            })
                        }), 0), t._v(" "), n("p", {
                            staticClass: "intro mobile-anime",
                            domProps: {
                                innerHTML: t._s(t.work.intro)
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "mobile-anime"
                        }, [n("nuxt-link", {
                            staticClass: "link blur blur-sml",
                            class: {
                                "mobile-anime": t.isPhone,
                                ready: t.isBlurReady,
                                hover: t.isHover
                            },
                            attrs: {
                                to: {
                                    name: "work-slug",
                                    params: {
                                        slug: t.work.slug
                                    }
                                }
                            },
                            nativeOn: {
                                mouseenter: function(e) {
                                    return t.onMouseEnter(e)
                                },
                                mouseleave: function(e) {
                                    return t.onMouseLeave(e)
                                }
                            }
                        }, [t._v("Check full case +\n            "), n("no-ssr", [t.isBlurReady ? n("span", [n("span", {
                            staticClass: "inner-blur",
                            attrs: {
                                "data-text": "Check full case +"
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "inner-blur",
                            attrs: {
                                "data-text": "Check full case +"
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "inner-blur",
                            attrs: {
                                "data-text": "Check full case +"
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "inner-blur",
                            attrs: {
                                "data-text": "Check full case +"
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "inner-blur",
                            attrs: {
                                "data-text": "Check full case +"
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "inner-blur",
                            attrs: {
                                "data-text": "Check full case +"
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "inner-blur",
                            attrs: {
                                "data-text": "Check full case +"
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "inner-blur",
                            attrs: {
                                "data-text": "Check full case +"
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "inner-blur",
                            attrs: {
                                "data-text": "Check full case +"
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "inner-blur",
                            attrs: {
                                "data-text": "Check full case +"
                            }
                        })]) : t._e()])], 1)], 1)]), t._v(" "), n("no-ssr", [t.isPhone ? t._e() : n("div", {
                            staticClass: "img"
                        }, [n("img", {
                            ref: "rightImg",
                            attrs: {
                                src: "",
                                "data-src": "" + t.path + t.work.homeMenuLarge,
                                alt: t.work.title,
                                width: "960",
                                height: "377"
                            }
                        })])])], 1)]), t._v(" "), n("div", {
                            ref: "letter",
                            staticClass: "letter-container"
                        }, [n("div", {
                            staticClass: "letter",
                            domProps: {
                                textContent: t._s(t.letter)
                            }
                        })])])
                    }, [], !1, null, "40a6668e", null).exports
                },
                computed: Object(o.a)({}, Object(_.d)(["datas", "worksById"]), Object(_.c)(["isPhone"])),
                methods: {
                    resize: function(t, e) {
                        var n = this;
                        t && e && (this.w = t,
                            this.h = e),
                            this.$refs.works.forEach(function(t) {
                                t.resize(n.w, n.h)
                            })
                    },
                    tick: function(t, e) {
                        if (this.isPhone)
                            ;
                        else {
                            var n = 0
                                , o = 0;
                            if (e >= 2 * this.h && (n = e - 2 * this.h),
                            e >= this.h && (o = (e - this.h) / this.h),
                                n = Math.min(this.h, n),
                                o = Math.min(1, o),
                            this.coef !== o) {
                                Object(c.e)(o);
                                this.$refs.dot.style.opacity = Math.max(0, 2 * o - 1),
                                    this.coef = o
                            }
                            h()(this.$refs.dot, {
                                translate3d: [0, n, 0]
                            })
                        }
                        this.$refs.works.forEach(function(n) {
                            n.tick(t, e)
                        })
                    }
                },
                created: function() {},
                mounted: function() {}
            })
            , B = (n(442),
            Object(v.a)(X, function() {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("article", {
                    staticClass: "works"
                }, [n("strong", {
                    staticClass: "strong"
                }, [t._v("selected works")]), t._v(" "), t._l(t.datas.homeWorks, function(e, o) {
                    return n("v-work", {
                        key: "work-" + o,
                        ref: "works",
                        refInFor: !0,
                        attrs: {
                            work: t.worksById[e],
                            id: o
                        }
                    })
                }), t._v(" "), n("div", {
                    ref: "dot",
                    staticClass: "dot-container"
                }, [n("div", {
                    staticClass: "dot"
                }, [t._v(".")])])], 2)
            }, [], !1, null, "265c7e25", null).exports)
            , Y = n(95)
            , I = {
            data: function() {
                return {
                    w: 0,
                    h: 0,
                    coef: 0,
                    isReady: !1
                }
            },
            components: {
                vLink: Y.a
            },
            computed: Object(o.a)({}, Object(_.c)(["isPhone"])),
            methods: {
                resize: function(t, e) {
                    t && e && (this.w = t,
                        this.h = e),
                        this.offset = Object(H.a)(this.$el).top - this.h
                },
                tick: function(t, e) {
                    var n = 0;
                    if (e >= this.offset && (n = (e - this.offset) / this.h * 1.5),
                        (n = Math.min(1, n)) > .8 ? this.isReady || (this.isReady = !0) : this.isReady && (this.isReady = !1),
                    n !== this.coef) {
                        var o = Object(c.e)(n);
                        h()(this.$refs.link.$el, {
                            scale3d: [1.5 - .5 * o, 1.5 - .5 * o, 1]
                        }),
                            this.$refs.link.$el.style.opacity = 2 * o - 1,
                            this.coef = n
                    }
                }
            },
            mounted: function() {
                h()(this.$refs.link.$el, {
                    scale3d: [1.5, 1.5, 1]
                }),
                    this.$refs.link.$el.style.opacity = 0
            }
        }
            , D = (n(444),
            Object(v.a)(I, function() {
                var t = this.$createElement
                    , e = this._self._c || t;
                return e("div", {
                    staticClass: "worksLink",
                    class: {
                        ready: this.isReady
                    }
                }, [e("v-link", {
                    ref: "link",
                    attrs: {
                        to: {
                            name: "work"
                        }
                    }
                }, [e("span", [this._v("All cases")]), this._v(" "), e("span", [this._v("here")])])], 1)
            }, [], !1, null, "dbac1ad2", null).exports)
            , F = n(284)
            , Q = n(291)
            , N = {
            data: function() {
                return {
                    w: 0,
                    h: 0,
                    isShown: !1,
                    linesReady: [!1, !1, !1, !1],
                    arrow: [!1, !1, !1],
                    currentArrow: 0
                }
            },
            computed: Object(o.a)({}, Object(_.c)(["isPhone"]), Object(_.d)(["datas"])),
            components: {
                vSvgArrow: F.a,
                vSvgStar: j.a,
                vSvgSmiley: Q.a,
                vLink: Y.a
            },
            methods: {
                resize: function(t, e) {
                    t && e && (this.w = t,
                        this.h = e),
                        this.offset = Object(H.a)(this.$el).top
                },
                tick: function(t) {
                    var e = this;
                    this.isPhone || (t > this.offset - .7 * this.h && this.lines ? (this.isReseted = !1,
                        this.lines.forEach(function(line, i) {
                            var n = .2 * e.h
                                , o = e.offset - .7 * e.h + .1 * e.h * i
                                , r = 0;
                            t > o && (r = Object(c.b)(Math.min(1, (t - o) / n)),
                                h()(line, {
                                    translateY: 100 - 100 * r,
                                    scaleY: 1.5 - .5 * r
                                }),
                                line.style.opacity = r,
                            r > .95 && !e.linesReady[i] && (e.$set(e.linesReady, i, !0),
                            3 === i && e.switchArrow())),
                            0 === r && e.linesReady[i] && e.$set(e.linesReady, i, !1)
                        })) : this.isReseted || this.reset())
                },
                reset: function() {
                    this.isReseted = !0,
                        this.lines.forEach(function(line, i) {
                            h()(line, {
                                translateY: 100,
                                scaleY: 1.5
                            }),
                                line.style.opacity = 0
                        }),
                        clearTimeout(this.arrowTimer),
                        this.currentArrow = 0;
                    for (var t = 0; t < 3; t++)
                        this.$set(this.arrow, t, !1)
                },
                switchArrow: function() {
                    this.$set(this.arrow, this.currentArrow++, !1),
                        3 === this.currentArrow ? this.currentArrow = -1 : this.$set(this.arrow, this.currentArrow, !0),
                        this.arrowTimer = setTimeout(this.switchArrow.bind(this), 200)
                }
            },
            beforeDestroy: function() {
                clearTimeout(this.arrowTimer)
            },
            mounted: function() {
                var t = this;
                this.isPhone || (this.$el.querySelector("p").style.display = "none",
                    this.$nextTick(function() {
                        t.lines = [].slice.call(t.$el.querySelectorAll(".line")),
                            t.reset()
                    }))
            }
        }
            , V = (n(446),
            Object(v.a)(N, function() {
                var t = this
                    , e = t.$createElement
                    , n = t._self._c || e;
                return n("article", {
                    staticClass: "contact"
                }, [n("no-ssr", [t.isPhone ? n("v-svg-star", {
                    staticClass: "star mobile-anime"
                }) : t._e()], 1), t._v(" "), n("p", {
                    class: {
                        "mobile-anime": t.isPhone
                    }
                }, [t._v("Let’s make something great!"), n("br"), n("a", {
                    attrs: {
                        href: "mailto:" + t.datas.email,
                        rel: "noopener",
                        target: "_blank"
                    },
                    domProps: {
                        textContent: t._s(t.datas.email)
                    }
                }), t._v("  for any "), n("br"), t._v(" collaborations.")]), t._v(" "), n("no-ssr", [t.isPhone ? t._e() : n("div", [n("div", {
                    staticClass: "line",
                    class: {
                        ready: t.linesReady[0]
                    }
                }, [n("v-svg-smiley", {
                    staticClass: "smiley"
                })], 1), t._v(" "), n("div", {
                    staticClass: "line",
                    class: {
                        ready: t.linesReady[1]
                    }
                }, [t._v("Let’s make "), n("strong", {
                    staticClass: "italic"
                }, [t._v("something")]), t._v(" great!")]), t._v(" "), n("div", {
                    staticClass: "line",
                    class: {
                        ready: t.linesReady[2]
                    }
                }, [n("v-link", {
                    attrs: {
                        to: "mailto:" + t.datas.email
                    }
                }, [t._v(t._s(t.datas.email))]), n("v-svg-arrow", {
                    staticClass: "arrow"
                }), t._v(" "), n("span", {
                    staticClass: "italic"
                }, [t._v("for")])], 1), t._v(" "), n("div", {
                    staticClass: "line",
                    class: {
                        ready: t.linesReady[3]
                    }
                }, [n("v-svg-arrow", {
                    staticClass: "arrow",
                    class: {
                        red: t.arrow[0]
                    }
                }), n("v-svg-arrow", {
                    staticClass: "arrow",
                    class: {
                        red: t.arrow[1]
                    }
                }), n("v-svg-arrow", {
                    staticClass: "arrow",
                    class: {
                        red: t.arrow[2]
                    }
                }), n("span", [t._v("collaborations.")]), n("v-svg-star", {
                    staticClass: "star"
                })], 1)])])], 1)
            }, [], !1, null, "41f749ee", null).exports)
            , W = {
            data: function() {
                return {
                    w: 0,
                    h: 0,
                    showLink: !1
                }
            },
            computed: Object(o.a)({}, Object(_.c)(["isPhone"])),
            components: {
                vLink: Y.a
            },
            methods: {
                resize: function(t, e) {
                    t && e && (this.w = t,
                        this.h = e),
                        this.offset = Object(H.a)(this.$el).top - .7 * this.h
                },
                tick: function(t) {
                    this.isPhone || (t > this.offset ? this.showLink || (this.showLink = !0) : this.showLink && (this.showLink = !1))
                }
            },
            beforeDestroy: function() {},
            mounted: function() {
                this.isPhone && (this.showLink = !0)
            }
        }
            , Z = (n(448),
            {
                data: function() {
                    return {
                        w: 0,
                        h: 0,
                        isShown: !1
                    }
                },
                components: {
                    vHome: S,
                    vGems: T,
                    vWorks: B,
                    vWorksLink: D,
                    vContact: V,
                    vThanks: Object(v.a)(W, function() {
                        var t = this.$createElement
                            , e = this._self._c || t;
                        return e("article", {
                            staticClass: "thanks"
                        }, [e("p", {
                            class: {
                                ready: this.showLink,
                                "mobile-anime": this.isPhone
                            }
                        }, [e("span", [this._v("Special thanks to "), e("v-link", {
                            ref: "link",
                            staticClass: "link",
                            attrs: {
                                to: "https://www.romainavalle.dev"
                            }
                        }, [this._v("Romain Avalle")])], 1), e("span", [this._v("for development.")])])])
                    }, [], !1, null, "3127b688", null).exports
                },
                mixins: [n(289).a],
                computed: Object(o.a)({}, Object(_.d)(["isFirstTime"]), Object(_.c)(["isPhone"])),
                methods: {
                    resize: function(t, e) {
                        t && e && (this.w = t,
                            this.h = e),
                            this.$refs.home.resize(this.w, this.h),
                            this.$refs.gems.resize(this.w, this.h),
                            this.$refs.works.resize(this.w, this.h),
                            this.$refs.link.resize(this.w, this.h),
                            this.$refs.contact.resize(this.w, this.h),
                            this.$refs.thanks.resize(this.w, this.h),
                            this.resizeMobile()
                    },
                    tick: function(t, e) {
                        this.$refs.home.tick(t),
                            this.$refs.gems.tick(t),
                            this.$refs.works.tick(t, e),
                            this.$refs.link.tick(t, e),
                            this.$refs.contact.tick(t),
                            this.$refs.thanks.tick(t),
                            this.tickMobile(t)
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick(function() {
                        t.setupMobile(),
                            t.isShown = !0,
                            r.a.emit("PAGE:MOUNTED"),
                            setTimeout(function() {
                                t.$refs.home.show()
                            }, t.isFirstTime ? 1500 : 450)
                    })
                }
            })
            , G = (n(450),
            Object(v.a)(Z, function() {
                var t = this.$createElement
                    , e = this._self._c || t;
                return e("section", {
                    staticClass: "index"
                }, [e("v-home", {
                    ref: "home"
                }), this._v(" "), e("v-gems", {
                    ref: "gems"
                }), this._v(" "), e("v-works", {
                    ref: "works"
                }), this._v(" "), e("v-works-link", {
                    ref: "link"
                }), this._v(" "), e("v-thanks", {
                    ref: "thanks"
                }), this._v(" "), e("v-contact", {
                    ref: "contact"
                })], 1)
            }, [], !1, null, "7cf39d24", null));
        e.default = G.exports
    }
}]);
