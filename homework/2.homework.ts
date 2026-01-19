(() => {
    /**
     * Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas )
     * Ejemplo: 10 kilómetros = 6.21 millas
     */
    let kilometers: number = 10;
    let convertRate: number = 0.62;
    let miles: number = kilometers * convertRate;
    console.log(`${kilometers} kilómetros = ${miles} millas`);
})();