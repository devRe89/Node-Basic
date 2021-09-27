//  map: metodo para recorrer y transformar un array (sincrono).

const numeros = [2,4,5,6,90];

const doble = numeros.map(numero => {
    return numero * 2;
});

// console.log(doble);

// extraer algun campo del array y retornarlo en otro.
const users = [
    {id:"iuwqyiueyue298937", nombre: "Rene", edad: 32},
    {id:"khskajdsf98098098", nombre: "Carlos", edad: 20},
    {id:"shgdsgjgdhs809890", nombre: "Juan", edad: 40},
    {id:"nbxnzcbxvncb21333", nombre: "Pedro", edad: 30}
];

const usersIds = users.map(({id}) => id);

// console.log(usersIds);

// Mutar los valores de un campo de un array con map ( aplicar descuento en los productos con el precio mayor a 1000).
const productos = [
    {id: "kjdlakjdsk90q890", nombre: "Manzana", precio: 1500},
    {id: "nxmdsksjd1230989", nombre: "Pera", precio: 800},
    {id: "uieourwucbn80928", nombre: "Piña", precio: 3000},
    {id: "mnbdnbfn80298029", nombre: "Uvas", precio: 900}
];

const productosDescuentos = productos.map(producto => {
    if (producto.precio < 1000) return producto;

    return {
        ...producto,
        precio: producto.precio * 0.9
    }
});

console.log(productosDescuentos);