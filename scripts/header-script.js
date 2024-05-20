export const createHeader = header => {
  const title = document.createElement('h1');
  title.textContent = 'Squirtle';
  header.appendChild(title);
  header.id = 'header';
};
