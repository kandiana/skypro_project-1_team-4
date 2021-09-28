// Пример коллбека с искусственной задержкой в 2 секунды (чтобы можно было проверить, что показывает экран, пока ответ не пришел)
function awaitResponse(response) {
	setTimeout(() => {
		console.log(response)
	}, 2000)
}

function request(url, parameters, onSuccess) {
	/*************************************************************
	 *  Эта часть кода подождет бекэнда
	 *
	 *  // Собираем параметры запроса в строки "ключ=значение"
	 *	const requestParameters = []
	 *
	 *	for (const key in parameters) {
	 *		requestParameters.push(`${key}=${parameters[key]}`)
	 *	}
	 *
	 *	// Создаем ссылку для запроса
	 *	const requestURL = `/${url}?${requestParameters.join('&')}`
	 *
	 *************************************************************/

	/************ Заглушка ***********/

	// Собираем параметры запроса в строки "ключ=значение"
	const requestParameters = []

	for (const key in parameters) {
		if (parameters[key]) {
			requestParameters.push(`${key}=`)
		}
	}

	// Создаем ссылку для запроса
	const requestURL = `/assets/test-backend/${url}/${requestParameters.join('/')}/response.json`

	/************ Конец заглушки ***********/

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
			console.log(target.status, target.statusText)
		}
	})
}

/************************************************
 * Примеры вызовов запросов
 *
 * ВАЖНО: Ошибку можно получить, если отправить пустое значение объекта!
 *
 * /ping          - request('ping', null, awaitResponse)
 *
 * /login         - request('login', {login: 'player'}, awaitResponse)
 *                - request('login', {login: ''}, awaitResponse) - вернет json с ошибкой
 *
 * /player-status - request('player-status', {token: '895'}, awaitResponse)
 *                - request('player-status', {token: ''}, awaitResponse) - вернет json с ошибкой
 * ------ Примеры создания тестовых запросов с конкретным ответом:
 *                - request('player-status', {lobby: 'aaa'}, awaitResponse) - вернет, что игрок в лобби
 *                - request('player-status', {game: 'ыыы'}, awaitResponse) - вернет, что игрок в игре
 *
 * /start         - request('start', {token: '895'}, awaitResponse)
 *                - request('start', {token: ''}, awaitResponse) - вернет json с ошибкой
 * ------ Пример создания тестового запроса с конкретным ответом:
 *                - request('start', {ingame: 'aaa'}, awaitResponse) - вернет, что игрок в игре и не может начать новую
 *
 * /game-status   - request('game-status', {token: '895', id: '123'}, awaitResponse)
 *                - request('game-status', {token: '895', id: ''}, awaitResponse) - вернет ошибку отсутствия id
 *                - request('game-status', {token: '895'}, awaitResponse) - вернет ошибку отсутствия id
 *                - request('game-status', {token: ''}, awaitResponse) - вернет ошибку отсутствия токена
 *                - request('game-status', {token: '', id: '123'}, awaitResponse) - вернет ошибку 404
 * ------ Примеры создания тестовых запросов с конкретным ответом:
 *                - request('game-status', {token: '895', waiting-for-start: '123'}, awaitResponse) - вернет ожидание начала игры
 *                - request('game-status', {token: '895', waiting-for-your-move: '123'}, awaitResponse) - вернет ожидание хода
 *                - request('game-status', {token: '895', waiting-for-enemy-move: '123'}, awaitResponse) - вернет ожидание хода соперника
 *                - request('game-status', {token: '895', game-won: '123'}, awaitResponse) - вернет победу
 *                - request('game-status', {token: '895', game-lost: '123'}, awaitResponse) - вернет поражение
 *
 * /play          - request('play', {token: '895', id: '123', move: 'rock'}, awaitResponse) - вернет ожидание хода соперника
 *                - request('play', {token: '895', id: '123', move: ''}, awaitResponse) - вернет ошибку отсутствия хода
 *                - request('play', {token: '895', id: ''}, awaitResponse) - вернет ошибку отсутствия id
 *                - request('play', {token: ''}, awaitResponse) - вернет ошибку отсутствия токена
 * ------ Примеры создания тестовых запросов с конкретным ответом:
 *                - request('play', {token: '895', id: '123', draw: 'rock'}, awaitResponse) - вернет ожидание хода
 *                - request('play', {token: '895', id: '123', won: 'rock'}, awaitResponse) - вернет победу
 *                - request('play', {token: '895', id: '123', lost: 'rock'}, awaitResponse) - вернет поражение
 *
 * /player-list   - request('player-list', {token: '895'}, awaitResponse) - вернет json с полем you: true у текущего игрока
 *                - request('player-list', {token: ''}, awaitResponse) - вернет json без поля you: true
 *                - request('player-list', null, awaitResponse) - вернет json без поля you: true
 */
