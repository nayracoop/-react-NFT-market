import React from 'react';
import styled from 'styled-components'
import NftThumbnail from './NftThumbnail'


const CollectionContainer = styled.div `
    min-height: calc(75vh - 80px);
    background: #000;
    padding-top: 110px;
    padding-bottom: 110px;
`
const CollectionWrapper = styled.div `
    max-width: 82.5rem;
    margin: 0 auto;
`
const HeaderBlock = styled.div `
    text-align: center;
    max-width: 920px;
    margin: 0 auto;
    margin-bottom: 80px;
`
const CollectionTitle = styled.h2 `
    font-size: 90px;
    font-weight: 700;
    line-height: 92px;
    color: #FFF;
    margin-bottom: 35px;
`
const CollectionLead = styled.p `
    font-size: 24px;
    line-height: 30px;
    line-height: 1.75rem;
    margin-top: 1.25rem;
    color: #dfdfdf;
`
const CollectionGallery = styled.div `
    display: flex;
    justify-content: flex-start;
    text-align: left;
`

const Collection = () => {
    return ( 
        <CollectionContainer id="collection">
            <CollectionWrapper>
                <HeaderBlock>
                    <CollectionTitle>
                        Our collection
                    </CollectionTitle>
                    <CollectionLead>
                    We’re merging realities between Digital Art and Play to Earn Gaming. Wether you’re a fan of Missions/ Quests, PVP’s, Real Life Simulations, exploring a new cinematic quality world with expansive possibilities,  or just an avid Art Collector, EGOZE is created for you. 
                    </CollectionLead> 
                </HeaderBlock>
                <CollectionGallery>
                    <NftThumbnail />
                </CollectionGallery>
            </CollectionWrapper>
        </CollectionContainer>
    );
};

export default Collection;