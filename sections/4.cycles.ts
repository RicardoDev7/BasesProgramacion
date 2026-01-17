(() => {
    //! Ciclo While
    let gasTank: number = 50;

    while(gasTank >= 0){
        console.log(`El tanque tiene ${gasTank} litros de gasolina`);
        gasTank --;
    }
    console.log('El tanque está vacío');
})();