// NAVBAR SHRINK/GROW ON SCROLL

$(document).on("scroll", function(){
    if ($(document).scrollTop() > 100){
      $(".navbar").addClass("shrink-navbar");
      $(".navbar-brand").addClass("shrink-navbar-brand");
    } else {
        $(".navbar").removeClass("shrink-navbar");
        $(".navbar-brand").removeClass("shrink-navbar-brand");
    } 
  });

// HEADER SCROLL DOWN ARROW FUNCTION

$('.scroll-down-arrow').click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#next-section").offset().top
    }, 0);
});

// BACK TO TOP BUTTON HIDE/SHOW

$(document).on("scroll", function(){
  if ($(document).scrollTop() > $(window).height()){
    $(".scroll-up-arrow").addClass("scroll-up-appear");
  } else {
    $(".scroll-up-arrow").removeClass("scroll-up-appear");
  } 
});

// BACK TO TOP BUTTON FUNCTION

$('.scroll-up-arrow').click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#top-of-page").offset().top
  }, 0);
});

// LAZY LOAD IMAGES

$('.lazy-load').Lazy({
  effect: 'fadeIn',
  effectTime: 1000
});