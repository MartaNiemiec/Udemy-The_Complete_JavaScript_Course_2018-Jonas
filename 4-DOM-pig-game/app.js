/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

//function btn() {
//    //do something here
//}
//btn();  //we call that function
//document.querySelector('.btn-roll').addEventListener('click', btn);  //btn without "()" - because it is a CALLBACK FUNCTION what means that btn function is called by another function (eventListener) not by us

document.querySelector('.btn-roll').addEventListener('click', function() {  // here is a ANONYMOUS FUNCTION = a function without a name so it cannot be reused
    if(gamePlaying) {
           // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            // Add score
            roundScore += dice; //update roundscore
            document.querySelector('#current-' + activePlayer).textContent = roundScore;    // .textContent changes just the text  // it is a SETTER because we SET a value
        } else {

            // Next player
        nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] =+ scores[activePlayer] + roundScore;

        // Update the UI(user interface)
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.btn-roll').style.opacity = '.4';
            document.querySelector('.btn-roll').onmouseover = function() { this.style.fontWeight = '300'; };
            document.querySelector('.btn-hold').style.opacity = '.4';
            document.querySelector('.btn-hold').onmouseover = function() { this.style.fontWeight = '300'; };
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }  
});


function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;   //TERNARY OPERATOR
//        if(activePlayer ===0) {
//            activePlayer = 1;
//        } else {
//            activePlayer = 0;
//        }
    roundScore = 0;
        
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
//        document.querySelector('.player-0-panel').classList.remove('active');   //removes .active where is .player-0-panel
//        document.querySelector('player-1-panel').classList.add('active');   //add .active
        
    document.querySelector('.player-0-panel').classList.toggle('active');   //toogle class9add or remove class)
    document.querySelector('.player-1-panel').classList.toggle('active');  
        
    document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;


    document.querySelector('.dice').style.display = 'none'; // we change css display property to none value

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


//document.querySelector('#current-' + activePlayer).textContent = dice;    // .textContent changes just the text  // it is a SETTER because we SET a value
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent; // to store #score-0 in the var x   // it is a GETTER because we GET a value


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/



























