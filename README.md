# PHP MVC Project

This is a simple PHP MVC (Model-View-Controller) project that demonstrates the structure and functionality of a web application using the MVC design pattern.

## Project Structure

```
php-mvc-project
├── app
│   ├── config
│   │   ├── config.php
│   │   └── database.php
│   ├── controllers
│   │   ├── AuthController.php
│   │   ├── HomeController.php
│   │   └── BaseController.php
│   ├── models
│   │   ├── User.php
│   │   └── BaseModel.php
│   ├── views
│   │   ├── auth
│   │   │   ├── login.php
│   │   │   └── register.php
│   │   ├── home
│   │   │   └── index.php
│   │   ├── templates
│   │   │   ├── header.php
│   │   │   └── footer.php
│   │   └── errors
│   │       └── 404.php
│   ├── helpers
│   │   └── SessionHelper.php
│   └── core
│       ├── App.php
│       ├── Router.php
│       └── Database.php
├── public
│   ├── index.php
│   ├── css
│   │   └── style.css
│   └── js
│       └── main.js
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd php-mvc-project
   ```

3. Configure your database settings in `app/config/database.php`.

4. Start a local server (e.g., using PHP's built-in server):
   ```
   php -S localhost:8000 -t public
   ```

5. Open your browser and go to `http://localhost:8000`.

## Features

- User authentication (login and registration)
- MVC architecture
- Custom error handling
- Basic session management

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.