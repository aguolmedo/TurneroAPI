import { injectable } from "inversify";
import { getManager } from "typeorm";
import {ITurnosService} from "./interface/ITurnosService";
import {Turno} from "../entities/Turno";
import {TurnoModel} from "../models/TurnoModel";
import {ClienteModel} from "../models/ClienteModel";
import {ProfesionalModel} from "../models/ProfesionalModel";


@injectable()
export class TurnosService implements ITurnosService {

    constructor() {
    }

    public async getAll() {
        try {
            const turnos =  await getManager()
                .createQueryBuilder(Turno, "t")
                .leftJoinAndSelect("t.cliente2", "cliente")
                .leftJoinAndSelect("t.profesional2", "profesional")
                .addSelect("t.fechaHoraInicio", "HorarioInicio")
                .addSelect("t.confirmado", "Confirmado")
                .addSelect("t.fechaHoraFin", "HorarioFin")
                .addSelect("cliente.nombre", "NombreCliente")
                .addSelect("cliente.apellido", "ApellidoCliente")
                .addSelect("cliente.nroTelefono", "NroTelefonoCliente")
                .addSelect("profesional.nombre", "NombreProfesional")
                .addSelect("profesional.apellido", "ApellidoProfesional")
                .addSelect("profesional.nroTelefono", "NroTelefonoProfesional")
                .getRawMany();

            let turnosModelList : Array<TurnoModel> = new Array<TurnoModel>();
            turnos.forEach(function (turno)
                {
                    const clienteModel: ClienteModel = new ClienteModel(turno.NroTelefonoCliente,turno.NombreCliente,turno.ApellidoCliente)
                    const profesionalModel: ProfesionalModel = new ProfesionalModel(turno.NroTelefonoProfesional,turno.NombreProfesional,turno.ApellidoProfesional);

                    const turnoModel: TurnoModel = new TurnoModel(turno.t_idTurno,turno.HorarioInicio,turno.Confirmado,turno.HorarioFin,clienteModel,profesionalModel);

                    turnosModelList.push(turnoModel);
                }
            );

            console.log("-- Se ejecuto una peticion exitosa a /turnos --")

            return turnosModelList;

        }
        catch (e) {
            return e;
        }
    }

    public async getByCliente(numeroTelefono: string) {
        try {
            const turnos =  await getManager()
                .createQueryBuilder(Turno, "t")
                .leftJoinAndSelect("t.cliente2", "cliente")
                .leftJoinAndSelect("t.profesional2", "profesional")
                .addSelect("t.fechaHoraInicio", "HorarioInicio")
                .addSelect("t.confirmado", "Confirmado")
                .addSelect("t.fechaHoraFin", "HorarioFin")
                .addSelect("cliente.nombre", "NombreCliente")
                .addSelect("cliente.apellido", "ApellidoCliente")
                .addSelect("cliente.nroTelefono", "NroTelefonoCliente")
                .addSelect("profesional.nombre", "NombreProfesional")
                .addSelect("profesional.apellido", "ApellidoProfesional")
                .addSelect("profesional.nroTelefono", "NroTelefonoProfesional")
                .where("cliente.nroTelefono = :nroTelefono", {nroTelefono: numeroTelefono})
                .getRawMany();

            let turnosModelList : Array<TurnoModel> = new Array<TurnoModel>();
            turnos.forEach(function (turno)
                {
                    const clienteModel: ClienteModel = new ClienteModel(turno.NroTelefonoCliente,turno.NombreCliente,turno.ApellidoCliente)
                    const profesionalModel: ProfesionalModel = new ProfesionalModel(turno.NroTelefonoProfesional,turno.NombreProfesional,turno.ApellidoProfesional);

                    const turnoModel: TurnoModel = new TurnoModel(turno.t_idTurno,turno.HorarioInicio,turno.Confirmado,turno.HorarioFin,clienteModel,profesionalModel);

                    turnosModelList.push(turnoModel);
                }
            );
            console.log("-- Se ejecuto con exito una peticion a /turno/" + numeroTelefono + " --")
            return turnosModelList;
    }
    catch (e) {
            return e;

    }}

    public async create(body :Turno) {
        try {
            await getManager()
                .createQueryBuilder()
                .insert()
                .into(Turno)
                .values( [{
                    fechaHoraInicio: body.fechaHoraInicio,
                    confirmado: body.confirmado,
                    fechaHoraFin: body.fechaHoraFin,
                    cliente: body.cliente,
                    profesional: body.profesional
                    }])
                .execute();
            console.log("-- Se ejecutó con exito una peticion a /turno --")
            return "Turno creado."
        }
        catch (e) {
            return e;
        }
    }

}

