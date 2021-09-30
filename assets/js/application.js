const BACKEND_DOMEN = 'https://79c4-178-64-139-61.ngrok.io/'

const app = document.querySelector('.app')

// тоже своеобразная константа: на телефонах ест адресная строка, которая отъедает кусок от экрана неизвестного размера
// строчка ниже же ставит высоту страницы равной высоте видимого окна
document.body.style.height = `${window.innerHeight}px`

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
	},

	timers: [],

	player: {},
	game: {},
}
