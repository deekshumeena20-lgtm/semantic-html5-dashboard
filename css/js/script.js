
const userForm = document.getElementById("user-form");
const formMessage = document.getElementById("form-message");

userForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!userForm.checkValidity()) {
    userForm.reportValidity();
    return;
  }

  const userName = document.getElementById("name").value;

  formMessage.textContent =
    "User " + userName + " added successfully!";

  userForm.reset();
});

const dialog = document.getElementById("info-dialog");
const openButton = document.getElementById("open-dialog");
const closeButton = document.getElementById("close-dialog");

openButton.addEventListener("click", function() {
  dialog.showModal();
});

closeButton.addEventListener("click", function() {
  dialog.close();
});
