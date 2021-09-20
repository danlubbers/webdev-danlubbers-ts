import SEO from '../components/SEO/SEO';
import Header from '../components/Header/Header';
import Bio from '../components/Bio/Bio';
import Technology from '../components/Technology/Technology';
import Projects from '../components/Projects/Projects';
import config from '../../gatsby-config.js';
import React from 'react';
import './index.scss';
import ReactGA from 'react-ga';

ReactGA.initialize(config.plugins[2].options.trackingId);

const IndexPage = () => (
  <div className="app-wrapper">
    {ReactGA.event({
      category: 'WebDev: Homescreen',
      action: 'User landed on WebDev homepage',
    })}
    <SEO />

    <Header />
    <Bio />
    <Technology />
    <Projects />
  </div>
);

export default IndexPage;
