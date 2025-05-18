<?php

class HomeController extends BaseController
{
    public function index()
    {
        // Load the home view
        $this->view('home/index');
    }
}