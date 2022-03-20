const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabImagesBlock = document.querySelectorAll('.design-block__img');
const designTitle = document.querySelectorAll('.design__title');

function changeContent(array, value) {
  array.forEach((element) => {
    if (element.dataset.tabsField === value) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  });
}

function changeTitle(block) {
  block.forEach((title) => {
    if (!title.classList.contains('hidden')) {
      document.title = title.innerText;
    }
  });
}

// function changeTitle(block) {
//   block.forEach((title) => {
//     if (!title.classList.contains('hidden')) {
//       document.title = title.innerText;
//     }
//   });
//}

changeTitle(designTitle);

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (e) => {
    const dataValue = tabButton.dataset.tabsHandler;

    changeContent(tabDescriptions, dataValue);
    changeContent(tabImages, dataValue);
    changeContent(tabImagesBlock, dataValue);
    changeContent(designTitle, dataValue);
    changeTitle(designTitle);
    // designTitle.forEach((title) => {
    //   if (!title.classList.contains('hidden')) {
    //     document.title = title.innerText;
    //   }
    // });

    tabButtons.forEach((btn) => {
      if (btn === e.target) {
        btn.classList.add('design-list__item_active');
      } else {
        btn.classList.remove('design-list__item_active');
      }
    });
  });
});
