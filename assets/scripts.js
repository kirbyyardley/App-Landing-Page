
$( document ).ready(function() {

  /* Sections to match viewport height to 50% */
  $('.o-height--half').css('height', window.innerHeight*.50+'px');
  $(window).resize(function() {
    $('.o-height--half').css('height', window.innerHeight*.50+'px');
  });

  /* Sections to match viewport height to 66% */
  $('.o-height--twothirds').css('height', window.innerHeight*.66+'px');
  $(window).resize(function() {
    $('.o-height--twothirds').css('height', window.innerHeight*.66+'px');
  });

  /* Sections to match viewport height to 100% */
  $('.o-height--full').css('height', window.innerHeight*.95+'px');
  $(window).resize(function() {
    $('.o-height--full').css('height', window.innerHeight*.95+'px');
  });


  //material contact form animation
  $('.contact-form').find('.form-control').each(function() {
    var targetItem = $(this).parent();
    if ($(this).val()) {
      $(targetItem).find('label').css({
        'top': '10px',
        'fontSize': '14px'
      });
    }
  })
  $('.contact-form').find('.form-control').focus(function() {
    $(this).parent('.input-block').addClass('focus');
    $(this).parent().find('label').animate({
      'top': '10px',
      'fontSize': '14px'
    }, 300);
  })
  $('.contact-form').find('.form-control').blur(function() {
    if ($(this).val().length == 0) {
      $(this).parent('.input-block').removeClass('focus');
      $(this).parent().find('label').animate({
        'top': '25px',
        'fontSize': '18px'
      }, 300);
    }
  })

});
