window.application.blocks['winBlock'] = renderWinBlock
window.application.blocks['playButton'] = renderPlayButton
window.application.blocks['lobbyButton'] = renderLobbyButton
window.application.screens['winScreen'] = renderWinScreen


function renderWinBlock(container) {                                  //создание блока с текстом победы
  const looseBlock = document.createElement("div");

  looseBlock.classList.add = "win-block";
  
  container.appendChild(winBlock);
}




function renderPlayButton(container) {                           //создание кнопки "Играть"
  const playButton = document.createElement("button");
  playButton.classList.add = "button";

  playButton.addEventListener('touch', () => {})
 
  container.appendChild(playButton);
}



function renderLobbyButton() {                                          //создание кнопки "Перейти в лобби"
  const lobbyButton = document.createElement("button");
  lobbyButton.classList.add = "lobby-button";

  lobbyButton.addEventListener('touch', () => {})
  
  container.appendChild(lobbyButton);
}

function renderWinScreen () {                                       //функция отрисовки экрана победы
  app.textContent = ""

  window.application.renderBlock('winBlock', app)
  window.application.renderBlock('playButton', app)
  window.application.renderBlock('lobbyButton', app)

  looseBlock.textContent = "Вы победили!";
  playButton.textContent = "Играть еще";
  lobbyButton.textContent = "Перейти в лобби";  
}

window.application.renderWinScreen('winScreen');