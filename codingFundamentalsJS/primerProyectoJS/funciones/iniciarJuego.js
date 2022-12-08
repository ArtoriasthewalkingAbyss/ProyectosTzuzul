import { selectorDePersonaje } from "./selectorDePersonajes.js";
//import { Personaje_1, Personaje_2, Personaje_3, Personaje_4} from "../modelo/Personajes.js";
import {Menubase} from "../modelo/Menus.js";

function iniciarJuego(){
    const bucleDelMenu = true;
    while (bucleDelMenu) {
        
        let menu = Menubase.imprimirmenu()

        if (menu == "Comenzar partida" || menu === 0){
                selectorDePersonaje();
            
        } else if (menu === "Opciones" || menu === 1) {
            console.log("Sección en desarrollo")
        } else if (menu == "Salir" || menu === 2) {
            bucleDelMenu = false
        };
        
    };

};
export {iniciarJuego};