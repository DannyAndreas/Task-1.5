const swiper = new Swiper('.mySwiper', {
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1.4,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});

const button = document.querySelector('button');
const text = document.querySelector('.tabletop-hidden');
const buttonImg = document.querySelector('.button-img');
let isHidden = true;

button.addEventListener('click', () => {
  if (isHidden) {
    buttonImg.style.transform = 'rotate(180deg)';
    text.style.display = 'flex';
    button.textContent = 'Скрыть все';

    isHidden = false;
  } else {
    buttonImg.style.transform = 'rotate(0deg)';
    text.style.display = 'none';
    button.textContent = 'Показать все';
    isHidden = true;
  }
});
