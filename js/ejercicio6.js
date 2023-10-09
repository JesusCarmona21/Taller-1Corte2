var libros = [];

function agregarLibro() {
    var titulo = document.getElementById("titulo").value;
    var autor = document.getElementById("autor").value;
    var anio = parseInt(document.getElementById("anio").value);

    var libro = {
        Titulo: titulo,
        Autor: autor,
        Anio: anio
    };

    libros.push(libro);

    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("anio").value = "";

    alert("Libro agregado correctamente");
}

function buscarLibroPorTitulo() {
    var buscarTitulo = document.getElementById("buscarTitulo").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (var i = 0; i < libros.length; i++) {
        if (libros[i].Titulo.toLowerCase() === buscarTitulo.toLowerCase()) {
            resultado.innerHTML += "Título: " + libros[i].Titulo + ", Autor: " + libros[i].Autor + ", Año de Publicación: " + libros[i].Anio + "<br>";
        }
    }

    if (resultado.innerHTML === "") {
        resultado.textContent = "Libro no encontrado";
    }
}

function buscarLibroPorAutor() {
    var buscarAutor = document.getElementById("buscarAutor").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (var i = 0; i < libros.length; i++) {
        if (libros[i].Autor.toLowerCase() === buscarAutor.toLowerCase()) {
            resultado.innerHTML += "Título: " + libros[i].Titulo + ", Autor: " + libros[i].Autor + ", Año de Publicación: " + libros[i].Anio + "<br>";
        }
    }

    if (resultado.innerHTML === "") {
        resultado.textContent = "Libro no encontrado";
    }
}
