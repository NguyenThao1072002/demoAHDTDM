$(document).ready(function(){
  $('.line-container').click(function () {
      $('.menu').toggleClass('active');
      $('.line-container div').toggleClass('active');
  });

  $('.menu-bottom-user').click(function () {
      $('.login-form-container').toggle();
  });
});