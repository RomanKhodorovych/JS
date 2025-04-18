// ____task 1____

let arr1 = [2, 3, 4, 5];
let i = 0;
let res = 1;
for (let i of arr1) {
    res *= arr1[i];
}
console.log(res); 

// ____task 2____

let arr2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 == 0) {
       alert(`${arr2[i]} - even number`)
    }
    else {
        alert(`${arr2[i]} - odd number`)
    }
}

// ____task 3____

function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr[i] = Math.floor(Math.random() * 500);
    }
    return arr;
}

console.log(randArray(5));

// ____task 4____

function raiseToDegree(a,b){
    return a**b
};

let a = parseFloat(prompt("Введіть перше ціле число"));
let b = parseFloat(prompt("Введіть друге ціле число"));

if (a%1===0 && b%1===0) {
alert("Добуток чисел рівний "+raiseToDegree(a,b));
}
else {
    alert("Введіть цілі числа");
}

// ____task 5____

function findMin(){
    let res = Math.min(...arguments);
    return res;
};

function findMin1() {
    if (arguments.length === 0) {
        alert("No arguments provided");
    }
    let res = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (res > arguments[i]) {
            res = arguments[i];
        }
    }
    return res;
}

console.log(findMin(12, 14, 4, -4, 0.2));
console.log(findMin1(12, 14, 4, -4, 0.2));

// ____task 6____
function findUnique(arr){
    const uniqueElementsSet = new Set (arr);
    if (arr.length === uniqueElementsSet.size) {
        return true;
    }
    else {
        return false;
    }
};

console.log(findUnique([1, 2, 3, 5, 11])); // => true);
console.log(findUnique([1, 2, 3, 5, 3]));  // => false

// ____task 7____

function lastElem(arr, num){

    if (!Array.isArray(arr)) {
        return "Invalid input";
    }
    else if (typeof(num) !== "number") {  
        return arr.slice(arr.length - 1);
    }
    else if (num >= arr.length) {
        return arr;
    }
    else {
        return arr.slice(arr.length - num);
    }

    };

console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

// ____task 8____

function capitalizeFirstLetter(str){
    let arr = str.split(" ");
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1,arr[i].length+1);
    }
result = arr.join(" ");
    return result;
};

console.log(capitalizeFirstLetter(prompt("введіть будь який рядок")));