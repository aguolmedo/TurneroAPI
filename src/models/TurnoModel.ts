import {Expose} from "class-transformer";
import {ClienteModel} from "./ClienteModel";
import {ProfesionalModel} from "./ProfesionalModel";

export class TurnoModel {


    constructor(idTurno: number, fechaHoraInicio: number, confirmado: number, fechaHoraFin: number, cliente: ClienteModel, profesional: ProfesionalModel) {
        this.idTurno = idTurno;
        this.fechaHoraInicio = fechaHoraInicio;
        this.confirmado = confirmado;
        this.fechaHoraFin = fechaHoraFin;
        this.cliente = cliente;
        this.profesional = profesional;
    }

    @Expose({name: 'idTurno'})
    idTurno: number;
    @Expose({name: 'fechaHoraInicio'})
    fechaHoraInicio: number;
    @Expose({name: 'confirmado'})
    confirmado: number;
    @Expose({name: 'fechaHoraFin'})
    fechaHoraFin: number;
    @Expose({name: 'cliente'})
    cliente: ClienteModel;
    @Expose({name: 'profesional'})
    profesional: ProfesionalModel;




}