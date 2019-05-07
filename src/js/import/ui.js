// import '../lib/maskedinput.js';
import modal from 'jquery-modal';
import AOS from 'aos';

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


//animate

AOS.init({
  duration: 1500,
  offset: 100,
});



//request_agenda_sucess
$('button.btn.btn-primary').on('click', function() {
  if($('.register input').val() === '') {
  } else{
    $('.register__true').addClass('active');
  }
});


// remove the focused class from field on focus
$(document).on('focus', 'input,textarea', function() {
  $(this).removeClass('focused');
});

setTimeout(function() {
  $('input,textarea').each(function() {
    if($(this).val() || $('#'+$(this).attr('id')+':-webkit-autofill').val()) $(this).addClass('focused');
  });
}, 500);
