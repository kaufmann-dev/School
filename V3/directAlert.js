var firstPageInterval;
var lastPageInterval;

function AddError(text, type) {
	if(type) {
		if(type == 'firstPage') {
			if($('.firstPage').length) {
				$('.firstPage').effect("highlight", {color: '#ffffff'}, 200);
				clearInterval(firstPageInterval);
				firstPageInterval = setTimeout(function(){
					$('.firstPage').toggle( 'drop', function(){ $(this).remove(); } );
				}, 3000);
			} else {
				$('#errorWrapper').append('<div class="error firstPage"><div class="errorMain"><img src="error.png">' + text + '</div><div class="errorClose"><img src="close.png"></div></div>');
				firstPageInterval = setTimeout(function(){
					$('.firstPage').toggle( 'drop', function(){ $(this).remove(); } );
				}, 3000);
			}
		}

		if(type == 'lastPage') {
			if($('.lastPage').length) {
				$('.lastPage').effect("highlight", {color: '#ffffff'}, 200);
				clearInterval(lastPageInterval);
				lastPageInterval = setTimeout(function(){
					$('.lastPage').toggle( 'drop', function(){ $(this).remove(); } );
				}, 3000);
			} else {
				$('#errorWrapper').append('<div class="error lastPage"><div class="errorMain"><img src="error.png">' + text + '</div><div class="errorClose"><img src="close.png"></div></div>');
				lastPageInterval = setTimeout(function(){
					$('.lastPage').toggle( 'drop', function(){ $(this).remove(); } );
				}, 3000);
			}
		}
	} else {
		$('#errorWrapper').append('<div class="error"><div class="errorMain"><img src="error.png">' + text + '</div><div class="errorClose"><img src="close.png"></div></div>');
		let x = $('.error:last-child');
		setTimeout(function(){
			x.toggle( 'drop', function(){ $(this).remove(); } );
		}, 3000);
	}
}
function AddAlert(title, text) {
	$('#wrapper').after('<div class="alertWrapper"><div class="alert"><div class="alertTop">' + title + '</div><div class="alertMain">' + text + '</div><div class="alertBottom"><button>OK</button></div></div></div>');
	
	if($('.alert').hasScrollBar()) {
		$('.alert').css('border-radius', '5px 0 0 5px');
	} else {
		$('.alert').css('border-radius', '5px');
	}
}
$(document).on('click', '.alertBottom button', function() {
	$(this).parent().parent().parent().toggle( 'slide', 400, function(){ $(this).remove(); } );
});
$(document).on('click', '.errorClose', function() {
	$(this).parent().toggle( 'drop', function(){ $(this).remove(); } );
});
(function($) {
	$.fn.hasScrollBar = function() {
		return this.get(0).scrollHeight > this.height();
	}
})(jQuery);