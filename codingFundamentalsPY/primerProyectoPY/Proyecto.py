productosEnStock = ["televisor"]
precio = [450]
cantidad = [4]
id = [0]
listaDeLaCompra = []
suma = []
precioTotal = 0
print("Hola, buen día")
opcion = 0

while opcion == 0 or opcion == 1 or opcion == 2 or opcion == 3 or opcion == 4:
    print("Seleccione una opción 1.Agregar un Producto 2.Remober Producto 3.Añadir a Cuenta 4.Retirar de la Cuenta 5.Cobrar")
    opcion = int(input())
    c = len(productosEnStock)
    
  
    if opcion == 1:
        print("Dato ingresado correctamente") 
        #while True:
        print("Agrege el nombre del producto que desea agregar")
        nombreN = input() 
            #if type(nombreN) != string:
                
                #while True:
        print("Agrege el valor del producto")
        precioN = int(input())
                    #if type(precioN) != int:
        print("Dato ingresado correctamente")
                    
                        #while True:
        print("Agregue la cantidades del prodicto")
        cantidadN = int(input())
                            #if cantidadN > 0:
        print("Dato ingresado correctamente")
                                #while True:
        print("Agrege un id igual a",c)
        idN = int(input())
        #otra forma de poner lo del idN es así idN = len(id) + 1 igual no probe si funciona pero es una idea
        if idN == c:
            print("Dato ingresado correctamente")
                                            #nuevoprod[idN] = Producto(nombreN,precioN,cantidadN,idN)
            print("Nuevo producto creado correctamente")
            productosEnStock.append(nombreN)
            precio.append(precioN)
            cantidad.append(cantidadN)
            id.append(idN)
            print("Nuevo producto ingresado corectamente")
            continue
                                        
                                        #break;
                                #break;
                        #break;
                #break;
                    

            #else:
                #print("Dato incorecto")
                #continue
                
            

                            
    elif opcion == 2:
        print("Seleccione el id del producto que desea eliminar:")
        for i in range(len(productosEnStock)):
            print("id: ",id[i]," Nombre: ",productosEnStock[i])
        remover = int(input())
        #if type(remover) == int:    
        productosEnStock.pop(remover)
        precio.pop(remover)
        cantidad.pop(remover)
        id.pop(remover)
        continue
        #else:
            #print("El Dato ingresado no es valido")
    elif opcion == 3:
        o = 1 #ver de hacer una forma mejor para validadr el ciclo while
        while o == 1:
            for i in range(len(productosEnStock)):
                print("id: ",id[i]," Nombre: ",productosEnStock[i])
            print("Eliga los producto que desea agregar a su cuenta")
            añadir = int(input())
            if añadir in id:
                posición = precio.index(añadir)    
                listaDeLaCompra.append(añadir)
                suma.append(precio[posición])
            else:
                print("id del producto invalido por favor ponga un id valido")
                continue
            print("Selecione una opcion 1.Agregar otro producto 2.Volver al menu pricipal")
            o = int(input())
    elif opcion == 4:
        k = 1
        while k == 1:
            for i in range(len(listaDeLaCompra)):
                print("id: ",listaDeLaCompra[i]," Precio: $",suma[i])
            print("Elica el producto que quiera retirar de su cuenta")
            retirar = int(input())
            listaDeLaCompra.pop(retirar)
            suma.pop(retirar)
            print("Selecione una opcion 1.Retirar otro producto 2.Volver al menu pricipal")
            k = int(input())
            continue
    elif opcion == 5:
        print("Dato ingresado correctamente")
        for i in range(len(suma)):
            precioTotal= precioTotal+ suma[i]
        print("Precio total a pagar es $",precioTotal) 
    else:
        print("El dato ingresado no es valido por favor ingrese un numero de la lista")
        continue