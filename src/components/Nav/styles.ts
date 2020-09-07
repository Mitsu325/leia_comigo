import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  height: 90px;
  background: #fff;
  box-shadow: 2px 0px 4px #999999;
  padding: 32px 40px;

  position: absolute;
  top: 64px;
  left: 0;

  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  color: #706456;
  font-size: 22px;
  font-weight: bold;
  margin-right: 90px;

  a {
    color: #706456;
    text-decoration: none;

    display: flex;
    align-items: center;

    &:hover {
      color: #ff9c00;
    }
  }

  img {
    margin-right: 8px;
  }
`;
