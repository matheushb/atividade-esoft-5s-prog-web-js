export const sectionsData = [
  {
    id: 'info-squirtle',
    title: 'Informações sobre Squirtle',
    img: [
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      'https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png',
    ],
    text: [
      'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle',
    ],
  },
  {
    id: 'caracteristicas',
    title: 'Características',
    text: [
      'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.',
    ],
  },
  {
    id: 'curiosidades',
    title: 'Curiosidades',
    ul: [
      'Squirtle é o Pokémon inicial mais popular da região de Kanto.',
      'Squirtle é baseado em uma tartaruga.',
      'Squirtle é um dos Pokémon iniciais de Ash Ketchum.',
    ],
  },
  {
    id: 'squirtle-article',
    title: 'Squirtle: O Amigo Aquático',
    text: [
      'Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.',
      'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.',
      'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.',
    ],
  },
  {
    id: 'recursos',
    title: 'Recursos Adicionais',
    ul: [
      {
        a: {
          text: 'Pokédex - Squirtle',
          href: 'https://www.pokemon.com/br/pokedex/squirtle',
          target: '_blank',
        },
      },
      {
        a: {
          text: 'Bulbapedia - Squirtle',
          href: 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)',
          target: '_blank',
        },
      },
    ],
  },
  {
    id: 'evolucao',
    title: 'Evoluções',
    ul: [
      {
        figure: {
          img: {
            src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
          },
          figcaption: {
            textContent: '1. Squirtle',
          },
        },
      },
      {
        figure: {
          img: {
            src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
          },
          figcaption: {
            textContent: '2. Wartortle',
          },
        },
      },
      {
        figure: {
          img: {
            src: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
          },
          figcaption: {
            textContent: '3. Blastoise',
          },
        },
      },
    ],
  },
];

export const footerData = [
  { home: { hreg: '#header', textContent: 'Voltar para o topo' } },
  {
    mailTo: {
      href: 'mailto:contato@squirtlepage.com',
      textContent: 'Contato via e-mail',
    },
  },
  {
    telefone: {
      href: 'tel:+5555555555',
      textContent: 'Telefone: (55) 5555-5555',
    },
  },
];

export const navData = [
  { text: 'Informações sobre Squirtle', anchor: 'info-squirtle' },
  { text: 'Características', anchor: 'caracteristicas' },
  { text: 'Curiosidades', anchor: 'curiosidades' },
  { text: 'Artigo sobre Squirtle', anchor: 'squirtle-article' },
  { text: 'Recursos Adicionais', anchor: 'recursos' },
  { text: 'Evolução', anchor: 'evolucao' },
];
