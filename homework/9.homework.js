(function () {
    /**
     * Crear una función que reciba un arreglo como argumento, la función debe de retornar un nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
     * Ejemplo:
     * let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
     * let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
     * console.log( herosWithLetterS ); // She Hulk, Spiderman
     */
    function heroesThatStartsWith(heroes, firstLetter) {
        var newArray = [];
        for (var i = 0; i < heroes.length; i++) {
            var hero = heroes[i].toLowerCase();
            if (hero[0] == firstLetter.toLowerCase()) {
                newArray.push(hero);
            }
        }
        return newArray;
    }
    var heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
    var herosWithLetterS = heroesThatStartsWith(heroes, 's');
    var herosWithLetterD = heroesThatStartsWith(heroes, 'D');
    var herosWithLetterC = heroesThatStartsWith(heroes, 'c');
    var herosWithLetterA = heroesThatStartsWith(heroes, 'A');
    console.log(herosWithLetterS);
    console.log(herosWithLetterD);
    console.log(herosWithLetterC);
    console.log(herosWithLetterA);
})();
