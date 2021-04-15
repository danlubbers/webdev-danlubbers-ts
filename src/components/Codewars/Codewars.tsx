import './_Codewars.scss';
import graphicHeader from '../../assets/graphics/codewars-header-graphic.png';
import codewarsLogo from '../../assets/logos/codewars-logo-small.png';
import axios from 'axios';
import ReactGA from 'react-ga';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [rank, setRank] = useState('');
  const [username, setUserName] = useState('');
  const [honor, setHonor] = useState('');
  const API = `https://www.codewars.com/api/v1/users/danlubbers`;
  const [error, setError] = useState('');
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';

  useEffect(() => {
    (async function getData() {
      try {
        const res = await axios.get(API);
        setRank(res.data.ranks.overall.name);
        setUserName(res.data.username);
        setHonor(res.data.honor);
      } catch (err) {
        setError(err);
      }
    })();
  }, [API, error]);

  return (
    <section className="codewars">
      <div className="codewars__content">
        <a
          href="https://www.codewars.com/users/danlubbers/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            ReactGA.event({
              category: 'Codewars',
              action: 'User Clicked external link to go to Codewars Website',
            });
          }}
        >
          <span className="span">
            <img className="graphic-header" src={graphicHeader} alt="header" />
            <div className="stats">
              <h2 className="stats__text stats__kyu">{rank && rank}</h2>
              <h2 className="stats__text stats__username">{username}</h2>
              <h2 className="stats__text stats__honor">{honor}</h2>{' '}
              <img className="stats__codewars-logo" src={codewarsLogo} alt="codewars-logo" />
            </div>
          </span>
        </a>
      </div>
    </section>
  );
};

export default App;
