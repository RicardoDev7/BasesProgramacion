(() => {

    interface Person {
        name: string,
        age: number,
        isActive?: boolean
    }
    let ricardo : Person = {
        name: 'Ricardo',
        age: 31
    }

    let rosa : Person = {
        name: 'Rosa',
        age: 30
    }

    let alvaro : Person = {
        name: 'Alvaro',
        age: 2
    }

    let people : Person[] = [ricardo, rosa, alvaro];
    for (let index = 0; index < people.length; index++) {
        console.log(people[index]);
    }
})();