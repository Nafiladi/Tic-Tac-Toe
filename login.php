<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    include('db.php');
    
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($result) > 0) {
        $_SESSION['username'] = $username;
        header('Location: game.php');
    } else {
        echo "Invalid login!";
    }
}
?>