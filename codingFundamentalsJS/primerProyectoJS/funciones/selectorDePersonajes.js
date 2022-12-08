import { Personaje_1, Personaje_2, Personaje_3, Personaje_4} from "../modelo/Personajes.js"


function selectorDePersonaje() {
    let jugador;
    const personajes = [Personaje_1, Personaje_2, Personaje_3, Personaje_4];//nose como meter todo los personaje disponible de forma automatica
    while (jugador === undefined) {//preguntar si puedo mejorar la condicion

        console.log("Seleccione un Personaje escribiendo su nombre ");
        personajes.forEach(element => {
            element.mostraPersonaje();
        });

        let personajeSelecionado = prompt("");

        personajes.forEach((element, index) => {
            if (element.nom == personajeSelecionado) {
                console.log("Usted a seleccionado a");
                console.table(element);
                const confir = prompt("¿está seguro de su elección? [si/no]");
                if (validacionDePersonaje(confir)) {
                    jugador = element;
                };
                
            } else if (index == personajes.length) {//no se comple la condicion por que length es el total de array osea index 0-4 length 1-5
                console.log("Su selección no es válida");
            };
        });
    };
    return jugador;
};

function validacionDePersonaje(respuesta) {
    
    if (respuesta == "si") {
        console.log("Personaje seleccionado");
        return true;
    }
    else if (respuesta == "no") {     
        console.log("Personaje no seleccionado");
        return false;
    } else {
        console.log("Respuesta incorrecta, respondio " + respuesta); //no se como hacer para que se repetir que se vuelva a hce la pregunta de si y no con una promesa termine poniendole un while
        return validacionDePersonaje(prompt("¿está seguro de su elección? [si/no]"));
    };
};

export {selectorDePersonaje};