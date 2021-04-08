export class Person {
    constructor(name, dateOfBirth) {
        this._name = name;
        this._dateOfBirth = dateOfBirth;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    };
    get dateOfBirth() {
        return this._dateOfBirth;
    };
    set dateOfBirth(newDate) {
        this._dateOfBirth = newDate;
    };
    get toString() {
        var mon = parseInt(this.dateOfBirth.getMonth()) + 1;
        console.log(`{Name:${this.name} ,DateOfBirth: ${this.dateOfBirth.getFullYear()}-${mon}-${this.dateOfBirth.getDate()} }`);
    };
}

export class Employee extends Person {
    constructor(name, dateOfBirth,Salary,hireDate) {
        super(name, dateOfBirth);
        this.Salary = Salary;
        this.hireDate = hireDate;
    }
     doJob(jobTitle) {
        const formattedSalary=new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(this.Salary);
        console.log(`{${super.name} is a ${jobTitle} who earns ${formattedSalary} `);
    };

};
//export {Person,Employee} ;