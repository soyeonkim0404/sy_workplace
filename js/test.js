!function(t) {
    function e(r) {
        if (n[r])
            return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, e),
            i.l = !0,
            i.exports
    }
    var n = {};
    e.m = t,
        e.c = n,
        e.i = function(t) {
            return t
        }
        ,
        e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        e.n = function(t) {
            var n = t && t.__esModule ? function() {
                    return t.default
                }
                : function() {
                    return t
                }
            ;
            return e.d(n, "a", n),
                n
        }
        ,
        e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        e.p = "/dist/",
        e(e.s = 103)
}([function(t, e) {
    t.exports = function(t, e, n, r, i) {
        var o, a = t = t || {}, s = typeof t.default;
        "object" !== s && "function" !== s || (o = t,
            a = t.default);
        var c = "function" == typeof a ? a.options : a;
        e && (c.render = e.render,
            c.staticRenderFns = e.staticRenderFns),
        r && (c._scopeId = r);
        var u;
        if (i ? (u = function(t) {
            t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
            t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
            n && n.call(this, t),
            t && t._registeredComponents && t._registeredComponents.add(i)
        }
            ,
            c._ssrRegister = u) : n && (u = n),
            u) {
            var l = c.functional
                , f = l ? c.render : c.beforeCreate;
            l ? c.render = function(t, e) {
                    return u.call(e),
                        f(t, e)
                }
                : c.beforeCreate = f ? [].concat(f, u) : [u]
        }
        return {
            esModule: o,
            exports: a,
            options: c
        }
    }
}
    , function(t, e, n) {
        "use strict";
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(18)
            , o = n(11)
            , a = r(o)
            , s = n(21)
            , c = r(s);
        e.default = {
            data: function() {
                return {
                    isMobile: null,
                    mobMenuisHidden: window.matchMedia("(min-width: 992px)").matches,
                    cubeIsAnimate: !1,
                    menuIsAnimate: !1,
                    cubeTL: anime.timeline(),
                    loaderTL: anime.timeline(),
                    cubePos: {},
                    palateIsActive: !1,
                    currentPage: null,
                    deltaX: 0,
                    deltaY: 0
                }
            },
            components: {
                Icon: a.default
            },
            mounted: function() {
                anime.set(".social-icons__item", {
                    opacity: "0"
                }),
                    anime.set([this.$refs.cubeOverlay], {
                        scale: 0
                    }),
                    anime.set(".loader-page-trs .box", {
                        scale: "0"
                    });
                var t = new MobileDetect(window.navigator.userAgent);
                this.isMobile = t.mobile() || window.matchMedia("(max-width: 992px)").matches,
                    anime.set(".menu__item.left", {
                        translateX: "-110%"
                    }),
                    anime.set(".menu__item.top", {
                        translateY: "-110%"
                    }),
                    anime.set(".menu__item.right", {
                        translateX: "+110%"
                    }),
                    anime.set(".menu__item.bottom", {
                        translateY: "+110%"
                    }),
                    anime.set(this.$refs.btnSwipe, {
                        opacity: "0"
                    }),
                    this.showCube()
            },
            methods: {
                menuHover: function(t) {
                    var e = this
                        , n = t.currentTarget;
                    if (this.menuIsAnimate)
                        return !1;
                    this.menuIsAnimate = !0,
                        anime.timeline().add({
                            targets: n.children[0],
                            translateX: ["-30", "10", "0"],
                            duration: "500",
                            easing: "easeInQuart",
                            begin: function() {},
                            complete: function() {}
                        }).add({
                            targets: n.children[1],
                            translateX: ["0", "20", "0"],
                            duration: "500",
                            easing: "easeOutBack",
                            complete: function() {
                                e.menuIsAnimate = !1
                            }
                        }, "-=300")
                },
                toggleMobMenu: function() {
                    this.mobMenuisHidden = !this.mobMenuisHidden
                },
                swipeCube: function() {
                    var t = this;
                    if (void 0 !== this.$refs.cube) {
                        var e = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                                , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            t.$refs.cube.style.transform = "perspective(1000px) scale(1) rotateY(" + e + "deg) rotateX(" + n + "deg)",
                                t.cubePos.x = n,
                                t.cubePos.y = e
                        };
                        e(this.deltaX, this.deltaY);
                        var n = new Hammer(document.querySelector(".cube-wrap"));
                        n.get("pan").set({
                            direction: Hammer.DIRECTION_ALL
                        }),
                            n.on("pan", function(n) {
                                e(n.deltaX / 2 + t.deltaX, -n.deltaY / 2 + t.deltaY)
                            }),
                            n.on("panend", function(e) {
                                t.deltaX = t.cubePos.y,
                                    t.deltaY = t.cubePos.x
                            })
                    }
                },
                moveCube: function() {
                    var t = this;
                    if (this.cubeIsAnimate)
                        return !1;
                    var e = Math.floor(720 * Math.random()) + -360
                        , n = Math.floor(720 * Math.random()) + -360;
                    anime({
                        targets: this.$refs.cube,
                        rotateX: [this.cubePos.x, e],
                        rotateY: [this.cubePos.y, n],
                        duration: "1200",
                        easing: "easeInOutQuart",
                        begin: function() {
                            t.cubeIsAnimate = !0,
                                t.cubePos.x = e,
                                t.cubePos.y = n
                        },
                        complete: function() {
                            t.deltaY = e,
                                t.deltaX = n,
                                t.cubeIsAnimate = !1
                        }
                    })
                },
                showCube: function() {
                    var t = this;
                    this.setPerspective(),
                        anime.set(".cube-title", {
                            opacity: "0"
                        }),
                        (0,
                            c.default)({
                            target: [".weirdy-chars"],
                            by: "chars",
                            key: null
                        }),
                        (0,
                            i.wcBodyDefault)(".weirdy-chars .char", 30),
                        anime.timeline().add({
                            targets: this.$refs.cube,
                            scale: [.1, 1],
                            rotateX: ["-90", "360"],
                            rotateY: ["90", "0"],
                            duration: "1300",
                            easing: "easeInOutCirc",
                            begin: function() {
                                t.menuAnimation("0", "0", "0", "0")
                            },
                            complete: function() {
                                t.cubeMovement(),
                                    (0,
                                        i.wcBodyAmin)(".weirdy-chars .char")
                            }
                        }).add({
                            targets: ".cube-title",
                            opacity: 1,
                            duration: "100",
                            complete: function() {}
                        })
                },
                cubeMovement: function() {
                    if (1 == this.cubeIsAnimate)
                        return !1;
                    if (this.isMobile)
                        anime({
                            targets: this.$refs.btnSwipe,
                            opacity: "1"
                        }),
                            this.swipeCube();
                    else {
                        if (this.cubeIsAnimate)
                            return !1;
                        this.platePlugin()
                    }
                },
                setPerspective: function() {
                    anime.set(this.$refs.cube, {
                        perspective: "1000"
                    })
                },
                menuAnimation: function(t, e, n, r) {
                    anime({
                        targets: ".menu__item.left",
                        translateX: t,
                        duration: 800,
                        delay: 300,
                        easing: "easeInOutCirc"
                    }),
                        anime({
                            targets: ".menu__item.top",
                            translateY: e,
                            duration: 800,
                            delay: 300,
                            easing: "easeInOutCirc"
                        }),
                        anime({
                            targets: ".menu__item.right",
                            translateX: n,
                            duration: 800,
                            delay: 300,
                            easing: "easeInOutCirc"
                        }),
                        anime({
                            targets: ".menu__item.bottom",
                            translateY: r,
                            duration: 800,
                            delay: 300,
                            easing: "easeInOutCirc"
                        })
                },
                removePerspective: function() {
                    anime.set(this.$refs.cube, {
                        perspective: "0"
                    })
                },
                platePlugin: function() {
                    this.removePerspective(),
                        this.palateIsActive = !0,
                        $(this.$refs.nav).plate({
                            element: this.$refs.cube,
                            perspective: 1e3,
                            maxRotation: 100,
                            animationDuration: 200
                        })
                },
                typeOfPageTrs: function(t) {
                    if (1 == this.cubeIsAnimate)
                        return !1;
                    this.currentCubePos(),
                        this.currentPage = t.target.parentNode.getAttribute("data-nav-page"),
                        this.isMobile ? this.routeToPage(this.currentPage) : this.cubeTrsPage(t)
                },
                cubeTrsPage: function(t) {
                    var e = this;
                    this.cubeIsAnimate = !0,
                    this.palateIsActive && $(this.$refs.nav).plate("remove"),
                        this.setPerspective(),
                        this.cubeTL.add({
                            targets: this.$refs.cube,
                            scale: [1, .3, 1],
                            rotateX: [this.cubePos.x, "-180"],
                            rotateY: [this.cubePos.y, "0"],
                            duration: "1200",
                            easing: "easeInOutQuart",
                            begin: function() {
                                e.loaderTrsPage(),
                                    e.menuAnimation("-100%", "-100%", "+100%", "+100%")
                            },
                            complete: function() {}
                        }).add({
                            targets: this.$refs.cubeOverlay,
                            scale: 1.2,
                            duration: "1200",
                            easing: "easeOutExpo",
                            begin: function() {},
                            complete: function() {}
                        }, "-=250")
                },
                loaderTrsPage: function() {
                    var t = this;
                    this.$root.$emit("CustCursorLoader", 20, !0),
                        this.loaderTL.add({
                            targets: ".loader-page-trs .box",
                            rotate: ["0", "180"],
                            scale: ["0", "1"],
                            translateX: anime.stagger(10, {
                                grid: [5, 5],
                                from: "center",
                                axis: "x"
                            }),
                            translateY: anime.stagger(10, {
                                grid: [5, 5],
                                from: "center",
                                axis: "y"
                            }),
                            duration: 1800,
                            delay: anime.stagger(50, {
                                grid: [5, 5],
                                from: "center"
                            }),
                            complete: function() {
                                t.$root.$emit("CustCursorLoader", 1, !1),
                                    t.routeToPage(t.currentPage)
                            }
                        }, "+=800")
                },
                currentCubePos: function() {
                    var t = anime.get(this.$refs.cube, "rotateX")
                        , e = anime.get(this.$refs.cube, "rotateY")
                        , n = {
                        x: t,
                        y: e
                    };
                    this.cubePos = n
                },
                routeToPage: function(t) {
                    this.$router.push({
                        path: t
                    })
                },
                socialShow: function(t) {
                    var e = t.target.getAttribute("data-social-name");
                    this.socialHover(e, ["0", "1"], ["0", "1"], 600, 600)
                },
                socialHide: function(t) {
                    var e = t.target.getAttribute("data-social-name");
                    this.socialHover(e, ["1", "0"], ["1", "2"], 400, 300)
                },
                socialHover: function(t, e, n, r, i) {
                    var o = $(".social-icons").find('[data-social-name="' + t + '"]');
                    anime.remove(o[0]),
                        anime({
                            targets: o[0],
                            scale: n,
                            opacity: e,
                            duration: r,
                            elasticity: i,
                            easing: "easeOutBack"
                        })
                },
                showCopyright: function(t) {
                    this.animCopyright(["0"], ["1"], 600, 300)
                },
                hideCopyright: function(t) {
                    this.animCopyright(["-300"], ["0"], 1e3, 600)
                },
                animCopyright: function(t, e, n, r) {
                    anime.remove(this.$refs.copyright),
                        anime({
                            targets: this.$refs.copyright,
                            scale: e,
                            duration: n,
                            elasticity: r
                        })
                }
            }
        }
    }

]);
