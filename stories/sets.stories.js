import logo from './../img/marvel-unlimited.png';
import background from './../img/marvel-unlimited-background.jpg';

import item from './../img/marvel-unlimited-01.jpg';

export default {
  title: 'Sets'
}

export const SetsBackground = () => `
<section class="marvel-unlimited  sets">
  <div class="sets__hero">
      <div class="sets__background">
          <figure class="sets__background__container">
              <div class="sets__background__image"
                  style="background-image: url(${background});">
              </div>
          </figure>
      </div>
      <div class="sets__content">
          <div class="sets__content__container">
              <figure class="marvel-unlimited__logo">
                  <img src=${logo} alt="">
              </figure>
              <header class="c-header-section">
                  <h3 class="c-header-section__title marvel-unlimited__title">Available Now</h3>
              </header>
              <div class="sets__title">New on Marvel Unlimited</div>
              <div class="sets__description">
                  Read these plus 27,000+ digital comics for $9.99 a month!
              </div>
              <a href="#" class="c-cta-btn c-cta-btn--light">
                  <div class="c-cta-btn__inner">
                      <span>Get Marvel Unlimited</span>
                  </div>
              </a>
          </div>
      </div>
  </div>
</section>
`

export const SetsCard = () => `
<section class="marvel-unlimited  sets">
  <div class="sets__cards">
      <div class="sets__cards__container">
          <div class="sets__card__item">
              <figure class="marvel-unlimited__card__image">
                  <img src=${item} alt="">
              </figure>
              <div class="sets__card__title">Iron Man 2020 (2020) #1</div>
              <p class="marvel-unlimited__card__footer">2020</p>
          </div>
          <div class="sets__card__item">
              <figure class="marvel-unlimited__card__image">
                  <img src=${item} alt="">
              </figure>
              <div class="sets__card__title">Marvel's Black Widow Prelude (2020) #1</div>
              <p class="marvel-unlimited__card__footer">2020</p>
          </div>
          <div class="sets__card__item">
              <figure class="marvel-unlimited__card__image">
                  <img src=${item} alt="">
              </figure>
              <div class="sets__card__title">Marvel's Spider-Man: The Black Cat Strikes (2020) #1</div>
              <p class="marvel-unlimited__card__footer">2020</p>
          </div>
          <div class="sets__card__item">
              <figure class="marvel-unlimited__card__image">
                  <img src=${item} alt="">
              </figure>
              <div class="sets__card__title">Valkyrie: Jane Foster (2019) #7</div>
              <p class="marvel-unlimited__card__footer">2020</p>
          </div>
          <div class="sets__card__item">
              <figure class="marvel-unlimited__card__image">
                  <img src=${item} alt="">
              </figure>
              <div class="sets__card__title">Avengers (2018) #29</div>
              <p class="marvel-unlimited__card__footer">2020</p>
          </div>
          <div class="sets__card__item">
              <figure class="marvel-unlimited__card__image">
                  <img src=${item} alt="">
              </figure>
              <div class="sets__card__title">Runaways (2017) #29</div>
              <p class="marvel-unlimited__card__footer">2020</p>
          </div>
          <div class="sets__card__item">
              <figure class="marvel-unlimited__card__image">
                  <img src=${item} alt="">
              </figure>
              <div class="sets__card__title">Revenge of the Cosmic Ghost Rider (2019) #2</div>
              <p class="marvel-unlimited__card__footer">2020</p>
          </div>
          <div class="sets__card__item">
              <figure class="marvel-unlimited__card__image">
                  <img src=${item} alt="">
              </figure>
              <div class="sets__card__title">Ruins Of Ravencroft: Sabretooth (2020) #1</div>
              <p class="marvel-unlimited__card__footer">2020</p>
          </div>
          <div class="sets__card__item">
              <figure class="marvel-unlimited__card__image">
                  <img src=${item} alt="">
              </figure>
              <div class="sets__card__title">Venom: The End (2020) #1</div>
              <p class="marvel-unlimited__card__footer">2020</p>
          </div>
      </div>
  </div>
</section>
`