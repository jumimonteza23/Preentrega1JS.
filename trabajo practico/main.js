let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
    alert(`Hola ${nombre} ${apellido}`);

let noches = (prompt("ingrese los dias de hospedaje para conocer los beneficios"))
if (noches <= 2){
    alert ("sin beneficios");
}else if(noches <= 7){
    alert("tienes el desyuno incluido");
}else{
    alert("tienes el desayuno y tres cenas a elección GRATIS!");
}
let importe = Number(prompt("confirme los dias de hospedaje para calcular el importe total"));
for(let j = 3000; j <= 3000; j++) {
    let resultado = importe * j;
    alert(`${importe} * ${j} = ${resultado}`);
}

let saludo = prompt("Gracias por preferirnos, estas son nuestras actividades");
function actividades() {
let actividad = prompt("ingresa el `numero` de la actividad que quieres realizar 1-Trekking 2-Tirolesa");
if(actividad === "1"){
    alert("elegiste Trekking");
}else if(actividad === "2"){
    alert("elegiste Tirolesa");
}else {
    alert("ingresa solo el numero 1 o 2");
    let actividad = prompt("ingresa la actividad que quieres realizar 1-Trekking 2-Tirolesa");
}}
actividades();

const grupo = ["Eduardo", "Jose", "Natalia", "Ivana", "Vanina"];
let nuevo = prompt("ingresa tu nombre para agregarte al grupo");
if (grupo.push("")){ 
alert(`agregado a la lista : ${grupo} y vos: ${nuevo}`);
}
function Itinerario(salida, dia, hora) {
    this.salida = salida;
    this.dia = dia;
    this.hora = hora;
}
const trekking = new Itinerario("ingreso al complejo de cabañas", "viernes", "10am");
const tirolesa = new Itinerario("ingreso al complejo de cabañas", "sabados", "11am");

let solicitud = prompt("Ingresa 'trekking' o `tirolesa` para conocer el itinerario");
if (solicitud === 'trekking') {
    alert(`Salida: ${trekking.salida}, Día: ${trekking.dia}, Hora: ${trekking.hora}`);
} else if (solicitud === `tirolesa`) {
    alert(`Salida: ${tirolesa.salida}, Día: ${tirolesa.dia}, Hora: ${tirolesa.hora}`);
}else
alert("Solicitud no válida. Por favor, ingresa 'trekking'o`tirolesa` para conocer el itinerario.");