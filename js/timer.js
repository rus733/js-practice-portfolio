const timerBlock = document.querySelector('.timer__time');

const format = (num) => {
  return num >= 10 ? num : '0' + num;
};

const updateClock = () => {
  // const date = new Date();
  // const hours = date.getHours(),
  //   minutes = date.getMinutes(),
  //   seconds = date.getSeconds();

  const date = new Date().getTime();
  const dateDeadline = new Date('30 march 2022').getTime();
  const timeRemaining = (dateDeadline - date) / 1000; // переведем в секунды все оставщееся время
  //получим часы
  const hours = Math.floor(timeRemaining / 60 / 60);
  // получим минуты
  const minutes = Math.floor((timeRemaining / 60) % 60); // вынесем из числа всех минут  все  часы применив целочисленное деление на 60
  const seconds = Math.floor(timeRemaining % 60);

  timerBlock.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
};
updateClock();

const intervalID = setInterval(updateClock, 500); //500 ms  если слабый процессор
