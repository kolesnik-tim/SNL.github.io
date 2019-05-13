import datepicker from 'air-datepicker';
import fancybox from '@fancyapps/fancybox';
import '../lib/selectize.min.js';
import Quill from 'quill';







$('.registration__form__select').selectize({
  sortField: 'text'
});

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
$('.manage__create__close').on('click', function(e) {
  e.preventDefault();
  $('.manage__create').removeClass('is-active');
  $('.manage__create--bg').fadeOut();
});




//Create Event
//open
$('.message-open').on('click', function(e) {
  e.preventDefault();
  $('.message-popup').addClass('is-active');
  $('.message-popup--bg').fadeIn();
});
//close
$('.message-popup-close, .message-popup--bg').on('click', function(e) {
  e.preventDefault();
  $('.message-popup').removeClass('is-active');
  $('.message-popup--bg').fadeOut();
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
//selectize
$('#select-state').selectize({
  onChange: function(value) {
    if($(value) === '') {
      $('.select-state').find('.point').fadeIn();
    } else{
      $('.select-state').find('.point').fadeOut();
    }
  },

});






//image
$('body').on('change', '.file-image', function() {
  readURL(this);
  $(this).closest('.manage__form__image__block').removeClass('manage__form__image__block--add');
  $(this).closest('.manage__form__image__block').find('a').html('<i class="icon icon-delete"></i>Delete');
  $(this).closest('.manage__form__image__block').find('input').fadeOut();
  $(this).closest('.manage__form__image__block').find('p a').addClass('delete');
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $(input).next().find('img').attr('src', e.target.result).attr('alt', $(input)[0].files[0].name);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

$('body').on('click', '.manage__form__image__block', function() {
  $(this).find('input').fadeIn();
  $(this).find('img').attr('src', '').attr('alt', '');
  $(this).find('a').html('<i class="icon icon-plus"></i>Upload Image');
  $(this).find('a').removeClass('delete');
  $(this).addClass('manage__form__image__block--add');
});




//select
$('#select-gear').selectize({
  sortField: 'text'
});










//manage-user
//add check all View
$('#select-privileges-view').click(function() {
  $('.select-privileges-view:checkbox').not(this).prop('checked', this.checked);
});
$('.select-privileges-view').change(function() {
  let lengthCheckBlock = $('.select-privileges-view:checked').length;
  let lengthCheck = $('.select-privileges-view').length;
  if(lengthCheck === lengthCheckBlock) {
    $('#select-privileges-view').prop('checked', true);
  } else{
    $('#select-privileges-view').prop('checked', false);
  }
});


//add check all Edit
$('#select-privileges-edit').click(function() {
  $('.select-privileges-edit:checkbox').not(this).prop('checked', this.checked);
});
$('.select-privileges-edit').change(function() {
  let lengthCheckBlock = $('.select-privileges-edit:checked').length;
  let lengthCheck = $('.select-privileges-edit').length;
  if(lengthCheck === lengthCheckBlock) {
    $('#select-privileges-edit').prop('checked', true);
  } else{
    $('#select-privileges-edit').prop('checked', false);
  }
});



//add triner
//number
$(document).ready(function() {   
  for (var i = 0; i < $('.manage__create__form').length; i++) { 
    $($('.manage__create__form')[i]).find('h3 span').text('0'+(i+1)); 
  }
});

//add
$('body').on('click', '.manage__form__btn__add-more', function(event) {
  event.preventDefault();
  if($(this).hasClass('add-triner')) {
    $(this).closest('.manage__create__form').clone().insertAfter($(this).closest('.manage__create__form'));
    number();
    numberClass();
  } else{
    $(this).closest('.manage__form__testimonials').clone().insertAfter($(this).closest('.manage__form__testimonials'));
  }
});

//remove
$('body').on('click', '.manage__form__btn__delete', function(event) {
  event.preventDefault();
  if($(this).hasClass('remove-triner')) {
    if($('.manage__create__form').length <= 2) {
    } else{
      $(this).closest('.manage__create__form').remove();
      number();
      quill.update();
    }
  } else{
    if($(this).closest('.manage__create__form').find('.manage__form__testimonials').length <= 1) {
    } else{
      $(this).closest('.manage__form__testimonials').remove();
    }
  }
});


function number() {
  for (var i = 0; i < $('.manage__create__form').length; i++) { 
    $($('.manage__create__form')[i]).find('h3 span').text('0'+(i+1)); 
  }
}

function numberClass() {
  for (var i = 0; i < $('.manage__create__form').length; i++) { 
    $($('.text-testimonial')[i]).addClass('text-testimonial'+(i+1)); 
  }
}



if($('div').hasClass('manage')) {
  //text edit
  var quill = new Quill('.text-manage__form__description', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic',],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ]
    },
    placeholder: 'Description',
  });
  
  var quill = new Quill('.text-about-trainer1', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic',],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ]
    },
    placeholder: 'About Trainer',
  });
  var quill = new Quill('.text-about-trainer2', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic',],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ]
    },
    placeholder: 'About Trainer',
  });
  var quill = new Quill('.text-about-trainer3', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic',],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ]
    },
    placeholder: 'About Trainer',
  });
  var quill = new Quill('.text-about-trainer4', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic',],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ]
    },
    placeholder: 'About Trainer',
  });
  
  var quill = new Quill('.text-testimonial1', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic',],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ]
    },
    placeholder: 'Testimonial',
  });
  var quill = new Quill('.text-testimonial2', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic',],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ]
    },
    placeholder: 'Testimonial',
  });
  var quill = new Quill('.text-testimonial3', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic',],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ]
    },
    placeholder: 'Testimonial',
  });
  var quill = new Quill('.text-testimonial4', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic',],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ]
    },
    placeholder: 'Testimonial',
  });
}
