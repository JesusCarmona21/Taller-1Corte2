function generarTabla() {
    var numero = parseInt(document.getElementById("numero").value);
    var filas = parseInt(document.getElementById("filas").value);
    var tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    if (isNaN(numero) || isNaN(filas)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    for (var i = 1; i <= filas; i++) {
        var resultado = numero * i;
        var fila = document.createElement("tr");
        var celda = document.createElement("td");
        celda.textContent = numero + "x" + i + "=" + resultado;
        fila.appendChild(celda);
        tabla.appendChild(fila);
    }
}

