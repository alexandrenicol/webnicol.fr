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
  skills: ['Web', 'Mobile', 'Voice', 'Chatbot', 'Certified AWS Alexa Builder'],
  job: {
    current: [
      {
        title: 'Full Stack Developer | Conversational Systems Specialist',
        at: 'Bounce Technologies Limited',
        since: 1560848400,
      },
      {
        title: 'Director',
        at: 'Alex Nicol LTD',
        since: 1543795200,
      },
      {
        title: 'R&D Digital Developer',
        at: 'EDF Energy R&D UK Centre',
        since: 1433116800,
      },
    ],
    previous: 'there',
  },
  contact: 'alex@webnicol.fr',
  github: 'alexandrenicol',
  twitter: '@nicol_alexandre',
  articles: [
    'Is there any good in Tech? - 2019',
    'Chatbots: 3 years on, what have we learnt? - EDF Energy - 2018',
    'Bringing chatbots to our business - EDF Energy - 2018',
    'A Beginner\'s Guide to Chatbots and Conversational Interfaces - Heart Internet - 2017 - Published by @oliverlinberg',
    'Dites bonjour aux bots ! - 2016 (French)',
  ],
  talks: [
    'TechNova: Voice - 2019',
    'Retour sur 3 années à developper des bots ! (video) - DevFest du bout du monde (Brest, Fr) - 2019',
    'How To Innovate Like A Startup When You Are A Multinational (video) - Brighton Devops, Test, Dev Meetup - 2018',
    'The Voice Technology Revolution (video) - Technova\'s live webinar - 2018',
    'VUI Introduction - Brest.js (Brest, Fr) - 2018',
    'Chatbots 101 - Brighton Web Dev Meetup - 2018',
    'Get The Energy Talking - London Alexa Devs Meetup - 2017',
    'The Rise of The Bots - Async (Brighton) - 2017',
  ],
  stuff: [
    'Le Marchand De Glace',
    'Parachute (soon)',
    'Go AWS Lambda Router (soon)',
    'JavaScript AWS Lambda Router',
    'Brighton & Hove buses live times on Alexa Skill',
    '2018 Resolutions on Google actions',
    'Requemise',
  ],
};

console.log('Hi There!');
console.log(me);
