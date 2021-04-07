class Person {
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    get getname() {
        return this.name;
    }
    set setName(newName) {
        this.name = newName;
    };
    get getDateOfBirth() {
        return this.dateOfBirth;
    };
    set setDateOfBirth(newDate) {
        this.dateOfBirth = newDate;
    };
    get toString() {
        var mon = parseInt(this.dateOfBirth.getMonth()) + 1;
        console.log(`{Name:${this.getname} ,DateOfBirth: ${this.dateOfBirth.getFullYear()}-${mon}-${this.dateOfBirth.getDate()} }`);
    };
}

class Employee extends Person {
    constructor(name, dateOfBirth,Salary,hireDate) {
        super(name, dateOfBirth);
        this.Salary = Salary;
        this.hireDate = hireDate;
    }
     doJob(jobTitle) {
        const formattedSalary=new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(this.Salary);
        console.log(`{${this.getname} is a ${jobTitle} who earns ${formattedSalary} `);
    };

};
export {Person,Employee} ;