import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// type = interface sem conteúdo
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
