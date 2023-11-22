// updateProfile.js

document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded before executing the script

  console.log("started");
  const btn = document.querySelector("button[type='submit']");
  const form = document.getElementById('form');


  if (btn) {
    console.log("event started");
    btn.addEventListener("click", function () {
        // Get form data
    console.log("event clicked");
    // const formData = {
    //   firstName: document.getElementById("firstName").value,
    //   lastName: document.getElementById("lastName").value,
    //   email: document.getElementById("email").value,
    //   phoneNumber: document.getElementById("phoneNumber").value,
    //   username: document.getElementById("username").value,
    // };

    // document.getElementById("user-last-name").innerText = formData.lastName;
    // document.getElementById("user-name").innerText = formData.email;
    // document.getElementById("user-email").innerText = formData.phoneNumber;
    // document.getElementById("user-phone").innerText = formData.username;

    // Send form data to the server
    //sendFormData(formData);
    //console.log("calling send form");
    });
} else {
    console.error("Button not found!");
}





  // function sendFormData(formData) {
  //   // Assuming your server is running locally on port 8000
  //   const serverUrl = "http://localhost:8000/pages/screens/update-profile.html?";

  //   console.log("running");

  //   fetch(serverUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Form data sent successfully:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending form data:", error);
  //     });
  // }

  // form.addEventListener('submit', () => {
  //   console.log('form')
  // })


  // const onSubmit = (e) => {
  //   console.log(e)
  // }
});
