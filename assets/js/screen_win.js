window.application.blocks['winBlock'] = renderWinBlock
window.application.blocks['playButton'] = renderPlayButton
window.application.blocks['lobbyButton'] = renderLobbyButton
window.application.screens['winScreen'] = renderWinScreen

function renderWinBlock(container) {                          //создание инфомационного блока с текстом победы
  const winBlock = document.createElement('div');
  container.appendChild(winBlock)
  winBlock.classList.add('win-block');
  
  return winBlock
}

function renderPlayButton(container) {                            //создание кнопки "Играть"
  const playButton = document.createElement('button');
  playButton.classList.add = 'button';
  container.appendChild(playButton)

  playButton.addEventListener('touchend', startGame)
 
  return playButton
}

function renderLobbyButton(container) {                                         //создание кнопки "Перейти в лобби"
  const lobbyButton = document.createElement('button');
  lobbyButton.classList.add('button');
  container.appendChild(lobbyButton)

  lobbyButton.addEventListener('touchend', () => {
    window.application.renderScreen('lobbyScreen')
    
  });

  return lobbyButton  
}

function renderWinScreen () {                                     //функция отрисовки экрана победы
  app.textContent = ""
  
  const looseBlock = window.application.renderBlock('winBlock', app)
	looseBlock.textContent = 'Вы победили!';

	const lobbyButton = window.application.renderBlock('lobbyButton', app)
  lobbyButton.textContent = 'Перейти в лобби';

	const playButton = window.application.renderBlock('playButton', app)
	playButton.textContent = 'Играть еще'
}

//window.application.renderScreen('winScreen')
