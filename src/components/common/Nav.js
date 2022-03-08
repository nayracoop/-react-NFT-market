import React from 'react';
import styled from 'styled-components'

const Links = styled.nav `
    margin-left: auto;
`

const links = [
    {
        linkName: 'Home',
        linkHref: '/home'
    },
    {
        linkName: 'Our collection',
        linkHref: '/#collection'
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
        linkName: 'Contact',
        linkHref: '/contact'
    }
  ]

  const Link = styled.a `
    margin-right: 30px; 
    font-size: 1.35rem;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    color: #fff;
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;
    &:visited {
        color: #fff;
    }
    &:hover {
        color: #199fe8;
        border-bottom: 2px solid #199fe8;
    }

`
  const Nav = () => {
    return ( 
        <Links>
        {links.map((link) => (
            <Link href={link.linkHref}>
                {link.linkName}
            </Link>
            ))
        }
        </Links>
    );
};

export default Nav;