document.getElementById('formEmail').addEventListener('submit', async function (event) {
    event.preventDefault();
    var email = document.getElementById("emailForm").value;

    if (email.length == 0) {
        alert("Digite um e-mail válido.");
    } else {
        var aviso = document.getElementById("mensagemEmail");
        aviso.innerHTML = `E-mail enviado para ${email}`;
        aviso.style.display = "initial";
        // document.getElementById("formEmail").style.display = "none";
    }
})