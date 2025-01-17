<?php
  // Aquí obtendremos los resultados de los cálculos
  $edad = isset($_POST['edad']) ? $_POST['edad'] : '';
  $semanas_cotizadas = isset($_POST['semanas_cotizadas']) ? $_POST['semanas_cotizadas'] : '';
  $salario_base = isset($_POST['salario_base']) ? (float)$_POST['salario_base'] : 0; // Convertir a float
  $modalidad40 = isset($_POST['modalidad40']) ? $_POST['modalidad40'] : '';
  $anios_modalidad40 = isset($_POST['anios_modalidad40']) ? $_POST['anios_modalidad40'] : '';

  // Calcular el costo de Modalidad 40 si se ha definido
  $modalidad40_costo = $salario_base * 0.13347;
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resultado</title>
  <link rel="stylesheet" href="css/style2.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
</head>
<body>

  <!-- Contenedor para los resultados -->
  <div class="results-container">
    <button class="regresar" onclick="window.history.back()">Regresar</button>

    <h1>Resultado</h1>
    <div class="results">
      <p><strong>Edad:</strong> <?php echo $edad; ?> años</p>
      <p><strong>Semanas Cotizadas:</strong> <?php echo $semanas_cotizadas; ?></p>
      <p><strong>Salario Base de Cotización (SBC):</strong> $ <?php echo number_format($salario_base, 2); ?></p>
      <p><strong>Costo Modalidad 40:</strong> $ <?php echo number_format($modalidad40_costo, 2); ?></p>
      <?php if ($modalidad40 == "si"): ?>
        <p><strong>Años en Modalidad 40:</strong> <?php echo $anios_modalidad40; ?> años</p>
      <?php endif; ?>
    </div>

    <button class="guardar-pdf" id="guardarPDF">Guardar en PDF</button>
  </div>

  <script src="js/script2.js"></script>
</body>
</html>
