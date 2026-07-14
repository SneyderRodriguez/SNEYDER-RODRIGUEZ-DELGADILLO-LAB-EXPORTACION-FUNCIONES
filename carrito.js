const {formatearPrecio, calcularDescuento} = require("./utilidades.js");
const Usuario = require("./usuario.js");
const Producto = require("./producto.js");
class Carrito{
    constructor(Usuario) {
        this.items = [];
        this.Usuario = Usuario;
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
        const subTotal = 0;
        for(let item of this.items){
            subTotal += item.producto.precio * item.cantidad;
        }
        return subTotal;
    }
    total() {
        const total = this.subtotal();
        if(this.Usuario.esVIP){
            return calcularDescuento(total, 10);
        }
        return total;
    }
    recibo(){
        let texto = `${this.Usuario.saludo()}, \n`;
        for(let item of this.items){
            texto += `Producto\t${item.producto.nombre}\n
            Cantidad\t${item.producto.cantidad}\n
            Valor\t${formatearPrecio(item.producto.precio)}\n`;
        }
        texto += `Total\t${formatearPrecio(this.total())}`;
        return texto;
    }
}