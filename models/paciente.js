class Paciente {
    constructor(id, nombre, apellido, fecha, hora, sexo) {
        this._id = id,
            this._nombre = nombre
        this._apellido = apellido
        this._fecha = fecha
        this._hora = hora
        this._sexo = sexo
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get fecha() {
        return this._fecha;
    }

    set fecha(fecha) {
        this._fecha = fecha;
    }

    get hora() {
        return this._hora;
    }

    set hora(hora) {
        this._hora = hora;
    }

    get sexo() {
        return this._sexo;
    }

    set sexo(sexo) {
        this._sexo = sexo;
    }

}

module.exports = Paciente