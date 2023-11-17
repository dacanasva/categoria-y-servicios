document.addEventListener("DOMContentLoaded", function() {
    const btnAbrirModal = document.querySelector("#btn-abrir-modal-edit");
    const btnCerrarModal = document.querySelector("#btn-cerrar-modal-edit");
    const modal = document.querySelector("#modal-edit");

    btnAbrirModal.addEventListener("click", () => {
        modal.showModal();
    });

    btnCerrarModal.addEventListener("click", () => {
        modal.close();
    });
});


