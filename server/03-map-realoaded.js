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

// const responde = orders.map((order) => {
//   order.impuesto = order.total * 0.04;
//   return order;
// });
const response2 = orders.map((order) => {
  return { ...order, impuesto: order.total * 0.16 };
});

// console.log(responde);
console.log("Modificado: ", response2);
console.log("Origianl", orders);
