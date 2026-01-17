(function () {
    function greet(name) {
        if (name === void 0) { name = 'No name'; }
        console.log("Hola ".concat(name));
    }
    function addTwoNumbers(number1, number2) {
        return number1 + number2;
    }
    greet('Ricardo');
    greet();
    greet('Rosa Maria');
    greet('Alvaro Fabrizzio');
    var total = addTwoNumbers(10, 24);
    console.log({ total: total });
})();
