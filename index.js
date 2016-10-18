var Board = function() {
  this.board = [[null, null, null], [null, null, null], [null, null, null]];
  this.player1 = 'X';
  this.player2 = 'O';
  this.isPlayer1Turn = true;
  this.playCount = 0;
}

Board.prototype.play = function(move) {
  var row = Number(move[0]);
  var col = Number(move[1]);

  // check if move is available: e.g. move = '00'
    // if yes: set position equal to player's character, isplayer1Turn = !isPlayer1Turn
    // if no: console.log 'that move's not available, try again' & return
  if (this.board[row][col] !== null) {
    this.board[row][col] = isPlayer1Turn ? player1 : player2;
    this.playCount++;
  } else {
    console.log('That move\'s not available. Try again.');
  }

  // check game's status (cb);
  this.checkStatus();
}

Board.prototype.checkStatus = function() {
  // check if there's a win
  var gameComplete = false;

  for (var i = 0; i < this.board.length - 1; i++) {
    var row = this.board[i];
    if (row[0] === row[1] && row[1] === row[2]) {
      if (row[0] === 'X') {
        console.log('X wins!!!');
        gameComplete = true;
      } else {
        console.log('O wins!!!');
        gameComplete = true;
      }
    }
  }

  for (var i = 0; i < this.board.length - 1; i++) {
    var col = this.board[i];
    if (col[0] === col[1] && col[1] === col[2]) {
      if (col[0] === 'X') {
        console.log('X wins!!!');
        gameComplete = true;
      } else {
        console.log('O wins!!!');
        gameComplete = true;
      }
    }
  }

  if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
    if (this.board[0][0] === 'X') {
        console.log('X wins!!!');
        gameComplete = true;
      } else {
        console.log('O wins!!!');
        gameComplete = true;
      }
  } else if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
    if (this.board[0][2] === 'X') {
        console.log('X wins!!!');
        gameComplete = true;
      } else {
        console.log('O wins!!!');
        gameComplete = true;
      }

  if (!gameComplete && this.playCount === 9) {
    this.printBoard();
    console.log('It\'s a tie!');
  } else if (!gameComplete) {
    this.printBoard();
  }
}

Board.prototype.printBoard = function() {
  console.log(this.board);
  isPlayer1 ? console.log('*X O') : console.log('X *O');
}

// isPlayer1Turn ? this.play.bind(null, null, this.player1, this.checkStatus) : this.play.bind(null, null, this.player2, this.checkStatus);