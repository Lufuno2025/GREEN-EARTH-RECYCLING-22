// === enquiry.js ===
// Form validation and submission confirmation for GreenEarth Recycling

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enquiryForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop normal submission

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation flags
    let isValid = true;
    let errorMessage = "";

    // === Validation Rules ===
    if (name === "" || name.length < 3) {
      isValid = false;
      errorMessage += "⚠️ Please enter a valid name (at least 3 characters).\n";
    }

    if (!validateEmail(email)) {
      isValid = false;
      errorMessage += "⚠️ Please enter a valid email address.\n";
    }

    if (service === "") {
      isValid = false;
      errorMessage += "⚠️ Please select a service type.\n";
    }

    if (message === "" || message.length < 10) {
      isValid = false;
      errorMessage += "⚠️ Please enter a detailed message (at least 10 characters).\n";
    }

    // === Display Results ===
    if (!isValid) {
      alert(errorMessage);
      return;
    }

    // If valid, show confirmation
    alert(
      "✅ Thank you, " +
        name +
        "! Your enquiry about '" +
        service +
        "' has been successfully submitted. We’ll contact you soon."
    );

    // Optionally, reset form
    form.reset();
  });

  // === Helper Function for Email Validation ===
  function validateEmail(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return emailPattern.test(email);
  }
});
