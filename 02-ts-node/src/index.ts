import { getPokemon } from './generics/get-pokemon';

getPokemon(2)
  .then((pokemon) => {
    console.log(pokemon);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Finally');
  });
