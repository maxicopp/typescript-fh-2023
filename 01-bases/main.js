"use strict";
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    };
    const capAmerica = {
        name: 'Capitán América',
        weapon: 'Shield',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };
    const avengers = [ironman, capAmerica, thor];
    for (const avenger of avengers) {
        console.log({ avenger });
    }
})();
//# sourceMappingURL=main.js.map