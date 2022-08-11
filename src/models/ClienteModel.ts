import {Expose} from "class-transformer";
import {TurnoModel} from "./TurnoModel";


export class ClienteModel {

    constructor(nroTelefono: string, nombre: string, apellido: string, turnos: TurnoModel[]) {
        this.nroTelefono = nroTelefono;
        this.nombre = nombre;
        this.apellido = apellido;
        this.turnos = turnos;
    }

    @Expose({name: 'nroTelefono'})
    nroTelefono: string;
    @Expose({name: 'nombre'})
    nombre: string;
    @Expose({name: 'apellido'})
    apellido: string;
    @Expose({name: 'turnos'})
    turnos: TurnoModel[]
}