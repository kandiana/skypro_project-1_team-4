function renderLoginScreen() {
  const app = document.querySelector('.app');
  app.textContent = '';

  const title = document.createElement('h1');
  title.textContent = 'Камень, ножницы, бумага';

  const content = document.createElement('div');
  const login = document.createElement('h2');
  login.textContent = 'Введите ваше имя';
  const inputLogin = document.createElement('input');
  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Начать игру';

  app.appendChild(title);
  app.appendChild(content);
  content.appendChild(login);
  content.appendChild(inputLogin);
  content.appendChild(buttonLogin);

  let enteredLogin;

  buttonLogin.addEventListener('touchstart', function () {
    enteredLogin = inputLogin.value;
    console.log('touch');
    console.log(enteredLogin);
  });
}

renderLoginScreen();
