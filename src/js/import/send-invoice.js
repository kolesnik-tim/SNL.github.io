//add
$('body').on('click', '.send-invoice__input-btn__btn .add', function(event) {
  event.preventDefault();
  $(this).closest('.send-invoice__input-btn').clone().insertAfter($(this).closest('.send-invoice__input-btn'));
  number();
});
//remove
$('body').on('click', '.send-invoice__input-btn__btn .remove', function(event) {
  event.preventDefault();
  if($('.send-invoice__input-btn').length <= 1) {
  } else{
    $(this).closest('.send-invoice__input-btn').remove();
    number();
  }
});
function number() {
  for (var i = 0; i < $('.send-invoice__input-btn').length; i++) { 
    $($('.send-invoice__input-btn')[i]).find('label').text('Participant '+(i+1)); 
  }
}
