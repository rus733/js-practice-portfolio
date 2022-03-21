const timerBlock = document.querySelector('.timer__time');
const daysBlock = document.querySelector('.timer__day');
const deadline = '27 march 2022';

let intervalID;

function wordsForms(value, words) {
  value = Math.abs(value) % 100;
  var num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
}
// wordsForms(value, ['день', 'дня', 'дней']);
// wordsForms(value, ['час', 'часа', 'часов']);
// wordsForms(value, ['минута', 'минуты', 'минут']);
// wordsForms(value, ['секунда', 'секунды', 'секунд']);

const format = (num) => {
  return num >= 10 ? num : '0' + num;
};

const updateClock = () => {
  const date = new Date().getTime();
  const dateDeadline = new Date(deadline).getTime();
  const timeRemaining = (dateDeadline - date) / 1000; // переведем в секунды все оставщееся время

  //получим часы
  const hours = Math.floor((timeRemaining / 60 / 60) % 24); // часы не более 24
  console.log('hours: ', hours);
  //получим дни
  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  // получим минуты
  const minutes = Math.floor((timeRemaining / 60) % 60); // вынесем из числа всех минут  все  часы применив целочисленное деление на 60
  const seconds = Math.floor(timeRemaining % 60);

  wordsForms(days, ['день', 'дня', 'дней']);
  daysBlock.textContent = `${format(days)}${wordsForms(days, [' день', ' дня', ' дней'])}`;
  timerBlock.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`; //format(days)

  if (timeRemaining <= 0) {
    timerBlock.textContent = `00:00:00`;
    clearInterval(intervalID);
  }
};

updateClock();

intervalID = setInterval(updateClock, 500); //500 ms  если слабый процессор
