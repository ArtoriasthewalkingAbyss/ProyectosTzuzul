import { Personaje_1, Personaje_2, Personaje_3, Personaje_4} from "../modelo/Personajes.js"


function selectorDePersonaje() {
    let jugador;
    let confir;
    while (jugador === undefined) {

        console.log("Seleccione un Personaje escribiendo su nombre ")
        Personaje_1.mostraPersonaje(),Personaje_2.mostraPersonaje(), Personaje_3.mostraPersonaje(),Personaje_4.mostraPersonaje();

        let personajeSelecionado = prompt("")

        switch (personajeSelecionado) {
            case Personaje_1.nom://podria hacer de ver como puedo juntar todos los caso pero mostrando el repectivo objeto que coresponda capaz cuntando todos los objetos en un arrays pero para mi que daria un problema muy gordo
                console.log("Usted a seleccionado a");
                console.table(Personaje_1)
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
        };
    };
}

function validacionDePersonaje(respuesta) {
    while (!respuesta == "si" || !respuesta == "no") {

        respuesta = prompt("¿está seguro de su elección? [si/no]");
        
        if (respuesta == "si") {
            return console.log("Personaje seleccionado");
        }
        else if (respuesta == "no") {     
            console.log("Personaje no seleccionado");
    
        } else {
            console.log("No a papretado la tecla corecta") //no se como hacer para que se repetir que se vuelva a hce la pregunta de si y no con una promesa termine poniendole un while
        }
    }
};

function funcionDeSeleccion(selecion) {
    console.log("Usted a seleccionado a");
}

export {selectorDePersonaje}