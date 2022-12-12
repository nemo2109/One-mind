// Constante para el body
const body = document.querySelector('body');

// Llamar nuestras constantes principales
const main = document.getElementById('main');
const form = document.getElementById('form');
const seccionPrincipal = document.getElementById('contenido-1');

const contenedorBotones = document.getElementById('contenedor-btns');

// Inputs de la forma
const sentimiento = document.getElementById('sentimiento');

// Crear un escuchador de eventos para la forma
form.addEventListener('submit', (e) => {
  // Evitar accion por defecto de la forma
  e.preventDefault();

});

// Crear un evento global 
main.addEventListener('click', (e) => {
  if (e.target.classList.contains('feliz-btn')) {
    // Agregar clases a body
    body.removeAttribute('class');
    body.classList.add('feliz');

    // Agregar la clase a la seccion
    seccionPrincipal.classList.remove('enojado-s', 'triste-s', 'tranquilo-s');
    seccionPrincipal.classList.add('feliz-s');

    // Llamar funcion para agregar texto
    insertarEstadoDeAnimo('Feliz');
  }

  if(e.target.classList.contains('triste-btn')) {
    body.removeAttribute('class');
    body.classList.add('triste');

    // Agregar la clase a la seccion
    seccionPrincipal.classList.remove('enojado-s', 'tranquilo-s', 'feliz-s');
    seccionPrincipal.classList.add('triste-s');

    // Llamar funcion para agregar texto
    insertarEstadoDeAnimo('Triste')
  }

  if(e.target.classList.contains ('tranquilo-btn')) {
    body.removeAttribute('class');
    body.classList.add('tranquilo');

    // Agregar la clase a la seccion
    seccionPrincipal.classList.remove('enojado-s', 'feliz-s', 'triste-s');
    seccionPrincipal.classList.add('tranquilo-s')

    // Llamar funcion para agregar texto
    insertarEstadoDeAnimo('Tranquilo')
  }

  if(e.target.classList.contains ('enojado-btn')) {
    body.removeAttribute('class');
    body.classList.add('enojado');

    // Agregar la clase a la seccion
    seccionPrincipal.classList.remove('triste-s', 'feliz-s', 'tranquilo-s')
    seccionPrincipal.classList.add('enojado-s');

    // Llamar funcion para agregar texto
    insertarEstadoDeAnimo('Enojo')
  }
});

function insertarEstadoDeAnimo (animo) {
  const texto = document.getElementById('estado-animo');
  texto.textContent = animo;
}