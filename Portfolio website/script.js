// Get the form using its ID
const form = document.getElementById("contactForm");

// Get the div where we will display messages
const messageDiv = document.getElementById("formMessage");

// Listen for when the form is submitted
form.addEventListener("submit", function(event) {

  // Stop the form from refreshing the page
  event.preventDefault();

  // Get values from input fields
  // .value gets what the user typed
  // .trim() removes spaces (so "   " = empty)
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Clear any previous message before showing a new one
  messageDiv.innerHTML = "";

  // Check if fields are empty
  if (name === "" || email === "") {

    // Show error message using Bootstrap alert
    messageDiv.innerHTML = `
      <div class="alert alert-danger mt-3">
        Please fill in all required fields.
      </div>
    `;

  } else {

    // Show success message
    messageDiv.innerHTML = `
      <div class="alert alert-success mt-3">
        Thank you! Your message has been sent.
      </div>
    `;

    // Reset the form (clears all inputs)
    form.reset();
  }

});