(function () {
    console.log('Inicio del programa');
    var isTired = true;
    if (isTired)
        console.log('Estoy cansado, necesito descansar');
    else
        console.log('No estoy cansado, puedo seguir trabajando');
    var grade = 90;
    if (grade >= 60)
        console.log('El alumno aprobó el curso');
    else if (grade >= 50)
        console.log('El alumno debe estudiar más');
    else
        console.log('El alumno reprobo el curso');
    var weekDay = 3;
    switch (weekDay) {
        case 1:
            console.log('Lunes');
            break;
        case 2:
            console.log('Martes');
            break;
        case 3:
            console.log('Miércoles');
            break;
        case 4:
            console.log('Jueves');
            break;
        case 5:
            console.log('Viernes');
            break;
        case 6:
            console.log('Sábado');
            break;
        case 7:
            console.log('Domingo');
            break;
        default:
            console.log('Día inválido');
            break;
    }
    console.log('Fin del programa');
})();
