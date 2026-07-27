let tareas = [];

let idCounter = 0;

const prioridadClase = {
    1: "priority-urgent",
    2: "priority-important",
    3: "priority-low"
};

const taskName = document.getElementById("task-name");

const prioridades = document.getElementById("priorities");

const fechaLimite = document.getElementById("limit-date");

const agregarTask = document.getElementById("add-task");

const taskList = document.getElementById("task-list");

const stats = document.getElementById("stats");


function agregarTarea() {
    let trimmedTaskName = taskName.value.trim();
    if (trimmedTaskName.length === 0) {
        alert("Nombre no valido.")
        return
    }
    idCounter++;
    const nuevaTarea = {
        id: idCounter,
        titulo: trimmedTaskName,
        prioridad: Number(prioridades.value),
        fechaLimite: fechaLimite.value,
        completada: false
    }
    taskName.value = "";
    fechaLimite.value = "";
    prioridades.value = "";

    tareas.push(nuevaTarea);
    renderizarTareas();
    actualizarEstadisticas();
}

function renderizarTareas() {
    taskList.innerHTML = "";
    tareas.forEach(function(tarea) {
        let tareaDiv = document.createElement("div");

        const clase = prioridadClase[tarea.prioridad];
        tareaDiv.classList.add("task-item", clase);
        if (tarea.completada) {
            tareaDiv.classList.add("completed");
        }

        let infoDiv = document.createElement("div");
        infoDiv.className = "task-info";

        let tituloElement = document.createElement("span");
        tituloElement.textContent = tarea.titulo;

        let pElement = document.createElement("p");
        pElement.textContent = tarea.fechaLimite;

        infoDiv.appendChild(tituloElement);
        infoDiv.appendChild(pElement);

        let actionsDiv = document.createElement("div");
        actionsDiv.className = "task-actions";

        if (!tarea.completada) {
            let buttonElementCompletar = document.createElement("button");
            buttonElementCompletar.className = "task-btn completar";
            buttonElementCompletar.textContent = "Completar";
            buttonElementCompletar.addEventListener("click", function() {
                tarea.completada = true;
                renderizarTareas();
                actualizarEstadisticas();
            }); // termina el event listener

            actionsDiv.appendChild(buttonElementCompletar);
        } // termina el if

        let buttonElementEliminar = document.createElement("button");
        buttonElementEliminar.className = "task-btn eliminar";
        buttonElementEliminar.textContent = "Eliminar";
        buttonElementEliminar.addEventListener("click", function() {
            tareas = tareas.filter(function(unaTarea) {
                return unaTarea.id !== tarea.id;
            });
            renderizarTareas();
            actualizarEstadisticas();
        }); // termina el otro event listener

        actionsDiv.appendChild(buttonElementEliminar);

        tareaDiv.appendChild(infoDiv);
        tareaDiv.appendChild(actionsDiv);
        taskList.appendChild(tareaDiv);
    });
}

function actualizarEstadisticas() {
    const total = tareas.length;
    const completadas = tareas.filter(function(tarea) {
        return tarea.completada === true;
    }).length;
    const pendientes = total - completadas;
    stats.textContent = `Total: ${total} | Completadas: ${completadas} | Pendientes: ${pendientes}`;
}

agregarTask.addEventListener("click", agregarTarea);
