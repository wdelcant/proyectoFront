import '../scss/style.scss';

import { setupCounter } from './components/counter.js';

document.querySelector('#app').innerHTML = `
  <h1>Contador</h1>
  <button id="counter"></button>
`;

setupCounter(document.querySelector('#counter'));
