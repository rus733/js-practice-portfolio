const timerBlock = document.querySelector('.timer__time');
const deadline = '21 march 2022';

let intervalID;

const format = (num) => {
  return num >= 10 ? num : '0' + num;
};

const updateClock = () => {
  const date = new Date().getTime();
  const dateDeadline = new Date(deadline).getTime();
  const timeRemaining = (dateDeadline - date) / 1000; // переведем в секунды все оставщееся время
  //получим часы
  const hours = Math.floor(timeRemaining / 60 / 60);
  // получим минуты
  const minutes = Math.floor((timeRemaining / 60) % 60); // вынесем из числа всех минут  все  часы применив целочисленное деление на 60
  const seconds = Math.floor(timeRemaining % 60);

  timerBlock.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;

  if (timeRemaining <= 0) {
    clearInterval(intervalID);
    timerBlock.textContent = `00:00:00`;
  }
};

updateClock();

intervalID = setInterval(updateClock, 500); //500 ms  если слабый процессор
