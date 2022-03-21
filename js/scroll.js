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

links.forEach((link) => {
  scroll(link);
  // link.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   const id = link.getAttribute('href').substring(1); //отрежем #
  //   const section = document.getElementById(id); // найдем секцию

  //   if (section) {
  //     // полифил для плавной  прокрутки  макбуков и сафари
  //     seamless.scrollIntoView(section, {
  //       behavior: 'smooth',
  //       block: 'start',
  //       inline: 'center',
  //     });
  //   }
  // });
});

// const scroll = (block) => {
//   (e) => {
//     e.preventDefault();
//     console.log(block);
//     const id = block.getAttribute('href').substring(1); //отрежем #
//     const section = document.getElementById(id); // найдем секцию

//     if (section) {
//       seamless.scrollIntoView(section, {
//         behavior: 'smooth',
//         block: 'start',
//         inline: 'center',
//       });
//     }
//   };
// };

scroll(scrollBtn);

// scrollBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(scrollBtn);
//   const id = scrollBtn.getAttribute('href').substring(1); //отрежем #
//   const section = document.getElementById(id); // найдем секцию

//   if (section) {
//     seamless.scrollIntoView(section, {
//       behavior: 'smooth',
//       block: 'start',
//       inline: 'center',
//     });
//   }
// });
