! function(n) {
    "use strict";
    var i = "desktop";
    "function" == typeof window.matchMedia ? (n(window).on("resize financity-set-display", function() {
        i = window.matchMedia("(max-width: 419px)").matches ? "mobile-portrait" : window.matchMedia("(max-width: 767px)").matches ? "mobile-landscape" : window.matchMedia("(max-width: 959px)").matches ? "tablet" : "desktop"
    }), n(window).trigger("financity-set-display")) : (n(window).on("resize financity-set-display", function() {
        i = n(window).innerWidth() <= 419 ? "mobile-portrait" : n(window).innerWidth() <= 767 ? "mobile-landscape" : n(window).innerWidth() <= 959 ? "tablet" : "desktop"
    }), n(window).trigger("financity-set-display"));
    var t = function(n, i, t) {
            var e;
            return function() {
                var s = this,
                    a = arguments;
                e ? clearTimeout(e) : t && n.apply(s, a), e = setTimeout(function() {
                    t || n.apply(s, a), e = null
                }, i)
            }
        },
        e = function(n, i) {
            var t;
            return function() {
                var e = this,
                    s = arguments;
                t || (t = setTimeout(function() {
                    n.apply(e, s), t = null
                }, i))
            }
        },
        s = function(n) {
            0 != n.length && (this.main_menu = n, this.slide_bar = this.main_menu.children(".financity-navigation-slide-bar"), this.slide_bar_val = {
                width: 0,
                left: 0
            }, this.slide_bar_offset = 0, this.current_menu = this.main_menu.children(".sf-menu").children(".current-menu-item, .current-menu-ancestor").children("a"), this.init())
        };
    s.prototype = {
        init: function() {
            var i = this;
            i.sf_menu_mod(), "function" == typeof n.fn.superfish && (i.main_menu.superfish({
                delay: 400,
                speed: "fast"
            }), i.sf_menu_position(), n(window).resize(t(function() {
                i.sf_menu_position()
            }, 300))), i.slide_bar.length > 0 && i.init_slidebar()
        },
        sf_menu_mod: function() {
            this.main_menu.find(".sf-mega > ul").each(function() {
                var i = n("<div></div>"),
                    t = n('<div class="sf-mega-section-wrap" ></div>'),
                    e = 0;
                n(this).children("li").each(function() {
                    var s = parseInt(n(this).attr("data-size"));
                    e + s <= 60 ? e += s : (e = s, i.append(t), t = n('<div class="sf-mega-section-wrap" ></div>')), t.append(n('<div class="sf-mega-section" ></div>').addClass("financity-column-" + s).html(n('<div class="sf-mega-section-inner" ></div>').addClass(n(this).attr("class")).attr("id", n(this).attr("id")).html(n(this).html())))
                }), i.append(t), n(this).replaceWith(i.html())
            })
        },
        sf_menu_position: function() {
            if ("mobile-landscape" != i && "mobile-portrait" != i && "tablet" != i) {
                var t = n(".financity-body-wrapper"),
                    e = this.main_menu.find(".sf-menu > li.financity-normal-menu .sub-menu");
                e.css({
                    display: "block"
                }).removeClass("sub-menu-right"), e.each(function() {
                    n(this).offset().left + n(this).width() > t.outerWidth() && n(this).addClass("sub-menu-right")
                }), e.css({
                    display: "none"
                }), this.main_menu.find(".sf-menu > li.financity-mega-menu .sf-mega").each(function() {
                    n(this).hasClass("sf-mega-full") || (n(this).css({
                        display: "block"
                    }), n(this).css({
                        right: "",
                        "margin-left": -(n(this).width() - n(this).parent().outerWidth()) / 2
                    }), n(this).offset().left + n(this).width() > n(window).width() && n(this).css({
                        right: 0,
                        "margin-left": ""
                    }), n(this).css({
                        display: "none"
                    }))
                })
            }
        },
        init_slidebar: function() {
            var i = this;
            i.init_slidebar_pos(), n(window).load(function() {
                i.init_slidebar_pos()
            }), i.main_menu.children(".sf-menu").children("li").hover(function() {
                var t = n(this).children("a");
                t.length > 0 && i.slide_bar.animate({
                    width: t.outerWidth() + 2 * i.slide_bar_offset,
                    left: t.position().left - i.slide_bar_offset
                }, {
                    queue: !1,
                    duration: 250
                })
            }, function() {
                i.slide_bar.animate({
                    width: i.slide_bar_val.width,
                    left: i.slide_bar_val.left
                }, {
                    queue: !1,
                    duration: 250
                })
            }), n(window).on("resize", function() {
                i.init_slidebar_pos()
            }), n(window).on("financity-navigation-slider-bar-init", function() {
                i.current_menu = i.main_menu.children(".sf-menu").children(".current-menu-item, .current-menu-ancestor").children("a"), i.animate_slidebar_pos()
            }), n(window).on("financity-navigation-slider-bar-animate", function() {
                i.animate_slidebar_pos()
            })
        },
        init_slidebar_pos: function() {
            if ("mobile-landscape" != i && "mobile-portrait" != i && "tablet" != i) {
                var n = this;
                n.current_menu.length > 0 ? n.slide_bar_val = {
                    width: n.current_menu.outerWidth() + 2 * n.slide_bar_offset,
                    left: n.current_menu.position().left - n.slide_bar_offset
                } : n.slide_bar_val = {
                    width: 0,
                    left: n.main_menu.children("ul").children("li:first-child").position().left
                }, n.slide_bar.css({
                    width: n.slide_bar_val.width,
                    left: n.slide_bar_val.left,
                    display: "block"
                })
            }
        },
        animate_slidebar_pos: function() {
            if ("mobile-landscape" != i && "mobile-portrait" != i && "tablet" != i) {
                var n = this;
                n.current_menu.length > 0 ? n.slide_bar_val = {
                    width: n.current_menu.outerWidth() + 2 * n.slide_bar_offset,
                    left: n.current_menu.position().left - n.slide_bar_offset
                } : n.slide_bar_val = {
                    width: 0,
                    left: n.main_menu.children("ul").children("li:first-child").position().left
                }, n.slide_bar.animate({
                    width: n.slide_bar_val.width,
                    left: n.slide_bar_val.left
                }, {
                    queue: !1,
                    duration: 250
                })
            }
        }
    }, n.fn.financity_mobile_menu = function(i) {
        var t = n(this).siblings(".financity-mm-menu-button"),
            e = {
                navbar: {
                    title: '<span class="mmenu-custom-close" ></span>'
                },
                extensions: ["pagedim-black"]
            },
            s = {
                offCanvas: {
                    pageNodetype: ".financity-body-outer-wrapper"
                }
            };
        if (n(this).find('a[href="#"]').each(function() {
                var i = n(this).html();
                n('<span class="financity-mm-menu-blank" ></span>').html(i).insertBefore(n(this)), n(this).remove()
            }), n(this).attr("data-slide")) {
            var a = "financity-mmenu-" + n(this).attr("data-slide");
            n("html").addClass(a), e.offCanvas = {
                position: n(this).attr("data-slide")
            }
        }
        n(this).mmenu(e, s);
        var o = n(this).data("mmenu");
        n(this).find("a").not(".mm-next, .mm-prev").on('click', function() {
            o.close()
        }), n(this).find(".mmenu-custom-close").on('click', function() {
            o.close()
        }), n(window).resize(function() {
            o.close()
        }), o.bind("open", function(n) {
            t.addClass("financity-active")
        }), o.bind("close", function(n) {
            t.removeClass("financity-active")
        })
    };
    var a = function(n) {
        this.menu = n, this.menu_button = n.children(".financity-overlay-menu-icon"), this.menu_content = n.children(".financity-overlay-menu-content"), this.menu_close = this.menu_content.children(".financity-overlay-menu-close"), this.init()
    };
    a.prototype = {
        init: function() {
            var i = this,
                t = 0;
            i.menu_content.appendTo("body"), i.menu_content.find("ul.menu > li").each(function() {
                n(this).css("transition-delay", 150 * t + "ms"), t++
            }), i.menu_button.on('click', function() {
                return n(this).addClass("financity-active"), i.menu_content.fadeIn(200, function() {
                    n(this).addClass("financity-active")
                }), !1
            }), i.menu_close.on('click', function() {
                return i.menu_button.removeClass("financity-active"), i.menu_content.fadeOut(400, function() {
                    n(this).removeClass("financity-active")
                }), i.menu_content.find(".sub-menu").slideUp(200).removeClass("financity-active"), !1
            }), i.menu_content.find("a").on('click', function(t) {
                var e = n(this).siblings(".sub-menu");
                if (e.length > 0) {
                    if (!e.hasClass("financity-active")) {
                        var s = e.closest("li").siblings().find(".sub-menu.financity-active");
                        return s.length > 0 ? (s.removeClass("financity-active").slideUp(150), e.delay(150).slideDown(400, "easeOutQuart").addClass("financity-active")) : e.slideDown(400, "easeOutQuart").addClass("financity-active"), n(this).addClass("financity-no-preload"), !1
                    }
                    n(this).removeClass("financity-no-preload")
                } else i.menu_close.trigger("click")
            })
        }
    };
    var o = function(n) {
        0 != n.length && (this.prev_scroll = 0, this.side_nav = n, this.side_nav_content = n.children(), this.init())
    };
    o.prototype = {
        init: function() {
            var t = this;
            t.init_nav_bar_element(), n(window).resize(function() {
                t.init_nav_bar_element()
            }), n(window).scroll(function() {
                if ("mobile-landscape" != i && "mobile-portrait" != i && "tablet" != i && t.side_nav.hasClass("financity-allow-slide")) {
                    var e = parseInt(n("html").css("margin-top")),
                        s = n(window).scrollTop() > t.prev_scroll;
                    if (t.prev_scroll = n(window).scrollTop(), s) t.side_nav.hasClass("financity-fix-bottom") || (t.side_nav.hasClass("financity-fix-top") ? (t.side_nav.css("top", t.side_nav.offset().top), t.side_nav.removeClass("financity-fix-top")) : n(window).height() + n(window).scrollTop() > t.side_nav_content.offset().top + t.side_nav_content.outerHeight() && (t.side_nav.hasClass("financity-fix-bottom") || (t.side_nav.addClass("financity-fix-bottom"), t.side_nav.css("top", ""))));
                    else if (!t.side_nav.hasClass("financity-fix-top"))
                        if (t.side_nav.hasClass("financity-fix-bottom")) {
                            var a = n(window).scrollTop() + (n(window).height() - e) - t.side_nav_content.outerHeight();
                            t.side_nav.css("top", a), t.side_nav.removeClass("financity-fix-bottom")
                        } else n(window).scrollTop() + e < t.side_nav_content.offset().top && (t.side_nav.hasClass("financity-fix-top") || (t.side_nav.addClass("financity-fix-top"), t.side_nav.css("top", "")))
                }
            })
        },
        init_nav_bar_element: function() {
            if ("mobile-landscape" != i && "mobile-portrait" != i && "tablet" != i) {
                var t = this,
                    e = t.side_nav_content.children(".financity-pos-middle").addClass("financity-active"),
                    s = t.side_nav_content.children(".financity-pos-bottom").addClass("financity-active");
                t.side_nav_content.children(".financity-pre-spaces").remove(), n(window).height() < t.side_nav_content.height() ? t.side_nav.addClass("financity-allow-slide") : (t.side_nav.removeClass("financity-allow-slide financity-fix-top financity-fix-bottom").css("top", ""), t.side_nav.hasClass("financity-style-middle") && e.each(function() {
                    var i = parseInt(n(this).css("padding-top")),
                        e = (t.side_nav.height() - (t.side_nav_content.height() - i)) / 2 - i;
                    e > 0 && n('<div class="financity-pre-spaces" ></div>').css("height", e).insertBefore(n(this))
                }), s.each(function() {
                    var i = t.side_nav.height() - t.side_nav_content.height();
                    i > 0 && n('<div class="financity-pre-spaces" ></div>').css("height", i).insertBefore(n(this))
                }))
            }
        }
    };
    var r = function() {
        this.anchor_link = n('a[href*="#"]').not('[href="#"]').filter(function() {
            return !n(this).is(".financity-mm-menu-button, .mm-next, .mm-prev, .mm-title") && (!n(this).is(".fbx-btn-transition") && (!n(this).parent(".description_tab, .reviews_tab").length && !n(this).closest(".woocommerce").length))
        }), this.anchor_link.length && (this.menu_anchor = n("#financity-main-menu, #financity-bullet-anchor"), this.home_anchor = this.menu_anchor.find("ul.sf-menu > li.current-menu-item > a, ul.sf-menu > li.current-menu-ancestor > a, .financity-bullet-anchor-link.current-menu-item"), this.init())
    };
    r.prototype = {
        init: function() {
            var i = this;
            i.animate_anchor(), i.scroll_section(), i.menu_anchor.filter("#financity-bullet-anchor").each(function() {
                n(this).css("margin-top", -i.menu_anchor.height() / 2).addClass("financity-init")
            });
            var t = window.location.hash;
            t && setTimeout(function() {
                var e = i.menu_anchor.find('a[href*="' + t + '"]');
                e.is(".current-menu-item, .current-menu-ancestor") || (e.addClass("current-menu-item").siblings().removeClass("current-menu-item current-menu-ancestor"), n(window).trigger("financity-navigation-slider-bar-init")), i.scroll_to(t, !1, 300)
            }, 500)
        },
        animate_anchor: function() {
            var i = this;
            i.home_anchor.on('click', function() {
                if (window.location.href == this.href) return n("html, body").animate({
                    scrollTop: 0
                }, {
                    duration: 1500,
                    easing: "easeOutQuart"
                }), !1
            }), i.anchor_link.on('click', function() {
                if (location.hostname == this.hostname && location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "")) return i.scroll_to(this.hash, !0)
            })
        },
        scroll_to: function(i, t, e) {
            if ("#financity-top-anchor" == i) a = 0;
            else {
                var s = n(i);
                if (s.length) var a = s.offset().top
            }
            return void 0 !== a ? (a -= parseInt(n("html").css("margin-top")), void 0 !== window.financity_anchor_offset && (a -= parseInt(window.financity_anchor_offset)), a < 0 && (a = 0), n("html, body").animate({
                scrollTop: a
            }, {
                duration: 1500,
                easing: "easeOutQuart",
                queue: !1
            }), !1) : t ? (window.location.href = financity_script_core.home_url + i, !1) : void 0
        },
        scroll_section: function() {
            var t = this,
                e = this.menu_anchor.find('a[href*="#"]').not('[href="#"]');
            if (e.length) {
                var s = n("#financity-page-wrapper"),
                    a = s.find("div[id], section[id]");
                a.length && (e.each(function() {
                    0 == n(this).closest(".sub-menu").length && n(this.hash).length && n(this).attr("data-anchor", this.hash)
                }), n(window).scroll(function() {
                    if ("mobile-landscape" != i && "mobile-portrait" != i && "tablet" != i)
                        if (t.home_anchor.length && n(window).scrollTop() < s.offset().top) t.home_anchor.each(function() {
                            n(this).hasClass("financity-bullet-anchor-link") ? (n(this).addClass("current-menu-item").siblings().removeClass("current-menu-item"), n(this).parent(".financity-bullet-anchor").attr("data-anchor-section", "financity-home")) : n(this).parent(".current-menu-item, .current-menu-ancestor").length || (n(this).parent().addClass("current-menu-item").siblings().removeClass("current-menu-item current-menu-ancestor"), n(window).trigger("financity-navigation-slider-bar-init"))
                        });
                        else {
                            var o = n(window).scrollTop() + n(window).height() / 2;
                            a.each(function() {
                                if ("none" != n(this).css("display")) {
                                    var i = n(this).offset().top;
                                    if (o > i && o < i + n(this).outerHeight()) {
                                        var t = n(this).attr("id");
                                        return e.filter('[data-anchor="#' + t + '"]').each(function() {
                                            n(this).hasClass("financity-bullet-anchor-link") ? (n(this).addClass("current-menu-item").siblings().removeClass("current-menu-item"), n(this).parent(".financity-bullet-anchor").attr("data-anchor-section", t)) : n(this).parent("li.menu-item").length && !n(this).parent("li.menu-item").is(".current-menu-item, .current-menu-ancestor") && (n(this).parent("li.menu-item").addClass("current-menu-item").siblings().removeClass("current-menu-item current-menu-ancestor"), n(window).trigger("financity-navigation-slider-bar-init"))
                                        }), !1
                                    }
                                }
                            })
                        }
                }))
            }
        }
    };
    var l = function() {
        this.sticky_nav = n(".financity-with-sticky-navigation .financity-sticky-navigation"), this.mobile_menu = n("#financity-mobile-header"), this.sticky_nav.length ? this.init() : (this.style_mobile_slide(), n(window).trigger("financity-set-sticky-mobile-navigation"))
    };
    l.prototype = {
        init: function() {
            var i = this;
            i.sticky_nav.hasClass("financity-style-fixed") ? i.style_fixed() : i.sticky_nav.hasClass("financity-style-slide") && i.style_slide(), i.style_mobile_slide(), i.sticky_nav.hasClass("financity-sticky-navigation-height") ? (window.financity_anchor_offset = i.sticky_nav.outerHeight(), n(window).resize(function() {
                window.financity_anchor_offset = i.sticky_nav.outerHeight()
            })) : i.sticky_nav.attr("data-navigation-offset") ? window.financity_anchor_offset = parseInt(i.sticky_nav.attr("data-navigation-offset")) : window.financity_anchor_offset = 75, n(window).trigger("financity-set-sticky-navigation"), n(window).trigger("financity-set-sticky-mobile-navigation")
        },
        style_fixed: function() {
            var t = this,
                e = n('<div class="financity-sticky-menu-placeholder" ></div>');
            n(window).on("scroll financity-set-sticky-navigation", function() {
                if ("mobile-landscape" != i && "mobile-portrait" != i && "tablet" != i) {
                    var s = parseInt(n("html").css("margin-top"));
                    t.sticky_nav.hasClass("financity-fixed-navigation") ? n(window).scrollTop() + s <= e.offset().top && (t.sticky_nav.hasClass("financity-without-placeholder") || t.sticky_nav.height(e.height()), t.sticky_nav.insertBefore(e), t.sticky_nav.removeClass("financity-fixed-navigation"), e.remove(), setTimeout(function() {
                        t.sticky_nav.removeClass("financity-animate-fixed-navigation")
                    }, 10), setTimeout(function() {
                        t.sticky_nav.css("height", ""), n(window).trigger("financity-navigation-slider-bar-animate")
                    }, 200)) : n(window).scrollTop() + s > t.sticky_nav.offset().top && (t.sticky_nav.hasClass("financity-without-placeholder") || e.height(t.sticky_nav.outerHeight()), e.insertAfter(t.sticky_nav), n("body").append(t.sticky_nav), t.sticky_nav.addClass("financity-fixed-navigation"), setTimeout(function() {
                        t.sticky_nav.addClass("financity-animate-fixed-navigation")
                    }, 10), setTimeout(function() {
                        t.sticky_nav.css("height", ""), n(window).trigger("financity-navigation-slider-bar-animate")
                    }, 200))
                }
            })
        },
        style_slide: function() {
            var t = this,
                e = n('<div class="financity-sticky-menu-placeholder" ></div>');
            n(window).on("scroll financity-set-sticky-navigation", function() {
                if ("mobile-landscape" != i && "mobile-portrait" != i && "tablet" != i) {
                    var s = parseInt(n("html").css("margin-top"));
                    if (t.sticky_nav.hasClass("financity-fixed-navigation")) {
                        if (n(window).scrollTop() + s <= e.offset().top + e.height() + 200) {
                            var a = t.sticky_nav.clone();
                            a.insertAfter(t.sticky_nav), a.slideUp(200, function() {
                                n(this).remove()
                            }), t.sticky_nav.insertBefore(e), e.remove(), t.sticky_nav.removeClass("financity-fixed-navigation financity-animate-fixed-navigation"), t.sticky_nav.css("display", "block"), n(window).trigger("financity-navigation-slider-bar-animate")
                        }
                    } else n(window).scrollTop() + s > t.sticky_nav.offset().top + t.sticky_nav.outerHeight() + 200 && (t.sticky_nav.hasClass("financity-without-placeholder") || e.height(t.sticky_nav.outerHeight()), e.insertAfter(t.sticky_nav), t.sticky_nav.css("display", "none"), n("body").append(t.sticky_nav), t.sticky_nav.addClass("financity-fixed-navigation financity-animate-fixed-navigation"), t.sticky_nav.slideDown(200), n(window).trigger("financity-navigation-slider-bar-animate"))
                }
            })
        },
        style_mobile_slide: function() {
            var t = this,
                e = n('<div class="financity-sticky-mobile-placeholder" ></div>');
            n(window).on("scroll financity-set-sticky-mobile-navigation", function() {
                if ("mobile-landscape" == i || "mobile-portrait" == i || "tablet" == i) {
                    var s = parseInt(n("html").css("margin-top"));
                    if (t.mobile_menu.hasClass("financity-fixed-navigation")) {
                        if (n(window).scrollTop() + s <= e.offset().top + e.height() + 200) {
                            var a = t.mobile_menu.clone();
                            a.insertAfter(t.mobile_menu), a.slideUp(200, function() {
                                n(this).remove()
                            }), t.mobile_menu.insertBefore(e), e.remove(), t.mobile_menu.removeClass("financity-fixed-navigation"), t.mobile_menu.css("display", "block")
                        }
                    } else n(window).scrollTop() + s > t.mobile_menu.offset().top + t.mobile_menu.outerHeight() + 200 && (e.height(t.mobile_menu.outerHeight()).insertAfter(t.mobile_menu), n("body").append(t.mobile_menu), t.mobile_menu.addClass("financity-fixed-navigation"), t.mobile_menu.css("display", "none").slideDown(200))
                }
            })
        }
    };
    var c = function() {
        this.heading_font = n("h1, h2, h3, h4, h5, h6"), this.init()
    };
    c.prototype = {
        init: function() {
            var i = this;
            i.resize(), n(window).on("resize", e(function() {
                i.resize()
            }, 100))
        },
        resize: function() {
            var t = this;
            "mobile-landscape" == i || "mobile-portrait" == i ? t.heading_font.each(function() {
                parseInt(n(this).css("font-size")) > 40 && (n(this).attr("data-orig-font") || n(this).attr("data-orig-font", n(this).css("font-size")), n(this).css("font-size", "40px"))
            }) : t.heading_font.filter("[data-orig-font]").each(function() {
                n(this).css("font-size", n(this).attr("data-orig-font"))
            })
        }
    }, n(document).ready(function() {
        new c, n("#financity-main-menu, #financity-right-menu, #financity-mobile-menu").each(function() {
            n(this).hasClass("financity-overlay-menu") ? new a(n(this)) : n(this).hasClass("financity-mm-menu-wrap") ? n(this).financity_mobile_menu() : new s(n(this))
        }), n("#financity-top-search, #financity-mobile-top-search").each(function() {
            var i = n(this).siblings(".financity-top-search-wrap");
            i.appendTo("body"), n(this).on('click', function() {
                i.fadeIn(200, function() {
                    n(this).addClass("financity-active")
                })
            }), i.find(".financity-top-search-close").on('click', function() {
                i.fadeOut(200, function() {
                    n(this).addClass("financity-active")
                })
            }), i.find(".search-submit").on('click', function() {
                if (0 == i.find(".search-field").val().length) return !1
            })
        }), n("#financity-main-menu-cart, #financity-mobile-menu-cart").each(function() {
            n(this).hover(function() {
                n(this).addClass("financity-active financity-animating")
            }, function() {
                var i = n(this);
                i.removeClass("financity-active"), setTimeout(function() {
                    i.removeClass("financity-animating")
                }, 400)
            })
        }), n("#financity-dropdown-wpml-flag").hover(function() {
            n(this).children(".financity-dropdown-wpml-list").fadeIn(200)
        }, function() {
            n(this).children(".financity-dropdown-wpml-list").fadeOut(200)
        }), n(".financity-header-boxed-wrap, .financity-header-background-transparent").each(function() {
            var i = n(this),
                t = n(".financity-header-transparent-substitute");
            t.height(i.outerHeight()), n(window).on("load resize", function() {
                t.height(i.outerHeight())
            })
        }), n("body.error404, body.search-no-results").each(function() {
            var i = n(this).find("#financity-full-no-header-wrap"),
                t = parseInt(n(this).children(".financity-body-outer-wrapper").children(".financity-body-wrapper").css("margin-bottom")),
                e = (n(window).height() - i.offset().top - i.outerHeight() - t) / 2;
            e > 0 && i.css({
                "padding-top": e,
                "padding-bottom": e
            }), n(window).on("load resize", function() {
                i.css({
                    "padding-top": 0,
                    "padding-bottom": 0
                }), (e = (n(window).height() - i.offset().top - i.outerHeight() - t) / 2) > 0 && i.css({
                    "padding-top": e,
                    "padding-bottom": e
                })
            })
        });
        var i = n("#financity-footer-back-to-top-button");
        i.length && n(window).on("scroll", function() {
            n(window).scrollTop() > 300 ? i.addClass("financity-scrolled") : i.removeClass("financity-scrolled")
        }), n("body").children("#financity-page-preload").each(function() {
            var i = n(this),
                t = parseInt(i.attr("data-animation-time"));
            n("a[href]").not('[href^="#"], [target="_blank"], .gdlr-core-js, .strip').on('click', function(e) {
                1 != e.which || n(this).hasClass("financity-no-preload") || window.location.href != this.href && i.addClass("financity-out").fadeIn(t)
            }), n(window).load(function() {
                i.fadeOut(t)
            })
        })
    }), n(window).bind("pageshow", function(i) {
        i.originalEvent.persisted && n("body").children("#financity-page-preload").each(function() {
            n(this).fadeOut(400)
        })
    }), n(window).on("beforeunload", function() {
        n("body").children("#financity-page-preload").each(function() {
            n(this).fadeOut(400)
        })
    }), n(window).load(function() {
        n("#financity-fixed-footer").each(function() {
            var i = n(this),
                t = n('<div class="financity-fixed-footer-placeholder" ></div>');
            t.insertBefore(i), t.height(i.outerHeight()), n("body").css("min-height", n(window).height() - parseInt(n("html").css("margin-top"))), n(window).resize(function() {
                t.height(i.outerHeight()), n("body").css("min-height", n(window).height() - parseInt(n("html").css("margin-top")))
            })
        }), new o(n("#financity-header-side-nav")), new l, new r
    })
}(jQuery),
function(n) {
    function i() {
        n[t].glbl || (r = {
            $wndw: n(window),
            $docu: n(document),
            $html: n("html"),
            $body: n("body")
        }, s = {}, a = {}, o = {}, n.each([s, a, o], function(n, i) {
            i.add = function(n) {
                for (var t = 0, e = (n = n.split(" ")).length; e > t; t++) i[n[t]] = i.mm(n[t])
            }
        }), s.mm = function(n) {
            return "mm-" + n
        }, s.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), s.umm = function(n) {
            return "mm-" == n.slice(0, 3) && (n = n.slice(3)), n
        }, a.mm = function(n) {
            return "mm-" + n
        }, a.add("parent sub"), o.mm = function(n) {
            return n + ".mm"
        }, o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"), n[t]._c = s, n[t]._d = a, n[t]._e = o, n[t].glbl = r)
    }
    var t = "mmenu",
        e = "5.6.1";
    if (!(n[t] && n[t].version > e)) {
        n[t] = function(n, i, t) {
            this.$menu = n, this._api = ["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = i, this.conf = t, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
            var e = this.$pnls.children();
            return this._initAddons(), this.init(e), "function" == typeof this.___debug && this.___debug(), this
        }, n[t].version = e, n[t].addons = {}, n[t].uniqueId = 0, n[t].defaults = {
            extensions: [],
            navbar: {
                add: !0,
                title: "Menu",
                titleLink: "panel"
            },
            onClick: {
                setSelected: !0
            },
            slidingSubmenus: !0
        }, n[t].configuration = {
            classNames: {
                divider: "Divider",
                inset: "Inset",
                panel: "Panel",
                selected: "Selected",
                spacer: "Spacer",
                vertical: "Vertical"
            },
            clone: !1,
            openingInterval: 25,
            panelNodetype: "ul, ol, div",
            transitionDuration: 400
        }, n[t].prototype = {
            init: function(n) {
                n = n.not("." + s.nopanel), n = this._initPanels(n), this.trigger("init", n), this.trigger("update")
            },
            update: function() {
                this.trigger("update")
            },
            setSelected: function(n) {
                this.$menu.find("." + s.listview).children().removeClass(s.selected), n.addClass(s.selected), this.trigger("setSelected", n)
            },
            openPanel: function(i) {
                var e = i.parent(),
                    a = this;
                if (e.hasClass(s.vertical)) {
                    var o = e.parents("." + s.subopened);
                    if (o.length) return void this.openPanel(o.first());
                    e.addClass(s.opened), this.trigger("openPanel", i), this.trigger("openingPanel", i), this.trigger("openedPanel", i)
                } else {
                    if (i.hasClass(s.current)) return;
                    var r = this.$pnls.children("." + s.panel),
                        l = r.filter("." + s.current);
                    r.removeClass(s.highest).removeClass(s.current).not(i).not(l).not("." + s.vertical).addClass(s.hidden), n[t].support.csstransitions || l.addClass(s.hidden), i.hasClass(s.opened) ? i.nextAll("." + s.opened).addClass(s.highest).removeClass(s.opened).removeClass(s.subopened) : (i.addClass(s.highest), l.addClass(s.subopened)), i.removeClass(s.hidden).addClass(s.current), a.trigger("openPanel", i), setTimeout(function() {
                        i.removeClass(s.subopened).addClass(s.opened), a.trigger("openingPanel", i), a.__transitionend(i, function() {
                            a.trigger("openedPanel", i)
                        }, a.conf.transitionDuration)
                    }, this.conf.openingInterval)
                }
            },
            closePanel: function(n) {
                var i = n.parent();
                i.hasClass(s.vertical) && (i.removeClass(s.opened), this.trigger("closePanel", n), this.trigger("closingPanel", n), this.trigger("closedPanel", n))
            },
            closeAllPanels: function() {
                this.$menu.find("." + s.listview).children().removeClass(s.selected).filter("." + s.vertical).removeClass(s.opened);
                var n = this.$pnls.children("." + s.panel).first();
                this.$pnls.children("." + s.panel).not(n).removeClass(s.subopened).removeClass(s.opened).removeClass(s.current).removeClass(s.highest).addClass(s.hidden), this.openPanel(n)
            },
            togglePanel: function(n) {
                var i = n.parent();
                i.hasClass(s.vertical) && this[i.hasClass(s.opened) ? "closePanel" : "openPanel"](n)
            },
            getInstance: function() {
                return this
            },
            bind: function(n, i) {
                this.cbck[n] = this.cbck[n] || [], this.cbck[n].push(i)
            },
            trigger: function() {
                var n = this,
                    i = Array.prototype.slice.call(arguments),
                    t = i.shift();
                if (this.cbck[t])
                    for (var e = 0, s = this.cbck[t].length; s > e; e++) this.cbck[t][e].apply(n, i)
            },
            _initMenu: function() {
                this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
                    n(this).attr("id", s.mm(n(this).attr("id")))
                })), this.$menu.contents().each(function() {
                    3 == n(this)[0].nodeType && n(this).remove()
                }), this.$pnls = n('<div class="' + s.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(s.wrapper);
                var i = [s.menu];
                this.opts.slidingSubmenus || i.push(s.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && i.push(this.opts.extensions), this.$menu.addClass(i.join(" "))
            },
            _initPanels: function(i) {
                var t = this,
                    e = this.__findAddBack(i, "ul, ol");
                this.__refactorClass(e, this.conf.classNames.inset, "inset").addClass(s.nolistview + " " + s.nopanel), e.not("." + s.nolistview).addClass(s.listview);
                var o = this.__findAddBack(i, "." + s.listview).children();
                this.__refactorClass(o, this.conf.classNames.selected, "selected"), this.__refactorClass(o, this.conf.classNames.divider, "divider"), this.__refactorClass(o, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(i, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
                var r = n(),
                    l = i.add(i.find("." + s.panel)).add(this.__findAddBack(i, "." + s.listview).children().children(this.conf.panelNodetype)).not("." + s.nopanel);
                this.__refactorClass(l, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || l.addClass(s.vertical), l.each(function() {
                    var i = n(this),
                        e = i;
                    i.is("ul, ol") ? (i.wrap('<div class="' + s.panel + '" />'), e = i.parent()) : e.addClass(s.panel);
                    var a = i.attr("id");
                    i.removeAttr("id"), e.attr("id", a || t.__getUniqueId()), i.hasClass(s.vertical) && (i.removeClass(t.conf.classNames.vertical), e.add(e.parent()).addClass(s.vertical)), r = r.add(e)
                });
                var c = n("." + s.panel, this.$menu);
                r.each(function(i) {
                    var e, o, r = n(this),
                        l = r.parent(),
                        c = l.children("a, span").first();
                    if (l.is("." + s.panels) || (l.data(a.sub, r), r.data(a.parent, l)), l.children("." + s.next).length || l.parent().is("." + s.listview) && (e = r.attr("id"), o = n('<a class="' + s.next + '" href="#' + e + '" data-target="#' + e + '" />').insertBefore(c), c.is("span") && o.addClass(s.fullsubopen)), !r.children("." + s.navbar).length && !l.hasClass(s.vertical)) {
                        l.parent().is("." + s.listview) ? l = l.closest("." + s.panel) : (c = l.closest("." + s.panel).find('a[href="#' + r.attr("id") + '"]').first(), l = c.closest("." + s.panel));
                        var d = n('<div class="' + s.navbar + '" />');
                        if (l.length) {
                            switch (e = l.attr("id"), t.opts.navbar.titleLink) {
                                case "anchor":
                                    _url = c.attr("href");
                                    break;
                                case "panel":
                                case "parent":
                                    _url = "#" + e;
                                    break;
                                default:
                                    _url = !1
                            }
                            d.append('<a class="' + s.btn + " " + s.prev + '" href="#' + e + '" data-target="#' + e + '" />').append(n('<a class="' + s.title + '"' + (_url ? ' href="' + _url + '"' : "") + " />").text(c.text())).prependTo(r), t.opts.navbar.add && r.addClass(s.hasnavbar)
                        } else t.opts.navbar.title && (d.append('<a class="' + s.title + '">' + t.opts.navbar.title + "</a>").prependTo(r), t.opts.navbar.add && r.addClass(s.hasnavbar))
                    }
                });
                var d = this.__findAddBack(i, "." + s.listview).children("." + s.selected).removeClass(s.selected).last().addClass(s.selected);
                d.add(d.parentsUntil("." + s.menu, "li")).filter("." + s.vertical).addClass(s.opened).end().each(function() {
                    n(this).parentsUntil("." + s.menu, "." + s.panel).not("." + s.vertical).first().addClass(s.opened).parentsUntil("." + s.menu, "." + s.panel).not("." + s.vertical).first().addClass(s.opened).addClass(s.subopened)
                }), d.children("." + s.panel).not("." + s.vertical).addClass(s.opened).parentsUntil("." + s.menu, "." + s.panel).not("." + s.vertical).first().addClass(s.opened).addClass(s.subopened);
                var h = c.filter("." + s.opened);
                return h.length || (h = r.first()), h.addClass(s.opened).last().addClass(s.current), r.not("." + s.vertical).not(h.last()).addClass(s.hidden).end().filter(function() {
                    return !n(this).parent().hasClass(s.panels)
                }).appendTo(this.$pnls), r
            },
            _initAnchors: function() {
                var i = this;
                r.$body.on(o.click + "-oncanvas", "a[href]", function(e) {
                    var a = n(this),
                        o = !1,
                        r = i.$menu.find(a).length;
                    for (var l in n[t].addons)
                        if (n[t].addons[l].clickAnchor.call(i, a, r)) {
                            o = !0;
                            break
                        }
                    var c = a.attr("href");
                    if (!o && r && c.length > 1 && "#" == c.slice(0, 1)) try {
                        var d = n(c, i.$menu);
                        d.is("." + s.panel) && (o = !0, i[a.parent().hasClass(s.vertical) ? "togglePanel" : "openPanel"](d))
                    } catch (n) {}
                    if (o && e.preventDefault(), !o && r && a.is("." + s.listview + " > li > a") && !a.is('[rel="external"]') && !a.is('[target="_blank"]')) {
                        i.__valueOrFn(i.opts.onClick.setSelected, a) && i.setSelected(n(e.target).parent());
                        var h = i.__valueOrFn(i.opts.onClick.preventDefault, a, "#" == c.slice(0, 1));
                        h && e.preventDefault(), i.__valueOrFn(i.opts.onClick.close, a, h) && i.close()
                    }
                })
            },
            _initAddons: function() {
                var i;
                for (i in n[t].addons) n[t].addons[i].add.call(this), n[t].addons[i].add = function() {};
                for (i in n[t].addons) n[t].addons[i].setup.call(this)
            },
            _getOriginalMenuId: function() {
                var n = this.$menu.attr("id");
                return n && n.length && this.conf.clone && (n = s.umm(n)), n
            },
            __api: function() {
                var i = this,
                    t = {};
                return n.each(this._api, function(n) {
                    var e = this;
                    t[e] = function() {
                        var n = i[e].apply(i, arguments);
                        return void 0 === n ? t : n
                    }
                }), t
            },
            __valueOrFn: function(n, i, t) {
                return "function" == typeof n ? n.call(i[0]) : void 0 === n && void 0 !== t ? t : n
            },
            __refactorClass: function(n, i, t) {
                return n.filter("." + i).removeClass(i).addClass(s[t])
            },
            __findAddBack: function(n, i) {
                return n.find(i).add(n.filter(i))
            },
            __filterListItems: function(n) {
                return n.not("." + s.divider).not("." + s.hidden)
            },
            __transitionend: function(n, i, t) {
                var e = !1,
                    s = function() {
                        e || i.call(n[0]), e = !0
                    };
                n.one(o.transitionend, s), n.one(o.webkitTransitionEnd, s), setTimeout(s, 1.1 * t)
            },
            __getUniqueId: function() {
                return s.mm(n[t].uniqueId++)
            }
        }, n.fn[t] = function(e, s) {
            return i(), e = n.extend(!0, {}, n[t].defaults, e), s = n.extend(!0, {}, n[t].configuration, s), this.each(function() {
                var i = n(this);
                if (!i.data(t)) {
                    var a = new n[t](i, e, s);
                    a.$menu.data(t, a.__api())
                }
            })
        }, n[t].support = {
            touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
            csstransitions: function() {
                if ("undefined" != typeof Modernizr && void 0 !== Modernizr.csstransitions) return Modernizr.csstransitions;
                var n = (document.body || document.documentElement).style,
                    i = "transition";
                if ("string" == typeof n[i]) return !0;
                var t = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                i = i.charAt(0).toUpperCase() + i.substr(1);
                for (var e = 0; e < t.length; e++)
                    if ("string" == typeof n[t[e] + i]) return !0;
                return !1
            }()
        };
        var s, a, o, r
    }
}(jQuery),
function(n) {
    var i = "mmenu",
        t = "offCanvas";
    n[i].addons[t] = {
        setup: function() {
            if (this.opts[t]) {
                var s = this.opts[t],
                    a = this.conf[t];
                o = n[i].glbl, this._api = n.merge(this._api, ["open", "close", "setPage"]), ("top" == s.position || "bottom" == s.position) && (s.zposition = "front"), "string" != typeof a.pageSelector && (a.pageSelector = "> " + a.pageNodetype), o.$allMenus = (o.$allMenus || n()).add(this.$menu), this.vars.opened = !1;
                var r = [e.offcanvas];
                "left" != s.position && r.push(e.mm(s.position)), "back" != s.zposition && r.push(e.mm(s.zposition)), this.$menu.addClass(r.join(" ")).parent().removeClass(e.wrapper), this.setPage(o.$page), this._initBlocker(), this["_initWindow_" + t](), this.$menu[a.menuInjectMethod + "To"](a.menuWrapperSelector);
                var l = window.location.hash;
                if (l) {
                    var c = this._getOriginalMenuId();
                    c && c == l.slice(1) && this.open()
                }
            }
        },
        add: function() {
            e = n[i]._c, s = n[i]._d, a = n[i]._e, e.add("offcanvas slideout blocking modal background opening blocker page"), s.add("style"), a.add("resize")
        },
        clickAnchor: function(n, i) {
            if (!this.opts[t]) return !1;
            var e = this._getOriginalMenuId();
            return e && n.is('[href="#' + e + '"]') ? (this.open(), !0) : o.$page ? !(!(e = o.$page.first().attr("id")) || !n.is('[href="#' + e + '"]') || (this.close(), 0)) : void 0
        }
    }, n[i].defaults[t] = {
        position: "left",
        zposition: "back",
        blockUI: !0,
        moveBackground: !0
    }, n[i].configuration[t] = {
        pageNodetype: "div",
        pageSelector: null,
        noPageSelector: [],
        wrapPageIfNeeded: !0,
        menuWrapperSelector: "body",
        menuInjectMethod: "prepend"
    }, n[i].prototype.open = function() {
        if (!this.vars.opened) {
            var n = this;
            this._openSetup(), setTimeout(function() {
                n._openFinish()
            }, this.conf.openingInterval), this.trigger("open")
        }
    }, n[i].prototype._openSetup = function() {
        var i = this,
            r = this.opts[t];
        this.closeAllOthers(), o.$page.each(function() {
            n(this).data(s.style, n(this).attr("style") || "")
        }), o.$wndw.trigger(a.resize + "-" + t, [!0]);
        var l = [e.opened];
        r.blockUI && l.push(e.blocking), "modal" == r.blockUI && l.push(e.modal), r.moveBackground && l.push(e.background), "left" != r.position && l.push(e.mm(this.opts[t].position)), "back" != r.zposition && l.push(e.mm(this.opts[t].zposition)), this.opts.extensions && l.push(this.opts.extensions), o.$html.addClass(l.join(" ")), setTimeout(function() {
            i.vars.opened = !0
        }, this.conf.openingInterval), this.$menu.addClass(e.current + " " + e.opened)
    }, n[i].prototype._openFinish = function() {
        var n = this;
        this.__transitionend(o.$page.first(), function() {
            n.trigger("opened")
        }, this.conf.transitionDuration), o.$html.addClass(e.opening), this.trigger("opening")
    }, n[i].prototype.close = function() {
        if (this.vars.opened) {
            var i = this;
            this.__transitionend(o.$page.first(), function() {
                i.$menu.removeClass(e.current).removeClass(e.opened), o.$html.removeClass(e.opened).removeClass(e.blocking).removeClass(e.modal).removeClass(e.background).removeClass(e.mm(i.opts[t].position)).removeClass(e.mm(i.opts[t].zposition)), i.opts.extensions && o.$html.removeClass(i.opts.extensions), o.$page.each(function() {
                    n(this).attr("style", n(this).data(s.style))
                }), i.vars.opened = !1, i.trigger("closed")
            }, this.conf.transitionDuration), o.$html.removeClass(e.opening), this.trigger("close"), this.trigger("closing")
        }
    }, n[i].prototype.closeAllOthers = function() {
        o.$allMenus.not(this.$menu).each(function() {
            var t = n(this).data(i);
            t && t.close && t.close()
        })
    }, n[i].prototype.setPage = function(i) {
        var s = this,
            a = this.conf[t];
        i && i.length || (i = o.$body.find(a.pageSelector), a.noPageSelector.length && (i = i.not(a.noPageSelector.join(", "))), i.length > 1 && a.wrapPageIfNeeded && (i = i.wrapAll("<" + this.conf[t].pageNodetype + " />").parent())), i.each(function() {
            n(this).attr("id", n(this).attr("id") || s.__getUniqueId())
        }), i.addClass(e.page + " " + e.slideout), o.$page = i, this.trigger("setPage", i)
    }, n[i].prototype["_initWindow_" + t] = function() {
        o.$wndw.off(a.keydown + "-" + t).on(a.keydown + "-" + t, function(n) {
            return o.$html.hasClass(e.opened) && 9 == n.keyCode ? (n.preventDefault(), !1) : void 0
        });
        var n = 0;
        o.$wndw.off(a.resize + "-" + t).on(a.resize + "-" + t, function(i, t) {
            if (1 == o.$page.length && (t || o.$html.hasClass(e.opened))) {
                var s = o.$wndw.height();
                (t || s != n) && (n = s, o.$page.css("minHeight", s))
            }
        })
    }, n[i].prototype._initBlocker = function() {
        var i = this;
        this.opts[t].blockUI && (o.$blck || (o.$blck = n('<div id="' + e.blocker + '" class="' + e.slideout + '" />')), o.$blck.appendTo(o.$body).off(a.touchstart + "-" + t + " " + a.touchmove + "-" + t).on(a.touchstart + "-" + t + " " + a.touchmove + "-" + t, function(n) {
            n.preventDefault(), n.stopPropagation(), o.$blck.trigger(a.mousedown + "-" + t)
        }).off(a.mousedown + "-" + t).on(a.mousedown + "-" + t, function(n) {
            n.preventDefault(), o.$html.hasClass(e.modal) || (i.closeAllOthers(), i.close())
        }))
    };
    var e, s, a, o
}(jQuery),
function(n) {
    var i = "mmenu",
        t = "scrollBugFix";
    n[i].addons[t] = {
        setup: function() {
            var s = this,
                r = this.opts[t];
            if (this.conf[t], o = n[i].glbl, n[i].support.touch && this.opts.offCanvas && this.opts.offCanvas.modal && ("boolean" == typeof r && (r = {
                    fix: r
                }), "object" != typeof r && (r = {}), (r = this.opts[t] = n.extend(!0, {}, n[i].defaults[t], r)).fix)) {
                var l = this.$menu.attr("id"),
                    c = !1;
                this.bind("opening", function() {
                    this.$pnls.children("." + e.current).scrollTop(0)
                }), o.$docu.on(a.touchmove, function(n) {
                    s.vars.opened && n.preventDefault()
                }), o.$body.on(a.touchstart, "#" + l + "> ." + e.panels + "> ." + e.current, function(n) {
                    s.vars.opened && (c || (c = !0, 0 === n.currentTarget.scrollTop ? n.currentTarget.scrollTop = 1 : n.currentTarget.scrollHeight === n.currentTarget.scrollTop + n.currentTarget.offsetHeight && (n.currentTarget.scrollTop -= 1), c = !1))
                }).on(a.touchmove, "#" + l + "> ." + e.panels + "> ." + e.current, function(i) {
                    s.vars.opened && n(this)[0].scrollHeight > n(this).innerHeight() && i.stopPropagation()
                }), o.$wndw.on(a.orientationchange, function() {
                    s.$pnls.children("." + e.current).scrollTop(0).css({
                        "-webkit-overflow-scrolling": "auto"
                    }).css({
                        "-webkit-overflow-scrolling": "touch"
                    })
                })
            }
        },
        add: function() {
            e = n[i]._c, s = n[i]._d, a = n[i]._e
        },
        clickAnchor: function(n, i) {}
    }, n[i].defaults[t] = {
        fix: !0
    };
    var e, s, a, o
}(jQuery),
function(n, i) {
    "use strict";
    var t = function() {
        var t = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                menuArrowClass: "sf-arrows"
            },
            e = function() {
                var i = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
                return i && n("html").css("cursor", "pointer").on("click", n.noop), i
            }(),
            s = function() {
                var n = document.documentElement.style;
                return "behavior" in n && "fill" in n && /iemobile/i.test(navigator.userAgent)
            }(),
            a = !!i.PointerEvent,
            o = function(n, i) {
                var e = t.menuClass;
                i.cssArrows && (e += " " + t.menuArrowClass), n.toggleClass(e)
            },
            r = function(i, e) {
                return i.find("li." + e.pathClass).slice(0, e.pathLevels).addClass(e.hoverClass + " " + t.bcClass).filter(function() {
                    return n(this).children(e.popUpSelector).hide().show().length
                }).removeClass(e.pathClass)
            },
            l = function(n) {
                n.children("a").toggleClass(t.anchorClass)
            },
            c = function(n) {
                var i = n.css("ms-touch-action"),
                    t = n.css("touch-action");
                t = "pan-y" === (t = t || i) ? "auto" : "pan-y", n.css({
                    "ms-touch-action": t,
                    "touch-action": t
                })
            },
            d = function(i, t) {
                var o = "li:has(" + t.popUpSelector + ")";
                n.fn.hoverIntent && !t.disableHI ? i.hoverIntent(f, u, o) : i.on("mouseenter.superfish", o, f).on("mouseleave.superfish", o, u);
                var r = "MSPointerDown.superfish";
                a && (r = "pointerdown.superfish"), e || (r += " touchend.superfish"), s && (r += " mousedown.superfish"), i.on("focusin.superfish", "li", f).on("focusout.superfish", "li", u).on(r, "a", t, h)
            },
            h = function(i) {
                var t = n(this),
                    e = v(t),
                    s = t.siblings(i.data.popUpSelector);
                return !1 === e.onHandleTouch.call(s) ? this : void(s.length > 0 && s.is(":hidden") && (t.one("click.superfish", !1), "MSPointerDown" === i.type || "pointerdown" === i.type ? t.trigger("focus") : n.proxy(f, t.parent("li"))()))
            },
            f = function() {
                var i = n(this),
                    t = v(i);
                clearTimeout(t.sfTimer), i.siblings().superfish("hide").end().superfish("show")
            },
            u = function() {
                var i = n(this),
                    t = v(i);
                e ? n.proxy(p, i, t)() : (clearTimeout(t.sfTimer), t.sfTimer = setTimeout(n.proxy(p, i, t), t.delay))
            },
            p = function(i) {
                i.retainPath = n.inArray(this[0], i.$path) > -1, this.superfish("hide"), this.parents("." + i.hoverClass).length || (i.onIdle.call(m(this)), i.$path.length && n.proxy(f, i.$path)())
            },
            m = function(n) {
                return n.closest("." + t.menuClass)
            },
            v = function(n) {
                return m(n).data("sf-options")
            };
        return {
            hide: function(i) {
                if (this.length) {
                    var t = this,
                        e = v(t);
                    if (!e) return this;
                    var s = !0 === e.retainPath ? e.$path : "",
                        a = t.find("li." + e.hoverClass).add(this).not(s).removeClass(e.hoverClass).children(e.popUpSelector),
                        o = e.speedOut;
                    if (i && (a.show(), o = 0), e.retainPath = !1, !1 === e.onBeforeHide.call(a)) return this;
                    a.stop(!0, !0).animate(e.animationOut, o, "easeOutQuad", function() {
                        var i = n(this);
                        e.onHide.call(i)
                    })
                }
                return this
            },
            show: function() {
                var n = v(this);
                if (!n) return this;
                var i = this.addClass(n.hoverClass).children(n.popUpSelector);
                return !1 === n.onBeforeShow.call(i) ? this : (i.stop(!0, !0).animate(n.animation, n.speed, "easeOutQuad", function() {
                    n.onShow.call(i)
                }), this)
            },
            destroy: function() {
                return this.each(function() {
                    var i, e = n(this),
                        s = e.data("sf-options");
                    return !!s && (i = e.find(s.popUpSelector).parent("li"), clearTimeout(s.sfTimer), o(e, s), l(i), c(e), e.off(".superfish").off(".hoverIntent"), i.children(s.popUpSelector).attr("style", function(n, i) {
                        return i.replace(/display[^;]+;?/g, "")
                    }), s.$path.removeClass(s.hoverClass + " " + t.bcClass).addClass(s.pathClass), e.find("." + s.hoverClass).removeClass(s.hoverClass), s.onDestroy.call(e), void e.removeData("sf-options"))
                })
            },
            init: function(i) {
                return this.each(function() {
                    var e = n(this);
                    if (e.data("sf-options")) return !1;
                    var s = n.extend({}, n.fn.superfish.defaults, i),
                        a = e.find(s.popUpSelector).parent("li");
                    s.$path = r(e, s), e.data("sf-options", s), o(e, s), l(a), c(e), d(e, s), a.not("." + t.bcClass).superfish("hide", !0), s.onInit.call(this)
                })
            }
        }
    }();
    n.fn.superfish = function(i, e) {
        return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? n.error("Method " + i + " does not exist on jQuery.fn.superfish") : t.init.apply(this, arguments)
    }, n.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: n.noop,
        onBeforeShow: n.noop,
        onShow: n.noop,
        onBeforeHide: n.noop,
        onHide: n.noop,
        onIdle: n.noop,
        onDestroy: n.noop,
        onHandleTouch: n.noop
    }
}(jQuery, window);