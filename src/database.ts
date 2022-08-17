import {createConnection} from "typeorm";

export const connectDB = async () => {
    try {
        await createConnection();
        // @ts-ignore
        console.log("-- Conexion exitosa con la base de datos --")
    }
    catch  {
        // @ts-ignore
        console.log("-- Error en la conexion con la base de datos, fijate q paso capo")
    }
    
};