
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Matepolis</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="icon" type="icon/jpg" href="img/logo.png">
</head>
<body>
  
 <header>
      <a href="inicio.php" class="logo">
        <img src="img/logo.png" alt="logo">
        <h2 class="matep">Matepolis</h2>
      </a>
<!-------------------------------------------->
      <?php 

if(!empty($user)): ?>
   Bienvenido. <?= $user['email']; ?>
  



<?php endif; ?> 

<!----------------------------------------------->
      <h3> <center>"Las matemáticas son la gimnasia del espíritu y una preparación para la filosofía" Isócrates</center></h3>
      <nav>
        <a href="mailto:danieleduardosamayoa0@gmail.com" class="nav-link">Soporte</a>
        <a class="nav-link " href="logout.php">ㅤㅤCierra sesiónㅤㅤ</a>
		<a href="Fase II Daniel Samayoa.pdf" download="Manual de usuraio" target="_blank">Manual de	Usuario</a>

      </nav>
      
</header>

<body>
  <div id="contenedor_carga">
    <div class="carga">
          </div>

  <section class="portafolio">
    <div class="contenedor">
        <h2 class="titulo"> <center>¡Cursos!</center></h2>
        <div class="galeria-port">
            <div class="imagen-port">
                <img src="img/img1.jpg">
                <div class="hover-galeria">
				<a href="suma.html">
                 <img src="img/icono.jpg">
				 <h1>Curso de la suma</h1>
                   </a>
                </div>
            </div>
            <div class="imagen-port">
                <img src="img/img2.jpg">
                <div class="hover-galeria">
                    <a href="resta.html">
                 <img src="img/icono.jpg">
				 <h1>Curso de la Resta</h1>
                   </a>
                </div>
            </div>
</body>


</body>
</html>
