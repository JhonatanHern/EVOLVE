<!DOCTYPE html>
<html>
<head>
	<title>Enviando</title>
</head>
<body>
	<?php
		$name = $_GET['name']
		$mail = $_GET['email']
		$msg = $_GET['mensaje']
		$tlf = $_GET['telefono']
		$ps = $_GET['pais']
		mail('contacto@evolvetechdev.com',"$name $mail $msg $tlf $ps " ,'From: notificaciones@evolve.com' . "\r\n" .'Reply-To: notificaciones@evolve.com' . "\r\n" .'X-Mailer: PHP/' . phpversion(););
	?>
	<h1>Enviando correo</h1>
	<script type="text/javascript">
		history.back()
	</script>
</body>
</html>