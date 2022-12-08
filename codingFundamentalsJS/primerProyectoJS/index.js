//import { Personaje_1, Personaje_2, Personaje_3, Personaje_4, Oponente1 } from "./modelo/Personajes.js";
import {iniciarJuego} from "./funciones/iniciarJuego.js";

let jugador;

// print("hola")
prompt("Presione Enter");

iniciarJuego();


/*for (let i = 1; i < 2; i++) {
    
    console.log("Desea ir al Norte, Oeste, Sur, Este");
    let direccion = prompt("");
    switch (direccion) {
        case "Norte":
        case "Oeste":
        case "Sur":
        case "Este":
            console.log("Viajas asía el",direccion,"Te encuentras con un desconocido ¿Qué quieres hacer? Combatir, Hablar, Obserbar, Combercer")
            switch (prompt("")) {
                case "Combatir":
                    console.log("Retas a muerte al desconocido él acepta")
                    turnos(jugador.aguil,Oponente1.aguil)
                    combate(jugador.heal,Oponente1.heal,jugador.daño,Oponente1.daño,jugador.aguil,Oponente1.aguil,prioridadDeturno)
                    break;
                case "Hablar":

                    break;
                default:
                    break;
            };
            /* if (jugador.aguil > Oponente1.aguil) {
                console.log("Has esquibado el ataque")
            } else {
                console.log("comiste")
            } */
            
            
            /*break;
    
        default:
            console.log("Opcion no valida");
            i--
            break;
    };
};*/

console.log("Hasta aqui la demo, Que tengan un lindo día");    
/* if(firstAtaque == 1) {

    console.log("Atacaste a tu Oponente");
    console.log("Le sacaste",ataqueJug);
    vidaDelOponente= vidaDelOponente - ataqueJug; 
    console.log("Le queda",vidaDelOponente,"de vida" )
    console.log("Ataco tu Oponente");
    console.log("Te saco",ataqueOpe);
    videDelJugador= videDelJugador - ataqueOpe;
    console.log("Te queda",videDelJugador,"de vida");
    let a = 1
    a++
    if (a == 100) {
        vidaDelOponente = -1
    
    }
} else {
    console.log("Ataco tu Oponente");
    console.log("Te saco",ataqueOpe);
    videDelJugador= videDelJugador - ataqueOpe;
    console.log("Te queda",videDelJugador,"de vida");
    console.log("Atacaste a tu Oponente");
    console.log("Le sacaste",ataqueJug);
    vidaDelOponente= vidaDelOponente - ataqueJug; 
    console.log("Le queda",vidaDelOponente,"de vida" ) */