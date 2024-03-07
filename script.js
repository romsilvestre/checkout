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

    var pixCode = "000201" +
                  "26580014BR.GOV.BCB.PIX" +
                  "0136" +
                  "b42db6c7-d92d-49a5-9430-0c7444ccd3b7" + // 
                  "5204" +
                  "0000" +
                  "530398654049.995802BR" +
                  "5925" +
                  firstName.toUpperCase() + " " + lastName.toUpperCase() + //
                  "5205" +
                  "ROMULO THIAGO SILVESTRE" + // 
                  "S6009SAO PAULO" +
                  "61080540900062250521S9OrrBQ5walYDpa1gafp863046593";

    document.getElementById('pixCode').value = pixCode;
    document.getElementById('pixCode').style.display = "block";
    document.getElementById('paymentInfo').style.display = "block";
    copyPixCode();
}
