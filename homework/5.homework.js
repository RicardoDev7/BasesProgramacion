(function () {
    /**
     *  Dado el siguiente arreglo: [1, 6, 8, 4, 2, 7, 10, 3, 5 ]
     * Haga una impresión en consola así
     * 1 es un número impar
     * 2 es un número par
     * ...
     */
    var numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];
    numbers = numbers.sort(compareNumbers);
    for (var i = 0; i < numbers.length; i++) {
        var value = numbers[i];
        value % 2 == 0 ? console.log("".concat(value, " es par")) : console.log("".concat(value, " es impar"));
    }
    function compareNumbers(number1, number2) {
        return number1 - number2;
    }
})();
