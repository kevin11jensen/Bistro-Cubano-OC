import React from 'react';
import styled from 'styled-components';
import { device } from './device';

export default function Footer() {
    return (
        <FooterSection>
            
            <p>© 2019 Bistro Cubano Cusine</p>
            
            
        </FooterSection>
    );
}

const FooterSection = styled.section `
    background-color: var(--altBg);
    width: 100%;
    
    overflow-x: hidden;
    position: static;
    
    p {
        text-align: center;
        font-size: 1.2rem;
        background-color: var(--altBg);
        padding: 6%;
        font-family: var(--fontBody);
        @media ${device.mobileL} {
            padding-bottom: 11%;
        }
    }
    
`