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
    console.log(person);
    console.log(person.name);
    console.log(person.name.length);
    console.log(person.name.toUpperCase());
    console.log(person.hobbies[0]);
    person.toString();
})();
