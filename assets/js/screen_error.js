window.application.screens['errorScreen'] = renderErrorScreen

function renderErrorScreen() {
	const error = window.application.renderBlock('screenTitle', app)
	error.classList.add('error')
	error.textContent = `Нет соединения с сервером`
}
