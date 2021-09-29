window.application.blocks['looseBlock'] = renderLooseBlock
window.application.blocks['playButton'] = renderPlayButton
window.application.blocks['lobbyButton'] = renderLobbyButton
window.application.screens['looseScreen'] = renderLooseScreen


function renderLooseBlock(container) {                          //создание инфомационного блока с текстом поражения
  const looseBlock = document.createElement("div");
  looseBlock.textContent = "Вы проиграли!";

  looseBlock.classList.add = "loose-block";
  
  container.appendChild(looseBlock);
}




function renderPlayButton(container) {                            //создание кнопки "Играть"
  const playButton = document.createElement("button");
  playButton.classList.add = "button";
  playButton.textContent = "Играть еще";

  playButton.addEventListener('click', () => {})
 
  container.appendChild(playButton);
}



function renderLobbyButton(container) {                                         //создание кнопки "Перейти в лобби"
  const lobbyButton = document.createElement("button");
  lobbyButton.classList.add = "lobby-button";
  lobbyButton.textContent = "Перейти в лобби";  

  lobbyButton.addEventListener('click', () => {})
  
  container.appendChild(lobbyButton);
}

function renderLooseScreen () {                                     //функция отрисовки экрана поражения
  app.textContent = ""

  window.application.renderBlock('looseBlock', app)
  window.application.renderBlock('playButton', app)
  window.application.renderBlock('lobbyButton', app)
  
}

window.application.renderScreen('looseScreen');
