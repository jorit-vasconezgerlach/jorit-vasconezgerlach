<?php

header('Content-Type: application/json');
header('Accept: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

if($_SERVER['REQUEST_METHOD'] == 'POST') {

          // accept json and form post
          if($_POST == []) {
                    $data = json_decode(file_get_contents('php://input'), true);
          } else {
                    $data = $_POST;
          }

          // standard out
          $out = array(
                    'error' => true,
                    'responseMsg' => 'Unknown error!', //! Your Message
                    'responseCode' => null //! Your Status Code
          );

          $sendTo = 'samplesendto@mail.de'; //! Your Mail
          $sendToTitle = 'Sample Mail Title'; //! Your Title
          $sendToMessage = $data['message'];

          $sendFromName = 'Sample Sender Name'; //! Your Sender Name
          $sendFromMail = 'samplesender@mail.de'; //! Your Sender Mail

          $replyToMail = $data['mail'];

          // Prepair the email headers
          $headers = "From: ".$sendFromName." <".$sendFromMail.">\r\n";
          $headers .= "Reply-To: ".$replyToMail."\r\n";
          $headers .= "MIME-Version: 1.0\r\n";
          $headers .= "Content-Type: text/html; chartset=UTF-8\r\n";

          // Start sending email
          if(mail($sendTo, $sendToTitle, $sendToMessage, $headers)) {
                    $out['error'] = false;
                    $out['responseMsg'] = 'Send!'; //! Your Message
                    $out['responseCode'] = 4; //! Your Status Code
          } else {
                    $out['error'] = true;
                    $out['responseMsg'] = 'Not Send!'; //! Your Message
                    $out['responseCode'] = 5; //! Your Status Code
          }

          echo json_encode($out, JSON_PRETTY_PRINT);

}