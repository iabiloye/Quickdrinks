document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const usersList = JSON.parse(localStorage.getItem("quickdrinksUsers") || "[]");

    const found = usersList.find(u => u.email === email && u.password === password);

    if (found) {
      localStorage.setItem("loggedInUser", JSON.stringify(found));
      alert(`Welcome back, ${found.fullname.split(" ")[0]}!`);
      window.location.href = "quickdrinks.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});
