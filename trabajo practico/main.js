let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
    alert(`Hola ${nombre} ${apellido}`);

let noches = (prompt("ingrese el numero de dias para saber los beneficios"))
if (noches <= 2){
    alert ("sin beneficios");
}else if(noches <= 7){
    alert("tienes el desyuno incluido");
}else{
    alert("tienes el desayuno y tres cenas a elección GRATIS!");
}
let importe = Number(prompt("confirme los dias de hospedaje"));
for(let j = 3000; j <= 3000; j++) {
    let resultado = importe * j;
    alert(`${importe} * ${j} = ${resultado}`);
}

function calcular(numeroUno, numeroDos, operacion) {
    switch (operacion) {
        case "+":
            return numeroUno + numeroDos;
            break;
        case "*":
            return numeroUno * numeroDos;
            break;
        default:
            return "ingresó un dato erroneo";
            break;
    }
}

let personas = Number(prompt("personas por cabaña para calcular desayunos"));
let desayunos = Number(prompt("ingresa los dias de hospedaje (mayor a dos)"));
let cantidad = prompt("ingresa la operación para calcular");

let resultado = calcular (personas, desayunos, cantidad);
alert(`${personas} ${cantidad} ${desayunos} = ${resultado} desayunos`); 

let actividad = prompt("¿deseas info de la actividad al aire libre?");
function actividadUno(caminata) {
    return `salida para ${caminata}`
}
function actividadDos(aves) {
    return `${aves}, avistamiento de aves`
}
function actividadTres(aventura) {
    return `${aventura}, aventura en tirolesa y almuerzo.`;
}
function finActividades(retorno) {
    console.log(`${retorno} Fin de actividades al aire libre.`);
}
let actividadDelDia = actividadUno("trekking");
let verAves = actividadDos(actividadDelDia);
let actividadDeAventura = actividadTres(verAves);
alert(actividadDeAventura);

let paqueteCompleto = prompt("deseas el paquete completo?");
const actividades = ["trekking", "avistamiento de aves", "tirolesa"];
const almuerzo = ["entrada", "plato principal", "postre", "bebida"];
const paquete = actividades.concat(almuerzo);
alert(paquete);

/*function otraActividad(nombre, dia, hora, valor) {
    this.nombre = nombre;
    this.dia = dia;
    this.hora = hora;
    this.valor = valor;
}
 const actividad = new otraActividad("parapente", "martes", "16hs", 2000);
 console.log(actividad);

const grupos = ["cabaña1", "cabaña2", "cabaña3"];
 grupos.push("cabaña4");
console.log(grupos);*/










