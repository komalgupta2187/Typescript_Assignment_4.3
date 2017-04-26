abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

}

class MathsDepartment extends Department {

    constructor() {
        super("Geometry and Trigonometry"); 
    }

    printMeeting(): void {
        console.log("The maths Department meets Monday to Friday  at 10am to 1pm .");
    }


}

class EnglishDepartment extends Department{
        constructor(){
        super("Grammer and vocabulary");
}
printMeeting(): void {
        console.log("The english Department meets Monday,wedesday, and  Friday  at 1am to 3pm .");
    }
}


let department: Department;
let math:Department;
let english:Department;

department = new AccountingDepartment();
department.printName();
department.printMeeting();

math = new MathsDepartment();
math.printName();
math.printMeeting();

english = new EnglishDepartment();
english.printName();
english.printMeeting();
