function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

init();

function init(){

    document.getElementById("regBtn").addEventListener("click", validarRegistro)
}


function validarRegistro(){

    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value
    
    if (password1 != password2) {
        showAlertError()
    } else if (password1.length < 6){
        showAlertError()
    }
    else{
    
        showAlertSuccess();
    }
    
}