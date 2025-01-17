// Habilitar o deshabilitar el campo "Años en Modalidad 40"
document.addEventListener('DOMContentLoaded', function() {
    const modalidad40Select = document.getElementById('modalidad40');
    const aniosModalidad40Input = document.getElementById('anios-modalidad40');
  
    // Función para actualizar la visibilidad del campo "Años en Modalidad 40"
    function toggleAniosModalidad40() {
      if (modalidad40Select.value === 'si') {
        aniosModalidad40Input.disabled = false;
      } else {
        aniosModalidad40Input.disabled = true;
        aniosModalidad40Input.value = ''; // Limpiar el campo si se desactiva
      }
    }
  
    // Inicializar la visibilidad del campo cuando se carga la página
    toggleAniosModalidad40();
  
    // Actualizar la visibilidad del campo cada vez que se cambie la selección
    modalidad40Select.addEventListener('change', toggleAniosModalidad40);
});
