import { Request, Response } from 'express';
import Types from '../services/types/types';
import container from '../services/inversify.config';
import {ProfesionalService} from "../services/ProfesionalService";

let _profesionalService = container.get<ProfesionalService>(Types.ProfesionalService);

export async function getAll(request: Request, response: Response) {
    try {
        let clientes = await _profesionalService.getAll();
        if (!response) {response.status(404).json("Error, no se pudieron encontrar clientes, es posible que no haya ninguno registrado")}
        response.status(200).json(clientes);
    }
    catch (e) {
        response.status(409).json("Hubo un error al obtener los clientes");
    }
}

export async function getByNroTelefono(request: Request, response: Response) {
    try {
        let clientes = await _profesionalService.getBynroTelefono(request.params.nroTelefono);
        if (!response) {
            response.status(404).json("Error, no se pudo encontrar ningun cliente con nroTelefono " + request.params.nroTelefono);
        }
        response.status(200).json(clientes);
    } catch (e) {
        response.status(409).json("Hubo un error al obtener el cliente");
    }
}

export async function create(request: Request, response: Response) {
    try {
        let respuesta = await _profesionalService.create(request.body)
        if (respuesta) return response.status(200).json(respuesta)
    } catch (error) {
        return response.status(409).json(error)
    }
}


export const ProfesionalServiceController =
    {
        getAll,
        getByNroTelefono,
        create
    }
