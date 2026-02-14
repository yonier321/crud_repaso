
const baseDatos1 = ['Canada','EUA','Mexico','Ecuador','Brazil','Argentina','Uruguay'];
const baseDatos2 = ['Japón','Irán','Corea del Sur','Alemania','Croacia','España','Inglaterra'];

function encontrado(pais) {
    document.getElementById("resultado").textContent = pais + " encontrado";
}

function busquedaBaseDatos2(pais, callback) {
    if (baseDatos2.includes(pais)) {
        callback(pais);
    } else {
        document.getElementById("resultado").textContent = "Dato no encontrado";
    }
}

function busquedaBaseDatos1(pais, callback) {
    if (baseDatos1.includes(pais)) {
        callback(pais);
    } else {
        busquedaBaseDatos2(pais, callback);
    }
}

function buscarPais() {
    const pais = document.getElementById("pais").value.trim();
    busquedaBaseDatos1(pais, encontrado);
}
