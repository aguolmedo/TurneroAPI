import {FirstServiceController} from "./controllers/FirstServiceController";
import {ClienteService} from "./services/ClienteService";
import {ClientServiceController} from "./controllers/ClienteController";
import {ProfesionalServiceController} from "./controllers/ProfesionalController";
import {TurnosServiceController} from "./controllers/TurnosController";
import {Schema} from "./middleware/ValidationSchema";


export const AppRoutes = [
    {
        path: '/holamundo',
        method: 'get',
        schema: Schema.schemaVoid,
        action: FirstServiceController.holaMundo,
    },
    {
        path: '/clientes',
        method: 'get',
        schema: Schema.schemaVoid,
        action: ClientServiceController.getAll,
    },
    {
        path: '/cliente/:nroTelefono',
        method: 'get',
        schema: Schema.schemaVoid,
        action: ClientServiceController.getByNroTelefono,
    },
    {
        path: '/cliente',
        method: 'post',
        schema: Schema.schemaPostCliente,
        action: ClientServiceController.create,
    },
    {
        path: '/profesionales',
        method: 'get',
        schema: Schema.schemaVoid,
        action: ProfesionalServiceController.getAll,
    },
    {
        path: '/profesional/:nroTelefono',
        method: 'get',
        schema: Schema.schemaVoid,
        action: ProfesionalServiceController.getByNroTelefono,
    },
    {
        path: '/profesional',
        method: 'post',
        schema: Schema.schemaPostProfesional,
        action: ProfesionalServiceController.create,
    },
    {
        path: '/turnos',
        method: 'get',
        schema: Schema.schemaVoid,
        action: TurnosServiceController.getAll
    },
    {
        path: '/turno/:nroTelefono',
        method: 'get',
        schema: Schema.schemaVoid,
        action: TurnosServiceController.getByCliente
    },
    {
        path: '/turno',
        method: 'post',
        schema: Schema.schemaPostTurno,
        action: TurnosServiceController.create
    },
    {
        path: '/cambiarFechaTurno',
        method: 'put',
        schema: Schema.schemaPutTurno,
        action: TurnosServiceController.modifyFecha
    }
];