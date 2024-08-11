addEventListener("DOMContentLoaded", function (event) {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    let messages = [];
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must contain '@' and '.'");
    }
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }
    if (isValid) {
      feedbackDiv.style.display = "block";
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.style.backgroundColor = "rgb(171 255 190)";
    } else {
      feedbackDiv.style.display = "block";
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545    ";
    }
  });
});
