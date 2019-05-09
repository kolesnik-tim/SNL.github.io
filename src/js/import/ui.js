// import '../lib/maskedinput.js';
import modal from 'jquery-modal';
import AOS from 'aos';

//select
// $('select').selectize();

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $('.register__true').removeClass('active');
  if($(this).attr('href') === '#request-pop-up') {
    $('div#request-pop-up form #event-detail-id').val($(this).attr('data-event-detail'));
  }
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
$('div#request-pop-up button.btn.btn-primary').on('click', function(e) {
  e.preventDefault();

  if($('.register #full-name').val() === '' || $('.register #business-email').val() === '' || $('.register #phone-number').val() === '') {
    $('div#request-pop-up form').submit();
    return;
  }

  var data = {
    name: $('.register #full-name').val(),
    email: $('.register #business-email').val(),
    mobile: $('.register #phone-number').val(),
    event_id: $('.register #event-detail-id').val(),
    _token:$('div#request-pop-up form [name=_token]').val()
  };

  $.ajax({
    type: 'POST',
    url: $('div#request-pop-up form').attr('action'),
    data: data,
    dataType: 'JSON',
    success: function(data) {
      if(data.status === 'success') {
        $('.register__true').addClass('active');
      } else {
        console.log('Error --> ', data.message);
      }
    },
    failure: function(data) {
      console.log('Error --> ', data);
    }
  });
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

$(document).on('click', '[href="#"]', function(e) {
  e.preventDefault();
});
