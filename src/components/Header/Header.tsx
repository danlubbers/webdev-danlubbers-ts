import Logo from '../../assets/logos/danlubbers-logo.png';
import React from 'react';
import './Header.scss';

const Header = () => (
  <div className="header">
    <img className="header-logo" src={Logo} alt="header logo" />
  </div>
);

export default Header;
