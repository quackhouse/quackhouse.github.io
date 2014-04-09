$(document).ready(function(){
  $('#proj').click(function(e){
    e.preventDefault();
    $('#dropdown').slideToggle(1000);
  });
  $('#trix').click(function(e){
    e.preventDefault();
    $('#dropdown2').toggle(00);
  });
  if (!Modernizr.webgl) {
    $('.webgl').css('display', 'none');
  }
  $('.trick').click(function(e){
    e.preventDefault();
    switch(this.id) {
      case 'parallax':
      $.getScript('skrollr.js', function(){
        $('#nav').hide(200);
        $('#cool-trick').text("Parallax & Scrolling Site");
        $('body').css('background', 'none');
        var s = skrollr.init();
        $('#parallaxdiv').show();

      });
      break;
    }

  });
});