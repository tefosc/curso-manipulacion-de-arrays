function suma(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}
console.log(suma([1, 2, 3, 10, 6]));
