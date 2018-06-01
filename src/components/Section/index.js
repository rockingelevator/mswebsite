import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { string, node } from 'prop-types';

import palette from '../../styledComponents/palette';
import {
  Heading2,
  Heading3,
  TextColumns,
} from '../../styledComponents/typography';

const SectionContainer = styled.div``;

const SectionFooter = styled.div`
  width: 100%;
  min-height: 20px;
  border-bottom: 1px dashed ${palette.border};
`;

const SectionFooterLink = styled(Link)`
  color: ${palette.fadedText};
`;

const Section = ({ title, subtitle, link, linkName, children }) => (
  <SectionContainer>
    {title && <Heading2>{title}</Heading2>}
    {subtitle && <Heading3>{subtitle}</Heading3>}
    <TextColumns>{children}</TextColumns>
    <SectionFooter>
      {link && (
        <SectionFooterLink to={link}>{linkName || 'Mehr'}</SectionFooterLink>
      )}
    </SectionFooter>
  </SectionContainer>
);

Section.propTypes = {
  title: string,
  subtitle: string,
  link: string,
  linkName: string,
  children: node,
};

export default Section;
