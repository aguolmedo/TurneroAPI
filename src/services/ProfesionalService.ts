import { injectable } from "inversify";
import { getManager } from "typeorm";
import {IProfesionalService} from "./interface/IProfesionalService";
import {Profesional} from "../entities/Profesional";
import {ProfesionalModel} from "../models/ProfesionalModel";


@injectable()
export class ProfesionalService implements IProfesionalService {
    constructor() {}

    public async getAll() {
        try {
            const profesionales: any = getManager()
                .createQueryBuilder(Profesional, "p")
                .addSelect("p.nroTelefono", "nroTelefono")
                .addSelect("p.nombre","nombre")
                .addSelect("p.apellido","apellido")
                .getRawMany();
            console.log('-- Se ejecuto una peticion exitosa a /profesionales --')
            return  profesionales;
        }
        catch(e) {

            console.error('Error al obtener los profesionales desde BD.' +
                '\nDetalles:\n' + e);

            return;

        }
    }

    public async getBynroTelefono(numeroTelefono: string) {
        try {
            const profesional: any = getManager()
                .createQueryBuilder(Profesional,"p")
                .addSelect("p.nroTelefono", "nroTelefono")
                .addSelect("p.nombre", "nombre")
                .addSelect("p.apellido", "apellido")
                .where("p.nroTelefono = :nroTelefono", {nroTelefono: numeroTelefono})
                .getRawOne();
            console.log('-- Se ejecuto una peticion exitosa a /profesional/'+ numeroTelefono +' --')
            return profesional;
        }
        catch (e) {
            console.error('Error al obtener el profesional desde BD.' +
                '\nDetalles:\n' + e);

            return;
        }
    }

    public async create(body: ProfesionalModel): Promise<any> {
        try {
            await getManager()
                .createQueryBuilder()
                .insert()
                .into(Profesional)
                .values([{
                    nroTelefono: body.nroTelefono,
                    nombre: body.nombre,
                    apellido: body.apellido

                }])
                .execute();
            console.log("-- Se ejecuto una peticion exitosa a /profesional --")
            return "Profesional creado";
        }
        catch (e) {
            console.error("-- Error al crear el profesional --");
        }
    }



}