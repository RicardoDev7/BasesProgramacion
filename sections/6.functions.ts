(() => {
    function greet(name: string = 'No name') : void {
        console.log(`Hola ${name}`);
    }

    greet('Ricardo');
    greet();
    greet('Rosa Maria');
    greet('Alvaro Fabrizzio');
})();