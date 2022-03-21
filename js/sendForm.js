const forms = document.querySelectorAll('form');
const URL = 'https://jsonplaceholder.typicode.com/posts';

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const body = {};

    // добавим в formData пометку формы в виде ключ-значение
    formData.append('form', form.classList.value);

    formData.forEach((value, field) => {
      body[field] = value;
    });

    fetch(URL, {
      method: 'POST',
      // поставим свои данные в body
      body: JSON.stringify(body), //переведем обьект в формат строки
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        console.log('Данные отправлены успешно !');
      })
      .catch((error) => {
        console.log('Данные отправлены с ошибкой ' + error.message);
      })
      .finally(() => {
        form.reset();
      });
  });
});
