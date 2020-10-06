import rail from './../img/rail-01.jpg';
import feed from './../img/feed-01.jpg';

export default {
  title: 'News',
};

export const Rail = () => `
<div class="rail">
  <div class="rail__container">
      <div class="rail__head">
          <div class="rail__border-top">
              <div class="rail__border-top__container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="186" height="55"
                      viewBox="0 0 186 55">
                      <path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#mask-2)"></path>
                  </svg>
              </div>
          </div>
          <h3 class="rail__title">The Hype Box</h3>
          <p class="rail__description">
              Can’t-miss news and updates from across the Marvel Universe!
          </p>
      </div>
      <div class="rail__cards">
          <div class="rail__card">
              <div class="rail__card__image">
                  <a href="#">
                      <img src=${rail} alt="">
                  </a>
              </div>
              <div class="rail__card__content">
                  <p class="rail__card__category">Games</p>
                  <p class="rail__card__title">
                      <a href="#">
                          Everything We Saw During the July 'Marvel’s Avengers' WAR TABLE Livestream
                      </a>
                  </p>
              </div>
          </div>
      </div>

      <div class="rail__border-bottom">
          <div class="rail__border-bottom__container">
              <svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55">
                  <path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#mask-2)"></path>
              </svg>
          </div>
      </div>
  </div>
</div>
`

export const Feed = () => `
<div class="feed">
  <div class="feed__container">
      <header class="feed__header c-header-section">
          <h3 class="feed__title c-header-section__title">The Latest</h3>
      </header>
      <div class="feed__cards">
          <div class="feed__card">
              <figure class="feed__card__image">
                  <img src=${feed} alt="">
              </figure>
              <div class="feed__card__content">
                  <p class="feed__card__category">Movies</p>
                  <p class="feed__card__title">
                      Marvel Studios’ ‘Ant-Man and The Wasp’ Comes to Disney+ in August
                  </p>
              </div>
              <div class="feed__card__footer">
                  <p class="feed__card__date">1 day ago</p>
              </div>
          </div>
      </div>
  </div>
</div>

`