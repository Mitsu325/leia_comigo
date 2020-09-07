import React from 'react';

import { FooterContainer, FooterText } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        <a href="/">Políticas</a> | <a href="/">Fale Conosco</a>
        <p>Copyright© 2020 - by Team 10</p>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
