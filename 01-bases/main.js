"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class XMen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor XMen llamado');
        }
        getFullnameFromXMen() {
            console.log(super.getFullname());
        }
    }
    const wolverine = new XMen('Wolverine', 'Logan', true);
    console.log(wolverine);
    wolverine.getFullnameFromXMen();
})();
//# sourceMappingURL=main.js.map