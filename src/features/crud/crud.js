
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let editIndex = null;

function render() {
    const tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    usuarios.forEach((u, index) => {
        tabla.innerHTML += `
        <tr>
            <td>${u.nombre}</td>
            <td>${u.correo}</td>
            <td>${u.documento}</td>
            <td>
                <button onclick="editar(${index})">Editar</button>
                <button onclick="eliminar(${index})">Eliminar</button>
            </td>
        </tr>`;
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function agregar() {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "";

    if (!nombre || !correo || !documento) {
        mensaje.textContent = "Todos los campos son obligatorios";
        return;
    }

    const existe = usuarios.some((u, i) =>
        (u.correo === correo || u.documento === documento) && i !== editIndex
    );

    if (existe) {
        mensaje.textContent = "El correo o documento ya existen";
        return;
    }

    if (editIndex !== null) {
        usuarios[editIndex] = { nombre, correo, documento };
        editIndex = null;
    } else {
        usuarios.push({ nombre, correo, documento });
    }

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("documento").value = "";

    render();
}

function eliminar(index) {
    usuarios.splice(index, 1);
    render();
}

function editar(index) {
    const u = usuarios[index];
    document.getElementById("nombre").value = u.nombre;
    document.getElementById("correo").value = u.correo;
    document.getElementById("documento").value = u.documento;
    editIndex = index;
}

render();
