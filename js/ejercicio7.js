function calcularMontoFinal() {
    var capitalInicial = parseFloat(document.getElementById("capitalInicial").value);
    var tasaInteres = parseFloat(document.getElementById("tasaInteres").value);
    var periodoInversion = parseInt(document.getElementById("periodoInversion").value);

    if (isNaN(capitalInicial) || isNaN(tasaInteres) || isNaN(periodoInversion)) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    tasaInteres = tasaInteres / 100; // Convertir la tasa de interés de porcentaje a decimal

    var montoFinal = capitalInicial * Math.pow(1 + tasaInteres, periodoInversion);

    var resultado = "El monto final es de $" + montoFinal.toFixed(2);
    document.getElementById("resultado").textContent = resultado;
}
