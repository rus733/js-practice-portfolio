const scrollBtn = document.querySelector('.main__scroll');
const links = document.querySelectorAll('.menu-list__link');

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href').substring(1); //отрежем #
    const section = document.getElementById(id); // найдем секцию

    if (section) {
      // section.scrollIntoView({
      //   block: 'start',
      //   behavior: 'smooth',
      // });
      // полифил для плавной  прокрутки  макбуков и сафари
      seamless.scrollIntoView(section, {
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  });
});

scrollBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const id = scrollBtn.getAttribute('href').substring(1); //отрежем #
  const section = document.getElementById(id); // найдем секцию

  if (section) {
    // section.scrollIntoView({
    //   block: 'start',
    //   behavior: 'smooth',
    // });
    seamless.scrollIntoView(section, {
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  }
});
