<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullName = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['fullname']));
    $email_address = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['email']));
    $phone_number = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['phone']));
    $location = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['location']));
    $message = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['message']));
    $sql = 'INSERT INTO contacts(Fullname,Email, Phone, Location, Message, Date) VALUES(?, ?, ?, ?, ?, ?);';
    $stmt = mysqli_stmt_init($db_conn); //prepare statement

    if (!mysqli_stmt_prepare($stmt, $sql)) { // check if is prepared
        echo ("Not working");
    } else { // Bind and execute the statement
        mysqli_stmt_bind_param($stmt, 'ssssss', $fullName, $email_address, $phone_number,  $location, $message, date('Y-m-d H:i:s'));
        mysqli_stmt_execute($stmt);
        // Success message and redirection
        echo ("<script>
                window.alert('Thank you for contacting us we will get back to you soon! ');
                window.location.href='./contact.php';
                </script>"
        );
        exit;
    }
}
