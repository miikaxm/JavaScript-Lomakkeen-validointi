document.querySelector("form").addEventListener("submit", tarkista);

const yl_tarkis = ["name", "address", "country"]

function tarkista(event){
    event.preventDefault();

    // username tarkistus
    if (document.getElementById("username").value.length < 6){
        document.getElementById("error").innerText = "Käyttäjänimessä täytyy olla vähintään 6 merkkiä"
    } else {
        document.getElementById("error").innerText = ""
    }

    let salasana = document.getElementById("password").value
    // salasana tarkistus
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!regex.test(salasana)) {
        document.getElementById("error1").innerText = "Salasanassa täytyy olla vähintään 6 merkkiä, 1 numero, 1 iso alkukirjain ja 1 erikoismerkki";
    } else {
        document.getElementById("error1").innerText = "";
    }

    // zip code check
    let zip = document.getElementById("zip").value
    if (zip.length != 5){
        document.getElementById("error6").innerText = "Postinumerossa täytyy olla tasan 5 kirjainta";
    } else {
        document.getElementById("error6").innerText = "";
    }

    // email check
    let email = document.getElementById("email").value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("error7").innerText = "Sähköpostiosoitteen täytyy olla oikeassa muodossa (esim. nimi@domain.com)";
    } else {
        document.getElementById("error7").innerText = "";
    }

    // Muut tarkistukset
    yl_tarkis.forEach(tarkistettava => {
        if (document.getElementById(tarkistettava).value.length == 0) {
            document.getElementById(tarkistettava+"Error").innerText = "Kenttä ei voi olla tyhjä";
        } else {
            document.getElementById(tarkistettava+"Error").innerText = "";
        }
    });

    // language check
    let languageSelected = document.querySelector('input[name="language"]:checked');
    if (!languageSelected) {
        document.getElementById("languageError").innerText = "Valitse vähintään yksi kieli";
    } else {
        document.getElementById("languageError").innerText = "";
    }

    // gender check
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {      
        document.getElementById("genderError").innerText = "Valitse sukupuoli";
    } else {
        document.getElementById("genderError").innerText = "";
    }
    
}