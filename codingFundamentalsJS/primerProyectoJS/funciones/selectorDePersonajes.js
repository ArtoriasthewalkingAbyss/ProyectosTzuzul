function selectorDePersonaje(per) {
    switch (per) {
        case Personaje_1.nom://podria hacer de ver como puedo juntar todos los caso pero mostrando el repectivo objeto que coresponda capaz cuntando todos los objetos en un arrays pero para mi que daria un problema muy gordo
            console.log("Usted a seleccionado a");
            console.table(Personaje_1)
            let confir = prompt("¿está seguro de su elección? [si/no]");
            validacionDePersonaje(confir);
            jugador = Personaje_1;
            break;
        case Personaje_2.nom:
            console.log("Usted a seleccionado a ",Personaje_2,"¿está seguro de su elección? [si/no]");
            confir = prompt("");
            validacionDePersonaje(confir);
            jugador = Personaje_2;
            break;
        case Personaje_3.nom:
            console.log("Usted a seleccionado a ",Personaje_3,"¿está seguro de su elección? [si/no]")
            confir = prompt("")
            validacionDePersonaje(confir)
            jugador = Personaje_3;
            break;
        case Personaje_4:
            console.log("Usted a seleccionado a ",Personaje_4,"¿está seguro de su elección? [si/no]")
            confir = prompt("")
            validacionDePersonaje(confir);
            jugador = Personaje_4;
            break;
        default:
            console.log("Su selección no es válida")
            break;
    }
};

function validacionDePersonaje(respuesta) {
    if (respuesta == "si") {
       bucleSelectorDePersonaje = false;
       return console.log("Personaje seleccionado") 

    }
    else if (respuesta == "no") {     
        return console.log("Personaje no seleccionado")

    } else {
        return console.log("No a papretado la tecla corecta") //no se como hacer para que se repetir que se vuelva a hce la pregunta de si y no con una promesa
    }
};

export {selectorDePersonaje}