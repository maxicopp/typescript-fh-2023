(() => {
  let avengers: number = 10;
  console.log(avengers);
  const villians = 20;

  if (avengers < villians) {
    console.log('Avengers are stronger than Villians');
  } else {
    console.log('Avengers are not stronger than Villians');
  }

  avengers = Number('55A');
  console.log({ avengers });
})();
