import Logo from '../../assets/logos/danlubbers_logo_#A52A25_outlined.svg';
import React from 'react';
import './_Header.scss';

const Header = () => (
  <div className="header">
    <img className="header__logo" src={Logo} alt="header logo" />
  </div>
);

export default Header;
