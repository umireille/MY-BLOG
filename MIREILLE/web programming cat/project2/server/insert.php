<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['firstName']));
    $lastName = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['lastName']));
    $email_address = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['email']));
    $phone_number = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['mobileNumber']));
    $gender = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['gender']));
    $address = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['address']));
    $city = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['city']));
    $pinCode = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['pinCode']));
    $state = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['state']));
    $country = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['country']));
    $hobbies = implode(',', array($_POST['drawing'], $_POST['singing'], $_POST['dancing'], $_POST['sketching'], $_POST['other']));
    $dateOfBirth = implode('/', array($_POST['day'], $_POST['month'], $_POST['year']));
    $finalQualification = implode(',', array($_POST['board'], $_POST['percentages'], $_POST['passingYear']));
    $courses = mysqli_real_escape_string($db_conn, htmlspecialchars($_POST['courses']));

    $sql = 'INSERT INTO registration(Firstname, Lastname, Dateofbirth, Emailid, Mobilenumber, Gender, Address, City, Pincode, State, Country, Hobbies, Qualification, Courses) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?);';
    $stmt = mysqli_stmt_init($db_conn); //prepare statement

    if (!mysqli_stmt_prepare($stmt, $sql)) { // check if is prepared
        echo ("Not working");
    } else { // Bind and excute the statement
        mysqli_stmt_bind_param($stmt, 'ssssssssssssss', $firstName, $lastName, $dateOfBirth, $email_address, $phone_number, $gender, $address, $city, $pinCode, $state, $country, $hobbies, $finalQualification, $courses);
        mysqli_stmt_execute($stmt);
        echo ("<script>
                window.alert('Registration is successfully done! :) ');
                window.location.href='./';
                </script>"
        );
        exit;
    }
}
