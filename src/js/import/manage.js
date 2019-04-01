import datepicker from 'air-datepicker';

//drop-down open
$('.drop-down--open').on('click', function() {
  $(this).find('ul').fadeIn();
});
//document mouseup
$(document).mouseup(function(e) {
  var container = $('.manage__header__notifications ul, .manage__header__user ul, .table__drop-down ul');
  if (container.has(e.target).length === 0) {
    container.fadeOut();
  }
});


//datepicker
(function($) { $.fn.datepicker.language['en'] = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  today: 'Today',
  clear: 'Clear',
  dateFormat: 'mm/dd/yyyy',
  timeFormat: 'hh:ii aa',
  firstDay: 0
}; })(jQuery);

$('.datepicker-here').datepicker({
  language: 'en',
  minDate: new Date(),
  position: 'bottom left',
  moveToOtherMonthsOnSelect: true,
  autoClose: true,
  offset: -10,
  navTitles: {
    days: 'MM yyyy'
  }
});
