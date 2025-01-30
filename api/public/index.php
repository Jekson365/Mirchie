<?php

use Api\public\App;
use Api\src\controllers\UserController;

include '../vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
$app = new App();

$app->router->get("/users", [UserController::class, 'index']);
$app->router->post("/register", [UserController::class, 'create']);

$app->run();
