
$(document).ready(function() {
  /*$('#bcblk').click(function() {
    $(this).fadeOut('fast');
  });*/
  $('#bcblk').mouseenter(function() {
      $('#bc').removeClass('hidden');
	  $('#mainpg').addClass('hidden');
  });
  $('#bcblk').mouseleave(function() {
      $('#bc').addClass('hidden');
	  $('#mainpg').removeClass('hidden');
  });
  
   $('#hrblk').mouseenter(function() {
      $('#hr').removeClass('hidden');
	  $('#mainpg').addClass('hidden');
  });
  $('#hrblk').mouseleave(function() {
      $('#hr').addClass('hidden');
	  $('#mainpg').removeClass('hidden');
  });
  
   $('#cfblk').mouseenter(function() {
      $('#cf').removeClass('hidden');
	  $('#mainpg').addClass('hidden');
  });
  $('#cfblk').mouseleave(function() {
      $('#cf').addClass('hidden');
	  $('#mainpg').removeClass('hidden');
  });
});