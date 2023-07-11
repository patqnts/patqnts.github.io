<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    // Set up SMTP configuration
    $mail->isSMTP();
    $mail->Host = 'smtp@gmail.com'; // Replace with your SMTP server address
    $mail->SMTPAuth = true;
    $mail->Username = 'kwentoakiskis@gmail.com'; // Replace with your SMTP username
    $mail->Password = 'rcmmjjoylmnrysdh'; // Replace with your SMTP password
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465; // Replace with your SMTP port number

    try {
        // Set up sender and recipient
        $mail->setFrom($email, $name);
        $mail->addAddress('jhnpatqnts@gmail.com'); // Replace with your recipient email address

        // Set email subject and body
        $mail->Subject = $subject;
        $mail->Body = "Name: $name\n\nEmail: $email\n\nSubject: $subject\n\nMessage: $message";

        // Send the email
        $mail->send();
        echo 'Message has been sent.';
    } catch (Exception $e) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
}
?>
