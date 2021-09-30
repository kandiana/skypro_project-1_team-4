window.application.blocks['enemyMoveBlock'] = renderEnemyMoveBlock
window.application.screens['enemyMoveScreen'] = renderEnemyMoveScreen



function renderEnemyMoveBlock(container) {
    const loader = document.createElement('h1')
    loader.classList.add('loader')
    container.appendChild(loader)
    return loader;
}

function renderEnemyMoveScreen() {                              //отрисовка экрана
    app.textContent = ""
    
    const loader = window.application.renderBlock('enemyMoveBlock')
    loader.textContent = 'Ожидание хода соперника'
}

//  window.application.renderScreen('playScreen')
// window.application.renderScreen('enemyMoveScreen')



// function recievedData(responseText) {
//     const data = JSON.parse(responseText)
//     console.log(data)
//     switch (data["game-status"].status !== 'waiting-for-enemy-move') {
//         window.application.renderScreen('playScreen')
//     }
//     case  (data["game-status"].status !== 'waiting-for-enemy-move')
// }

const timer = setInterval(() => request('game-status', requestParameters, recievedData), 500)
window.application.timers.push(timer)

switch (window.application.game.status) {
    case 'waiting-for-enemy-move':
        window.application.renderScreen('enemyMoveScreen')
        break
    case 'waiting-for-your-move':
            window.application.renderScreen('playScreen')
        break
    case 'win':
            window.application.renderScreen('winScreen')
        break
    case 'loose':
            window.application.renderScreen('looseScreen')
        break    
}    
