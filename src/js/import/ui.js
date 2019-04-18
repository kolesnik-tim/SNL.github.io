// import '../lib/maskedinput.js';
import modal from 'jquery-modal';


//select
// $('select').selectize();

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});


//aside open
$('.aside').hover(function() {
  $(this).addClass('active');
}, function() {
  $(this).removeClass('active');
});
$('.aside__menu__item--drop-down').on('click', function() {
  $(this).toggleClass('active');
  $(this).siblings('ul').slideToggle();
});
