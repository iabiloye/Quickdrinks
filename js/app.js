
document.addEventListener("DOMContentLoaded", () => {
  const accountLink = document.getElementById("account-link");

  function setGreeting() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && accountLink) {
      const firstName = loggedInUser.fullname.split(" ")[0];
      accountLink.textContent = `Hi, ${firstName}`;
      accountLink.href = "#";
      accountLink.style.cursor = "pointer";

      accountLink.addEventListener("click", (e) => {
        e.preventDefault();
        const confirmLogout = confirm("Do you want to log out?");
        if (confirmLogout) {
          localStorage.removeItem("loggedInUser");
          
          window.location.reload();
        }
      });
    } else if (accountLink) {
      accountLink.textContent = "Account";
      accountLink.href = "account.html";
      accountLink.style.cursor = "auto";
    }
  }

  setGreeting();

  const productGrid = document.getElementById("product-grid");
  if (productGrid) {
    const sampleDrinks = [
        { id: "1", name: "Heineken", img: "img/heineken.jpg", category: "Lager" },
        { id: "2", name: "Legend Stout", img: "img/legend-stout.jpg", category: "Stout" },
        { id: "3", name: "Fayrouz", img: "img/fayrouz.jpg", category: "Soft Drink" },
    ];

    productGrid.innerHTML = sampleDrinks.map(d => `
      <article class="product-card">
        <img src="${d.img}" alt="${d.name}" />
        <h3>${d.name}</h3>
        <p>${d.category}</p>
        <button class="btn add-to-cart" data-id="${d.id}">Add to Cart</button>
      </article>
    `).join("");
  }


  
  function displayDrinks(drinks) {
  if (!drinks) {
    productGrid.innerHTML = "<p>No drinks found.</p>";
    return;
  }
  productGrid.innerHTML = drinks
    .slice(0, 6)
    .map(
      (d) => `
      <article class="product-card">
        <img src="${d.img || d.strDrinkThumb}" alt="${d.name || d.strDrink}" />
        <h3>${d.name || d.strDrink}</h3>
        <p>${d.category || d.strCategory}</p>
        <button class="btn add-to-cart">Add to Cart</button>
      </article>
    `
    )
    .join("");
}

});
