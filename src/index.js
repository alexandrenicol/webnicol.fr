import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const me = {
  name: 'Alex Nicol',
  location: 'Brighton, UK',
  from: 'Brest, France',
  skills: ['Web', 'Mobile', 'Voice', 'Chatbot'],
  job: {
    current: {
      title: 'R&D Digital Developer',
      at: 'EDF Energy R&D UK Centre',
      since: 1433116800,
    },
    previous: 'there',
  },
  contact: 'alex@webnicol.fr',
  github: 'alexandrenicol',
  twitter: '@nicol_alexandre',
  articles: [
    'Chatbots: 3 years on, what have we learnt? - EDF Energy - 2018',
    'Bringing chatbots to our business - EDF Energy - 2018',
    'A Beginner\'s Guide to Chatbots and Conversational Interfaces - Heart Internet - 2017 - Published by @oliverlinberg',
    'Dites bonjour aux bots ! - 2016 (French)',
  ],
  talks: [
    'VUI Introduction - Brest.js (Brest, Fr) - 2018',
    'Chatbots 101 - Brighton Web Dev Meetup - 2018',
    'Get The Energy Talking - London Alexa Devs Meetup - 2017',
    'The Rise of The Bots - Async (Brighton) - 2017',
  ],
  stuff: [
    'Parachute (soon)',
    'Go AWS Lambda Router (soon)',
    'World Cup Schedule playground (soon)',
    'JavaScript AWS Lambda Router',
    'Brighton & Hove buses live times on Alexa Skill',
    '2018 Resolutions on Google actions',
    'Requemise',
  ],
};

console.log('Hi There!');
console.log(me);
