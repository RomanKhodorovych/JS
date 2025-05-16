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
            const result = "Error! Incorrect array!";
            resolve(result);
        }
      }
      const result = arr.reduce((acc, num) => acc * num, 1);
      resolve(result);
    });
  }

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"

// ************** task 3 ************** //