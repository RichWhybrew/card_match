var clickCount = 0;
var previousSelected;
var selectedCard;

var cardVals = {
  card1: '',
  card2: '',
  card3: '',
  card4: '',
  card5: '',
  card6: '',
  card7: '',
  card8: '',
  card9: '',
  card10: '',
  card11: '',
  card12: ''
};

var cardValArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

function assignRandom(key) {
  var valIndex = Math.floor(Math.random() * (cardValArray.length - 1));
  cardVals[key] = cardValArray.splice(valIndex, 1);
}

function setCardVals() {
  Object.keys(cardVals).forEach(function(key) {
    assignRandom(key);
  });
}

function cardClick(card) {
  if (clickCount < 2) {
    previousSelected = selectedCard;
    selectedCard = document.getElementById(card);
    selectedCard.innerHTML = cardVals[card];
    clickCount++;
    if (clickCount === 2) {
      if (selectedCard.innerHTML !== previousSelected.innerHTML) {
        console.log('you got it wrong');
        setTimeout(function() {
          previousSelected.innerHTML = '';
          selectedCard.innerHTML = '';
          previousSelected = '';
          selectedCard = '';
          clickCount = 0;
        }, 500);
      } else {
        selectedCard.onclick = '';
        previousSelected.onclick = '';
        console.log('you got it right');
        previousSelected = '';
        selectedCard = '';
        clickCount = 0;
      }
    }
  }
}

setCardVals();