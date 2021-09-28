const player = {
	login: '',
	token: '',
	status: '',
}

const game = {
	id: '',
	status: '',
}

const app = document.querySelector('.app')

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

		app.textContent = '';

		//Проверяем существует ли страница, которую передаем в функцию
		if (window.application.screens[screenName] === undefined) {
			console.log(`Страница ${screenName} не существует`)
			return;
		}
		//Вызываем функцию из поля screens 
		window.application.screens[screenName]()
		console.log(`Страница ${screenName} отрисована`)
	},

	renderBlock: function (blockName, container) {
		//Проверяем существует ли блок, который передаем в функцию
		if (window.application.blocks[blockName] === undefined) {
			console.log(`Блок ${blockName} не существует`)
			return;
		}
		//Вызываем функцию из поля blocks 
		window.application.blocks[blockName](container)
		console.log(`Блок ${blockName} отрисован`)
	},

	timers: []
}

//Добавляем функции в поле объекта
window.application.blocks['example-button'] = renderExampleButton;
window.application.blocks['example-input'] = renderExampleInput;
window.application.blocks['example-title'] = renderBlockTitle;

function renderExampleButton(container) {

	const button = document.createElement('button');
	button.textContent = 'Кнопка'

	button.addEventListener('click', () => {
		console.log('click');
	});

	container.appendChild(button)
}

function renderBlockTitle(container) {

	const title = document.createElement('h1')
	title.textContent = 'Заголовок'

	container.appendChild(title)
}

function renderExampleInput(container) {

	const input = document.createElement('input');

	container.appendChild(input);
}

//Добавляем функции в поле объекта
window.application.screens['example'] = renderExampleScreen;
window.application.screens['another-example'] = renderExampleAnotherScreen;

function renderExampleScreen() {
	const app = document.querySelector('.app');
	app.textContent = '';

	window.application.renderBlock('example-title', app)
	window.application.renderBlock('example-button', app)
}

function renderExampleAnotherScreen() {
	const app = document.querySelector('.app');
	app.textContent = '';

	window.application.renderBlock('example-title', app)
	window.application.renderBlock('example-input', app)
}

