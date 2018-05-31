import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { Container } from '../../styledComponents/layout';
import { Logo, Menu } from '../../components';

import palette from '../../styledComponents/palette';

const FooterContainer = styled.div`
  padding: 30px 0;
`;

const MenuContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
`;

const ContactContainer = styled.div`
  padding: 200px 30px;
`;

const Contact = styled.p`
  font-size: 90px;
  font-weight: 700;
  // line-height: 100px;
  color: ${palette.text};
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
      <ContactContainer>
        <a href="mailto:hello@mediasapiens.de">
          <Contact>hello@mediasapiens.de</Contact>
        </a>
        <Contact>+49 40 22817196-1</Contact>
      </ContactContainer>
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
