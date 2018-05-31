import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { Container } from '../../styledComponents/layout';
import { Logo, Menu } from '../../components';

import palette from '../../styledComponents/palette';

const FooterContainer = styled.div`
  padding: 30px;
`;

const Footer = () => (
  <FooterContainer>
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <Menu />
    </Container>
  </FooterContainer>
);

export default Footer;
