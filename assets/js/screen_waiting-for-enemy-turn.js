window.application.blocks['enemyMoveBlock'] = renderEnemyMoveBlock
window.application.screens['enemyMoveScreen'] = renderEnemyMoveScreen


function renderEnemyMoveBlock(container) {
    const loader = document.createElement("div");
    loader.classList.add = "loader"
    loader.textContent = "Ожидание хода оппонента"
    container.appendChild(loader);   
}


function renderEnemyMoveScreen() {
    app.textContent = ""

    window.application.renderBlock('enemyMoveBlock')
}

// window.application.renderScreen('enemyMoveScreen')

