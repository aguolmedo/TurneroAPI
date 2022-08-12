import {ClienteModel} from "../../models/ClienteModel";


export interface IClienteService {
    getAll(): Promise<any>;
    getBynroTelefono(nroTelefono: string): Promise<any>;
    create(body: ClienteModel): Promise<any>;

}