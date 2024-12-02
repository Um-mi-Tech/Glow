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


let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let productPicsHTML = document.querySelector('.productPics');



let productPics = [];
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart')
})

closeCart.addEventListener('click',() => {
  body.classList.toggle('showCart')

})


productPicsHTML.addEventListener('click', (event) => {
  let positionClick =event.target;
  if(positionClick.classList.contains('addCart')){
    alert('1');
  }
})

const addDataToHTML = () => {
  productPicsHTML.innerHTML = "";
  if (productPics.length > 0){
    productPics.forEach(product => {
      let newProduct = document.createElement('div');
      newProduct.classList.add(product-pic);
       newProduct.innerHTML = '
                           <img src="Supreme-Pictures/Cleanser.jpg">

       '
       
    })
  }
}


const initApp = () => {
  fetch('products.json')
  .then(response => response.json())
  .then(data => {
    productPics = data;
    addDataToHTML();
  })
}

initApp();
