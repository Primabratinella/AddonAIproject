function displayPoem (response) {
    response.preventDefault ();
    
    new Typewriter ("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}
function generatePoem (event) {
    event.preventDefault ();
    
    let instructionsInput = document.querySelector ("#user-instructions");
    let apiKey = "a08f0oc3b4t11e51a8dbab6fef7e5923";
    let prompt = `User instructions: Generate a short, sweet poem in French about ${instructionsInput.value} `;
    let context = "You are a romantic poem expert who loves short poems. Your are going to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow user instructions. Do not include a title.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector ("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);