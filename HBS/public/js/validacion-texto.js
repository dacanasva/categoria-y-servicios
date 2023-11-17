function validarFormulario() {
    var texto = document.getElementById('texto').value;
    // Regular expression to check if the input contains only text
    var textRegex = /^[a-zA-Z\s]+$/;

    if (!textRegex.test(texto)) {
        alert('Por favor, ingrese solo texto.');
        return false;
    }

    // Additional validation logic if needed

    return true;
}
