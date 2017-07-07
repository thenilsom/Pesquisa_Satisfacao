<?php

require __DIR__.'/vendor/autoload.php';

$app = new \Slim\App;

$app->get('/hello', function(){
	return 'Hello World!';
});

$app->run();

?>