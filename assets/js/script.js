/**
 * This script is used for getting the users location
 */
/*
 * Function to get location of the user
 */
function getLocation() {
    if( !navigator.geolocation ) {
	 	// do something
	 	// maybe we should make the user enter address or zip code or
	 	// if address/ zip is saved to profile pull it
	}
	else if( navigator.geolocation ) {
		navigator.geolocation.getCurrentPosition( getLocationSuccess, getLocationFailure )
	}
 }

/*
 * Function to handle success of getting current position
 */
 function getLocationSuccess( position ) {
     
     var latitude = position.coords.latitude;
     var longitude = position.coords.longitude;
     var gc = new google.maps.Geocoder();
     var latlng = new google.maps.LatLng( latitude, longitude );
     
     gc.geocode( 
         { 'location': latlng },
         { 'key': "AIzaSyC4251SJyy4ClZ7NWsumqqG1c0zpui0ViU" },
         { 'language': "en" },
         function( results, status ) {
             switch( status ) {
                 case "OK": 
                     // it worked
                     
                     break;
                 case "ZERO_RESULTS": 
                     // no results
                     break;
                 case "OVER_QUERY_LIMIT":
                     // exceeded free query limit
                     break;
                 case "REQUEST_DENIED":
                     // request was denied :(
                     break;
                 case "INVALID_REQUEST":
                     // some query is missing
                     break;
                 default:
                     // unknown or server error
                     break;
             }
         }
     )
     
 }

/*
 * Function to handle failure to get current position
 */
 function getLocationFailure() {
     
 }


/*
 * TO DO
 * 1) Figure out how to get the location name
 * 2) Get user prompt for location access
 * 3) What if location fails, or user denies access?
 *
 */