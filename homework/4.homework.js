(function () {
    /**
     * Dado el siguiente arreglo: [1, 6, 8, 4, 2, 7, 10, 3, 5 ]
     * Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?
     */
    var numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];
    var highNumber = 0;
    for (var index = 0; index < numbers.length; index++) {
        var value = numbers[index];
        if (value > highNumber)
            highNumber = value;
    }
    console.log("El n\u00FAmero mayor del arreglo es ".concat(highNumber));
})();
