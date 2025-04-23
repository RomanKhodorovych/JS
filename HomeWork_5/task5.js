// *************task 1*************
/*
function propsCount(currentObject){
return  Object.keys(currentObject).length;    
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};
console.log(propsCount(mentor)); 

// *************task 2*************
function showProps(obj){
    return  Object.keys(obj);   
}

function showValues(obj){
    return  Object.values(obj);   
}

console.log(showProps(mentor)); 
console.log(showValues(mentor)); 

// *************task 3*************
class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName(middleName){
        return `${this.name} ${middleName} ${this.surname}`;
    }
    showCourse(){
        return new Date().getFullYear() - this.year;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse()); 
*/
// *************task 4*************
class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate , workingDays ){
        this.fullName = fullName;
        this.dayRate  = dayRate ;
        this.workingDays  = workingDays ;
    }
    showSalary(){
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience(){
        return this.dayRate * this.workingDays * this.#experience;
    }
    get experience(){
        return this.#experience;
    }
    set experience(value){
        if (typeof value !== "number") {
            console.log("Experience should be a number");
            return;
        }
        if (isNaN(value)) {
            console.log("Experience should be a number");
            return;
        }
        if (!isFinite(value)) {
            console.log("Experience should be a number");
            return;
        }
        this.#experience = value;
    }

}


function sortedWorkers(workers) {
    return workers
      .slice()
      .sort((a, b) => a.experience - b.experience)
      .map(worker => `${worker.fullName}: ${worker.showSalaryWithExperience()}`);
  }

    let worker1 = new Worker("John Johnson", 20, 23);
    let worker2 = new Worker("Tom Tomson", 48, 22);
    let worker3 = new Worker("Andy Ander", 29, 23);
    worker1.experience = 3.5;
    worker2.experience = 1.5;
    worker3.experience = 1.0;
    
console.log("Sorted workers by experience:");
console.log(sortedWorkers([worker1, worker2, worker3]));
// */
// *************task 5*************
