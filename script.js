function drawBoard() {
  board.innerHTML = "";

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const square = document.createElement("div");
      square.classList.add("square");

      if ((r + c) % 2 === 0) {
        square.classList.add("white");
      } else {
        square.classList.add("black");
      }

      const piece = game[r][c];
      if (piece !== ".") {
        square.textContent = pieces[piece];
      }

      board.appendChild(square);
    }
  }
}
drawBoard();
