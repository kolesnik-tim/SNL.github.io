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




//Create Event
//open
$('.message-open').on('click', function(e) {
  e.preventDefault();
  $('.message-popup .contact-form-name-block').html($(this).attr('data-name-content'));
  $('.message-popup .contact-form-message-block').html($(this).attr('data-message-content'));
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

  if($('#select-country').val()) {
    $('.select-country').find('.point').fadeIn();
  } else {
    $('.select-country').find('.point').fadeOut();
  }

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

  attachHandleToImageUpload();

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
      ];

      if(!$('.manage__create.manage-user__create #edit-flag').val()) {
        fields.push({id: 'password', msg: 'Password is required'});
      }

      var errorMsg = '';

      fields.forEach(function(f) {
        if(!errorMsg && $('.manage__create.manage-user__create #'+f.id).length > 0 && !$('.manage__create.manage-user__create #'+f.id).val()) {
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

      if($('.manage__create.manage-user__create #edit-flag').val()) {
        data['edit'] = $('.manage__create.manage-user__create #edit-flag').val();
      }

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

  initQuillEditorForAll();

  // validation before form submit...
  $('div.manage-event-list-page form.manage__create__content').on('submit', function(ev) {
    var errorFlag = false;

    var divClasses = ['.text-manage__form__description', '.text-about-trainer', '.text-testimonial'];
    divClasses.forEach(function(e, i) {
      if(!errorFlag) {
        if($(e).length > 1) {
          $(e).each(function() {
            if(!errorFlag) {
              var path = this;
              var content = path.__quill.getText().trim();
              if(content) {
                $(path).parents('.manage__form__description').find('input[type=hidden]').val(path.__quill.root.innerHTML);
              } else {
                path.scrollIntoView();
                errorFlag = true;
              }
            }
          });
        } else {
          var path = $(e).get(0);
          var content = path.__quill.getText().trim();
          if(content) {
            $(path).parents('.manage__form__description').find('input[type=hidden]').val(path.__quill.root.innerHTML);
          } else {
            $(path).get(0).scrollIntoView();
            errorFlag = true;
          }
        }
      }
    });
    
    if(errorFlag) {
      $.toast({
        // heading: 'Success',
        text: 'This field is required',
        showHideTransition: 'slide',
        icon: 'warning',
        position: 'bottom-right'
      });
      return false;
    }  

    // copy all the values from editor to hidden input fields...  
  });
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
    var tclone = $(this).closest('.manage__create__form').clone();

    tclone.find('input.trainer_name').val('');
    tclone.find('input.text-about-trainer-input').val('');
    
    /*if(tclone.find('div.text-about-trainer').get(0).__quill)
      tclone.find('div.text-about-trainer').get(0).__quill.root.innerHTML = '';*/
    tclone.find('div.about-trainer').find('.ql-toolbar.ql-snow').remove();
    tclone.find('div.text-about-trainer').removeClass('ql-container ql-snow').html('');
    
    tclone.find('input.trainer_image').val('');
    tclone.find('.manage__form__image__block').find('input').fadeIn();
    tclone.find('.manage__form__image__block').find('img').attr('src', '').attr('alt', '');
    tclone.find('.manage__form__image__block').find('a').html(
      '<i class="icon icon-plus"></i>' + tclone.find('.manage__form__image__block').attr('data-title')
    );
    tclone.find('.manage__form__image__block').find('a').removeClass('delete');
    tclone.find('.manage__form__image__block').addClass('manage__form__image__block--add');
    
    tclone.find('.manage__form__testimonials:gt(0)').remove();
    tclone.find('.remove-on-clone').remove();

    tclone.find('.manage__form__testimonials').each(function() {
      $(this).find('input.testimonial_name').val('');
      $(this).find('input.testimonial_designation').val('');
      $(this).find('input.text-testimonial-input').val('');
      /*if($(this).find('div.text-testimonial').get(0).__quill)
        $(this).find('div.text-testimonial').get(0).__quill.root.innerHTML = '';*/
      $(this).find('div.manage__form__description').find('.ql-toolbar.ql-snow').remove();
      $(this).find('div.text-testimonial').removeClass('ql-container ql-snow').html('');
    });
    
    tclone.insertAfter($(this).closest('.manage__create__form'));
    number();
    numberClass();
  } else{
    var tclone = $(this).closest('.manage__form__testimonials').clone();

    tclone.find('input.testimonial_name').val('');
    tclone.find('input.testimonial_designation').val('');
    tclone.find('input.text-testimonial-input').val('');
    /*if(tclone.find('div.text-testimonial').get(0).__quill)
      tclone.find('div.text-testimonial').get(0).__quill.root.innerHTML = '';*/
    tclone.find('div.manage__form__description').find('.ql-toolbar.ql-snow').remove();
    tclone.find('div.text-testimonial').removeClass('ql-container ql-snow').html('');

    tclone.insertAfter($(this).closest('.manage__form__testimonials'));
  }

  
  updateFieldsNameAttribute();
  
  initQuillEditorForAll();
  attachHandleToImageUpload();
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

  updateFieldsNameAttribute();
});

function updateFieldsNameAttribute() {
  $('.trainer_with_testimonial_section').each(function(i) {
    $(this).find('input.trainer_name').attr('name', 'trainer['+i+'][name]');
    $(this).find('input.trainer_name').next('label').attr('for', 'trainer['+i+'][name]');
    $(this).find('input.text-about-trainer-input').attr('name', 'trainer['+i+'][description]');
    $(this).find('input.trainer_image').attr('id', 'trainer-file-'+i).attr('name', 'trainer['+i+'][image_path]');

    $(this).find('div.manage__form__image__block input[type=file]').attr('data-span-target', 'trainer-output-' + i);
    $(this).find('div.manage__form__image__block span.output').attr('id', 'trainer-output-' + i);

    $(this).find('div.manage__form__testimonials').each(function(j) {
      $(this).find('input.testimonial_name').attr('name', 'trainer['+i+'][testimonial]['+j+'][name]');
      $(this).find('input.testimonial_name').next('label').attr('for', 'trainer['+i+'][testimonial]['+j+'][name]');
      $(this).find('input.testimonial_designation').attr('name', 'trainer['+i+'][testimonial]['+j+'][designation]');
      $(this).find('input.testimonial_designation').next('label').attr('for', 'trainer['+i+'][testimonial]['+j+'][designation]');
      $(this).find('input.text-testimonial-input').attr('name', 'trainer['+i+'][testimonial]['+j+'][description]');
    });
  });
}

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

function populateHiddenField(fieldRef) {
  $(fieldRef).next('input[type=hidden]').val();
}

function initQuillEditorForAll() {
  // QUILL EDITOR...
  if($('.text-manage__form__description').length > 0) {
    $('.text-manage__form__description').each(function() {
      if(!this.__quill)
        initQuillEditor(this, 'Description');
    });
  }

  if($('.text-about-trainer1').length > 0) {
    $('.text-about-trainer1').each(function() {
      if(!this.__quill)
        initQuillEditor(this, 'About Trainer');
    });
  }

  if($('.text-testimonial1').length > 0) {
    $('.text-testimonial1').each(function() {
      if(!this.__quill)
        initQuillEditor(this, 'Testimonial');
    });
  }
}

function initQuillEditor(targetEle, targetPlaceholder) {
  var quill = new Quill(targetEle, {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic',],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ]
    },
    placeholder: targetPlaceholder,
  }); 
}

function attachHandleToImageUpload() {
  if($('div').hasClass('manage__form__image')) {
    function handleFileSelectSingle(evt) {
      var spanTarget = $(this).attr('data-span-target');
      var fileType = $(this).attr('data-file-type');
      var file = evt.target.files; // FileList object

      var f = file[0];

      // Only process image files.
      if (!fileType && !f.type.match('image.*')) {
        alert('Only Images...');
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
        // Render thumbnail.
          var span = document.createElement('span');
          var imgSrc = (fileType === 'pdf') ? 'img/pdf.png' : e.target.result;
          span.innerHTML = ['<img class="img-thumbnail" src="', imgSrc, '" title="', escape(theFile.name), '"/>'].join('');
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
};
