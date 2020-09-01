// Variables
let player1_score = 0;
let player2_score = 0;
let max_score = 5;
let gameEnd = false;

// DOM Objects
let player1_btn = document.getElementById('player-1-btn');
let player2_btn = document.getElementById('player-2-btn');
let player1_label = document.getElementById('player1-score');
let player2_label = document.getElementById('player2-score');
let reset_btn = document.getElementById('reset-btn');
let max_score_textbox = document.getElementById('max-score');

// Adding event listeners
player1_btn.addEventListener('click', increaseScore);
player2_btn.addEventListener('click', increaseScore);

reset_btn.addEventListener('click', function () {
    gameEnd = false;
    player1_btn.disabled = false;
    player2_btn.disabled = false;
    player1_score = 0;
    player2_score = 0;
    player1_label.style.color = 'black';
    player2_label.style.color = 'black';
    updateScores();
});

max_score_textbox.addEventListener('change', function () {
    let new_val = Number(this.value);
    if (player1_score < new_val && player2_score < new_val) {
        max_score = new_val;
    }
    else {
        this.value = max_score;
    }
});

// Functions
function increaseScore(event) {
    if (!gameEnd) {
        if (event.currentTarget === player1_btn) {
            player1_score++;
        }
        else {
            player2_score++;
        }
        updateScores();
    }
}

function updateScores() {
    player1_label.innerHTML = player1_score;
    player2_label.innerHTML = player2_score;

    if (player1_score === max_score) {
        player1_label.style.color = 'green';
        gameEnd = true;
        blockButtons();
    }
    else if (player2_score === max_score) {
        player2_label.style.color = 'green';
        gameEnd = true;
        blockButtons();
    }
}

function blockButtons() {
    player1_btn.disabled = true;
    player2_btn.disabled = true;
}

