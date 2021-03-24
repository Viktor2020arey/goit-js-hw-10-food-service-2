import menuElm from './menu.json';
import menuTml from './templates/templates.hbs';

import './css/styles.css';

const galleryEl = document.querySelector('.js-menu');

const marcup = menuTml(menuElm);

galleryEl.insertAdjacentHTML('beforeend', marcup);
