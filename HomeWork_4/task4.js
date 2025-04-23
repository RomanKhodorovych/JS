// *************task 1*************
/*
function calcRectangleArea(width, height) {

  try {
    if (isNaN(width) || isNaN(height)) {
      throw new Error("Invalid input. Please use numeric values.");
    }
    else if (width < 0 || height < 0) {
        throw new Error("Width and height must be non-negative.");
    }
    else if (width === 0 || height === 0) {
        throw new Error("Width and height must be non-zero.");
    }
    else { return area = width * height;}}
  catch (error) {
    console.error(error.message);
  };
}

let randomArray = [1, 22, "3", null, 4,76577457,"5", -6, 7, "8", 9, 10, "11", "test", 13, 14];
let randomWidth = Math.floor(Math.random() * randomArray.length);
let randomHeight= Math.floor(Math.random() * randomArray.length);
console.log(calcRectangleArea(randomArray[randomWidth], randomArray[randomHeight]));

// *************task 2*************
function checkAge(){
    try {
age = prompt("Enter your age");
grantAccess = false;
if (age === "") {
        throw new Error("The field is empty! Please enter your age");
    }
    else if (isNaN(age)) {
        throw new Error("Invalid input. Please use numeric values.");
    }
    else if (age <14) {
        throw new Error("You are too young to access this content.");
    }
    else grantAccess = true;}
catch (error) {
        console.error(error.message);
        console.error(error.name);
    }
    finally{
        console.log("Access granted: " + grantAccess);
    }
}

checkAge();
*/
// *************task 3*************
class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
    }
}
function showMonthName(month){
    try{
        if (month < 1 || month > 12) {
            throw new MonthException("Incorrect month number");
        }
        let monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[month - 1];
    }
   
    catch (error) {
        console.error(error.message);
        console.error(error.name);

    }
}

console.log(showMonthName(5)); 
console.log(showMonthName(14)); 

// *************task 4*************
function showUser(id){
    
}