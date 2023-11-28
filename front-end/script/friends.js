// const users = [
//   {
//     id: 1,
//     first_name: "Gayelord",
//     last_name: "Scad",
//     email: "gscad0@google.com.au",
//     gender: "Male",
//     ip_address: "66.151.161.64",
//   },
//   {
//     id: 2,
//     first_name: "Dita",
//     last_name: "Curnock",
//     email: "dcurnock1@wisc.edu",
//     gender: "Genderqueer",
//     ip_address: "58.30.205.109",
//   },
//   {
//     id: 3,
//     first_name: "Windham",
//     last_name: "Mathen",
//     email: "wmathen2@clickbank.net",
//     gender: "Male",
//     ip_address: "2.172.142.186",
//   },
//   {
//     id: 4,
//     first_name: "Pattie",
//     last_name: "McPeeters",
//     email: "pmcpeeters3@angelfire.com",
//     gender: "Male",
//     ip_address: "90.239.66.62",
//   },
//   {
//     id: 5,
//     first_name: "Nico",
//     last_name: "Cirlos",
//     email: "ncirlos4@ca.gov",
//     gender: "Male",
//     ip_address: "71.128.205.1",
//   },
//   {
//     id: 996,
//     first_name: "Judah",
//     last_name: "Crossfield",
//     email: "jcrossfieldrn@miibeian.gov.cn",
//     gender: "Male",
//     ip_address: "182.156.9.37",
//   },
//   {
//     id: 997,
//     first_name: "Florencia",
//     last_name: "Chanders",
//     email: "fchandersro@rediff.com",
//     gender: "Female",
//     ip_address: "15.97.4.81",
//   },
//   {
//     id: 998,
//     first_name: "Edan",
//     last_name: "Jikovsky",
//     email: "ejikovskyrp@hp.com",
//     gender: "Male",
//     ip_address: "187.255.226.225",
//   },
//   {
//     id: 999,
//     first_name: "Morty",
//     last_name: "Sowten",
//     email: "msowtenrq@umn.edu",
//     gender: "Bigender",
//     ip_address: "252.202.108.238",
//   },
//   {
//     id: 1000,
//     first_name: "Fenelia",
//     last_name: "Livingstone",
//     email: "flivingstonerr@webs.com",
//     gender: "Female",
//     ip_address: "168.93.226.122",
//   },
// ];

document.addEventListener("DOMContentLoaded", async function () {
  const users = await fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => console.error("Error fetching data:", error));

  var table = document.getElementById("userTable");

  // Loop through the users array and add rows to the table
  for (var i = 0; i < users?.length; i++) {
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
