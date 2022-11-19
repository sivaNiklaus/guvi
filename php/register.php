<?php
$name = $_POST['name'];
$age = $_POST['age'];
$date = $_POST['date'];
$password = $_POST['password'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];

$conn = mysqli_connect('localhost', 'root', '', 'guvi');
if ($conn->connect_error) {
    die("Connection failure: "
        . $conn->connect_error);
}
$select = "select * from register where emailid='$email'";
$result = mysqli_query($conn, $select);
$count = mysqli_num_rows($result);

if ($count < 1) {
    $insert = "INSERT INTO register(emailid, password) VALUES('$email','$password')";
    mysqli_query($conn, $insert);



    require '../asset/vendor/autoload.php';
    $client = new MongoDB\client;
    $companyGuvi = $client->guvi;
    $collections = $companyGuvi->userdetails;
    $insertOneRow = $collections->insertOne(
        [
            'name' => $name,
            'age' => $age,
            'date' => $date,
            'password' => $password,
            'mobile' => $mobile,
            'email' => $email
        ]
    );
    echo json_encode("Account registered");
} else {
    echo json_encode("Email already exist");
}
