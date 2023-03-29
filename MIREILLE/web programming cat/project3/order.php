<?php
include('./server/config/conn.php');
include('./server/insert_order.php')
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
            <li class="nav__item"><a href="order.php" class="nav__link active">Order</a></li>
            <li class="nav__item"><a href="index.html#gallery" class="nav__link">Gallery</a></li>
            <li class="nav__item"><a href="contact.php" class="nav__link">Contact us</a></li>
            <li class="nav__item"><a href="login.php" class="nav__link">Login</a></li>
        </ul>
    </div>

    <div class="order__page container">
        <div class="order__text">
            <p>
                Reach to our customer service 24/7
            </p>
        </div>
        <div class="form__container">
            <form action="<?php echo (htmlspecialchars($_SERVER['PHP_SELF'])); ?>" method="post">
                <input type="text" id="fname" name="fullname" placeholder="Full name">
                <input type="email" name="email" placeholder="Email-Address">
                <input type="text" name="phone" placeholder="Phone number">
                <input type="text" name="address" placeholder="Address">
                <label for="menu">Choose from our menu list</label>
                <div class="form__menu">
                    <select name="foodMenu">
                        <option value="Nothing selected">Food</option>
                        <option value="Brochettes">Brochettes</option>
                        <option value="Fish">Fish</option>
                        <option value="Salade">Salade</option>
                    </select>
                    <select name="drinksMenu">
                        <option value="Nothing selected">Drinks</option>
                        <option value="Soda">Soda</option>
                        <option value="Milk">Milk</option>
                        <option value="Beer">Beer</option>
                    </select>
                </div>

                <button class="btn order__btn" type="submit">Make order &rAarr;</button>
            </form>
        </div>
    </div>
    <div class="footer section">
        <p class="footer__text">&copy; My Hotel 2023</p>
    </div>
    <script src="./js/script.js"></script>
</body>

</html>