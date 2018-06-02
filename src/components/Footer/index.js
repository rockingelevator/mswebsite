import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import withSizes from 'react-sizes';
import { bool } from 'prop-types';

import { Container } from '../../styledComponents/layout';
import { Logo, Menu } from '../../components';

import palette from '../../styledComponents/palette';

const FooterContainer = styled.div`
  padding: 30px 0;
`;

const MenuContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    & > ul {
      columns: 3;
    }
  }
  @media (max-width: 640px) {
    & > ul {
      columns: 2;
    }
  }
  @media (max-width: 420px) {
    & > ul {
      columns: 1;
    }
  }
`;

const ContactContainer = styled.div`
  padding: 200px 0;

  @media (max-width: 1280px) {
    padding: 150px 0;
  }

  @media (max-width: 800px) {
    padding: 150px 0;
  }

  @media (max-width: 480px) {
    padding: 120px 0;
  }
`;

const Contact = styled.p`
  font-size: 90px;
  font-weight: 700;
  line-height: 90px;
  color: ${palette.text};
  margin: 0 0 20px 0;

  @media (max-width: 1280px) {
    font-size: 60px;
    line-height: 60px;
  }

  @media (max-width: 800px) {
    font-size: 40px;
    line-height: 40px;
    margin: 0 0 10px 0;
  }

  @media (max-width: 640px) {
    font-size: 28px;
    line-height: 28px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 20px;
  }
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
    name: 'Blog',
    link: 'https://blog.mediasapiens.de/',
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

const Footer = ({ showColumns }) => (
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
        <Menu items={FOOTER_MENU_LINKS} columns={showColumns} />
      </MenuContainer>
    </Container>
  </FooterContainer>
);

Footer.propTypes = {
  showColumns: bool,
};

const mapSizesToProps = ({ width }) => ({
  showColumns: width <= 1024,
});

export default withSizes(mapSizesToProps)(Footer);
