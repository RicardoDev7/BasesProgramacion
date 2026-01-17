(function () {
    function greet(name) {
        if (name === void 0) { name = 'No name'; }
        console.log("Hola ".concat(name));
    }
    greet('Ricardo');
    greet();
    greet('Rosa Maria');
    greet('Alvaro Fabrizzio');
})();
