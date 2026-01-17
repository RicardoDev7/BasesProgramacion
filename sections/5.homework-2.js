(function () {
    var base = 10;
    var limit = 50;
    var init = 1;
    console.log('Ciclo For');
    for (; init <= limit; init++) {
        console.log("".concat(base, " x ").concat(init, " = ").concat(base * init));
    }
    console.log('Ciclo Do-While');
    init = 1;
    do {
        console.log("".concat(base, " x ").concat(init, " = ").concat(base * init));
        init++;
    } while (init <= limit);
    console.log('Ciclo While');
    init = 1;
    while (init <= limit) {
        console.log("".concat(base, " x ").concat(init, " = ").concat(base * init));
        init++;
    }
})();
