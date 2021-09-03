<?php 
	session_start();

	// connect to database
	$conn = mysqli_connect("localhost", "root", "mysql", "phpmyblog");

	if (!$conn) {
		die("Error connecting to database: " . mysqli_connect_error());
	}
       // coming soon...

	define ('ROOT_PATH', realpath(dirname('root')));
	define('BASE_URL', 'http://localhost/phpmyblog/');
?>