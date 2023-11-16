import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// console.log(charmander.savePokemonToDB(4));
charmander.savePokemonToDB(3);
