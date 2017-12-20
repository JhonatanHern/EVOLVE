<?php

header('Content-Type: application/json');
error_reporting(0);
ini_set('display_errors', 0);


$to      = 'info@evolvetechdev.com';
$subject = 'cotización - evolve';
$name = $_POST['name'];
$email = $_POST['email'];
$cel = $_POST['telefono'];
$country = $_POST['pais'];

$tipoDesarrollo = $_POST['field'];

$headers = 'From: notificaciones@serofca.com' . "\r\n" .
	'Content-type:text/html;charset=UTF-8' . "\r\n" .
	'Reply-To: notificaciones@serofca.com' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();


$message = "
<html>
<head>
	<title>HTML email</title>
</head>
<body>
	<p>de: $name ($email)\nDesarrollo de tipo $tipoDesarrollo\n Desde $country\n$cel\n\n$msg</p>
	<table>
		<tr>
			<th>campo</th>
			<th>valor</th>
		</tr>";
foreach($_POST as $key => $value){
	if ($key=='name'||$key=='email'||$key=='telefono'||$key=='pais'||$key=='field') {
	}else{
		$message .= "
		<tr>
			<td>$key</td>
			<td>$value</td>
		</tr>";
	}
}
$message.="
	</table>
</body>
</html>
";

mail($to, $subject, $message, $headers);
mail('jhonatanhernandez998@gmail.com', $subject, $message, $headers);
echo '{"success":true}';
?>