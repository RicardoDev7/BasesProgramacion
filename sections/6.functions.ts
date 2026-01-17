import { addTwoNumbers, dividedTwoNumbers, sustractTwoNumbers, timesTwoNumbers } from "../helpers/math-helpers";

(() => {

    function greet(name: string = 'No name') : void {
        console.log(`Hola ${name}`);
    }

    greet('Ricardo');
    greet();
    greet('Rosa Maria');
    greet('Alvaro Fabrizzio');

    let add : number = addTwoNumbers(10, 24);
    console.log({add});
    let sustract: number = sustractTwoNumbers(50, 28);
    console.log({sustract});
    let divided: number = dividedTwoNumbers(98, 7);
    console.log({divided});
    let times: number = timesTwoNumbers(6, 9);
    console.log({times});
})();