import {createConnection} from "typeorm";

export const connectDB = async () => {
    try {
        await createConnection();
        console.log("-- Conexion exitosa con la base de datos --")
    }
    catch  {
        console.log("-- Error en la conexion con la base de datos, fijate q paso capo")
    }
    
};