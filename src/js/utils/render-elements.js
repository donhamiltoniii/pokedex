import { capitalize } from "./format";

const userInputButton = document.querySelector(".user-input__button");
const userInputField = document.querySelector(".user-input__field");

function _populatePokemonAvatar(imageSrc) {
  document.querySelector(".main-info__avatar").src = imageSrc;
}

function _populatePokemonHeight(height) {
  document.querySelector(".pokemon-height").textContent = height;
}

function _populatePokemonId(id) {
  document.querySelector(".pokemon-id").textContent = id;
}

function _populatePokeMonMoves(moves) {
  document.querySelector(".pokemon-moves__list").innerHTML = moves
    .slice(0, 10)
    .map(move => move.move.name)
    .reduce(
      (previous, current) =>
        (previous += `<li class="pokemon-moves__item">${capitalize(
          current
        )}</li>`),
      ""
    );
}

function _populatePokemonName(name) {
  document.querySelector(".pokemon-header__pokemon-name").textContent = name;
}

function _populatePokemonTypes(types) {
  document.querySelector(".pokemon-types").innerHTML = types
    .map(type => type.type.name)
    .reduce((previous, current) => {
      if (previous === "") return capitalize(current);
      return `${previous} / ${capitalize(current)}`;
    }, "");
}

function pokemon(pokemon) {
  _populatePokemonAvatar(pokemon.sprites.front_default);
  _populatePokemonName(capitalize(pokemon.name));
  _populatePokemonId(pokemon.id);
  _populatePokemonHeight(pokemon.height);
  _populatePokemonTypes(pokemon.types);
  _populatePokeMonMoves(pokemon.moves);
}

export default {
  userInputButton,
  userInputField,
  pokemon
};
