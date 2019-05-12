

//add
$('.registration__form__more .add').on('click', function(event) {
  event.preventDefault();
  if($('.registration__form__delegate--none').hasClass('delegate-2')) {
    $('.registration__form__delegate.delegate-2').slideDown().removeClass('registration__form__delegate--none').addClass('open');
  } else if($('.registration__form__delegate--none').hasClass('delegate-3')) {
    $('.registration__form__delegate.delegate-3').slideDown().removeClass('registration__form__delegate--none').addClass('open');
  }
  number1();
  if($('.registration__form__delegate.open').length === 3) {
    $('.registration__form__more .add').css({'opacity': 0.3});
  }
}); 
//remove
$('.registration__form__more .delete').on('click', function(event) {
  event.preventDefault();
  $(this).closest('.registration__form__delegate').slideUp().removeClass('open').addClass('registration__form__delegate--none');
  number1();
  if($('.registration__form__delegate.open').length < 3) {
    $('.registration__form__more .add').css({'opacity': 1});
  }
}); 
//function number
function number1() {
  for (var i = 0; i <= $('.registration__form__delegate.open').length; i++) { 
    $($('.registration__form__delegate.open')[i]).find('h4 b').text('#'+(i+1)+'/3'); 
  }
}
