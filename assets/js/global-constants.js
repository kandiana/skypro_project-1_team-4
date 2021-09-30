const player = {
	login: '',
	token: '895',
	status: '',
}

const game = {
	id: '',
	status: '',
}

const backendDomen = 'http://localhost:3000'

const app = document.querySelector('.app')

// тоже своеобразная константа: на телефонах ест адресная строка, которая отъедает кусок от экрана неизвестного размера
// строчка ниже же ставит высоту страницы равной высоте видимого окна
document.body.style.height = window.innerHeight + 'px'

window.application = {
	blocks: {},
	screens: {},
	renderScreen: function (screenName) {
		//Проходимся по массиву timers
		for (let timer of window.application.timers) {
			clearInterval(timer) //отменяем setInterval на каждом элементе
			timer === undefined
		}
		window.application.timers = [] //очищаем массив

		//Проверяем существует ли страница, которую передаем в функцию
		if (window.application.screens[screenName] === undefined) {
			console.log(`Страница ${screenName} не существует`)
			return
		}

		//Очищаем содержимое экрана
		app.textContent = ''

		//Вызываем функцию из поля screens
		window.application.screens[screenName]()
		console.log(`Страница ${screenName} отрисована`)
	},

	renderBlock: function (blockName, container) {
		//Проверяем существует ли блок, который передаем в функцию
		if (window.application.blocks[blockName] === undefined) {
			console.log(`Блок ${blockName} не существует`)
			return
		}
		//Вызываем функцию из поля blocks
		return window.application.blocks[blockName](container)
		console.log(`Блок ${blockName} отрисован`)
	},

	timers: [],
}

//Добавляем функции в поле объекта
window.application.blocks['example-button'] = renderExampleButton
window.application.blocks['example-input'] = renderExampleInput
window.application.blocks['example-title'] = renderBlockTitle

function renderExampleButton(container) {
	const button = document.createElement('button')
	button.textContent = 'Кнопка'

	button.addEventListener('click', () => {
		console.log('click')
	})

	container.appendChild(button)
	return button
}

function renderBlockTitle(container) {
	const title = document.createElement('h1')
	title.textContent = 'Заголовок'

	container.appendChild(title)
	return title
}

function renderExampleInput(container) {
	const input = document.createElement('input')

	container.appendChild(input)
	return input
}

//Добавляем функции в поле объекта
window.application.screens['example'] = renderExampleScreen
window.application.screens['another-example'] = renderExampleAnotherScreen

function renderExampleScreen() {
	const app = document.querySelector('.app')
	app.textContent = ''

	window.application.renderBlock('example-title', app)
	window.application.renderBlock('example-button', app)
}

function renderExampleAnotherScreen() {
	const app = document.querySelector('.app')
	app.textContent = ''

	window.application.renderBlock('example-title', app)
	window.application.renderBlock('example-input', app)
}
