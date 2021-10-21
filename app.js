const informacion = document.getElementById("informacion");

informacion.addEventListener("submit", (e) => {
  let nombre = document.getElementById("nombre").value;
  let dni = document.getElementById("dni").value;
  let mensaje = document.getElementById("mensaje").value;
  const mensajes = {
    nombre,
    dni,
    mensaje,
  };

  if (localStorage.getItem("tareas") == null) {
    let tareas = [];
    tareas.push(mensajes);
    localStorage.setItem("tareas", JSON.stringify(tareas));
  } else {
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    tareas.push(mensajes);
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }
  MostrarValores();

  informacion.reset();

  e.preventDefault();
});

function MostrarValores() {
  let tareas = JSON.parse(localStorage.getItem("tareas"));
  let mostrar = document.getElementById("mostrar");
  mostrar.innerHTML = "";

  for (let i = 0; i < tareas.length; i++) {
    let nombre = tareas[i].nombre;
    let dni = tareas[i].dni;
    let mensaje = tareas[i].mensaje;

    mostrar.innerHTML += `
        <h1>Autor : ${nombre} Dni: ${dni} </h1>
        
        <p> Mensaje : ${mensaje}</p>
        <button onclick="Eliminar('${nombre}')">Eliminar</button>`;
  }
}

function Eliminar(nombre) {
  let tareas = JSON.parse(localStorage.getItem("tareas"));
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].nombre == nombre) {
      tareas.splice(i, 1);
    }
  }

  localStorage.setItem("tareas", JSON.stringify(tareas));
  MostrarValores();
}

MostrarValores();
