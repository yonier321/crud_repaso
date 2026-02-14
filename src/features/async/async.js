
function doble(numero) {
    return new Promise(resolve => {
        setTimeout(() => resolve(numero * 2), 2000);
    });
}

async function calcular() {
    const numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    const res = await doble(numero);
    resultado.textContent = "Resultado: " + res;
}
