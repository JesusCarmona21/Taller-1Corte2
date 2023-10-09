var respuestasCorrectas = {
    pregunta1: "París",
    pregunta2: "Gabriel García Márquez"
};

function calcularPuntuacion() {
    var respuesta1 = document.getElementById("respuesta1").value;
    var respuesta2 = document.getElementById("respuesta2").value;
    var puntuacion = 0;

    if (respuesta1 === respuestasCorrectas.pregunta1) {
        puntuacion++;
    }

    if (respuesta2 === respuestasCorrectas.pregunta2) {
        puntuacion++;
    }

    var resultado = "Puntuación: " + puntuacion + " de 2 respuestas correctas";
    document.getElementById("puntuacion").textContent = resultado;
}
