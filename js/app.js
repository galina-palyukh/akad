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
            loop:true,
            items:1,
            navigation : false,
            slideSpeed : 500,
            paginationSpeed : 800,
            rewindSpeed : 1000,
            singleItem: true,
            autoPlay : true,
            stopOnHover : true

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


