import {selectorDePersonaje} from "./selectorDePersonaje"
import { Personaje_1, Personaje_2, Personaje_3, Personaje_4} from "../modelo/Personajes"

function iniciarJuego(){
    while (bucleDelMenu) {
        console.log("Elija una opción, Comenzar partida, Opciones, Salir")

        let menu = prompt("");//tambien podria poner una funcion o una variable con el saludo

        if (menu == "Comenzar partida"){
            bucleDelMenu = false/* prodria hacer que el usuario pueda volver para atras osea que while vuelva a ser true */
            while (bucleSelectorDePersonaje) {

                console.log("Seleccione un Personaje ",Personaje_1.nom,Personaje_2.nom,Personaje_3.nom,Personaje_4.nom)

                let personajeSelecionado = prompt("")
                selectorDePersonaje(personajeSelecionado)
                
            }
            
        } else if (menu = "Opciones") {
            console.log("Sección en desarrollo")
        }
        else{
            console.log("No a selecionado ninguna opcion")
        };
        
    };

};
export {iniciarJuego}