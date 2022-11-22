import CONFIG from '../../globals/config';
import 'animate.css';

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.title}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Date</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.overview}</p>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.title}"
           src="${movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${movie.vote_average}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${movie.id}">${movie.title}</a></h3>
      <p>${movie.overview}</p>
    </div>
  </div>
`;

const contentOpeningInvitation = (data) => `
<section id="first" class="cover">
    <div class="cover-top">
      <p>Undangan Pernikahan</p>
      <h1>Riza & Romi </h1>
    </div>
    <img src="../cover.png" class="img-cover"/>
    <div class="content-text">
      Kepada Yth;<br>
      Bapak/Ibu/Saudara/i
    <p class="cover_name">${data.foreign_name}</p><br>
      <a href="#/" class="btn">Buka Undangan</a>
    </div>
</section>
`;

const contentInvitation = (data, id) => `
<section id="cover" class="content">
    <div class="cover-top">
      <p>Undangan Pernikahan</p>
      <h1>Riza & Romi </h1>
    </div>
    <img src="./cover.png" class="img-cover"/>
    <div class="content-text">
      Kepada Yth;<br>
      Bapak/Ibu/Saudara/i
    <h1>${id?.replace(/%20/g, ' ')}</h1><br>
      <a href="#first" class="btn">Buka Undangan</a>
    </div>
</section>
<section id="first" class="content">
        <img src="./Intersect.png" class="content-img">
        <div class="content-text">
          <h3 class="animate__fadeInDownBig">Selamat Datang ${id?.replace(/%20/g, ' ')}</h3>
          <p>Tanpa mengurangi rasa hormat, kami memberikan kabar 
          bahagiaini dan memohon restu dari rekan sekalian 
          untuk senantiasa mendoakan kelancaran 
          acara pernikahan kami.</p>
        </div>
      </section>
      <section id="second" class="content content-second">
      <svg class="waves rotate-img-180 " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(212, 180, 122, 0.55)"/>
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(212, 180, 122, 0.45)"/>
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(212, 180, 122, 0.35)"/>
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#D4B47A"/>
      </g>
      </svg>
      <div class="profile">
        <img src="./bismillah.svg" height="100px" class="bismillah">
        <p class="text-open">Assalamu'alaikum Wr. Wb.</p>
        <p class="text-open" style="padding : 0 16px">
          Maha suci Allah yang telah menciptakan makhluk- nya berpasang-pasngan. Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang kau ciptakan diantara kami
        </p>
        <img src="./riza.png" class="content-img-profile wife">
        <div class="content-text wife">
          <h1>${data.wife.name}</h1>
          <span>Anak ${data.wife.order_to} Dari ${data.wife.father} dan ${data.wife.mother}</span>
        </div>
        <div>
        <span class="and">&</span>
        </div>
        <div>
        <img src="./romi.png" class="content-img-profile husband">
        <div class="content-text husband">
          <h1>${data.husband.name}</h1>
          <span>Anak ${data.husband.order_to} Dari ${data.husband.father} dan ${data.husband.mother}</span>
        </div>
        </div>
      </section>
      <section id="third" class="content content-second">
      <div class="profile">
      <div class="akad">
        <h1 class="text-gold">Akad Nikah</h1>
        <span class="text-desc">${data.married.date}<br>
        ${data.married.time}<br>
        ${data.married.place}</span>
      </div>
      <div class="countdate">
        <div class="card-date">
          <span class="value" id="day">0</span><br>
          <span class="time">Hari</span>
        </div>
        <div class="card-date">
          <span class="value" id="hour">0</span><br>
          <span class="time">Jam</span>
        </div>
        <div class="card-date">
          <span class="value" id="minute">0</span><br>
          <span class="time">Menit</span>
        </div>
        <div class="card-date">
          <span class="value" id="seconds">0</span><br>
          <span class="time">Detik</span>
        </div>
      </div>
      <button class="btn">Tambahkan ke Kalender</button>
      </div>
      </section>
      <section id="fourth" class="content content-second">
      <div class="gmap_canvas">
      <iframe width="100%" height="85%" id="gmap_canvas" src="${data.maps}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      <button class="btn">Petunjuk ke Lokasi</button>
      </section>
      <section id="fifth" class="content content-second">
      <div class="galery">
        <h1>Galeri</h1>
        <div class="photos">
          <img src="./2.jpg" class="photo">
          <img src="./1.jpg" class="photo">
          <img src="./3.jpg" class="photo">
        </div>
        <div class="photos-2">
          <img src="./5.jpg" class="photo">
          <img src="./6.jpg" class="photo">
        </div>
        <div class="photos">
          <img src="./2.jpg" class="photo">
          <img src="./1.jpg" class="photo">
          <img src="./3.jpg" class="photo">
        </div>
      </div>
      </section>
     `;

export {
  createMovieItemTemplate, createMovieDetailTemplate,
  contentInvitation, contentOpeningInvitation,
};
