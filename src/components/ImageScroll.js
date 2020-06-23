import React from 'react';
import styled from 'styled-components';
import slide1 from '../images/slide1.jpg';

export default function ImageScroll() {
    return (
        <ImageScrollContainer>
            
            <img src = {slide1} alt = 'family out to dinner' />
        </ImageScrollContainer>
    );
}

const ImageScrollContainer = styled.section `
    background-color: black;
    overflow-x: hidden;
    img {
        width: 100%;
    }
`