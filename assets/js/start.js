function start() {
	// const body = document.body

	//	пример изменения переменной css
	//	body.style.setProperty('--main-background-color', '#cccccc')

	const body = document.body
	body.style.height = `${window.innerHeight}px`

	window.application.renderScreen('loadingScreen')
	window.application.player.login = localStorage.getItem('login')
	window.application.game.id = localStorage.getItem('game-id')
	window.application.game.move = localStorage.getItem('game-move')
	window.application.game.enemy = localStorage.getItem('game-enemy')

	//определяем, какое события прослушивать в зависимости от браузера
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		window.application['button-pressed'] = 'touchend'
	  } else {
		window.application['button-pressed'] = 'click'
	}

	// делаем ping запрос на сервер, если получаем ответ, переходим в лобби
	request('ping', null, () => {
		window.application.renderScreen('authScreen')
	})
}

start()
