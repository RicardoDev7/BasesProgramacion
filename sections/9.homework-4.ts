(() => {
    let employees: string[] = ['Ricardo', 'Rosa', 'Alvaro'];
    let salaries: number[] = [5500, 3500, 1000];
    for (let index = 0; index < employees.length; index++) {
        console.log(`${employees[index]} tiene un salario de ${salaries[index]} USD`);
    }
})();