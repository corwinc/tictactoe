var Board = function() {
  this.board = [[null, null, null], [null, null, null], [null, null, null]];
  this.player1 = 'X';
  this.player2 = 'O';
  this.isPlayer1Turn = true;
}

Board.prototype.play = function(move) {
  var row = Number(move[0]);
  var col = Number(move[1]);
  // check if move is available: e.g. move = '00'
    // if yes: set position equal to player's character, isplayer1Turn = !isPlayer1Turn
    // if no: console.log 'that move's not available, try again' & return
  if (this.board[row][col] !== null) {
    this.board[row][col] = isPlayer1Turn ? player1 : player2;
  } else {
    console.log('That move\'s not available. Try again.');
  }

  // check game's status (cb);
  this.checkStatus();
}

Board.prototype.checkStatus = function() {
  // check if there's a win
    // if yes: log Player ___ won!!!
    // if not, check if all moves have been played
      // if yes, log "it's a tie!"
      // if no, log board w/ icon on player for who's next
}

// isPlayer1Turn ? this.play.bind(null, null, this.player1, this.checkStatus) : this.play.bind(null, null, this.player2, this.checkStatus);