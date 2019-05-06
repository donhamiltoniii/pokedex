console.log("Connected");

const userInput = document.querySelector(".input");
const button = document.querySelector(".getPokemon");

button.addEventListener("click", () => {
  const pokemonId = userInput.value;
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
    .then(res => res.json())
    .then(pokemon => {
      console.log(pokemon);
      document.querySelector(".pokemon-types").textContent = "";

      document.querySelector(".pokemon-header__pokemon-name").textContent =
        pokemon.name;
      document.querySelector(".pokemon-id").textContent = pokemon.id;
      document.querySelector(".pokemon-height").textContent = pokemon.height;
      pokemon.types.forEach(type => {
        document.querySelector(".pokemon-types").textContent +=
          type.type.name + "/";
      });
      // console.log(pokemon.types[0].type.name)
      // console.log(pokemon.types[1].type.name)
    });
});
