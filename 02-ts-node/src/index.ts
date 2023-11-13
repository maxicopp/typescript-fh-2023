import { genericFunction, genericFunctionArrow } from './generics/generics';

// printObject({ name: 'Tony', age: 45 });
// printObject([1, 2, 3, 4, 5]);
// printObject(10);
// printObject(new Date());
// printObject('Hello');

const name: string = 'Max';

console.log(genericFunction(3.141618).toFixed(2));
console.log(genericFunction(name).toUpperCase());
console.log(genericFunction([1, 2, 3, 4, 5]).find((n) => n > 2));
console.log(genericFunctionArrow(3.141618).toFixed(2));
