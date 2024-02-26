const containerDiv = document.querySelector('.container');
const button = document.createElement('button');
button.textContent = 'Prompt';
button.style.padding = '10px 20px';
document.body.appendChild(button);
let userInput;
let number;

function userPrompt() {
  clearChildren();

  userInput = prompt('Please enter a number:');

  if (userInput === null) {
    return;
  }

  number = parseFloat(userInput);
  number = Math.min(number, 64);

  if (isNaN(number)) {
    return userPrompt();
  } else {
    for (i = 0; i < number * number; i++) {
      let newDiv = document.createElement('div');

      containerDiv.appendChild(newDiv);
    }
  }
}

function clearChildren() {
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }
}

button.addEventListener('click', userPrompt);
