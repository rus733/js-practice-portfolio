const scrollBtn = document.querySelector('.main__scroll');
const links = document.querySelectorAll('.menu-list__link');

const scroll = (block) => {
  block.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(block);
    const id = block.getAttribute('href').substring(1); //отрежем #
    const section = document.getElementById(id); // найдем секцию

    if (section) {
      seamless.scrollIntoView(section, {
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  });
};

scroll(scrollBtn);

links.forEach((link) => {
  scroll(link);
});
