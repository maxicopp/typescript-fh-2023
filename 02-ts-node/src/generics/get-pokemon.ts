import axios from 'axios';

export const getPokemon = async (pokemonId: number) => {
  console.log('Hola Mundo');

  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  console.log(response);
  return 1;
};
