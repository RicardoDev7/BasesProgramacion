(() => {
    let peopleNames: string[] = ['Ricardo', 'Rosa', 'Álvaro', 'Martin', 'Maria', 'Fabrizzio'];
    let flowerNames: string[] = [];
    for (let index = 0; index < peopleNames.length; index++) {
        console.log(peopleNames[index]);
    }
    flowerNames.push('Girasol');
    flowerNames.push('Violeta');
    for (let index = 0; index < flowerNames.length; index++) {
        const element = flowerNames[index];
        console.log(element);   
    }
})();