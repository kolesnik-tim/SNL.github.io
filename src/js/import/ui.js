// import '../lib/maskedinput.js';
import modal from 'jquery-modal';
import AOS from 'aos';
import Quill from 'quill';

var quill = new Quill('#manage__form__description', {
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

var quill = new Quill('#about-trainer', {
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

var quill = new Quill('#testimonial', {
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

