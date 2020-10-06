
export default {
  title: 'Navigation',
};


export const NavigationDesktop = () => `

<header class="header">
<nav class="nav-desktop">
  <ul class="nav-desktop__list">
      <li class="nav-desktop__item  js-itemNav">
          <a class="nav-desktop__link" href="#">Videos</a>
          <div class="nav-desktop__submenu  js-submenu">
              <h1>Submenu Videos</h1>
          </div>
      </li>
      <li class="nav-desktop__item  js-itemNav">
          <a class="nav-desktop__link" href="#">Characters</a>
          <div class="nav-desktop__submenu  js-submenu">
              <h1>Submenu Characters</h1>
          </div>
      </li>
      <li class="nav-desktop__item  js-itemNav">
          <a class="nav-desktop__link" href="#">Comics</a>
          <div class="nav-desktop__submenu  js-submenu">
              <h1>Submenu Comics</h1>
          </div>
      </li>
      <li class="nav-desktop__item  js-itemNav">
          <a class="nav-desktop__link" href="#">Movies</a>
          <div class="nav-desktop__submenu  js-submenu">
              <h1>Submenu Movies</h1>
          </div>
      </li>
      <li class="nav-desktop__item  js-itemNav">
          <a class="nav-desktop__link" href="#">Tv Shows</a>
          <div class="nav-desktop__submenu  js-submenu">
              <h1>Submenu Tv Shows</h1>
          </div>
      </li>
      <li class="nav-desktop__item  js-itemNav">
          <a class="nav-desktop__link" href="#">Games</a>
          <div class="nav-desktop__submenu  js-submenu">
              <h1>Submenu Games</h1>
          </div>
      </li>
      <li class="nav-desktop__item  js-itemNav">
          <a class="nav-desktop__link" href="#">News</a>
          <div class="nav-desktop__submenu  js-submenu">
              <h1>Submenu News</h1>
          </div>
      </li>
      <li class="nav-desktop__item  js-itemNav">
          <a class="nav-desktop__link" href="#">More</a>
          <div class="nav-desktop__submenu  js-submenu">
              <h1>Submenu More</h1>
          </div>
      </li>
  </ul>

</nav>

</header>
`


