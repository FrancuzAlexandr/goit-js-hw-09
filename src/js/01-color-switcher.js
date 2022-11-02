  const startBtnEl = document.querySelector("[data-start]");
  const stopBtnEl = document.querySelector("[data-stop]");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  let timerId = null;

  startBtnEl.addEventListener("click", onStartBtnClick);
  stopBtnEl.addEventListener("click", onStopBtnClick);

  stopBtnEl.disabled = "true";

 function onStartBtnClick() {
    stopBtnEl.removeAttribute("disabled");
    startBtnEl.disabled = "true";

    timerId = setInterval(bgColorSwitch, 1000);
 }

 function onStopBtnClick() {
    startBtnEl.removeAttribute("disabled");
    stopBtnEl.disabled = "true";

    clearInterval(timerId)
 }

function bgColorSwitch() {
    document.body.style.backgroundColor = getRandomHexColor();
}





