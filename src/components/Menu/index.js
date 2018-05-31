import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { array, bool } from 'prop-types';

import palette from '../../styledComponents/palette';

const MenuContainer = styled.ul`
  height: auto;
  overflow: hidden;
`;

const MenuLink = styled(Link)`
  float: ${props => (props.directionFromRight ? 'right' : 'left')};
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${palette.text};
  ${props =>
    props.directionFromRight ? 'margin-left: 40px;' : 'margin-right: 40px;'};
  &:focus,
  &:hover,
  &:active {
    color: ${palette.fadedText};
  }
`;

const Menu = ({ items, directionFromRight }) => (
  <MenuContainer>
    {items &&
      items.length > 0 &&
      items.map((item, i) => {
        return (
          <MenuLink
            to={item.link}
            key={`menulink_${i}`}
            directionFromRight={directionFromRight}>
            {item.name}
          </MenuLink>
        );
      })}
  </MenuContainer>
);

Menu.propTypes = {
  items: array,
  directionFromRight: bool,
};

export default Menu;
