import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const links = [
    {
        linkName: 'Collections',
        linkHref: '/collection'
    },
    {
        linkName: 'Marketplace',
        linkHref: '/marketplace'
    },
    {
        linkName: 'About us',
        linkHref: '/about'
    },
    {
        linkName: 'Sign in',
        linkHref: '/sign-in'
    }
  ]

  const NavContainer = styled.nav `
  margin-left: auto;
  @media (max-width: 1024px) {
      width: 100%;
      flex-basis: 100%;
      position: absolute;
      top: 80px;
      left: 0px;
      height: calc(100vh - 80px);
      background: #303339;
  }

  @media (min-width: 1024 and max-width: 1200px) {
      width: 
      
`

const NavItemsList = styled.ul `
  display: flex;
  @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
  }
`

  const NavItem = styled.li `
    margin-right: 30px; 
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;
    &:last-of-type {
        margin-right: 0;
    }
    @media (max-width: 1024px) {
        border-bottom: 1px solid #fff;
        width: 100%;
        text-align: left;
        margin-right: 0;
    }
  `

  const NavLink =  styled(Link) `
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    color: #fff;
    &:visited {
        color: #fff;
    }
    &:hover {
        color: #199fe8;
        border-bottom: 2px solid #199fe8;
    }
    @media (max-width: 1024px) {
        border: none;
        width: 100%;
        text-align: left;
        display: block;
        padding: 20px 15px;
        &:hover {
            color: #199fe8;
            border: none;
        }
    }
`
  const Nav = () => {
    return ( 
        <NavContainer>
            <NavItemsList>
                {links.map((link) => (
                    <NavItem>
                        <NavLink to={link.linkHref}>
                            {link.linkName}
                        </NavLink>
                    </NavItem>
                    ))
                }
            </NavItemsList>
        </NavContainer>
    );
};

export default Nav;