document.addEventListener("DOMContentLoaded", async function () {

  const users = await fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => console.error("Error fetching data:", error));

  var table = document.getElementById("userTable");

  // Loop through the users array and add rows to the table
  // looping for SBA
  for (var i = 0; i < users?.length; i++) {
    // variable for SBA
    var user = users[i];

    console.log(user);
    // Create a new row
    var row = table.insertRow(-1);

    // Profile Image column (empty for now)
    var profileImageCell = row.insertCell(0);

    var imageUrl = `${user.picture.thumbnail}`;

    // Create an image element
    var img = document.createElement("img");
    img.src = imageUrl; // Set the image source to the specified URL
    img.alt = "User Profile Image"; // Add an alt attribute for accessibility

    // Append the image element to the cell
    profileImageCell.appendChild(img);

    // First Name column
    var firstNameCell = row.insertCell(1);
    firstNameCell.innerHTML = user.name.first;

    // Last Name column
    var lastNameCell = row.insertCell(2);
    lastNameCell.innerHTML = user.name.last;
  }
});
