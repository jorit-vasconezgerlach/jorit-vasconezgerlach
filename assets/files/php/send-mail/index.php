<?php

$sentTo = 'Send To Mail';
$sendToTitle = 'Send To Title';
$sendToMessage = 'Send To Message';

$sendFromName = 'Sender Name';
$sendFromMail = 'Sender Mail';

$replyToMail = 'Reply To Mail';

// set header
$headers = "From: ".$sendFromName." <".$sendFromMail.">\r\n";
$headers .= "Reply-To: $replyToMail\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; chartset=UTF-8\r\n";

// send mail
if(mail($sentTo, $sendToTitle, $sendToMessage, $headers)) {
          // mail was send
} else {
          // mail was not send
}
