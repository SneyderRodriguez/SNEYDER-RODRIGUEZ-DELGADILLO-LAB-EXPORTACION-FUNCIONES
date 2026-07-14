function formatearPrecio(precio){
    return precio.toLocaleString(`es-CO`,{
        style: `currency`,
        currency: `COP`
    });
}

function esEmailValido(email) {
    return email.includes("@") && email.includes(".");
}

function calcularDescuento(precio, porcentaje) {
    return precio * porcentaje;
}

module.exports = {formatearPrecio, esEmailValido, calcularDescuento} = require("./utilidades.js");