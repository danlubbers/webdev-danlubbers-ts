import 'aos/dist/aos.css';
// Logos
import gitLogo from '../../assets/logos/git-logo.png';
import githubLogo from '../../assets/logos/github-logo.svg';
import reactLogo from '../../assets/logos/react-icon.png';
import html5Logo from '../../assets/logos/html5-logo.png';
import css3Logo from '../../assets/logos/css3-logo.png';
import sassLogo from '../../assets/logos/sass-logo.svg';
import JSLogo from '../../assets/logos/js-logo.png';
import typescriptLogo from '../../assets/logos/ts-logo-256.png';
import materialUILogo from '../../assets/logos/material-ui-logo.svg';
import reduxLogo from '../../assets/logos/redux-logo.png';
import gatsbyLogo from '../../assets/logos/gatsby-logo.png';
import nodeLogo from '../../assets/logos/node-logo.png';
import postgresLogo from '../../assets/logos/postgres-logo.png';
import postman from '../../assets/logos/postman.png';
import express from '../../assets/logos/expressjslogo.png';
import jest from '../../assets/logos/jest.svg';
import captureOneLogo from '../../assets/logos/capture-one-logo.png';
import LRLogo from '../../assets/logos/lr-logo.png';
import PSLogo from '../../assets/logos/ps-logo.png';
import XDLogo from '../../assets/logos/adobe-xd-logo.png';
import heliconLogo from '../../assets/logos/helicon-logo.png';
import digitalOceanLogo from '../../assets/logos/digital-ocean.png';
import nginxLogo from '../../assets/logos/nginx-logo.png';
import netlifyLogo from '../../assets/logos/netlify-logo.png';
import React, { useEffect } from 'react';
import './_Technology.scss';

const Technology = () => {
  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';
    const AOS = isBrowser ? require('aos') : undefined;

    AOS.init({ duration: 1000 });
  });

  return (
    <div className="skillset-content">
      <div className="full-stack-container">
        <h1 className="technology-text">TECHNOLOGIES</h1>
      </div>
      <div className="logo-container">
        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <img className="logos" src={gitLogo} alt="git logo" />
          <h2 className="logo-text">GIT</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="100">
          <img className="logos" src={githubLogo} alt="github logo" />
          <h2 className="logo-text">GITHUB</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="200">
          <img className="logos" src={reactLogo} alt="react logo" />
          <h2 className="logo-text">REACT</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="200">
          <img className="logos" src={gatsbyLogo} alt="gatsby logo" />
          <h2 className="logo-text">Gatsby</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="300">
          <img className="logos" src={html5Logo} alt="html5 logo" />
          <h2 className="logo-text">HTML5</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="400">
          <img className="logos" src={css3Logo} alt="css3 logo" />
          <h2 className="logo-text">CSS3</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <img className="logos" src={sassLogo} alt="sass logo" />
          <h2 className="logo-text">SASS</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="100">
          <img className="logos" src={JSLogo} alt="JS logo" />
          <h2 className="logo-text">JAVASCRIPT</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="100">
          <img className="logos" src={typescriptLogo} alt="TS logo" />
          <h2 className="logo-text">TYPESCRIPT</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="100">
          <img className="logos" src={materialUILogo} alt="Material UI logo" />
          <h2 className="logo-text">Material UI</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="200">
          <img className="logos" src={reduxLogo} alt="redux logo" />
          <h2 className="logo-text">REDUX</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="300">
          <img className="logos" src={nodeLogo} alt="node logo" />
          <h2 className="logo-text">NODE</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="300">
          <img className="logos" src={nginxLogo} alt="nginx logo" />
          <h2 className="logo-text">NGINX</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="300">
          <img className="logos" src={digitalOceanLogo} alt="digital ocean logo" />
          <h2 className="logo-text">DIGITAL OCEAN</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="300">
          <img className="logos" src={netlifyLogo} alt="netlify logo" />
          <h2 className="logo-text">NETLIFY</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="400">
          <img className="logos" src={postgresLogo} alt="postgres logo" />
          <h2 className="logo-text">POSTGRESQL</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="400">
          <img className="logos" src={postman} alt="postman logo" />
          <h2 className="logo-text">POSTMAN</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="400">
          <img className="logos" src={express} alt="express logo" />
          <h2 className="logo-text">EXPRESS</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="400">
          <img className="logos" src={jest} alt="jest logo" />
          <h2 className="logo-text">JEST</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <img className="logos" src={captureOneLogo} alt="captureOne logo" />
          <h2 className="logo-text">CAPTUREONE</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="100">
          <img className="logos" src={heliconLogo} alt="Helicon Focus logo" />
          <h2 className="logo-text">HELICON FOCUS</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="200">
          <img className="logos" src={LRLogo} alt="Adobe Lightroom logo" />
          <h2 className="logo-text">ADOBE LIGHTROOM</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="300">
          <img className="logos" src={PSLogo} alt="Adobe Photoshop logo" />
          <h2 className="logo-text">ADOBE PHOTOSHOP</h2>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="300">
          <img className="logos" src={XDLogo} alt="Adobe XD logo" />
          <h2 className="logo-text">ADOBE XD</h2>
        </div>
      </div>
    </div>
  );
};

export default Technology;
