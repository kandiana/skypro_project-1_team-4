window.application.blocks['mainTitle'] = renderMainTitle
window.application.blocks['text'] = renderText
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

function renderText(container) {
    const text = document.createElement('p')
    text.classList.add('text')
    container.appendChild(text)

    return text
}

//Функция отрисовки блока инпут
function renderInput(container) {
    const input = document.createElement('input')
    input.classList.add('input')
    container.appendChild(input)

    if (window.application.player.login) {
        input.value = window.application.player.login
    }

    return input
}

//Функция отрисовки кнопки
function renderLoginButton(container) {
    const loginbutton = document.createElement('button')
    loginbutton.classList.add('button')
    loginbutton.classList.add(window.application.styles['button-style-class'])
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
    const text = window.application.renderBlock('text', div)
    text.textContent = 'Допустимые символы: буквы, цифры, " . "  "_"  " - "'

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
    loginbutton.addEventListener(window.application['button-pressed'], function () {
        //Проверяем, если в поле ввода ничего нет, выходим из функции
        if (input.value === '') {
            return;
        }

        window.application.renderScreen('loadingScreen')

        // Сохраняем введенные параметры
        window.application.player.login = input.value
        localStorage.setItem('login', input.value)

        // Параметры, необходимые для запроса
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

//window.application.renderScreen('authScreen')