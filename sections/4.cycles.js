(function () {
    //! Ciclo While
    var gasTank = 50;
    while (gasTank >= 0) {
        console.log("El tanque tiene ".concat(gasTank, " litros de gasolina"));
        gasTank--;
    }
    console.log('El tanque está vacío');
})();
