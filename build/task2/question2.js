"use strict";
class ElectricityBill {
    constructor(units, rate) {
        this.rate = rate;
        this.units = units;
    }
}
class Domestic extends ElectricityBill {
    constructor(units) {
        super(units);
    }
    billDetails() {
        console.log("Domestic Electricity Bill ");
        console.log(`Total units:${this.units}`);
        console.log("total Rate = " + (5 * this.units));
    }
}
class Commerical extends ElectricityBill {
    constructor(units) {
        super(units);
    }
    billDetails() {
        console.log("\nCommercial Electricity Bill ");
        console.log(`Total units:${this.units}`);
        console.log("Rate = " + (10 * this.units));
    }
}
let c = new Domestic(100);
let g = new Commerical(200);
c.billDetails();
g.billDetails();
