window.application.blocks['moveInfoBlock'] = renderMoveInfoBlock
window.application.screens['drawScreen'] = renderDrawScreen

function renderMoveInfoBlock(container) {
	const div = document.createElement('div')
	div.classList.add('move__info')
	container.appendChild(div)

	return div
}

function renderDrawScreen() {
	const title = window.application.renderBlock('title', app)
	title.textContent = 'Ничья'

	const youBlock = window.application.renderBlock('moveInfoBlock', app)

	const youName = window.application.renderBlock('playerInfoLine', youBlock)
	youName.classList.add('draw__subtitle')
	youName.textContent = window.application.player.login

	const youMove = window.application.renderBlock('playerInfoLine', youBlock)
	youMove.textContent = window.application.game.move

	const enemyBlock = window.application.renderBlock('moveInfoBlock', app)

	const enemyName = window.application.renderBlock('playerInfoLine', enemyBlock)
	enemyName.classList.add('draw__subtitle')
	enemyName.textContent = window.application.game.enemy

	const enemyMove = window.application.renderBlock('playerInfoLine', enemyBlock)
	enemyMove.textContent = window.application.game.move
}
