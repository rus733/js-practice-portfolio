const timerBlock = document.querySelector('.timer__time');
const daysBlock = document.querySelector('.timer__day');
const deadline = '27 march 2022';

let intervalID;

const format = (num) => (num >= 10 ? num : `0${num}`);

function wordsForms(value, words) {
  value = Math.abs(value) % 100;
  var num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
}
// daysForms(['день', 'дня', 'дней']);
// hoursForms(['час', 'часа', 'часов']);
// minutesForms(['минута', 'минуты', 'минут']);
// secondsForms(['секунда', 'секунды', 'секунд']);

const updateClock = () => {
  const date = new Date().getTime(); //текущее время
  const dateDeadline = new Date(deadline).getTime();
  const timeRemaining = (dateDeadline - date) / 1000; // остаток времени в сек
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  daysBlock.textContent = `${format(days)} ${wordsForms(days, ['день', 'дня', 'дней'])}`;
  timerBlock.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;

  if (timeRemaining <= 0) {
    timerBlock.textContent = `00:00:00`;
    clearInterval(intervalID);
  }
};

updateClock();

intervalID = setInterval(updateClock, 500); //500 ms  если слабый процессор
