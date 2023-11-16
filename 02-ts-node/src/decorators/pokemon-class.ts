function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const origialMethod = descriptor.value;
    descriptor.value = function (id: number) {
      if (id < 1 || id > 800) {
        return console.error('The id must be between 1 and 800');
      } else {
        return origialMethod.call(this, id);
      }
    };
  };
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
  public publicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon ${id} saved in DB`);
  }
}
