var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    return AccountingDepartment;
}(Department));
var MathsDepartment = (function (_super) {
    __extends(MathsDepartment, _super);
    function MathsDepartment() {
        return _super.call(this, "Geometry and Trigonometry") || this;
    }
    MathsDepartment.prototype.printMeeting = function () {
        console.log("The maths Department meets Monday to Friday  at 10am to 1pm .");
    };
    return MathsDepartment;
}(Department));
var EnglishDepartment = (function (_super) {
    __extends(EnglishDepartment, _super);
    function EnglishDepartment() {
        return _super.call(this, "Grammer and vocabulary") || this;
    }
    EnglishDepartment.prototype.printMeeting = function () {
        console.log("The english Department meets Monday,wedesday, and  Friday  at 1am to 3pm .");
    };
    return EnglishDepartment;
}(Department));
var department;
var math;
var english;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
math = new MathsDepartment();
math.printName();
math.printMeeting();
english = new EnglishDepartment();
english.printName();
english.printMeeting();
