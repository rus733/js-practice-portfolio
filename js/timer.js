const timerBlock = document.querySelector('.timer__time');

const format = (num) => {
  return num >= 10 ? num : '0' + num;
};

const updateClock = () => {
  const data = new Date();
  const hours = data.getHours(),
    minutes = data.getMinutes(),
    seconds = data.getSeconds();

  timerBlock.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
};
updateClock();

const intervalID = setInterval(updateClock, 500); //500 ms  если слабый процессор
