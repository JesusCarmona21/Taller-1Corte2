
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;


var intentos = 0;

function comprobarNumero() {
    var adivinaInput = document.getElementById("adivinaInput");
    var resultado = document.getElementById("resultado");
    

    var numeroUsuario = parseInt(adivinaInput.value);


    intentos++;

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        resultado.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    } else if (numeroUsuario === numeroAleatorio) {
        resultado.textContent = "¡Felicidades! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.";

        document.querySelector("button").disabled = true;
    } else if (numeroUsuario < numeroAleatorio) {
        resultado.textContent = "El número es más alto. Intento #" + intentos;
    } else {
        resultado.textContent = "El número es más bajo. Intento #" + intentos;
    }


    adivinaInput.value = "";
}
