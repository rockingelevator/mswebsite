import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { string, bool } from 'prop-types';
import withSizes from 'react-sizes';

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
  margin-top: -10px;

  @media (max-width: 640px) {
    float: none;
    margin-top: 20px;
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

const Header = ({ background, isMobile }) => (
  <HeaderContainer background={background}>
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <MenuContainer>
        <Menu
          items={isMobile ? MENU_LINKS : [].concat(MENU_LINKS).reverse()}
          directionFromRight={!isMobile}
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
  isMobile: bool,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 640,
});

export default withSizes(mapSizesToProps)(Header);
