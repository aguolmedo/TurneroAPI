import { Container } from "inversify";
import {IFirstService} from "./interface/IFirstService";
import Types from "./types/types";
import {FirstService} from "./FirstService";
import {IClienteService} from "./interface/IClienteService";
import {ClienteService} from "./ClienteService";
import { IProfesionalService } from "./interface/IProfesionalService";
import {ProfesionalService} from "./ProfesionalService";

const container = new Container();

container.bind<IFirstService>(Types.FirstService).to(FirstService);
container.bind<IClienteService>(Types.ClienteService).to(ClienteService);
container.bind<IProfesionalService>(Types.ProfesionalService).to(ProfesionalService);
export default container;