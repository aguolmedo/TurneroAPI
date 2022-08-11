import { Container } from "inversify";
import {IFirstService} from "./interface/IFirstService";
import Types from "./types/types";
import {FirstService} from "./FirstService";
import {IClienteService} from "./interface/IClienteService";
import {ClienteService} from "./ClienteService";

const container = new Container();

container.bind<IFirstService>(Types.FirstService).to(FirstService);
container.bind<IClienteService>(Types.ClienteService).to(ClienteService);
export default container;