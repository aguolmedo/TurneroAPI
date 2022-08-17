import "reflect-metadata";
import bodyParser from 'body-parser';
import Express, { Request, Response } from 'express';
import {AppRoutes} from "./routes";
import {connectDB} from "./database";
import {checkSchema, validationResult} from "express-validator";

require('dotenv').config();

const app = Express();

process.env.TZ = 'America/Argentina/Cordoba'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

AppRoutes.forEach((route) => {
        app.use(route.path,
            checkSchema(route.schema),
            (request: Request, response: Response, next: Function) => {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.json(validationResult(request).array())
            }
            route.action(request,response)
                .then(()=> next)
                .catch((err) => next(err));
            }
        )
    }
)

const startServer = async () => {
    await app.listen(process.env.PORT || 8080, () => {
        console.log(
            `-- ${new Date()} --\n-- Server running on http://127.0.0.1:${ process.env.PORT } -- \n-- Test endpoint on http://127.0.0.1:3000/holamundo --`);
    });
};

(async () =>
{
    await startServer();
    await connectDB();
})();
