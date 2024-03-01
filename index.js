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
      const divSize = 100 / number;
      const fontSize = Math.max(8, 20 - number / 5); // Adjust font size dynamically

      for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
          let newDiv = document.createElement('div');
          newDiv.style.width = `${divSize}%`;
          newDiv.style.height = `${divSize}%`;
          newDiv.style.fontSize = `${fontSize}px`; // Set font size
          newDiv.classList.add('grid-item');

          // Add row numbers to the left-most divs
          if (j === 0) {
            newDiv.textContent = `${i + 1}`;
            newDiv.style.color = 'black';
          }

          // Add column numbers to the top divs
          if (i === 0) {
            newDiv.textContent = `${j + 1}`;
            newDiv.style.color = 'black';
          }

          containerDiv.appendChild(newDiv);
        }
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
