$( document ).ready(function() {


    /* NAVIGATION */
    var body = $('body')
    var logoImg = $('.logo img')


    function viewport() {

        var e = window,
            a = 'inner';

        if (!('innerWidth' in window)) {

            a = 'client';
            e = document.documentElement || document.body;

        }

        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };

    }


    /* Toggle "mobile" class */

    function mobileClass() {

        var vpWidth = viewport().width; // This should match media queries

        if ((vpWidth <= 768) && (!body.hasClass('mobile'))) {

            body.addClass('mobile');
            logoImg.attr('src',logoImg.attr('src').replace("logo.png", "logo_klein.png"))

        } else if ((vpWidth > 768) && (body.hasClass('mobile'))) {

            body.removeClass('mobile');
            logoImg.attr('src',logoImg.attr('src').replace("logo_klein.png", "logo.png"))

        }

    }

    mobileClass();
    $(window).resize(mobileClass);



    // NAVIGATION
    function navColor () {
      // if (body.hasClass('mobile')) {
      //   $( "nav a" ).css('color', 'white');
      // } else {
      //   $( "nav a" ).css('color', 'rgba(111,111,111, 1)');
      // }

      $( ".nav ul" ).hover(
        function() {
          if (!(body.hasClass('mobile'))) {
            $('.nav ul').addClass('hover')
          }

        }, function() {
          if (!(body.hasClass('mobile'))) {
            $('.nav ul').removeClass('hover')
          }
        }
      );
    }
    navColor();
    $(window).resize(navColor);



    // MOBILE NAV
    $('.menu-trigger').on('click', function(e){
      e.preventDefault();
      $(this).siblings('.nav').toggleClass('nav-active');
      $(this).parent().toggleClass('nav-active');
    });



    // FIXED NAV WITH SHADOW & BACK TO TOP FADE IN
    $(document).scroll(function(){
         $('.nav-container').toggleClass('shadow', $(this).scrollTop() > 150);
        //  $('.backTop').toggle($(this).scrollTop() > 250);
         if ($(document).scrollTop() > 500) {
           $('.backTop').fadeIn();
         }
         else {
           $('.backTop').fadeOut();
          }
     });

     // BACK TO TOP
     $('.backTop').click(function(){
       $('html, body').animate({
         scrollTop: 0
       }, 400);
       return false
     });


    // LINK NAVIGATION
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 125
          }, 1000);
          return false;
        }
      }
    });


    // SLIDER
    $('.slider-header').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        // adaptiveHeight: true,
        arrows: false,
      });

    $(window).load(function() {
      $('.slick-slide .img--holder').height($(window).height() / 1.25);
    });

    $(window).resize(function() {
      $('.slick-slide .img--holder').height($(window).height() / 1.25);
    });



    // Fancybox
    $("[data-fancybox='rundgang']").fancybox({
    	iframe : {
    		css : {
    			width : '80%',
    			height : '80%'
    		}
    	}
    });



    //scrollMonitor

    //BadScroll
    var badH1 = $('.schwimmbad h1')
    var badHeaderDash = $('.schwimmbad .header-dash')
    var badFadeLeftRight = $('.schwimmbad .fade-right, .schwimmbad .fade-left ')
    var badWatcher = scrollMonitor.create( badHeaderDash, -100 );

    badWatcher.enterViewport(function() {
        badHeaderDash.addClass('fade-in');
        badH1.addClass('fade-in');
        badFadeLeftRight.addClass('fade-in');
    });

    // SaunaScroll
    var saunaHeaderDash = $('.sauna .header-dash');
    var saunaH1 = $('.sauna h1');
    var saunaText = $('.sauna .section-text');
    var saunaWatcher = scrollMonitor.create( saunaH1, 0 );

    saunaWatcher.enterViewport(function(){
      saunaH1.addClass('fade-in');
      saunaHeaderDash.addClass('fade-in');
      saunaText.addClass('fade-in');
    });

    // ZeitenScroll
    var zeitenContainer = $('.zeiten');
    var zeitenFadeLeftRight = $('.zeiten .fade-right, .zeiten .fade-left ');
    var zeitenImg = $('.zeiten .section-img');
    var zeitenWatcher = scrollMonitor.create( zeitenContainer, 0 );

    zeitenWatcher.enterViewport(function(){
      zeitenFadeLeftRight.addClass('fade-in');
      zeitenImg.addClass('fade-in');
    });


});
