$(function(){
	// Default Text Input Focus/Blur Handling
	$('input.textinput, textarea.textinput').focus(function(){
		$(this).removeClass('textinput').addClass('textinputhover'); // Input Focus
	}).blur(function(){
		$(this).removeClass('textinputhover').addClass('textinput'); // Input Blur
	});

	/*

	// Search Default Text
	var product_search_text = 'Keywords or product code';

	$('#productSearch #Name').focus(function() {
		if ($(this).val() == product_search_text) $(this).val('');
	}).blur(function() {
		if ($(this).val() == '') $(this).val(product_search_text);
	}).blur();

	
	// Subscribe Default Text
	var product_search_text = 'Email Address';

	$('#subscribe #Email').focus(function() {
		if ($(this).val() == product_search_text) $(this).val('');
	}).blur(function() {
		if ($(this).val() == '') $(this).val(product_search_text);
	}).blur();

	*/
});