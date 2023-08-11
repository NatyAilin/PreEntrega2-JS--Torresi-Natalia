alert("Busca tu libro ideal");

const libro = []

class Libro {
    constructor (nombre, autor, genero, precio){
        this.nombre = nombre;
        this.autor = autor;
        this.genero = genero;
        this.precio = precio;
    }
}

const libro1 = new Libro (
    "Sé lo que estas pensando" ,
    "John Katzenbach",
    "Thriller",
    8900,
)
    
const libro2 = new Libro (
    "Lo que dicen tus ojos",
    "Florencia Bonelli",
    "Romance contemporáneo",
    7900,
)

const libro3 = new Libro (
    "El Diario De Bridget Jones",
    "Helen Fielding",
    "Novela",
    5000,
)

const libro4 = new Libro (
    "El psicoanalista",
    "John Katzenbach",
    "Thriller",
    9900,
)

const libro5 = new Libro (
    "Memorias de una Geisha",
    "Arthur Golden",
    "Novela",
    9000,
)

const libro6 = new Libro (
    "No abras los ojos",
    "John Verdon",
    "Thriller",
    8000,
)

const libro7 = new Libro (
    "El marciano",
    "Andy Weir",
    "Ciencia ficción",
    10000,
)

const libro8 = new Libro (
    "Te veré bajo el hielo",
    "Robert Bryndza",
    "Suspenso",
    7000,
)

const libro9 = new Libro (
    "El juego de Ender",
    "Orson Scott Card",
    "Ciencia ficción",
    8500,
)

const libro10 = new Libro (
    "La pareja de al lado",
    "Shari Lapena",
    "Suspenso",
    7500,
)

libro.push(libro1);
libro.push(libro2);
libro.push(libro3);
libro.push(libro4);
libro.push(libro5);
libro.push(libro6);
libro.push(libro7);
libro.push(libro8);
libro.push(libro9);
libro.push(libro10);

let genero = prompt("Ingrese el género que busca").toLowerCase();
let librosEncontrados = libro.filter((item) => item.genero.toLowerCase() === genero);
console.log("libros encontrados: ", librosEncontrados);

while(librosEncontrados.length > 0) {
    genero = prompt("Ingresa el género que busca").toLowerCase();
    librosEncontrados = libro.filter((item) => item.genero.toLowerCase() === genero);
    }

if (librosEncontrados.length == 0) {
    librosEncontrados.forEach((libro) => {
        mostrarLibros(libro);
        console.log("------");
    })
}else{
    console.log("No se encontro ese género");
}


function mostrarLibros(libro){
    console.log(`Nombre: ${libro.nombre}`);
    console.log(`Autor: ${libro.autor}`);
    console.log(`Genero: ${libro.genero}`);
    console.log(`Precio: ${libro.precio}`);

};



