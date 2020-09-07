import styled from 'styled-components';
import { shade } from 'polished';

import loginBackgroundImg from '../../assets/login_background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${loginBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  form {
    margin: 60px 0 20px;
    width: 400px;
    text-align: center;
  }

  h2 {
    color: #8dc63f;
    font-size: 20px;
    margin: 40px 0 20px;
  }
`;

export const LinkContainer = styled.div`
  width: 400px;

  display: flex;
  justify-content: space-between;

  a {
    color: #8dc63f;
    font-weight: 700;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#8dc63f')};
    }
  }
`;

export const OptionContainer = styled.div`
  width: 400px;

  display: flex;
  justify-content: space-around;
`;
