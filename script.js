/*let button = document.getElementById('submit-button');
button.addEventListener("click",function(){
  let card = document.querySelector('.card');
  card.classList.add("rating");
  document.querySelector(".thank-you").style.display ="block";
  const numbers = document.querySelectorAll(".number");
  const span = document.getElementById("rating-value");
  numbers.forEach(p => {
    span.textContent = p.textContent;
  });
});*/
let button = document.getElementById("submit-button");
const numbers = document.querySelectorAll(".number");
const span = document.getElementById("rating-value");
let selectedValue = null;
numbers.forEach(num => {
  num.addEventListener("click",function (){
    selectedValue = num.textContent;
  });
});
button.addEventListener("click", function (){
  let card = document.querySelector(".card");
  card.classList.add("rating");
  document.querySelector(".thank-you").style.display ="block";
  if (selectedValue) {
    span.textContent = selectedValue;
  }
});