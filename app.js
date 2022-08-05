const gameContainer = document.getElementById('game-container');
const scoreDiv = document.getElementById('score-div');
const startBtn = document.getElementById('start-button');
const restartBtn = document.createElement('button');
const cardImage = document.querySelectorAll('.card-front');
const body = document.querySelector('body');
const startText = document.getElementById('press-start')



const cards = [
    "https://media.giphy.com/media/HPo8fZLSQwVsqOP3SO/giphy.gif",
    "https://media.giphy.com/media/sHsZvppC581TM7jlca/giphy.gif",
    "https://media.giphy.com/media/RcrmwyUY4KTpgSxk2n/giphy.gif",
    "https://media.giphy.com/media/RPmvPt6cSSZXTVqxUx/giphy.gif",
    "https://media.giphy.com/media/41hznS5aYA1vUzVwkW/giphy.gif",
    "https://media.giphy.com/media/HPo8fZLSQwVsqOP3SO/giphy.gif",
    "https://media.giphy.com/media/sHsZvppC581TM7jlca/giphy.gif",
    "https://media.giphy.com/media/RcrmwyUY4KTpgSxk2n/giphy.gif",
    "https://media.giphy.com/media/RPmvPt6cSSZXTVqxUx/giphy.gif",
    "https://media.giphy.com/media/41hznS5aYA1vUzVwkW/giphy.gif",
  ];

  function shuffle(array) {
    let counter = array.length;
  
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
  
      // Decrease counter by 1
      counter--;
  
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
  
    return array;
  }
  
  let shuffledCards = shuffle(cards);


  function newDivForCards(cardArray){
    for( let card of cardArray){
        //Creates new image and div elements
        const newImg = document.createElement('img');
        const newDiv = document.createElement('div');
        //Sets classes and attributes
        newDiv.classList.add('card-back');
        newDiv.setAttribute('name', card);
        newImg.setAttribute('src', card);
        newImg.classList.add('card-front');

        //Appends img to div
        newDiv.append(newImg);
        //Listens for click
        newDiv.addEventListener('click', handleCardClick);
        //appends div to container
        gameContainer.classList.add('fadeIn');
        gameContainer.append(newDiv);
    }
  }

  function handleCardClick(event) {
    // you can use event.target to see which element was clicked
    console.log(event.target);
    //Selects card
    const clickedCard = event.target;
    //Selects front of the card
    const cardFront = event.target.firstChild;
    //Adds flipped class to element
    clickedCard.classList.add('flipped');
    clickedCard.classList.remove('card-back');
    cardFront.classList.toggle('card-front');
    
    
    //Selects cards that are 'flipped'
    const flippedCards = document.querySelectorAll('.flipped');
    //Checks if there are 2 flipped cards
    if(flippedCards.length === 2){
      //Checks if both flipped cards name attributes match
      if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
        console.log('MATCH');
        flippedCards.forEach(function(cards){
          cards.classList.remove('flipped');
          cards.removeEventListener('click', handleCardClick);
        })
      } else {
        console.log('WRONG');
        flippedCards.forEach(function(cards){
          cards.classList.remove('flipped');
          setTimeout(function(){
            cards.classList.add('card-back');
            cards.firstChild.classList.toggle('card-front');

          }, 1000);
        });
      };
    } else if(flippedCards.length === 2){
      console.log('YOU WIN');
    };
  };

  
startBtn.addEventListener('click',function(){
  newDivForCards(shuffledCards);
  startText.remove();
  startBtn.remove();
})








