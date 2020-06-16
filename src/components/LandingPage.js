import React from 'react';
import styled from 'styled-components';

import NavBar from './Navbar';
import HeroNav from './HeroNav';
import Hero from './Hero';
import MiddleSection from './MiddleSection';
import AboutUs from './About';
import ImageScroll from './ImageScroll';
import ChefRecommends from './ChefRecommends';
// import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';

export default function LandingPage() {
    return (
            <MainContainer>
                <NavBar />
                <HeroNav />
                <Hero />
                <MiddleSection />
                <AboutUs />
                <ImageScroll />
                <ChefRecommends />
                {/* <Reviews /> */}
                <Contact />
                <Footer />
            </MainContainer>
    );
}


const MainContainer = styled.div `
    background-color: var(--bg);
    height: 100vh;
`