window.application.blocks['moveInfoBlock'] = renderMoveInfoBlock
window.application.screens['drawScreen'] = renderDrawScreen

function renderMoveInfoBlock(container) {
	const div = document.createElement('div')
	div.classList.add('move__info')
	container.appendChild(div)

	return div
}

function renderDrawScreen() {
	const youBlock = window.application.renderBlock('moveInfoBlock', app)

	const youText = window.application.renderBlock('playerInfoLine', youBlock)
	youText.textContent = window.application.player.login

	const youMove = window.application.renderBlock('playerInfoLine', youBlock)
	youMove.textContent = window.application.game.move

	const enemyBlock = window.application.renderBlock('moveInfoBlock', app)

	const enemy = window.application.renderBlock('playerInfoLine', enemyBlock)
	enemy.textContent = window.application.game.enemy

	const enemyMove = window.application.renderBlock('playerInfoLine', enemyBlock)
	enemyMove.textContent = window.application.game.move
}
