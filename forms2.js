let color = document.querySelector("#color");

function changeBg()
{
    document.body.style.backgroundColor = color.value;
}

color.addEventListener("change", changeBg)
let emailForm = document.querySelector("#email")
let form = document.forms[1];
let submitBtn = document.querySelector("#submit");

function invalidMail() {
    let regex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
    if (this.value.length == 0)
    {
        this.setCustomValidity("Dieses Feld darf nicht leer sein.")
    }
    else if (this.value.length < 5)
    {
        this.setCustomValidity("Die Adresse ist zu kurz, bitte vervollständigen Sie sie")
    }
    else if (this.value.search("@") < 1)
    {
        this.setCustomValidity("Die Email muss ein @ enthalten.")
    }
    else if (!regex.test(this.value))
    {
        this.setCustomValidity("Diese Mail-Adresse ist leider nicht gültig bitte wählen Sie eine andere.");
    }
    else
    {
        this.setCustomValidity("Unbekannter Fehler.");
    }
    emailForm.style.backgroundColor = "lightcoral"
}
function isValid() {
    this.setCustomValidity("");
    emailForm.style.backgroundColor = "white"
}

emailForm.addEventListener("invalid", invalidMail);
emailForm.addEventListener("change", isValid);

// function validMail() {
//     let adress = emailForm.value;
//     if (adress.length < 4)
//     {
//         if (!emailForm.parentElement.querySelector("#emailError")) {
//             let errorBox = document.createElement("p");
//             errorBox.id = "emailError"
//             errorBox.textContent = "Die Email ist zu kurz!";
//             errorBox.style.color = "red";
//             errorBox.style.fontSize = "12px";
//             emailForm.parentElement.append(errorBox);
//             submitBtn.setAttribute("disabled", "true")
//             emailForm.focus();
//         }
//         else {
//             emailForm.focus();
//             emailForm.style.backgroundColor = "red";
//         }
//     }
//     else {
//         emailForm.parentElement.querySelector("#emailError").remove();
//         submitBtn.removeAttribute("disabled");
//         emailForm.style.backgroundColor = "white";
//     }
// }

// emailForm.addEventListener("change", validMail);


// form.addEventListener("submit", validateIt)
// form.addEventListener("submit", validateIt);

// function validateIt() {
//     if (!emailForm.validity.valid)
//     {
//         alert("Konnte nicht registriert werden.")
//     }
// }