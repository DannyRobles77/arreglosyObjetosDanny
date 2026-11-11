alert("Bienvenidos al programa");

function saludarAprendices(){
    let aprendices = ['Juanfer','Leandro','Jose','Guillen','Richard','Danny','Daniel','Erika','Triviño','Santiago','Juan','Paula','Yenn','Diego','Camilo','Angely','Amarillo','Vargas','Rojas','Tinoco'];
    console.log("Mostrar Primer Aprendiz");
    console.log(aprendices[0])
    console.log("Mostrar Tercer Aprendiz");
    console.log(aprendices[2])
    console.log("Mostrar Ultimo Aprendiz");
    console.log(aprendices[19]);
    console.log("Mostrar Cantidad de Aprendices");
    console.log(aprendices.length);
    //length sirve para saber la cantidad de cosas
    // [numero] sirve para mostrar la posicion de algo
    console.log("Solicitud de un nuevo estudiante");
    aprendices.push("Goku");
    // push es para agregar de ultimas y unshift para agregar de primeras
    console.log("Mostrar Cantidad de Aprendices");
    console.log(aprendices.length);
    console.log("Buscar Aprendiz");
    let buscar = prompt("Ingrese el nombre del estudiante");
    if (aprendices.includes(buscar)){
        console.log("Este aprendiz si existe : " + buscar);
    }  else {  
        console.log("Este aprendiz no existe");
    }
    
    for (let i = 0; i < aprendices.length ; i++ ) {
        console.log("Posicion " + i + ":" + aprendices[i]);
        console.log("Hola " + aprendices[i])
    }
}

   
function AdministracionProductos() {

    let tienda = ["Papitas", "Arroz", "Pasta", "Gaseosa", "Leche"];

    // Punto 1. Mostrar productos registrados
    console.log("Productos Registrados");
    console.log(tienda);

    // Punto 2. Modificar segundo producto
    tienda[1] = "Galletas";
    console.log("Segundo producto modificado");
    console.log(tienda);

    // Punto 3. Agregar producto al final
    tienda.push("Chicles");
    console.log("Producto agregado al final");
    console.log(tienda);

    // Punto 4. Agregar producto al inicio
    tienda.unshift("Mentas");
    console.log("Producto agregado al inicio");
    console.log(tienda);

    // Punto 5. Mostrar arreglo actualizado
    console.log("Listado actualizado");
    console.log(tienda);

    // Punto 6. Buscar un producto
    let buscar = prompt("Ingrese el nombre del producto");

    if (tienda.includes(buscar)) {
        console.log("El producto si existe");
        
        // Punto 7. Mostrar posicion
        console.log("Su posicion es: " + tienda.indexOf(buscar));
    } else {
        console.log("Este producto no existe");
    }

    // Punto 8. Modificar producto por posicion
    let posicion = parseInt(prompt("Ingrese la posicion que desea modificar"));

    if (posicion >= 0 && posicion < tienda.length) {
        tienda[posicion] = prompt("Ingrese el nuevo nombre del producto");
        console.log("Producto modificado");
    } else {
        console.log("Posicion no valida");
    }

    // Punto 9. Eliminar ultimo producto
    tienda.pop();
    console.log("Ultimo producto eliminado");
    
    // Punto 10. Mostrar cantidad y listado final
    console.log("Cantidad de productos: " + tienda.length);
    console.log("Listado final");
    console.log(tienda);
 }
    AdministracionProductos();



function EliminarCiudades() {

    let ciudades = ["Bogota", "Medellin", "Cali", "Cartagena", "Barranquilla", "Bucaramanga"];

    // Punto 1. Eliminar ultima ciudad
    ciudades.pop();

    // Punto 2. Mostrar arreglo
    console.log("Ciudades actualizadas");
    console.log(ciudades);

    // Punto 3. Eliminar primera ciudad
    ciudades.shift();

    // Punto 4. Mostrar nuevamente
    console.log("Eliminar primera ciudad");
    console.log(ciudades);

    // Punto 5. Eliminar ciudad del tercer indice
    ciudades.splice(3, 1);

    // Punto 6. Mostrar resultado final
    console.log("Resultado final");
    console.log(ciudades);

    // Punto 7. Agregar dos ciudades
    ciudades.push("Pereira");
    ciudades.push("Manizales");

    // Punto 8. Consultar cantidad de ciudades
    console.log("Cantidad de ciudades");
    console.log(ciudades.length);

    // Punto 9. Recorrer arreglo desde la posicion 1
    console.log("Listado de ciudades");

    for (let i = 1; i < ciudades.length; i++) {
        console.log("Posicion " + i + ": " + ciudades[i]);
    }

    // Punto 10. Buscar una ciudad
    let buscar = prompt("Ingrese una ciudad para buscar");

    if (ciudades.includes(buscar)) {
        console.log("La ciudad si existe: " + buscar);
    } else {
        console.log("La ciudad no existe");
    }

    console.log("Listado final de ciudades");
    console.log(ciudades);

}
EliminarCiudades();


