function agregarDatos() {

var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var matricula = document.getElementById("matricula").value;
var materia = document.getElementById("materia").value;
var nota = document.getElementById("nota").value;


if (nombre && apellido && matricula && materia && nota) {
	var tabla = document.getElementById("tabla-datos");
	var fila = tabla.insertRow();

	var celdaNombre = fila.insertCell();
	var celdaApellido = fila.insertCell();
	var celdaMatricula = fila.insertCell();
	var celdaMateria = fila.insertCell();
	var celdaNota = fila.insertCell();

	celdaNombre.textContent = nombre;
	celdaApellido.textContent = apellido;
	celdaMatricula.textContent = matricula;
	celdaMateria.textContent = materia;
	celdaNota.textContent = nota;


	document.getElementById("formulario").reset();
} else {
	alert("Debe ingresar todos los campos");
}

}

function limpiarFormulario() {
	document.getElementById("formulario").reset();
}