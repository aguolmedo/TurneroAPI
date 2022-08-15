import {Expose} from "class-transformer";


export class ClienteModel {

    constructor(nroTelefono: string, nombre: string, apellido: string) {
        this.nroTelefono = nroTelefono;
        this.nombre = nombre;
        this.apellido = apellido;

    }

    @Expose({name: 'nroTelefono'})
    nroTelefono: string;
    @Expose({name: 'nombre'})
    nombre: string;
    @Expose({name: 'apellido'})
    apellido: string;

}