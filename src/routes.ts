import {FirstServiceController} from "./controllers/FirstServiceController";
import {ClienteService} from "./services/ClienteService";
import {ClientServiceController} from "./controllers/ClienteController";
import {ProfesionalServiceController} from "./controllers/ProfesionalController";


export const AppRoutes = [
    {
        path: '/holamundo',
        method: 'get',
        action: FirstServiceController.holaMundo,
    },
    {
        path: '/clientes',
        method: 'get',
        action: ClientServiceController.getAll,
    },
    {
        path: '/cliente/:nroTelefono',
        method: 'get',
        action: ClientServiceController.getByNroTelefono,
    },
    {
        path: '/cliente',
        method: 'post',
        action: ClientServiceController.create,
    },
    {
        path: '/profesionales',
        method: 'get',
        action: ProfesionalServiceController.getAll,
    },
    {
        path: '/profesional/:nroTelefono',
        method: 'get',
        action: ProfesionalServiceController.getByNroTelefono,
    },
    {
        path: '/profesional',
        method: 'post',
        action: ProfesionalServiceController.create,
    }
];