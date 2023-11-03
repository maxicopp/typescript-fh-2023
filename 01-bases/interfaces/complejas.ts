(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client1: Client = {
    name: 'Max',
    age: 25,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Frankfurt',
    },
  };

  const client2: Client = {
    name: 'Maca',
    age: 23,
    address: {
      id: 120,
      zip: 'KY2 SUD',
      city: 'Toronto',
    },
  };

  console.log(client1, client2);
})();
