function verificar() {
    var fecha = document.getElementById("fecha").value;
    var mes = fecha.split("-")[1];
    if (mes === "05") {
      document.getElementById("mensaje").innerHTML = "¡Felicidades! obtuviste un 2x1.";
      document.getElementById("imagen").src = "2x1.jpg";
      document.getElementById("imagen").style.display = "block";
    } else{
      document.getElementById("mensaje").innerHTML = "No obtuviste descuento. ¡Suerte para la próxima!";
      document.getElementById("imagen").style.display = "none";
    }
  }