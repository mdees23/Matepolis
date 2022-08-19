<?php
  session_start();

  require 'database.php';

  if (isset($_SESSION['user_id'])) {
    $records = $conn->prepare('SELECT id, email, password FROM users WHERE id = :id');
    $records->bindParam(':id', $_SESSION['user_id']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $user = null;

    if (count($results) > 0) {
      $user = $results;
    }
  }
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Matepolis</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="icon" type="icon/jpg" href="img/logo.png">
  </head>
  <body>
    <?php require 'partials/header.php' ?>

    <?php if(!empty($user)): ?>
      <br> Bienvenido. <?= $user['email']; ?>
      <br>Te has logueado correctamente
      <a href="logout.php">
      desloguearse
      </a>
      <h1>Ir a la pagina principal ↓</h1>
      <a href="inicio.php">
      <img src="img/logo.png" alt="logo">
      </a>
    <?php else: ?>
      <a >
      <h1> Por Favor usa tu cuenta o crea una </h1>

      <a href="login.php"> loguearse </a> o
      <a href="signup.php"> Crear una cuenta </a>
    <?php endif; ?>
    </a>
  </body>
</html>
