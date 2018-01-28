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
 */


/**
 * Function to get location of the user
 */
function getLocation() {
    if( ! navigator.geolocation ) {
	 	// do something
	 	// maybe we should make the user enter address or zip code or
	 	// if address or zip is saved to profile pull it
        alert( "Yikes! Your browser does not support geolocation :(" );
	}
	else if( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition( getLocationSuccess, getLocationFailure );
        
	}
 }


/**
 * Function to handle success of getting current position
 */
 function getLocationSuccess( position ) {
     var latlng = {
         lat: position.coords.latitude,
         lon: position.coords.longitude
     }
     Zomato.geocode( latlng, function( restaurants ) {
             // we got the restaurants, what do we do now? 
             var restaurantObjects = new Array();
             for( restaurant in restaurants.best_rated_restaurant ) {
                 restaurantObjects.push( {
                     name: restaurant.name,
                     url: restaurant.url,
                     location: restaurant.location,
                     cuisine: restaurant.cuisine,
                     price_range: restaurant.price_range,
                     user_rating: restaurant.user_rating,
                     featured_image: restaurant.featured_image,
                     menu_url: restaurant.menu_url
                 } );
             }
             localStorage.setItem( "restaurants", restaurantObjects );
         },
         function( error ) {
             // life sucks, search failed
         }
     );
    
 }


/**
 * Function to handle failure to get current position
 */
function getLocationFailure() {
     // we need to access user profile's default location
     alert( "Yikes! There was an unknown error in getting your location!" );
}



/**
 * TO DO
 * - Get user prompt for location access
 */