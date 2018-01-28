/**
 * This script gets the user's location and uses the zomato-js-sdk to get 
 * restaurants near the location
 *
 * Sources:
 * - Google Geolocation API for getting user location
 *   https://developers.google.com/maps/documentation/geolocation/intro
 *
 * - zomato-js-sdk for using Zomato API Library functions
 *   https://github.com/ameykshirsagar/zomato-js-sdk
 /


/*
 * Function to get location of the user
 */
function getLocation() {
    if( !navigator.geolocation ) {
	 	// do something
	 	// maybe we should make the user enter address or zip code or
	 	// if address or zip is saved to profile pull it
	}
	else if( navigator.geolocation ) {
		navigator.geolocation.getCurrentPosition( getLocationSuccess, getLocationFailure )
	}
 }

/*
 * Function to handle success of getting current position
 */
 function getLocationSuccess( position ) {
     
     // store the latitude and longitude in variables
     var latitude = position.coords.latitude;
     var longitude = position.coords.longitude;
     var latlng = new google.maps.LatLng( latitude, longitude );
     // Initialize the Geocoder
     var gc = new google.maps.Geocoder();
     
     // Reverse geocode the latitude and longitude
     // to get an approximate location
    
 }


/*
 * Function to handle failure to get current position
 */
 function getLocationFailure() {
     // we need to access user profile's default location
 }


/*
 * TO DO
 * - Get user prompt for location access
 */