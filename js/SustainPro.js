$(function() {
	$('li.itemList').addClass('seasonal');

	$('li[id="one"]')
		.hide()
		.delay(500)
		.fadeIn(1400)
		.hide(2000);

	var $listHTML = $('ul').html();
	$('ul').append($listHTML);
});

