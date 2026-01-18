(() => {
    class Car {
        brand: string;
        doors: number;
        fuelTank: number;
        isRunning: boolean;
        type: string;
        creationDate: string;
        constructor(brand: string, doors: number, type: string){
            this.brand = brand;
            this.doors = doors;
            this.fuelTank = 0;
            this.isRunning = false;
            this.type = type;
            this.creationDate = `${new Date().getDate()}-${new Date().getUTCMonth() + 1}-${new Date().getFullYear()}`
        }

        turnOn() : void {
            if(this.isRunning){
                console.log('El carro ya está encendido. Se daño el motor');
                return;
            }
            if(this.fuelTank <= 0){
                console.log('El carro no tiene gasolina');
                return;
            }

            this.isRunning = true;
            console.log('El carro se encendió');
        }
    }

    let myMazda = new Car('Mazda', 4, 'Sedan');
    console.log(myMazda);
    myMazda.turnOn();
    console.log(myMazda);
})();