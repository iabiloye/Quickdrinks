// js/api.js
// QuickDrinks - Recommended Drinks / Pairings
// Author: Abiloye Iyanuoluwa John

document.addEventListener("DOMContentLoaded", () => {
  const pairingGrid = document.querySelector(".pairing-grid");
  if (!pairingGrid) return;


  const recommendedDrinks = [
    {
      id: 174,
      name: "Mojito",
      description:
        "Mojito is a traditional Cuban highball made with white rum, sugar, lime juice, soda water, and mint.",
      image_thumb_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Mojito98775.jpeg/200px-Mojito98775.jpeg"
    },
  
    {
      id: 176,
      name: "Amstel",
      description: "Amstel is a smooth lager beer with a crisp finish.",
      image_thumb_url: "img/amstel.jpg"
    },
    {
      id: 177,
      name: "Maltina",
      description: "Maltina is a non-alcoholic malt drink loved for its sweetness.",
      image_thumb_url: "img/maltina.jpg"
    }
  ];

  function displayRecommendedDrinks(drinks) {
    if (!drinks || drinks.length === 0) {
      pairingGrid.innerHTML = "<p>No recommended drinks found.</p>";
      return;
    }

    pairingGrid.innerHTML = drinks
      .map(
        (drink) => `
      <article class="pairing-card">
        <img src="${drink.image_thumb_url}" alt="${drink.name}" />
        <h3>${drink.name}</h3>
        <p>${drink.description}</p>
        <a href="#" class="btn">View Recipe</a>
      </article>
    `
      )
      .join("");
  }


  displayRecommendedDrinks(recommendedDrinks);

});
