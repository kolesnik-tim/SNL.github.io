// import '../lib/selectize.min.js';
// import '../lib/maskedinput.js';
// import modal from 'jquery-modal';

//select
// $('select').selectize();

// //pop-up
// $('[rel="modal:open"]').on('click', function(event) {
//   $(this).modal({
//     fadeDuration: 200
//   });
//   return false;
// });


$('.login__step__forgot').on('click', function() {
  let link = $(this).attr('href');
  $(this).closest('.login__step').fadeOut();
  $(link).fadeIn();
});
