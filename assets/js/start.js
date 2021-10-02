function start() {
	// const body = document.body

	//	пример изменения переменной css
	//	body.style.setProperty('--main-background-color', '#cccccc')

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
