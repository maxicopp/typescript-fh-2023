"use strict";
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const superman = fullName('Clark', 'Kent', 'Superman');
    console.log({ superman });
})();
