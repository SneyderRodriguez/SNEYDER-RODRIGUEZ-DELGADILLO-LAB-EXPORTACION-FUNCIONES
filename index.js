const Producto = require("./producto.js");
const Usuario = require("./usuario.js");
const Carrito = require("./carrito.js");
const {esEmailValido} = require("./utilidades.js");

let cliente1 = new Usuario("Marinette", "m.inet@yas.com", true);

console.log(esEmailValido(cliente1.email));

let producto1 = new Producto("Pantalla", 200000, "Accesorios", 10);
let producto2 = new Producto("Altavoces", 125000, "Audio", 5);
let carrito = new Carrito(cliente1);

console.log(carrito.agregar(producto1,1));
console.log(carrito.agregar(producto2,2));

console.log(carrito.agregar(producto2, 10));

console.log(carrito.recibo());