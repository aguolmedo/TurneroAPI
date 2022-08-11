import { Container } from "inversify";
import {IFirstService} from "./interface/IFirstService";
import Types from "./types/types";
import {FirstService} from "./FirstService";

const container = new Container();

container.bind<IFirstService>(Types.FirstService).to(FirstService);

export default container;