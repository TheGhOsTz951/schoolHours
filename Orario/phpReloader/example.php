<!DOCTYPE html>
<html>
<head>
	<title>PHP Hot Reload Example</title>
</head>
<body>
	<section class="live-example">
		<p>With this page opened in a browser, <br/>change anything on its source content.</p>
	</section>
</body>
	<?php

		require "src/HotReloader.php";
		new HotReloader\HotReloader('//localhost/Orario/phrwatcher.php');

	?>
</html>