export const NavigationMobile = () => `
<header class="header">
<nav class="nav-mobile js-navMobile is-open">
    <section class="nav-mobile__container">
        <section class="navigation__options">

            <div class="menu-nav">
                <a href="#" class="nav-close  js-closeNav" aria-label="close navigation">X</a>
                <ul class="menu-nav__list">
                    <li>
                        <a class="menu-nav__item" href="#">
                            Videos
                            <span class="icon-svg" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16"
                                    viewBox="0 0 11 16">
                                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                                </svg>
                            </span>
                        </a>

                        <div class="secundary-menu-nav">
                            <a href="#">
                                <div>Videos</div>
                            </a>

                            <nav class="menu-nav__links">
                                <ul>
                                    <li><a href="#">Trailer & extras</a></li>
                                    <li><a href="#">Digital series</a></li>
                                    <li><a href="#">All video</a></li>
                                </ul>
                            </nav>

                            <div class="menu-nav__secondary">
                                <p>Our Shows</p>
                                <nav>
                                    <ul>
                                        <li><a href="#">Earth's Mightiest Show</a></li>
                                        <li><a href="#">This Week in Marvel</a></li>
                                        <li><a href="#">Women of Marvel</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a class="menu-nav__item" href="#">
                            Characters
                            <span class="icon-svg" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16"
                                    viewBox="0 0 11 16">
                                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                                </svg>
                            </span>
                        </a>

                        <div class="secundary-menu-nav">
                            <a href="#">
                                <div>Characters</div>
                            </a>

                            <nav class="menu-nav__links">
                                <ul>
                                    <li><a href="#">All Characters</a></li>
                                    <li><a href="#">Teams & Groups</a></li>
                                    <li><a href="#">Explore All</a></li>
                                </ul>
                            </nav>
                        </div>
                    </li>

                    <li>
                        <a class="menu-nav__item" href="#">
                            Comics
                            <span class="icon-svg" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16"
                                    viewBox="0 0 11 16">
                                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                                </svg>
                            </span>
                        </a>

                        <div class="secundary-menu-nav">
                            <a href="#">
                                <div>Comics</div>
                            </a>

                            <nav class="menu-nav__links">
                                <ul>
                                    <li><a href="#">Release Calendar</a></li>
                                    <li><a href="#">Marvel Unlimited</a></li>
                                    <li><a href="#">Shop Digital Comics</a></li>
                                    <li><a href="#">Reading Lists</a></li>
                                    <li><a href="#">Print Subscriptions</a></li>
                                    <li><a href="#">All Comics</a></li>
                                </ul>
                            </nav>

                            <div class="menu-nav__secondary">
                                <p>Browse By</p>
                                <nav>
                                    <ul>
                                        <li><a href="#">Series</a></li>
                                        <li><a href="#">Character</a></li>
                                        <li><a href="#">Creator</a></li>
                                        <li><a href="#">Event</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a class="menu-nav__item" href="#">
                            Movies
                            <span class="icon-svg" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16"
                                    viewBox="0 0 11 16">
                                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                                </svg>
                            </span>
                        </a>

                        <div class="secundary-menu-nav">
                            <a href="#">
                                <div>Movies</div>
                            </a>

                            <nav class="menu-nav__links">
                                <ul>
                                    <li><a href="#">Black Widow</a></li>
                                    <li><a href="#">Avengers: Endgame</a></li>
                                    <li><a href="#">Captain Marvel </a></li>
                                    <li><a href="#">See All Movies</a></li>
                                    <li><a href="#">Disney+</a></li>
                                </ul>
                            </nav>
                        </div>
                    </li>

                    <li>
                        <a class="menu-nav__item" href="#">
                            TV Shows
                            <span class="icon-svg" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16"
                                    viewBox="0 0 11 16">
                                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                                </svg>
                            </span>
                        </a>

                        <div class="secundary-menu-nav">
                            <a href="#">
                                <div>TV Shows</div>
                            </a>

                            <nav class="menu-nav__links">
                                <ul>
                                    <li><a href="#">Marvel's Runaways | Season 3</a></li>
                                    <li><a href="#">Marvel's Hero Project | Season 1</a></li>
                                    <li><a href="#">Marvel Rising | Season 1</a></li>
                                    <li><a href="#">See All TV Shows</a></li>
                                    <li><a href="#">Disney+</a></li>
                                </ul>
                            </nav>
                        </div>
                    </li>

                    <li>
                        <a class="menu-nav__item" href="#">
                            Games
                            <span class="icon-svg" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16"
                                    viewBox="0 0 11 16">
                                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                                </svg>
                            </span>
                        </a>

                        <div class="secundary-menu-nav">
                            <a href="#">
                                <div>Games</div>
                            </a>

                            <nav class="menu-nav__links">
                                <ul>
                                    <li><a href="#">Marvel Ultimate Alliance 3</a></li>
                                    <li><a href="#">Marvel's Iron Man VR</a></li>
                                    <li><a href="#">Marvel Contest of Champions</a></li>
                                    <li><a href="#">See all Games</a></li>
                                </ul>
                            </nav>
                        </div>
                    </li>

                    <li>
                        <a class="menu-nav__item" href="#">
                            News
                            <span class="icon-svg" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16"
                                    viewBox="0 0 11 16">
                                    <path fill="none" d="M-.851-3L9.232 8-2.75 21.071"></path>
                                </svg>
                            </span>
                        </a>

                        <div class="secundary-menu-nav">
                            <a href="#">
                                <div>News</div>
                            </a>

                            <nav class="menu-nav__links">
                                <ul>
                                    <li><a href="#">Latest News</a></li>
                                    <li><a href="#">All News</a></li>
                                </ul>
                            </nav>

                            <div class="menu-nav__secondary">
                                <p>Search By</p>
                                <nav>
                                    <ul>
                                        <li><a href="#">Movies</a></li>
                                        <li><a href="#">Comics</a></li>
                                        <li><a href="#">TV Shows</a></li>
                                        <li><a href="#">Games</a></li>
                                        <li><a href="#">Digital Series</a></li>
                                        <li><a href="#">Culture & Lifestyle</a></li>
                                        <li><a href="#">Podcasts</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a class="menu-nav__item" href="#">Culture & Lifestyle</a>
                    </li>

                    <li>
                        <a class="menu-nav__item" href="#">Podcast</a>
                    </li>

                    <li>
                        <a class="menu-nav__item" href="#">Shop</a>
                    </li>

                    <li>
                        <a class="menu-nav__item" href="#">Marvel Mastercard®</a>
                    </li>
                </ul>
            </div>

            <div class="user-menu">
                <a href="#">
                    <div class="menu-nav__title">Marvel Insider</div>
                </a>
                <nav>
                    <ul>
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#">Join</a></li>
                    </ul>
                </nav>
            </div>

            <div class="social">
                <a href="#">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path fill-rule="evenodd"
                                d="M9.426 17.647H.974A.974.974 0 0 1 0 16.673V.974C0 .436.436 0 .974 0h15.7c.537 0 .973.436.973.974v15.699a.974.974 0 0 1-.974.974h-4.497v-6.834h2.294l.343-2.663h-2.637v-1.7c0-.772.214-1.297 1.32-1.297h1.41V2.77a18.853 18.853 0 0 0-2.055-.105c-2.033 0-3.425 1.241-3.425 3.52V8.15h-2.3v2.663h2.3v6.834z">
                            </path>
                        </svg>
                    </span>
                </a>
                <a href="#">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15">
                            <path fill-rule="evenodd"
                                d="M17.647 1.74a7.072 7.072 0 0 1-2.079.585A3.704 3.704 0 0 0 17.16.272a7.13 7.13 0 0 1-2.3.9A3.57 3.57 0 0 0 12.217 0C10.22 0 8.598 1.662 8.598 3.712c0 .291.031.574.093.846-3.009-.155-5.676-1.632-7.463-3.88a3.78 3.78 0 0 0-.49 1.868c0 1.287.64 2.424 1.611 3.09a3.555 3.555 0 0 1-1.64-.463v.045c0 1.8 1.248 3.3 2.905 3.64-.304.088-.624.131-.954.131-.233 0-.461-.022-.682-.066.461 1.475 1.798 2.549 3.382 2.577A7.149 7.149 0 0 1 0 13.04a10.08 10.08 0 0 0 5.55 1.666c6.66 0 10.3-5.656 10.3-10.562 0-.162-.002-.323-.008-.482a7.43 7.43 0 0 0 1.805-1.921">
                            </path>
                        </svg>
                    </span>
                </a>
                <a href="#">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path fill-rule="evenodd"
                                d="M15.441 15.993H2.206a.552.552 0 0 1-.552-.552V7.17H3.86c-.287.414-.384 1.185-.384 1.675 0 2.953 2.408 5.356 5.368 5.356 2.96 0 5.368-2.403 5.368-5.356 0-.49-.069-1.25-.425-1.675h2.206v8.272a.552.552 0 0 1-.552.552M8.844 5.458a3.39 3.39 0 0 1 3.394 3.386 3.39 3.39 0 0 1-3.394 3.386A3.39 3.39 0 0 1 5.45 8.844a3.39 3.39 0 0 1 3.393-3.386m4.391-3.252h1.655c.304 0 .551.247.551.551v1.655a.552.552 0 0 1-.551.551h-1.655a.552.552 0 0 1-.551-.551V2.757c0-.304.247-.551.551-.551M15.55 0H2.098A2.095 2.095 0 0 0 0 2.093v13.461c0 1.156.94 2.093 2.098 2.093h13.451a2.095 2.095 0 0 0 2.098-2.093V2.093C17.647.937 16.707 0 15.549 0">
                            </path>
                        </svg>
                    </span>
                </a>
                <a href="#">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18">
                            <path fill-rule="evenodd"
                                d="M8.535 14.5c-1.532.038-1.83-1-1.842-1.751V7.217h3.844v-2.69h-3.83V0H3.904a.147.147 0 0 0-.138.133C3.602 1.518 2.904 3.949 0 4.922v2.295h1.937v5.806c0 1.988 1.58 4.812 5.749 4.745 1.407-.022 2.969-.569 3.314-1.04l-.92-2.535c-.356.158-1.037.295-1.545.307z">
                            </path>
                        </svg>
                    </span>
                </a>
                <a href="#">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15">
                            <path fill-rule="evenodd"
                                d="M8.109 9.73l-.001-5.679 5.522 2.85-5.521 2.83zm12.124-6.663s-.2-1.393-.812-2.006c-.778-.806-1.649-.81-2.048-.856C14.513 0 10.223 0 10.223 0h-.009s-4.29 0-7.15.205c-.4.046-1.27.05-2.048.856-.612.613-.812 2.006-.812 2.006S0 4.703 0 6.338v1.534c0 1.636.204 3.272.204 3.272s.2 1.392.812 2.006c.778.805 1.8.78 2.254.864 1.635.155 6.949.203 6.949.203s4.294-.006 7.154-.21c.4-.048 1.27-.052 2.048-.857.612-.614.812-2.006.812-2.006s.204-1.636.204-3.272V6.338c0-1.635-.204-3.271-.204-3.271z">
                            </path>
                        </svg>
                    </span>
                </a>

            </div>

            <div class="promo">
                <div>
                    <a href="#">
                        <div>
                            <figure>
                                <img src="img/nav-logos-insider.png" srcset="img/nav-logos-insider.png" alt="">
                            </figure>
                        </div>
                        <div>
                            <h3>Marvel Insider</h3>
                            <h4>Get rewarded for being a Marvel Fan</h4>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <div>
                            <figure>
                                <img src="img/marvel_mastercard_promo-268x118_0-nav-flyout-v4.png"
                                    srcset="img/marvel_mastercard_promo-268x118_0-nav-flyout-v4.png" alt="">
                            </figure>
                        </div>
                        <div>
                            <h3>Marvel Mastercard®</h3>
                            <h4>6 Card Designs—Unlimited Cashback</h4>
                        </div>
                    </a>
                </div>
            </div>

        </section>


    </section>
</nav>
</header>
`