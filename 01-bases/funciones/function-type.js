"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola, ${name}`;
    const saveTheWorld = () => 'El mundo está salvado!';
    let myFunction;
    /**
     * Tipado myFunction addNumbers: myFunction = (a: number, b: number) => number;
     * Tipado myFunction greet: myFunction = (a: string) => string;
     * Tipado myFunction saveTheWorld: myFunction = () => string;
     */
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(greet('Max'));
    myFunction = saveTheWorld;
    console.log(saveTheWorld());
})();
