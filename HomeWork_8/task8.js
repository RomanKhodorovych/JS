// ************** task 1 ************** //

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x,y,,...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// ************** task 2 ************** //

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let { names: [, name2, , name4], ages: [, age2, , age4] } = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// ************** task 3 ************** //

function mul(...nums) {
  const numberArr = nums.filter(num => typeof num === 'number');

  if (numberArr.length === 0) {
    return 0;
  }

  return numberArr.reduce((result, element) => result * element, 1);
}

console.log(mul(1, "str", 2, 3, true));   // Output: 6
console.log(mul(null, "str", false, true)); // Output: 0

// ************** task 4 ************** //
// TODO: fix the code
let server = {
  data: 0,
  convertToString: function (callback) {
     callback((function () {
        return this.data + "";
     }).bind(this));
  }
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
     this.server.data = data;
     this.server.convertToString(this.notification());
  },
  notification: function () {
     return (function (callback) {
        this.result = callback();
     }).bind(this);
  }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"



// ************** task 5 ************** //

function mapBuilder(keysArray, valuesArrays){
  let newMap = new Map();
  for (let i = 0; i < keysArray.length; i++) {
    newMap.set(keysArray[i], valuesArrays[i]);
  }
  return newMap;
};

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

