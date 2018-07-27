
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


});
