const number = [1, 3, 5, 7];

const numberMap = number.map(
  (number, index) => `Indice : ${index} y numero : ${number * 2}`
);
console.log(numberMap);
