import Notiflix from 'notiflix';

const formEl = document.querySelector("form");

formEl.addEventListener("submit", handleSubmitBtn);

function handleSubmitBtn(event) {
  event.preventDefault();
  let formDelay = Number(formEl.delay.value);
  const formStep = Number(formEl.step.value);
  const formAmount = Number(formEl.amount.value);
  for (let i = 1; i <= formAmount; i+=1) {
    createPromise  (i, formDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    formDelay += formStep;
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position,delay});
      } else {
        reject({position,delay});
      }
    }, delay);
  });
}

