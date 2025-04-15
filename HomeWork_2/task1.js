
// 2.1.1
let x = 1;
let y = 2;
let res1 = (String(x)+ String(y));
console.log(res1); // "12"
console.log(typeof res1); // "string"

// 2.1.2
let res2 = (x!==y) +String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

// 2.1.3
let res3 = (x<y) 
console.log(res3); // true
console.log(typeof res3); // "boolean"

// 2.1.4
let res4 = (x.toExponential / (y-y))
console.log(res4); // NaN
console.log(typeof res4); // "number"

// 2.1.5

// 2.2
let res5 = parseInt(prompt("Введіть парне додатне число кратне семи"));
if (typeof(res5) !== "number" && !isNaN(res5)) { alert("Сталась помилка"); }
console.log("The number is even and positive - "+(res5 > 0 && res5 %2 == 0)); 
console.log("The number is multiple of seven - "+(res5 %7 == 0)); 

// 2.3
let homeWork2 = [];
homeWork2[0] = 173;
homeWork2[1] = "будь який рядок";
homeWork2[2] = true;
homeWork2[3] = null;
alert(`The 'homeWork2' array length is ${homeWork2.length}`);
homeWork2[4] = prompt("Введіть будь якиe значення");
alert(`the "homeWork2" fifth element is "${homeWork2[4]}"`);
homeWork2.shift();
alert(`The homeWork2 array is "${homeWork2.toString()}"`);

// 2.4
let cities = ["Rome", "Lviv", "Warsaw"]; 
alert(`The cities I'd like to visit are "${cities.join("*")}"`);

// 2.5
let age  = parseInt(prompt("Введіть свій вік"));
console.log("age is "+age);
if (typeof(age) == "number" && !isNaN(age)) {
    if (age < 18) {
    alert("Ви ще надто молоді");
        } else {
    alert("Ви досягли повнолітнього віку");
        }
    }
else {alert("Введіть число");}


// 2.6
let sideA = parseInt(prompt("Введіть значення першої сторони трикутника"));
let sideB = parseInt(prompt("Введіть значення другої сторони трикутника"));
let sideC = parseInt(prompt("Введіть значення третьої сторони трикутника"));

if (
    typeof(sideA) == "number" 
&& typeof(sideB) == "number" 
&& typeof(sideC) == "number" 
&& sideA > 0 
&& sideB > 0 
&& sideC > 0) {
    
        const s = (sideA + sideB + sideC) // the semi-perimeter
        const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
        console.log("Площа трикутника: " + parseFloat(area).toFixed(3));
        const hypotenuse = Math.max(sideA, sideB, sideC);
        const leg1 = Math.min(sideA, sideB, sideC);
        const leg2 = s - hypotenuse - leg1;
        if (hypotenuse ** 2 === leg1 ** 2 + leg2 ** 2) {
            alert("Цей трикутник прямокутний");
        } else {
            alert("Цей трикутник не є прямокутним");
        }
}
        else {  
        alert("Incorrect data");};

// 2.7
const currentTime = new Date();
const hours = currentTime.getHours();
console.log(hours);

// using if else statement
if (hours >= 23 || hours < 5) {
  alert("Доброї ночі");
} else if (hours >= 5 && hours < 11) {
  alert("Доброго ранку");
} else if (hours >= 11 && hours < 17) {
  alert("Доброго дня");
} else if (hours >= 17 && hours < 23) {
  alert("Доброго вечора");
} else {
  alert("Сталась помилка");
}

// using switch statement
switch (true) {
  case hours >= 23 || hours < 5:
    alert("Доброї ночі");
    break;
  case hours >= 5 && hours < 11:
    alert("Доброго ранку");
    break;
  case hours >= 11 && hours < 17:
    alert("Доброго дня");
    break;
  case hours >= 17 && hours < 23:
    alert("Доброго вечора");
    break;
  default:
    alert("Сталась помилка");
}
