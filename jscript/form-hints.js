/*

	Input Hints (requires jQuery 1.3+)
	Kyle Stevenson, New Business Media, 2010

	Takes input field title's and makes them the default hint text.
	The hint text disappears when the field gets focus, and it returns
	if the focus is lost and the field is empty.

	Uses the CSS class "hintText" if available.

*/

$(function(){

	// Setup Hints on Fields
	$('input:text[title], input:password[title]').focus(function(){
		// Show Hint if Input is Empty
		if (this.value == $(this).data('hint_txt')) {
			$(this).removeClass('hintText').val('');
		}
	}).blur(function(){
		var hint_txt = $(this).data('hint_txt');
		if (this.value == '' || this.value == hint_txt) {
			$(this).addClass('hintText').val(hint_txt);
		}
	}).each(function(){
		// Remember Hint, Remove Title
		$(this).data('hint_txt', this.title).removeAttr('title').blur();
	});

	// Clear Input Hints on Submit
	$('form').submit(function(){
		$('input.hintText').val('');
	});

});