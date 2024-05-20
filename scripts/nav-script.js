import { navData } from './data.js';

export const createNav = nav => {
  const unorderedList = document.createElement('ul');

  navData.forEach(item => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = `#${item.anchor}`;
    anchor.textContent = item.text;
    listItem.appendChild(anchor);
    unorderedList.appendChild(listItem);
  });
  nav.appendChild(unorderedList);
};
