import {Person,Employee} from './person.js';

let persons = [
    new Person('Ana Smith',new Date(1998,11,15)),
    new  Person('Bob Jone',new Date(1945,10,16)),
    new Person('Carlos Slim Helu',new Date(1976,8,24))
  ];


for (const key of persons) {
    key.toString;
   // key._name="";
   // console.log(key._name);
     
}
//Jim Hanson, set their salary to $245.990.00 
const emp=new Employee('Jim Hanson','',parseFloat(245990.00),'Software Engineer');
emp.doJob('Software Engineer');
console.log($('<div>'));