class Menu {
  constructor(opcion0, opcion1, opcion2) {
    this.opciones = [opcion0, opcion1, opcion2];
    };
  imprimirmenu() {
        console.table(this.opciones);
        return this.seleccion();
  };
  seleccion(){
      let eleccion = prompt("Eliga una opcion");

      if (eleccion == this.opciones[0] || eleccion == this.opciones[1] || eleccion == this.opciones[2]) {
        return this.validarElecciones(eleccion)
        } else {
          console.log("Su selección no es válida");
          return this.imprimirmenu();
        };    
    };
  validarElecciones(eleccion) {
    let eleccionVar = eleccion;
    console.log("Su eleccion fue ", eleccion, "¿Es correcto? Escriba [si/no]");
    let respuesta = prompt("");

    if (respuesta == "si") {
     console.log("Eleccion guardada");
     return eleccionVar;
    } else if (respuesta == "no") {
      console.log("Eleccion rechasada");
      return this.imprimirmenu();
    } else {
      console.log("Respuesta incoreccta")
      return this.validarElecciones(eleccionVar)
    }
  }
};

/*class MenuDeSelecciondePersonaje extends Menu {
  constructor()

}*/

const Menubase = new Menu("Comenzar partida","Opciones","Salir");

const MenuPartida = Menu("")

export {Menubase}