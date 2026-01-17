(function () {
    var peopleNames = ['Ricardo', 'Rosa', 'Álvaro', 'Martin', 'Maria', 'Fabrizzio'];
    var flowerNames = [];
    for (var index = 0; index < peopleNames.length; index++) {
        console.log(peopleNames[index]);
    }
    flowerNames.push('Girasol');
    flowerNames.push('Violeta');
    for (var index = 0; index < flowerNames.length; index++) {
        var element = flowerNames[index];
        console.log(element);
    }
})();
