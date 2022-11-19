<?php


require '../asset/vendor/autoload.php';
// require '/guvi/asset/redisvendor/vendor/autoload.php';
$client = new MongoDB\client;
$companyGuvi = $client->guvi;
$collections = $companyGuvi->userdetails;
$email = $_POST['email'];

// $redis = new Predis/Client();
// $val = $redis->ping;
// $change = $_POST['date'];

$document = $collections->findOne(['email' => $email]);
echo json_encode($document);
// echo json_encode($val);
