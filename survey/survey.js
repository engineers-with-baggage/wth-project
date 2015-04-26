$(function() {
	// Survey Form
	$('#surveyForm').on('submit', function(e){
		var $form = $(this),
			data = {};
		// var data = $(this).serializeJSON();
		e.preventDefault();
		data.name = $('#name').val();
		data.origin = {};
		data.origin.latitude = "foo";
		data.origin.longitude = "bar";
		data.destination = {};
		data.destination.latitude = "foo";
		data.destination.longitude = "bar";
		console.log(data);
	});

});