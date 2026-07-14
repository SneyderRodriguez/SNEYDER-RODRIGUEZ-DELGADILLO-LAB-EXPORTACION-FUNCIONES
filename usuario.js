class Usuario{
    constructor(nombre, email, esVIP){
        this.nombre = nombre;
        this.email = email;
        this.esVIP = esVIP;
    }

    saludo() {
        return `Saludos, me presento, mi nombre es: ${this.nombre}`;
    }
}

module.exports = Usuario;