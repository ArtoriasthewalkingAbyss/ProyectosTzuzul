 class Personaje {
    constructor(nombre,especie,clase,almas,nivel,vida,aguilidad,ataque){
        this.nom = nombre;
        this.esp = especie;
        this.clas = clase;
        this.alm = almas;
        this.niv = nivel;
        this.heal = vida;
        this.aguil = aguilidad;
        this.daño = ataque;
        //this.hollow = locura
    }
};



let Personaje_1 = new Personaje("Ander","humano","Explorador",0,1,100,30,10)

let Personaje_2 = new Personaje("Zasheida","humano","Explorador",0,1,100,30,)

let Personaje_3 = new Personaje("Bryseis","Tiflin","Hechicero",0,1,100,20,15)

let Personaje_4 = new Personaje("Damakos","Hechicero","",0,1,100,20,15)

let Oponente1 = new Personaje("asdasd","asdasd","asdasd",0,1,90,10,7)

const personaje_6 = new Personaje("","","",0,1)

const personaje_7 = new Personaje("","","",0,1)

const personaje_8 = new Personaje("","","",0,1)

const personaje_9 = new Personaje("","","",0,1)

function SelectorDePersonaje(per) {
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
        return console.log("No a papretado la tecla corecta") //no se como hacer para que se repetir que se vuelva a hce la pregunta de si y no
    }
};

// print("hola")

function iniciarJuego(){
    while (bucleDelMenu) {
        console.log("Elija una opción, Comenzar partida, Opciones, Salir")

        let menu = prompt("");//tambien podria poner una funcion o una variable con el saludo

        if (menu == "Comenzar partida"){
            bucleDelMenu = false/* prodria hacer que el usuario pueda volver para atras osea que while vuelva a ser true */
            while (bucleSelectorDePersonaje) {

                console.log("Seleccione un Personaje ",Personaje_1.nom,Personaje_2.nom,Personaje_3.nom,Personaje_4.nom)

                let personajeSelecionado = prompt("")
                SelectorDePersonaje(personajeSelecionado)
                
            }
            
        } else if (menu = "Opciones") {
            console.log("Sección en desarrollo")
        }
        else{
            console.log("No a selecionado ninguna opcion")
        };
        
    };

};
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