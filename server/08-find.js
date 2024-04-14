const numbers = [1, 30, 49, 29, 10, 13, 10, 10];

const rta = numbers.find((number) => number === 10);
// const rta = numbers.findIndex((number) => number === 10);

console.log(rta);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta2 = products.find((product) => product.id === "🍕");
console.log(rta2);
const rta3 = products.findIndex((product) => product.id === ".");
console.log("La coincidencia fue en el indice: ", rta3);
