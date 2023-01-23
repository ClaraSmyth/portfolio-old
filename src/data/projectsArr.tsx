import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiVite,
} from 'react-icons/si';

import portfolioDesktop from '../assets/portfolio-desktop.webp';
import portfolioMobile from '../assets/portfolio-mobile.webp';

import shoppingCartDesktop from '../assets/shopping-cart-desktop.webp';
import shoppingCartMobile from '../assets/shopping-cart-mobile.webp';

import memoryGameDesktop from '../assets/memory-game-desktop.webp';
import memoryGameMobile from '../assets/memory-game-mobile.webp';

import cvAppDesktop from '../assets/cv-app-desktop.webp';
import cvAppMobile from '../assets/cv-app-mobile.webp';

import battleshipDesktop from '../assets/battleship-desktop.webp';
import battleshipMobile from '../assets/battleship-mobile.webp';

import weatherAppDesktop from '../assets/weather-app-desktop.webp';
import weatherAppMobile from '../assets/weather-app-mobile.webp';

import todoAppDesktop from '../assets/todo-app-desktop.webp';
import todoAppMobile from '../assets/todo-app-mobile.webp';

const projectsArr = [
  {
    title: 'Portfolio',
    desc: 'This portfolio website. Built with Vite/React and tailwindcss, also has custom animations using the framer motion animation library.',
    demoLink: 'https://clarasmyth.github.io/portfolio',
    codeLink: 'https://github.com/ClaraSmyth/portfolio',
    desktopImage: portfolioDesktop,
    mobileImage: portfolioMobile,
    icons: [
      <SiVite key={'Vite'} />,
      <SiReact key={'React'} />,
      <SiTypescript key={'TypeScript'} />,
      <SiTailwindcss key={'Tailwind'} />,
    ],
  },
  {
    title: 'Game Store',
    desc: 'A fake game store with a shopping cart. Users can search for any game. Gets game data from the RAWG game database API.',
    demoLink: 'https://clarasmyth.github.io/shopping-cart',
    codeLink: 'https://github.com/ClaraSmyth/shopping-cart',
    desktopImage: shoppingCartDesktop,
    mobileImage: shoppingCartMobile,
    icons: [<SiReact key={'React'} />, <SiTypescript key={'TypeScript'} />, <SiTailwindcss key={'Tailwind'} />],
  },
  {
    title: 'Memory Game',
    desc: 'A One Piece memory game where you try not to select the same character more than once.',
    demoLink: 'https://clarasmyth.github.io/memory-game/',
    codeLink: 'https://github.com/ClaraSmyth/memory-game',
    desktopImage: memoryGameDesktop,
    mobileImage: memoryGameMobile,
    icons: [<SiReact key={'React'} />, <SiSass key={'Sass'} />],
  },
  {
    title: 'CV Builder',
    desc: 'A CV builder application. Users can create a customised CV with optional picture upload and ability to download the finished CV.',
    demoLink: 'https://clarasmyth.github.io/cv-application/',
    codeLink: 'https://github.com/ClaraSmyth/cv-application',
    desktopImage: cvAppDesktop,
    mobileImage: cvAppMobile,
    icons: [<SiReact key={'React'} />, <SiSass key={'Sass'} />],
  },
  {
    title: 'Battleship',
    desc: 'A classic battleship game. Users can play against a relatively smart AI.',
    demoLink: 'https://clarasmyth.github.io/battleship/',
    codeLink: 'https://github.com/ClaraSmyth/battleship',
    desktopImage: battleshipDesktop,
    mobileImage: battleshipMobile,
    icons: [
      <SiHtml5 key={'Html'} />,
      <SiSass key={'Sass'} />,
      <SiJavascript key={'JavaScript'} />,
      <SiWebpack key={'Webpack'} />,
      <SiJest key={'Jest'} />,
    ],
  },
  {
    title: 'Weather App',
    desc: 'A weather application built with the Open Weather API. Users can search for any locations weather and also save up to 8 locations.',
    demoLink: 'https://clarasmyth.github.io/weather-app/',
    codeLink: 'https://github.com/ClaraSmyth/weather-app',
    desktopImage: weatherAppDesktop,
    mobileImage: weatherAppMobile,
    icons: [
      <SiHtml5 key={'Html'} />,
      <SiSass key={'Sass'} />,
      <SiJavascript key={'JavaScript'} />,
      <SiWebpack key={'Webpack'} />,
    ],
  },
  {
    title: 'Todo List',
    desc: 'A todo list application where users can create todos and projects and sort them by importance. Completed and Deleted todos or projects are also tracked.',
    demoLink: 'https://clarasmyth.github.io/todo-list/',
    codeLink: 'https://github.com/ClaraSmyth/todo-list',
    desktopImage: todoAppDesktop,
    mobileImage: todoAppMobile,
    icons: [
      <SiHtml5 key={'Html'} />,
      <SiCss3 key={'Css3'} />,
      <SiJavascript key={'JavaScript'} />,
      <SiWebpack key={'Webpack'} />,
    ],
  },
];

export default projectsArr;
