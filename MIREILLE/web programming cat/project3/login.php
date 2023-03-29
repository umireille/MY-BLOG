<?php
session_start();
include('./server/config/conn.php');
include('./server/login_scripts.php')
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Project 3</title>
</head>

<body>
    <div class="navbar">
        <a href="#" class="logo nav__link">My hotel</a>
        <ul class="nav__list">
            <li class="nav__item"><a href="index.html" class="nav__link ">Home</a></li>
            <li class="nav__item"><a href="index.html#about" class="nav__link">About us</a></li>
            <li class="nav__item"><a href="index.html#menu" class="nav__link">Menu</a></li>
            <li class="nav__item"><a href="order.php" class="nav__link">Order</a></li>
            <li class="nav__item"><a href="index.html#gallery" class="nav__link">Gallery</a></li>
            <li class="nav__item"><a href="contact.php" class="nav__link ">Contact us</a></li>
            <li class="nav__item"><a href="login.php" class="nav__link active">Login</a></li>
        </ul>
    </div>

    <div class="contact__page container">
        <div class="form__container">
            <?php
            if (isset($_GET["wrong_uname_pwd"])) {
                echo ('<h1 class="text-danger">Incorrect Username or Password!</h1>');
            } elseif (isset($_GET["WarningU"])) {
                echo ('<h1 class="text-danger">Both username and password are required</h1>');
            } elseif (isset($_GET["WarningP"])) {
                echo ('<h1 class="h4 mb-4 text-danger">Both username and password are required</h1>');
            } else {
                echo ('<h1 style="margin-bottom:2rem; font-size:1.5rem; text-align:center;">Welcome</h1>');
            }
            ?>

            <form action="<?php echo (htmlspecialchars($_SERVER['PHP_SELF'])); ?>" method="post">
                <input type="text" name="username" placeholder="Username">
                <input type="password" name="password" placeholder="Password">
                <button class="btn order__btn" type="submit">Login</button>
            </form>
        </div>
    </div>
    <div class="footer section">
        <p class="footer__text">&copy; My Hotel 2023</p>
    </div>
    <script src="./js/script.js"></script>
</body>

</html>