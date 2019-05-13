// import '../lib/maskedinput.js';
import modal from 'jquery-modal';
import AOS from 'aos';




//select
// $('select').selectize();

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
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



//request_agenda_sucess
$('button.btn.btn-primary').on('click', function() {
  if($('.register input').val() === '') {
  } else{
    $('.register__true').addClass('active');
  }
});





//footer

$('.footer__nav__column ul, .header__nav__dropdown').on('click','a', function(event) {
  if($('div').hasClass('about')) {
    event.preventDefault();
    var id  = $(this).attr('rel'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 90}, 1500);
  }
});


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
