(function () {
    var ricardo = {
        name: 'Ricardo',
        age: 31
    };
    var rosa = {
        name: 'Rosa',
        age: 30
    };
    var alvaro = {
        name: 'Alvaro',
        age: 2
    };
    var people = [ricardo, rosa, alvaro];
    for (var index = 0; index < people.length; index++) {
        console.log(people[index]);
    }
})();
