(() => {
    /**
     * Crear una función que reciba un arreglo como argumento, la función debe de retornar un nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
     * Ejemplo:
     * let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
     * let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
     * console.log( herosWithLetterS ); // She Hulk, Spiderman
     */
    function heroesThatStartsWith(heroes : string [], firstLetter: string) : string[] {
        let newArray: string [] = [];
        for(let i = 0; i < heroes.length; i++){
            const hero = heroes[i].toLowerCase();
            if(hero[0] == firstLetter.toLowerCase()){
                newArray.push(hero);
            }
        }
        return newArray;
    }
    let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
    let herosWithLetterS = heroesThatStartsWith( heroes, 's' );
    let herosWithLetterD = heroesThatStartsWith( heroes, 'D' );
    let herosWithLetterC = heroesThatStartsWith( heroes, 'c' );
    let herosWithLetterA = heroesThatStartsWith( heroes, 'A' );
    console.log( herosWithLetterS );
    console.log( herosWithLetterD );
    console.log( herosWithLetterC );
    console.log( herosWithLetterA );
})();