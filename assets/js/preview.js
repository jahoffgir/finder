/*
 * Pull information to get the restaurant's preview profile
 * This is the view the user sees that may entice them to click to get more info
 * or immediate Smash or Pass ;)
 * @param index - index of the restaurant from object in local storage
 */
 // NOTE: index will incrememented and updated in local storage anytime smash/pass 
 localStorage.setItem("index":0);
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

	// populate all the additional info to the respective div
	var $city = $restaurant.location.city;
	var $price = $restaurant.price_range;
	var $rating = 'Rating: ' +$restaurant.user_rating.aggregated_rating;
	var $cousine = $restaurant.cousine;

	var $cityTag = $('<span>', {'id'='city'});
	$cityTag.append($city);
	var $priceTag = $('<span>', {'id'='price'});
	var $priceToUSD;	// $price is an integer, translate to srting of $'s
	for(var i = 0; i < $price; i++){
		$priceTag += '$';
	}
	$priceTag.append($priceToUSD);
	var $ratingTag = $('<p>', {'id'='rating'});
	$ratingTag.append($rating);
	var $cousineTag = $('<p>', {'id'='cousine'});
	$cousineTag.append($cousine);

	$('#previewInfo').append($cousine);
	$('#previewInfo').append($cityTag);
	$('#previewInfo').append($priceTag);
	$('#previewInfo').append($ratingTag);
	

	localStorage.setItem("index", index+1);
 }
