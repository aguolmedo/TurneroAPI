import "reflect-metadata";
import bodyParser from 'body-parser';
import Express, { Request, Response } from 'express';

require('dotenv').config();

const app = Express();

process.env.TZ = 'America/Argentina/Cordoba'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const startServer = async () => {
    await app.listen(process.env.PORT || 8080, () => {
        console.log(
            `Server running on http://127.0.0.1:${ process.env.PORT }`);
    });
};

(async () =>
{
    await startServer();
})();
