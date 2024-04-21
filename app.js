const cocktailsCenter = document.querySelector(".cocktails-center");
const searchInput = document.querySelector("#input");

function getData(dataType) {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + dataType)
    .then((res) => res.json())
    .then((data) => createUi(data));
}

function createUi(data) {
  cocktailsCenter.innerHTML = "";

  if (data.drinks) {
    data.drinks.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
        <div class="card">
          <img src="${item.strDrinkThumb}" alt="${item.strDrink}">
          <h2>${item.strDrink}</h2>
          <p>${item.strGlass}</p>
          <span>${item.strAlcoholic}</span>
        </div>`;
      cocktailsCenter.appendChild(div);
    });
  } else {
    cocktailsCenter.innerHTML = "<p>Ma'lumot topilmadi.</p>";
  }
}

function searchCocktails() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  getData(searchTerm);
}

searchInput.addEventListener("keyup", searchCocktails);

getData("");