function BuscarEstudiantes() {

    let estudiantes = ["Juan", "Leandro", "Jose", "Guillen", "Richard", "Danny", "Daniel", "Erika"];

    // Punto 1. Solicitar nombre del estudiante
    let buscar = prompt("Ingrese el nombre del estudiante");

    // Punto 2. Verificar si existe
    if (estudiantes.includes(buscar)) {

        console.log("El estudiante si existe");

        // Punto 3. Obtener posicion
        console.log("Posicion: " + estudiantes.indexOf(buscar));

        // Punto 4 y 5. Mostrar mensaje y posicion
        console.log("Estudiante encontrado: " + buscar);

    } else {
        console.log("El estudiante no existe");
    }

    // Punto 6. Realizar una segunda busqueda
    let buscar2 = prompt("Ingrese otro nombre para buscar");

    if (estudiantes.includes(buscar2)) {
        console.log("El estudiante si existe");
        console.log("Posicion: " + estudiantes.indexOf(buscar2));
    } else {
        console.log("El estudiante no existe");
    }

    // Punto 7. Contar estudiantes por letra
    let letra = prompt("Ingrese una letra");

    let cantidad = 0;

    for (let i = 0; i < estudiantes.length; i++) {

        if (estudiantes[i].charAt(0).toLowerCase() == letra.toLowerCase()) {
            cantidad = cantidad + 1;
        }

    }

    console.log("Estudiantes que comienzan por esa letra: " + cantidad);

    // Punto 8. Mostrar todos los estudiantes
    console.log("Listado de estudiantes");

    for (let i = 0; i < estudiantes.length; i++) {
        console.log(estudiantes[i]);
    }

    // Punto 9. Agregar nuevo estudiante
    let nuevo = prompt("Ingrese un nuevo estudiante");

    if (estudiantes.includes(nuevo)) {
        console.log("Este estudiante ya esta registrado");
    } else {
        estudiantes.push(nuevo);
        console.log("Estudiante agregado correctamente");
    }

    // Punto 10. Mostrar listado y cantidad final
    console.log("Listado actualizado");
    console.log(estudiantes);

    console.log("Cantidad de estudiantes: " + estudiantes.length);

}
BuscarEstudiantes();

function AnalisisNumeros() {

    let numeros = [10, 5, -3, 8, 20, 0, 15, -7, 12, 4];

    let suma = 0;
    let pares = 0;
    let impares = 0;
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;

    let mayor = numeros[0];
    let menor = numeros[0];

    // Punto 1 y 2. Recorrer y mostrar numeros
    console.log("Lista de numeros");

    for (let i = 0; i < numeros.length; i++) {

        console.log(numeros[i]);

        // Punto 3. Calcular suma
        suma = suma + numeros[i];

        // Punto 5. Contar pares e impares
        if (numeros[i] % 2 == 0) {
            pares = pares + 1;
        } else {
            impares = impares + 1;
        }

        // Punto 6. Identificar mayor y menor
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }

        if (numeros[i] < menor) {
            menor = numeros[i];
        }

        // Punto 7. Contar positivos, negativos y ceros
        if (numeros[i] > 0) {
            positivos = positivos + 1;
        } else if (numeros[i] < 0) {
            negativos = negativos + 1;
        } else {
            ceros = ceros + 1;
        }

    }

    // Punto 4. Calcular promedio
    let promedio = suma / numeros.length;

    console.log("Suma: " + suma);
    console.log("Promedio: " + promedio);

    console.log("Numeros pares: " + pares);
    console.log("Numeros impares: " + impares);

    console.log("Numero mayor: " + mayor);
    console.log("Numero menor: " + menor);

    console.log("Positivos: " + positivos);
    console.log("Negativos: " + negativos);
    console.log("Ceros: " + ceros);

    // Punto 8. Mostrar numeros mayores al promedio
    console.log("Numeros mayores al promedio");

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] > promedio) {
            console.log(numeros[i]);
        }

    }

    // Punto 9. Buscar un numero
    let buscar = parseInt(prompt("Ingrese un numero para buscar"));

    if (numeros.includes(buscar)) {
        console.log("El numero si existe");
    } else {
        console.log("El numero no existe");
    }

    // Punto 10. Mostrar numeros en orden inverso
    console.log("Numeros en orden inverso");

    let inverso = numeros.slice();
    inverso.reverse();

    console.log(inverso);

    // Punto 11. Ordenar numeros de menor a mayor
    let ordenados = numeros.slice();

    ordenados.sort(function(a, b) {
        return a - b;
    });

    console.log("Numeros ordenados");
    console.log(ordenados);

    // Punto 12. Mostrar arreglo original y resultados
    console.log("Arreglo original");
    console.log(numeros);

    console.log("Resultado de las operaciones");
    console.log(ordenados);

}
AnalisisNumeros();





