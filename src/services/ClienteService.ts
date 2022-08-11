import { injectable } from "inversify";
import { getManager } from "typeorm";
import {IClienteService} from "./interface/IClienteService";
import {Cliente} from "../entities/Cliente";


@injectable()
export class ClienteService implements IClienteService {
    constructor() {}

    public async getAll() {
        try {
            const clientes: any = getManager()
                .createQueryBuilder(Cliente, "c")
                .addSelect("c.nroTelefono", "nroTelefono")
                .addSelect("c.nombre","nombre")
                .addSelect("c.apellido","apellido")
                .getRawMany();
            console.log('-- Se ejecuto una peticion exitosa a /clientes --')
            return clientes;
        }
        catch(error) {

            console.error('Error al obtener los clientes desde BD.' +
                '\nDetalles:\n' + error);

            return;

        }
    }
}

