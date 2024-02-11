$(document).ready(function () {
  const checkedAmenities = {}; // Object to store checked amenities

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function () {
    const amenityID = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      checkedAmenities[amenityID] = amenityName;
    } else {
      delete checkedAmenities[amenityID];
    }

    const checkedNames = Object.values(checkedAmenities);

    const amenitiesText = checkedNames.join(', ');
    $('.amenities h4').text(amenitiesText);
  });

  // Function to update API status
  $.get('http://localhost:5001/api/v1/status', function(data) {
    // Check if status is "OK"
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
