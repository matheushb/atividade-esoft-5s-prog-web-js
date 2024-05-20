import { createHeader } from './header-script.js';
import { createNav } from './nav-script.js';
import { createFooter } from './create-footer.js';
import { createSections } from './create-sections.js';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const nav = document.querySelector('nav');

  createHeader(header);
  createNav(nav);
  createFooter(footer);
  createSections(main);
});
