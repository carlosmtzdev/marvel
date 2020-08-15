import './../style.css';
import imageFile from './../img/disneyplus-white.png';

export default {
  title: 'Marvel',
};

const image = {
  src: imageFile,
  alt: 'my image',
};

export const Promo = () => `
<section class="c-promo">
  <div class="c-promo__container">
    <p class="c-promo__title">MARVEL MOVIES & SERIES STREAMING ANYTIME ON</p>
    <p class="c-promo__description">START STREAMING NOW</p>
    <figure class="c-promo__logo">
      <img src=${image.src} alt="${image.alt}">
    </figure>
    <a class="c-promo__link" href="#" class="promo__content__btn">&nbsp;</a>
  </div>
`;

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};
