
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto

    // Obtener los valores de los campos del formulario
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Crear un objeto con los datos
    const contactMessage = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: subject,
      message: message
    };

    // Guardar el objeto en el local storage
    localStorage.setItem('contactMessage', JSON.stringify(contactMessage));

    // Mostrar un mensaje de confirmación
    alert('Tu mensaje ha sido enviado y almacenado.');

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
  });