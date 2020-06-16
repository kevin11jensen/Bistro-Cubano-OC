import React from 'react';
import styled from 'styled-components';

import NavBar from './Navbar';
import HeroNav from './HeroNav';

export default function LandingPage() {
    return (
            <MainContainer>
                <NavBar />
                <HeroNav />
            </MainContainer>
    );
}


const MainContainer = styled.div `
    background-color: var(--bg);
    height: 100vh;
`