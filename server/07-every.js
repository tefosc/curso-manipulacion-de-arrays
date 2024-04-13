const numbers = [1, 3, 5, 7];

const rpta = numbers.every((number) => number % 2 !== 0);
console.log(rpta);

//Desafio

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 15,
  },
];

const rptaDesafio = team.every((user) => user.age <= 15);
console.log(
  rptaDesafio ? "Admitidos!! 🎉" : "No se puede admitir este team 😿 "
);
