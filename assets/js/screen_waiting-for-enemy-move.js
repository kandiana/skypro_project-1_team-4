window.application.blocks['enemyMoveBlock'] = renderEnemyMoveBlock
window.application.screens['enemyMoveScreen'] = renderEnemyMoveScreen

function renderEnemyMoveBlock(container) {
  //отрисовка блока информации экрана
  const loader = document.createElement('div');
  loader.classList.add('loader');
  container.appendChild(loader);
  return loader;
}

function renderEnemyMoveScreen() {
  //отрисовка экрана
  const loader = window.application.renderBlock('enemyMoveBlock', app);


	//  window.application.renderScreen('playScreen')
	// window.application.renderScreen('enemyMoveScreen')

	const requestParameters = {
		token: window.application.player.token,
		id: window.application.game.id,
	}

	function processRecievedData(responseText) {
		const data = JSON.parse(responseText)
		console.log(data)

		switch (
			data['game-status'].status //конструкция исхода событий игры
		) {
			case 'waiting-for-enemy-move':
				break
			case 'waiting-for-your-move':
				window.application.renderScreen('drawScreen')
				setTimeout(() => {
					window.application.renderScreen('playScreen')
				}, 1000)
				break
			case 'win':
				window.application.renderScreen('winScreen')
				break
			case 'lose':
				window.application.renderScreen('loseScreen')
				break
		}
	}

	const timer = setInterval(() => request('game-status', requestParameters, processRecievedData), 500)
	window.application.timers.push(timer)
}
