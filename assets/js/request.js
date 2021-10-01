// Пример коллбека с искусственной задержкой в 2 секунды (чтобы можно было проверить, что показывает экран, пока ответ не пришел)
function awaitResponse(response) {
	setTimeout(() => {
		console.log(response)
	}, 2000)
}

function request(url, parameters, onSuccess) {
	// Собираем параметры запроса в строки "ключ=значение"
	const requestParameters = []

	for (const key in parameters) {
		requestParameters.push(`${key}=${parameters[key]}`)
	}

	// Создаем ссылку для запроса
	const requestURL = `${BACKEND_DOMEN}/${url}?${requestParameters.join('&')}`

	// Открываем запрос и посылаем его с созданной ссылкой
	const xhr = new XMLHttpRequest()
	xhr.open('GET', requestURL)
	xhr.send()

	// Запускаем ожидание ответа
	xhr.addEventListener('readystatechange', (event) => {
		const target = event.target

		if (target.readyState !== 4) {
			return
		}

		if (target.status === 200) {
			onSuccess(target.responseText)
		} else {
			window.application.renderScreen('errorScreen')
		}
	})
}

/************************************************
 * Пример вызова запроса
 *
 * /ping          - request('ping', null, awaitResponse)
 * /login         - request('login', {login: '...'}, awaitResponse)
 *
 ************************************************/
