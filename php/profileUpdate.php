<?php
require '../asset/vendor/autoload.php';
$client = new MongoDB\client;
$companyGuvi = $client->guvi;
$collections = $companyGuvi->userdetails;
$name = $_POST['name'];
$date = $_POST['date'];
$age = $_POST['age'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
// $change = $_POST['date'];
// $collections->updateOne(['email' => $email], ["$set" => ["age" => $age]]);
$updateResult = $collections->updateOne(
    ['email' => $email],
    ['$set' => ['age' => $age]],
);
$updateResult = $collections->updateOne(
    ['email' => $email],
    ['$set' => ['date' => $date]],
);
$updateResult = $collections->updateOne(
    ['email' => $email],
    ['$set' => ['name' => $name]],
);
$updateResult = $collections->updateOne(
    ['email' => $email],
    ['$set' => ['mobile' => $mobile]]
);

$document = $collections->findOne(['email' => $email]);
echo json_encode($document);
