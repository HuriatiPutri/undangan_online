import data from '../../data/Data.json';
import UrlParser from '../../routes/url-parser';
import { contentOpeningInvitation } from '../templates/template-creator';

const Cover = {
  async render() {
    return `
    <div id="container-section"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // const data = await TheMovieDbSource.detailMovie(url.id);
    console.log('id', url?.id);
    const moviesContainer = document.querySelector('#container-section');
    moviesContainer.innerHTML = contentOpeningInvitation(data);
  },
};

export default Cover;
