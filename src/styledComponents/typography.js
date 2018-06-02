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
  padding: 30px 0 0 0;
  max-width: 700px;
  margin: 0;

  @media (max-width: 1024px) {
    padding-top: 20px;
  }

  @media (max-width: 640px) {
    padding-top: 10px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;
  }
`;

export const TextColumns = styled.div`
  column-count: 2;
  column-gap: 60px;
  max-width: 700px;
  padding: 60px 0;
  text-align: justify;

  @media (max-width: 1024px) {
    padding: 40px 0;
  }

  @media (max-width: 800px) {
    column-gap: 6%;
  }

  @media (max-width: 640px) {
    column-count: 1;
    padding: 30px 0;
  }
`;

export const P = styled.p`
  font-family: ${SANS_SERIF};
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: 20px;
  color: ${palette.text};
`;
