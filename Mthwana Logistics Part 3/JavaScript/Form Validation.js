// form-validation.js

function validateForm(event) {
  event.preventDefault(); // Stops the form from submitting immediately

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  let valid = true;
  let errorMessages = [];

  if (name.value.trim() === "") {
    errorMessages.push("Name is required.");
    valid = false;
  }

  if (email.value.trim() === "") {
    errorMessages.push("Email is required.");
    valid = false;
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    errorMessages.push("Invalid email format.");
    valid = false;
  }

  if (message.value.trim().length < 10) {
    errorMessages.push("Message must be at least 10 characters.");
    valid = false;
  }

  if (!valid) {
    alert(errorMessages.join("\n"));
  } else {
    alert("Thank you! Your message has been successfully submitted.");
    event.target.submit(); // submits the form if all fields are valid
  }
}
