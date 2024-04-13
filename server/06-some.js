const numbers = [1, 2, 3, 4, 5];
const rpta = numbers.some((number) => number % 2 === 0);
console.log(rpta);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const rpta2 = orders.some((order) => {
  return order.customerName.toLocaleLowerCase().includes("zu");
});
console.log(rpta2);

//npm install date-fns
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];
const newAppointment = {
  startDate: new Date(2021, 1, 1, 19), //2021, primero, enero, 7 pm
  endDate: new Date(2021, 1, 1, 19, 30), //2021, primero, enero, 7 pm, 30 min
};

const { areIntervalsOverlapping } = require("date-fns");

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      {
        start: date.startDate,
        end: date.endDate, //La iteración
      },
      {
        start: newDate.startDate,
        end: newDate.endDate, //Se evalua con la fecha que se desea agendar
      }
    );
  });
};

console.log(isOverlap(newAppointment)); //true => si la cita se sobrepone | false => si la cia no se sobrepone
