window.application.screens["waitingForEnemyScreen"] = renderWaitingForEnemyScreen;
window.application.blocks["loading"] = renderBlockLoading;

//Функция отрисовки блока (пока без стилей, потом добавим что нибудь на время ожидания)
function renderBlockLoading(container) {
  const text = document.createElement("h1");
  text.classList.add("loading");
  text.textContent = "Ожидание игры";
  container.appendChild(text);
  return text;
}

//Функция отрисовки экрана
function renderWaitingForEnemyScreen() {
  window.application.renderBlock("loading", app);

  //Параметры, необходимые для запроса
  const requestParameters = {
    token: window.application.player.token,
    id: window.application.game.id,
  };

  //Функция обработки полученных данных
  function recievedData(responseText) {
    const data = JSON.parse(responseText);
    console.log(data);
    if (data["game-status"].status === "waiting-for-start") {
      return;
    }
    window.application.renderScreen("playScreen");
  }

  const timer = setInterval(
    () => request("game-status", requestParameters, recievedData),
    500
  );
  window.application.timers.push(timer);
}

/*window.application.renderScreen('waitingForEnemyScreen')*/
