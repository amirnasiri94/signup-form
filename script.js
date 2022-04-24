const form = document.querySelector("form");
const inputs = document.querySelectorAll(".input-wrapper input");
const submitBtn = document.querySelector("form input[type = submit]");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    inputs.forEach((element) => {
        element.parentElement.classList.remove("show-error");
    });
    if (form.checkValidity()) {
        form.submit();
    } else {
        inputs.forEach((element) => {
            if (element.validity.valueMissing) {
                element.parentElement.classList.add("show-error");
                element.removeAttribute("placeholder");
                if (element == document.querySelector("input[type = email]")) {
                    element.setAttribute("placeholder", "email@example.com");
                }
            }
            if (element.validity.typeMismatch) {
                element.parentElement.classList.add("show-error");
                element.value = "";
                element.setAttribute("placeholder", "email@example.com");
            }
        });
    }
});