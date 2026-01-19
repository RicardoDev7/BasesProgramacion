(function () {
    /**
     * Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas )
     * Ejemplo: 10 kilómetros = 6.21 millas
     */
    var kilometers = 10;
    var convertRate = 0.62;
    var miles = kilometers * convertRate;
    console.log("".concat(kilometers, " kil\u00F3metros = ").concat(miles, " millas"));
})();
