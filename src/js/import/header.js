//header mobile open
$('.menu-open').on('click', function() {
  $('.header__menu').addClass('is-active');
  $('.header__menu__bg').fadeIn();
});
//header mobile close
$('.menu-close, .header__menu__bg').on('click', function() {
  $('.header__menu').removeClass('is-active');
  $('.header__menu__bg').fadeOut();
});


//header fixed
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function() {
  if(mywindow.scrollTop() > 50) {
    $('.header').addClass('active');
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
      $('.header').stop().removeClass('scroll');
      $('.slider__header').css({'top': 0});
      up = !up;
      $('.registration__aside').removeClass('active');
    } else if(newscroll < mypos && up) {
      $('.header').stop().addClass('scroll');
      $('.slider__header').css({'top': $('.header').innerHeight()});
      up = !up;
      $('.registration__aside').addClass('active');
    }
    mypos = newscroll;
  } else {
    $('.header').removeClass('active');
  }
});
