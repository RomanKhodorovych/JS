// ************** task 1 ************** //

const newWin = window.open("", "", "width=300,height=300,resizable=yes");

setTimeout(() => {
  newWin.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
  newWin.moveTo(200, 200);
}, 4000);

setTimeout(() => {
  newWin.close();
}, 6000);

// ************** task 2 ************** //

let text = document.querySelector("#text");
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    text.style.color = "orange";
    text.style.fontSize = "20px";
    text.style.fontFamily = "Comic Sans MS";     
});

// ************** task 3 ************** //

["click", "mouseover", "mouseout"].forEach(eventType => {
    let link = document.querySelector("#yellow");
    let buttons = document.querySelectorAll("button");
  
    link.addEventListener(eventType, function(event) {
      if (event.type === "mouseover" && event.target.id === "yellow") {
        document.body.style.backgroundColor = "yellow";
      } else if (event.type === "mouseout" && event.target.id === "yellow") {
        document.body.style.backgroundColor = "white";
      }
    });
  
    buttons.forEach(button => {
      button.addEventListener(eventType, function(event) {
        if (event.type === "click" && event.target.id === "blue") {
            document.body.style.backgroundColor = "blue";
        } else if (event.type === "click" && event.target.id === "pink") {
            document.body.style.backgroundColor = "pink";
        } else if (event.type === "click" && event.target.id === "brown") {
            document.body.style.backgroundColor = "brown";
        }
      });
    });
  });

// ************** task 4 ************** //

const select = document.getElementById("names");
const button = document.getElementById("delete");

button.addEventListener("click", function() {
  const selectedIndex = select.selectedIndex;
    select.remove(selectedIndex);
});
  
// ************** task 5 ************** //

const liveButton = document.getElementById("live");
const message = document.getElementById("message");

["click", "mouseover", "mouseout"].forEach(eventType => {
    liveButton.addEventListener(eventType, function(event) {
        if (event.type === "mouseover") {
            const newMessage = document.createElement("p");
            newMessage.textContent = "Mouse on me!";
            message.after(newMessage);
        } else if (event.type === "mouseout") {
            const newMessage = document.createElement("p");
            newMessage.textContent = "Mouse is not on me!";
            message.after(newMessage);
        } else if (event.type === "click") {
            const newMessage = document.createElement("p");
            newMessage.textContent = "I was pressed!";
            message.after(newMessage);
        }
    });
});

// ************** task 6 ************** //
  

