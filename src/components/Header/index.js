import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { string } from 'prop-types';

import palette from '../../styledComponents/palette';
import { Container } from '../../styledComponents/layout';
import { Menu, Logo } from '../../components';

const HeaderContainer = styled.header`
  ${props => props.background};
  padding: 65px 0 30px 0;

  @media (max-width: 1024px) {
    padding: 40px 0 20px 0;
  }
`;

const MenuContainer = styled.ul`
  float: right;

  @media (max-width: 640px) {
    float: none;
    margin-top: 40px;
  }
`;

const MENU_LINKS = [
  {
    name: 'Über uns',
    link: '/about',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Kontakt',
    link: '/contact',
  },
];

const BACKGROUND = `background-color: ${palette.primaryBackground}`;

const Header = ({ background }) => (
  <HeaderContainer background={background}>
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <MenuContainer>
        <Menu
          items={
            window.innerWidth > 640
              ? [].concat(MENU_LINKS).reverse()
              : MENU_LINKS
          }
          directionFromRight={window.innerWidth > 640}
        />
      </MenuContainer>
    </Container>
  </HeaderContainer>
);

Header.defaultProps = {
  background: BACKGROUND,
};

Header.propTypes = {
  background: string,
};

export default Header;
