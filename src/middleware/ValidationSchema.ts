import {TurnosService} from "../services/TurnosService";
import container from "../services/inversify.config";
import Types from "../services/types/types";
import {ClienteService} from "../services/ClienteService";
import {ProfesionalService} from "../services/ProfesionalService";


const _clienteService = container.get<ClienteService>(Types.ClienteService);
const _profesionalService = container.get<ProfesionalService>(Types.ProfesionalService);
const _turnosService = container.get<TurnosService>(Types.TurnosService);

const schemaPostCliente = {

    nroTelefono: {
        isLength: {
            errorMessage: "El nro de telefono es obligatorio y deben ser 10 digitos, ejemplo: 3855079234 (sin +54 9)",
            options: {min: 10, max:10}
        },
        isString: true,
        errorMessage: "Para mayor comodidad trabajamos con string",
        custom: {
            options: async (value: any) => {
                let cliente = await _clienteService.getBynroTelefono(value);
                if(cliente) return Promise.reject();
                return Promise.resolve();
            },
            errorMessage: "Ya existe un cliente con ese nro de Telefono"
        }
    },
    nombre: {
        isLength: {
            errorMessage: "El nombre es obligatorio, el maximo de caractateres permitidos es 15",
            options: {min: 1, max: 15}
        },
        isString: true,
        errorMessage: "Debe ser un string"
    },
    apellido: {
        isLength: {
            errorMessage: "El apellido es obligatorio, el maximo de caractateres permitidos es 15",
            options: {min: 1, max: 15}
        },
        isString: true,
        errorMessage: "Debe ser un string"
    }

}

const schemaPostProfesional = {

    nroTelefono: {
        isLength: {
            errorMessage: "El nro de telefono es obligatorio y deben ser 10 digitos, ejemplo: 3855079234 (sin +54 9)",
            options: {min: 10, max:10}
        },
        isString: true,
        errorMessage: "Para mayor comodidad trabajamos con string",
        custom: {
            options: async (value: any) => {
                let profesional = await _profesionalService.getBynroTelefono(value);
                if(profesional) return Promise.reject();
                return Promise.resolve();
            },
            errorMessage: "Ya existe un profesional con ese nro de telefono"
        }
    },
    nombre: {
        isLength: {
            errorMessage: "El nombre es obligatorio, el maximo de caractateres permitidos es 15",
            options: {min: 1, max: 15}
        },
        isString: true,
        errorMessage: "Debe ser un string"
    },
    apellido: {
        isLength: {
            errorMessage: "El apellido es obligatorio, el maximo de caractateres permitidos es 15",
            options: {min: 1, max: 15}
        },
        isString: true,
        errorMessage: "Debe ser un string"
    }

}

const schemaPostTurno = {
    fechaHoraInicio: {
        isAfter: {
            errorMessage: "La fecha ingresada no es valida, estas ingresando un tiempo que ya paso bro, time flies"
        },
        isISO8601: {
            strict: true,
            errorMessage: "La fecha debe enviarse en formato ISO8601"
        }
    },
    fechaHoraFin: {
        isISO8601: {
            strict: true,
            errorMessage: "La fecha debe enviarse en formato ISO8601"
        },
        custom: {
            options: (value: any, { req }) => {
                return value > req.body.fechaHoraInicio;
            },
            errorMessage: "La fechaHoraFin debe ser DESPUES de fechaHoraInicio"
        }
    },
    confirmado: {
        isInt: {
            options: {min:0,max:1},
            errorMessage: "Confirmado es un valor boolean en la BD, solo se le puede mandar 0 o 1, siendo 1 confirmado y 0 no confirmado"
        }
    },
    cliente: {
        isString: true,
        errorMessage: "Debe ser un String",
        custom: {
            options: async (value) => {
               const cliente = await _clienteService.getBynroTelefono(value);
               if (cliente) return Promise.resolve();
               return Promise.reject();},
        errorMessage: "El cliente que indicaste no existe, previamente debes cargarlo"
        }
    },
    profesional: {
        isString: true,
        errorMessage: "Debe ser un String",
        custom: {
            options: async (value) => {
                const profesional = await _profesionalService.getBynroTelefono(value);
                if (profesional) return Promise.resolve();
                return Promise.reject();},
            errorMessage: "El profesional que indicaste no existe, previamente debes cargarlo"
        }
    }


}

const schemaVoid = {}


export const Schema = {
    schemaPostCliente,
    schemaVoid,
    schemaPostProfesional,
    schemaPostTurno
}

