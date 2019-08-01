import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="highlight">
          <span className="k">const</span> <span className="n">me</span> = {'{'}
          <br />
          <span className="n">&nbsp; name:</span> <span className="l">'Alex Nicol'</span>,<br />
          <span className="n">&nbsp; location:</span> <span className="l">'Brighton, UK'</span>,<br />
          <span className="n">&nbsp; from:</span> <span className="l">'Brest, FR'</span>,<br />
          <span className="n">&nbsp; skills:</span> [<span className="l">'Web'</span>, <span className="l">'Mobile'</span>, <span className="l">'Voice'</span>, <span className="l">'Chatbot'</span>, <span className="l">'Certified AWS Alexa Builder'</span>],<br />
          <span className="n">&nbsp; jobs:</span> {'{'}
          <br />
          <span className="n">&nbsp; &nbsp; current:</span> {'['}<br />
          <span className="n">&nbsp; &nbsp; &nbsp; </span> {'{'}<br />
          <span className="n">&nbsp; &nbsp; &nbsp; &nbsp; title:</span> <span className="l">'Full Stack Developer | Conversational Systems Specialist'</span>,<br />
          <span className="n">&nbsp; &nbsp; &nbsp; &nbsp; at:</span> <span className="l">'Bounce Technologies Limited'</span>,<br />
          <span className="n">&nbsp; &nbsp; &nbsp; &nbsp; since:</span> <span className="mi">1560848400</span>,<br />
          <span className="n">&nbsp; &nbsp; &nbsp; </span> {'},'},<br />
          <span className="n">&nbsp; &nbsp; &nbsp; </span> {'{'}<br />
          <span className="n">&nbsp; &nbsp; &nbsp; &nbsp; title:</span> <span className="l">'Director'</span>,<br />
          <span className="n">&nbsp; &nbsp; &nbsp; &nbsp; at:</span> <span className="l">'Alex Nicol LTD'</span>,<br />
          <span className="n">&nbsp; &nbsp; &nbsp; &nbsp; since:</span> <span className="mi">1543795200</span>,<br />
          <span className="n">&nbsp; &nbsp; &nbsp; </span> {'},'},<br />
          <span className="n">&nbsp; &nbsp; &nbsp; </span> {'{'}<br />
          <span className="n">&nbsp; &nbsp; &nbsp; &nbsp; title:</span> <span className="l">'R&amp;D Digital Developer'</span>,<br />
          <span className="n">&nbsp; &nbsp; &nbsp; &nbsp; at:</span> <span className="l">'EDF Energy R&amp;D UK Centre'</span>,<br />
          <span className="n">&nbsp; &nbsp; &nbsp; &nbsp; since:</span> <span className="mi">1433116800</span>,<br />
          <span className="n">&nbsp; &nbsp; &nbsp; </span> {'},'},<br />
          <span className="n">&nbsp; &nbsp; </span> {']'},<br />
          <span className="n">&nbsp; &nbsp; previous:</span>{' '}
          <span className="l">
            '<a href="https://linkedin.com/in/alexnicol" target="_blank">
              there
            </a>'
          </span>
          ,
          <br />
          <span className="n">&nbsp; </span> {'}'},<br />
          <span className="n">&nbsp; contact:</span>{' '}
          <span className="l">
            '<a href="mailto:alex@webnicol.fr">alex@webnicol.fr</a>'
          </span>
          ,
          <br />
          <span className="n">&nbsp; github:</span>
          <span className="l">
            '<a href="https://github.com/alexandrenicol" target="_blank">
              alexandrenicol
            </a>'
          </span>
          ,
          <br />
          <span className="n">&nbsp; twitter:</span>
          <span className="l">
            '<a href="https://twitter.com/nicol_alexandre" target="_blank">
              @nicol_alexandre
            </a>'
          </span>
          ,
          <br />
          <span className="n">&nbsp; articles:</span> {'['}
          <br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://www.edfenergy.com/about/energy-innovation/innovation-blog/research-development-chatbots-lessons-learned" target="_blank">
              Chatbots: 3 years on, what have we learnt?
            </a>{' '}
            - EDF Energy - 2018'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://www.edfenergy.com/about/energy-innovation/innovation-blog/research-development-chatbots" target="_blank">
              Bringing chatbots to our business
            </a>{' '}
            - EDF Energy - 2018'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://www.heartinternet.uk/blog/beginners-guide-chatbots-conversational-interfaces/" target="_blank">
              A Beginner\'s Guide to Chatbots and Conversational Interfaces
            </a>{' '}
            - Heart Internet - 2017 - Published by{' '}
            <a href="https://twitter.com/oliverlindberg" target="_blank">
              @oliverlindberg
            </a>'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://medium.com/@nicol_alexandre/dites-bonjour-aux-bots-f6afd4b68e2d" target="_blank">
              Dites bonjour aux bots !
            </a>{' '}
            - 2016 (French)'
          </span>,<br />
          <span className="n">&nbsp; </span> {']'},<br />
          <span className="n">&nbsp; talks:</span> {'['}
          <br />
          <span className="l">
            &nbsp; &nbsp; 'TechNova: Voice - 2019'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://www.youtube.com/watch?v=vcVttSm3e8k" target="_blank">
              Retour sur 3 années à developper des bots !
            </a>{' '}
            - DevFest du bout du monde (Brest, Fr) - 2019'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://www.youtube.com/watch?v=CAFny-2QXbA" target="_blank">
              How To Innovate Like A Startup When You Are A Multinational
            </a>{' '}
            - Brighton Devops, Test, Dev Meetup - 2018'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://marketforce.wavecast.io/technova/readying-the-voice-technology-revolution" target="_blank">
              The Voice Technology Revolution
            </a>{' '}
            - Technova's live webinar - 2018'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://voice2018.webnicol.fr" target="_blank">
              VUI Introduction
            </a>{' '}
            - Brest.js (Brest, Fr) - 2018'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://bot2018.webnicol.fr" target="_blank">
              Chatbots 101
            </a>{' '}
            - Brighton Web Dev Meetup - 2018'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://www.meetup.com/London-Alexa-Devs/events/239181169/" target="_blank">
              Get The Energy Talking
            </a>{' '}
            London Alexa Devs Meetup - 2017'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://riseofthebots.webnicol.fr/" target="_blank">
              The Rise of The Bots
            </a>{' '}
            - Async (Brighton) - 2017'
          </span>,<br />
          <span className="n">&nbsp; </span> {']'},<br />
          <span className="n">&nbsp; stuff:</span> {'['}
          <br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://github.com/alexandrenicol/lemarchanddeglace" target="_blank">
              Le Marchand De Glace
            </a>'
          </span>,<br />
          <span className="l">&nbsp; &nbsp; 'Parachute (soon)'</span>,<br />
          <span className="l">&nbsp; &nbsp; 'Go AWS Lambda Router (soon)</span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://alexandrenicol.github.io/aws-lambda-router-wn/" target="_blank">
              JavaScript AWS Lambda Router
            </a>'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://www.amazon.co.uk/Alexandre-Nicol-Seagulls-Buses/dp/B01N2UF9BK" target="_blank">
              Brighton &amp; Hove buses live times on Alexa Skill
            </a>'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://assistant.google.com/u/2/services/a/uid/0000003daed71c62?hl=en&source=web" target="_blank">
              2018 Resolutions on Google actions
            </a>'
          </span>,<br />
          <span className="l">
            &nbsp; &nbsp; '<a href="https://github.com/alexandrenicol/requemise" target="_blank">
              Requemise
            </a>'
          </span>,<br />
          <span className="n">&nbsp; </span> {']'},<br />
          {'}'}
          <br />
          <br />
          <span className="k2">console</span>.<span className="f">log</span>(<span className="n">me</span>);
          <br />
        </p>
      </div>
    );
  }
}

export default App;
