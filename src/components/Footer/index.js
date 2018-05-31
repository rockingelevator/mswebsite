import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { Container } from '../../styledComponents/layout';
import { Logo, Menu } from '../../components';

import palette from '../../styledComponents/palette';

const FooterContainer = styled.div`
  padding: 30px;
`;

const MenuContainer = styled.div`
  margin-top: 30px;
`;

const FOOTER_MENU_LINKS = [
  {
    name: 'Über uns',
    link: '/about',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Events',
    link: '/events',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Kontakt',
    link: '/contact',
  },
  {
    name: 'Impressum',
    link: '/impressum',
  },
  {
    name: 'Datenschutz',
    link: '/datenschutz',
  },
  {
    name: 'Karriere',
    link: '/careers',
  },
];

const Footer = () => (
  <FooterContainer>
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <MenuContainer>
        <Menu items={FOOTER_MENU_LINKS} />
      </MenuContainer>
    </Container>
  </FooterContainer>
);

export default Footer;
