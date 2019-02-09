/****************/
/*CUSTOM JS FILE*/
/****************/

$(document).ready(function(){
  $('.expand').click(function(){
    $('.o-app').toggleClass('expand-main');
  });

  $('.dropdown-nav').hide();
  $('.nav-header').click(function(){
    $(this).next().slideToggle();
  })
});



$(window).load(function(){
   
});


$(window).scroll(function(){
    
	
});

$(window).resize(function() {

});