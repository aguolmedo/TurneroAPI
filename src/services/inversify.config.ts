import { Container } from "inversify";
import Types from "./types/types";
import {IFirstService} from "./interface/IFirstService";
import {FirstService} from "./FirstService";
import {IClienteService} from "./interface/IClienteService";
import {ClienteService} from "./ClienteService";
import { IProfesionalService } from "./interface/IProfesionalService";
import {ProfesionalService} from "./ProfesionalService";
import {ITurnosService} from "./interface/ITurnosService";
import {TurnosService} from "./TurnosService";

const container = new Container();

container.bind<IFirstService>(Types.FirstService).to(FirstService);
container.bind<IClienteService>(Types.ClienteService).to(ClienteService);
container.bind<IProfesionalService>(Types.ProfesionalService).to(ProfesionalService);
container.bind<ITurnosService>(Types.TurnosService).to(TurnosService)

export default container;