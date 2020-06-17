import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { device } from './device';

export default function HeroNav() {
    return (
        
            <MainNav>
                <img src = {logo} alt = 'logo' />
                <div>
                    <h3>Home</h3>
                    <h3>Menu</h3>
                    <a href = '#about'><h3>About Us</h3></a>
                    <h3>Reviews</h3>
                </div>
            </MainNav>
            
        
    );
}

const MainNav = styled.nav `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 1%;
    background-color: var(--altBg);
    overflow-x: hidden;
    img {
        width: 25%;
        padding: 1%;
        @media ${device.mobileL} {
            width: 50%;
        }
    }
    div {
        display: flex;
        justify-content: space-around;
        width: 33%;
        @media ${device.tablet} {
            width: 60%;
        }
        @media ${device.mobileL} {
            display: none;
        }
        a, h3 {
            font-family: var(--fontMain);
            color: var(--white);
            font-size: 1.6rem;
            padding-top: 1%;
            text-decoration: none;
            
            &:hover {
                color: var(--red);
            }
        }
    }
`