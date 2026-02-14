
function verificar() {
    const cadena = document.getElementById("cadena").value;
    const resultado = document.getElementById("resultado");

    new Promise((resolve, reject) => {
        const vocales = "aeiouAEIOU";
        const ultimo = cadena.slice(-1);

        if (vocales.includes(ultimo)) {
            resolve("Termina en vocal: " + ultimo);
        } else {
            reject("El caracter no es una vocal");
        }
    })
    .then(res => resultado.textContent = res)
    .catch(err => resultado.textContent = err);
}
