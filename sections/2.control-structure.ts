(() => {
    console.log('Inicio del programa');

    let isTired: boolean = true;

    if(isTired) console.log('Estoy cansado, necesito descansar');
    else console.log('No estoy cansado, puedo seguir trabajando');

    let grade: number = 90;

    if(grade >= 60) console.log('El alumno aprobó el curso');
    else if(grade >= 50) console.log('El alumno debe estudiar más');
    else console.log('El alumno reprobo el curso');

    console.log('Fin del programa');
})();