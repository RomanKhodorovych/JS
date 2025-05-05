// *************task 1*************

let elementId1 = document.getElementById("test").innerHTML = "Last";
let elementId2 = document.querySelector('#test').innerHTML = "Last";

// *************task 2*************

const isChange = confirm("Do you want to change a dog to a cat?");
if (isChange) {
  let images = document.images;
  for (let i = 0; i < images.length; i++) {
    if (images[i].src.endsWith("dog.jpeg")) {
      images[i].src = "cat.jpeg";
    }
  }
} else {
  alert("You have chosen not to change your animal!");
}
alert(`The tag of the updated image is ${document.images[0].outerHTML}`);

// *************task 3*************


const elementDiv = document.querySelector('#text');
elementsChild = Array.from(elementDiv.children);

for (let i = 0; i < elementsChild.length; i++) {  
console.log(`Selector text ${i}: ${elementsChild[i].textContent}`);
  }

// *************task 4*************

const elementList = document.querySelector('.list');

console.log(`\u2022 ${elementList.firstElementChild.textContent}
\u2022 ${elementList.lastElementChild.textContent}
\u2022 ${elementList.firstElementChild.nextElementSibling.textContent} 
\u2022 ${elementList.lastElementChild.previousElementSibling.textContent}
\u2022 ${elementList.children[2].textContent}`);

const elementList2 = [];
    elementList2.push(elementList.firstElementChild.textContent);
    elementList2.push(elementList.lastElementChild.textContent);
    elementList2.push(elementList.firstElementChild.nextElementSibling.textContent);
    elementList2.push(elementList.lastElementChild.previousElementSibling.textContent);
    elementList2.push(elementList.children[2].textContent);
console.log(elementList2.toString());

// *************task 5*************
//5.1
document.querySelector('h1').style.backgroundColor = 'lightgreen';
let elementMyDiv = document.getElementById('myDiv');
elementMyDiv.firstElementChild.style.fontWeight = 'bold';
elementMyDiv.firstElementChild.nextElementSibling.style.color = 'red';
elementMyDiv.children[2].style.textDecoration = 'underline';
elementMyDiv.lastElementChild.style.fontStyle = 'italic';
//5.2
let elementMyList = document.getElementById('myList');
let elementMyList2 = [];
elementMyList2.push(elementMyList.firstElementChild.textContent);
elementMyList2.push(elementMyList.firstElementChild.nextElementSibling.textContent);
elementMyList2.push(elementMyList.lastElementChild.textContent);
document.getElementById('myList').innerHTML = elementMyList2.join('');
//5.3
document.querySelector('span').style.visibility = 'hidden';

// *************task 6*************
let inputValue1 = document.getElementById('input1'); 
let inputValue2 = document.getElementById('input2');
let value1 = prompt("Enter the first value", inputValue1.value);
let value2 = prompt("Enter the second value", inputValue2.value);
inputValue1.value = value2;
inputValue2.value = value1;


// *************task 7*************

  function replaceCurrentPageContent() {
    document.documentElement.innerHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Task6</title>
      </head>
      <body>
           <main class="mainClass check item"> 	
		        <div id="myDiv">
           <p>First paragraph</p>  
      </body>
      </html>
    `;
  }

if (confirm("Do you want to replace the current page content?")) {
    replaceCurrentPageContent();
  }
  