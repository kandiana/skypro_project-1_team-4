window.application.screens['waitingForEnemyScreen'] = renderWaitingForEnemyScreen

//Функция отрисовки экрана
function renderWaitingForEnemyScreen() {

	const waitingForEnemyScreenTitle = window.application.renderBlock('screenTitle', app)
	waitingForEnemyScreenTitle.textContent = 'Ждем подключения другого игрока'

	window.application.renderBlock('blockLoading', app)

	//Параметры, необходимые для запроса
	const requestParameters = {
		token: window.application.player.token,
		id: window.application.game.id,
	}

	//Функция обработки полученных данных
	function recievedData(responseText) {
		const data = JSON.parse(responseText)
		console.log(data)
		if (data['game-status'].status === 'waiting-for-start') {
			return
		}

		window.application.game.enemy = data['game-status'].enemy.login
		window.application.renderScreen('playScreen')
	}

	const timer = setInterval(() => request('game-status', requestParameters, recievedData), 500)
	window.application.timers.push(timer)
}

/*window.application.renderScreen('waitingForEnemyScreen')*/
