// Personaje de TV.

let nombre = "Goku";
let anime = "Dragon Ball";
let edad = 33;

let personaje = {
  nombre: "Goku", // "nombre" seria la propiedad y "Goku" es el valor.
  anime: "Dragon Ball",
  edad: 33,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

delete personaje.edad;
console.log(personaje);
