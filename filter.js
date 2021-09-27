
// filtrar en un nuevo array los productos en dodne su precio es menor a 1000
const productos = [
    {id: "kjdlakjdsk90q890", nombre: "Manzana", precio: 1500},
    {id: "nxmdsksjd1230989", nombre: "Pera", precio: 800},
    {id: "uieourwucbn80928", nombre: "Piña", precio: 3000},
    {id: "mnbdnbfn80298029", nombre: "Uvas", precio: 900}
];

const esBarato = producto => {
    return producto.precio < 1000;
}
const esCaro = producto => {
    return !esBarato(producto);
}

const productosBaratos = productos.filter(esBarato);
const productosCaros = productos.filter(esCaro);

// console.log(productosBaratos);
// console.log(productosCaros);

const numeros = [ 1,2,3,4,2,4,1,4,6,7 ];

const numerosUnicos = numeros.filter((numero, posicion, numeros) => {
    return posicion === numeros.indexOf(numero);
});

console.log(numerosUnicos);