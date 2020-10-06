export default {
  title: 'Carousel',
};

export const Carousel = () => `
<section class="c-carousel">
  <div class="c-carousel__container">
      <div class="c-carousel__content">
          <div class="c-carousel__item">
              <figure class="c-carousel__item__image">
                  <img src="img/carousel_01.jpg" alt="">
              </figure>
              <div class="c-carousel__item__content">
                  <div class="c-carousel__item__category  c-header-section">
                      <div class="c-header-section__title">Comic-Con@Home</div>
                  </div>
                  <h3 class="c-carousel__item__title">Marvel Studios in Hall H</h3>
                  <p class="c-carousel__item__description">
                      We take a look back at some of the best Marvel Studios moments from Comic-Con—in Hall H
                      and beyond!
                  </p>
                  <a class="c-carousel__item__cta  c-cta-btn  c-cta-btn--red" href="#">
                      <div class="c-cta-btn__inner">
                          <span>LOOK BACK</span>
                      </div>
                  </a>
              </div>
          </div>
      </div>
  </div>
</section>
`