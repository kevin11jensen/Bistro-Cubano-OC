import React from 'react';
import styled from 'styled-components';
import wagneryoung from '../images/WagnerYoung.jpg';

export default function AboutUs() {
    return (
        <About>
            <div className = 'about'>
                <h1>A Father and Son's Dream</h1>
                <p className = 'learn'>Learn more about our Story</p>
                <p>As a family owned, father and son restaurant we couldn’t think of a better way to share our culture. From humble beginnings of my father working night shifts at Wendys during college when he immigrated from Venezuela, to myself starting out as his busboy at the age of twelve, restaurant life has been a part of us for many years now. Our family roots and recipes trace back to both Cuba and Venezuela, giving a unique blend of Caribbean flavors. Several of our relatives who were from Venezuela would travel to Cuba for the summer and work to bring back money for our family. Over the years they learned the flavors, culture, and understanding of Cuban cuisine. Those recipes became what we would eat on a weekly basis and was a way for us as a family to come together.</p>
            </div>
            <img src = {wagneryoung} alt = 'Father and Son young' />
        </About>
    );
}

const About = styled.section `
    display: flex;
    background-color: var(--black);
    img {
        width: 70%;
    }
    .about {
        width: 40%;
        background-color: black;
        padding: 5%;
        h1 {
            font-family: var(--fontMain);
            font-size: 4rem;
            padding: 2% 2% 6% 2%;
        }
        .learn {
            font-family: var(--fontHero);
            font-size: 1.2rem;
            padding: 2%;
        }
        p {
            font-family: var(--fontBody);
            padding: 2%;
            line-height: 2rem;
            width: 80%;
        }
    }
`