document.addEventListener('DOMContentLoaded',function(){
	$('form').on('submit',function () {
	  var text = $('#message').val();
	  alert(text);
	  return false;
	});
})
