import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaCamera } from 'react-icons/fa';
import './_SocialMedia.scss';

const SocialMedia = () => (
  <div className="social-media-container-nested">
    <div className="social-media">
      <div className="github">
        <a
          href="http://github.com/danlubbers"
          aria-label="github danlubbers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="linkedin">
        <a
          href="http://linkedin.com/in/danlubbers"
          aria-label="inkedin danlubbers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="instagram">
        <a
          href="http://instagram.com/danlubbers"
          aria-label="instagram danlubber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="camera">
        <a
          href="http://danlubbersphotographs.com"
          aria-label="dan lubbers photographs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCamera />
        </a>
      </div>
    </div>
  </div>
);

export default SocialMedia;
