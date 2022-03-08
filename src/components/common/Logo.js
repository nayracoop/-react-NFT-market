import React from 'react';
import styled from 'styled-components'
import logo from '../../img/logo.svg';

const LogoImage = styled.img `
`
const Logo = () => {
    return ( 
        <LogoImage src={logo} alt="" height="50" />
    );
};

export default Logo;