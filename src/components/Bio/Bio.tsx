import Codewars from '../Codewars//Codewars';
import bioImage from '../../assets/images/bio.jpg';
import SocialMedia from '../SocialMedia/SocialMedia';
import React from 'react';
import './_Bio.scss';
import ReactGA from 'react-ga';

const Bio = () => {
  return (
    <div className="bio">
      <img className="bio__image" src={bioImage} alt="bio" />

      <SocialMedia />
      <Codewars />
      <a
        href={`http://github.com/danlubbers`}
        aria-label="Git hub contribution graph"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          ReactGA.event({
            category: 'WebDev: GITHUB',
            action: `WebDev: Clicked Github Contribution Graph`,
          })
        }
      >
        <div className="bio__github--wrapper">
          <img
            className="bio__github-contributions"
            src="https://ghchart.rshah.org/danlubbers"
            alt="github contributions for dan lubbers"
          />
        </div>
      </a>
      <p className="bio__about-section">
        Dan Lubbers is a Full Stack Web Developer with an extensive background in Photography &
        Retouching. Lubbers got his start with Extreme Sports Photography when he was the sole
        photographer on the La Sportiva Solutions Climbing Tour in 2007. Lubbers went on to work in{' '}
        <a
          href="https://www.amazon.com/watches/s?k=watches"
          aria-label="Amazon Watches"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon&apos;s Largest Photo Studio
        </a>{' '}
        as a Digital Technician, Retoucher & Photographer for the Jewelry and Watch department. He
        was the lead retoucher for the 2018 AD campaign for{' '}
        <a
          href="https://www.tempurpedic.com/"
          aria-label="Tempurpedic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tempurpedic
        </a>
        . Wanting to add more to his career and an interest in Design and Web Development led him to
        Utah, to take a 3 month intensive Full Stack Bootcamp at{' '}
        <a
          className="devMtn"
          href="https://devmountain.com/"
          aria-label="DevMountain Bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevMountain
        </a>
        . After graduating{' '}
        <a
          className="devMtn"
          href="https://devmountain.com/"
          aria-label="DevMountain Bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevMountain
        </a>
        , Dan moved to Upstate NY where he found{' '}
        <a
          className="albanyCanCode"
          href="https://albanycancode.org/"
          aria-label="AlbanyCanCode Bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          AlbanyCanCode
        </a>{' '}
        where he was able to refine his Javascript skills even further. In May 2020, Dan started as
        a Front-End React Software Engineer with a small team building an end-to-end app for a
        Healthcare Company called Psī. A love of good coffee usually leads one to find him at local
        coffee shops or making a brew on the hatch of his vehicle while in remote locations. Other
        interests include Psychology, Philosophy, Meditation, Spirituality, hot springs and asian
        cuisine. Go connect with him on social media!{' '}
      </p>
      <p className="bio__quote">
        &quot;Life is too short not to create something with every breath we draw.&quot; ~ Maynard
        James Keenan
      </p>
    </div>
  );
};

export default Bio;
