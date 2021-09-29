window.application.blocks['looseBlock'] = renderLooseBlock
window.application.blocks['playButton'] = renderPlayButton
window.application.blocks['lobbyButton'] = renderLobbyButton
window.application.screens['looseScreen'] = renderLooseScreen


function renderLooseBlock(container) {
  const looseBlock = document.createElement("div");

  looseBlock.classList.add = "loose-block";
  
  container.appendChild(looseBlock);
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

function renderLooseScreen () {
  app.textContent = ""

  window.application.renderBlock('looseBlock', app)
  window.application.renderBlock('playButton', app)
  window.application.renderBlock('lobbyButton', app)

  playButton.textContent = "Играть еще";
  looseBlock.textContent = "Вы проиграли!";
  lobbyButton.textContent = "Перейти в лобби";  
}

window.application.renderLooseScreen('looseScreen');
