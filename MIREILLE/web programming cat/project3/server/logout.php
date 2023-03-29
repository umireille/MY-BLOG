<?php
    
    #--Now destroy all sessions when the logout event is trigled
    if(isset($_GET['logout']))
    {
         session_destroy();
         unset($_SESSION['username']);
         unset($_SESSION['password']);
         header("Location: ./login.php");
         exit();
    }
