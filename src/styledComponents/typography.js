import styled from 'styled-components';
import palette from '../styledComponents/palette';

const SANS_SERIF = "'Open Sans', Helvetica, Arial, sans-serif";
const SERIF = "'Butler', Georgia, serif";

export const Heading1 = styled.h3``;

export const Heading2 = styled.h2`
  text-transform: capitalize;
`;

export const Heading3 = styled.h3``;

export const TeaserText = styled.p`
  font-family: ${SANS_SERIF};
  color: ${palette.text};
  font-size: 20px;
  line-height: 35px;
  font-weight: 400;
  margin: 20px 0;
  max-width: 700px;
`;

export const TextColumns = styled.div`
  column-count: 2;
  column-gap: 60px;
  max-width: 700px;
  margin: 60px 0;
  text-align: justify;
`;

export const P = styled.p`
  font-family: ${SANS_SERIF};
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 20px;
  color: ${palette.text};
`;
