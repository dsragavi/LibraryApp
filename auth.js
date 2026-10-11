const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!email) return;

    // Demo only; not real authentication.
    sessionStorage.setItem("libraryDemoUser", email);
    window.location.href = "index.html";
  });
}

if (registerForm) {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;

    const message = document.getElementById("message");

    if (!name || !email || password.length < 4) {
      message.textContent = "Please complete all fields.";
      return;
    }

    // Do not save the password in this demo.
    message.textContent =
      "Demo registration complete. You can now go to the login page.";
  });
}
