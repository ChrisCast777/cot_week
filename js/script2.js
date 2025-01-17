// Función para manejar el cálculo cuando el formulario es enviado
document.getElementById('calculadora-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Evitar que se envíe el formulario de manera tradicional

  // Obtener los valores de los campos del formulario
  const edad = document.getElementById('edad').value;
  const semanasCotizadas = document.getElementById('semanas').value;
  const salarioBase = document.getElementById('sbc').value;
  const modalidad40 = document.getElementById('modalidad40').value;
  const aniosModalidad40 = document.getElementById('anios-modalidad40').value;

  // Calcular el costo de Modalidad 40
  const modalidad40Costo = salarioBase * 0.13347;

  // Mostrar los resultados en la página
  document.getElementById('edad-result').textContent = edad;
  document.getElementById('semanas-result').textContent = semanasCotizadas;
  document.getElementById('sbc-result').textContent = parseFloat(salarioBase).toFixed(2);
  document.getElementById('modalidad40-result').textContent = modalidad40Costo.toFixed(2);

  if (modalidad40 === "si") {
      document.getElementById('anios-modalidad40-result').textContent = aniosModalidad40;
  } else {
      document.getElementById('anios-modalidad40-result').textContent = "-";
  }

  // Ocultar el formulario y mostrar los resultados
  document.getElementById('calculadora-form').style.display = 'none';
  document.getElementById('results-container').style.display = 'block';
});

document.getElementById('modalidad40').addEventListener('change', function() {
  const aniosModalidad40Input = document.getElementById('anios-modalidad40');
  const modalidad40Value = this.value;

  // Si selecciona "Sí", habilita el campo y lo hace obligatorio
  if (modalidad40Value === "si") {
      aniosModalidad40Input.disabled = false;
      aniosModalidad40Input.setAttribute("required", "required");  // Hacerlo obligatorio
  } else {
      aniosModalidad40Input.disabled = true;
      aniosModalidad40Input.removeAttribute("required");  // Eliminar la obligatoriedad
      aniosModalidad40Input.value = "";  // Limpiar el campo si se deshabilita
  }
});


// Botón para volver al formulario
document.getElementById('volver').addEventListener('click', function() {
  document.getElementById('calculadora-form').style.display = 'block';
  document.getElementById('results-container').style.display = 'none';
});
