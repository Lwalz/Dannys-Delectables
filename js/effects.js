$(document).ready(function(){
	$('#menubar').click(function(){
		$('.menuitems').toggle('slow')
		$('#menu').css('z-index','-1')

	});
	$('#sand').click(function(){
		$('.optionssand').toggle('slow')
	});
	$('#salad').click(function(){
		$('.optionssalad').toggle('slow')
	});
	$('#pizza').click(function(){
		$('.optionspizza').toggle('slow')
	});
	$('#orderbar').click(function(){
		$('#orderinfo').toggle('slow');
	})

})