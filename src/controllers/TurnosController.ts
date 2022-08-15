import {Request, Response} from "express";
import Types from "../services/types/types";
import container from "../services/inversify.config";
import {TurnosService} from "../services/TurnosService";

let _turnosService = container.get<TurnosService>(Types.TurnosService);

export async function getAll(request: Request, response: Response) {
    try {
        let turnos = await _turnosService.getAll();
        if (!response)  {response.status(404).json("Error, turnos not found")}
        response.status(200).json(turnos);
    }
    catch (e) {
        response.status(409).json("Hubuo un error al obtener los turnos");
    }
}

export const TurnosServiceController =
    {
        getAll
    }
