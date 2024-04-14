const pets = ["cat", "dog", "bat"];

const rpta = pets.includes("ca");
console.log(rpta);

const numbers = [1, 3, 4, 3, 5];

const rpt2 = numbers.includes(4, 3);
console.log(rpt2);

//Ejercicio
const nombres = ["ana", "santi", "nico", "anastasia"];
const termino = "ana";
//ana anastasia
function buscador(arreglo, busqueda) {
  const resultadoBusqueda = arreglo.filter((nombre) =>
    nombre.includes(busqueda)
  );
  return resultadoBusqueda;
}
buscador(nombres, termino);
