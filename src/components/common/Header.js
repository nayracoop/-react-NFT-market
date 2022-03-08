import React from 'react';
import styled from 'styled-components'
import Logo from './Logo'
import Nav from './Nav'

const HeaderContainer = styled.div `
    width: 100%;
    background: #000;
    position: sticky;
    top: 0;
    z-index: 2;
`
const HeaderWrapper = styled.div `
    max-width: 82.5rem;
    display: flex;
    align-items: center;
    margin: auto;
    padding: 15px 0px;
`


const Header = () => {
    return ( 
        <HeaderContainer className="pape">
            <HeaderWrapper>
                <Logo />
                <Nav />
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header;