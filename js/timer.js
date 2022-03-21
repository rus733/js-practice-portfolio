const timerBlock = document.querySelector('.timer__time');
//const daysBlock = document.querySelector('.timer__day');//ver 1
const deadline = '31 march 2022';
let intervalID;

const format = (num) => (num >= 10 ? num : `0${num}`);
// не совсем полная версия
//const wordsForms2 = (arg, words) => (arg >= 5 || arg < 1 ? words[2] : arg >= 2 ? words[1] : words[0]);
//['день', 'дня', 'дней']//
const wordsForms = (value, words) => {
  value = Math.abs(value) % 100;
  let num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
};
const updateClock = () => {
  const dateNow = new Date().getTime(); //текущее время
  //const dateDeadline = new Date(2022, 2, 31, 0, 0, 0); // В формате: год, месяц (от 0), число, час, минута, секунда
  const dateDeadline = new Date(deadline).getTime();
  const timeRemaining = (dateDeadline - dateNow) / 1000; // остаток времени в сек
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);
  // ver 1
  //daysBlock.textContent = `${format(days)} ${wordsForms(days, ['день', 'дня', 'дней'])}`;
  // timerBlock.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
  // ver 2
  timerBlock.innerHTML = `
    <table>
        <tr>
          <td>${format(days)}</td>
          <td style="padding-left:0.2em;padding-right:0.15em;">:</td>
          <td>${format(hours)}</td>
          <td style="padding-left:0.2em;padding-right:0.15em;">:</td>
          <td>${format(minutes)}</td>
          <td style="padding-left:0.2em;padding-right:0.15em;">:</td>
          <td>${format(seconds)}</td>
        </tr>
        <tr style="font-size:0.2em;">
          <td>${wordsForms(days, ['день', 'дня', 'дней'])}</td>
          <td></td>
          <td>${wordsForms(hours, ['час', 'часа', 'часов'])}</td>
          <td></td>
          <td>${wordsForms(minutes, ['минута', 'минуты', 'минут'])}</td>
          <td></td>
          <td>${wordsForms(seconds, ['секунда', 'секунды', 'секунд'])}</td>
        </tr>
      </table>
  `;

  if (timeRemaining <= 0) {
    timerBlock.textContent = `00:00:00`;
    clearInterval(intervalID);
  }
};

updateClock();

intervalID = setInterval(updateClock, 500); //500 ms  если слабый процессор
