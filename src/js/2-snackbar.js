// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(resolvedDelay => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
        position: 'topRight',
        backgroundColor: '#64b40e',
        messageColor: '#fff',
        titleColor: '#fff',
        iconColor: '#fff',
      });
    })
    .catch(rejectedDelay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
        position: 'topRight',
        backgroundColor: '#e92626',
        messageColor: '#fff',
        titleColor: '#fff',
        iconColor: '#fff',
      });
    });

  form.reset();
});
