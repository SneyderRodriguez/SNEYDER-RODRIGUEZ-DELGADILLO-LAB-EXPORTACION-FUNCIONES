class Producto{
    constructor(nombre, precio, categoria, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    hayStock(cantidad) {
        return this.stock == false;
    }

    ficha() {
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Stock: ${this.stock}`;
    }
}
module.exports = Producto;