import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';

const StyledLogo = styled.img`
  width: 194px;
  height: 18px;
`;

const Logo = () => <StyledLogo src={logo} />;

export default Logo;
