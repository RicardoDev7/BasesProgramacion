(() => {
    function greet(name: string = 'No name') : void {
        console.log(`Hola ${name}`);
    }

    function addTwoNumbers(number1: number, number2: number) : number {
        return number1 + number2;
    }

    greet('Ricardo');
    greet();
    greet('Rosa Maria');
    greet('Alvaro Fabrizzio');

    let total : number = addTwoNumbers(10, 24);
    console.log({total});
})();