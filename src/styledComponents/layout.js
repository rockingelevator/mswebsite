import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 30px;
  overflow: hidden;
  z-index: 10;

  @media (max-width: 1280px) {
    padding: 0 5%;
  }

  @media (max-width: 640px) {
    padding: 0 10%;
  }
`;
