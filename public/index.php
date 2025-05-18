<?php
require_once '../app/core/App.php';
require_once '../app/core/Router.php';
require_once '../app/config/config.php';
require_once '../app/config/database.php';

// Initialize the application
$app = new App();
$app->run();
?>