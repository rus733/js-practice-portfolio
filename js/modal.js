const modalButton = document.querySelector('.more');
const modal = document.querySelector('.modal');
//const modalClose = document.querySelector('.modal__close');
//const overlay = modal.querySelector('.overlay');

modalButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

modal.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.overlay') || target.classList.contains('modal__close')) {
    modal.classList.add('hidden');
  }
});
