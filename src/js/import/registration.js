

//add
$('.registration__form__more .add').on('click', function(event) {
  event.preventDefault();
  if($('.registration__form__delegate--none').hasClass('delegate-2')) {
    $('.registration__form__delegate.delegate-2').slideDown().removeClass('registration__form__delegate--none').addClass('open');
  } else if($('.registration__form__delegate--none').hasClass('delegate-3')) {
    $('.registration__form__delegate.delegate-3').slideDown().removeClass('registration__form__delegate--none').addClass('open');
  }
  $('.registration__form__delegate.open [data-required-check]').each(function() {
    $(this).attr('required', 'required');
  });
  number1();
  if($('.registration__form__delegate.open').length === 3) {
    $('.registration__form__more .add').css({'opacity': 0.3});
  }
  prepareRegistrationOrder();
}); 
//remove
$('.registration__form__more .delete').on('click', function(event) {
  event.preventDefault();
  $(this).closest('.registration__form__delegate').slideUp().removeClass('open').addClass('registration__form__delegate--none');
  number1();
  if($('.registration__form__delegate.open').length < 3) {
    $('.registration__form__more .add').css({'opacity': 1});
  }
  $('.registration__form__delegate--none [data-required-check]').each(function() {
    $(this).removeAttr('required');
  });
  prepareRegistrationOrder();
}); 
//function number
function number1() {
  for (var i = 0; i <= $('.registration__form__delegate.open').length; i++) { 
    $($('.registration__form__delegate.open')[i]).find('h4 b').text('#'+(i+1)+'/3'); 
  }
}


// Event Registration form...
function prepareRegistrationOrder() {
  $('.event_fee').html('0.00');
  $('.delegate_count').html($('.registration__form__delegate.open').length);
  $('.delegate_fee').html('0.00');
  $('.administration_fee').html('0.00');
  $('.vat_fee').html('0.00');
  $('.total_fee').html('0.00');

  if(!$('#country_id').val()) {
    return;
  }


  // calculate the vat...
  var countryVatMapping = window['countryVatMapping'] || [];
  var vat_percentage = countryVatMapping[$('#country_id').val()] || 0;
  
  var event_fee = parseFloat($('#event_fee').val());
  var delegate_fee = parseFloat($('#delegate_fee').val());
  var delegate_count = $('.registration__form__delegate.open').length;
  var administration_fee = parseFloat($('#administration_fee').val());

  var delegate_fee_total = parseFloat((delegate_fee * delegate_count).toFixed(2));

  var sub_total = parseFloat((event_fee + delegate_fee_total + administration_fee).toFixed(2));

  var vat_amount = parseFloat((sub_total * vat_percentage / 100).toFixed(2)) ;

  var total_amount = parseFloat((sub_total + vat_amount).toFixed(2));

  
  $('.event_fee').html((event_fee).toFixed(2));
  $('.delegate_count').html(delegate_count);
  $('.delegate_fee').html(delegate_fee_total);
  $('.administration_fee').html((administration_fee).toFixed(2));
  $('.vat_fee').html((vat_amount).toFixed(2));
  $('.total_fee').html((total_amount).toFixed(2));
    
  
  $('#delegate_fee_total').val(delegate_fee_total);
  $('#vat_percentage').val(vat_percentage);
  $('#vat_amount').val(vat_amount);
  $('#total_amount').val(total_amount);



  // calculate the total...
}

if($('form.registration__form').length > 0) {

  prepareRegistrationOrder();

  // prepare the registration order for below events...
  // country channge...
  $('#country_id').on('change', function() {
    prepareRegistrationOrder();
  });
}

if($('div#register-success-pop-up').length > 0) {
  $('div#register-success-pop-up').insertAfter($('div.registration'));
  $('div#register-success-pop-up').modal({
    fadeDuration: 200
  });
}
