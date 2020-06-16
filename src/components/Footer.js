import React from 'react';
import styled from 'styled-components';


export default function Footer() {
    return (
        <FooterSection>
            
            <p>© 2019 Bistro Cubano Cusine</p>
            
            
        </FooterSection>
    );
}

const FooterSection = styled.footer `
    background-color: var(--altBg);
    p {
        text-align: center;
    }
    
`