function calcularEstadisticas() {
    var inputNumeros = document.getElementById("inputNumeros").value;
    var numeros = inputNumeros.split(',').map(function (item) {
        return parseFloat(item);
    });

    if (numeros.some(isNaN)) {
        alert("Por favor, ingresa números válidos separados por comas.");
        return;
    }

    var media = calcularMedia(numeros);
    var mediana = calcularMediana(numeros);
    var desviacion = calcularDesviacionEstandar(numeros);

    document.getElementById("media").textContent = media.toFixed(2);
    document.getElementById("mediana").textContent = mediana.toFixed(2);
    document.getElementById("desviacion").textContent = desviacion.toFixed(2);
}

function calcularMedia(numeros) {
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

function calcularMediana(numeros) {
    numeros.sort(function (a, b) {
        return a - b;
    });
    var mitad = Math.floor(numeros.length / 2);
    if (numeros.length % 2 === 0) {
        return (numeros[mitad - 1] + numeros[mitad]) / 2;
    } else {
        return numeros[mitad];
    }
}

function calcularDesviacionEstandar(numeros) {
    var media = calcularMedia(numeros);
    var sumaDiferenciasAlCuadrado = 0;
    for (var i = 0; i < numeros.length; i++) {
        var diferencia = numeros[i] - media;
        sumaDiferenciasAlCuadrado += Math.pow(diferencia, 2);
    }
    var varianza = sumaDiferenciasAlCuadrado / numeros.length;
    return Math.sqrt(varianza);
}
