(() => {
    /**
     * Dado el siguiente arreglo: [1, 6, 8, 4, 2, 7, 10, 3, 5 ]
     * Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?
     */
    let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5];
    let highNumber = 0;
    for (let index = 0; index < numbers.length; index++) {
        const value = numbers[index];
        if(value > highNumber) highNumber = value;
    }
    console.log(`El número mayor del arreglo es ${highNumber}`);
})();