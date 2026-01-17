(function () {
    var employees = ['Ricardo', 'Rosa', 'Alvaro'];
    var salaries = [5500, 3500, 1000];
    for (var index = 0; index < employees.length; index++) {
        console.log("".concat(employees[index], " tiene un salario de ").concat(salaries[index], " USD"));
    }
})();
