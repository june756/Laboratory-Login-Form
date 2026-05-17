var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");
var emailErr = document.getElementById("emailErr");
var passErr = document.getElementById("passErr");
var msg = document.getElementById("msg");

form.onsubmit = function (e) {
  e.preventDefault();

  emailErr.textContent = "";
  passErr.textContent = "";
  msg.textContent = "";
  msg.className = "";

  var ok = true;

  if (email.value.trim() === "") {
    emailErr.textContent = "Email is required.";
    ok = false;
  } else if (email.value.indexOf("@") === -1) {
    emailErr.textContent = "Enter a valid email.";
    ok = false;
  }

  if (password.value === "") {
    passErr.textContent = "Password is required.";
    ok = false;
  } else if (password.value.length < 6) {
    passErr.textContent = "Password must be at least 6 characters.";
    ok = false;
  }

  if (!ok) {
    msg.textContent = "Please fill all fields correctly.";
    msg.className = "fail";
    return;
  }

  msg.textContent = "Login successful!";
  msg.className = "success";
  form.reset();
};
