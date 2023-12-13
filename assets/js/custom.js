(function($) {
  
    "use strict";

    // Preloader 
    function stylePreloader() {
        $('body').addClass('preloader-deactive');
    }

    // Background Image
    $('[data-bg-img]').each(function() {
        $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
    });

    // Css Function Js
    $('[data-width]').each(function() {
        $(this).css('width', $(this).data("width"));
    });
    $('[data-height]').each(function() {
        $(this).css('height', $(this).data("height"));
    });
    $('[data-opacity]').each(function() {
        $(this).css('opacity', $(this).data("opacity"));
    });

    // Match Height Js
    $(".matchHeight").matchHeight();

    // Off Canvas JS
    var canvasWrapper = $(".off-canvas-wrapper");
    $(".btn-menu").on('click', function() {
        canvasWrapper.addClass('active');
        $("body").addClass('fix');
    });
    $(".close-action > .btn-close, .off-canvas-overlay").on('click', function() {
        canvasWrapper.removeClass('active');
        $("body").removeClass('fix');
    });

    // Menu Activeion Js
    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
    var hash = window.location.hash.substr(1);
    if((curpage == "" || curpage == "/" || curpage == "admin") && hash=="")
        {
        } else {
            $(".header-navigation-area li").each(function()
        {
            $(this).removeClass("active");
        });
        if(hash != "")
            $(".header-navigation-area li a[href*='"+hash+"']").parents("li").addClass("active");
        else
        $(".header-navigation-area li a[href*='"+curpage+"']").parents("li").addClass("active");
    }

    // Aside Menu Js
    $('.btn-aside-menu').on('click', function(){
        $(".aside-menu-wrapper").addClass('active');
        $(".aside-menu-overlay").addClass('active');
        $("body").addClass('body-fix');
    });
    $('.aside-menu-overlay,.btn-aside-menu-close').on('click', function(){
        $(".aside-menu-overlay").removeClass('active');
        $(".aside-menu-wrapper").removeClass('active');
        $("body").removeClass('body-fix');
    });

    // Aside Cart Js
    $('.btn-aside-cart').on('click', function(){
        $(".aside-cart-wrapper").addClass('active');
        $(".aside-cart-overlay").addClass('active');
        $("body").addClass('body-cart-fix');
    });
    $('.aside-cart-overlay,.btn-aside-cart-close').on('click', function(){
        $(".aside-cart-overlay").removeClass('active');
        $(".aside-cart-wrapper").removeClass('active');
        $("body").removeClass('body-cart-fix');
    });

    // Footer Slide User Js
    $('.footer-slide-user').on('click', function(){
        $(".footer-slide-user-wrapper").toggleClass('active');
        $(".aside-user-overlay").toggleClass('active');
    });
    $("body").addClass('footer-slide-active');
    $('.aside-user-overlay').on('click', function(){
        $(".footer-slide-user-wrapper").removeClass('active');
        $(".aside-user-overlay").removeClass('active');
    });

    // Popup Product JS
    var popupProduct = $(".popup-product-quickview");
    $(".addto-wrap .quickview").on('click', function() {
        popupProduct.addClass('active');
        $(".popup-product-overlay").addClass('active');
        $(".popup-product-close").addClass('active');
        $("body").addClass("fix");
    });
    $(".popup-product-overlay,.popup-product-close").on('click', function() {
        popupProduct.removeClass('active');
        $(".popup-product-overlay").removeClass('active');
        $(".popup-product-close").removeClass('active');
        $("body").removeClass("fix");
    });

    // Search Box  JS
    var searchwrapper = $(".search-box-wrapper");
    $(".btn-search,.btn-footer-slide-search").on('click', function() {
        searchwrapper.addClass('show');
        $("body").addClass("fix");
        $("#search-input").focus();
    });
    $(".search-close").on('click', function() {
        searchwrapper.removeClass('show');
        $("body").removeClass("fix");
    });

    //Gallery justified JS
    $(".image-gallery-justified").justifiedGallery({
        rowHeight: 293.23,
        maxRowHeight: 293.23,
        margins: 5,
        captions: false,
        border: 0
    });

    //Main Menu JS
    $('.main-menu').slicknav({
        appendTo: '.res-mobile-menu',
        closeOnClick: true,
        removeClasses: true,
        closedSymbol: '<i class="fa fa-plus"></i>',
        openedSymbol: '<i class="fa fa-minus"></i>'
    });

    // Swiper Slider Js
        var carouselSlider = new Swiper('.default-slider-container', {
            slidesPerView : 1,
            slidesPerGroup: 1,
            loop: true,
            speed: 500,
            spaceBetween: 0,
            autoplay: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        var carouselSlider = new Swiper('.business-slider-container', {
            slidesPerView : 1,
            slidesPerGroup: 1,
            loop: true,
            speed: 500,
            spaceBetween: 0,
            autoplay: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        var carouselSlider = new Swiper('.full-screen-slider-container', {
            slidesPerView : 1,
            slidesPerGroup: 1,
            loop: true,
            speed: 500,
            spaceBetween: 0,
            autoplay: false,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        var carouselSlider = new Swiper('.split-slider-container', {
            slidesPerView : 1,
            slidesPerGroup: 1,
            loop: false,
            speed: 1300,
            spaceBetween: 0,
            autoplay: false,
            direction: 'vertical',
            mousewheel: {
                invert: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: {
                enabled: true,
            },
        });

    // Owl Carousel slider

        //Portfolio Single slider Js
        $('.portfolio-single-slider').owlCarousel({
            autoplay:false,
            smartSpeed: 500,
            margin: 10,
            loop:true,
            autoplayHoverPause:true,
            dots: true,
            nav: true,
            navText: [
                '<i class="lnr lnr-chevron-left"></i>',
                '<i class="lnr lnr-chevron-right"></i>'
            ],
            items: 1
        });

        //Portfolio Single Image Slider Js
        $('.portfolio-single-img-slider').owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 0,
            loop: true,
            autoplayHoverPause: true,
            dots: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            items: 1,
            responsive: {
                0 : {
                    items: 1
                },

                480 : {
                    items: 1
                },

                992 : {
                    items: 1
                },

                1200 : {
                    items: 1
                }
            }
        });

    // Slick slider

        // Portfolio Center Slider Js
        $(".portfolio-center-slider-container").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: false,
            autoplaySpeed: 5000,
            speed: 300,
            infinite: true,
            arrows: true,
            swipe: true,
            draggable: true,
            touchMove: true,
            pauseOnHover: true,
        });

        // Split Slider Js
        $('.split-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.split-slider-nav'
        });
        $('.split-slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            asNavFor: '.split-slider',
            focusOnSelect: true
        });

        // Single Product Thumb Slider JS
        $('.single-product-thumb-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.single-product-nav'
        });
        $('.single-product-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            asNavFor: '.single-product-thumb-slider',
            focusOnSelect: true
        });

        // Post Details Slider Js
        $(".post-details-thumb-slider").slick({
            dots: false,
            infinite: true,
            speed: 400,
            fade: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        // Testimonial Slider Js
        $(".testimonial-slider").slick({
            arrows: false,
            dots: true,
            infinite: false,
            speed: 350,
            fade: false,
        });

        // Testimonial Col2 Slider Js
        $('.testimonial-col2-slider').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 400,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Testimonial Col2 Slider Js
        $('.testimonial-barber-col2-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            autoplaySpeed: 5000,
            speed: 300,
            infinite: false,
            arrows: false,
            swipe: true,
            draggable: true,
            touchMove: true,
            pauseOnHover: false,
            responsive: [
            {
                breakpoint: 1824,
                settings:
                {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200,
                settings:
                {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings:
                {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings:
                {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }],
            pauseOnDotsHover: true
        });

        // Testimonial Col3 Slider Js
        $('.testimonial-col3-slider').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Testimonial Col3 Style2 Slider Js
        $('.testimonial-col3-st2-slider').slick({
            dots: true,
            infinite: false,
            arrows: false,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Testimonial Dentits Slider Js
        $(".dentits-testimonial-slider").slick({
            arrows: false,
            dots: true,
            infinite: false,
            speed: 350,
            fade: false,
            arrows: false,
        });

        // Testimonial Car Services Slider Js
        $('.car-services-testimonial').slick({
            dots: true,
            infinite: false,
            arrows: false,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Award slider Js
        $(".award-slider").slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            autoplaySpeed: 5000,
            speed: 300,
            infinite: false,
            arrows: false,
            swipe: true,
            draggable: true,
            touchMove: true,
            pauseOnHover: false
        });

        // Team Col3 Slider Js
        $('.team-col3-slider').slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Team Col3 Style Slider Js
        $('.team-col3-slider2').slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Team Page Slider Js
        $('.team-page-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            autoplaySpeed: 5000,
            speed: 300,
            infinite: false,
            arrows: false,
            swipe: true,
            draggable: true,
            touchMove: true,
            pauseOnHover: false,
            responsive: [
            {
                breakpoint: 1824,
                settings:
                {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1200,
                settings:
                {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings:
                {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings:
                {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }],
            pauseOnDotsHover: true
        });

        // Related Projects Slider Js
        $('.related-projects-slider').slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Gym Service Slider Js
        $('.gym-service-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 2,
            dots: true,
            autoplaySpeed: 5000,
            speed: 300,
            infinite: true,
            arrows: false,
            swipe: false,
            draggable: true,
            touchMove: true,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 1824,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
                },{
                    breakpoint: 1200,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
                }, {
                    breakpoint: 576,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }],
            pauseOnDotsHover: true
        });

        // Portfolio Gallery Slider Js
        $('.portfolio-gallery-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            autoplaySpeed: 5000,
            speed: 300,
            infinite: false,
            arrows: false,
            swipe: true,
            draggable: true,
            touchMove: true,
            pauseOnDotsHover: true,
            responsive: [
                {
                    breakpoint: 1824,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
        });

        // Post Slider Js
        $('.post-slider').slick({
            dots: true,
            infinite: false,
            arrows: false,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        // Blog Col2 Slider Js
        $('.blog-page-col2-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            autoplaySpeed: 5000,
            speed: 300,
            infinite: false,
            arrows: false,
            swipe: true,
            draggable: true,
            touchMove: true,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 1824,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }],
            pauseOnDotsHover: true
        });

        // Blog Col3 Slider Js
        $('.blog-page-col3-slider').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1824,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // Blog Col4 Slider Js
        $('.blog-page-col4-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
            autoplaySpeed: 5000,
            speed: 300,
            infinite: false,
            arrows: false,
            swipe: true,
            draggable: true,
            touchMove: true,
            pauseOnHover: false,
            responsive: [
            {
                breakpoint: 1824,
                settings:
                {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1200,
                settings:
                {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings:
                {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings:
                {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }],
            pauseOnDotsHover: true
        });

        // Related Posts Slider Js
        $('.related-posts-slider').slick({
            dots: true,
            arrows: false,
            infinite: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Brand Logo Slider Js
        $('.brand-logo-slider').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 400,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
                {
                    breakpoint: 1824,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // Award Col3 Slider Js
        $('.award-col3-slider').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1824,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // Product Slider Js
        $('.product-slider').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1824,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // Social Text Slider Js
        $('.social-text-slider').slick({
            slidesToShow: 6,
            slidesToScroll: 6,
            dots: false,
            autoplaySpeed: 5000,
            speed: 300,
            infinite: false,
            arrows: false,
            swipe: true,
            draggable: true,
            touchMove: true,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 1824,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }],
            pauseOnDotsHover: true
        });

    // Fancybox Popup Js
    $('.play-video-popup').fancybox();
    $('.gl-img-popup').fancybox();
    $('.img-popup').fancybox();

    // Portfolio Single Fixed Js
    var wrapper = $(".portfolio-single-fixed");
    $(".pf-single-btn-close").on('click', function() {
        wrapper.addClass('close');
        $("body").addClass("pf-single-btn-hide");
    });
    $(".pf-single-btn-on").on('click', function() {
        wrapper.removeClass('close');
        $("body").removeClass("pf-single-btn-hide");
    });

    // Odometer Js
    $('.odometer').appear(function(e) {
    var meter = $(".odometer");
     meter.each(function() {
        var meterNumber = $(this).attr("data-count");
            $(this).html(meterNumber);
        });
    });

    // Svg Icon Js 
    var $svgIconBox = $('.svg-icon-style');
    $svgIconBox.each(function() {
    var $this = $(this),
        $svgIcon = $this.find('.svg-icon'),
        $id = $svgIcon.attr('id'),
        $icon = $svgIcon.data('svg-icon');
        var $vivus = new Vivus($id, { duration: 150, file: $icon });
        $this.on('scroll', function () {
            $vivus.reset().play();
        });
    });

    //Tippy Tooltip JS
    tippy('.ht-tooltip', {
        inertia: true,
        animation: 'shift-away',
        arrow: true
    });
  
    //Progress Bar JS
    var skillsBar = $(".progress-line-bar");
    skillsBar.appear(function() {
    skillsBar.each(function(index, elem) {
        var elementItem = $(elem),
        skillBarAmount = elementItem.data('percent');
            elementItem.animate({
                width: skillBarAmount
            }, 1000);
            elementItem.closest('.progress-bar-item').find('.percent').text(skillBarAmount);
            elementItem.closest('.progress-bar-item').find('.progress-info').css('width', skillBarAmount);
        });
    });

    // Pie Chart Js
    var chartSelector = $(".ht-pie-chart");
    chartSelector.each(function() {
        $(this).appear(function() {
        var $this = $(this),
        amount = '<span class="skill-percent">' + $this.data('percent') + '%</span>';
            $this.html(amount);
            $this.easyPieChart({
                trackColor: $this.data('track-color'),
                scaleColor: false,
                lineWidth: $this.data('line-width'),
                lineCap: $this.data('line-cap')
            });
        })
    });

    // Parallax Js
    $('.parallax').jarallax({
        // Element Parallax
    });

    // Lax Parallax Js
    window.onload = function() {
        lax.setup()
        const updateLax = () => {
            lax.update(window.scrollY)
            window.requestAnimationFrame(updateLax)
        }
        window.requestAnimationFrame(updateLax)
    }

    // Pro Qty Js
    var proQty = $(".pro-qty");
    proQty.append('<a href="#" class="inc qty-btn">+</a>');
    proQty.append('<a href="#" class= "dec qty-btn">-</a>');
    $('.qty-btn').on('click', function(e) {
        e.preventDefault();
         var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    // Smooth Scroll Js
    jQuery('body').on('click', 'a.smooth-scroll-link', function() {
        var $this = jQuery(this),
            href = $this.attr('href');
        if (!href || href.charAt(0) !== '#') return;
        var el = jQuery(href);

        if (!el.length) el = jQuery('a[name=' + href.substring(1, href.length) + ']');
        if (!el.length) return;

        jQuery('html, body').animate({
            scrollTop: el.offset().top - 0
        }, 1000);
        return false;
    });

    // Scroll To Top Js
    $(window).on('scroll', function(){
        // Sticky Header
        if($('.header-main').length){
          var windowpos = $(this).scrollTop();
          if (windowpos >= 100) {
            $('.header-main').addClass('sticky');
          } else {
            $('.header-main').removeClass('sticky');
          }
        }
    });

    // Ajax Contact Form JS
    var form = $('#contact-form');
    var formMessages = $('.form-message');

    $(form).submit(function(e) {
        e.preventDefault();
        var formData = form.serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: formData
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('alert alert-danger');
            $(formMessages).addClass('alert alert-success fade show');

            // Set the message text.
            formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
            formMessages.append(response);

            // Clear the form.
            $('#contact-form input,#contact-form textarea').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('alert alert-success');
            $(formMessages).addClass('alert alert-danger fade show');

            // Set the message text.
            if (data.responseText !== '') {
                formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
                formMessages.append(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occurred and your message could not be sent.');
            }
        });
    });

    // Map Js
    var map_id = $('#map_content');
    if (map_id.length > 0) {
    var $lat = map_id.data('lat'),
        $lng = map_id.data('lng'),
        $zoom = map_id.data('zoom'),
        $maptitle = map_id.data('maptitle'),
        $mapaddress = map_id.data('mapaddress'),
        mymap = L.map('map_content').setView([$lat, $lng], $zoom);

    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map',
        maxZoom: 14,
        minZoom: 2,
        id: 'mapbox.streets',
        scrollWheelZoom: false,
        accessToken: 'sk.eyJ1IjoicmFqdWh0IiwiYSI6ImNqdHk5dGdpYzJqM3A0NGxsYmI3NmhnN3EifQ.kNdHkgfVGmSz6XPmmfG02A'
    }).addTo(mymap);

        var marker = L.marker([$lat, $lng]).addTo(mymap);
        mymap.zoomControl.setPosition('bottomright');
        mymap.scrollWheelZoom.disable();
    }

    function scrollToTop() {
    var $scrollUp = $('#scroll-to-top'),
        $lastScrollTop = 0,
        $window = $(window);

    $window.on('scroll', function () {
        var st = $(this).scrollTop();
        if (st > $lastScrollTop) {
            $scrollUp.removeClass('show');
        } else {
            if ($window.scrollTop() > 190) {
                $scrollUp.addClass('show');
            } else {
                $scrollUp.removeClass('show');
            }
        }
        $lastScrollTop = st;
    });

    $scrollUp.on('click', function (evt) {
        $('html, body').animate({scrollTop: 0}, 550);
        evt.preventDefault();
    });
    }
    scrollToTop();

  // Reveal JS
  let revealId = $(".reveal-footer"),
    footerHeight = revealId.outerHeight(),
    windowWidth = $(window).width(),
    windowHeight = $(window).outerHeight(),
    leftFixedHeader = $("header.fixed-left"),
    leftFixedHeaderWidth = leftFixedHeader.innerWidth();

  if (windowWidth > 991 && windowHeight > footerHeight) {
    $(".site-wrapper-reveal").css({
        'margin-bottom': footerHeight + 'px'
    });
  }

  if (windowWidth > 991 && leftFixedHeader.length > 0) {
    $(".footer-area, .search-box-wrapper, .site-wrapper-left-header").css({
        'padding-left': leftFixedHeaderWidth + 'px'
    });
  }
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  $(window).on('load', function() {
    stylePreloader();
    $(".masonry-grid").isotope();
    const activeId = $(".portfolio-filter-menu li");
    $(".portfolio-filter-content").isotope();
    activeId.on('click', function () {
        const $this = $(this),
            filterValue = $this.data('filter');

        $(".portfolio-filter-content").isotope({
            filter: filterValue
        });

        activeId.removeClass('active');
        $this.addClass('active');
    });
  });

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
  
  $(window).on('scroll', function() {});
  

/* ==========================================================================
   When Window is resizing, do
   ========================================================================== */
  
  $(window).on('resize', function() {});
  

})(window.jQuery);