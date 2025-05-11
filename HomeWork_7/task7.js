// ************** task 1 ************** //

const newWin = window.open("", "", "width=300,height=300,resizable=yes");

setTimeout(() => {
    newWin.resizeTo(500, 500);
    setTimeout(() => {
      newWin.moveTo(200, 200);
      setTimeout(() => {
        newWin.close();
      }, 2000);
    }, 2000);
  }, 2000);
  


// ************** task 2 ************** //

let text = document.querySelector("#text");
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    text.style.color = "orange";
    text.style.fontSize = "20px";
    text.style.fontFamily = "Comic Sans MS";     
});

// ************** task 3 ************** //

  const link = document.querySelector("#yellow");
  const blueBtn = document.querySelector("#blue");
  const pinkBtn = document.querySelector("#pink");
  const brownBtn = document.querySelector("#brown");

  if (link){
    link.addEventListener("mouseover", function() {
      document.body.style.backgroundColor = "yellow";
    });
    link.addEventListener("mouseout", function() {
      document.body.style.backgroundColor = "white";
    });
  };

  if (blueBtn){
    blueBtn.addEventListener("click", function() {
      document.body.style.backgroundColor = "blue";
    });
  }
  if (pinkBtn){
    pinkBtn.addEventListener("dblclick", function() {
      document.body.style.backgroundColor = "pink";
    });
  }
  if (brownBtn){
    let timer;
    const duration = 1000; // 1 second
    brownBtn.addEventListener("mousedown", function() {
        timer = setTimeout(() => {
          document.body.style.backgroundColor = "brown";
        }, duration);
      });
    brownBtn.addEventListener("mouseup", function() {
     clearTimeout(timer)
    });
    brownBtn.addEventListener("mouseout", function() {
      clearTimeout(timer)
     });
  }
  


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
  
function getWindowSize(){
    let width = window.innerWidth;
    let height = window.innerHeight;
  document.getElementById("size").innerHTML = `Width: ${width}px, Height: ${height}px`;
  }
 window.addEventListener("resize", getWindowSize);

