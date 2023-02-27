class Employee {
    emp_id : number | string;
    name : string 
    designation : string
    salary : number
    project ?: string
    constructor(emp_id: number, name: string, designation: string, salary: number, project: string) {
        this.emp_id = emp_id;
        this.name = name;
        this.designation = designation;
        this.salary = salary;
        this.project = project;
    }

    display() {
        let dis = `Employee id ${this.emp_id}\nEmployee Name : ${this.name}\nEmployee Designation : ${this.designation}\nEmployee salary : ${this.salary}\nEmployee Project : ${this.project}\n`
        // console.log(`Employee id : ${this.emp_id}`);
        // console.log(`Employee Name : ${this.name}`);
        // console.log(`Employee Designation : ${this.designation}`)
        // console.log(`Employee salary : ${this.salary}`)
        // console.log(`Employee Project : ${this.project}`)
        console.log(dis)

    }
    
}
let obj = new Employee(101, "Venkit", "Developer", 20000, "HTML");
//console.log(obj.emp_id);
obj.display()