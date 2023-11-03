(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  const addNumbersFunction: addTwoNumbers = (a: number, b: number) => a + b;

  console.log(addNumbersFunction(1, 2));
})();
