class Course{
    courseId : number | string;
    courseName : string;
    constructor(courseId:number|string,courseName:string){
        this.courseId=courseId;
        this.courseName=courseName;
    }
     courseDetails(){
       console.log(this.courseId);
       console.log(this.courseName);
    }
 }
class Employee extends Course{
    empId ?: number | string ;
    empName : string;
    empDesignation: string;
    constructor(courseId:number|string,courseName:string,empId : number | string,empName:string,empDesignation:string){
        super(courseId,courseName);
        this.empId=empId;
        this.empName=empName;
        this.empDesignation=empDesignation;
    }
    employeeDetails(){
        console.log(this.empId);
        console.log(this.empName);
        console.log(this.empDesignation);
    }

}

class Admin extends Employee{
    adminId ?: number | string ;
    adminName : string;
    constructor(courseId:number|string,courseName:string,empId : number | string,empName:string,empDesignation:string,adminId : number|string,adminName:string){
        super(courseId,courseName,empId,empName,empDesignation);
        this.adminId=adminId;
        this.adminName=adminName;
    }
    adminDetails(){
        console.log(this.adminId);
        console.log(this.adminName);
    }

}
let obj = new Admin("101","BCA","E102","Raju","Developer","A101","Ravi")
obj.adminDetails();
obj.courseDetails();
obj.employeeDetails();