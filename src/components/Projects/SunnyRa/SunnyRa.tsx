import SunnyRaImage from '../../../assets/images/sunny-ra-website-apple-devices-2019.png';
import React from 'react';
import './_SunnyRa.scss';

const SunnyRa = () => {
  return (
    <>
      <h1 className="sunny-project-text project-text">CLIENT PORTFOLIO SITE</h1>
      <h2 className="sunny-text text">ARTIST SUNNY RA</h2>
      <p className="sunny-tech tech">
        Tech used: React | HTML | Sass | Javascript | Redux | React Helmet | PostgresSQL | Digital
        Ocean | Google Analytics
      </p>
      <section>
        <h3>DETAILS OF PROJECT :</h3>
        <p>
          *UPDATE* Refactored code Aug. 2019 to cut out 75% of static code and converted it over to
          a SQL database and hosting on Digital Ocean.{' '}
        </p>
        <p>
          Client/Artist, Sunny Ra wanted a complete redesign of her portfolio site. I created the
          wireframe and designed the layout and color scheme. I photographed her portrait for the
          &apos;About&apos; section. I then built her site using Reactjs. I made the site fully
          responsive using Media Queries in SASS. I used React Helmet so google would be able to
          crawl her site searching for keywords helping SEO (Seach Engine Optimization). I added
          Google Analytics so Sunny can track her traffic going to her new site.
        </p>
        <a
          href="https://github.com/danlubbers/sunny-ra.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB REPO
        </a>
        <div className="screenshots">
          <a
            className="project-screenshot"
            href="http://www.sunny-ra.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="sunny-promo-image"
              src={SunnyRaImage}
              alt="sunny ra portfolio site shown on different devices"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default SunnyRa;
