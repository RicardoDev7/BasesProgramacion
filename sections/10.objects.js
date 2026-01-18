(function () {
    var person = {
        name: 'Ricardo',
        age: 31,
        isActive: true,
        hobbies: ['Soccer', 'Basketball'],
        toString: function () {
            var message = "Name: ".concat(this.name, " - Age: ").concat(this.age, " - Activo: ").concat(this.isActive ? 'Si' : 'No');
            console.log(message);
        }
    };
    /*
    console.log(person);
    console.log(person.name);
    console.log(person.name.length);
    console.log(person.name.toUpperCase());
    console.log(person.hobbies[0]);
    person.toString();
    */
    var car = {
        brand: 'Mercedes Benz',
        seats: 4,
        color: 'Black',
        year: 2020
    };
    var smartTv = {
        brand: 'LG',
        size: 70,
        color: 'Black',
        guarantee: 2
    };
    var video = {
        creationDate: '2026-01-15',
        realeaseDate: '2026-01-07',
        durationSeconds: 5600,
        creator: 'Ricardo Metzger',
        title: 'Clases de programación'
    };
    console.log(car);
    console.log(smartTv);
    console.log(video);
})();
