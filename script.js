// let input = $("#inputBox");
let input = document.getElementById('inputBox');
let calculateBox = document.getElementById('calculateBox');
// let calculateBox = document.getElementsByClassName('calculate');
// let buttons
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (a) => {
    
    if (a.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
      calculateBox.value = string;
    } else if (a.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (a.target.innerHTML == "AC") {
      string = "";
      input.value = string;
      calculateBox.value = "";
    } else {
      string = string + a.target.innerHTML;
      input.value = string;
    }
    if(string){
        calculateBox.value=eval(string);
    }else{
        calculateBox.value = "";
    }
  });
});
