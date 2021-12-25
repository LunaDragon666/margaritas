const title = document.querySelector("title").innerHTML = "Margarita | Detail";
const drinkContainer = document.querySelector(".drink-detail");

const query = document.location.search; 
const params = new URLSearchParams(query);

const id = params.get("id");
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;

async function fetchCocktail() {
    try {
        const response = await fetch(url);
        const drink = await response.json();

        document.querySelector(".loading").innerHTML = "";
        createHtml(drink);  
    }
    catch(error) {
            drinkContainer.innerHTML = theError("Whoops! The margarita data seems to be spilt away.. &#128530;");
    } 
}

function createHtml(data) {
        drinkContainer.innerHTML = `
        <h1 class="drink">${data.drinks[0].strDrink}</h1>
                <p class="id"><span class="bold_txt">id no.</span> ${data.drinks[0].idDrink}</p> 
                        <img class="drinkimg" src="${data.drinks[0].strDrinkThumb}" alt="${data.drinks[0].strDrink}" />
        `;

}

fetchCocktail();