// import functions and grab DOM elements

const button1 = document.getElementById ('cup-1-button');
const button2 = document.getElementById ('cup-2-button');
const button3 = document.getElementById ('cup-3-button');
const img1 = document.getElementById ('cup-1-img');
const img2 = document.getElementById ('cup-2-img');
const img3 = document.getElementById ('cup-3-img');
const winsEL = document.getElementById ('wins');
const lossesEL = document.getElementById ('losses');
const totalEL = document.getElementById ('total');

// let state
let total = 0;
let wins = 0;

// set event listeners 

button1.addEventListener ('click', () => {
  resetImages();
  total++;
  const randomCupNumber = Math.floor(Math.random() * 3);
  
  if (randomCupNumber === 0) {
    wins++;
      img1.src = './assets/correct-cup.png';
  } else if (randomCupNumber === 1) {
      img2.src = './assets/correct-cup.png';
  } else {
      img3.src = './assets/correct-cup.png';
  }
  displayWinLossTotal();
});

button2.addEventListener ('click', () => {
  resetImages();
  total++;
  const randomCupNumber = Math.floor(Math.random() * 3);
  if (randomCupNumber === 0) {
    wins++;
      img1.src = './assets/correct-cup.png';
  } else if (randomCupNumber === 1) {
      img2.src = './assets/correct-cup.png';
  } else {
      img3.src = './assets/correct-cup.png';
  
  }

  displayWinLossTotal();
});

button3.addEventListener ('click', () => {
  resetImages();
  total++;
  const randomCupNumber = Math.floor(Math.random() * 3);
  if (randomCupNumber === 0) {
    wins++;
      img1.src = './assets/correct-cup.png';
  } else if (randomCupNumber === 1) {
      img2.src = './assets/correct-cup.png';
  } else {
      img3.src = './assets/correct-cup.png';
  
  }
  displayWinLossTotal();
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  function resetImages() {
    img1.src = './assets/base-cup.png';
    img2.src = './assets/base-cup.png';
    img3.src = './assets/base-cup.png';
  }

  function displayWinLossTotal() {
    winsEL.textContent = wins;
    lossesEL.textContent = total - wins;
    totalEL.textContent = total;
  }