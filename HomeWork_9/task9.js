// ************** task 1 ************** //

function getPromise(message, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, delay);
    });
  }
  
  getPromise("test promise", 2000).then(function(data) {
    console.log(data);
  });

// ************** task 2 ************** //

function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            const result = new Error("Error! Incorrect array!");
            reject(result);
        }
      }
      const result = arr.reduce((acc, num) => acc * num, 1);
      resolve(result);
    });
  }

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"

// ************** task 3 ************** //

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
function showNumbers() {
	for(let i=0, p= Promise.resolve(0); i<=10; i++){
        const time = Math.floor(Math.random() * 4) *1000;
        p = p.then(() => delay(i, time)).then((result) => {
            console.log(`result = ${result}, delay = ${time/1000} sec`);
        });
    }
}

showNumbers();

// ************** task 4 ************** //

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
	for(let i=0; i<=10; i++){
        const time = Math.floor(Math.random() * 4) *1000;
        await delay(i, time);
            console.log(`result = ${i},delay = ${time/1000} sec`);
    }
}

showNumbers();
