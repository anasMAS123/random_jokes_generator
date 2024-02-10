let searchButton = document.querySelector(".container .button button");
let jokeSpan = document.querySelector(".joke span");
async function randomJokeGenerator() {
  let response = await fetch("https://icanhazdadjoke.com/slack");
  let data = await response.json();
  console.log(data.attachments[0].text);
  jokeSpan.innerHTML = "";
  let newJoke = document.createTextNode(data.attachments[0].text);
  jokeSpan.appendChild(newJoke);
}
searchButton.addEventListener("click", () => {
  randomJokeGenerator();
});
