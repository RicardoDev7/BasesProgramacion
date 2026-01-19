(function () {
    /**
     *  Convertir de Libras a Kilogramos. ( 1 libra = 0.453592 Kilogramos )
     * Ejemplo: 150 libras = 68.0388 kilogramos
     */
    var pound = 150;
    var convertRate = 0.453592;
    var kg = pound * convertRate;
    console.log("".concat(pound, " libras = ").concat(kg, " kilogramos"));
})();
