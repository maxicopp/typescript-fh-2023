import { genericFunction, printObject } from './generics/generics';

// printObject({ name: 'Tony', age: 45 });
// printObject([1, 2, 3, 4, 5]);
// printObject(10);
// printObject(new Date());
// printObject('Hello');

console.log(genericFunction(3.141618).toFixed(2));
console.log(genericFunction('Hello World').toFixed(2));
