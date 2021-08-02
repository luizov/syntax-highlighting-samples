/**
 * @param somebody
 */
function sayHello(somebody) {
    alert('Hello ' + somebody);
}


/** @type {function(string, boolean): number} Closure syntax */
(function ($) {
    'use strict';

    // Call all functions
    var fn = {
        Launch: function () {
            fn.Loader();
            fn.PageFade();
            fn.OwlCarousel();
            fn.NavbarDropdowns();
            fn.Navbar();
            fn.PerfectScrollbar();
            fn.ScrollParallax();
            fn.ArticleTOC();
            fn.ArticleComments();
            fn.Apps();
        },


        // ------------------------------------------------------- //
        // Loader
        // ------------------------------------------------------- //
        Loader: function () {
            setTimeout(function () {
                $('body').addClass('loaded');
            }, 350);
        },

        // ------------------------------------------------------- //
        // Page Fade
        // ------------------------------------------------------- //

        // Page fade out effect when clicking a link with class 'fade-page'
        PageFade: function () {
            var ATTR_HREF = 'href';
            var EVENT_CLICK = 'click';
            var SELECTOR_FADE = 'fade-page';
            var EFFECT_DELAY = 500;

            var fadePage = document.getElementsByClassName(SELECTOR_FADE);

            function fadePageFunction(event) {
                if (!(event.ctrlKey
                    || event.shiftKey
                    || event.metaKey
                    || (event.button && event.button === 1))) {
                    event.preventDefault();
                    event.stopPropagation();
                    document.body.classList.add(SELECTOR_FADE);

                    var href = this.getAttribute(ATTR_HREF);
                    setTimeout(function () {
                        if (href !== '' && href !== '#') {
                            window.location.href = href;
                        }
                    }, EFFECT_DELAY);
                }
            }
            // Bind click event
            for (var i = 0; i < fadePage.length; i += 1) {
                fadePage[i].addEventListener(EVENT_CLICK, fadePageFunction, false);
            }
        },

        // ------------------------------------------------------- //
        // Owl Carousel
        // ------------------------------------------------------- //
        OwlCarousel: function () {

            $('.owl-carousel').each(function () {
                var a = $(this),
                    items = a.data('items') || [1, 1, 1, 1],
                    margin = a.data('margin'),
                    loop = a.data('loop'),
                    nav = a.data('nav'),
                    dots = a.data('dots'),
                    center = a.data('center'),
                    speed = a.data('speed'),
                    autoplay = a.data('autoplay'),
                    autoplayTimeout = a.data('autoplaytimeout'),
                    autoplaySpeed = a.data('autoplayspeed'),
                    rtl = a.data('rtl'),
                    autoheight = a.data('autoheight'),
                    thumbs = a.data('thumbs');

                var options = {
                    nav: nav || false,
                    loop: loop || false,
                    dots: dots || false,
                    center: center || false,
                    autoplay: autoplay || false,
                    autoHeight: autoheight || false,
                    rtl: rtl || false,
                    margin: margin || 0,
                    navSpeed: speed || 400,
                    dotsSpeed: speed || 400,
                    autoplayTimeout: autoplayTimeout || 3000,
                    autoplaySpeed: autoplaySpeed || 400,
                    autoplayHoverPause: true,
                    thumbs: thumbs || false,
                    thumbsPrerendered: thumbs || false,
                    responsive: {
                        0: { items: items[3] || 1 },
                        992: { items: items[2] || 1 },
                        1200: { items: items[1] || 1 },
                        1600: { items: items[0] || 1 }
                    }
                };

                a.owlCarousel(options);
            });
        },

        // ------------------------------------------------------- //
        // Toggle Navbar Dropdowns on hover
        // ------------------------------------------------------- //
        NavbarDropdowns: function () {
            var $dropdown = $('.dropdown');
            var $dropdownToggle = $('.dropdown-toggle');
            var $dropdownMenu = $('.dropdown-menu');
            var showClass = 'show';

            $(window).on('load resize', function () {
                if (this.matchMedia('(min-width: 768px)').matches) {
                    $dropdown.hover(
                        function () {
                            var $this = $(this);
                            $this.addClass(showClass);
                            $this.find($dropdownToggle).attr('aria-expanded', 'true');
                            $this.find($dropdownMenu).addClass(showClass);
                        },
                        function () {
                            var $this = $(this);
                            $this.removeClass(showClass);
                            $this.find($dropdownToggle).attr('aria-expanded', 'false');
                            $this.find($dropdownMenu).removeClass(showClass);
                        }
                    );
                } else {
                    $dropdown.off('mouseenter mouseleave');
                }
            });
        },

        // ------------------------------------------------------- //
        // Navbar
        // toggle background classes on show/hide
        // ------------------------------------------------------- //
        Navbar: function () {

            var navbar = $('.navbar'),
                navbarCollapse = $('.navbar-collapse');


            $(window).on('scroll load', function () {
                navbar.toggleClass('scrolled', $(this).scrollTop() > navbar.height());
            });

            $(navbarCollapse).on('show.bs.collapse', function () {
                makeNavbarLight();
            });

            $(navbarCollapse).on('hide.bs.collapse', function () {
                makeNavbarTransparent();
            });

            function makeNavbarDark() {
                navbar.addClass('was-transparent');
                if (navbar.hasClass('navbar-dark')) {
                    navbar.addClass('was-navbar-dark');
                } else {
                    navbar.addClass('was-navbar-light');
                }
                navbar.addClass('bg-dark');
            }

            function makeNavbarLight() {
                navbar.addClass('was-transparent');
                if (navbar.hasClass('navbar-light')) {
                    navbar.addClass('was-navbar-light');
                } else {
                    navbar.addClass('was-navbar-dark');
                }
                navbar.addClass('bg-light');
            }

            function makeNavbarTransparent() {
                navbar.removeClass('bg-light');
                navbar.removeClass('was-transparent');

                if (navbar.hasClass('was-navbar-light')) {
                    navbar.addClass('navbar-light');
                } else {
                    navbar.addClass('navbar-dark');
                }

            }

        },

        // ------------------------------------------------------- //
        // Perfect Scrollbar
        // ------------------------------------------------------- //
        PerfectScrollbar: function () {
            // Init Perfect Scrollbar only if element exists in DOM
            var container = document.querySelector('.aside-content');
            if (typeof (container) != 'undefined' && container != null) {
                var ps = new PerfectScrollbar(container);
            }
        },

        // ------------------------------------------------------- //
        // Parallax Effects
        // ------------------------------------------------------- //
        ScrollParallax: function () {

            if ($('.scrollable').length) {
                var scrollableEl = new Rellax('.scrollable', {
                    center: false,
                    vertical: true,
                    breakpoints: [576, 768, 1201],
                });
            }
        },

        // ------------------------------------------------------- //
        // Article TOC
        // ------------------------------------------------------- //
        ArticleTOC: function () {
            // Construct the header Array
            var headers = $(":header span");

            // For mobile or when someone resizes screen, have Table of Content inside Responsive menu bar
            var headerArray = new Array();

            // When Table of Content is rendered on this page, process headings and activate visible scroll
            if ($(".lwptoc").length) {
                // Function to set the headingObject easily by index
                var getHeadingObj = function (index) {
                    return ((index < 0)
                        ? { offset: 0 }
                        : { index: index, offset: headerArray[index].offset });
                }

                // To avoid incorrect behaviour, exclude some deviation to smoothly work with sticky header on top of page
                var PREVIOUS_SCROLL_OFFSET = 92;
                headers.each(function () {
                    headerArray.push({ offset: ($(this).offset().top - PREVIOUS_SCROLL_OFFSET), ref: this.id });
                });

                // Initiate the headings
                var prevHeading;
                var currHeading;
                var nextHeading = getHeadingObj(0);

                var lastScrollPos = 0;

                $(window).scroll(function () {
                    var scrollPos = $(window).scrollTop();

                    // Scrolling down, check next heading - as long as this is not the last
                    if (scrollPos > lastScrollPos) {
                        while (nextHeading && scrollPos >= nextHeading.offset) {
                            // shift all objects
                            prevHeading = currHeading;
                            currHeading = nextHeading;

                            // set next heading, when current is not the last one
                            var nextHeadingIndex = (!currHeading || currHeading.index == headerArray.length - 1) ? undefined : currHeading.index + 1;
                            nextHeading = (Number.isInteger(nextHeadingIndex)) ? getHeadingObj(nextHeadingIndex) : undefined;
                        }
                    } else if (scrollPos < lastScrollPos) {
                        while (currHeading && scrollPos <= currHeading.offset) {
                            // Scrolling up, check previous heading - as long as the current is not the first;
                            nextHeading = currHeading;
                            currHeading = prevHeading;

                            // set next heading, when current is not the last one
                            var prevHeadingIndex = (!currHeading || currHeading.index == 0) ? undefined : currHeading.index - 1;
                            prevHeading = (Number.isInteger(prevHeadingIndex)) ? getHeadingObj(prevHeadingIndex) : undefined;
                        }
                    }

                    // update select class
                    $(".lwptoc_item a").removeClass('active');
                    if (currHeading != undefined && currHeading.index >= 0) {
                        $(".lwptoc_item a[href='#" + headerArray[currHeading.index].ref + "']").addClass('active');
                    }

                    // update lastScrollPos to allow a bit better performance (not fetching next and prev heading)
                    lastScrollPos = scrollPos;
                });
            }

        },

        // ------------------------------------------------------- //
        // Article Comments
        // ------------------------------------------------------- //
        ArticleComments: function () {

            $('.btn-fake-input').on('click', function () {
                $(this).parents('.fake-comment-form').addClass('is-hidden');
                $('.real-comment-form').addClass('is-expanded');
            });

        },

        // ------------------------------------------------------- //
        // Apps
        // ------------------------------------------------------- //
        Apps: function () {

            // Search modal animation (relies on ..custom/utilities/_animations.scss)
            var fadeIn = 'fadeInDown';
            var fadeOut = 'fadeOutUp';

            $('#search').on('show.bs.modal', function () {
                $(this).removeClass(fadeOut);
                $(this).addClass(fadeIn);
            });

            // On closing
            $('#search').on('hide.bs.modal', function (e) {
                var $this = $(this);

                // Check whether the fade in class still exists in this modal
                // if this class is still exists prevent this modal
                // to close immediately by setting up timeout, and replace
                // the fade in class with fade out class.
                if ($this.hasClass(fadeIn)) {
                    $this.removeClass(fadeIn);
                    $this.addClass(fadeOut);
                    e.preventDefault();

                    setTimeout(function () {
                        $this.modal('hide');
                    }, 150); // the default delays from animate.css is 1s
                }
            });

            // Autofocus search field on modal open
            $('#search').on('shown.bs.modal', function () {
                $("[id^='search-input']").focus();
            });

            // Bind ctrl+k key combination for Search modal open
            Mousetrap.bind('ctrl+k', function () {
                $('#search').modal('show');
                return false;
            });


            // Bootstrap tooltips
            $("body").tooltip({ selector: '[data-toggle=tooltip]' });

            // Lazy loaded images
            // var callback_error = function (element) {
            //     logElementEvent("💀 ERROR", element);
            //     element.src = "https://via.placeholder.com/440x560/2a2c34/898a8e?text=Loading";
            // };

            // var loadImages = new LazyLoad({
            //     elements_selector: '.lazy-test',
            //     threshold: 0,
            //     // Asign callbacks
            //     callback_error: callback_error
            // });
        }
    };

    // On Ready
    $(document).ready(function () {
        fn.Launch();
    });

}(jQuery));
