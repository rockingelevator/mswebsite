import styled from 'styled-components';
import Link from 'gatsby-link';

export const Button = styled(Link)`
  display: inline-block;
  padding: 10px 25px;
  background-color: #333333;
  color: white;
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  font-family: 'Open Sans';
  filter: hue-rotate(0deg);
  transition: filter 300ms linear;
  cursor: pointer;
  border-radius: 3px;
  &:focus,
  &:hover {
    background-color: #000000;
  }
`;
