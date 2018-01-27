<?php

error_reporting(0);
define ('HOSTNAME', 'https://developers.zomato.com/api/v2.1/');


	$url=HOSTNAME.$_GET['path'];

	//set up curl (Client Uniform Resource Locator)
		//  Initiate curl
		$ch = curl_init();
		
		curl_setopt($session, CURLOPT_HEADER, false);
		
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		// Set the url
		curl_setopt($ch, CURLOPT_URL,$url);
		// Execute
		$result=curl_exec($ch);
		// Closing
		curl_close($ch);

	//we want json back so set the correct mimetype
	header("Content-Type: text/plain");

	//give it to me!
	echo $result;
?>