<?php

require '../vendor/autoload.php';

$app = new \Slim\App;

$app->get('/hello', function(){
	return 'Hello World!';
});

$app->post('/testePost', 'testarPost');

function testarPost($request){
	$pesquisa = json_decode($request->getBody());
	echo json_encode($pesquisa->pergunta1);
}

$app->run();

?>