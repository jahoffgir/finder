/*
 * Pull information to get the restaurant's preview profile
 * This is the view the user sees that may entice them to click to get more info
 * or immediate Smash or Pass ;)
 * @param index - index of the restaurant from object in local storage
 */
 // NOTE: index will incrememented and updated in local storage anytime smash/pass 
 function getRestaurantPreview(index){
	// 	get restaurant at the specific index
	var $restaurant = localStorage.getItem('restaurants')[index];

	// create h1 tag with restaurant name
	var $restaurantName = $restaurant.name;
	var $h1 = $('<h1>'); // create h1 tag to append to the DOM
	$h1.append($restaurantName); // append restaurant name to the h1
	$('#restaurantName-div').append($h1); // append h1 to the DOM

	// create featured image 
	var $featuredImage = $restaurant.featured_image;
	var $img = $('<img>', {'src': $featuredImage});
	$('#feat-img-div').append($img);

	// populate all the additional info - 
	var $city;
	var $price;
	var $rating;
	var $cousine;
 }
