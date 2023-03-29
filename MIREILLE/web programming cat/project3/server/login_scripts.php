<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['username']));
    $password = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['password']));

    if (empty($_POST['username'])) {
        header("Location:login.php?WarningU");
        exit();
    }
    if (empty($_POST['password'])) {
        header("Location:login.php?WarningP");
        exit();
    } else {
        $sql = "SELECT Username,Password FROM users WHERE username = ? AND password = ?;";
        // $password = md5($password);
        $stmt = mysqli_stmt_init($db_conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            print("Ooops!");
        } else {
            mysqli_stmt_bind_param($stmt, "ss", $username, $password);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            if ($result->num_rows > 0) {
                $_SESSION['username'] = $username;
                $_SESSION['password'] = $password;
                header("Location: ./dashboard.php");
                exit();
            } else {
                header("Location:./login.php?wrong_uname_pwd");
                exit();
            }
        }
    }
}
