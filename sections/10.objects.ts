(() => {
    let person = {
        name: 'Ricardo',
        age: 31,
        isActive: true,
        hobbies: ['Soccer', 'Basketball'],
        toString() : void {
            let message = `Name: ${this.name} - Age: ${this.age} - Activo: ${this.isActive ? 'Si' : 'No'}`;
            console.log(message);
        }
    }

    /*
    console.log(person);
    console.log(person.name);
    console.log(person.name.length);
    console.log(person.name.toUpperCase());
    console.log(person.hobbies[0]);
    person.toString();
    */


    let car = {
        brand: 'Mercedes Benz',
        seats: 4,
        color: 'Black',
        year: 2020
    }

    let smartTv = {
        brand: 'LG',
        size: 70,
        color: 'Black',
        guarantee: 2
    }

    let video = {
        creationDate: '2026-01-15',
        realeaseDate: '2026-01-07',
        durationSeconds: 5600,
        creator: 'Ricardo Metzger',
        title: 'Clases de programación'
    }

    console.log(car);
    console.log(smartTv);
    console.log(video);
})();