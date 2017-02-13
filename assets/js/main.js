$( document ).ready(function() {
    console.log( "ready!" );

    // NAVIGATION
    $( "nav li" ).hover(
      function() {
        $( "nav" ).css('background-color', 'rgba(0,157,224, .8)');
        $( "nav a" ).css('color', 'white');
      }, function() {
        $( "nav" ).css('background-color', 'white');
        $( "nav a" ).css('color', 'rgba(111,111,111, 1)');
      }
    );

    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 50
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
        // autoplay: true,
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




    // SCOLLMAGIC
    // var scrollMagicController = new ScrollMagic.Controller();
    //
    // var tween = TweenMax.to('.section-header', 2, {
    //   marginLeft: '0',
    //   opacity: 1
    // });
    //
    // var tween2 = TweenMax.to('.section-content', 2, {
    //   opacity: 1
    // });
    //
    // var scene = new ScrollMagic.Scene({
    //   triggerElement: '.schwimmbad-trigger',
    //   // duration: 200,
    //   triggerHook: 'onEnter',
    //   // offset: 150
    // })
    // .setTween(tween)
    // .addTo(scrollMagicController);
    //
    // var scene2 = new ScrollMagic.Scene({
    //   triggerElement: '.schwimmbad-trigger',
    //   // duration: 200,
    //   triggerHook: 'onEnter',
    //   // offset: 150
    // })
    // .setTween(tween2)
    // .addTo(scrollMagicController);
    //
    // // Add debug indicators fixed on right side
    //  scene.addIndicators();
});
