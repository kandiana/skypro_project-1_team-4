window.application.blocks['looseBlock'] = renderLooseBlock
window.application.blocks['playButton'] = renderPlayButton
window.application.blocks['lobbyButton'] = renderLobbyButton
window.application.screens['looseScreen'] = renderLooseScreen

function renderLooseBlock(container) {                          //создание инфомационного блока с текстом поражения
  const looseBlock = document.createElement('div');
  container.appendChild(looseBlock)
  looseBlock.classList.add('loose-block');
  
  return looseBlock
}

function renderPlayButton(container) {                            //создание кнопки "Играть"
  const playButton = document.createElement('button');
  playButton.classList.add('button');
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

function renderLooseScreen () {                                     //функция отрисовки экрана поражения
  app.textContent = ''
  
  const looseBlock = window.application.renderBlock('looseBlock', app)
	looseBlock.textContent = 'Вы проиграли!';

	const lobbyButton = window.application.renderBlock('lobbyButton', app)
  lobbyButton.textContent = 'Перейти в лобби';

	const playButton = window.application.renderBlock('playButton', app)
	playButton.textContent = 'Играть еще';
}

//window.application.renderScreen('looseScreen');
