import {Expose} from "class-transformer";
import {Turno} from "../entities/Turno";
import {TurnoModel} from "./TurnoModel";

export class ProfesionalModel {
    @Expose({name: 'dni'})
    dni: string;
    @Expose({name: 'nroTelefono'})
    nroTelefono: string;
    @Expose({name: 'nombre'})
    nombre: string;
    @Expose({name: 'apellido'})
    apellido: string;
    @Expose({name: 'turnos'})
    turnos: TurnoModel[];
}
