function iniciarSesion() {
  const usuario = document.getElementById('usuario').value;
  const contrasena = document.getElementById('contrasena').value;

  const cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];

  const cuentaEncontrada = cuentas.find(cuenta => cuenta.usuario === usuario && cuenta.contrasena === contrasena);

  if (cuentaEncontrada) {
    // Guardar sesión iniciada
    localStorage.setItem("sesionIniciada", "true");
    alert("Inicio de sesión exitoso");
    
    // Redirigir a la página de inicio
    window.location.href = "index.html";
  } else {
    alert("Usuario o contraseña incorrectos, deberás de crear una cuenta para poder entrar");
  }
}

function crearCuenta() {
  const nuevoUsuario = document.getElementById('nuevo-usuario').value;
  const nuevaContrasena = document.getElementById('nueva-contrasena').value;

  if (nuevoUsuario && nuevaContrasena) {
    const cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
    
    // Verificar si el usuario ya existe
    const existeCuenta = cuentas.some(cuenta => cuenta.usuario === nuevoUsuario);
    
    if (existeCuenta) {
      alert("El usuario ya existe, elige otro nombre de usuario.");
    } else {
      // Agregar la nueva cuenta
      cuentas.push({ usuario: nuevoUsuario, contrasena: nuevaContrasena });
      localStorage.setItem('cuentas', JSON.stringify(cuentas));
      alert("Cuenta creada con éxito. Ahora puedes iniciar sesión.");

      // Mostrar formulario de inicio de sesión
      mostrarLogin();
    }
  } else {
    alert("Por favor, rellena ambos campos.");
  }
}

// Deshabilitar enlaces si no hay sesión
function verificarSesion() {
  if (!localStorage.getItem("sesionIniciada")) {
    deshabilitarLinks();
  } else {
    habilitarLinks();
  }
}

function habilitarLinks() {
  const enlaces = document.querySelectorAll('.nav-link-disabled');
  enlaces.forEach((enlace) => {
    enlace.removeAttribute('aria-disabled');
    enlace.removeAttribute('tabindex');
    enlace.classList.remove('nav-link-disabled');
  });
}

function deshabilitarLinks() {
  const enlaces = document.querySelectorAll('.nav-link');
  enlaces.forEach((enlace) => {
    enlace.setAttribute('aria-disabled', 'true');
    enlace.setAttribute('tabindex', '-1');
    enlace.classList.add('nav-link-disabled');
  });
}

// Mostrar formulario de registro
function mostrarRegistro() {
  document.getElementById('mi-elemento').style.display = 'none';
  document.getElementById('registro-box').style.display = 'block';
}

// Mostrar formulario de inicio de sesión
function mostrarLogin() {
  document.getElementById('mi-elemento').style.display = 'block';
  document.getElementById('registro-box').style.display = 'none';
}

// Ejecutar verificación al cargar la página
document.addEventListener('DOMContentLoaded', verificarSesion);
