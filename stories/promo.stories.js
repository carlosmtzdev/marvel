import imageFile from './../img/disneyplus-white.png';

import promo from './../img/promo.jpg';

export default {
  title: 'Promo',
};


export const PromoTop = () => `
  <section class="c-promo-top">
      <div class="c-promo-top__container">
          <p class="c-promo-top__title">MARVEL MOVIES & SERIES STREAMING ANYTIME ON</p>
          <p class="c-promo-top__description">START STREAMING NOW</p>
          <figure class="c-promo-top__logo">
              <img src=${imageFile}>
          </figure>
          <a class="c-promo-top__link" href="#" class="promo__content__btn">&nbsp;</a>
      </div>
  </section>
`
export const PromoBottom = () => `
<section class="c-promo-bottom">
    <div class="c-promo-bottom__container">
        <div class="c-promo-bottom__background">
            <div class="c-promo-bottom__background__container">
                <div class="c-promo-bottom__background__image">
                    <figure>
                        <source srcset="img/promo-dsk.jpg" media="(min-width: 839px)">
                        <img src=${promo} alt="">
                    </figure>
                </div>
            </div>

        </div>
        <div class="c-promo-bottom__content">
            <h3 class="c-promo-bottom__head">Marvel Mastercard®</h3>
            <p class="c-promo-bottom__title">
                Earn a $25 Statement Credit
            </p>
            <a class="c-promo-bottom__cta  c-cta-btn  c-cta-btn--red"
                href="/articles/culture-lifestyle/san-diego-comic-con-look-back-mcu-2020">
                <div class="c-cta-btn__inner">
                    <span>Learn more</span>
                </div>
            </a>
            <p class="c-promo-bottom__legal">
                Terms and Conditions Apply. Ⓒ 2020 MARVEL
            </p>
        </div>
    </div>
</section>
`