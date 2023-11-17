function validarFormulario() {
    // Obtener el valor del campo texto
    var valorTexto = document.getElementById("texto").value;

    // Verificar si el campo texto está lleno
    if (valorTexto === "") {
        // Si no está lleno, mostrar un mensaje de error y evitar enviar el formulario
        alert("Por favor, completa el campo 'Texto'.");
        return false;
    }

    // Si el campo está lleno, cerrar el formulario y mostrar el mensaje de guardado exitoso
    document.getElementById("editarTextoForm").reset(); // Resetea el formulario
    guardadoExitoso();
    return false; // Evita que el formulario se envíe realmente
}

function guardadoExitoso() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Información guardada con éxito",
        showConfirmButton: false,
        timer: 4500
    });
}