import datepicker from 'air-datepicker';
import fancybox from '@fancyapps/fancybox';
import '../lib/selectize.min.js';
import '../lib/jquery.toast.min.js';
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
$('.drop-down--open--trigger').on('click', function(e) {
  e.preventDefault();
  $(this).parents('.drop-down--open').find('ul').fadeIn();
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
  $(this).find('a').html('<i class="icon icon-plus"></i>' + $(this).attr('data-title'));
  $(this).find('a').removeClass('delete');
  $(this).addClass('manage__form__image__block--add');
});



$('body').on('DOMSubtreeModified', '.output', function() {
  if($(this).find('span').length >= 1) {
    $(this).closest('.manage__form__image__block').removeClass('manage__form__image__block--add');
    $(this).closest('.manage__form__image__block').find('a').html('<i class="icon icon-delete"></i>Delete');
    $(this).closest('.manage__form__image__block').find('input').fadeOut();
    $(this).closest('.manage__form__image__block').find('p a').addClass('delete');
  }
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



$(document).on('click', '.create-event-add', function(e) {
  $('.manage__create.manage-user__create').html('');
  $.ajax({
    type: 'GET',
    url: $(this).attr('href'),
    data: {_token:$('#manage__create___token').val()},
    success: function(data) {
      $('.manage__create.manage-user__create').html(data);
      formInitCallback();
    },
    failure: function(data) {
      console.log('Error --> ', data);
    }
  });
});

$(document).on('click', '.drop-down--open li a.edit, .manage__table__content tbody a.edit', function(e) {
  e.preventDefault();
  $('.manage__create.manage-user__create').html('');
  $('.manage__create').addClass('is-active');
  $('.manage__create--bg').fadeIn();
  $.ajax({
    type: 'GET',
    url: $(this).attr('href'),
    data: {_token:$('#manage__create___token').val()},
    success: function(data) {
      $('.manage__create.manage-user__create').html(data);
      formInitCallback();
    },
    failure: function(data) {
      console.log('Error --> ', data);
    }
  });
});

$(document).on('click', '.drop-down--open li a.delete', function(e) {
  e.preventDefault();

  // show confirmation alert...
  $('#delete-warning').modal({
    fadeDuration: 200
  });
  $('.manage__delete__close').attr('form-href', $(this).attr('href'));
});

$('.manage__delete__close').on('click', function(e) {
  e.preventDefault();
  var formHref = $(this).attr('form-href');
  // submit the form for deletion...

  $('body').append(function() {
    if (!$(this).find('form#delete-form').length > 0) {
      return "\n<form id='delete-form' action='" + formHref + "' method='POST' name='delete_item' style='display:none'>\n" +
          "<input type='hidden' name='_method' value='delete'>\n" +
          "<input type='hidden' name='_token' value='" + $('meta[name="csrf-token"]').attr('content') + "'>\n" +
          '</form>\n';
    } else { return ''; }
  });

  $('form#delete-form').submit();
});



function formInitCallback() {
  //selectize
  $('#select-country').selectize({
    onChange: function(value) {
      if(value === '') {
        $('.select-country').find('.point').fadeIn();
      } else{
        $('.select-country').find('.point').fadeOut();
      }
    },
  });

  $('#select-gear').selectize({
    sortField: 'text'
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


  // SELECT/UNSELECT ALL
  $('input#select-privileges-view,input#select-privileges-add,input#select-privileges-edit,input#select-privileges-delete').on('click', function(e) {
    $('input.' + $(this).attr('id')).prop('checked', $(this).prop('checked'));
  });


  $('.manage__form__image__block').click(function() {
    $(this).find('input').fadeIn();
    $(this).find('.output').html('');
    $(this).find('a').html('<i class="icon icon-plus"></i>' + $(this).attr('data-title'));
    $(this).find('a').removeClass('delete');
    $(this).addClass('manage__form__image__block--add');
  });

  if($('div').hasClass('manage__form__image')) {

    function handleFileSelectSingle(evt) {
      var spanTarget = $(this).attr('data-span-target');
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
          document.getElementById(spanTarget).innerHTML = '';
          document.getElementById(spanTarget).insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }

    $('div.manage__form__image [type=file]').each(function() {
      document.getElementById($(this).attr('id')).addEventListener('change', handleFileSelectSingle, false);
    });
  }

  $('input,textarea').each(function() {
    if($(this).val()) $(this).addClass('focused');
  });

  $('.selectized').each(function() {
    if($(this).val()) $(this).parent().find('.point').fadeOut();
  });

  // validate form before save submit...
  if($('.manage__create.manage-user__create').attr('data-validate-url')) {
    $('.manage__create.manage-user__create button[type=submit].btn.btn-primary').on('click', function(e) {
      e.preventDefault();

      var fields = [
        {id: 'display-name', msg: 'Display Name is required'}, 
        {id: 'username', msg: 'Username is required'},
        {id: 'email', msg: 'Email is required'},
        {id: 'password', msg: 'Password is required'}
      ];
      var errorMsg = '';

      fields.forEach(function(f) {
        if(!errorMsg && !$('.manage__create.manage-user__create #'+f.id).val()) {
          errorMsg = f.msg;
        }
      });
      if(errorMsg) {
        $.toast({
          // heading: 'Success',
          text: errorMsg,
          showHideTransition: 'slide',
          icon: 'info',
          position: 'bottom-right'
        });
        return;
      }

      var data = {
        _token:$('.manage__create.manage-user__create [name=_token]').val()
      };


      var subFields = $('.manage__create.manage-user__create').attr('data-validate-fields').split(',');

      subFields.forEach(function(f) {
        var fs = f.split('#');
        data[fs[1]] = $('.manage__create.manage-user__create #'+fs[0]).val();
      });


      $.ajax({
        type: 'POST',
        url: $('.manage__create.manage-user__create').attr('data-validate-url'),
        data: data,
        dataType: 'JSON',
        success: function(data) {
          //$('.manage__create.manage-user__create [name=_token]').val(data.token);
          if(data.status === 'success') {
            $('.manage__create.manage-user__create form').submit();
          } else {
            $.toast({
              // heading: 'Success',
              text: data.message,
              showHideTransition: 'slide',
              icon: 'warning',
              position: 'bottom-right'
            });
          }
        },
        failure: function(data) {
          console.log('Error --> ', data);
        }
      });
    });
  }
}


// show toaster for any message...
if($('div.alert').length > 0) {
  $('div.alert button').remove();

  $.toast({
    // heading: 'Success',
    text: $('div.alert').html(),
    showHideTransition: 'slide',
    icon: $('div.alert').attr('data-type'),
    position: 'bottom-right'
  });
}



// Event Registration form...
function prepareRegistrationOrder() {
  $('.event_fee').html('0.0');
  $('.delegate_count').html($('.delegate_fields_section').length);
  $('.delegate_fee').html('0.0');
  $('.administration_fee').html('0.0');
  $('.vat_fee').html('0.0');
  $('.total_fee').html('0.0');

  if(!$('#country_id').val()) {
    return;
  }


  // calculate the vat...
  var countryVatMapping = window['countryVatMapping'] || [];
  var vat_percentage = countryVatMapping[$('#country_id').val()] || 0;
  
  var event_fee = parseFloat($('#event_fee').val());
  var delegate_fee = parseFloat($('#delegate_fee').val());
  var delegate_count = $('.delegate_fields_section').length;
  var administration_fee = parseFloat($('#administration_fee').val());

  var sub_total = event_fee + (delegate_fee * delegate_count) + administration_fee;

  var vat_amount = sub_total * vat_percentage / 100 ;

  var total_amount = sub_total + vat_amount;

  
  $('.event_fee').html(event_fee);
  $('.delegate_count').html(delegate_count);
  $('.delegate_fee').html(delegate_fee);
  $('.administration_fee').html(administration_fee);
  $('.vat_fee').html(vat_amount);
  $('.total_fee').html(total_amount);
    
  
  $('#delegate_fee_total').val(delegate_fee);
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
  // TODO: Also add for  add/delete delegate

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
