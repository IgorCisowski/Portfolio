

<?php

if(isset($_POST['email']) && $_POST["email"] != '') {

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "igorcisowski2098@gmail.com";
$headers = "From: ".$email
$txt = "You have recived an e-mail from ".$name.".\n\n".$message;

mail($mailTo, $message, $headers);
header("Location: index.php?maildend");

}
?>