// import '../lib/selectize.min.js';
// import '../lib/maskedinput.js';
// import modal from 'jquery-modal';

//select
// $('select').selectize();

// //pop-up
// $('[rel="modal:open"]').on('click', function(event) {
//   $(this).modal({
//     fadeDuration: 200
//   });
//   return false;
// });

//login page
$('.login__step__forgot').on('click', function() {
  let link = $(this).attr('href');
  $(this).closest('.login__step').fadeOut();
  $(link).fadeIn();
});

$('.login__step__retrieve').on('click', function() {
  $(this).closest('.login__step').fadeOut();
  $('#forgot__password_email_send').fadeIn();
});

//password page
$('#password .login__step__submit a').on('click', function() {
  var value_input1 = $('.login__step__input--possword-new').val();
  var value_input2 = $('.login__step__input--possword-retype').val();
  console.log(value_input1);
  console.log(value_input2);
  if(value_input1 !== value_input2) {
    $('.login__step__input input').val('');
    $('.login__step__input--possword-new').addClass('error');
  } else {
    $(this).closest('.login__step').fadeOut();
    $('#password-changed').fadeIn();
  }
});

$('.login__step__input input').focus(function() {
  $('.login__step__input--possword-new').removeClass('error');
});
