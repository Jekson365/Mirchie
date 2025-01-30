<?php


namespace Api\src\controllers;

class UserController
{
    public function index()
    {
        echo json_encode(['name' => "foo"]);
    }
    public function create()
    {
        $params = json_decode(file_get_contents('php://input'), true);
        var_dump($params);
    }
}
