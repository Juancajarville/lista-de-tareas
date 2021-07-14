const listaDeTareasUl = document.getElementById("lista-tareas");
const inputTarea = document.getElementById("tarea");
const selectorPrioridad = document.getElementById("prioridad");
const botonAgregar = document.getElementById("agregar");
const tareasConPrioridadBaja =
  document.getElementsByClassName("prioridad-baja");
const todosLosLi = document.getElementsByTagName("li");

function crearNuevaTarea(nombre, prioridad) {
  const nuevaTarea = document.createElement("li");

  nuevaTarea.textContent = nombre;

  nuevaTarea.classList.add(prioridad);

  listaDeTareasUl.appendChild(nuevaTarea);
}

botonAgregar.addEventListener("click", function () {
  if (inputTarea.value !== "" && selectorPrioridad.value !== "") {
    crearNuevaTarea(inputTarea.value, 'prioridad-alta');
  } else {
    alert("Por favor ingrese los datos");
  }
});

listaDeTareasUl.addEventListener("click", function (evento){
  evento.target.remove();
})

function sacarClase(elemento, clase) {
  elemento.classList.remove(clase);
}
