<?php

class App {
    protected $controller = 'HomeController';
    protected $method = 'index';
    protected $params = [];

    public function __construct() {
        $this->parseUrl();
        $this->loadController();
        $this->callMethod();
    }

    protected function parseUrl() {
        if (isset($_GET['url'])) {
            $this->params = explode('/', filter_var(rtrim($_GET['url'], '/'), FILTER_SANITIZE_URL));
            if (file_exists('../app/controllers/' . ucfirst($this->params[0]) . 'Controller.php')) {
                $this->controller = ucfirst(array_shift($this->params)) . 'Controller';
            }
        }
    }

    protected function loadController() {
        require_once '../app/controllers/' . $this->controller . '.php';
        $this->controller = new $this->controller;
    }

    protected function callMethod() {
        if (method_exists($this->controller, $this->method)) {
            call_user_func_array([$this->controller, $this->method], $this->params);
        } else {
            // Handle method not found
            http_response_code(404);
            require_once '../app/views/errors/404.php';
        }
    }
}