
/*
#####################################################################
    Author: Hamza Tariq
    Date: Dec 6, 2024
    Purpose: CIS-1280 2024 Portfolio Project - validation.js
    Description: This file validates the inputs in the contact form.
    Dependencies: None
#####################################################################
*/
// Form validation and feedback
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
  } else {
    alert("Your message has been sent.");
  }
});