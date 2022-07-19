import { Personaje_1, Personaje_2, Personaje_3, Personaje_4, Oponente1 } from "./modelo/Menus";
import {iniciarJuego} from ".funciones/iniciarJuego"

// print("hola")

prompt("Presione Enter");

iniciarJuego();

function turnos(aguilidadJug,aguilidadOpo) {
    if (aguilidadJug > aguilidadOpo) {
        prioridadDeturno = 1
        return prioridadDeturno
    } else {
        prioridadDeturno = 2
        return prioridadDeturno
    }
}

function Combate(videDelJugador,vidaDelOponente,ataqueJug,ataqueOpe,aguilidadJug,aguilidadOpo,firstAtaque) {
 while (videDelJugador > 0 && vidaDelOponente > 0) {
     switch (firstAtaque) {
         case 1:
             console.log("Atacaste a tu Oponente");
             console.log("Le sacaste",ataqueJug);
             vidaDelOponente= vidaDelOponente - ataqueJug; 
             console.log("Le queda",vidaDelOponente,"de vida" );

             if (vidaDelOponente <= 0) {
                 console.log("Felicitaciones has ganado el combate")
                 continue
             } 
             console.log("Ataco tu Oponente");
             console.log("Te saco",ataqueOpe);
             videDelJugador= videDelJugador - ataqueOpe;
             console.log("Te queda",videDelJugador,"de vida");
            
             if (videDelJugador <= 0) {
                console.log("Has perdido Game Over");
                continue;
             };
             break;
         case 2:
            console.log("Ataco tu Oponente");
            console.log("Te saco",ataqueOpe);
            videDelJugador= videDelJugador - ataqueOpe;
            console.log("Te queda",videDelJugador,"de vida");
            
            if (videDelJugador <= 0) {
               console.log("Has perdido Game Over");
               continue;
            };
            console.log("Atacaste a tu Oponente");
            console.log("Le sacaste",ataqueJug);
            vidaDelOponente= vidaDelOponente - ataqueJug; 
            console.log("Le queda",vidaDelOponente,"de vida" );

             if (vidaDelOponente <= 0) {
                 console.log("Felitaciones has ganado el combate")
                 continue
             };
            break;
     
         default:
             break;
     }

    /* if (aguilidadJug > aguilidadOpo) {
         console.log("")
         
     } */
 };   
};

for (let i = 1; i < 2; i++) {
    
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
                    Combate(jugador.heal,Oponente1.heal,jugador.daño,Oponente1.daño,jugador.aguil,Oponente1.aguil,prioridadDeturno)
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
            
            
            break;
    
        default:
            console.log("Opcion no valida");
            i--
            break;
    };
};
   
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