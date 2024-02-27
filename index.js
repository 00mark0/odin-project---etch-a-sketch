document.addEventListener('DOMContentLoaded', function () {
  const containerDiv = document.querySelector('.container');
  const sketchButton = document.querySelector('#prompt');
  let userInput;
  let number;
  const resetButton = document.querySelector('.reset');

  function userPrompt() {
    clearChildren();

    userInput = prompt('Please enter a number (up to 100):');

    if (userInput === null) {
      return;
    }

    number = parseFloat(userInput);
    number = Math.min(number, 100);

    if (isNaN(number)) {
      return userPrompt();
    } else {
      const numberOfDivs = number * number;
      const divSize = 100 / number;

      for (i = 0; i < numberOfDivs; i++) {
        let newDiv = document.createElement('div');
        newDiv.style.width = `${divSize}%`;
        newDiv.style.height = `${divSize}%`;
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
        if (isCheckboxChecked()) {
          div.style.backgroundColor = getRandomColor();
        } else {
          div.style.backgroundColor = 'black';
        }
      });
    });
  }

  resetButton.addEventListener('click', function () {
    const divs = document.querySelectorAll('.grid-item');
    divs.forEach((div) => {
      div.style.backgroundColor = 'white';
    });
  });

  function isCheckboxChecked() {
    let checkbox = document.querySelector('#checkbox');
    return checkbox.checked;
  }

  sketchButton.addEventListener('click', userPrompt);
});
