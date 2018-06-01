import React from 'react';
import styled from 'styled-components';
import { string, node } from 'prop-types';

import palette from '../../styledComponents/palette';
import { Container } from '../../styledComponents/layout';
import {
  Heading1,
  TeaserText,
  TextColumns,
} from '../../styledComponents/typography';

const PrimarySectionContainer = styled.div`
  background-color: ${palette.primaryBackground};
  padding-bottom: 10px;
  height: auto;
  // overflow: hidden;
  position: relative;
`;

const DotsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -120px;
`;

const DotsAnimation = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

const PrimarySection = ({ title, subtitle, children }) => (
  <PrimarySectionContainer>
    <DotsWrapper id="dotswrapper">
      <DotsAnimation id="dots" width="800" height="800" />
    </DotsWrapper>
    <Container>
      {title && <Heading1>{title}</Heading1>}
      {subtitle && <TeaserText>{subtitle}</TeaserText>}
      <TextColumns>{children}</TextColumns>
    </Container>
  </PrimarySectionContainer>
);

PrimarySection.propTypes = {
  title: string,
  subtitle: string,
  children: node,
};

export default PrimarySection;
