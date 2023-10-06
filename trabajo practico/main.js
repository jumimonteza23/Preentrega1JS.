let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
    alert(`Hola ${nombre} ${apellido}`);

let noches = (prompt("ingresa los dias de hospedaje"))
if (noches <= 4){
    alert ("no tienen descuento");
}else if(noches <= 7){
    alert("tienes un 10% menos a partir del dia 5");
}else{
    alert("tienes un dia GRATIS! por cada 7 dias");
}

let libre = Number(prompt("consulta disponibilidad"));
while (libre !=10) {
   alert("disponible");
libre = Number(prompt("ingresa la fecha"));
}
alert("reservado");








