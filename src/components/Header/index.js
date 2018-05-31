import React from 'react';
//  import Link from 'gatsby-link';
import styled from 'styled-components';
import { string } from 'prop-types';

import palette from '../../styledComponents/palette';
import logo from '../../assets/images/logo.svg';

import { Container } from '../../styledComponents/layout';
import { Menu } from '../../components';

const HeaderContainer = styled.header`
  ${props => props.background};
  padding: 65px 30px 30px 30px;
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
      <img src={logo} alt="Mediasapiens" />
      <Menu items={[].concat(MENU_LINKS).reverse()} directionFromRight />
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
