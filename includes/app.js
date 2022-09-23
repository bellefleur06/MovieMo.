$(window).scroll(function(){
  if($(window).scrollTop() > 0) {
    $('.navbar').css('background', '#0b1925');
  } else {
    $('.navbar').css('background', 'transparent');
  }
});

$('.reviews-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    smartSpeed:600,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

// $('.watch-slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     items:3,
//     smartSpeed:550,
//     autoplay:true,
//     autoplayTimeout:2500,
//     autoplayHoverPause:true
// });

$('.watch-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    smartSpeed:550,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
});