import {injectable} from "inversify";
import {ITurnoService} from "./interface/ITurnoService";
import {getManager} from "typeorm/browser";
import {Turno} from "../entities/Turno";

@injectable()
export class TurnoService implements ITurnoService {
    constructor() {}

    public async getAll() {
        return await getManager()
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
    }
}