function administracionAlojamientos() {
    alert("Bienvenido a STAYCHECK");
    
    // Punto 1 8 Alojamientos

    let alojamientos = ["Finca Los Pinos","Finca El Paraiso","Cabañas del Rio","Glamping La Montana","Finca San Miguel","Cabañas El Bosque","Glamping Natural","Finca Las Palmas"];

    let estados = ["Verificado","Pendiente","Verificado","Pendiente","Verificado","Pendiente","Verificado","Pendiente"];

    let buscar, nuevo, posicion;

    // Punto 2 Esto va a mostrar los alojamientos registrados
    console.log("ALOJAMIENTOS REGISTRADOS");
    console.log(alojamientos);

    // Punto 3 esto va a Mostrar cantidad de alojamientos
    console.log("CANTIDAD DE ALOJAMIENTOS:");
    console.log(alojamientos.length);

    // Sirve para Consultar el alojamiento por posicion
    console.log("Consultar primer alojamiento:");
    console.log(alojamientos[0]);

    // Punto 4 = esto es para Recorrer el arreglo
    console.log("LISTADO DE ALOJAMIENTOS");

    for (let i = 0; i < alojamientos.length; i++) {
        console.log("Posicion " + i + ": " + alojamientos[i]);
        console.log("Estado: " + estados[i]);
    }

    // Punto 5 Agregar alojamiento al final
    nuevo = prompt("Ingrese un nuevo alojamiento");

    if (nuevo != "") {

        if (alojamientos.includes(nuevo)) {
            alert("Este alojamiento ya esta registrado");
        } else {
            alojamientos.push(nuevo);
            estados.push("Pendiente");
            alert("Alojamiento registrado correctamente");
        }

    } else {
        alert("Debe ingresar un nombre");
    }

    // Modificar alojamiento
    posicion = parseInt(prompt("Ingrese la posicion que desea modificar"));

    if (posicion >= 0 && posicion < alojamientos.length) {

        nuevo = prompt("Ingrese el nuevo nombre");

        if (nuevo != "") {
            alojamientos[posicion] = nuevo;
            alert("Alojamiento modificado");
        }

    } else {
        alert("Posicion no valida");
    }

    // Buscar alojamiento
    buscar = prompt("Ingrese el alojamiento que desea buscar");

    if (alojamientos.includes(buscar)) {
        alert("El alojamiento si esta registrado");
        console.log("Posicion del alojamiento: " + alojamientos.indexOf(buscar));
    } else {
        alert("El alojamiento no existe");
    }
    //slide sirve para eliminar algo de un arreglo
    // Eliminar alojamiento
    posicion = parseInt(prompt("Ingrese la posicion que desea eliminar"));

    if (posicion >= 0 && posicion < alojamientos.length) {

        alojamientos.splice(posicion, 1);
        estados.splice(posicion, 1);

        alert("Alojamiento eliminado correctamente");

    } else {
        alert("Posicion no valida");
    }

    // Funcion adicional: verificar alojamiento
    posicion = parseInt(prompt("Ingrese la posicion del alojamiento que desea verificar"));

    if (posicion >= 0 && posicion < alojamientos.length) {

        estados[posicion] = "Verificado";

        alert("El alojamiento fue marcado como verificado");

    } else {
        alert("Posicion no valida");
    }

    // Funcion adicional: contar alojamientos verificados
    let verificados = 0;

    for (let i = 0; i < estados.length; i++) {

        if (estados[i] == "Verificado") {
            verificados = verificados + 1;
        }

    }

    alert("Alojamientos verificados: " + verificados);

    // sirve para Mostrar listado actualizado
    console.log("LISTADO ACTUALIZADO DE STAYCHECK");

    for (let i = 0; i < alojamientos.length; i++) {

        console.log("Alojamiento: " + alojamientos[i]);
        console.log("Estado: " + estados[i]);

    }

    console.log("Total de alojamientos: " + alojamientos.length);

}

