<?php
session_start();
include_once('./server/config/conn.php');
if (empty($_SESSION['username']) && empty($_SESSION['password'])) {
    header("Location:./login.php");
    exit();
}
include_once('./server/logout.php');
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
            <li class="nav__item"><a href="#orders" class="nav__link">Orders</a></li>
            <li class="nav__item"><a href="#contacts" class="nav__link">Contacts</a></li>
            <li class="nav__item"><a href="#" class="nav__link active">Loged in as: <?php echo $_SESSION["username"] ?></a></li>
            <li class="nav__item"><a href="dashboard.php?logout" class="nav__link" style="font-weight: bold; color: red;">Logout</a></li>
        </ul>
    </div>

    <div class="data__table container" style="margin-top: 4rem;">
        <div class="order__table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Selected menu</th>
                        <th>Address</th>
                        <th>Date/Time</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $sql = 'SELECT * FROM ordermenu;';
                    $stmt = mysqli_stmt_init($db_conn);
                    if (!mysqli_stmt_prepare($stmt, $sql)) {
                        printf('Ooops!');
                    } else {
                        mysqli_stmt_execute($stmt);
                        $results = mysqli_stmt_get_result($stmt);
                        if ($results->num_rows > 0) {
                            $i = 1;
                            while ($row = mysqli_fetch_assoc($results)) {
                    ?>
                                <tr>
                                    <td><?php echo $i ?></td>
                                    <td><?php echo $row['Fullname'] ?></td>
                                    <td><?php echo ($row['Email']); ?></td>
                                    <td><?php echo ($row['Phone']); ?></td>
                                    <td><?php echo ($row['Selectmenu']); ?></td>
                                    <td><?php echo ($row['Address']); ?></td>
                                    <td><?php echo ($row['Date']); ?></td>
                                </tr>
                    <?php
                                $i++;
                            }
                        }
                    }
                    ?>
                </tbody>

            </table>
        </div>

    </div>
    <div class="data__table section container" id="contacts">
        <div class="contact__table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Message</th>
                        <th>Date/Time</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $sql = 'SELECT * FROM contacts;';
                    $stmt = mysqli_stmt_init($db_conn);
                    if (!mysqli_stmt_prepare($stmt, $sql)) {
                        printf('Ooops!');
                    } else {
                        mysqli_stmt_execute($stmt);
                        $results = mysqli_stmt_get_result($stmt);
                        if ($results->num_rows > 0) {
                            $i = 1;
                            while ($row = mysqli_fetch_assoc($results)) {
                    ?>
                                <tr>
                                    <td><?php echo $i ?></td>
                                    <td><?php echo $row['Fullname'] ?></td>
                                    <td><?php echo ($row['Email']); ?></td>
                                    <td><?php echo ($row['Phone']); ?></td>
                                    <td><?php echo ($row['Location']); ?></td>
                                    <td><?php echo ($row['Message']); ?></td>
                                    <td><?php echo ($row['Date']); ?></td>
                                </tr>
                    <?php
                                $i++;
                            }
                        }
                    }
                    ?>
                </tbody>

            </table>
        </div>
    </div>
    <div class="footer section">
        <p class="footer__text">&copy; My Hotel 2023</p>
    </div>
    <script src="./js/script.js"></script>
</body>

</html>