import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import facebookImg from '../../assets/facebook.png';
import gmailImg from '../../assets/gmail.png';

import {
  Container,
  Background,
  Content,
  LinkContainer,
  OptionContainer,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <Input name="username" icon={FiUser} placeholder="Nome do usuário" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Link to="/home">
            <Button type="submit">Logar</Button>
          </Link>
        </form>

        <LinkContainer>
          <a href="/">Esqueci como entrar</a>
          <a href="/">Primeiro acesso?</a>
        </LinkContainer>

        <h2>Ou logar com </h2>

        <OptionContainer>
          <a href="/">
            <img src={facebookImg} alt="Facebook" />
          </a>
          <a href="/">
            <img src={gmailImg} alt="Gmail" />
          </a>
        </OptionContainer>
      </Content>
    </Container>
  );
};

export default Login;
