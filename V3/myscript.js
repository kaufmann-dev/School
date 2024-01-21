$(document).ready(function() {
	$('#bigClassSelector div, #smallClassSelector div').click(function() {
		window.location.href = $(this).data('url');
	});
	$('button.buttonL, button#next').each(function() {
		$(this).css('background-image', 'url(' + $(this).data('bg') + ')');
	});
	$('#home').click(function() {
		window.location.href = 'index.html';
	});
	$('.listAll').click(function() {
		$('#contentList').toggle();
	})
	$(document).mouseup(function(e) {
		if (!$('#contentList').is(e.target) && $('#contentList').has(e.target).length === 0) {
			$('#contentList').hide();
		}
	});
	$('#back').click(function() {
		let z = $('.active').data('id');
		let x = z - 1;
		if($('*[data-id="' + x + '"]').length) {
			$('.active').removeClass('active');
			$('*[data-id="' + x + '"]').addClass('active');
		} else {
			AddError('Du befindest dich auf der ersten Seite!', 'firstPage');
		}
	});
	$('#next').click(function() {
		let z = $('.active').data('id');
		let x = z + 1;
		if($('*[data-id="' + x + '"]').length) {
			$('.active').removeClass('active');
			$('*[data-id="' + x + '"]').addClass('active');
		} else {
			AddError('Du befindest dich auf der letzten Seite!', 'lastPage');
		}
	});
	$('#contentList div').click(function() {
		let z = $(this).data('id');
		$('.active').removeClass('active');
		$('*[data-id="' + z + '"]').addClass('active');
	});
	$('#constructionIndex').click(function() {
		window.location.href = 'index.html';
	});
	/*$(window).on('resize', function(){
		console.log(window.innerWidth);
	});*/
});