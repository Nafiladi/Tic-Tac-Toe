document.querySelectorAll('.cell').forEach(function(cell) {
    cell.addEventListener('click', handleCellClick);
});

var currentPlayer = 'X';
var gameBoard = ['', '', '', '', '', '', '', '', ''];
var gameActive = true;
var timer = 0;

function handleCellClick(e) {
    var cell = e.target;
    var cellIndex = cell.getAttribute('data-cell');
    if (gameBoard[cellIndex] || !gameActive) return;
    
    gameBoard[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    checkWinner();
}

function checkWinner() {
    var winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    for (var i = 0; i < winPatterns.length; i++) {
        var pattern = winPatterns[i];
        var a = pattern[0];
        var b = pattern[1];
        var c = pattern[2];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(gameBoard[a] + ' wins!');
            gameActive = false;
            return;
        }
    }
    if (gameBoard.indexOf('') === -1) {
        alert('It\'s a tie!');
        gameActive = false;
    }
}

// Timer function
setInterval(function() {
    if (gameActive) {
        timer++;
        document.getElementById('timer').textContent = formatTime(timer);
    }
}, 1000);

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var secondsLeft = seconds % 60;
    return minutes + ':' + (secondsLeft < 10 ? '0' + secondsLeft : secondsLeft);
}