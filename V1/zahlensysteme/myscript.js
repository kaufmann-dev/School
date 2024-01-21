$(document).ready(function(){
	$('div#wrapper input#binary').on('input', function() {
		let s = $(this).val();
		
		let i = s.length;
		if(i == 0) {
			$('div#wrapper input#hex').val("");
			$('div#wrapper input#decimal').val("");
			return;
		}
		while (i--) {
			if(!($.inArray(s.charAt(i), ['0', '1']) >= 0)) {
				$('div#wrapper input#decimal').val("error");
				$('div#wrapper input#hex').val("error");
				return;
			}
		}
		$('div#wrapper input#hex').val(parseInt(s, 2).toString(16).toUpperCase());
		$('div#wrapper input#decimal').val(parseInt(s, 2).toString(10).toUpperCase());
	});

	$('div#wrapper input#decimal').on('input', function() {
		let s = $(this).val();
		
		let i = s.length;
		if(i == 0) {
			$('div#wrapper input#binary').val("");
			$('div#wrapper input#hex').val("");
			return;
		}
		while (i--) {
			if(!($.inArray(s.charAt(i), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) >= 0)) {
				$('div#wrapper input#hex').val("error");
				$('div#wrapper input#binary').val("error");
				return;
			}
		}
		$('div#wrapper input#hex').val(parseInt(s, 10).toString(16).toUpperCase());
		$('div#wrapper input#binary').val(parseInt(s, 10).toString(2).toUpperCase());
	});

	$('div#wrapper input#hex').on('input', function() {
		let s = $(this).val();
		
		let i = s.length;
		if(i == 0) {
			$('div#wrapper input#binary').val("");
			$('div#wrapper input#decimal').val("");
			return;
		}
		while (i--) {
			if(!($.inArray(s.charAt(i), ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F']) >= 0)) {
				$('div#wrapper input#decimal').val("error");
				$('div#wrapper input#binary').val("error");
				return;
			}
		}
		$('div#wrapper input#binary').val(parseInt(s, 16).toString(2).toUpperCase());
		$('div#wrapper input#decimal').val(parseInt(s, 16).toString(10).toUpperCase());
	});
});