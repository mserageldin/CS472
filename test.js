const count = (
    function () {

        let counter = 0;
        const getCounter = function () {
            return counter;
        }
        const add = function () {
            counter += 1;

        }
        const reset = function () {
            counter = 0;
        }
        return {
            getCounter: getCounter,
            add: add,
            reset: reset

        }



    })();

/*count.add();
console.log(count.getCounter());
count.add();
count.add();
console.log(count.getCounter()); */

const counter = (
    function () {

        let counter = 0;
        const getCounter = function () {
            return counter;
        }
        const add = function () {
            counter += 1;

        }
        const reset = function () {
            counter = 0;
        }
        const make_adder = function (n) {
            counter = n;
        }
        return {
            getCounter: getCounter,
            add: add,
            reset: reset,
            make_adder: make_adder
        }



    })();
/*const make_adder=
    function () {

        let counter =0;
        const getCounter=function () {
            return counter;
        }
       
        const add=function (n) {
            counter=n;
        }
        return{
            getCounter:getCounter,
            add:add
        }


        
};*/
/*const make_adder= (n)=> {
    let count=n;
    const add =(n)=> count=n;
    const getCounter =()=> count;
    return{
        getCounter:getCounter,
        add:add
    }
}*/
const make_adder = (n) => {
    let count = 0;
    return () => {
        count += n;
        console.log(count);
    };
};
const make_adder2 = function(x){
    let count=0;
    return function(){
        count+=x;
        console.log(count);
        return function(){ return count;}
    }
};
const add5 = make_adder(5);
const add6 = make_adder2(6);
const add7 = make_adder(7);
add5();
//add5();
add6();
// add7();

const Employee = (function () {
    let name = "";
    let age = 0;
    let salary = 0;
    //public 
    function setname(newName) {
        name = newName;

    }
    function setAge(newAge) {
        age = newAge;

    }
    function setSalary(newSalary) {
        salary = newSalary;

    }
    //private
    function getSalary() {
        return salary;

    }
    function getAge() {
        return age;

    }
    function getName() {
        return name;

    }
    //public
    function increaseSalary(percentage) {

        salary += salary * percentage;
    }
    function incrementAge() {

        return getAge();
    }

    return {
        setname: function (newName) {
            setname(newName);
        },
        setAge: function (newAge) {
            setAge(newAge);
        },
        setSalary: function (newSal) {
            setSalary(newSal);
        },
        increaseSalary: function (perc) {
            increaseSalary(perc);
        },
        incrementAge: function () {
            return getAge();
        }
    }



})();


Employee.addrss="test add";
Employee.setAddress = function (newAdd) {
    
    
        this.addrss = newAdd;
        
    };
Employee.getAddress =
     function() {
        return this.addrss;
    };/*
    return {
      
        
        setAddress: function (newaddr) {
            setAddress(newaddr);
        },
        getAddress: function () {
            return getAddress();
        }
    }*/
//};
Employee.setname("Mohamed Serag");
Employee.setAge(36);
Employee.setSalary(100000);
console.log(Employee.incrementAge());
Employee.setAddress("Sweet Alexandria");
console.log(Employee.getAddress());
