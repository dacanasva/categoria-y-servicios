function validarFormulario() {
    // Obtener el valor de los campos
    var valorNombre = document.getElementById("nombre").value;
    var valorCategoria = document.getElementById("categoria").value;
    var valorArchivo = document.getElementById("archivo").value;
    var valorInformacion = document.getElementById("informacion").value;

    // Verificar si los campos están llenos
    if (valorNombre === "" || valorCategoria === "" || valorArchivo === "" || valorInformacion === "") {
      // Si no están llenos, mostrar un mensaje de error y evitar enviar el formulario
      alert("Por favor, completa todos los campos.");
      return false;
    }

    // Si todos los campos están llenos, mostrar el mensaje de guardado exitoso
    guardadoExitoso();
    return true;
  }

  function guardadoExitoso() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu trabajo ha sido guardado",
      showConfirmButton: false,
      timer: 1500
    });
  }