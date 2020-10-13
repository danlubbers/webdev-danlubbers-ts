import Codewars from '../Codewars//Codewars';
import bioImage from '../../assets/images/bio.jpg';
import SocialMedia from '../SocialMedia/SocialMedia';
import React from 'react';
import './_Bio.scss';

const Bio = () => {
  return (
    <div className="bio-container">
      <img className="bio-image" src={bioImage} alt="bio" />

      <SocialMedia />

      <Codewars />
      <p className="about-section">
        Dan Lubbers is a Full Stack Web Developer with an extensive background in Photography &
        Retouching. Lubbers got his start with Extreme Sports Photography when he was the sole
        photographer on the La Sportiva Solutions Climbing Tour in 2007 and began shooting for
        Extreme Sports Editorials and various outdoor companies. Lubbers went on to work in{' '}
        <a
          href="https://www.amazon.com/watches/s?k=watches"
          aria-label="Amazon Watches"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon&apos;s Largest Photo Studio
        </a>{' '}
        photographing and retouching for the Jewelry and Watch department. He was the lead retoucher
        for the 2018 AD campaign for{' '}
        <a
          href="https://www.tempurpedic.com/"
          aria-label="Tempurpedic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tempurpedic
        </a>
        . Wanting to add more to his career and an interest in Design and Coding led him to Utah, to
        take a 3 month intensive Web Development Bootcamp at{' '}
        <a
          className="devMtn"
          href="https://devmountain.com/"
          aria-label="DevMountain Bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevMountain
        </a>
        . After graduating DevMountain, Dan moved to Upstate NY where he found{' '}
        <a
          className="albanyCanCode"
          href="https://albanycancode.org/"
          aria-label="AlbanyCanCode Bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          AlbanyCanCode
        </a>{' '}
        and has been refining his Javascript skills even further. In May 2020, Dan started as a
        Front-End React Software Engineer on a small team building an end-to-end app for a
        Healthcare Company called Psī. A love of good coffee usually leads one to find him at local
        coffee shops working diligently on his work either at home or when traveling.{' '}
      </p>
      <p className="about-section quote">
        &quot;Life is too short not to create something with every breath we draw.&quot; ~ Maynard
        James Keenan
      </p>
    </div>
  );
};

export default Bio;
