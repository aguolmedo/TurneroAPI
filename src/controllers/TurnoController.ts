import { Request, Response } from 'express';
import Types from '../services/types/types';
import container from '../services/inversify.config';
import {TurnoService} from "../services/TurnoService";

//let _turnoService = container.get<TurnoService>(Types.TurnoService);

export async function getAll(request: Request, response: Response) {
  //  let respuesta = await _turnoService.getAll()
    //if (respuesta) response.status(200).json(respuesta)
    //else response.status(404).json("no turnos today manito")
}

export const TurnosServiceController =
    {
        getAll
    }
