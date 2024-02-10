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
});

$(document).ready(function() {
  // Function to update API status
  function updateAPIStatus() {
      $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
          // Check if status is "OK"
          if (data.status === 'OK') {
              $('#api_status').addClass('available'); // Add class available
          } else {
              $('#api_status').removeClass('available'); // Remove class available
          }
      });
  }

  // Update API status initially when the page loads
  updateAPIStatus();

  // Set interval to update API status every 5 seconds
  setInterval(updateAPIStatus, 5000);
});
