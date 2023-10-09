
var estudiantes = [];

function agregarEstudiante() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var identificacion = document.getElementById("identificacion").value;


    var estudiante = {
        Nombre: nombre,
        Edad: edad,
        Identificacion: identificacion
    };


    estudiantes.push(estudiante);


    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("identificacion").value = "";

    alert("Estudiante agregado correctamente");
}

function buscarEstudiante() {
    var buscarIdentificacion = document.getElementById("buscar_identificacion").value;


    for (var i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].Identificacion === buscarIdentificacion) {
            var resultado = "Nombre: " + estudiantes[i].Nombre + ", Edad: " + estudiantes[i].Edad + ", Número de Identificación: " + estudiantes[i].Identificacion;
            document.getElementById("resultado").innerText = resultado;
            return;
        }
    }


    document.getElementById("resultado").innerText = "Estudiante no encontrado";
}
