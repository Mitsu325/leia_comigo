import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 44px;
  color: #fff;
  background: #ff9c00;
  font-weight: 700;
  border-radius: 16px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#FF9C00')};
  }
`;
