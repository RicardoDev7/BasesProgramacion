(function () {
    /**
     * Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
     * max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
     * trabajar así
     * let maxValue = max( 5, 2, 6);
     * console.log( maxValue ); // 6
     */
    function max(number1, number2, number3) {
        var numbers = [number1, number2, number3];
        numbers = numbers.sort(compareNumbers);
        return numbers[numbers.length - 1];
    }
    function compareNumbers(number1, number2) {
        return number1 - number2;
    }
    var maxValue = max(5, 2, 6);
    console.log(maxValue);
})();
