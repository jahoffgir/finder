/*
 * AJAX function to get information from API
 * two parameters: d, path to get to data in API
 * Example: zFLT('get',{'path':'/[path]/'}).done(function(json){...});
 */
 function zFLT( d ){
 	return $.ajax({
 		cache: false,
 		async: true,
 		dataType: 'json',
 		url: 'proxy.php',
 		data: d
 	}); // end ajax function
 } // end myXHR