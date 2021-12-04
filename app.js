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

// const resetButton = document.getElementById ('reset-button');

// let state
let total = 0;
let wins = 0;
const hidingPlaces = ['cup-1', 'cup-2', 'cup-3'];

// set event listeners 


button1.addEventListener ('click', () => {
    
    
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('cup-1', correctSpot);
    
});


button2.addEventListener ('click', () => {
    
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('cup-2', correctSpot);
    
});


button3.addEventListener ('click', () => {
    
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('cup-3', correctSpot);
    
});

// resetButton.addEventListener ('click', () => {
//     resetStats();
// });

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

function resetImages() {
    img1.src = './assets/base-cup.png';
    img2.src = './assets/base-cup.png';
    img3.src = './assets/base-cup.png';
}


function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


function handleGuess(userGuess, correctSpot) {
    
    resetImages();
    
    total++;

    const correctHidingPlaceEl = document.getElementById(`${correctSpot}-img`);
    
    correctHidingPlaceEl.src = './assets/correct-cup.png';

    if (userGuess === correctSpot) {
        
        wins++;

    }

    winsEL.textContent = wins;
    lossesEL.textContent = total - wins;
    totalEL.textContent = total;
}

// function resetStats() {
//     wins = 0;
//     total = 0;
//     updateWinLossTotal();
// }

