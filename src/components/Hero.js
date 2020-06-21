import React from 'react';
import styled from 'styled-components';
import cocktails from '../images/CocktailsCoverOne.jpg';
import { device } from './device';

export default function Hero() {
    return (
        <HeroContainer>
            <h2>Authentic Cuban</h2>
            <h1>FOOD & DRINKS</h1>
            <button>MENU</button>

            
            <a href = 'https://www.google.com/maps/place/Bistro+Cubano/@45.3580982,-122.6102385,17z/data=!3m1!4b1!4m5!3m4!1s0x5495714b8a7416ff:0xe020ef100f678240!8m2!3d45.3580982!4d-122.6080498'><i className = "fas fa-map-marker-alt"></i>  709 Main Street Suite 101, Oregon City, OR</a>
        </HeroContainer>
    );
}

const HeroContainer = styled.div `
    background-image: url(${cocktails});
    background-repeat: no-repeat;
    
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10% 1% 1% 1%;
    overflow-x: hidden;
    @media ${device.mobileL} {
        height: 55vh;
    }
    h2 {
        font-family: var(--fontMain);
        font-size: 4rem;
        font-style: italicize;
        color: var(--white);
        margin: 2% 2% 1% 2%;
        @media ${device.tablet} {
            text-align: center;
        }
        @media ${device.mobileL} {
            font-size: 1.6rem;
        }
    }
    h1 {
        font-family: var(--fontHero);
        font-size: 5rem;
        color: var(--white);
        margin: 2%;
        text-align: center;
        letter-spacing: .3rem;
        @media ${device.mobileL} {
            font-size: 3rem;
            margin-bottom: 11%;
        }
    }
    button {
        font-family: var(--fontHero);
        background: none;
        border: 1px solid var(--red);
        color: var(--white);
        padding: 1% 3%;
        font-size: 1.6rem;
        margin: 2% 2% 4% 2%;
        @media ${device.tablet} {
            font-size: 1rem;
            padding: 5% 8%;
            margin: 6% 0 11% 0;
        }
        @media ${device.mobileL} {
            font-size: 1rem;
            padding: 5% 8%;
            margin: 6% 0 11% 0;
        }
        &:hover {
            background-color: var(--red);
            transition-duration: .5s;
        }
    }
    a {
        font-family: var(--fontHero);
        color: var(--white);
        text-decoration: none;
        display: flex;
        justify-content: space-evenly;
        width: 27%;
        margin-bottom: 1%;
        @media ${device.tablet} {
            width: 90%;
        }
        @media ${device.mobileL} {
            font-size: .8rem;
            width: 90%;
            margin: 11% 0 3% 0;
        }
        i {
            color: var(--red);
        }
    }
`