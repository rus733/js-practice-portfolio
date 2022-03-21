const modalButtons = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');

modalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });
});

modal.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.overlay') || target.classList.contains('modal__close')) {
    modal.classList.toggle('hidden');
  }
});
