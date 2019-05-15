// import '../lib/maskedinput.js';
import modal from 'jquery-modal';
import AOS from 'aos';




//select
// $('select').selectize();

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $('.register__true').removeClass('active');
  if($(this).attr('href') === '#request-pop-up') {
    $('div#request-pop-up form #event-detail-id').val($(this).attr('data-event-detail'));
  }
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});


//aside open
$('.aside').hover(function() {
  $(this).addClass('active');
}, function() {
  $(this).removeClass('active');
});
$('.aside__menu__item--drop-down').on('click', function() {
  $(this).toggleClass('active');
  $(this).siblings('ul').slideToggle();
});


//animate

AOS.init({
  duration: 1500,
  offset: 100,
});


$('input[type="tel"]').keyup(function() {
  if($(this).val() !== '' && !$.isNumeric($(this).val())) {
    $(this).val(
      function(index, value) {
        return value.substr(0, value.length - 1);
      });
  }
});


//request_agenda_sucess
$('div#request-pop-up form').on('submit', function(e) {
  e.preventDefault();

  var data = {
    name: $('.register #full-name').val(),
    email: $('.register #business-email').val(),
    mobile: $('.register #phone-number').val(),
    event_id: $('.register #event-detail-id').val(),
    _token:$('div#request-pop-up form [name=_token]').val()
  };

  $.ajax({
    type: 'POST',
    url: $('div#request-pop-up form').attr('action'),
    data: data,
    dataType: 'JSON',
    success: function(data) {
      if(data.status === 'success') {
        $('.register__true').addClass('active');
        $('div#request-pop-up form').get(0).reset();
      } else {
        console.log('Error --> ', data.message);
      }
    },
    failure: function(data) {
      console.log('Error --> ', data);
    }
  });
});


// remove the focused class from field on focus
$(document).on('focus', 'input,textarea', function() {
  $(this).removeClass('focused');
});

setTimeout(function() {
  $('input,textarea').each(function() {
    if($(this).val() || $('#'+$(this).attr('id')+':-webkit-autofill').val()) $(this).addClass('focused');
  });
}, 500);

$(document).on('click', '[href="#"]', function(e) {
  e.preventDefault();
});


$('section.contact__form form').on('submit', function(e) {
  e.preventDefault();

  var data = {
    name: $('section.contact__form #full-name').val(),
    email: $('section.contact__form #email').val(),
    phone: $('section.contact__form #phone').val(),
    message: $('section.contact__form #message').val(),
    _token:$('section.contact__form form [name=_token]').val()
  };

  $.ajax({
    type: 'POST',
    url: $('section.contact__form form').attr('action'),
    data: data,
    dataType: 'JSON',
    success: function(data) {
      if(data.status === 'success') {
        $('#contact-pop-up').modal({
          fadeDuration: 200
        });
        $('section.contact__form form').get(0).reset();
      } else {
        console.log('Error --> ', data.message);
      }
    },
    failure: function(data) {
      console.log('Error --> ', data);
    }
  });
});


// about auto-scroll...
if($('div').hasClass('about')) {
  var aboutUrlToSectionMapping = {
    'journey': 'our-journey', 
    'vision': 'our-vision', 
    'key-advisory-committee': 'key-advisory-committee', 
    'business-development': 'business-development', 
    'the-mission-statement': 'statement'
  };
  var hash = location.hash.replace('#','');
  if(hash && aboutUrlToSectionMapping[hash]) {
    $('html, body').animate({ scrollTop: $('#' + aboutUrlToSectionMapping[hash]).offset().top}, 1000);
  }

  Object.keys(aboutUrlToSectionMapping).forEach(function(k) {
    $('[href*="#'+k+'"]').attr('data-target-scrolltoview', aboutUrlToSectionMapping[k]);
    $(document).on('click', '[href*="#'+k+'"]', function() {
      $('body,html').animate({ scrollTop: $('#' + $(this).attr('data-target-scrolltoview')).offset().top - 90}, 1500);
    });
  });
}



//footer

/*$('.footer__nav__column ul, .header__nav__dropdown').on('click','a', function(event) {
  if($('div').hasClass('about')) {
    event.preventDefault();
    var id  = $(this).attr('rel'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 90}, 1500);
  }
});*/


// animation
$('.our-services__block').hover(function() {
  let attrSvg = $(this).attr('data-path-hover');
  let thisElement = $(this);
  $(this).find('svg path').attr('d', 'M0,15.329262431477307C0,15.329262431477307,80.9279,1.6261299218076104,133,1.6261299218076104C185.072,1.6261299218076104,266,15.329262431477307,266,15.329262431477307C266,15.329262431477307,266,147,266,147C266,147,0,147,0,147C0,147,0,23.359000862620697,0,23.359000862620697C0,23.359000862620697,0,15.329262431477307,0,15.329262431477307');
  setTimeout(function() {
    $(thisElement).find('svg path').attr('d', attrSvg); 
  }, 200);
}, function() {
  let thisElement = $(this);
  $(this).find('svg path').attr('d', 'M0,36.72774978434482C0,36.72774978434482,80.9279,50.441429195536635,133,50.441429195536635C185.072,50.441429195536635,266,36.72774978434482,266,36.72774978434482C266,36.72774978434482,266,147,266,147C266,147,0,147,0,147C0,147,0,-2.05170286890948,0,-2.05170286890948C0,-2.05170286890948,0,36.72774978434482,0,36.72774978434482');
  setTimeout(function() {
    $(thisElement).find('svg path').attr('d', 'M0,35C0,35,80.9279,46.5,133,46.5C185.072,46.5,266,35,266,35C266,35,266,147,266,147C266,147,0,147,0,147C0,147,0,0,0,0C0,0,0,35,0,35'); 
  }, 200);
});



//events_details show text
$('.triners__text-show').on('click', function(event) {
  event.preventDefault();
  if($(this).hasClass('active')) {
    $(this).removeClass('active').text('Show More...');
    $('.events_details__triners__text p.none').slideUp();
  } else{
    $(this).addClass('active').text('Show Less');
    $('.events_details__triners__text p.none').slideDown();
  }
});
