import {ProfesionalModel} from "../../models/ProfesionalModel";


export interface IProfesionalService {
    getAll(): Promise<any>;
    getBynroTelefono(nroTelefono: string): Promise<any>;
    create(body: ProfesionalModel): Promise<any>;

}