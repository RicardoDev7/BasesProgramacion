(() => {
    /**
     *  Dado el siguiente arreglo: [1, 6, 8, 4, 2, 7, 10, 3, 5 ]
     * Haga una impresión en consola así
     * 1 es un número impar
     * 2 es un número par
     * ...
     */
    let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5];
    numbers = numbers.sort(compareNumbers);
    for(let i = 0; i < numbers.length; i++){
        const value = numbers[i];
        value % 2 == 0 ? console.log(`${value} es par`) : console.log(`${value} es impar`);
    }

    function compareNumbers(number1: number, number2: number) : number{
        return number1 - number2;
    }
})();