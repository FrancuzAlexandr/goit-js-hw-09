import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const flatpickrEl = document.querySelector("#datetime-picker");
const startBtnEl = document.querySelector("[data-start]");
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
        
  let selectDate = null;
startBtnEl.disabled = "true";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose([selectedDates]) {
        selectDate = selectedDates.getTime()
        if (selectDate <= Date.now()) {
            alert("Please choose a date in the future")
            return;
        } else {
            startBtnEl.removeAttribute("disabled");
            startBtnEl.addEventListener("click", onBtnClick);
        }
    },
};

function onBtnClick() {
timerOn();
startBtnEl.disabled = "true";
flatpickrEl.disabled = "true";
startBtnEl.removeEventListener("click", onBtnClick);
}

function timerOn() {
    const interval = setInterval(()=>  {
             
        const ms = selectDate - Date.now()
        if (ms < 0) {
            clearInterval(interval)
            flatpickrEl.removeAttribute("disabled")
            return  
        }
        const time = convertMs(ms)
        updateTimer(time)
            },1000) 
        }


function updateTimer({ days, hours, minutes, seconds }) {
    daysEl.textContent = days
    hoursEl.textContent = hours
    minutesEl.textContent = minutes
    secondsEl.textContent = seconds
}
        

 function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}     
        



 flatpickr(flatpickrEl, options);



