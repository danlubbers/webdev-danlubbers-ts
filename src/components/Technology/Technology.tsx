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
    <>
      <div className="technology-container">
        <h1 className="technology-container__text">TECHNOLOGIES</h1>
      </div>
      <div className="logo-container">
        {technologiesJSON.map((technology: { technology: string; logo: string }, index: number) => {
          return (
            <div key={index} data-aos="fade-up" data-aos-anchor-placement="center-center">
              <img
                className="logo-container__logos"
                src={require(`../../assets/logos/${technology['logo']}`)}
                alt={`${technology['technology']} logo`}
              />
              <h2 className="logo-container__logo-text">{technology.technology}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Technology;
