// Signup page
let users = [];

function signUp() {
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  users.push(user);
  alert("Registration successful!");
}

// Login page
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = users.find(user => user.email === email && user.password === password);
  if(user) {
    alert("Login successful!");
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "profile.html";
  } else {
    alert("Incorrect email or password!");
  }
}

// Profile page
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

function displayProfile() {
  document.getElementById("name").innerHTML = currentUser.name;
  document.getElementById("email").innerHTML = currentUser.email;
  document.getElementById("age").innerHTML = currentUser.age;
  document.getElementById("dob").innerHTML = currentUser.dob;
  document.getElementById("contact").innerHTML = currentUser.contact;
}

function updateProfile() {
  currentUser.age = document.getElementById("age").value;
  currentUser.dob = document.getElementById("dob").value;
  currentUser.contact = document.getElementById("contact").value;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  alert("Profile updated successfully!");
}
