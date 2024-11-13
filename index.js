let shoppingCart = 0;

var swiper = new Swiper('.card-wrapper',{
  loop: true,
  spaceBetween:30,

//paigation bullets
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
   0: {
     slidesPerView:1  
   },
   768:{
    slidesPerView:2  
   },
   1024:{
    slidesPerView:4 
   },
  }
});



var swiperTwo = new Swiper('.Blog-wrapper',{
  loop: true,
  spaceBetween:30,

//paigation bullets
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
   0: {
     slidesPerView:1  
   },
   768:{
    slidesPerView:2  
   },
   1024:{
    slidesPerView:4 
   },
  }
});