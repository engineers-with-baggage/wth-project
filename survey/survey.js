$(function() {
	// Survey Form
	$('#surveyForm').on('submit', function(e){
		var $form = $(this);
		var data = $(this).serializeJSON();
		e.preventDefault();
		console.log(data);
	});

	// Autocomplete Stuff

});