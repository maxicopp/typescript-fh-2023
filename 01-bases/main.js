"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client1 = {
        name: 'Max',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Frankfurt',
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Maca',
        age: 23,
        address: {
            id: 120,
            zip: 'KY2 SUD',
            city: 'Toronto',
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
//# sourceMappingURL=main.js.map