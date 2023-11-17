const productos = ['Agua', 'Aceite', 'Azucar'];

console.log(productos);

//Caundo se desestructura en corchete se puede poner cualquier nombre en las variables.

const [p1, p2, p3] = productos;

console.log(p1);

//Desestructuración de un objeto.

const vehiculo = {
    placa:"DIE777",
    color:"Verde",
    modelo:23
};

console.log(vehiculo);

//Cuando se desestructura en llaves se ponen las variables dentro de llaves.

const {placa, color, modelo} = vehiculo;

console.log(placa);

//Prueba

const persona = {
    nombre: "darwin alexander",
    apellido: "cañas vanegas",
    edad: 20,
    documento: "C.C",
    numero_Documento: 1000756413,
    correo: "darwincanas16@gmail.com",
    numero: 3116502356
}

console.log(persona);

const {nombre, apellido, edad, documento, numero_Documento, correo, numero} = persona;

console.log(nombre);