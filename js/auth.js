document.addEventListener("DOMContentLoaded", function () {

  const registerForm = document.querySelector("#registerForm");

  if (registerForm) {

    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullName = document.querySelector("#fullname").value.trim();
      const email = document.querySelector("#email").value.trim();
      const username = document.querySelector("#username").value.trim();
      const password = document.querySelector("#password").value;
      const confirmPassword = document.querySelector("#confirmPassword").value;
      const message = document.querySelector("#registerMessage");

      if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
      }

      if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.style.color = "red";
        return;
      }

      let users = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = users.some(user => user.username === username);

      if (userExists) {
        message.textContent = "Username already exists. Choose another.";
        message.style.color = "red";
        return;
      }
      const newUser = {
        id: Date.now(),
        fullName: fullName,
        email: email,
        username: username,
        password: password,
        createdAt: new Date().toISOString()
      };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      message.textContent = "Account created successfully! Redirecting to login...";
      message.style.color = "green";

      registerForm.reset();
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);

    });

  }

});
