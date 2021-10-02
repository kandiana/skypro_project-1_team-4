const getParameters = {}

location.search
	.substring(1)
	.split('&')
	.forEach((el) => {
		const [key, parameter] = el.split('=')
		getParameters[key] = decodeURIComponent(parameter)
	})

//const BACKEND_DOMEN = getParameters.backend || 'http://localhost:3000'
const BACKEND_DOMEN = getParameters.backend || 'https://skypro-rock-scissors-paper.herokuapp.com'
console.log(BACKEND_DOMEN)

const app = document.querySelector('.app')

window.application = {
	blocks: {},
	screens: {},

	renderScreen: function (screenName) {
		app.style['min-height'] = `${window.innerHeight}px`

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
	},

	timers: [],

	player: {},
	game: {},

	moves: {
		rock: 'Камень',
		scissors: 'Ножницы',
		paper: 'Бумага'
	},

	styles: {
		loader: {
			'styles-default': 'linear-gradient(rgb(115, 115, 228), rgb(181, 116, 235))',
			'styles-black-and-white': 'linear-gradient(black, white)'
		},
		body: {
			'styles-default': '#63a3ff',
			'styles-black-and-white': 'gray'
		}
	},

	settings: {
		styles: 'styles-default',
		names: 'names-default'
	}
}
