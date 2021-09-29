window.application.blocks['screenTitle'] = renderBlockScreenTitle;
window.application.blocks['moveButton'] = renderButton;
window.application.blocks['playBlock'] = renderPlayBlock;
window.application.screens['playScreen'] = renderPlayScreen;

//Функция отрисовки заголовка
function renderBlockScreenTitle(container) {
    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Ход'
    container.appendChild(title)
}

//Функция отрисовки кнопки 
function renderButton(container) {
    const button = document.createElement('button')
    container.appendChild(button)
    return button
}

//Функция отрисовки блока игры
function renderPlayBlock(container) {
    //создаем контейнер для кнопок
    const div = document.createElement('div')
    div.classList.add('playBlock')
    container.appendChild(div)

    //отрисовка кнопки "Камень"
    const rock = window.application.renderBlock('moveButton', div)
    rock.classList.add('rock')
    rock.textContent = 'Камень'

    //отрисовка кнопки "Ножницы"
    const scissors = window.application.renderBlock('moveButton', div)
    scissors.classList.add('scissors')
    scissors.textContent = 'Ножницы'

    //отрисовка кнопки "Бумага"
    const paper = window.application.renderBlock('moveButton', div)
    paper.classList.add('paper')
    paper.textContent = 'Бумага'

    //По нажатию на кнопку отправляем запрос
    div.addEventListener('touchend', function (e) {

        //Параметры, необходимые для запроса
        const requestParameters = {
            token: player.token,
            id: game.id,
            move: `${e.target.className}`
        }

        //Функция обработки полученных данных
        function recievedData(responseText) {
            const data = JSON.parse(responseText)
            switch (data["game-status"].status) {
                case 'waiting-for-enemy-move':
                    window.application.renderScreen('enemyMoveScreen')
                    break;

                case 'win':
                    window.application.renderScreen('winScreen')
                    break;

                case 'loose':
                    window.application.renderScreen('looseScreen')
                    break;
            }
        }

        request('play', requestParameters, recievedData)

        return div;
    })

}

//Функция отрисовки экрана
function renderPlayScreen() {
    window.application.renderBlock('screenTitle', app)
    window.application.renderBlock('playBlock', app)
}

/*window.application.renderScreen('playScreen')*/

