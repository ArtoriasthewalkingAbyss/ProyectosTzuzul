import prioridadDeAccion from "./turnos.js";

function aventura(jugador) {
    //intro del juego
    console.log("Despiertas en tu celda");
    console.log("Escuhas a los guardias discutir...");
    console.log("...");
    console.log("sales del asilo y ves la superficie");
    const eleccion = prompt("");

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
                    prioridadDeAccion(jugador.aguil,Oponente1.aguil)
                    combate(jugador.stats);
                    break;
                case "Hablar":

                    break;
                default:
                    break;
            };
            if (jugador.aguil > Oponente1.aguil) {
                console.log("Has esquibado el ataque")
            } else {
                console.log("comiste")
            } 
            
            
            break;
    
        default:
            console.log("Opcion no valida");
            i--
            break;
    };
    };
};

export {aventura}