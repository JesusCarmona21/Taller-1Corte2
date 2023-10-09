function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingresa valores válidos para peso y altura.");
        return;
    }

    var imc = peso / (altura * altura);
    var mensaje = "";

    if (imc < 18.5) {
        mensaje = "estás en el rango de peso bajo.";
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje = "estás en el rango de peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        mensaje = "tienes sobrepeso.";
    } else {
        mensaje = "tienes obesidad.";
    }

    document.getElementById("resultado").textContent = "Tu IMC es " + imc.toFixed(2) + ", " + mensaje;
}
