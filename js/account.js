// js/account.js
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  if (!registerForm) return;

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
      fullname: document.getElementById("fullname").value.trim(),
      email: document.getElementById("email").value.trim().toLowerCase(),
      password: document.getElementById("password").value,
      phone: document.getElementById("phone").value.trim(),
      address: document.getElementById("address").value.trim(),
    };

    if (!user.fullname || !user.email || !user.password || !user.phone || !user.address) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    if (user.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    const usersList = JSON.parse(localStorage.getItem("quickdrinksUsers") || "[]");

    const exists = usersList.some(u => u.email === user.email);
    if (exists) {
      alert("An account with this email already exists. Please log in.");
      window.location.href = "login.html";
      return;
    }

    usersList.push(user);
    localStorage.setItem("quickdrinksUsers", JSON.stringify(usersList));

    localStorage.setItem("quickdrinksUser", JSON.stringify(user));

    alert(`🎉 Welcome ${user.fullname.split(" ")[0]}! Your account has been created.`);
    registerForm.reset();

    window.location.href = "login.html";
  });
});
