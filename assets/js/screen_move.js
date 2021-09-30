window.application.blocks['screenTitle'] = renderScreenTitle
window.application.blocks['moveButton'] = renderButton
window.application.blocks['playBlock'] = renderPlayBlock
window.application.screens['playScreen'] = renderPlayScreen

//Функция отрисовки заголовка

function renderScreenTitle(container) {
    const screenTitle = document.createElement('h1')
    screenTitle.classList.add('title')
    container.appendChild(screenTitle)

    return screenTitle
}

//Функция отрисовки кнопки
function renderButton(container) {
    const button = document.createElement('button')
    button.classList.add('button')
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

    rock.dataset.name = 'rock'
    rock.textContent = 'Камень'

    //отрисовка кнопки "Ножницы"
    const scissors = window.application.renderBlock('moveButton', div)
    scissors.dataset.name = 'scissors'
    scissors.textContent = 'Ножницы'

    //отрисовка кнопки "Бумага"

    const paper = window.application.renderBlock('moveButton', div)
    paper.dataset.name = 'paper'
    paper.textContent = 'Бумага'

    //По нажатию на кнопку отправляем запрос
    div.addEventListener('touchend', function (e) {
        console.log(e)
        console.log(e.target.dataset.name)
        //Параметры, необходимые для запроса
        const requestParameters = {
            token: window.application.player.token,
            id: window.application.game.id,
            move: `${e.target.dataset.name}`,
        }
        console.log(requestParameters)
        //Функция обработки полученных данных
        function recievedData(responseText) {
            const data = JSON.parse(responseText)
            console.log(data)
            switch (data['game-status'].status) {
                case 'waiting-for-enemy-move':
                    window.application.renderScreen('enemyMoveScreen')
                    break

                case 'win':
                    window.application.renderScreen('winScreen')
                    break

                case 'loose':
                    window.application.renderScreen('looseScreen')
                    break
            }
        }

        request('play', requestParameters, recievedData)

        return div
    })
}

//Функция отрисовки экрана
function renderPlayScreen() {
    const title = window.application.renderBlock('screenTitle', app)
    title.textContent = 'Ход'
    window.application.renderBlock('playBlock', app)
}

/*window.application.renderScreen('playScreen')*/
