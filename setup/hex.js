const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");


function randomizeNumber() {
    return Math.floor(Math.random() * hex.length);
  }

  

btn.addEventListener("click", function() {
  let hexColor = "#";
  
  for(let x = 0; x < 6; x++) {

      hexColor= hexColor + hex[randomizeNumber()];
    }
    
  color.textContent = hexColor;
  
  document.body.style.backgroundColor = hexColor;
});