// Introduccion a objetos en javascript

function inventarioProductos(){
    
const producto = {
    
    nombre2 : "Celular",
    marca2 : "Samsung",
    precio2 : 800000,
    cantidad2 : 3,
    }
    console.log(producto.nombre2)
    console.log(producto.marca2)
    console.log(producto.precio2)
    console.log(producto.cantidad2)

    console.log(producto)

const producto2 = {

    nombre : "Pc",
    marca : "Asus",
    precio : 50000,
    cantidad : 7, 
    }
    console.log(producto2.nombre)
    console.log(producto2.cantidad)
    console.log(producto2.precio)
    console.log(producto2.cantidad)

    console.log(producto2)
}

function registroEstudiante(){

    const estudiante = {
    
        nombre : "Danny",
        apellido : "Robles",
        edad : 18,
        programa : "ADSO",
        ficha : 3593362,
        correo : "droblescristiano@gmail.com",
    }

    console.log(estudiante);
    console.log("Nombre : " + estudiante.nombre);
    console.log("Apellido : "+ estudiante.apellido);
    console.log("Programa : "+ estudiante.programa);
    estudiante.edad = 19;
    estudiante.ciudad = "Neiva";
    delete estudiante.correo;

    console.log("DATOS ACTUALIZADOS");
    for (let propiedad in estudiante) {
        console.log(propiedad + " : " + estudiante[propiedad]);
    }
    
    console.log("TODO ACTUALIZADO");
    console.log(estudiante);

}

function gestionar(){
    const persona = {
        
        nombre : "Julian",
        Edad : 18,
        Genero : "Masculino",
        saludar : function (){
            console.log("Hola, soy: "+ this.nombre +", Mi edad es: "+ this.Edad +",Y mi genero es: "+ this.Genero);
        }
    }
    
    persona.saludar();
}

function gestionarProducto(){
    const producto = {
        nombre : "Teclado",
        precio : 320000,
        cantidad : 26,
        mostrarInfo : function(){
        console.log("Producto :"+ this.nombre);
        console.log("Precio :"+ this.precio);
        console.log("Disponibles :"+ this.cantidad);
        console.log("Valor total Inventario :"+ this.precio*this.
            cantidad);
        }
    }
    producto.mostrarInfo();
}

function gestionarEmpleado(){
    const empleado = {
        nombre : "Danny",
        cargo : "Administrador",
        salarioMensual : 3000000,
        diasTrabajados : 15,
        porcentajeDescuento : 0.04,

        calcularSalario : function (){
            let PagoDiario = this.salarioMensual / 30;
            let totaldescuento  = PagoDiario * this.diasTrabajados;
            console.log("Su salario por dia es :"+ PagoDiario);
            console.log("El total de su salio es :"+ totaldescuento);

            return parseInt(totaldescuento);
        },

        calcularDescuento: function(){
            let descuento = (this.calcularSalario() * this.porcentajeDescuento)/100;
            return parseInt(descuento);
              
        },

        calcularTotalaPagar: function(){
            let total = this.calcularSalario() - this.calcularDescuento();
            console.log("El total a pagar sin descuento es de :"+ this.calcularSalario);
            console.log("El total de descuento es de :"+ this.calcularDescuento);
            console.log("El total neto a pagar(con descuento) :"+ total);
        }
    }
    empleado.calcularTotalaPagar();
}


function gestionarEmpleado2(){
    const empleado = {
        nombre : prompt("Ingrese el nombre del usuario"),
        cargo : prompt("Ingrese el cargo del usuario"),
        salarioMensual : parseInt(prompt("Ingrese su salio mensual")),
        diasTrabajados : parseInt(prompt("Ingrese sus dias trabajados")),
        porcentajeDescuento : 0.04,

        calcularSalario : function (){
            let PagoDiario = this.salarioMensual / 30;
            let totaldescuento  = PagoDiario * this.diasTrabajados;
            console.log("Su salario por dia es :"+ PagoDiario);
            console.log("El total de su salio es :"+ total);

            return parseInt(totaldescuento);
        },

        calcularDescuento: function(){
            let descuento = (this.calcularSalario() * this.porcentajeDescuento)/100;
            return parseInt(descuento);
              
        },

        calcularTotalaPagar: function(){
            let total = this.calcularSalario() - this.calcularDescuento();
            alert("El total a pagar sin descuento es de :"+ this.calcularSalario);
            alert("El total de descuento es de :"+ this.calcularDescuento);
            alert("El total neto a pagar(con descuento) :"+ total);
        }
    }
    empleado.calcularTotalaPagar();
}