class Personaje {
    constructor(nombre,estadisticas){
        this.nom = nombre;
        this.stats = estadisticas
        
    }
    mostraPersonaje() {
        console.table(this.stats);
        console.log(this.nom);
    };
    cambiarNombre() {
        //podria poner una promesa esta demas esta funcion tendria que ser una obcion el la cracion y seleccion del personaje
    };
};



const Personaje_1 = new Personaje("Ander",{esp:"humano",clas:"Explorador",alm:0,niv:1,heal:100,aguil:30,daño:10,locura:0})

const Personaje_2 = new Personaje("Zasheida",{ esp:"humano", clas:"Explorador", alm:0, niv:1, heal:100, aguil:30, daño:10, locura:0})

const Personaje_3 = new Personaje("Bryseis",{esp:"Tiflin", clas:"Hechicero", alm:0, niv:1, heal:100, aguil:20, daño:15, locura:0})

const Personaje_4 = new Personaje("Damakos",{esp:"Hechicero", clas:"", alm:0, niv:1, heal:100, aguil:20, daño:15, locura:0})

const Oponente1 = new Personaje("asdasd","asdasd","asdasd",0,1,90,10,7)

const personaje_6 = new Personaje("","","",0,1)

const personaje_7 = new Personaje("","","",0,1)

const personaje_8 = new Personaje("","","",0,1)

const personaje_9 = new Personaje("","","",0,1)

export {Personaje_1,Personaje_2,Personaje_3,Personaje_4,Oponente1};