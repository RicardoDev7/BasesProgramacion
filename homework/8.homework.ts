(() => {
   /**
    * Crear una función que reciba como argumento un arreglo, la función debe de retornar el
    * nombre que tenga más letras del arreglo, y debe de trabajar así:  
    * let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
    * let hero = largestNameOfArray( heroes ); 
    * console.log( hero ); // Profesor Charles Xavier 
    **/ 

   function largestNameOfArray(heroes: string[]) : string {
    let max: number = 0;
    let heroName: string = '';
    for(let i = 0; i < heroes.length; i++){
        const hero = heroes[i];
        const length = hero.length;
        if(length > max){
            max = length;
            heroName = hero;
        }
    }
    return heroName;
   }
   let heroes: string[] = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
   let hero : string = largestNameOfArray( heroes ); 
   console.log( hero );
})();