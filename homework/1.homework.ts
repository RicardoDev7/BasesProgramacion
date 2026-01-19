(() => {
    /**
     *  Convertir de Libras a Kilogramos. ( 1 libra = 0.453592 Kilogramos )
     * Ejemplo: 150 libras = 68.0388 kilogramos
     */

    let pound: number = 150;
    let convertRate: number = 0.453592;
    let kg: number = pound * convertRate;
    console.log(`${pound} libras = ${kg} kilogramos`);
})();