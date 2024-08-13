//alert("hola mundo");
//window.alert("hola mundo");

function saludar() {
  document.write("<p>Hola mundo 🌍</p>");
}
//setTimeOut
/*window.setTimeout(saludar, 5000);
setTimeout(() => {
  document.write("<p>Prueba de setTimeOut ☺</p>");
}, 2000);*/

/*setInterval
const iDInterval = setInterval(saludar, 2000);
console.log(iDInterval);*/

/*setTimeout(() => {
  //aqui se detiene el setinterval
  clearInterval(iDInterval)
}, 6000);*/

const fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getDate());
console.log(fechaActual.getDay());
console.log(fechaActual.getMonth());
console.log(fechaActual.getHours());
console.log(fechaActual.getMinutes());
console.log(fechaActual.getSeconds());
const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
console.log(diasSemana[fechaActual.getDay()]);
