import React from 'react';
import styled from 'styled-components'

const NftContainer = styled.div `
    min-height: 100vh;
    background: #1d1e24;
    background: #000;
    padding-top: 20px;
`
const NftWrapper = styled.div `
    background: #131313;
    border: 1px solid #262626;
    color: white;
    display: flex;
    max-width: 75vw;
    max-height: 460px;
    margin: auto;
    overflow: hidden;
`
const NftImageWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`
const NftImage = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const NftInfoWrapper = styled.div `
    display: flex;
    padding: 0px 15px;
`
const LeftBlock = styled.div `
    width: 35vw;
    margin-right: auto;

`
const AuthorName = styled.a `
    font-size: 1.25rem;
    margin-bottom: 10px;
`
const NftName = styled.a `
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
`
const NftNumber = styled.span `
`
const RightBlock = styled.div `
    width: 65vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 50px;
`
const NftPriceTitle = styled.span `
    font-size: 1.25rem;
`
const NftPrice = styled.span `
    font-size: 2.5rem;
`
const NftLeftTime = styled.span `
    margin-top: auto;
`
const NftFavsCounter = styled.span `
    display: none;
`

const NFTBtnPrimary = styled.a `
    background: #199fe8;
    border: 1px solid #199fe8;
    color: #FFF;
    font-size: 1.125rem;
    font-weight: 700;
    padding: 16px 40px;
    margin-right: 15px;
    &:hover {
        background: #0c6c8e;
        border-color: #0c6c8e;
    }
`
const NFTBtnContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
`
const NFTBtnSecondary = styled.a `
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


const Nft = () => {
    return ( 
        <NftContainer>
            <NftWrapper>
                <LeftBlock>
                    <NftImageWrapper>
                        <NftImage src={require("../../img/collectionImages/blue (2).gif")} alt="" />
                    </NftImageWrapper>
                </LeftBlock>
                <RightBlock>
                    <AuthorName>Kreators</AuthorName>
                    <NftName>
                        Generative matter <NftNumber>#25</NftNumber>
                    </NftName>
                    <NftFavsCounter>17 favourites</NftFavsCounter>
                    <NftLeftTime>The sale ends in 20 days</NftLeftTime>
                    <NftPriceTitle>Current price</NftPriceTitle>
                    <NftPrice>1.5 ETH</NftPrice>
                    <NFTBtnContainer>
                        <NFTBtnPrimary href="#">
                            Buy now
                        </NFTBtnPrimary>
                        <NFTBtnSecondary href="#">
                            Make offer
                        </NFTBtnSecondary>
                    </NFTBtnContainer>
                </RightBlock>
            </NftWrapper>
        </NftContainer>
    );
};

export default Nft;