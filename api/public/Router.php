<?php


namespace Api\Public;

class Router
{
    public $routes = [];
    public function resolve()
    {
        $path = $_SERVER['REQUEST_URI'];
        $method = strtolower($_SERVER['REQUEST_METHOD']);
        $position = strpos($path, '?') ?? false;
        $route = $position === false ? $path : substr($path, 0, $position);
        if (!isset($this->routes[$method][$route])) {
            http_response_code(404);
            echo json_encode(['error' => 'route not found']);
            exit;
        }

        $controller = new $this->routes[$method][$route][0];
        $action = $this->routes[$method][$route][1];

        return call_user_func([$controller, $action]);
    }
    public function get($path, $callback)
    {
        $this->routes['get'][$path] = $callback;
    }
    public function post($path, $callback)
    {
        $this->routes['post'][$path] = $callback;
    }
}
