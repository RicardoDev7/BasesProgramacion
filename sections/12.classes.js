(function () {
    var Car = /** @class */ (function () {
        function Car(brand, doors, fuelTank, type) {
            this.brand = brand;
            this.doors = doors;
            this.fuelTank = fuelTank;
            this.isRunning = false;
            this.type = type;
            this.creationDate = new Date().getDate();
        }
        return Car;
    }());
    var myMazda = new Car('Mazda', 4, 100, 'Sedan');
    console.log(myMazda);
})();
