function generatePixCode() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;

    if (firstName === "" || lastName === "" || email === "" || confirmEmail === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (email !== confirmEmail) {
        alert("Os emails não correspondem. Por favor, verifique e tente novamente.");
        return;
    }

    var pixCode = "00020126580014BR.GOV.BCB.PIX0136b42db6c7-d92d-49a5-9430-0c7444ccd3b752040000530398654049.995802BR5925DSD DASD5205ROMULO THIAGO SILVESTRES6009SAO PAULO61080540900062250521S9OrrBQ5walYDpa1gafp863046593;

    document.getElementById('pixCode').value = pixCode;
    document.getElementById('pixCode').style.display = "block";
    document.getElementById('paymentInfo').style.display = "block";
    copyPixCode();
}
