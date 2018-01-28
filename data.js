/**
 * Data of 'id's for any JSON we need to access
 */
// GET /search/ -- enables us to query this json and get info by restaurant.id to be used in /restaurant/
var restaurantIDs = new Array();
zFLT({'path':'/search/','user-key':'1027d5a8e746a4bf1dbc87c98fc6dc0c'}).done(function(json){
	//add all the restaurant ID's to the respective array
	$.each(json.restaurants, function(i,item){
		restaurantIDs.push(item.id);
	});
});