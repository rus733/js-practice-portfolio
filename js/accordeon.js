const accordeon = document.querySelector('.feature-list');
const accordeonButtons = accordeon.querySelectorAll('.feature__link'); //feature-sub

accordeonButtons.forEach((button) => {
  button.addEventListener('click', () => {
    accordeonButtons.forEach((button) => {
      button.classList.remove('feature__link_active');
      button.nextElementSibling.classList.add('hidden');
    });
    button.classList.toggle('feature__link_active');
    button.nextElementSibling.classList.toggle('hidden');
    //console.log(button.nextElementSibling);// next element for button
  });
});
