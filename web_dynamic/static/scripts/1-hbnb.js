#!/usr/bin/node
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
