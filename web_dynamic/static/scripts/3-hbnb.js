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
  $.ajax({
    url: 'http://localhost:5001/api/v1/places_search',
    type: 'POST',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        const place = data[i];
        html_inner = '<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>';
        $('.places').append(html_inner);
      }
    }
  });
});
