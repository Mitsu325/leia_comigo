import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  background: #ff9c00;
  padding: 0 40px;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserIcon = styled.div`
  color: #fff;
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }
`;
