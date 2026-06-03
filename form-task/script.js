function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let error = document.getElementById("error");

    if (name === "" || email === "" || phone === "" || message === "") {
        error.innerText = "All fields are required!";
        return;
    }

    if (!email.includes("@")) {
        error.innerText = "Enter a valid email!";
        return;
    }

    if (phone.length < 10) {
        error.innerText = "Enter valid phone number!";
        return;
    }

    error.style.color = "green";
    error.innerText = "Form submitted successfully!";
}