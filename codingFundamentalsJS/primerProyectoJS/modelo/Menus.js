class Menu {
    constructor(opcion1, opcion2, opcion3, opcion4) {
      this.opciones = [opcion1, opcion2, opcion3, opcion4];
    };
    imprimirmenu() {
      for (let i = 0; i < this.opciones.length; i++) {
        console.log(this.opciones[i]);
      };
    };
  };
  
  class MenuBase extends Menu {
    pedirNombre() {
      
      nombre = prompt("Escriba su nombre");
      return this.validarNombre;
    } 
  
    validarNombre(nombre) {
      let respuesta;
      while (respuesta == "no" && respuesta != "si") {
        console.log(
          "El nombre que puso es ",
          nombre,
          "¿Es correcto? Escriba [si/no]"
        );
  
        respuesta = prompt("");
  
        if (respuesta == "si") {
          console.log("Apuesto que su nombre es corecto");
        } else if (respuesta == "no") {
          console.log("A puesto que su nombre es incorecto");
          //falta pedir
          return this.pedirNombre;
        } else {
        }
      }
    }
  }