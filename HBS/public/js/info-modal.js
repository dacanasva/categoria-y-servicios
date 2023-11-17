document.addEventListener("DOMContentLoaded", function() {
    const btnAbrirModal = document.querySelector("#btn-abrir-modal-info");
    const btnCerrarModal = document.querySelector("#btn-cerrar-modal-info");
    const modal = document.querySelector("#modal-info");

    btnAbrirModal.addEventListener("click", () => {
        modal.showModal();
    });

    btnCerrarModal.addEventListener("click", () => {
        modal.close();
    });
});


