window.application.blocks['screenTitle'] = renderScreenTitle
window.application.blocks['playersList'] = renderPlayersList
window.application.blocks['playerInfoLine'] = renderPlayerInfoLine
window.application.blocks['playButton'] = renderPlayButton
window.application.screens['lobbyScreen'] = renderLobbyScreen

// Функция отрисовки заголовка
function renderScreenTitle(container) {
	const screenTitle = document.createElement('h1')
	screenTitle.classList.add('title')
	container.appendChild(screenTitle)

	return screenTitle
}

// Функция отрисовки списка игроков онлайн
function renderPlayersList(container) {
	const playersList = document.createElement('ul')
	playersList.classList.add('lobby__players')
	container.appendChild(playersList)

	// достаем информацию, необходимую для запроса
	const requestParameters = {
		token: player.token,
	}

	// запрашиваем список залогиненных игроков каждую секунду
	const getOnlinePlayers = setInterval(() => {
		request('player-list', requestParameters, (data) => {
			processRecievedPlayersListData(data, playersList)
		})
	}, 1000)

	// сохраняем таймер, чтобы была возможность его очистить
	window.application.timers.push(getOnlinePlayers)

	return playersList
}

// Функция обработки запроса списка игроков
function processRecievedPlayersListData(responseText, container) {
	const response = JSON.parse(responseText)
	let playerInfoLine

	// отрисовывем список игроков после получения ответа
	container.textContent = ''
	for (const player of response.list) {
		playerInfoLine = window.application.renderBlock('playerInfoLine', container)
		playerInfoLine.textContent = player.login

		// выделяем цветом логин игрока, который смотрит на экран
		if (player.you) {
			playerInfoLine.classList.add('lobby__players_you')
		}
	}
}

// Функция отрисовки одной строки списка игроков
function renderPlayerInfoLine(container) {
	const playerInfoLine = document.createElement('li')
	playerInfoLine.classList.add('list-item')
	container.appendChild(playerInfoLine)

	return playerInfoLine
}

// Функция отрисовки кнопки "играть"
function renderPlayButton(container) {
	const playButton = document.createElement('button')
	playButton.classList.add('button')
	container.appendChild(playButton)

	// нажатие срабатывает, если
	playButton.addEventListener('touchend', startGame)

	return playButton
}

// Функция реакции на нажатие кнопки "играть"
function startGame(event) {
	const requestParameters = {
		token: player.token,
	}

	// запрашиваем начало игры
	request('start', requestParameters, processRecievedGameStartData)
}

// Функция обработки запроса начала игры
function processRecievedGameStartData(responseText) {
	const startGameResponse = JSON.parse(responseText)
	console.log(startGameResponse)

	game.id = startGameResponse['player-status'].game.id
	player.status = startGameResponse['player-status'].status

	console.log(game)

	const requestParameters = {
		token: player.token,
		id: game.id,
	}

	// const requestParameters = {
	// 	token: player.token,
	// 	'waiting-for-your-move': game.id,
	// }

	// запрашиваем статус игры (есть ли противник)
	request('game-status', requestParameters, processRecievedGameStatusData)
}

// Функция обработки запроса статуса игры
function processRecievedGameStatusData(responseText) {
	const gameResponse = JSON.parse(responseText)

	game.status = gameResponse['game-status'].status

	// Подгружаем разные экраны в зависимости от наличия противника
	switch (game.status) {
		case 'waiting-for-start':
			window.application.renderScreen('waitingForEnemyScreen')
			break
		case 'waiting-for-your-move':
			window.application.renderScreen('playScreen')
			break
	}
}

// Функция отрисовки экрана Лобби
function renderLobbyScreen() {
	app.textContent = ''

	const lobbyTitle = window.application.renderBlock('screenTitle', app)
	lobbyTitle.textContent = 'Лобби'

	const playersList = window.application.renderBlock('playersList', app)

	const playButton = window.application.renderBlock('playButton', app)
	playButton.textContent = 'Играть'
}

// функцию ниже надо запустить в консоли
// window.application.renderScreen('lobbyScreen')
