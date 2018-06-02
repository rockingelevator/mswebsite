import React from 'react';
import styled from 'styled-components';
import { string, node, bool } from 'prop-types';

import palette from '../../styledComponents/palette';
import { Container } from '../../styledComponents/layout';
import { TeaserText, TextColumns } from '../../styledComponents/typography';

const PrimarySectionContainer = styled.div`
  background-color: ${palette.primaryBackground};
  padding-bottom: 10px;
  height: auto;
  // overflow: hidden;
  position: relative;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -120px;
`;

const ParticlesFader = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: -120px;
  background: -moz-linear-gradient(
    top,
    rgba(243, 243, 243, 0) 0%,
    rgba(243, 243, 243, 0) 50%,
    rgba(243, 243, 243, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(243, 243, 243, 0) 0%,
    rgba(243, 243, 243, 0) 50%,
    rgba(243, 243, 243, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(243, 243, 243, 0) 0%,
    rgba(243, 243, 243, 0) 50%,
    rgba(243, 243, 243, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00f3f3f3', endColorstr='#f3f3f3',GradientType=0 ); /* IE6-9 */
`;

const TeaserContainer = styled.div`
  max-width: 700px;
  padding: 60px 0 30px 0;
`;

const PrimarySection = ({ animation, title, subtitle, children }) => {
  const { dangerouslySetInnerHTML } = children.props;
  const isShortTeaser = dangerouslySetInnerHTML
    ? dangerouslySetInnerHTML.__html.length < 500
    : false;
  return (
    <PrimarySectionContainer>
      {animation && <ParticlesContainer id="particles-js" />}
      <ParticlesFader />
      <Container>
        {title && <h1>{title}</h1>}
        {subtitle && <TeaserText>{subtitle}</TeaserText>}
        {isShortTeaser && <TeaserContainer>{children}</TeaserContainer>}
        {!isShortTeaser && <TextColumns>{children}</TextColumns>}
      </Container>
    </PrimarySectionContainer>
  );
};

PrimarySection.propTypes = {
  animation: bool,
  title: string,
  subtitle: string,
  children: node,
};

export default PrimarySection;
