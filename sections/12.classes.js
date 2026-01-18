(function () {
    var Car = /** @class */ (function () {
        function Car(brand, doors, type) {
            this.brand = brand;
            this.doors = doors;
            this.fuelTank = 0;
            this.isRunning = false;
            this.type = type;
            this.creationDate = "".concat(new Date().getDate(), "-").concat(new Date().getUTCMonth() + 1, "-").concat(new Date().getFullYear());
        }
        Car.prototype.turnOn = function () {
            if (this.isRunning) {
                console.log('El carro ya está encendido. Se daño el motor');
                return;
            }
            if (this.fuelTank <= 0) {
                console.log('El carro no tiene gasolina');
                return;
            }
            this.isRunning = true;
            console.log('El carro se encendió');
        };
        return Car;
    }());
    var myMazda = new Car('Mazda', 4, 'Sedan');
    console.log(myMazda);
    myMazda.turnOn();
    console.log(myMazda);
})();
