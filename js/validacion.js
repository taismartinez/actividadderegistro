function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function () {
    const miCheckbox = document.getElementById('terminos');
    const botonComprobar = document.getElementById('regBtn');
    botonComprobar.addEventListener("click", function() {
      if (miCheckbox.checked) {
        showAlertSuccess();
        
      } else {
       showAlertError();
      }
    });
});


document.getElementById("regBtn").addEventListener("click", validarRegistro)

function validarRegistro(){
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value
    let name = document.getElementById("nombre").value
    let lastname = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let btn = document.getElementById("terminos").value
    if (password1 !== password2) {
        showAlertError()
    }else if (password1.length < 6){
        showAlertError()
    }else if (!name || !lastname || !email || !btn){
        showAlertError()
    }else{
        showAlertSuccess();
        }  
} 