import 'regenerator-runtime';
import './src/styles/style.css';
import './src/styles/responsive.css';
import App from './src/scripts/views/app';

const app = new App({
  // button: document.querySelector('#hamburgerButton'),
  // drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});
