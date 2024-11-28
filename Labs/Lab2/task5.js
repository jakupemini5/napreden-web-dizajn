class Car {
    constructor(name, milesPerGallon) {
      this.name = name;
      this.milesPerGallon = milesPerGallon;
      this.tank = 0;
      this.odometer = 0;
    }

    fill(gallons) {
        this.tank += gallons;
    }

    drive(miles) {
        let maxDrivingMiles = this.tank * this.milesPerGallon
        if(maxDrivingMiles < miles) {
            this.odometer = maxDrivingMiles;
            this.tank = 0;
            return `Vehicle ran out of gas after driving ${maxDrivingMiles} miles. Vehicle now has ${this.odometer} miles on the odometer and ${this.tank} gallons of gas.`;
        }
        else {
            this.odometer = miles;
            this.tank -= miles / this.milesPerGallon;
            return `Vehicle has ${miles} miles and ${this.tank} gallons left.`;
        }

    }
  } 