import datepicker from 'air-datepicker';
import fancybox from '@fancyapps/fancybox';
import '../lib/selectize.min.js';



//gallery fancybox
$('.table__gallery a').fancybox({
  loop: true
});

//input name-search
$('#table__name-search').focus(function() {
  $(this).addClass('is-active');
  $(this).attr('placeholder', 'search name');
});
$('#table__name-search').focusout(function() {
  $(this).removeClass('is-active');
  $(this).attr('placeholder', 'name');
});

//drop-down open
$('.drop-down--open').on('click', function(e) {
  e.preventDefault();
  $(this).find('ul').fadeIn();
});
//document mouseup
$(document).mouseup(function(e) {
  var container = $('.manage__header__notifications ul, .manage__header__user ul, .table__drop-down ul');
  if (container.has(e.target).length === 0) {
    container.fadeOut();
  }
});


//datepicker en
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


//datepicker init
//table
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


//Create Event
//open
$('.create-event-add').on('click', function(e) {
  e.preventDefault();
  $('.manage__create').addClass('is-active');
  $('.manage__create--bg').fadeIn();
});
//close
$('.manage__create--bg, .manage__create__close').on('click', function(e) {
  e.preventDefault();
  $('.manage__create').removeClass('is-active');
  $('.manage__create--bg').fadeOut();
});




$('.datepicker-create_event').on('focus', function() {
  $(this).next('label').fadeOut();
});
$('.datepicker-create_event').on('focusout', function() {
  let inputVal = $(this);
  setTimeout(function() {
    if(inputVal.val() === '') {
      inputVal.next('label').fadeIn();
    }
  }, 500);
});
$('.datepicker-create_event').datepicker({
  language: 'en',
  minDate: new Date(),
  position: 'bottom left',
  moveToOtherMonthsOnSelect: true,
  autoClose: true,
  offset: 20,
  navTitles: {
    days: 'MM yyyy'
  }
});


//selectize
$('#select-country').selectize({
  onChange: function(value) {
    if($(value) === '') {
      $('.select-country').find('.point').fadeIn();
    } else{
      $('.select-country').find('.point').fadeOut();
    }
  },

});
//image-1
function handleFileSelectSingle(evt) {
  var file = evt.target.files; // FileList object

  var f = file[0];

  // Only process image files.
  if (!f.type.match('image.*')) {
    alert('Только изображения....');
  }

  var reader = new FileReader();

  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      // Render thumbnail.
      var span = document.createElement('span');
      span.innerHTML = ['<img class="img-thumbnail" src="', e.target.result,
        '" title="', escape(theFile.name), '"/>'].join('');
      document.getElementById('output').innerHTML = '';
      document.getElementById('output').insertBefore(span, null);
    };
  })(f);

  // Read in the image file as a data URL.
  reader.readAsDataURL(f);
}


document.getElementById('file').addEventListener('change', handleFileSelectSingle, false);






//image
//image-2
function handleFileSelectSingle2(evt) {
  var file = evt.target.files; // FileList object

  var f = file[0];

  // Only process image files.
  if (!f.type.match('image.*')) {
    alert('Только изображения....');
  }

  var reader = new FileReader();

  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      // Render thumbnail.
      var span = document.createElement('span');
      span.innerHTML = ['<img class="img-thumbnail" src="', e.target.result,
        '" title="', escape(theFile.name), '"/>'].join('');
      document.getElementById('output-2').innerHTML = '';
      document.getElementById('output-2').insertBefore(span, null);
    };
  })(f);

  // Read in the image file as a data URL.
  reader.readAsDataURL(f);
}


document.getElementById('file-2').addEventListener('change', handleFileSelectSingle2, false);



// //image 3
function handleFileSelectSingle3(evt) {
  var file = evt.target.files; // FileList object

  var f = file[0];

  // Only process image files.
  if (!f.type.match('image.*')) {
    alert('Только изображения....');
  }

  var reader = new FileReader();

  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      // Render thumbnail.
      var span = document.createElement('span');
      span.innerHTML = ['<img class="img-thumbnail" src="', e.target.result,
        '" title="', escape(theFile.name), '"/>'].join('');
      document.getElementById('output-3').innerHTML = '';
      document.getElementById('output-3').insertBefore(span, null);
    };
  })(f);

  // Read in the image file as a data URL.
  reader.readAsDataURL(f);
}


document.getElementById('file-3').addEventListener('change', handleFileSelectSingle3, false);



// //image 4
function handleFileSelectSingle4(evt) {
  var file = evt.target.files; // FileList object

  var f = file[0];

  // Only process image files.
  if (!f.type.match('image.*')) {
    alert('Только изображения....');
  }

  var reader = new FileReader();

  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      // Render thumbnail.
      var span = document.createElement('span');
      span.innerHTML = ['<img class="img-thumbnail" src="', e.target.result,
        '" title="', escape(theFile.name), '"/>'].join('');
      document.getElementById('output-4').innerHTML = '';
      document.getElementById('output-4').insertBefore(span, null);
    };
  })(f);

  // Read in the image file as a data URL.
  reader.readAsDataURL(f);
}


document.getElementById('file-4').addEventListener('change', handleFileSelectSingle4, false);















$('body').on('DOMSubtreeModified', '.output', function() {
  if($(this).find('span').length >= 1) {
    $(this).closest('.manage__form__image__block').removeClass('manage__form__image__block--add');
    $(this).closest('.manage__form__image__block').find('a').html('<i class="icon icon-delete"></i>Delete');
    $(this).closest('.manage__form__image__block').find('input').fadeOut();
    $(this).closest('.manage__form__image__block').find('p a').addClass('delete');
  }
});
$('.manage__form__image__block').click(function() {
  $(this).find('input').fadeIn();
  $(this).find('.output').html('');
  $(this).find('a').html('<i class="icon icon-plus"></i>Upload Image');
  $(this).find('a').removeClass('delete');
  $(this).addClass('manage__form__image__block--add');
});

// $('#select-state').selectize({
//   maxItems: 10,
//   onChange: function(value) {
//     if($(value) === '') {
//       $('.select-state').find('.point').fadeIn();
//     } else{
//       $('.select-state').find('.point').fadeOut();
//     }
//   },
// });

$('#select-gear').selectize({
  sortField: 'text'
});
