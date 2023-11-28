document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);

  // Get values for first name, last name, email, phone number, and username
  const firstName = urlParams.get("firstName");
  const lastName = urlParams.get("lastName");
  const email = urlParams.get("email");
  const phoneNumber = urlParams.get("phoneNumber");
  const username = urlParams.get("username");

  // Log the values to the console

  // Reference to the form and the list elements
  const firstNameList = document.querySelector(".user-first-name");
  const lastNameList = document.querySelector(".user-last-name");
  const userNameList = document.querySelector(".user-name");
  const emailList = document.querySelector(".user-email");
  const phoneList = document.querySelector(".user-phone");

  // Update the content of the list elements with the form values
  firstNameList.textContent = `First Name: ${firstName.length > 0 ? firstName : ''}`;
  lastNameList.textContent = `Last Name: ${lastName.length > 0 ? lastName : ''}`;
  userNameList.textContent = `User Name: ${phoneNumber.length > 0 ? phoneNumber : ''}`;
  emailList.textContent = `Email: ${email.length > 0 ? email : ''}`;
  phoneList.textContent = `Phone Number: ${username.length > 0 ? username : ''}`;
});
