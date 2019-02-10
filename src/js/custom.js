/****************/
/*CUSTOM JS FILE*/
/****************/

$(document).ready(function(){
  $('.c-hambarger').click(function(){
    $('.o-app').toggleClass('expand-main');
  });

  $('.dropdown-nav').hide();
  $('.nav-header').click(function(){
    $(this).next().slideToggle();
  });


  $('.triger-check').click(function(){
  	$('.c-check').trigger('click');
  	//console.log('click');
  });

  if($('.c-check').is(':checked')){
  	console.log('hello');
  }


  if($('.c-check').prop('checked')) {
      console.log('hello');
  } else {
     console.log('hello');
  }
});



$(window).load(function(){
   
});


$(window).scroll(function(){
    
	
});

$(window).resize(function() {

});