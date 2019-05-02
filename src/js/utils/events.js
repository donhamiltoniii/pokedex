import render from "./render-elements";
import api from "./api";

export function renderNewPokemonOnUserInputButtonClick() {
  render.userInputButton.addEventListener("click", () => {
    api.getRequest(
      "https://pokeapi.co/api/v2/pokemon/" + render.userInputField.value,
      pokemon => {
        render.pokemon(pokemon);
      }
    );
  });
}
