import Swiper from 'swiper';


//home
var swiper = new Swiper('.swiper-events', {
  direction: 'vertical',
  // navigation: {
  //   nextEl: '.swiper-shares-next',
  //   prevEl: '.swiper-shares-prev',
  // },
  pagination: {
    el: '.swiper-pagination-events',
    clickable: true,
  },
  breakpoints: {
    1024: {
      direction: 'horizontal',
    }
  }
});



//home
var swiper = new Swiper('.swiper-events_details', {
  // navigation: {
  //   nextEl: '.swiper-shares-next',
  //   prevEl: '.swiper-shares-prev',
  // },
  pagination: {
    el: '.swiper-pagination-events_details',
    clickable: true,
  }
});
