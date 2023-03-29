<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullName = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['fullname']));
    $email_address = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['email']));
    $phone_number = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['phone']));
    $address = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['address']));
    
    $ordered = implode(',', array($_POST['foodMenu'], $_POST['drinksMenu']));
    $sql = 'INSERT INTO ordermenu(Fullname,Email, Phone, selectmenu, Address, Date) VALUES(?, ?, ?, ?, ?, ?);';
    $stmt = mysqli_stmt_init($db_conn); //prepare statement

    if (!mysqli_stmt_prepare($stmt, $sql)) { // check if is prepared
        echo ("Not working");
    } else { // Bind and excute the statement
        mysqli_stmt_bind_param($stmt, 'ssssss', $fullName, $email_address,$phone_number,$ordered,$address, date('Y-m-d H:i:s'));
        mysqli_stmt_execute($stmt);
        echo ("<script>
                window.alert('Thank you! Your order has been received successfully! :) ');
                window.location.href='./order.php';
                </script>"
        );
        exit;
    }
}
