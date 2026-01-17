"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_helpers_1 = require("../helpers/math-helpers");
(function () {
    function greet(name) {
        if (name === void 0) { name = 'No name'; }
        console.log("Hola ".concat(name));
    }
    greet('Ricardo');
    greet();
    greet('Rosa Maria');
    greet('Alvaro Fabrizzio');
    var add = (0, math_helpers_1.addTwoNumbers)(10, 24);
    console.log({ add: add });
    var sustract = (0, math_helpers_1.sustractTwoNumbers)(50, 28);
    console.log({ sustract: sustract });
    var divided = (0, math_helpers_1.dividedTwoNumbers)(98, 7);
    console.log({ divided: divided });
    var times = (0, math_helpers_1.timesTwoNumbers)(6, 9);
    console.log({ times: times });
})();
