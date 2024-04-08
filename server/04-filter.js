const words = ["spray", "limit", "elite", "exuberant"];

const wordsSixLetters = words.filter((word) => word.length >= 6);
console.log("Plus 6 lethers: " + wordsSixLetters);

const wordsStartsWith = words.filter((word) => word.startsWith("e"));
console.log(`Word starts with 'e' => ${wordsStartsWith}`);
console.log("Original", words);

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
const deliveredTrue = orders.filter(
  (order) => order.delivered === true && order.total > 100
);
console.log("Deliveris en true: ", deliveredTrue);

const wordSearch = "a";
const buscador = orders.filter((order) => {
  return order.customerName.includes(wordSearch);
});
console.log("Simple: ", buscador);
console.log(`Simple:  ${buscador}`);

function search(query) {
  return orders.filter((order) => {
    return order.customerName.includes(query);
  });
}
console.log("Con una funcion: ", search("a"));
console.log(`Con una funcion:  ${search("a")}`);

//cuando se hace uso de los template strings `` el objeto se convierte en string porque el js convierte el template string internamente con el metodo .toString() pero como no se puede convertir a cadena se nos da una representación como vemos en consola [object, Obhject]
