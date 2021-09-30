window.application.blocks['screenTitle'] = renderScreenTitle;
window.application.blocks['input'] = renderInput;
window.application.blocks['login-button'] = renderloginButton;
window.application.screens['auth'] = renderAuthScreen;

// Функция отрисовки заголовка
function renderScreenTitle(container) {
  const screenTitle = document.createElement('h1');
  screenTitle.classList.add('title');
  container.appendChild(screenTitle);

  return screenTitle;
}

// Функция отрисовки поля ввода
function renderInput(container) {
  const input = document.createElement('input');
  input.classList.add('input');

  container.appendChild(input);

  return input;
}

// Функция отрисовки кнопки "Начать играть"
function renderloginButton(container) {
  const loginButton = document.createElement('button');
  loginButton.classList.add('button');

  container.appendChild(loginButton);

  return loginButton;
}

// Функция отрисовки экрана Логин
function renderAuthScreen() {
  app.textContent = '';
  const mainTitle = window.application.renderBlock('screenTitle', app);
  mainTitle.textContent = 'Камень, ножницы, бумага';

  const input = window.application.renderBlock('input', app);
  input.placeholder = 'Ваш логин';

  const loginButton = window.application.renderBlock('login-button', app);
  loginButton.textContent = 'Начать играть';

  loginButton.addEventListener('touchend', function () {
    player.login = input.value;

        //Функция обработки полученных данных
        function recievedData(responseText) {
            const data = JSON.parse(responseText)
            player.token = data.token

        request('login', {login: ${player.login}}, recievedData)
    };
  }
}

window.application.renderScreen('auth');


// function renderLoginScreen() {
//   const app = document.querySelector('.app');
//   app.textContent = '';

//   const title = document.createElement('h1');
//   title.textContent = 'Камень, ножницы, бумага';

//   const content = document.createElement('div');
//   const login = document.createElement('h2');
//   login.textContent = 'Введите ваше имя';
//   const inputLogin = document.createElement('input');
//   const buttonLogin = document.createElement('button');
//   buttonLogin.textContent = 'Начать игру';

//   app.appendChild(title);
//   app.appendChild(content);
//   content.appendChild(login);
//   content.appendChild(inputLogin);
//   content.appendChild(buttonLogin);

//   let enteredLogin;

//   buttonLogin.addEventListener('touchstart', function () {
//     enteredLogin = inputLogin.value;
//     console.log('touch');
//     console.log(enteredLogin);
//   });
// }

// renderLoginScreen();
