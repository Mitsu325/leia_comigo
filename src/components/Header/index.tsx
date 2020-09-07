import React from 'react';

import logoImg from '../../assets/logo_header.png';
import usernameImg from '../../assets/icon_user.png';

import { HeaderContainer, UserIcon } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="leia comigo" />

      <UserIcon>
        <img src={usernameImg} alt="P" />
        <p>Pedro</p>
      </UserIcon>
    </HeaderContainer>
  );
};

export default Header;
