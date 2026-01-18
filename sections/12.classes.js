(function () {
    var Car = /** @class */ (function () {
        function Car(brand, doors, type) {
            this.brand = brand;
            this.doors = doors;
            this.fuelTank = 0;
            this.isRunning = false;
            this.type = type;
            this.creationDate = "".concat(new Date().getTime());
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
        Car.prototype.fillTank = function (fuel) {
            if (fuel <= 0) {
                console.log('La gasolina ingresada debe ser mayor a 0');
                return;
            }
            if (this.fuelTank == 100) {
                console.log('El tanque ya está lleno, no requiere gasolina');
                return;
            }
            var gas = this.fuelTank + fuel;
            this.fuelTank = (gas > 100) ? 100 : gas;
        };
        Car.className = 'Car';
        return Car;
    }());
    var myMazda = new Car('Mazda', 4, 'Sedan');
    console.log(myMazda);
    myMazda.fillTank(20);
    myMazda.fillTank(40);
    myMazda.turnOn();
    console.log(myMazda);
    console.log(Car.className);
})();
