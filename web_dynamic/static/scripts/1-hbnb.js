#!/usr/bin/node
$(document).ready(function () {
  const checkedAmenities = {}; // Object to store checked amenities

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function () {
    const amenityID = $(this).data('id'); // Get Amenity ID from data attribute
    const amenityName = $(this).data('name'); // Get Amenity Name from data attribute

    // If the checkbox is checked, store the Amenity Name in the object
    if ($(this).is(':checked')) {
      checkedAmenities[amenityID] = amenityName;
    } else {
      // If the checkbox is unchecked, remove the Amenity Name from the object
      delete checkedAmenities[amenityID];
    }

    // Create a string of checked amenity names
    const checkedNames = Object.values(checkedAmenities);

    // Update the h4 tag inside the div Amenities with the list of Amenities checked
    const amenitiesText = checkedNames.join(', '); // Join the checked names with a comma
    $('.amenities h4').text(amenitiesText);
  });
});
