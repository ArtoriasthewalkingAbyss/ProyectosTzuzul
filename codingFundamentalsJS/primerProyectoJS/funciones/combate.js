import prioridadDeAccion from "../funciones/turnos.js";

function combate(estadisticasSujeto1, estadisticasSujeto2) {
    while (estadisticasSujeto1.heal > 0 || estadisticasSujeto2.heal > 0) {
        const prioridad = prioridadDeAccion(estadisticasSujeto1.aguil, estadisticasSujeto2.aguil);
        const videDelJugador = estadisticasSujeto1.heal;
        const vidaDelOponente = estadisticasSujeto2.heal;
        
        switch (prioridad) {
            case 1:
                console.log("");
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
        };
    };   
};

export default combate;