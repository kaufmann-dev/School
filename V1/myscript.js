$(document).ready(function() {
	$('nav.indexNav div').click(function() {
		window.location.href = $(this).data('url');
	});
	$('textarea.code').each(function() {
		$(this).css('height', this.scrollHeight + 1 + 'px');
	});
	$('#topBtn').click(function() {
		$(window).scrollTop(0);
	});
	$('#lowBtn').click(function() {
		$(window).scrollTop($(document).height());
	})
});