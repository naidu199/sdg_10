<?php
$host = 'sql12.freesqldatabase.com';
$user = 'sql12663638';
$password = 'PvTnKecCEz';
$database = 'sql12663638';
$table = 'Social_Equity_Index';
$column = 'Social Equity Index';

// Create a MySQL connection
$connection = new mysqli($host, $user, $password, $database);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// Fetch data from the database
$query = "SELECT $column FROM $table";
$result = $connection->query($query);

$yValuesFromDB = array();

// Convert the result set into an array
while ($row = $result->fetch_assoc()) {
    $yValuesFromDB[] = $row[$column];
}

// Close the connection
$connection->close();

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($yValuesFromDB);
?>
