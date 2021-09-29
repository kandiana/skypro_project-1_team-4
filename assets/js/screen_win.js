window.application.blocks['winBlock'] = renderWinBlock
window.application.blocks['playButton'] = renderPlayButton
window.application.blocks['lobbyButton'] = renderLobbyButton
window.application.screens['winScreen'] = renderWinScreen


function renderWinBlock(container) {                                  //создание блока с текстом победы
  const winBlock = document.createElement("div");
  winBlock.textContent = "Вы победили!";

  winBlock.classList.add = "win-block";
  
  container.appendChild(winBlock);
}




function renderPlayButton(container) {                           //создание кнопки "Играть"
  const playButton = document.createElement("button");
  playButton.classList.add = "button";
  playButton.textContent = "Играть еще";

  playButton.addEventListener('touchend', startGame)
 
  container.appendChild(playButton);
}



function renderLobbyButton(container) {                                          //создание кнопки "Перейти в лобби"
  const lobbyButton = document.createElement("button");
  lobbyButton.classList.add = "lobby-button";
  lobbyButton.textContent = "Перейти в лобби";  

  lobbyButton.addEventListener('click', () => {
    window.application.renderScreen('lobbyScreen')
  })
  
  container.appendChild(lobbyButton);
}

function renderWinScreen () {                                       //функция отрисовки экрана победы
  app.textContent = ""

  window.application.renderBlock('winBlock', app)
  window.application.renderBlock('playButton', app)
  window.application.renderBlock('lobbyButton', app)
  
}

 //window.application.renderScreen('winScreen');