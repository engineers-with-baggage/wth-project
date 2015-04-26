$(function() {
	var userContentStore = new Firebase('https://amber-inferno-2234.firebaseio.com/');
	var geoDataStore = new Firebase('https://flickering-heat-4757.firebaseio.com/');

	// Survey Form
	$('#surveyForm').on('submit', function(e){
		var $form = $(this),
			data = {},
			originData;
		e.preventDefault();
		$form.addClass('working').removeClass('error');
		// var data = $(this).serializeJSON();
		geoDataStore.orderByChild('city').equalTo($('#origin').val()).once('value', function(snapshot) {
			var originDataPrecursor = snapshot.val();
			if (!originDataPrecursor){
				$form.removeClass('working').addClass('error');
				return false;
			}
			originData = originDataPrecursor[Object.keys(originDataPrecursor)[0]];
			// This nesting is gross. I'm sorry.
			geoDataStore.orderByChild('city').equalTo($('#destination').val()).once('value', function(snapshot) {
				var destinationDataPrecursor = snapshot.val();
				if (!destinationDataPrecursor){
					$form.removeClass('working').addClass('error');
					return false;
				}
				destinationData = destinationDataPrecursor[Object.keys(destinationDataPrecursor)[0]];
				console.log('origin', originData);
				console.log('destination', destinationData);
				data.name = $('#name').val();
				data.origin = {};
				data.origin.latitude = originData.lat;
				data.origin.longitude = originData.long;
				data.destination = {};
				data.destination.latitude = destinationData.lat;
				data.destination.longitude = destinationData.long;
				data.travelType = $('input[name=travelType]:checked').val();
				console.log(data);
				$form.removeClass('working');
			});
		});
		
	});

});