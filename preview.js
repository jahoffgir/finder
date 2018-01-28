/*
 * Pull information to get the restaurant's preview profile
 * This is the view the user sees that may entice them to click to get more info
 * or immediate Smash or Pass ;)
 * @param id - id of the restaurant
 * 		found in /restaurant.id
 */
 console.log('tester');
 function getRestaurantPreview(id){
 	console.log('enter fn');
	// call our special ajax function
	zFLT({'path':'/restaurant/','user-key':'1027d5a8e746a4bf1dbc87c98fc6dc0c','res_id':id}).done(function(json){
		console.log('enter zFTL');
		// info to get: name, featured_image, user_ratind.aggregate_rating, location.city
		var $restaurantName = json.name;
		var $featuredImg = json.featured_image;
		console.log('test: '+json.featured_image);
		var $rating = json.user_rating.aggregate_rating; // this may be wrong, may have to query array
		var $city = json.location.city;

		// dynamically populate the page - browse.html
		// create image object to append to the page - define the tag, then define attributes in JSON format
		var $featImgTag = $('<img>',{'src':$featuredImg, 'id':'featImg'});
		$featImgTag.append($featuredImg);
		// #previewImage is a div setup in browse.html
		$('#previewImage').append($featImgTag);

		console.log('name: '+$restaurantName);
		console.log('img: ' +$featuredImg);
		console.log('rating: ' +$rating);
		console.log('city: ' +$city);


	});
 }

 $(document).ready(function(){
 	console.log('ready');
 	getRestaurantPreview('16774318');
 });
