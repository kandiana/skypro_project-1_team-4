window.application.blocks['winBlock'] = renderWinBlock
window.application.blocks['playButton'] = renderPlayButton
window.application.blocks['lobbyButton'] = renderLobbyButton
window.application.screens['winScreen'] = renderWinScreen


function renderWinBlock(container) {
  const looseBlock = document.createElement("div");

  looseBlock.classList.add = "win-block";
  
  container.appendChild(winBlock);
}




function renderPlayButton(container) {
  const playButton = document.createElement("button");
  playButton.classList.add = "button";

  playButton.addEventListener('touch', () => {})
 
  container.appendChild(playButton);
}



function renderLobbyButton() {
  const lobbyButton = document.createElement("button");
  lobbyButton.classList.add = "lobby-button";

  playButton.addEventListener('touch', () => {})
  
  container.appendChild(lobbyButton);
}

function renderWinScreen () {
  app.textContent = ""

  window.application.renderBlock('winBlock', app)
  window.application.renderBlock('playButton', app)
  window.application.renderBlock('lobbyButton', app)

  playButton.textContent = "Играть еще";
  looseBlock.textContent = "Вы победили!";
  lobbyButton.textContent = "Перейти в лобби";  
}

window.application.renderWinScreen('winScreen');