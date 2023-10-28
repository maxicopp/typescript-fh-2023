(() => {
  class Avenger {
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string,
      avgAge: number = 55
    ) {
      Avenger.avgAge = avgAge;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  console.log(antman);
  console.log(Avenger.avgAge);
})();
