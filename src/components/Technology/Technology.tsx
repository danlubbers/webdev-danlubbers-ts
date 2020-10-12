import technologiesJSON from '../../Json_Templates/technologies.json';
import React, { useEffect } from 'react';
import './_Technology.scss';
import 'aos/dist/aos.css';

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
        {technologiesJSON.map((technology: { technology: string; logo: string }, index: number) => {
          return (
            <div key={index} data-aos="fade-up" data-aos-anchor-placement="center-center">
              <img
                className="logos"
                src={require(`../../assets/logos/${technology['logo']}`)}
                alt={`${technology['technology']} logo`}
              />
              <h2 className="logo-text">{technology.technology}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
