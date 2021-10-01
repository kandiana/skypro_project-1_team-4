window.application.blocks['mainTitle'] = renderMainTitle
window.application.blocks['loginButton'] = renderLoginButton
window.application.blocks['input'] = renderInput
window.application.blocks['authBlock'] = renderAuthBlock
window.application.screens['authScreen'] = renderAuthScreen

//Функция отрисовки блока заголовка
function renderMainTitle(container) {
    const mainTitle = document.createElement('h1')
    mainTitle.classList.add('mainTitle')
    container.appendChild(mainTitle)

    return mainTitle
}

//Функция отрисовки блока инпут
function renderInput(container) {
    const input = document.createElement('input')
    input.classList.add('input')
    container.appendChild(input)

    return input
}

//Функция отрисовки кнопки
function renderLoginButton(container) {
    const loginbutton = document.createElement('button')
    loginbutton.classList.add('button')
    container.appendChild(loginbutton)

    return loginbutton
}

//Функция отрисовки блока авторизации
function renderAuthBlock(container) {
    const div = document.createElement('div')
    div.classList.add('authBlock')
    container.appendChild(div)

    const mainTitle = window.application.renderBlock('mainTitle', div)
    mainTitle.textContent = 'Камень ножницы бумага'

    const input = window.application.renderBlock('input', div)
    input.placeholder = 'Введите логин'

    //Делаем недопустимым вводить символы
    const symbols = ['!', '"', '@', '#', '№', ';', '$', '%', '^', ':', '?', '&', '*', '(', ')', '+', '=', '{', '}', '[', ']', '<', '>', ',', ' ']

    input.addEventListener('input', function () {
        let value = input.value
        for (let i = 0; i < symbols.length; i++) {
            if (value.includes(symbols[i])) {
                let newValue = value.replace((symbols[i]), '')
                input.value = newValue
            }

        }

    })


    const loginbutton = window.application.renderBlock('loginButton', div)
    loginbutton.textContent = 'Войти'

    //По нажатию на кнопку отправляем запрос
    loginbutton.addEventListener('touchend', function () {
        window.application.renderScreen('loadingScreen')

        //Проверяем, если в поле ввода ничего нет, выходим из функции
        if (input.value === '') {
            return;
        }

        //Параметры, необходимые для запроса
        const requestParameters = {
            login: input.value
        }

        console.log(requestParameters)
        //Функция обработки полученных данных
        function recievedData(responseText) {
            const data = JSON.parse(responseText)
            console.log(data)
            window.application.player['token'] = data.token

            //После получения токена, делаем запрос статуса
            const requestParameters = {
                token: window.application.player.token
            }

            console.log(requestParameters)
            //Функция обработки полученных данных
            function recievedData(responseText) {
                const data = JSON.parse(responseText)

                if (data['player-status'].status === 'lobby') {
                    window.application.renderScreen('lobbyScreen')
                } else if (data['player-status'].status === 'game') {
                    //Делаем запрос на статус игры
                    const requestParameters = {
                        token: window.application.player.token,
                        id: window.application.game.id
                    }
                    console.log(requestParameters)

                    function recievedData(responseText) {
                        const data = JSON.parse(responseText)
                        console.log(data)

                        switch (data['game-status'].status) {
                            case 'waiting-for-start':
                                window.application.renderScreen('waitingForEnemyScreen')
                                break

                            case 'waiting-for-your-move':
                                window.application.renderScreen('drawScreen')
                                setTimeout(() => {
                                    window.application.renderScreen('playScreen')
                                }, 1000)

                            case 'waiting-for-enemy-move':
                                window.application.renderScreen('enemyMoveScreen')
                                break

                            case 'win':
                                window.application.renderScreen('winScreen')
                                break

                            case 'lose':
                                window.application.renderScreen('loseScreen')
                                break
                        }
                    }
                    request('game-status', requestParameters, recievedData)
                }

            }

            request('player-status', requestParameters, recievedData)
        }

        request('login', requestParameters, recievedData)


    })

    return div
}

//Функция отрисовки экрана
function renderAuthScreen() {
    window.application.renderBlock('authBlock', app)
}

window.application.renderScreen('authScreen')