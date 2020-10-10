import './_Codewars.scss';
import graphicHeader from '../../assets/graphics/codewars-header-graphic.png';
import codewarsLogo from '../../assets/logos/codewars-logo-small.png';
import axios from 'axios';
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
        const res = await axios.get(proxyurl + API);
        setRank(res.data.ranks.overall.name);
        setUserName(res.data.username);
        setHonor(res.data.honor);
      } catch (err) {
        setError(err);
      }
    })();
  }, [API, error]);
  return (
    <div className="App">
      <section className="codewars-wrapper">
        <div className="text-wrapper">
          <a
            href="https://www.codewars.com/users/danlubbers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <img className="graphic-header" src={graphicHeader} alt="header" />
              <div className="rank-name-wrapper">
                <h2 className="kyu">{rank && rank}</h2>
                <h2 className="username">{username}</h2>
                <h2 className="honor">{honor}</h2>{' '}
                <img className="codewars-logo" src={codewarsLogo} alt="codewars-logo" />
              </div>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
