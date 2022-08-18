import {Turno} from "../../entities/Turno";


export interface ITurnosService {
    getAll(): Promise<any>;
    getByCliente(nroTelefono: string): Promise<any>;
    create(turno: Turno): Promise<any>;
    modify(turno: Turno): Promise <any>;
}