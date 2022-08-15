import { injectable } from "inversify";
import { getManager } from "typeorm";
import {ITurnosService} from "./interface/ITurnosService";
import {Turno} from "../entities/Turno";


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
                .addSelect("t.fechaHoraInicio", "Horario Incio")
                .addSelect("t.confirmado", "Confirmado")
                .addSelect("t.fechaHoraFin", "Horario Fin")
                .addSelect("cliente.nombre", "Nombre Cliente")
                .addSelect("cliente.apellido", "Apellido Cliente")
                .addSelect("cliente.nroTelefono", "Nro Telefono Cliente")
                .addSelect("profesional.nombre", "Nombre Profesional")
                .addSelect("profesional.apellido", "Apellido Profesional")
                .addSelect("profesional.nroTelefono", "Nro Telefono Profesional")

                .getRawMany();
            return turnos;
        }
        catch (e) {
            return "Error: " + e;
        }

    }

}

