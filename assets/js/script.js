/**
 * This script is used for getting the users location
 */
/*
 * Function to get location of the user
 */
 function getLocation(){
 	if(!navigator.geolocation){
	 	// do something
	 	// maybe we should make the user enter address or zip code or
	 	// if address/ zip is saved to profile pull it
	}
	else if(navigator.geolocation){
		navigator.geolocation.getCurrectPosition
	}
 }

/*
 * Function to handle success of getting current position
 */
 function getLocationSuccess(pos){
 	
 }

/*
 * Function to handle failure to get current position
 */
 function getLocationFailure(){

 }


