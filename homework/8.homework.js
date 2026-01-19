(function () {
    /**
     * Crear una función que reciba como argumento un arreglo, la función debe de retornar el
     * nombre que tenga más letras del arreglo, y debe de trabajar así:
     * let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
     * let hero = largestNameOfArray( heroes );
     * console.log( hero ); // Profesor Charles Xavier
     **/
    function largestNameOfArray(heroes) {
        var max = 0;
        var heroName = '';
        for (var i = 0; i < heroes.length; i++) {
            var hero_1 = heroes[i];
            var length_1 = hero_1.length;
            if (length_1 > max) {
                max = length_1;
                heroName = hero_1;
            }
        }
        return heroName;
    }
    var heroes = ['Deadpool', 'Ciclope', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafv', 'Magneto', 'Profesor Charles Xavier', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'];
    var hero = largestNameOfArray(heroes);
    console.log(hero);
})();
