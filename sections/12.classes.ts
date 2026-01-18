(() => {
    class Car {
        brand: string;
        doors: number;
        fuelTank: number;
        isRunning: boolean;
        type: string;
        creationDate: number;
        constructor(brand: string, doors: number, fuelTank: number, type: string){
            this.brand = brand;
            this.doors = doors;
            this.fuelTank = fuelTank;
            this.isRunning = false;
            this.type = type;
            this.creationDate = new Date().getDate()
        }
    }

    let myMazda = new Car('Mazda', 4, 100, 'Sedan');
    console.log(myMazda);
})();