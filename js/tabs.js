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

function changeTitle(block = designTitle, indexTitle = 0) {
  block.forEach((title, idx) => {
    if (indexTitle === idx) {
      title.classList.remove('hidden');
      document.title = title.innerText;
    } else {
      title.classList.add('hidden');
    }
  });
}

changeTitle();

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener('click', (e) => {
    const dataValue = tabButton.dataset.tabsHandler;

    changeContent(tabDescriptions, dataValue);
    changeContent(tabImages, dataValue);
    changeContent(tabImagesBlock, dataValue);
    changeTitle(designTitle, index);

    tabButtons.forEach((btn) => {
      if (btn === e.target) {
        btn.classList.add('design-list__item_active');
      } else {
        btn.classList.remove('design-list__item_active');
      }
    });
  });
});
