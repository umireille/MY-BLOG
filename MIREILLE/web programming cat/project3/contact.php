<?php
include('./server/config/conn.php');
include('./server/contact_data.php');
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
            <li class="nav__item"><a href="contact.php" class="nav__link active">Contact us</a></li>
            <li class="nav__item"><a href="login.php" class="nav__link">Login</a></li>
        </ul>
    </div>

    <div class="contact__page container">
        <div class="contact__text">
            <p>
                Get in touch, <br>
                Send message directly from our website <br>
                call us on 40025
            <address>Huye, K505</address>
            </p>
        </div>
        <div class="form__container">
            <form action="<?php echo (htmlspecialchars($_SERVER['PHP_SELF'])); ?>" method="post">
                <input type="text"  name="fullname" placeholder="Full name">
                <input type="email"  name="email" placeholder="Email-Address">
                <input type="text"  name="phone" placeholder="Phone number">
                <input type="text"  name="location" placeholder="Location">
                <textarea placeholder="Message" name="message"></textarea>
                <button class="btn order__btn" type="submit">Send</button>
            </form>
        </div>
    </div>
    <div class="footer section">
        <p class="footer__text">&copy; My Hotel 2023</p>
    </div>
    <script src="./js/script.js"></script>
</body>

</html>