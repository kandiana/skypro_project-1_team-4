function start() {
	const app = document.querySelector('.app')
	app.style.height = 'auto'

	if(!localStorage.getItem('loader-background-color')) {
		localStorage.setItem('loader-background-color', window.application.styles.loader['styles-default'])
	}

	if(!localStorage.getItem('main-background-color')) {
		localStorage.setItem('main-background-color', window.application.styles.body['styles-default'])
	}

	document.body.style.setProperty('--main-background-color', localStorage.getItem('main-background-color'))

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

