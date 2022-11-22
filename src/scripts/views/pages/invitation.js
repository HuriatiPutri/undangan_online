import data from '../../data/Data.json';
import UrlParser from '../../routes/url-parser';
import { contentInvitation } from '../templates/template-creator';

const Invitation = {
  async render() {
    return `
    <div id="container-section"></div>
    <div class="bottomNav">
      <div>
          <a href="#cover">
              <i class="fas fa-book-open"></i>
              <span>cover</span>
          </a>
      </div>
      <div>
          <a href="#first">
              <i class="fas fa-home"></i>
              <span>Opening</span>
          </a>
      </div>
      <div>
          <a href="#second">
              <i class="fas fa-user-friends"></i>
              <span>Mempelai</span>
          </a>
      </div>
      <div>
          <a href="#third">
              <i class="fas fa-calendar-day"></i>
              <span>Tanggal</span>
          </a>
      </div>
      <div>
          <a href="#fourth">
              <i class="fas fa-map-marker-alt"></i>
              <span>Lokasi</span>
          </a>
      </div>
      <div>
          <a href="#fifth">
              <i class="fas fa-images"></i>
              <span>Galeri</span>
          </a>
      </div>
    </div>
    
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // const data = await TheMovieDbSource.detailMovie(url.id);
    console.log('url', url.id);
    let name = localStorage.getItem('name');
    if (name == null || (url.id !== null && name !== url.id)) {
      localStorage.setItem('name', url.id);
      name = url.id;
    }
    console.log('urlName', name);
    // const name = localStorage.getItem('name');
    const moviesContainer = document.querySelector('#container-section');
    moviesContainer.innerHTML = contentInvitation(data, name);
    const countDownDate = new Date(data.date).getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('day').innerHTML = `${days}`;
      document.getElementById('hour').innerHTML = `${hours}`;
      document.getElementById('minute').innerHTML = `${minutes}`;
      document.getElementById('seconds').innerHTML = `${seconds}`;

      if (distance < 0) {
        clearInterval(x);
        document.getElementById('day').innerHTML = '0';
        document.getElementById('hour').innerHTML = '0';
        document.getElementById('minute').innerHTML = '0';
        document.getElementById('seconds').innerHTML = '0';
      }
    }, 1000);
  },
};

export default Invitation;
