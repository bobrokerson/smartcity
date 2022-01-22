<?php
if($_POST['id'] === "") {
	$to = "velo-taxi@yandex.ru"; // Your e-mail address here.
	$body = "\nName: {$_POST['contactname']}\nEmail: {$_POST['contactemail']}\n\n\n{$_POST['contactmessage']}\n\n";
	mail($to, "", $body, "From: {$_POST['contactemail']}"); // E-Mail subject here.
}

if($_POST['id'] === "header-form-slogan-form") {
	$to = "velo-taxi@yandex.ru"; // Your e-mail address here.
	$body = "\nName: {$_POST['contactname']}\nEmail: {$_POST['contactemail']}\n\n\n{$_POST['contactmessage']}\n\n";
	mail($to, "С тобой хотят работать, срочно звони", $body, "From: {$_POST['contactemail']}"); // E-Mail subject here.
}
