window.application.blocks['looseBlock'] = renderLooseBlock
window.application.blocks['playButton'] = renderPlayButton
window.application.blocks['lobbyButton'] = renderLobbyButton
window.application.screens['looseScreen'] = renderLooseScreen


function renderLooseBlock(container) {                          //создание инфомационного блока с текстом поражения
  const looseBlock = document.createElement("div");

  looseBlock.classList.add = "loose-block";
  
  container.appendChild(looseBlock);
}




function renderPlayButton(container) {                            //создание кнопки "Играть"
  const playButton = document.createElement("button");
  playButton.classList.add = "button";

  playButton.addEventListener('touch', () => {})
 
  container.appendChild(playButton);
}



function renderLobbyButton() {                                         //создание кнопки "Перейти в лобби"
  const lobbyButton = document.createElement("button");
  lobbyButton.classList.add = "lobby-button";

  lobbyButton.addEventListener('touch', () => {})
  
  container.appendChild(lobbyButton);
}

function renderLooseScreen () {                                     //функция отрисовки экрана поражения
  app.textContent = ""

  window.application.renderBlock('looseBlock', app)
  window.application.renderBlock('playButton', app)
  window.application.renderBlock('lobbyButton', app)

  looseBlock.textContent = "Вы проиграли!";
  playButton.textContent = "Играть еще";
  lobbyButton.textContent = "Перейти в лобби";  
}

window.application.renderLooseScreen('looseScreen');
