<?php

class BaseController {
    protected $viewPath = '../views/';

    protected function render($view, $data = []) {
        extract($data);
        include $this->viewPath . $view . '.php';
    }
}