import { Request, Response } from 'express';
import Types from '../services/types/types';
import container from '../services/inversify.config';
import {ClienteService} from "../services/ClienteService";

let _clienteService = container.get<ClienteService>(Types.ClienteService);

export async function getAll(request: Request, response: Response) {
    try {
        let clientes = await _clienteService.getAll();
        if (!response) {response.status(404).json("Error, no se pudieron encontrar clientes, es posible que no haya ninguno registrado")}
        response.status(200).json(clientes);
    }
    catch (e) {
        response.status(409).json("Hubo un error al obtener los clientes");
    }


}

export const ClientServiceController =
    {
        getAll
    }



