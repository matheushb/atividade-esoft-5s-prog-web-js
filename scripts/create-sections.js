import { sectionsData } from './data.js';

export const createSections = main => {
  for (const section of sectionsData) {
    const sectionElementsToInsert = [];

    const sectionElement = document.createElement('section');
    if (section.id) {
      sectionElement.id = section.id;
    }

    const h2 = document.createElement('h2');
    h2.textContent = section.title;
    sectionElementsToInsert.push(h2);

    if (section.img) {
      const div = document.createElement('div');
      for (const img of section.img) {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        div.appendChild(imgElement);
      }
      sectionElementsToInsert.push(div);
    }

    if (section.text) {
      for (const text of Object.values(section.text)) {
        const p = document.createElement('p');
        p.textContent = text;
        sectionElementsToInsert.push(p);
      }
    }

    if (section.ul) {
      const ul = document.createElement('ul');
      for (const li of section.ul) {
        const liElement = document.createElement('li');

        if (typeof li != 'string') {
          for (const key of Object.keys(li)) {
            const element = document.createElement(key);
            if (key == 'figure') {
              Object.keys(li[key]).forEach(attribute => {
                const el = document.createElement(attribute);
                Object.keys(li[key][attribute]).forEach(subAtt => {
                  el[subAtt] = li[key][attribute][subAtt];
                });
                element.appendChild(el);
              });
            } else {
              Object.keys(li[key]).forEach(attribute => {
                element[attribute] = li[key][attribute];
              });
            }
            liElement.appendChild(element);
          }
        } else {
          liElement.textContent = li;
        }
        ul.appendChild(liElement);
      }
      sectionElementsToInsert.push(ul);
    }

    sectionElementsToInsert.forEach(el => {
      sectionElement.appendChild(el);
    });
    main.appendChild(sectionElement);
  }
};
