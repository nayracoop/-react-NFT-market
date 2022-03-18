import React from 'react';
import styled from 'styled-components'
import heroBackground from '../../images/hero-bg.gif';
import heroBackgroundOverlay from '../../images/hero-bg-overlay.png';

const HeroContainer = styled.div `
    min-height: calc(90vh - 80px);
    background: #000;
    z-index: 1;
    position: relative;
    &::before {
        content: '';
        width: 100%;
        min-height: calc(90vh - 80px);
        display: block;
        background: url(${heroBackground}), url(${heroBackgroundOverlay});
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        opacity: .4;
    }
`
const HeroWrapper = styled.div `
    padding-top: 110px;
    max-width: 82.5rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
`
const LeftBlock = styled.div `
    text-align: center;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
`
const HeroTitle = styled.h2 `
    font-size: 7.5rem;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 45px;
    color: #FFF;
`
const HeroTitleRegular = styled.span `
    color: #FFF;
    display: block;
`
const HeroTitleHightlight = styled.span `
    color: #199fe8;
`
const HeroLead = styled.p `
    font-size: 30px;
    font-weight: 700;
    line-height: 1.75rem;
    margin: 1.25rem auto 50px auto;
    color: #FFF;
    max-width: 50rem;
`
const HeroBtnContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
    margin: auto;
`
const HeroButtonPrimary = styled.a `
    background: #199fe8;
    border: 1px solid #199fe8;
    color: #FFF;
    font-size: 1.125rem;
    font-weight: 600;
    padding: 16px 40px;
    margin-right: 15px;
    &:hover {
        background: #0c6c8e;
        border-color: #0c6c8e;
    }
`
const HeroButtonSecondary = styled.a `
    background: transparent;
    border: 1px solid #FFF;
    color: #FFF;
    font-size: 1.125rem;
    font-weight: 600;
    padding: 16px 40px;
    margin-right: 15px;
    &:hover {
        background: #fff;
        color: #0c6c8e;
    }
`
const RightBlock = styled.div `
    display: flex;
    justify-content: flex-start;
    text-align: left;
`
const HeroImage = styled.img `
    transform: scaleX(-1);
    right: -40rem;

`

const Hero = () => {
    return ( 
        <HeroContainer>
            <HeroWrapper>
                <LeftBlock>
                    <HeroTitle>
                        <HeroTitleRegular>
                        We think and create 
                        </HeroTitleRegular>
                        <HeroTitleHightlight>
                            generative art 
                        </HeroTitleHightlight>
                    </HeroTitle>
                    <HeroLead>
                        Are you ready for the adventure?
                    </HeroLead> 
                    <HeroBtnContainer>
                        <HeroButtonPrimary href="#">
                            Explore NFTs
                        </HeroButtonPrimary>
                        <HeroButtonSecondary href="#">
                            Learn more
                        </HeroButtonSecondary>
                    </HeroBtnContainer>
                </LeftBlock>
            </HeroWrapper>
        </HeroContainer>
    );
};

export default Hero;