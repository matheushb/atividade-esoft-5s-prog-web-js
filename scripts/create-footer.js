import { footerData } from './data.js';

export const createFooter = footer => {
  const copyright = document.createElement('p');
  copyright.textContent = `© ${new Date().getUTCFullYear()} Página do Pokémon Squirtle. Todos os direitos reservados.`;

  footer.appendChild(copyright);

  for (const data of footerData) {
    const anchor = document.createElement('a');
    anchor.textContent = Object.values(data)[0].textContent;
    anchor.href = Object.values(data)[0].href;
    footer.appendChild(anchor);
  }
};
