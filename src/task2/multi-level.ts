class Course{
    courseId : number | string;
    courseName : string;
    constructor(courseId:number|string,courseName:string){
        this.courseId=courseId;
        this.courseName=courseName;
    }
     courseDetails(){
       console.log("Course id is : "+this.courseId);
       console.log("Course name is : "+this.courseName);
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
        console.log("Employee ID is :"+this.empId);
        console.log("Employee name is : "+this.empName);
        console.log("Employee Designation is : "+this.empDesignation);
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
        obj.courseDetails();
        obj.employeeDetails();
        console.log("AdminId is : "+this.adminId);
        console.log("Admin name is : "+this.adminName);
    }

}
let obj = new Admin("101","BCA","E102","Raju","Developer","A101","Ravi")
obj.adminDetails();
