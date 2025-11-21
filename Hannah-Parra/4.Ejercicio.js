let productos =
 [{nombre: "Camisa", stock: 10},
   {nombre: "Zapatos", stock: 0},
   {nombre: "Pantalón", stock: 5}];
let enStock = productos.filter((elemento) => elemento.stock > 0)
console.log(productos);
console.log(enStock);

