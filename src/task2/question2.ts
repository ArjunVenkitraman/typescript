
abstract class ElectricityBill {
    public rate?: number;
    public units: number;
    constructor(units: number, rate?: number) {
        this.rate = rate;
        this.units = units;
    }
    public abstract billDetails(): number;
}
class Domestic extends ElectricityBill {
    constructor(units: number) {
        super(units)
    }
    public billDetails(): any {
        console.log("Domestic Electricity Bill ")
        console.log(`Total units:${this.units}`)
        console.log("total Rate = " + (5 * this.units))

    }
}
class Commerical extends ElectricityBill {
    constructor(units: number) {
        super(units)
    }
    public billDetails(): any {
        console.log("\nCommercial Electricity Bill ");
        console.log(`Total units:${this.units}`)
        console.log("Rate = " + (10 * this.units))
    }

}
let c = new Domestic(100);
let g = new Commerical(200);
c.billDetails();
g.billDetails();