import React from 'react';
import styled from 'styled-components';
import slideshowone from '../images/slide-show1.jpg';

export default function ImageScroll() {
    return (
        <ImageScrollContainer>
            
            <img src = {slideshowone} alt = 'family out to dinner' />
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