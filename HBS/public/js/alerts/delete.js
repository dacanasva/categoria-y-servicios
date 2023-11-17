function mostrarAlerta() {
  Swal.fire({
    title: "Estas seguro?",
    text: "¡No podrás revertir esto!",
    icon: "advertencia",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "¡Sí, bórralo!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "¡Eliminado!",
        text: "Su archivo ha sido eliminado.",
        icon: "success"
      });
    }
  });
  }