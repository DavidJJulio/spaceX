import { getAllRocketEngineTotal } from "./modules/rockets.js";
import { 
    paginationRockets
} from "./moduleComponents/pagination.js";


let paginacion = document.querySelector("#paginacion");
paginacion.innerHTML = ""
paginacion.append(await paginationRockets())