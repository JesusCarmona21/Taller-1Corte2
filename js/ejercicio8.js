function generarContrasena() {
    var longitud = parseInt(document.getElementById("longitud").value);
    var incluirMayusculas = document.getElementById("mayusculas").checked;
    var incluirMinusculas = document.getElementById("minusculas").checked;
    var incluirNumeros = document.getElementById("numeros").checked;
    var incluirCaracteresEspeciales = document.getElementById("caracteresEspeciales").checked;

    if (isNaN(longitud) || longitud < 1) {
        alert("Por favor, ingresa una longitud válida.");
        return;
    }

    var caracteresPermitidos = "";
    var caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz";
    var caracteresNumeros = "0123456789";
    var caracteresEspeciales = "!@#$%^&*()_+[]{}|;':,.<>?";

    if (incluirMayusculas) {
        caracteresPermitidos += caracteresMayusculas;
    }
    if (incluirMinusculas) {
        caracteresPermitidos += caracteresMinusculas;
    }
    if (incluirNumeros) {
        caracteresPermitidos += caracteresNumeros;
    }
    if (incluirCaracteresEspeciales) {
        caracteresPermitidos += caracteresEspeciales;
    }

    if (caracteresPermitidos === "") {
        alert("Por favor, selecciona al menos un tipo de caracter.");
        return;
    }

    var contrasenaGenerada = "";

    for (var i = 0; i < longitud; i++) {
        var caracterAleatorio = caracteresPermitidos.charAt(Math.floor(Math.random() * caracteresPermitidos.length));
        contrasenaGenerada += caracterAleatorio;
    }

    document.getElementById("contrasenaGenerada").textContent = contrasenaGenerada;
}

