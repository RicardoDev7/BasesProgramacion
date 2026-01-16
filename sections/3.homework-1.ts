/**
 * Realizar programa que muestre la nota de la siguiente manera
 * A >= 90
 * B >= 80
 * C >= 70
 * D >= 60
 * F < 60
 */

(() => {
    let grade: number = 81;
    if(grade >= 90) console.log('La nota es A');
    else if (grade >= 80) console.log('La nota es B');
    else if (grade >= 70) console.log('La nota es C');
    else if (grade >= 60) console.log('La nota es D');
    else console.log('La nota es F');
})();