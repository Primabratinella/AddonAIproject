function displayRecipe (response) {
    new Typewriter ("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}
function generateRecipe (event) {
    event.preventDefault ();
    
    let instructionsInput = document.querySelector ("#user-instructions");
    let apiKey = "a08f0oc3b4t11e51a8dbab6fef7e5923";
    let prompt = `User instructions: Generate a one-page Filipino dish recipe about ${instructionsInput.value} `;
    let context = "You are a food enthusiast who likes learning new dishes and loves Filipino food. You are going to generate Filipino food recipes including instructions on how to cook in basic HTML and separate each line with a <br />. Make sure to follow user instructions.  Make sure to show the recipe in one page only. Avoid using quotes at the start and end of the recipe.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class ="generating"> Generating recipe about ${instructionsInput.value}</div>`;

    axios.get(apiURL).then(displayRecipe);
}
let recipeFormElement = document.querySelector ("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);