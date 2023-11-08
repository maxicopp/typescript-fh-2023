import powers, { Power } from '../data/powers';

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power(): string {
    return (
      powers.find((power: Power) => power.id === this.powerId)?.desc ||
      'Not found'
    );
  }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}

export const PI = 3.14;
export const myName = 'Max';
