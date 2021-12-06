const formEl = document.querySelector(".login-form");
let message = "";
formEl.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const mail = form.email.value;
    const password = form.password.value;
    const formData = {
        mail,
        password,
    };
    if (mail === "" || password === "") {
        message = alert("All fields must be completed");
    } else {
        formEl.reset();
        console.log(formData);
    }
}
