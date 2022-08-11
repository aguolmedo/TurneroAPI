import {FirstServiceController} from "./controllers/FirstServiceController";
import {ClienteService} from "./services/ClienteService";
import {ClientServiceController} from "./controllers/ClienteController";


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
    }
];