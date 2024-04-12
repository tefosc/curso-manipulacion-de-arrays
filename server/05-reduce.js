const numbers = [1, 2, 3, 2, 3, 4];

//console.log(number.reduce((a, b) => a + b, 10));
//{1:1, 2:2, 3:2, 4:1}
//acumulador se inicia con el valor
const result = numbers.reduce((ant, item) => {
  if (!ant[item]) {
    ant[item] = 1;
  } else {
    ant[item] += 1;
  }
  return ant;
}, {});
console.log(result);
//Forma gpt:v
const resultadoGpt = numbers.reduce((acc, number) => {
  acc[number] = (acc[number] || 0) + 1; //si la propiedad no existe es 0, se le suma 1 lo que lo inicializa en 1
  return acc;
}, {});
console.log("gpt ;v ", resultadoGpt);
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
  {
    name: "Alejandro",
    level: "low",
  },
];

const resultData = data.reduce((acc, person) => {
  if (!acc[person.level]) {
    acc[person.level] = 1;
  } else {
    acc[person.level] += 1;
  }
  return acc;
}, {});

console.log(resultData);

//Another form
const levels = data.map((person) => person.level);
console.log(levels);

const anotherResultData = levels.reduce((acc, level) => {
  if (!acc[level]) {
    acc[level] = 1;
  } else {
    acc[level] += 1;
  }
  return acc;
}, {});
console.log("Another result", anotherResultData);

//CONTADOR DE RANGOS
// 1-5 = 5  | 6-8 = 23 | 9-10 = 5
const retoRango = [1, 1, 2, 4, 7, 10, 9, 8, 4, 3, 7, 6, 10]; // 1-5 = 6| 6-8 = 4 |
const resultRetoRango = retoRango.reduce((acc, number) => {
  if (number >= 9 && number <= 10) {
    if (!acc["9-10"]) {
      acc["9-10"] = 1;
    } else {
      acc["9-10"] += 1;
    }
  } else if (number >= 6 && number <= 8) {
    if (!acc["6-8"]) {
      acc["6-8"] = 1;
    } else {
      acc["6-8"] += 1;
    }
  } else if (number >= 1 && number <= 5) {
    if (!acc["1-5"]) {
      acc["1-5"] = 1;
    } else {
      acc["1-5"] += 1;
    }
  }

  return acc;
}, {});
console.log("Reto: ", resultRetoRango);
