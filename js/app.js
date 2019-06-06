$(document).ready(function () {

    <!-- ************** FOR SCROLLBAR MENU *****************-->

    $(".nav-sidebar").mCustomScrollbar({
        theme: "dark-2",
        scrollButtons: {
            enable: true
        },
        scrollInertia: 0,
        mouseWheel: {
            deltaFactor: 300
        }
    });
    <!-- *** -->


    <!-- ************** FOR COUNTER LIKES *****************-->

    $('.counter-like').click(function (e) {

        e.preventDefault();
        $(this).find('.counter-like_value').html(function (i, val) {
            return val * 1 + 1
        });
    });
    <!-- *** -->


    <!-- ************** FOR APPEARANCE AND DISAPPEARANCE COMMENTS ON THE BLOG PAGE *****************-->

    $(".open-comments").click(function (e) {

        e.preventDefault();

        var WrComments = $(this).closest('article').find('.wr-comments');

        WrComments.addClass('visible-1', 700);


        $('html, body').animate({
            scrollTop: WrComments.offset().top - 90 // класс объекта к которому приезжаем
        }, 700); // Скорость прокрутки
    });

    $('.btn_close-comments').click(function (e) {
        e.preventDefault();

        var BtnCloseComments = $(this).closest('article').find('.wr-comments');
        BtnCloseComments.removeClass('visible-1', 500);
    });


    <!-- *** -->


    <!-- ************** FOR MENU COLLAPSE *****************-->

    $('.sidebarNavClose, .nav-overlay').on('click', function (e) {
        e.preventDefault();
        // hide sidebar
        $('.nav-sidebar, .nav-overlay').removeClass('active');
        $('body').css("overflow", "auto");
        // hide overlay
    });

    $('.sidebarNavCollapse').on('click', function (e) {
        e.preventDefault();
        // open sidebar
        $('.nav-sidebar, .nav-overlay').addClass('active');
        $('body').css("overflow", "hidden");

        // fade in the overlay
        // $('.nav-overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    <!-- *** -->


    // <!-- ************** FILTER FOR  POSTS *****************-->
    //
    //     $(".filter-post_latest").click(function (e) {
    //         e.preventDefault();
    //         $(".post-comment, .post-popular").fadeOut(0);
    //         $(".post_latest").fadeIn(0);
    //
    //         var currentValue = $(this).html();//взять текущий эл-т и вытащить его html
    //         $(".portfolio-filter .selected-filter").html(currentValue);
    //
    //         $(".portfolio-filter").removeClass("open");
    //
    //     });
    //
    //     $(".filter-frontend").click(function (event) {
    //         event.preventDefault();
    //         $(".app, .design").fadeOut(0);
    //         $(".frontend").fadeIn(0);
    //
    //         var currentValue = $(this).html();//взять текущий эл-т и вытащить его html
    //         $(".portfolio-filter .selected-filter").html(currentValue);
    //
    //         $(".portfolio-filter").removeClass("open");
    //
    //     });
    //
    //     $(".filter-design").click(function (event) {
    //         event.preventDefault();
    //         $(".frontend, .app").fadeOut(0);
    //         $(".design").fadeIn(0);
    //
    //         var currentValue = $(this).html();//взять текущий эл-т и вытащить его html
    //         $(".portfolio-filter .selected-filter").html(currentValue);
    //
    //         $(".portfolio-filter").removeClass("open");
    //
    //     });
    //
    //     $(".filter-all").click(function (event) {
    //         event.preventDefault();
    //         $(".frontend, .app, .design").fadeIn(0);
    //
    //         var currentValue = $(this).html();//взять текущий эл-т и вытащить его html
    //         $(".portfolio-filter .selected-filter").html(currentValue);
    //
    //         $(".portfolio-filter").removeClass("open");
    //
    //     });
    //
    // <!-- *** -->


    <!-- ************** FOR SCROLL HEADER *****************-->
    $(function () {
        var shrinkHeader = 170;

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }

        function navbarShrink() {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.navbar').addClass('shrink');
            } else {
                $('.navbar').removeClass('shrink');
            }
        }

        $(window).scroll(navbarShrink);

        navbarShrink();
    });

    <!-- *** -->


    <!-- ************** WOW LIBRARY *****************-->
    var wow = new WOW(
        {
            mobile: false
        }
    );
    wow.init();
    <!-- *** -->


    <!-- ************** FOR OWLCAROUSEL *****************-->
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            items: 1,
            navigation: false,
            slideSpeed: 500,
            paginationSpeed: 800,
            rewindSpeed: 1000,
            singleItem: true,
            autoPlay: true,
            stopOnHover: true

        }
    );
    <!-- *** -->


    <!-- ************** FOR PORTFOLIO FILTER *****************-->

    $(".portfolio .filter-list a").on('click', function (e) {
        e.preventDefault();

        $('.portfolio .filter-list a.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');

        var value = $(this).attr('data-filter');
        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.portfolio .filter-container .item').show(0);
        } else {
            $(".portfolio .filter-container .item").not(value).hide(0);
            $(".portfolio .filter-container .item").filter(value).show(0);
        }
    });

    <!-- *** -->


});


