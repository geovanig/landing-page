let email = document.querySelector("#email");
let emailOk;

function validaEmail() {
    let txt = document.querySelector("#txtEmail");
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email inválido";
        txt.style.color = "red";
        emailOk = false;
    }else{
        txtEmail.innerHTML = "";
        emailOk = true;
    }
}

function validarEnvio() {
    if (emailOk == true) {
        alert("Mensagem enviada!!!");
    } else {
        alert("Preencha o campo corretamente");
    }
}