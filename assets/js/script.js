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
     gc.geocode( 
         { 'location': latlng },
         { 'key': "AIzaSyC4251SJyy4ClZ7NWsumqqG1c0zpui0ViU" }, // this is the API Key
         { 'language': "en" }, // results will be in English
         function( results, status ) {
             switch( status ) {
                 case "OK": 
                     // it worked
                     var zQuery = {
                         "path": "/locations/",
                         "user-key": "1027d5a8e746a4bf1dbc87c98fc6dc0c",
                         "query": results[ 0 ].sublocality.long_name
                     }
                     
                     zFLT( zQuery ).done( 
                         // get the Zomato formatted location
                         function( json ) { // do something with it
                             var zLocation = {
                                 "path": "/location_details/",
                                 "user-key": "1027d5a8e746a4bf1dbc87c98fc6dc0c",
                                 "entity_id": json.entity_id,
                                 "entity_type": json.entity_type
                             }
                             zFLT( zLocation ).done( // get restaurants in the location
                                 function( json ) {
                                     
                                 }
                             )
                         }
                     )                   
                     break;
                     
                 case "ZERO_RESULTS": 
                     // no results
                     alert( "No matches for your location!" );
                     break;
                     
                 case "OVER_QUERY_LIMIT":
                     // exceeded free query limit
                     alert( "Exceeded Free API User Limit!" );
                     break;
                     
                 case "REQUEST_DENIED":
                     // request was denied :(
                     alert( "Request Denied!" );
                     break;
                     
                 case "INVALID_REQUEST":
                     // some query is missing
                     alert( "Invalid Request!" );
                     break;
                     
                 default:
                     // unknown or server error
                     alert( "Unknown Server Error!" );
                     break;
                     
             }
         }
     )
     
 }

/*
 * Function to handle failure to get current position
 */
 function getLocationFailure() {
     // we need to access user profile's default location
 }


/*
 * TO DO
 * 1) Figure out how to get the location name
 * 2) Get user prompt for location access
 * 3) What if location fails, or user denies access?
 *
 */