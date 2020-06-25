(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  $('#portfolio').mixItUp();

    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });

    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="icon-arrow-right"></i>',
        openedSymbol: '<i class="icon-arrow-down"></i>',
      });

     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    $('.counterUp').counterUp({
     delay: 10,
     time: 1000
    });

      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });



  });      

}(jQuery));





;(function($) {
  "use strict";
  
  $(".bar").each(function() {
    
    var $bar = $(this),
        $pct = $bar.find(".pct"),
        data = $bar.data("bar");
    
    setTimeout(function() {
      
      $bar
        .css("background-color", data.color)
        .animate({
          "width": $pct.html()
      }, data.speed || 2000, function() {
        
        $pct.css({
          "color": data.color,
          "opacity": 1
        });
        
      });
      
    }, data.delay || 0);
    
  });
  
})(jQuery);