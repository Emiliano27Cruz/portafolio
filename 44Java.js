function calcularRFC(){
        // Obtener los valores de los campos
        var nombre = document.getElementById("nombre").value;
        var apellidoPaterno = document.getElementById("apellido-paterno").value;
        var apellidoMaterno = document.getElementById("apellido-materno").value;
        var anio = document.getElementById("anio").value;
        var mes = document.getElementById("mes").value;
        var dia = document.getElementById("dia").value;

        // Calcular el RFC
        var rfc = apellidoPaterno.substring(0,2).toUpperCase() +
                  apellidoMaterno.substring(0,1).toUpperCase() +
                  nombre.substring(0,1).toUpperCase() +
                  anio.substring(2) +
                  mes.padStart(2, "0") +
                  dia.padStart(2, "0");

        // Mostrar el resultado
        document.getElementById("resultado").textContent = rfc;
    }