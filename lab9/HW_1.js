
//Question One
console.log('Question One');
function person(newname, dateOfBirth) {

    this.name = newname;
    this.dateOfBirth = dateOfBirth;
};
person.prototype.setName = function (newName) { this.name = newName; };
person.prototype.getName = function () { return this.name; };
person.prototype.getPrint = function () {
    console.log('The person’s name is ' + this.getName());
    var mon = parseInt(this.dateOfBirth.getMonth()) + 1;
    console.log(this.getName() + ' was born on ' + this.dateOfBirth.getFullYear() + '-' + mon + '-' + this.dateOfBirth.getDate());
}
const joh = new person('John',new Date(1998, 11, 10));
//joh.setName();
//joh.dateOfBirth = ;
joh.getPrint();
//Question Two
console.log('Question Two');
function Employee (newName, dateOfBirth, Salary, jobtitle) {
    
   
        person.call(this, newName, dateOfBirth);
      
            this.Salary = Salary,
                this.hireDate = new window.Date(),
                this.jobtitle = jobtitle
 
}

Employee.prototype = Object.create(person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.doJob= function () {
   // console.log(this);
     console.log(this.getName() + ' is a ' + this. jobtitle + ' who earns $' + this.Salary);
}
const ann = new Employee('Anna', new Date(1985, 01, 05), 249995.50, 'Programmer');
ann.doJob();
//Question three
console.log('Question three');
function Person() {
    constructor(newname, dateOfBirth)
    {this.name = newname;
    this.dateOfBirth = dateOfBirth;
    }
};
person.prototype.toString = function () {  
    var mon = parseInt(this.dateOfBirth.getMonth()) + 1;
    console.log("{Name="+this.name+",dateOfBirth="+this.dateOfBirth.getFullYear() + '-' + mon + '-' + this.dateOfBirth.getDate()+"}"); };
    const joh2 = new person('John',new Date(1998, 11, 10));
    joh2.toString();