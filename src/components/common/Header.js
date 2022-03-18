import React from 'react';
import styled from 'styled-components'
import Logo from './Logo'
import Nav from './Nav'
const lightIconToggler = require('../../images/icons/icon_toggler.svg')
const darkIconToggler = require('../../images/icons/icon_toggler_dark.svg')
const iconTogglerClose = require('../../images/icons/icon_toggler_close.svg')

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
    @media (max-width: 1024px) {
        flex-wrap: wrap;
        padding-left: 15px;
    }
`
const NavToggler = styled.button`
    width: 32px;
    height: 30px;
    margin-left: auto;
    background: none;
    border: 0;
    box-shadow: 0;
    cursor: pointer;
    @media (min-width: 1280px) {
        display: none;
    }
`
const NavTogglerIcon = styled.img`
    width: 32px;
    height: 30px;
`
const NavTogglerClose = styled.button`
    width: 32px;
    height: 30px;
    margin-left: auto;
    background: none;
    border: 0;
    box-shadow: 0;
    cursor: pointer;
    @media (min-width: 1280px) {
        display: none;
    }
`
const NavTogglerCloseIcon = styled.img`
    width: auto;
    height: 30px;
    margin-left: auto;
`

const Header = () => {
    return ( 
        <HeaderContainer>
            <HeaderWrapper>
                <Logo />
                <NavToggler>
                    <NavTogglerIcon src={darkIconToggler.default} />
                </NavToggler>
                <NavTogglerClose>
                    <NavTogglerCloseIcon src={iconTogglerClose.default} />
                </NavTogglerClose>
                <Nav />
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header;