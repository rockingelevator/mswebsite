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
`;

const PrimarySection = ({ title, subtitle, children }) => (
  <PrimarySectionContainer>
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
