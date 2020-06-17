import React from 'react';
import styled from 'styled-components';
import wagneryoung from '../images/WagnerYoung.jpg';
import { device } from './device';

export default function AboutUs() {
    return (
        <About id = 'about'>
            <div className = 'about'>
                <h1>A Father and Son's Dream</h1>
                <p className = 'learn'>Learn more about our Story</p>
                <p className = 'learn-info'>As a family owned, father and son restaurant we couldn’t think of a better way to share our culture. From humble beginnings of my father working night shifts at Wendys during college when he immigrated from Venezuela, to myself starting out as his busboy at the age of twelve, restaurant life has been a part of us for many years now. Our family roots and recipes trace back to both Cuba and Venezuela, giving a unique blend of Caribbean flavors. Several of our relatives who were from Venezuela would travel to Cuba for the summer and work to bring back money for our family. Over the years they learned the flavors, culture, and understanding of Cuban cuisine. Those recipes became what we would eat on a weekly basis and was a way for us as a family to come together.</p>
            </div>
            <img src = {wagneryoung} alt = 'Father and Son young' />
        </About>
    );
}

const About = styled.section `
    display: flex;
    background-color: var(--black);
    img {
        width: 80%;
        background-color: var(--black);
        @media ${device.tablet} {
            height: 99%;
        }
        @media ${device.mobileL} {
            width: 100%;
        }
    }
    @media ${device.mobileL} {
        font-size: 1.6rem;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        width: 99%;
    }
    .about {
        width: 50%;
        background-color: black;
        padding: 5%;
        @media ${device.mobileL} {
            width: 99%;
        }
        h1 {
            font-family: var(--fontMain);
            font-size: 4rem;
            padding: 2% 2% 6% 2%;
            @media ${device.tablet} {
                font-size: 2rem;
            }
            @media ${device.mobileL} {
                text-align: center;
            }
        }
        .learn {
            font-family: var(--fontBody);
            font-size: 1.2rem;
            margin-left: 3%;
            font-weight: 600;
            color: rgba(255,255,255,0.5);
            border-left: 6px solid var(--red);
            letter-spacing: .3rem;
            padding: 1%;
            @media ${device.tablet} {
                font-size: 1rem;
            }
            @media ${device.mobileL} {
                text-align: center;
            }
        }
        .learn-info {
            font-family: var(--fontBody);
            padding: 4% 2% 4% 2%;
            line-height: 2rem;
            width: 90%;
            font-weight: 600;
            @media ${device.tablet} {
                font-size: 1rem;
            }
            @media ${device.mobileL} {
                text-align: center;
                padding: 2%;
                margin: 2%;
            }
        }
    }
`