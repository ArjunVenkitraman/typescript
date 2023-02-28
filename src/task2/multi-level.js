var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course = /** @class */ (function () {
    function Course(courseId, courseName) {
        this.courseId = courseId;
        this.courseName = courseName;
    }
    Course.prototype.courseDetails = function () {
        console.log(this.courseId);
        console.log(this.courseName);
    };
    return Course;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(courseId, courseName, empId, empName, empDesignation) {
        var _this = _super.call(this, courseId, courseName) || this;
        _this.empId = empId;
        _this.empName = empName;
        _this.empDesignation = empDesignation;
        return _this;
    }
    Employee.prototype.employeeDetails = function () {
        console.log(this.empId);
        console.log(this.empName);
        console.log(this.empDesignation);
    };
    return Employee;
}(Course));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(courseId, courseName, empId, empName, empDesignation, adminId, adminName) {
        var _this = _super.call(this, courseId, courseName, empId, empName, empDesignation) || this;
        _this.adminId = adminId;
        _this.adminName = adminName;
        return _this;
    }
    Admin.prototype.adminDetails = function () {
        console.log(this.adminId);
        console.log(this.adminName);
    };
    return Admin;
}(Employee));
var obj = new Admin("101", "BCA", "E102", "Raju", "Developer", "A101", "Ravi");
obj.adminDetails();
obj.courseDetails();
obj.employeeDetails();
