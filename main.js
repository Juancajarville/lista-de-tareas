/*
  - DOM, ¿Qué es? (un objeto "especial")
      - el objeto document es un objeto global que representa el documento HTML y mediante el cual vamos a interactuar.
      - ¿Cómo selecciono un elemento?
          - ID (document.getElementById)
          - Clases (document.getElementsByClassName)
          - Etiqueta (document.getElementsByTagName)
          - CSS (document.querySelector / document.querySelectorAll)
      - ¿Cómo agrego, quito or switcheo clases?
      - ¿Cómo borro un elemento (remove)?
  - Eventos, ¿qué son?
*/

// nuevo comentario

/* ¿Qué elementos del HTML necesito? */
/* ul, button, select, input */
/* Me guardo en variables los elementos necesarios */
const listaDeTareasUl = document.getElementById("lista-tareas");
const inputTarea = document.getElementById("tarea");
const selectorPrioridad = document.getElementById("prioridad");
const botonAgregar = document.getElementById("agregar");
const tareasConPrioridadBaja =
  document.getElementsByClassName("prioridad-baja");
const todosLosLi = document.getElementsByTagName("li");

/* Creamos un elemento y lo colocamos en pantalla */
function crearNuevaTarea(nombre, prioridad) {
  // Creamos un nuevo elemento li y lo guardamos en una variable
  const nuevaTarea = document.createElement("li");

  // Cambiamos el texto interno del li
  nuevaTarea.textContent = nombre;

  // Agregamos una clase CSS al li
  nuevaTarea.classList.add(prioridad);

  // Agregamos el li a la lista de tareas (ul)
  listaDeTareasUl.appendChild(nuevaTarea);
}

/* Los eventos se activan para notificar al código de "cambios interesantes" 
  que pueden afectar la ejecución del código.
  
  Algunos ejemplos son:
  - 'click' Cuando el usuario clickea el elemento
  - 'mouseenter' Cuando el mouse entra en contacto con el elemento (hover en css)
  - 'keydown/keypress/keyup' Cuando el usuario presiona una tecla del teclado
*/
// En este usamos el evento 'click' para cuando el usuario clickea el botón
botonAgregar.addEventListener("click", function () {
  // Primero checheo que el usuario haya escrito un titulo para la tarea y seleccionado una prioridad.
  // Para eso nos fijamos que tanto el input como el select tengan un valor distinto a ""
  if (inputTarea.value !== "" && selectorPrioridad.value !== "") {
    // Si es asi, creamos la tarea
    crearNuevaTarea(inputTarea.value, 'prioridad-alta');
  } else {
    // Si no es asi, mostramos una alerta al usuario
    alert("Por favor ingrese los datos");
  }
});

listaDeTareasUl.addEventListener("click", function (evento){
  evento.target.remove();
})

function sacarClase(elemento, clase) {
  elemento.classList.remove(clase);
}
