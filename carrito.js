const {formatearPrecio, calcularDescuento} = require("./utilidades.js");
const Usuario = require("./usuario.js");
const Producto = require("./producto.js");
class Carrito{
    constructor(usuario) {
        this.items = [];
        this.usuario = usuario;
    }
    agregar(producto, cantidad) {
        if(!producto.hayStock(cantidad)){
            return `Sin Stock`
        }else{
            this.items.push({producto, cantidad});
        }
        return `Producto agregado al carrito`
    }
    subtotal(){
        let subTotal = 0;
        for(let item of this.items){
            subTotal += item.producto.precio * item.cantidad;
        }
        return subTotal;
    }
    total() {
        let total = this.subtotal();
        if(this.usuario.esVIP){
            return calcularDescuento(total, 10);
        }
        return total;
    }
    recibo(){
        let texto = `${this.usuario.saludo()}, \n`;
        for(let item of this.items){
            texto += `Producto\t${item.producto.nombre}\nCantidad\t${item.cantidad}\nValor\t${formatearPrecio(item.producto.precio)}\n`;
        }
        texto += `Total\t${formatearPrecio(this.total())}`;
        return texto;
    }
}

module.exports = Carrito;