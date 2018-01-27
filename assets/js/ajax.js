/*
 * AJAX function to get information from API
 * two parameters: t, type of request - get or post
 * 				   d, path to get to data in API
 * Example: zFLT('get',{'path':'/[path]/'}).done(function(json){...});
 */
 function zFLT( t, d ){
 	return $.ajax({
 		type: t,
 		cache: false,
 		async: true,
 		dataType: 'json',
 		url: 'proxy.php',
 		data: d,
 	}); // end ajax function
 } // end myXHR