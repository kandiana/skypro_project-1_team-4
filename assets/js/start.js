function start() {
	const app = document.querySelector('.app')
	app.style.height = 'auto'

	window.application.renderScreen('loadingScreen')

	window.application.player.login = localStorage.getItem('login')

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

