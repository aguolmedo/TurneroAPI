import { Request, Response } from 'express';
import Types from '../services/types/types';
import container from '../services/inversify.config';
import {ClienteService} from "../services/ClienteService";

let _clienteService = container.get<ClienteService>(Types.ClienteService);

export async function getAll(request: Request, response: Response) {
    return response.status(200).json(await _clienteService.getAll())
}

export const ClientServiceController =
    {
        getAll
    }



