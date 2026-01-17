(() => {
    let base = 10;
    let limit = 50;
    let init = 1;

    console.log('Ciclo For');
    for(; init <= limit; init++){
        console.log(`${base} x ${init} = ${base * init}`);
    }

    console.log('Ciclo Do-While');
    init = 1;
    do {
        console.log(`${base} x ${init} = ${base * init}`);
        init++;
    } while (init <= limit);

    console.log('Ciclo While');
    init = 1;
    while (init <= limit) {
        console.log(`${base} x ${init} = ${base * init}`);
        init++;
    }
})();