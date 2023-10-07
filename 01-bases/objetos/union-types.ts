(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = 'Max';
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Iron Man',
    age: 45,
    powers: [1, 2, 3],
  };
  console.log(typeof myCustomVariable);
})();
