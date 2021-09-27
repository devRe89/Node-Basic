const numeros = [1,4,29,48];
// sumar todos los elementos de un array;
let total = numeros.reduce((acumulador, numero) => {
 return acumulador + numero;
}, 0);


// console.log(total);

const numeros_b = [44, 33, 5, 10];
const dobles = numeros_b.reduce((acum, numero) => {
    acum.push(numero * 2);
    return acum;
}, []);

// console.log(dobles);

// indexar un array 
const users = [
    {id:"iuwqyiueyue298937", nombre: "Rene", edad: 32, funciones: [{funcion: "comer"}, {funcion: 'dormir'}]},
    {id:"khskajdsf98098098", nombre: "Carlos", edad: 20, funciones: [{funcion: "correr"}, {funcion: 'dormir'}]},
    {id:"shgdsgjgdhs809890",funciones: [{funcion: "comer"}, {funcion: 'dormir'}], nombre: "Juan", edad: 40},
    {id:"nbxnzcbxvncb21333", nombre: "Pedro", edad: 30}
];

const indexByKey = users.reduce((arrIndex, user) => {
    return {
        ...arrIndex,
        [user.id]:  user
    }
}, []);

// console.log(indexByKey)
// // para posicionarme 
// console.log(indexByKey['iuwqyiueyue298937']);

// convertir a array plano

const anidado = [1, [2,3], 4, [5]];
// [1,2,3,4,5]

const plano = anidado.reduce((acum, el) => {
    return acum.concat(el)
}, []);

// console.log(plano)


const uu = [
    [ 'nombre', 'apellido', 'email', 'fono', 'empresa' ],
    [ 'rene', 'montaño', 'r.arturo.m89@gmail.com', 123456, 'dvp' ],
    [ 'carlos', 'garcia', 'r.arturo.m89@gmail.com', 8787987, 'dvp' ],
    [ 'jose', 'lskjldj', 'r.arturo.m89@gmail.com', 990890, 'dvp' ],
    [ 'maria', 'qqqq', 'r.arturo.m89@gmail.com', 56465, 'dvp' ],
    [ 'pedro', 'lololo', 'r.arturo.m89@gmail.com', 6257163, 'dvp' ],
    [ 'juan', 'eeeee', 'r.arturo.m89@gmail.com', 876868, 'dvp' ],
    [ 'miguel', 'uywtutye', 'r.arturo.m89@gmail.com', 98798273, 'dvp' ],
    [ 'alex', 'kjhkjs', 'r.arturo.m89@gmail.com', 8767868, 'dvp' ],
    [ 'michel', 'uytwyte', 'r.arturo.m89@gmail.com', 677657, 'dvp' ],
    [ 'manuela', 'iuwyeiue', 'r.arturo.m89@gmail.com', 64546545, 'dvp' ],
    [ 'martin', 'lkjskldj', 'r.arturo.m89@gmail.com', 89798789, 'dvp' ],
    [ 'arturo', 'mnbnbmn', 'r.arturo.m89@gmail.com', 7646576, 'dvp' ],
    [ 'sofia', 'iuweyiu', 'r.arturo.m89@gmail.com', 5435435, 'dvp' ],
    [],
    [],
    [],
    [],
    []
  ];

  const cleanF = uu.reduce((acc, el) => {
    if(el.length > 0){
        acc.push(el);
    }
    return acc
  }, []);

  console.log(cleanF);