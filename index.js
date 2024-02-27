const containerDiv = document.querySelector('.container');
const sketchButton = document.querySelector('#prompt');
let userInput;
let number;
const resetButton = document.querySelector('.reset');

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
      newDiv.classList.add('grid-item');
      containerDiv.appendChild(newDiv);
    }
    addHoverEffect();
  }
}

function clearChildren() {
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function addHoverEffect() {
  const divs = document.querySelectorAll('.grid-item');
  divs.forEach((div) => {
    div.addEventListener('mouseover', function () {
      div.style.backgroundColor = getRandomColor();
    });
  });
}

resetButton.addEventListener('click', function () {
  const divs = document.querySelectorAll('.grid-item');
  divs.forEach((div) => {
    div.style.backgroundColor = 'white';
  });
});

sketchButton.addEventListener('click', userPrompt);
