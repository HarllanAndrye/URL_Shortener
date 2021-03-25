import React from 'react';
import { HeaderContainer, Logo } from './styles';

import Icone from '../../assets/url-shortener-habs-logo.jpg';

function Header(props) {
  return (
    <HeaderContainer>
      <Logo src={Icone} alt='Encurtador de URL' />
      {/* <h1>Pitu</h1> */}
      <p>{props.children}</p>
    </HeaderContainer>
  )
}

export default Header;