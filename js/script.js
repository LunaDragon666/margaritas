const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
const margaritaSamples = document.querySelector(".grid");

async function getMargaritas() {

try {
    const response = await fetch(url);
    const data = await response.json();

    document.querySelector(".loading").innerHTML = "";
        
    function getIngredients(drink) {
        let html = "";

        for(let i = 1; i < 16; i++) {
            if(drink[`strMeasure${i}`] && drink[`strIngredient${i}`]) {
            html += `<li class="recipe_list">
                        <b>${drink[`strMeasure${i}`]}</b> 
                            ${drink[`strIngredient${i}`]}
                    </li>
                `;
            }
        }
        return html;
    }

        for (let i = 0; i < data.drinks.length; i++) {
            margaritaSamples.innerHTML += `
            <article class="items">
                <div class="item">
                    <a>
                        <img src="${data.drinks[i].strDrinkThumb}" alt="${data.drinks[i].strDrink}" />
                    </a>
                    <div class="item__heading">
                        <h2>${data.drinks[i].strDrink}</h2>
                    </div>
                    <div class="item__content">
                        ${getIngredients(data.drinks[i])}
                    </div>
                    <div class="item__price">
                        <h3>Instructions:</h3>
                            ${data.drinks[i].strInstructions}
                    </div>
                </div>
            </article>
            `;
        }
        
    } catch (error) {
        margaritaSamples.innerHTML = theError("Whoops! The margarita data seems to be spilt away..");
    } 
}

getMargaritas();