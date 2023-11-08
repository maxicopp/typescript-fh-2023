"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3;
    };
    Validations.validateDate = (date) => {
        return !isNaN(date.valueOf());
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Max'));
//# sourceMappingURL=main.js.map