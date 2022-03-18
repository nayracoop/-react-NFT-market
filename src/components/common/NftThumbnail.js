import React from 'react';
import styled from 'styled-components'

const NftContainer = styled.div `
    display: grid;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`
const NftWrapper = styled.div `
    border: 1px solid #262626;
    background: #131313;
    color: white;
    max-width: 250px;
    max-width: unset;
`
const NftImageWrapper = styled.div `
    height: 220px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`
const NftImage = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const NftInfoWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
`
const LeftBlock = styled.div `
    display: flex;
    flex-direction: column;
    margin-right: auto;
`
const AuthorName = styled.a `
    font-size: .875rem;
    margin-bottom: 5px;
`
const NftName = styled.a `
    font-size: 1rem;
    font-weight: 700
`
const NftNumber = styled.span `
`
const RightBlock = styled.div `
    margin-left: auto;
    flex-wrap: wrap;
` 
const NftPrice = styled.span `
`
const NftLeftTime = styled.span `
`
const NftFavsBlock = styled.div `
    flex-basis: 100%;
`
const NftFavsCounter = styled.span `
`

const itemNfts = [
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/blue (1).gif"),
        itemImageAlt: 'blue art 1'
    },
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/blue (2).gif"),
        itemImageAlt: 'blue art 2'
    },
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/blue (3).gif"),
        itemImageAlt: 'blue art 3'
    },
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/blue(4).gif"),
        itemImageAlt: 'purple art 1'
    },
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/purple (1).gif"),
        itemImageAlt: 'purple art 1'
    },
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/purple (2).gif"),
        itemImageAlt: 'purple art 2'
    },
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/purple(4).gif"),
        itemImageAlt: 'purple art 3'
    },
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/purple(5).gif"),
        itemImageAlt: 'red art 3'
    },
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/red (1).gif"),
        itemImageAlt: 'red art 1'
    },
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/red (2).gif"),
        itemImageAlt: 'red art 2'
    },
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/red (3).gif"),
        itemImageAlt: 'red art 3'
    },
    {
        nftAuthor: 'Kreators',
        nftName: 'Generative matter',
        nftNumber: '#25',
        nftPrice: '1.5',
        nftLeftTime: '20',
        nftFavsCounter: '17',
        itemImageSrc: require("../../images/collectionImages/pink(2).gif"),
        itemImageAlt: 'red art 3'
    }
  ]


const NftThumbnail = () => {
    return ( 
        <NftContainer>
            {itemNfts.map((itemNft) => (
                <NftWrapper>
                <NftImageWrapper>
                    <NftImage key={itemNft} src={itemNft.itemImageSrc} alt={itemNft.itemImageAlt} />
                </NftImageWrapper>
                <NftInfoWrapper>
                    <LeftBlock>
                        <AuthorName>{itemNft.nftAuthor}</AuthorName>
                        <NftName>
                            {itemNft.nftName} <NftNumber>{itemNft.nftNumber}</NftNumber>
                        </NftName>
                    </LeftBlock>
                    <RightBlock>
                        <NftPrice>{itemNft.nftPrice}</NftPrice>
                        <NftLeftTime>{itemNft.nftLeftTime}</NftLeftTime>
                    </RightBlock>
                    <NftFavsBlock>
                        <NftFavsCounter>{itemNft.nftFavsCounter} days left</NftFavsCounter>
                    </NftFavsBlock>
                </NftInfoWrapper>
            </NftWrapper>
            ))}
            
        </NftContainer>
    );
};

export default NftThumbnail;