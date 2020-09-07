import React from 'react';
import { Link } from 'react-router-dom';

import homeIcon from '../../assets/icon_home.svg';
import searchIcon from '../../assets/icon_search.svg';
import calendarIcon from '../../assets/icon_calendar.svg';

import { NavContainer, NavItem } from './styles';

const Nav: React.FC = () => {
  return (
    <NavContainer>
      <NavItem>
        <Link to="/home">
          <img src={homeIcon} alt="início" />
          <p>INÍCIO</p>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/">
          <img src={searchIcon} alt="biblioteca" />
          <p>BIBLIOTECA</p>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/">
          <img src={calendarIcon} alt="plano de leitura" />
          <p>PLANO DE LEITURA</p>
        </Link>
      </NavItem>
    </NavContainer>
  );
};

export default Nav;
