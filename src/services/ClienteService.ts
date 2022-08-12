import { injectable } from "inversify";
import { getManager } from "typeorm";
import {IClienteService} from "./interface/IClienteService";
import {Cliente} from "../entities/Cliente";
import {ClienteModel} from "../models/ClienteModel";


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
        catch(e) {

            console.error('Error al obtener los clientes desde BD.' +
                '\nDetalles:\n' + e);

            return;

        }
    }

    public async getBynroTelefono(numeroTelefono: string) {
        try {
            const cliente: any = getManager()
                .createQueryBuilder(Cliente,"c")
                .addSelect("c.nroTelefono", "nroTelefono")
                .addSelect("c.nombre", "nombre")
                .addSelect("c.apellido", "apellido")
                .where("c.nroTelefono = :nroTelefono", {nroTelefono: numeroTelefono})
                .getRawOne();
            console.log('-- Se ejecuto una peticion exitosa a /cliente/:'+ numeroTelefono +' --')
            return cliente;
        }
        catch (e) {
            console.error('Error al obtener el cliente desde BD.' +
                '\nDetalles:\n' + e);

            return;
        }
    }

    public async create(body: ClienteModel): Promise<any> {
        try {
            await getManager()
                .createQueryBuilder()
                .insert()
                .into(Cliente)
                .values([{
                    nroTelefono: body.nroTelefono,
                    nombre: body.nombre,
                    apellido: body.apellido
                }])
                .execute();
            console.log("-- Se ejecuto una peticion exitosa a /cliente --")
            return "Cliente creado";
        }
        catch (e) {
            console.error("-- Error al crear el cliente --");
        }
    }



}

