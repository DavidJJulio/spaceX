import { getAllRocketEngineTotal } from "./modules/rockets.js";
import { 
    paginationRockets
} from "./moduleComponents/pagination.js";

let page = document.querySelector("#rockets")
page.addEventListener("click", async function(){
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
})
page.click()