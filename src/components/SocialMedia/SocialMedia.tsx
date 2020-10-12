import socialMediaJSON from '../../Json_Templates/social-media.json';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaCamera } from 'react-icons/fa';
import './_SocialMedia.scss';
import { IconType } from 'react-icons';

const SocialMedia = () => (
  <div className="social-media-wrapper">
    {socialMediaJSON.map(
      (
        media: { name: string; website: string; ['aria-label']: string; ['react-icon']: string },
        index: number,
      ) => {
        let IconComponent: IconType = FaGithub;
        switch (media['react-icon']) {
          case 'FaGithub':
            IconComponent = FaGithub;
            break;
          case 'FaLinkedin':
            IconComponent = FaLinkedin;
            break;
          case 'FaInstagram':
            IconComponent = FaInstagram;
            break;
          case 'FaCamera':
            IconComponent = FaCamera;
            break;
        }

        return (
          <div key={index} className="social-media-icon">
            <a
              href={`http://${media.website}`}
              aria-label={media['aria-label']}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent />
            </a>
          </div>
        );
      },
    )}
  </div>
);

export default SocialMedia;
