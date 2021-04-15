import socialMediaJSON from '../../Json_Templates/social-media.json';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaCamera } from 'react-icons/fa';
import './_SocialMedia.scss';
import { IconType } from 'react-icons';
import ReactGA from 'react-ga';
const SocialMedia = () => (
  <div className="social-media-container">
    <div className="icon-wrapper">
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
            <div key={index} className="icon-wrapper__icon">
              <a
                href={`http://${media.website}`}
                aria-label={media['aria-label']}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  ReactGA.event({
                    category: 'Social Media',
                    action: `Clicked Icon Link`,
                    label: `${media.name}`,
                  })
                }
              >
                <IconComponent />
              </a>
            </div>
          );
        },
      )}
    </div>
  </div>
);

export default SocialMedia;
