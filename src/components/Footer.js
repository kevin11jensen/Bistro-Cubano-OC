import React from 'react';
import styled from 'styled-components';


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
    height: 2vh;
    p {
        text-align: center;
        font-size: 1.2rem;
        background-color: var(--altBg);
        padding: 3%;
        
        font-family: var(--fontBody);
    }
    
`