function enviarReserva() {
  let entrada = document.getElementById("fechaEntrada").value;
  let salida = document.getElementById("fechaSalida").value;
  let correo = document.getElementById("correo").value;

  let mensaje = `Hola, quiero reservar VillaMile del ${entrada} al ${salida}. Mi correo es ${correo}`;
  let telefono = "573XXXXXXXXX";

  window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`);
}

let ratingDiv = document.getElementById("rating");

for(let i=1; i<=5; i++){
  let star = document.createElement("span");
  star.innerHTML = "★";
  star.style.fontSize = "30px";
  star.style.cursor = "pointer";
  star.onclick = () => alert("Calificación: " + i);
  ratingDiv.appendChild(star);
}