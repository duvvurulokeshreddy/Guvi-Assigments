<?php
// Connect to the database
$db = new mysqli('localhost', 'username', 'password', 'database_name');

// Check for form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Validate the input
  if (empty($name) || empty($email) || empty($password)) {
    die('Please fill out all required fields.');
  }

  // Hash the password
  $hash = password_hash($password, PASSWORD_DEFAULT);

  // Insert the user into the database
  $stmt = $db->prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
  $stmt->bind_param('sss', $name, $email, $hash);
  $stmt->execute();
  $stmt->close();

  // Redirect to the login page
  header('Location: login.php');
  exit;
}