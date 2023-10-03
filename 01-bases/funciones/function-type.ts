(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola, ${name}`;
  const saveTheWorld = () => 'El mundo está salvado!';

  let myFunction: Function;

  /**
   * Tipado myFunction addNumbers: myFunction = (a: number, b: number) => number;
   * Tipado myFunction greet: myFunction = (a: string) => string;
   * Tipado myFunction saveTheWorld: myFunction = () => string;
   */

  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  myFunction = greet;
  console.log(greet('Max'));

  myFunction = saveTheWorld;
  console.log(saveTheWorld());
})();
