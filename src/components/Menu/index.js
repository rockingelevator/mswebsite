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
  display: ${props => (props.columns ? 'block' : 'inline-block')}
  float: ${props =>
    props.columns ? 'none' : props.directionFromRight ? 'right' : 'left'};
  font-size: 12px;
  line-height: 40px;
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
  @media (max-width: 640px) {
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const ExternalLink = styled.a`
  display: ${props => (props.columns ? 'block' : 'inline-block')}
  float: ${props =>
    props.columns ? 'none' : props.directionFromRight ? 'right' : 'left'};
  font-size: 12px;
  line-height: 40px;
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
  @media (max-width: 640px) {
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Menu = ({ items, directionFromRight, columns }) => {
  return (
    <MenuContainer>
      {items &&
        items.length > 0 &&
        items.map((item, i) => {
          const internal = /^\/(?!\/)/.test(item.link);
          if (internal) {
            return (
              <MenuLink
                to={item.link}
                key={`menulink_${i}`}
                directionFromRight={directionFromRight}
                columns={columns}>
                {item.name}
              </MenuLink>
            );
          }
          return (
            <ExternalLink
              href={item.link}
              key={`menulink_${i}`}
              directionFromRight={directionFromRight}
              columns={columns}>
              {item.name}
            </ExternalLink>
          );
        })}
    </MenuContainer>
  );
};

Menu.propTypes = {
  items: array,
  directionFromRight: bool,
};

export default Menu;
