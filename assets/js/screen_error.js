window.application.screens['errorScreen'] = renderErrorScreen

function renderErrorScreen() {
	const error = window.application.renderBlock('screenTitle', app)
	error.classList.add('error')
	error.textContent = `Потеряно соединение с сервером`
}
