# web_enero

let arreglo = [{id:1,nombre: "Nombre 01"}, {id:2,nombre: "Nombre 02"}, {id:3,nombre: "Nombre 03"}]

arreglo.push({id:4, nombre:"Nombre 04"});

arreglo = arreglo.filter(x=> x.id != 2);