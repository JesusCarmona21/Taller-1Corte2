function calcularEstadisticas(calificaciones) {
    if (calificaciones.length === 0) {
        return {
            Promedio: 0,
            "Calificación más alta": undefined,
            "Calificación más baja": undefined
        };
    }

    var suma = 0;
    var maxima = calificaciones[0];
    var minima = calificaciones[0];

    for (var i = 0; i < calificaciones.length; i++) {
        var calificacion = calificaciones[i];
        suma += calificacion;

        if (calificacion > maxima) {
            maxima = calificacion;
        }

        if (calificacion < minima) {
            minima = calificacion;
        }
    }

    var promedio = suma / calificaciones.length;

    return {
        Promedio: promedio.toFixed(1),
        "Calificación más alta": maxima,
        "Calificación más baja": minima
    };
}

var calificaciones = [85, 90, 78, 92, 88];
var estadisticas = calcularEstadisticas(calificaciones);
console.log("Promedio: " + estadisticas.Promedio);
console.log("Calificación más alta: " + estadisticas["Calificación más alta"]);
console.log("Calificación más baja: " + estadisticas["Calificación más baja"]);
