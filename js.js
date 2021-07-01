const link = document.querySelector('imgBx');
const detail = document.querySelector('.detail');

link.addEventListener('click', () => {
    detail.classList.toggle('is-visible');
})