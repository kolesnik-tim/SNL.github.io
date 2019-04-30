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

// Work-around for chrome auto-fill & placeholder overlapping issue...
$('#password').focus();
$('#email-id').focus();
